import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ConsultantService, MissionService } from '../../../_services';
import { first } from 'rxjs/operators';
import { Observable, empty } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-consultant-transactions',
  templateUrl: './consultant-transactions.component.html',
  styleUrls: ['./consultant-transactions.component.scss']
})
export class ConsultantTransactionsComponent implements OnInit {
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
  constructor(private titleService: Title,private activatedRoute: ActivatedRoute, private consultantService: ConsultantService, private missionService:MissionService) {
    this.activatedRoute.queryParams.subscribe(params => {
      // this.consultantId = params['id'];
      this.transactionId = this.activatedRoute.snapshot.paramMap.get("id");
      console.log(this.transactionId + ' paramid'); // Print the parameter to the console. 
    });
    this.missionService.announceMission('Consultant\'s Transactions');
  }

  ngOnInit() {
    this.titleService.setTitle('Consultant\'s Transactions')
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
        this.columnName = ["", "", "consumerName", "price", "commissionPercentage", "commissionPrice", "totalPrice", "createdDateTime"];
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

        this.consultantService.getTranscationsList(this.transactionId, this.pageNo, this.pageSize, this.sortOrderId, this.sortFieldName, this.searchText)
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
      order:[[7, 'desc']],
      columns: [{orderable:false}, {orderable:false}, { data: 'consumerName' }, { data: 'price' },{ data: 'commissionPercentage' },{ data: 'commissionPrice' }, { data: 'totalPrice' },{ data: 'createdDateTime' }]
    };
    setTimeout(() => {
      this.displayPopup = true;
      console.log('settime fiif');
    }, 3000);
  }

}
