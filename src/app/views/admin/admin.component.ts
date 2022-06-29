import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { User } from '../../_models';
import { AdminService, MissionService } from '../../_services';
import { first } from 'rxjs/operators';
import { Observable, empty } from 'rxjs';
import { NgbActiveModal, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Title } from '@angular/platform-browser';
declare var $;

class Person {
  adminId: number;
  firstName: string;
  lastName: string;
  data: any[];
}

class DataTablesResponse {
  data: any[];
  // draw: number;
  // recordsFiltered: number;
  totalRecords: number;
}
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  persons: Person[];
  pageNo: number;
  pageSize: number;
  sortOrderId: number;
  sortFieldName: string;
  searchText: string;
  columnName: {};
  sortArray: {};
  dataSaved = false;
  userForm: any;
  allUsers: Observable<User[]>;
  userIdUpdate = null;
  massage = null;
  closeResult: string;
  displayPopup = false;
  adminID: string;
  success: any;
  @ViewChild(DataTableDirective) dtElement: DataTableDirective;
  dtTrigger: Subject<any> = new Subject();
  firstTime = 1;
  startRowCount = 0;
  userStatusId = (localStorage.getItem('adminUserStatusId')) ? localStorage.getItem('adminUserStatusId') : '3';
  private dsData: any;
  constructor(
    private titleService: Title,
    private http: HttpClient,
    private adminService: AdminService,
    private modalService: NgbModal,
    public modal: NgbActiveModal,
    public _router: Router,
    public _location: Location,
    private missionService: MissionService
  ) {
    this.missionService.announceMission('Admin');
  }
  public _refreshNeeded$ = new Subject<void>();

  ngOnInit(): void {
    this.getAdminList();
  }

  public getAdminList() {
    this.titleService.setTitle('Admin');
    const that = this;
    this.success = localStorage.getItem('success');

    if (this.success == null) {
      this.displayPopup = true;
    }
    localStorage.removeItem('success');
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      serverSide: true,
      processing: true,
      // scrollY: "350px",
      // scrollX: false,
      // paging: true,
      // retrieve: true,
      ajax: (dataTablesParameters: any, callback) => {
        this.pageNo = Math.round(dataTablesParameters.start + dataTablesParameters.length) / (dataTablesParameters.length);
        this.pageSize = dataTablesParameters.length;
        this.searchText = dataTablesParameters.search.value;
        this.columnName = ["", "name","emailaddress", "createdDateTime"];
        // console.log(dataTablesParameters);
        this.startRowCount = dataTablesParameters.start;
        this.sortFieldName = (this.firstTime == 1) ? 'createdDateTime' : this.columnName[dataTablesParameters.order[0].column];
        if (dataTablesParameters.order[0].dir == 'asc') {
          this.sortOrderId = 1;
        } else if (dataTablesParameters.order[0].dir == 'desc') {
          this.sortOrderId = 2;
        } else {
          this.sortOrderId = 1;
        }
        this.sortOrderId = (this.columnName[dataTablesParameters.order[0].column] == '') ? 3 : this.sortOrderId;
        // console.log(this.sortFieldName);
        this.firstTime = 2;
        this.adminService.getAll(this.pageNo, this.pageSize, this.sortOrderId, this.sortFieldName, this.searchText, Number(this.userStatusId))
          .pipe(first())
          .subscribe(

            resp => {
              console.log(resp + ' dfdf');
              that.persons = resp.records;
              callback({
                recordsTotal: resp.totalRecords,
                recordsFiltered: resp.totalRecords,
                data: []
              });
            },
            error => {

            });
      },
      order: [[3, 'desc']],
      columns: [{ orderable: false }, { data: 'name' },{ orderable: false }, { data: 'createdDateTime' }, { orderable: false }]
    };
    setTimeout(() => {
      this.displayPopup = true;
      console.log('settime fiif');
    }, 3000);
  }

  get refreshNeeded$() {
    return this._refreshNeeded$;
  }
  onselectAll(){
 
      this.dtTrigger.next();
//      this.dtOptions.dtInstance.then((dtInstance: any) => {
        // this.isAllChecked = $('th', dtInstance.table(0).node()).find('[type="checkbox"]')[0]['checked'];
        // var elts = [];
        // $('td', dtInstance.table(0).node()).find('[type="checkbox"]')
        // var el = $('td', dtInstance.table(0).node()).find('[type="checkbox"]')
        // elts.push(el)
        // var temp = elts[0]
        // for (const elt of temp) {
        //   elt.checked = this.isAllChecked;
          //$("#txt-is_selected-" + elt.dataset['id']).attr('checked', 'checked');     
//      };
//      });       
  }

  deleteUser(adminId: string) {
    if (adminId) {
      this.adminID = adminId;
    }
    this.adminService.deleteAdminById(this.adminID).subscribe(() => {
      this.massage = 'Record Deleted Succefully';
      localStorage.setItem('success', 'Admin Deleted Successfully');
      this.userIdUpdate = null;
      this.modalService.dismissAll();
      this.refresh();

    });

  }

  open(content, adminId) {
    this.adminID = adminId;
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  public onUserStatusChange() {
    localStorage.setItem('adminUserStatusId',this.userStatusId);
    this.getAdminList();
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      this.dtTrigger.next();
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  ngAfterViewInit(): void {
    this.dtTrigger.next();
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }


  rerender(): void {
    setTimeout(() => {
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        // Destroy the table first
        dtInstance.destroy();
        // Call the dtTrigger to rerender again
        this.dtTrigger.next();
      });
    }, 1000)
  }

  refresh(): void {
    this._router.navigateByUrl('/refresh', { skipLocationChange: true }).then(() => {
      this._router.navigate([decodeURI(this._location.path())]);
    })
  }



}
