import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService, MissionService } from '../../../_services';
import { first } from 'rxjs/operators';
import { Observable, empty } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-users-transactions',
  templateUrl: './users-transactions.component.html',
  styleUrls: ['./users-transactions.component.scss']
})
export class UsersTransactionsComponent implements OnInit {
  transactionId: string;
  dtOptions: DataTables.Settings = {};
  transactions: any[];
  pageNo: number;
  pageSize: number;
  sortOrderId: number;
  sortFieldName: string;
  searchText: string;
  columnName: {};
  sortArray: {};
  dataSaved = false;
  userForm: any;
  userIdUpdate = null;
  massage = null;
  closeResult: string;
  userID: string;
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  dtTrigger = new Subject();
  firstTime = 1;
  startRowCount = 0;
  success: any;
  error: any;
  displayPopup = false;
  walletBalance = 0;
  private dsData: any;
  constructor(private titleService: Title, private activatedRoute: ActivatedRoute, private userService: UserService, private missionService:MissionService) {
    this.activatedRoute.queryParams.subscribe(params => {
      // this.consultantId = params['id'];
      this.transactionId = this.activatedRoute.snapshot.paramMap.get("id");
      console.log(this.transactionId + ' paramid'); // Print the parameter to the console. 
    });
    this.missionService.announceMission('User\'s Transactions ');
  }

  ngOnInit() {
    this.titleService.setTitle('User\'s Transactions');
    const that = this;
    this.success = localStorage.getItem('success');
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
        this.columnName = ["", "", "providerName", "price", "createdDateTime"];
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
        this.userService.getTranscationsList(this.transactionId, this.pageNo, this.pageSize, this.sortOrderId, this.sortFieldName, this.searchText)
          .pipe(first())
          .subscribe(
            resp => {
              console.log(resp + ' dfdf');
              that.transactions = resp.transactionHistory;
              that.walletBalance = resp.walletBalance;
              callback({
                recordsTotal: resp.totalRecords,

                recordsFiltered: resp.totalRecords,
                data: []
              });
            },
            error => {

            });
      },
      order:[[4, 'desc']],
      columns: [{orderable:false},{orderable:false}, { data: 'providerName' }, { data: 'price' }, { data: 'createdDateTime' }]
    };
    setTimeout(() => {
      this.displayPopup = true;
      console.log('settime fiif');
    }, 3000);
  }


}
