import { Component, OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
import { ReportService, MissionService } from '../../_services';
import { first } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { formatDate } from '@angular/common';
import { startOfWeek, endOfWeek, startOfMonth, endOfMonth, startOfYear, endOfYear } from 'date-fns';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent {
  @ViewChildren(DataTableDirective) dataTableElement: QueryList<DataTableDirective>;
  commonFromDate;
  commonToDate;
  loading = false;
  submitted = false;
  error = '';
  success = '';
  chartData: any;
  reportForm: FormGroup;
  parameters: any;
  imageSrc: any;
  isValidDate: boolean;
  errorMessage: string;
  todayDate = new Date().toJSON().split('T')[0];
  minDate = new Date('1900-01-01').toJSON().split('T')[0];
  validation_messages = {
    'fromDate': [
      { type: 'required', message: 'From Date is required' }
    ],
    'toDate': [
      { type: 'required', message: 'To Date is required' },

    ],

  };
  public pieChartOptions: ChartOptions = {
    responsive: false,
    aspectRatio: 1
  };
  public pieChartLabels: Label[] = [['Total Provider Earn (KD)'], ['Total Admin Commission (KD)']];
  public pieChartData: SingleDataSet = [300, 500];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  public ageGroupOptions: DataTables.Settings = {};
  public countryWiseUserOptions: DataTables.Settings = {};
  public consultatAdminCommissionOptions: DataTables.Settings = {};
  public dtTrigger: Subject<any> = new Subject();
  public ageGroupReport: any[];
  public countryWiseUserReport: any[];
  public consultatAdminCommissionReport: any[];
  public totalFeedbacksReport: any[];
  public pageNo: number = 1;
  public pageSize: number = 1000;
  public pageNoCommisionReport: number = 1;
  public pageSizeCommisionReport: number = 10;
  public pageScrollPos: number;
  public totalUserCount: number;
  public disableBtn:boolean = true;
  constructor(private titleService: Title, private reportService: ReportService, private formbulider: FormBuilder, private missionService: MissionService) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
    this.missionService.announceMission('Reports');
  }

  ngOnInit() {
    this.titleService.setTitle('Reports');
    const that = this;
    this.reportForm = this.formbulider.group({
      fromDate: ['', [Validators.required]],
      toDate: ['', [Validators.required]]
    });

    this.commonFromDate = formatDate(new Date(), 'yyyy-MM-dd', 'en-Us');
    this.commonToDate = formatDate(new Date(), 'yyyy-MM-dd', 'en-Us');
    this.feedbackCountReport();
    let $this = this;
    this.ageGroupOptions = {
      lengthChange: false,
      info: false,
      paging: false,
      scrollY: '210px',
      scrollCollapse: false,
      serverSide: true,
      processing: true,
      searching: false,
      ordering: false,
      autoWidth: false,
      columnDefs: [
        { "width": "55%", "targets": 0 },
        { "width": "10%", "targets": 1 },
        { "width": "10%", "targets": 2 },
        { "width": "10%", "targets": 3 }
      ],
      ajax: (dataTablesParameters: any, callback) => {
        // var pageNo = Math.round(dataTablesParameters.start + dataTablesParameters.length) / (dataTablesParameters.length);
        // var pageSize = dataTablesParameters.length;

        this.reportService.ageGroupWiseGenderRegisteredReport(this.pageNo, this.pageSize, this.commonFromDate, this.commonToDate).then(response => {
          this.ageGroupReport = response.data.records;
          this.getAgeGroupTotal(this.ageGroupReport);
          callback({
            recordsTotal: response.data.totalRecords,
            recordsFiltered: response.data.totalRecords,
            data: []

          })
        });
      }
    }

    this.countryWiseUserOptions = {
      lengthChange: false,
      info: false,
      paging: false,
      scrollY: '210px',
      scrollCollapse: false,
      serverSide: true,
      processing: true,
      searching: false,
      ordering: false,
      autoWidth: false,
      columnDefs: [
        { "width": "65%", "targets": 0 },
        { "width": "30%", "targets": 1 }
      ],
      ajax: (dataTablesParameters: any, callback) => {
        this.reportService.countryWiseUserRegisteredReport(this.pageNo, this.pageSize, this.commonFromDate, this.commonToDate).then(response => {
          this.countryWiseUserReport = response.data.records;
          this.getCountryUserTotal(this.countryWiseUserReport);
          callback({
            recordsTotal: response.data.totalRecords,
            recordsFiltered: response.data.totalRecords,
            data: []

          })
        });
      }
    }

    this.consultatAdminCommissionOptions = {
      // lengthChange: false,
      // info: false,
      paging: true,
      dom: 't<"mt-2 float-left"l>p',
      scrollY: '290px',
      scrollCollapse: false,
      serverSide: true,
      processing: true,
      searching: false,
      ordering: false,
      autoWidth: true,
      columnDefs: [
        { "width": "15%", "targets": 0 },
        { "width": "30%", "targets": 1 },
        { "width": "20%", "targets": 2 },
        { "width": "20%", "targets": 3 },
        { "width": "15%", "targets": 4 }
      ],

      drawCallback: () => {
        $('.dataTables_scrollFootInner').css({ 'width': '100%', 'padding': '0' });
        // $('.adminCommissionReportGrid thead th').css({'padding-right':'30px'});
      },
      ajax: (dataTablesParameters: any, callback) => {
        var pageNo = Math.round(dataTablesParameters.start + dataTablesParameters.length) / (dataTablesParameters.length);
        var pageSize = dataTablesParameters.length;

        this.reportService.consultantsAndAdminCommissionReport(pageNo, pageSize, this.commonFromDate, this.commonToDate).then(response => {
          this.consultatAdminCommissionReport = response.data.records;
          this.totalUserCount = response.data.totalRecords;
          $('.dataTables_scrollFoot .earningCommissionFooter th:nth-child(4)').html("" + response.data.totalUserPaidToProvider.toFixed(2) + "");
          $('.dataTables_scrollFoot .earningCommissionFooter th:nth-child(5)').html("" + response.data.totalCommission.toFixed(2) + "");

          callback({
            recordsTotal: response.data.totalRecords,
            recordsFiltered: response.data.totalRecords,
            data: []
          });

          this.disableBtn = false;
        });
      }
    }

    this.parameters = {
      "startDate": this.commonFromDate,
      "endDate": this.commonToDate
    },

      this.reportService.getReportByFilter(this.parameters).pipe(first())
        .subscribe(
          resp => {
            that.pieChartLabels = [['Total Provider Earn (KD)'], ['Total Admin Commission (KD)']];
            // that.chartData = ;
            this.pieChartData = [resp.TotalEarnReward.toFixed(2), resp.Totalcommission.toFixed(2)];
          },
          error => {

          });
  }

  // get f() { return this.reportForm.controls; }
  // onSubmit() {

  //   const that = this;
  //   if (this.validateDates(this.f.fromDate.value, this.f.toDate.value) == false) {
  //     return;
  //   }

  //   this.loading = true;
  //   this.success = '';
  //   this.error = '';
  //   this.parameters = {
  //     "startDate": this.commonFromDate,
  //     "endDate": this.commonToDate
  //   }
  //   this.reportService.getReportByFilter(this.parameters).pipe(first()).subscribe(
  //     resp => {
  //       that.pieChartLabels = [['Total Provider Earn (KD)'], ['Total Admin Commission (KD)']];
  //       // that.chartData = ;
  //       this.pieChartData = [resp.TotalEarnReward.toFixed(0), resp.Totalcommission.toFixed(0)];
  //       this.loading = false;
  //     },
  //     error => {
  //       this.error = 'An Error Occured'
  //       this.loading = false;
  //     });
  // }

  validateDates(sDate: string, eDate: string) {
    this.isValidDate = true;


    if ((sDate != null && eDate != null) && (eDate) < (sDate)) {

      this.errorMessage = 'To Date should be greater than From date.';
      this.isValidDate = false;
    }
    // else if (new Date(sDate) > new Date()) {
    //   this.errorMessage = 'From Date should be lesser than current date.';
    //   this.isValidDate = false;
    // } else if (new Date(eDate) > new Date()) {
    //   this.errorMessage = 'To Date should be lesser than current date.';
    //   this.isValidDate = false;
    // }
    else {
      this.errorMessage = '';
      this.isValidDate = true;
    }
    return this.isValidDate;
  }

  public onDayMonthYrChange(value) {
    if (value == 1) {
      this.commonFromDate = formatDate(new Date(), 'yyyy-MM-dd', 'en-Us');
      this.commonToDate = formatDate(new Date(), 'yyyy-MM-dd', 'en-Us');
    } else if (value == 2) {
      var date = new Date; // get current date      
      this.commonFromDate = formatDate(new Date(startOfWeek(date)), 'yyyy-MM-dd', 'en-Us');
      this.commonToDate = formatDate(new Date(endOfWeek(date)), 'yyyy-MM-dd', 'en-Us');
    } else if (value == 3) {
      var date = new Date();
      this.commonFromDate = formatDate(new Date(startOfMonth(date)), 'yyyy-MM-dd', 'en-Us');
      this.commonToDate = formatDate(new Date(endOfMonth(date)), 'yyyy-MM-dd', 'en-Us');
    } else if (value == 4) {
      var date = new Date();
      this.commonFromDate = formatDate(new Date(startOfYear(date)), 'yyyy-MM-dd', 'en-Us');
      this.commonToDate = formatDate(new Date(endOfYear(date)), 'yyyy-MM-dd', 'en-Us');
    }
  }

  public getAgeGroupTotal(dataarray) {
    var totalMen = 0;
    dataarray.forEach(element => {
      totalMen += (element.registerdMale)
    });

    var totalFemale = 0;
    dataarray.forEach(element => {
      totalFemale += (element.registerdFemale)
    });

    var totalMaleFemale = 0;
    dataarray.forEach(element => {
      totalMaleFemale += (element.total)
    });
    // Update footer
    $('.dataTables_scrollFoot .ageGroupFooter th:nth-child(2)').html("" + totalMen + "");
    $('.dataTables_scrollFoot .ageGroupFooter th:nth-child(3)').html("" + totalFemale + "");
    $('.dataTables_scrollFoot .ageGroupFooter th:nth-child(4)').html("" + totalMaleFemale + "");
  }

  public getCountryUserTotal(dataarray) {
    var total = 0;
    dataarray.forEach(element => {
      total += (element.totalRegisteredUser)
    });
    // Update footer
    $('.dataTables_scrollFoot .countryUserFooter th:nth-child(2)').html("" + total + "");
  }

  public getSummaryReports() {
    // if (this.validateDates(this.commonFromDate, this.commonToDate) == false) {
    //   return;
    // }
    this.disableBtn = true;

    this.reportService.ageGroupWiseGenderRegisteredReport(this.pageNo, this.pageSize, this.commonFromDate, this.commonToDate).then(response => {
      this.ageGroupReport = response.data.records;
      this.getAgeGroupTotal(this.ageGroupReport);

      this.reportService.countryWiseUserRegisteredReport(this.pageNo, this.pageSize, this.commonFromDate, this.commonToDate).then(response => {
        this.countryWiseUserReport = response.data.records;
        this.getCountryUserTotal(this.countryWiseUserReport);

        this.parameters = {
          "startDate": this.commonFromDate,
          "endDate": this.commonToDate
        }
        this.reportService.getReportByFilter(this.parameters).pipe(first()).subscribe(
          resp => {
            this.pieChartLabels = [['Total Provider Earn (KD)'], ['Total Admin Commission (KD)']];
            this.pieChartData = [resp.TotalEarnReward.toFixed(2), resp.Totalcommission.toFixed(2)];
            this.loading = false;
          });

        this.feedbackCountReport();
        
        //consultantsAndAdminCommissionReport call
        this.rerender();
      });

    });







  }

  public async feedbackCountReport() {
    await this.reportService.feedbackCountReport(this.pageNo, this.pageSize, this.commonFromDate, this.commonToDate).then(response => {
      this.totalFeedbacksReport = response.data.totalFeedbacks;
    });
  }

  ngAfterViewInit(): void {
    this.dtTrigger.next();
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  rerender(): void {
    this.dataTableElement.forEach((dtElement: DataTableDirective) => {
      // console.log(dtElement['el'].nativeElement.id)
      if (dtElement['el'].nativeElement.id == 'adminCommissionReport') {
        dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
          // Destroy the table first
          dtInstance.destroy();
          // Call the dtTrigger to rerender again
          this.dtTrigger.next();
        });
      }
    });

  }
}
