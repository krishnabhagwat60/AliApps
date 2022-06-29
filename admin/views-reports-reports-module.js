(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-reports-reports-module"],{

/***/ "./src/app/views/reports/reports-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/reports/reports-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ReportsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsRoutingModule", function() { return ReportsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _reports_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reports.component */ "./src/app/views/reports/reports.component.ts");




var routes = [
    {
        path: '',
        component: _reports_component__WEBPACK_IMPORTED_MODULE_3__["ReportsComponent"],
        data: {
            title: 'Reports'
        }
    }
];
var ReportsRoutingModule = /** @class */ (function () {
    function ReportsRoutingModule() {
    }
    ReportsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ReportsRoutingModule);
    return ReportsRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/reports/reports.component.html":
/*!******************************************************!*\
  !*** ./src/app/views/reports/reports.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mt-5\">\n  \n  <div class=\"col-xs-1 col-sm-1 col-md-1 col-lg-1\">\n    \n  </div>\n  \n  <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4\">\n    <div class=\"card-group mt-5\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <form [formGroup]=\"reportForm\" action=\"\" method=\"POST\" (ngSubmit)=\"onSubmit(reportForm.value)\" role=\"form\">\n          <div class=\"form-group\">\n            <label for=\"\">From Date</label>\n            <input type=\"date\" formControlName=\"fromDate\" class=\"form-control\" id=\"\" placeholder=\"Input field\">\n            <div *ngFor=\"let validation of validation_messages.fromDate\">\n              <div class=\"text-danger\"\n                *ngIf=\"reportForm.get('fromDate').hasError(validation.type) && (reportForm.get('fromDate').dirty || reportForm.get('fromDate').touched)\">\n                <strong>{{validation.message}}</strong></div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"\">To Date</label>\n            <input type=\"date\" formControlName=\"toDate\" class=\"form-control\" id=\"\" placeholder=\"Input field\">\n            <div *ngFor=\"let validation of validation_messages.toDate\">\n              <div class=\"text-danger\"\n                *ngIf=\"reportForm.get('toDate').hasError(validation.type) && (reportForm.get('toDate').dirty || reportForm.get('toDate').touched)\">\n                <strong>{{validation.message}}</strong></div>\n            </div>\n            <div class=\"text-danger\"\n                *ngIf=\"errorMessage\">\n                <strong>{{errorMessage}}</strong></div>            \n          </div>\n\n          <button type=\"submit\" class=\"btn btn-primary\">Get Report</button>\n        </form>\n      </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6 mt-5\">\n    <div style=\"display: block;\">\n      <canvas baseChart [data]=\"pieChartData\" [labels]=\"pieChartLabels\" [chartType]=\"pieChartType\"\n        [options]=\"pieChartOptions\" [plugins]=\"pieChartPlugins\" [legend]=\"pieChartLegend\">\n      </canvas>\n    </div>\n  </div>\n  \n  <div class=\"col-xs-1 col-sm-1 col-md-1 col-lg-1\">\n    \n  </div>\n  \n</div>"

/***/ }),

/***/ "./src/app/views/reports/reports.component.scss":
/*!******************************************************!*\
  !*** ./src/app/views/reports/reports.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  font-family: Lato; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcmVwb3J0cy9FOlxcUHJvamVjdHNcXGh0ZG9jc1xcRXMyYWxueVxcdHJ1bmtcXEFkbWluXFxjb25zdWx0YW50L3NyY1xcYXBwXFx2aWV3c1xccmVwb3J0c1xccmVwb3J0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcmVwb3J0cy9yZXBvcnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XHJcbiAgICBmb250LWZhbWlseTogTGF0bztcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/views/reports/reports.component.ts":
/*!****************************************************!*\
  !*** ./src/app/views/reports/reports.component.ts ***!
  \****************************************************/
/*! exports provided: ReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsComponent", function() { return ReportsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/fesm5/ng2-charts.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services */ "./src/app/_services/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var ReportsComponent = /** @class */ (function () {
    function ReportsComponent(reportService, formbulider, missionService) {
        this.reportService = reportService;
        this.formbulider = formbulider;
        this.missionService = missionService;
        this.loading = false;
        this.submitted = false;
        this.error = '';
        this.success = '';
        this.validation_messages = {
            'fromDate': [
                { type: 'required', message: 'From Date is required' }
            ],
            'toDate': [
                { type: 'required', message: 'To Date is required' },
            ],
        };
        this.pieChartOptions = {
            responsive: true,
        };
        this.pieChartLabels = [['Total Provider Earn'], ['Total Admin Commission']];
        this.pieChartData = [300, 500];
        this.pieChartType = 'pie';
        this.pieChartLegend = true;
        this.pieChartPlugins = [];
        Object(ng2_charts__WEBPACK_IMPORTED_MODULE_2__["monkeyPatchChartJsTooltip"])();
        Object(ng2_charts__WEBPACK_IMPORTED_MODULE_2__["monkeyPatchChartJsLegend"])();
        this.missionService.announceMission('Reports');
    }
    ReportsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var that = this;
        this.reportForm = this.formbulider.group({
            fromDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            toDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]]
        });
        this.parameters = {
            "startDate": "",
            "endDate": ""
        },
            this.reportService.getData(this.parameters).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
                .subscribe(function (resp) {
                console.log(resp + ' dfdf');
                that.pieChartLabels = [['Total Provider Earn'], ['Total Admin Commission']];
                // that.chartData = ;
                _this.pieChartData = [resp.TotalEarnReward.toFixed(0), resp.Totalcommission.toFixed(0)];
                console.log(resp);
            }, function (error) {
            });
    };
    Object.defineProperty(ReportsComponent.prototype, "f", {
        get: function () { return this.reportForm.controls; },
        enumerable: true,
        configurable: true
    });
    ReportsComponent.prototype.onSubmit = function () {
        var _this = this;
        var that = this;
        console.log(this.f);
        this.submitted = true;
        if (this.reportForm.invalid) {
            return;
        }
        if (this.validateDates(this.f.fromDate.value, this.f.toDate.value) == false) {
            return;
        }
        this.loading = true;
        this.success = '';
        this.error = '';
        this.parameters = {
            "startDate": this.f.fromDate.value,
            "endDate": this.f.toDate.value
        };
        this.reportService.getReportByFilter(this.parameters).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).subscribe(function (resp) {
            console.log(resp + ' dfdf');
            that.pieChartLabels = [['Total Provider Earn'], ['Total Admin Commission']];
            // that.chartData = ;
            _this.pieChartData = [resp.TotalEarnReward.toFixed(0), resp.Totalcommission.toFixed(0)];
            console.log(resp);
            _this.loading = false;
        }, function (error) {
            _this.error = 'An Error Occured';
            _this.loading = false;
        });
    };
    ReportsComponent.prototype.validateDates = function (sDate, eDate) {
        this.isValidDate = true;
        if ((sDate != null && eDate != null) && (eDate) < (sDate)) {
            this.errorMessage = 'To Date should be greater then From date.';
            this.isValidDate = false;
        }
        return this.isValidDate;
    };
    ReportsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reports',
            template: __webpack_require__(/*! ./reports.component.html */ "./src/app/views/reports/reports.component.html"),
            styles: [__webpack_require__(/*! ./reports.component.scss */ "./src/app/views/reports/reports.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_3__["ReportService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _services__WEBPACK_IMPORTED_MODULE_3__["MissionService"]])
    ], ReportsComponent);
    return ReportsComponent;
}());



/***/ }),

/***/ "./src/app/views/reports/reports.module.ts":
/*!*************************************************!*\
  !*** ./src/app/views/reports/reports.module.ts ***!
  \*************************************************/
/*! exports provided: ReportsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsModule", function() { return ReportsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _reports_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reports.component */ "./src/app/views/reports/reports.component.ts");
/* harmony import */ var _reports_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reports-routing.module */ "./src/app/views/reports/reports-routing.module.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/fesm5/ng2-charts.js");
// Angular









var routes = [
//   {
//     path:'add',
//     component: PlansAddComponent
//   },
//   {
//     path:'edit/:id',
//     component: PlansEditComponent
//   },
];
var ReportsModule = /** @class */ (function () {
    function ReportsModule() {
    }
    ReportsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _reports_routing_module__WEBPACK_IMPORTED_MODULE_3__["ReportsRoutingModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                ng2_charts__WEBPACK_IMPORTED_MODULE_8__["ChartsModule"],
                // RouterModule.forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_7__["NgMultiSelectDropDownModule"].forRoot()
            ],
            declarations: [
                _reports_component__WEBPACK_IMPORTED_MODULE_2__["ReportsComponent"],
            ],
        })
    ], ReportsModule);
    return ReportsModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-reports-reports-module.js.map