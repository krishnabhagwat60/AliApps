import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { User } from '../../_models';
import { DegreeService, MissionService } from '../../_services';
import { first } from 'rxjs/operators';
import { Observable, empty } from 'rxjs';
import { NgbActiveModal, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Title } from '@angular/platform-browser';
declare var $;

class Degree {
  degreeId: number;
  name: string;
  data: any[];
}

class DataTablesResponse {
  data: any[];
  // draw: number;
  // recordsFiltered: number;
  totalRecords: number;
}

@Component({
  selector: 'app-degrees',
  templateUrl: './degrees.component.html',
  styleUrls: ['./degrees.component.scss']
})
export class DegreesComponent implements OnInit {


  dtOptions: DataTables.Settings = {};
  degrees: Degree[];
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
  userID: string;
  success:any;
  error:any;
  displayPopup=false;
  startRowCount=0;
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  dtTrigger = new Subject();
  degreeId:string;
  private dsData: any;
  constructor(
    private titleService: Title,
    private http: HttpClient,
    private degreeService: DegreeService,
    private modalService: NgbModal,
    public modal: NgbActiveModal,
    public _router: Router,
    public _location: Location,
    private missionService:MissionService
  ) { 
    this.missionService.announceMission('Degree');
  }

  ngOnInit(): void {
    this.titleService.setTitle('Degree');
    const that = this;
    this.success = localStorage.getItem('success');
    this.error = localStorage.getItem('error');
    localStorage.removeItem('success');
    localStorage.removeItem('error');
    if(this.success == null && this.error == null){
      this.displayPopup = true;
    }
    
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      serverSide: true,
      processing: true,
      // scrollY: "350px",
      // scrollX: false,
      // paging: true,
      // retrieve: true,
      columns: [{"orderable":false},{ data: 'lookupValue'}, {"orderable":false}],
      order: [[1, 'asc']],
      ajax: (dataTablesParameters: any, callback) => {
        
        this.pageNo = Math.round(dataTablesParameters.start + dataTablesParameters.length) / (dataTablesParameters.length);
        this.pageSize = dataTablesParameters.length;
        this.searchText = dataTablesParameters.search.value;
        this.columnName = ["", "lookupValue"];
        this.startRowCount = dataTablesParameters.start;
        this.sortFieldName = this.columnName[dataTablesParameters.order[0].column];
        if (dataTablesParameters.order[0].dir == 'asc') {
          this.sortOrderId = 1;
        } else if (dataTablesParameters.order[0].dir == 'desc') {
          this.sortOrderId = 2;
        } else {
          this.sortOrderId = 1;
        }
        this.sortOrderId = (this.columnName[dataTablesParameters.order[0].column] == '')?3:this.sortOrderId;

        this.degreeService.getAll(this.pageNo, this.pageSize, this.sortOrderId, this.sortFieldName, this.searchText)
          .pipe(first())
          .subscribe(

            resp => {
              console.log(resp + ' dfdf');
              that.degrees = resp.records;
              callback({
                recordsTotal: resp.totalRecords,
                recordsFiltered: resp.totalRecords,
                data: []
                
              })
             
            },
            error => {

            });


      },
      // columns: [{orderable:false},{ data: 'lookupValue' }],
    //   columnDefs: [ {
    //     'targets': [0], /* column index */
    //     'orderable': false, /* true or false */
    //  }]
    };
    setTimeout (() => {
      this.displayPopup = true;
      console.log('settime fiif');
   }, 3000);
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

  deleteDegree(degreeId: string) {
    if (degreeId) {
      this.degreeId = degreeId;
    }
    this.degreeService.deleteDegreeById(this.degreeId).subscribe(

      data => {

        if (data.statusInfo.statusCode == 52) {
          // this.router.navigate([this.returnUrl]);
          if (data.statusInfo.message) {
            // this.success = data.statusInfo.message;
           
          }
          localStorage.setItem('success', 'Degree deleted successfully.')
          this.massage = 'Degree Deleted Succefully';
          this.userIdUpdate = null;
          this.modalService.dismissAll();
          this.refresh();
        } else if (data.statusInfo.statusCode == 57) {
          localStorage.setItem('error', 'Some Consultants are using this degree, It can\'t be deleted.')
          this.massage = 'Degree Deleted Succefully';
          this.userIdUpdate = null;
          this.modalService.dismissAll();
          this.refresh();
        }
         else {
          this.error = data.statusInfo.message;
        }
      },
      error => {
        this.error = 'An Error Occured'
      }
    );
    
    this.massage = 'Degree Deleted Succefully';
    this.userIdUpdate = null;
    this.modalService.dismissAll();
    this.refresh();
  }

  open(content, degreeId) {
    this.degreeId = degreeId;
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  refresh(): void {
    this._router.navigateByUrl('/refresh', { skipLocationChange: true }).then(() => {
      this._router.navigate([decodeURI(this._location.path())]);
    })
  }
}
