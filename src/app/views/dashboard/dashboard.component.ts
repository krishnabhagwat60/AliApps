import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { User } from '../../_models';
import { DashboardService, MissionService } from '../../_services';
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


@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
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
  resetDashboardDate : any = null;
  error:any;
  displayPopup=false;
  startRowCount=0;
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  dtTrigger = new Subject();
  degreeId:string;
  dashboard:any[];
  appointments:any[];
  private dsData: any;
  constructor(
    private titleService: Title,
    private http: HttpClient,
    private dashboardService: DashboardService,
    private modalService: NgbModal,
    public modal: NgbActiveModal,
    public _router: Router,
    public _location: Location,
    private missionService:MissionService
  ) {
    this.missionService.announceMission('Dashboard');
   }
 
  ngOnInit(): void {
    this.titleService.setTitle('Dashboard');
    const that = this;
    this.success = localStorage.getItem('success');
    localStorage.removeItem('success');
    if(this.success == null){
      this.displayPopup = true;
    }
    
    this.dashboardService.getAll(this.pageNo, this.pageSize, this.sortOrderId, this.sortFieldName, this.searchText)
    .pipe(first())
    .subscribe(

      resp => {
        console.log(resp + ' dfdf');
        this.dashboard = resp;
        this.resetDashboardDate = resp.resetDashboardDate;      
        this.appointments = resp.lastAppointmentDetails;      
        console.log(this.appointments);
      },
      error => {

      });

      
      // columns: [{orderable:false},{ data: 'lookupValue' }],
    //   columnDefs: [ {
    //     'targets': [0], /* column index */
    //     'orderable': false, /* true or false */
    //  }]
    
    setTimeout (() => {
      this.displayPopup = true;
      console.log('settime fiif');
   }, 3000);
  }
  resetDashboard() {

    this.dashboardService.resetDashboard().subscribe(() => {
      this.massage = 'Dashboard Reset Succefully';
      localStorage.setItem('success', 'Dashboard Reset Successfully');
      this.refresh();

    });
}
  refresh(): void {
    this._router.navigateByUrl('/refresh', { skipLocationChange: true }).then(() => {
      this._router.navigate([decodeURI(this._location.path())]);
    })
  }


}
