import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { User } from '../../_models';
import { PlanService, MissionService } from '../../_services';
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
  planId: number;
  name: string;
  data: any[];
}

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss']
})
export class PlansComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  plans: Degree[];
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
  displayPopup=false;
  private dsData: any;
  constructor(
    private titleService: Title,
    private http: HttpClient,
    private planService: PlanService,
    private modalService: NgbModal,
    public modal: NgbActiveModal,
    public _router: Router,
    public _location: Location,
    private missionService: MissionService
  ) {
    this.missionService.announceMission('Plan Management');
   }

  ngOnInit(): void {
    this.titleService.setTitle('Plan Management')
    const that = this;
    this.success = localStorage.getItem('success');
    localStorage.removeItem('success');
    if(this.success == null){
      this.displayPopup = true;
    }
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      serverSide: true,
      processing: true,
      // scrollY: "350px",
      // scrollX: false,
      
      ajax: (dataTablesParameters: any, callback) => {
        this.pageNo = Math.round(dataTablesParameters.start + dataTablesParameters.length) / (dataTablesParameters.length);
        this.pageSize = dataTablesParameters.length;
        this.searchText = dataTablesParameters.search.value;
        this.columnName = ["", "price", "note"];
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
        this.planService.getAll(this.pageNo, this.pageSize, this.sortOrderId, this.sortFieldName, this.searchText)
          .pipe(first())
          .subscribe(

            resp => {
              console.log(resp + ' dfdf');
              that.plans = resp.records;
              callback({
                recordsTotal: resp.totalRecords,
                recordsFiltered: resp.totalRecords,
                data: []
              });
            },
            error => {

            });


      },
      order: [[1, 'asc']],
      columns: [{orderable:false}, { data: 'price' }, { data: 'note' }, {orderable:false}]
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

  deletePlan(planId: string) {
    if (planId) {
      this.planId = planId;
    }
    this.planService.deletePlanById(this.planId).subscribe(

      data => {

        if (data.statusInfo.statusCode == 52) {
          // this.router.navigate([this.returnUrl]);
          if (data.statusInfo.message) {
            this.success = data.statusInfo.message;

          }

        } else {
          this.error = data.statusInfo.message;
        }
      },
      error => {
        this.error = 'An Error Occured'
      }
    );

    this.massage = 'Plan Deleted Succefully';
    localStorage.setItem('success', 'Plan deleted successfully.')
    this.userIdUpdate = null;
    this.modalService.dismissAll();
    this.refresh();
  }

  open(content, planId) {
    this.planId = planId;
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
