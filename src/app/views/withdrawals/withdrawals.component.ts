import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { User } from '../../_models';
import { WithdrawalService, MissionService } from '../../_services';
import { first } from 'rxjs/operators';
import { Observable, empty } from 'rxjs';
import { NgbActiveModal, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-withdrawals',
  templateUrl: './withdrawals.component.html',
  styleUrls: ['./withdrawals.component.scss']
})
export class WithdrawalsComponent implements OnInit {


  dtOptions: DataTables.Settings = {};
  withdrawals: any;
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
  success: any;
  error: any;
  startRowCount = 0;
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  dtTrigger = new Subject();
  planId: string;
  withdrawEmail: string;
  withdrawId: string;
  showTable = true;
  displayPopup = false;
  private dsData: any;
  constructor(
    private titleService: Title,
    private http: HttpClient,
    private withdrawalService: WithdrawalService,
    private modalService: NgbModal,
    public modal: NgbActiveModal,
    public _router: Router,
    public router: Router,
    public _location: Location,
    private missionService:MissionService
  ) {
    this.missionService.announceMission('Withdrawal Requests');
   }

  public _refreshNeeded$ = new Subject<void>();
  ngOnInit(): void {
    this.titleService.setTitle('Withdrawal Requests')
    const that = this;
    this.success = localStorage.getItem('success');
    localStorage.removeItem('success');
    if (this.success == null) {
      this.displayPopup = true;
    }


    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      serverSide: true,
      processing: true,
      // scrollY: "350px",
      // scrollX: true,
      
      autoWidth:true,
      scrollCollapse:false,
      paging: true,
      retrieve: true,
      ajax: (dataTablesParameters: any, callback) => {
        this.pageNo = Math.round(dataTablesParameters.start + dataTablesParameters.length) / (dataTablesParameters.length);
        this.pageSize = dataTablesParameters.length;
        this.searchText = dataTablesParameters.search.value;
        this.columnName = ["", "", "userName", "emailAddress", "mobileNo", "price", "requestDateTime", "withdrawDateTime", "isWithdraw"];
        this.startRowCount = dataTablesParameters.start;
        this.sortFieldName = this.columnName[dataTablesParameters.order[0].column];
        if (dataTablesParameters.order[0].dir == 'asc') {
          this.sortOrderId = 1;
        } else if (dataTablesParameters.order[0].dir == 'desc') {
          this.sortOrderId = 2;
        } else {
          this.sortOrderId = 1;
        }
        this.sortOrderId = (this.columnName[dataTablesParameters.order[0].column] == '') ? 3 : this.sortOrderId;

        this.withdrawalService.getAll(this.pageNo, this.pageSize, this.sortOrderId, this.sortFieldName, this.searchText)
          .pipe(first())
          .subscribe(

            resp => {
              console.log(resp + ' dfdf');
              that.withdrawals = resp.records;
              callback({
                recordsTotal: resp.totalRecords,
                recordsFiltered: resp.totalRecords,
                data: []
              });
            },
            error => {

            });


      },
      order: [[2, 'asc']],
      columns: [{orderable:false}, {orderable:false}, { data: 'userName' }, { data: 'emailAddress' }, { data: 'mobileNo' }, { data: 'price' }, { data: 'requestDateTime' }, { data: 'withdrawDateTime' }, { data: 'isWithdraw' }]
    };
    setTimeout(() => {
      this.displayPopup = true;
      console.log('settime fiif');
    }, 3000);

   
  }

  openPaylModal(content, withdrawId, withdrawEmail) {
    this.withdrawId = withdrawId;
    this.withdrawEmail = withdrawEmail;
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      //  this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
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

  PayWithdraw(withdrawId: string) {
    this.showTable = false;

    if (withdrawId) {
      this.withdrawId = withdrawId;
    }
    this.withdrawalService.payWithdraw(this.withdrawId).subscribe(

      data => {
        if (data.statusInfo.statusCode == 53) {
          // this.router.navigate([this.returnUrl]);

          // if (data.statusInfo.message) {
          //   this.success = "You have paid sucessfully.";
          // } else {
          //   this.success = 'You have paid sucessfully';
          // }

          localStorage.setItem('success', 'You have paid sucessfully');
          this.userIdUpdate = null;
          this.modalService.dismissAll();
          // this.router.navigate(['/withdrawals']);
          this.refresh();

        }


      },
      error => {
        this.error = 'An Error Occured'


      });

    // this.userIdUpdate = null;
    // this.modalService.dismissAll();
    // // localStorage.getItem('success');
    // this.refresh();


  }

  refresh(): void {
    this._router.navigateByUrl('/refresh', { skipLocationChange: true }).then(() => {
      this._router.navigate([decodeURI(this._location.path())]);
    })
  }

}
