(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-notification-notification-module"],{

/***/ "./src/app/views/notification/notification-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/views/notification/notification-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: NotificationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationRoutingModule", function() { return NotificationRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _notification_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notification.component */ "./src/app/views/notification/notification.component.ts");




var routes = [
    {
        path: '',
        component: _notification_component__WEBPACK_IMPORTED_MODULE_3__["NotificationComponent"],
        data: {
            title: 'Notification'
        }
    }
];
var NotificationRoutingModule = /** @class */ (function () {
    function NotificationRoutingModule() {
    }
    NotificationRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], NotificationRoutingModule);
    return NotificationRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/notification/notification.component.html":
/*!****************************************************************!*\
  !*** ./src/app/views/notification/notification.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- SELECT2 EXAMPLE -->\n<div class=\"mb-4 d-flex justify-content-end position-relative\" style=\"height: 35px;\">\n    \n    <div class=\"alert alert-success\" *ngIf=\"success\"  [hidden]=\"displayPopup\">        \n        <div class=\"alert-success\"><i class=\"fa fa-check-circle\"></i> {{success}}</div>\n      </div>\n      <div class=\"alert alert-danger\" *ngIf=\"error\" [hidden]=\"displayPopup\">        \n        <div class=\"alert-danger\"><i class=\"fa fa-time-circle\"></i> {{error}}</div>\n      </div>\n</div>\n<div class=\"card-group mt-5\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n          \n        <form [formGroup]=\"addNotificationForm\" (ngSubmit)=\"onSubmit(addNotificationForm.value)\">\n          <div class=\"row\">\n            <div class=\"col-md-3\"></div>\n            <div class=\"col-md-6 \">\n              <div class=\"form-group row\">\n                <div class=\"col-md-12\">\n                  <label>Title</label>\n                  <input name=\"title\" maxLength=\"20\" formControlName=\"title\" type=\"text\" class=\"form-control\">\n                  <div class=\"text-danger\" *ngIf=\"TitleError\"><strong>Title Can't be empty</strong></div>\n                  <div *ngFor=\"let validation of validation_messages.title\">\n                    <div class=\"text-danger\"\n                      *ngIf=\"addNotificationForm.get('title').hasError(validation.type) && (addNotificationForm.get('title').dirty || addNotificationForm.get('title').touched)\">\n                      <strong>{{validation.message}}</strong></div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"form-group row\">\n                <div class=\"col-md-12\">\n                  <label>Message</label>\n                  \n                  \n                  <textarea name=\"message\" formControlName=\"message\" maxlength=\"100\" class=\"form-control\" rows=\"3\"></textarea>\n                  <span style=\"color:#da7e0e\">Max Character Limit is 100</span>\n                  <div class=\"text-danger\" *ngIf=\"MessageError\"><strong>Message Can't be empty</strong></div>\n                  <div *ngFor=\"let validation of validation_messages.message\">\n                    <div class=\"text-danger\"\n                      *ngIf=\"addNotificationForm.get('message').hasError(validation.type) && (addNotificationForm.get('message').dirty || addNotificationForm.get('message').touched)\">\n                      <strong>{{validation.message}}</strong></div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group text-center\">\n            <input type=\"Submit\" name=\"Submit\" id=\"Submit\" [disabled]=\"!addNotificationForm.valid\" value=\"Send\"\n              class=\"btn btn-sub\">\n              <div class=\"loadbtn\">\n            <img *ngIf=\"loading\" class=\"pl-2\"\n              src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n    <!-- /.row -->\n  </div>\n  <!-- /.box-body -->"

/***/ }),

/***/ "./src/app/views/notification/notification.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/views/notification/notification.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input[type=\"radio\"] + i {\n  transition: all 0.2s; }\n\ninput + i {\n  cursor: pointer; }\n\ninput[class=\"male\"]:hover + samp, input[class=\"male\"]:checked + samp, input[class=\"male\"]:focus + samp {\n  color: #fff;\n  background: #006dd9; }\n\ninput[class=\"female\"]:hover + samp, input[class=\"female\"]:checked + samp, input[class=\"female\"]:focus + samp {\n  color: #fff;\n  background: #ff4181; }\n\ninput[class=\"female\"] + samp {\n  color: #ff4181; }\n\ninput[class=\"male\"] + samp {\n  color: #006dd9; }\n\ninput[type=\"radio\"] {\n  position: absolute;\n  opacity: 0; }\n\ninput[type=\"radio\"] + i {\n    transition: all 0.2s; }\n\ninput + samp {\n  cursor: pointer;\n  height: 35px;\n  line-height: 37px;\n  width: 35px;\n  border: 2px solid #bababa;\n  display: inline-block;\n  border-radius: 50%;\n  text-align: center; }\n\ninput + samp i {\n    cursor: pointer;\n    font-size: 20px; }\n\n.radio label {\n  margin-right: 5%;\n  margin-left: 5%;\n  margin-bottom: 0px; }\n\n.inputfile {\n  width: 0.1px;\n  height: 0.1px;\n  opacity: 0;\n  overflow: hidden;\n  position: absolute;\n  z-index: -1; }\n\n.inputfile + label {\n    text-transform: uppercase;\n    max-width: 100%;\n    font-size: 14px;\n    font-weight: bold;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    cursor: pointer;\n    display: inline-block;\n    overflow: hidden;\n    text-align: center;\n    margin-bottom: 0px; }\n\n.form-file {\n  padding-top: 20px; }\n\n.inputfile + label figure {\n  width: 73px;\n  height: 73px;\n  border-radius: 50%;\n  background-color: transparent;\n  display: inline-block;\n  margin: 0 auto;\n  margin-bottom: 0px;\n  position: relative; }\n\n.inputfile + label figure img {\n    width: 100%;\n    height: 100%;\n    border-radius: 50%; }\n\n.file-button {\n  position: absolute;\n  left: 48.9%;\n  z-index: 999;\n  border: 2px solid #000;\n  height: 25px;\n  width: 25px;\n  border-radius: 50%;\n  text-align: center;\n  line-height: 22.5px;\n  bottom: 0; }\n\n.caonsultform input, .caonsultform select, .caonsultform textarea {\n  border-radius: 5px;\n  background: #eceef2; }\n\ninput.btn-sub {\n  background: #2f3b4c;\n  color: #ffc400; }\n\ninput.ng-invalid.ng-touched, textarea.ng-invalid.ng-touched {\n  border-color: red !important; }\n\n.profilepic {\n  margin-top: -7%; }\n\n.form-control {\n  background: #ECEFF2; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvbm90aWZpY2F0aW9uL0U6XFxQcm9qZWN0c1xcaHRkb2NzXFxFczJhbG55XFx0cnVua1xcQWRtaW5cXGNvbnN1bHRhbnQvc3JjXFxhcHBcXHZpZXdzXFxub3RpZmljYXRpb25cXG5vdGlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUdNLG9CQUFvQixFQUFBOztBQUgxQjtFQU1NLGVBQWUsRUFBQTs7QUFOckI7RUFVUSxXQUFXO0VBQ1gsbUJBQTRCLEVBQUE7O0FBWHBDO0VBZ0JRLFdBQVc7RUFDWCxtQkFBbUIsRUFBQTs7QUFqQjNCO0VBb0JRLGNBQWMsRUFBQTs7QUFwQnRCO0VBd0JNLGNBQXVCLEVBQUE7O0FBeEI3QjtFQTJCSyxrQkFBa0I7RUFDbEIsVUFBVSxFQUFBOztBQTVCZjtJQStCUSxvQkFBb0IsRUFBQTs7QUEvQjVCO0VBdUNNLGVBQWU7RUFDZixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQTs7QUE5Q3hCO0lBb0NRLGVBQWU7SUFDZixlQUFlLEVBQUE7O0FBYXJCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFdBQVcsRUFBQTs7QUFOYjtJQVFJLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixrQkFBa0IsRUFBQTs7QUFJdEI7RUFDRSxpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQiw2QkFBNkI7RUFDN0IscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsa0JBQWtCLEVBQUE7O0FBUnBCO0lBVUksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0IsRUFBQTs7QUFJdEI7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixTQUFTLEVBQUE7O0FBR1g7RUFFSSxrQkFBa0I7RUFDbEIsbUJBQW1CLEVBQUE7O0FBSXZCO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWMsRUFBQTs7QUFFaEI7RUFDRSw0QkFBNEIsRUFBQTs7QUFFOUI7RUFDRSxlQUFlLEVBQUE7O0FBRWpCO0VBQ0UsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGltcG9ydCB1cmwoXCJodHRwOi8vbmV0ZG5hLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuMS4xL2Nzcy9ib290c3RyYXAubWluLmNzc1wiKTtcclxuXHJcbmlucHV0IHtcclxuICAgICZbdHlwZT1cInJhZGlvXCJdICsgaSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnM7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xyXG4gICAgfVxyXG4gICAgKyBpIHtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gICAgJltjbGFzcz1cIm1hbGVcIl0ge1xyXG4gICAgICAmOmhvdmVyICsgc2FtcCwgJjpjaGVja2VkICsgc2FtcCwgJjpmb2N1cyArIHNhbXAge1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYigwLCAxMDksIDIxNyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICZbY2xhc3M9XCJmZW1hbGVcIl0ge1xyXG4gICAgICAmOmhvdmVyICsgc2FtcCwgJjpjaGVja2VkICsgc2FtcCwgJjpmb2N1cyArIHNhbXAge1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZjQxODE7XHJcbiAgICAgIH1cclxuICAgICAgKyBzYW1wIHtcclxuICAgICAgICBjb2xvcjogI2ZmNDE4MTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJltjbGFzcz1cIm1hbGVcIl0gKyBzYW1wIHtcclxuICAgICAgY29sb3I6IHJnYigwLCAxMDksIDIxNyk7XHJcbiAgICB9XHJcbiAgICAmW3R5cGU9XCJyYWRpb1wiXSB7XHJcbiAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICsgaSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycztcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgKyBzYW1wIHtcclxuICAgICAgaSB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgfVxyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDM3cHg7XHJcbiAgICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjYmFiYWJhO1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAucmFkaW8gbGFiZWwge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcclxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICB9XHJcbiAgXHJcbiAgLmlucHV0ZmlsZSB7XHJcbiAgICB3aWR0aDogMC4xcHg7XHJcbiAgICBoZWlnaHQ6IDAuMXB4O1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICAgICsgbGFiZWwge1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLWZpbGUge1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbnB1dGZpbGUgKyBsYWJlbCBmaWd1cmUge1xyXG4gICAgd2lkdGg6IDczcHg7XHJcbiAgICBoZWlnaHQ6IDczcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuZmlsZS1idXR0b24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogNDguOSU7XHJcbiAgICB6LWluZGV4OiA5OTk7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDAwO1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogMjIuNXB4O1xyXG4gICAgYm90dG9tOiAwO1xyXG4gIH1cclxuICBcclxuICAuY2FvbnN1bHRmb3JtIHtcclxuICAgIGlucHV0LCBzZWxlY3QsIHRleHRhcmVhIHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZWNlZWYyO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBpbnB1dC5idG4tc3ViIHtcclxuICAgIGJhY2tncm91bmQ6ICMyZjNiNGM7XHJcbiAgICBjb2xvcjogI2ZmYzQwMDtcclxuICB9XHJcbiAgaW5wdXQubmctaW52YWxpZC5uZy10b3VjaGVkLCB0ZXh0YXJlYS5uZy1pbnZhbGlkLm5nLXRvdWNoZWR7XHJcbiAgICBib3JkZXItY29sb3I6IHJlZCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAucHJvZmlsZXBpY3tcclxuICAgIG1hcmdpbi10b3A6IC03JTtcclxuICB9XHJcbiAgLmZvcm0tY29udHJvbHtcclxuICAgIGJhY2tncm91bmQ6ICNFQ0VGRjI7XHJcbiAgfVxyXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/views/notification/notification.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/views/notification/notification.component.ts ***!
  \**************************************************************/
/*! exports provided: NotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return NotificationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services */ "./src/app/_services/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var NotificationComponent = /** @class */ (function () {
    function NotificationComponent(formbulider, notificationService, missionService) {
        this.formbulider = formbulider;
        this.notificationService = notificationService;
        this.missionService = missionService;
        this.loading = false;
        this.submitted = false;
        this.error = '';
        this.success = '';
        this.displayPopup = false;
        this.validation_messages = {
            'title': [
                { type: 'required', message: 'Title is required' }
            ],
            'message': [
                { type: 'required', message: 'Message is required' }
            ],
        };
        this.missionService.announceMission('Notification');
    }
    NotificationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.TitleError = false;
        this.MessageError = false;
        if (this.success == null) {
            this.displayPopup = true;
        }
        this.addNotificationForm = this.formbulider.group({
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            message: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
        });
        setTimeout(function () {
            _this.displayPopup = true;
            console.log('settime fiif');
        }, 3000);
    };
    Object.defineProperty(NotificationComponent.prototype, "f", {
        get: function () { return this.addNotificationForm.controls; },
        enumerable: true,
        configurable: true
    });
    NotificationComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.f);
        this.submitted = true;
        this.TitleError = false;
        this.MessageError = false;
        this.parameters = {
            "title": this.f.title.value,
            "message": this.f.message.value,
        };
        if (this.addNotificationForm.invalid) {
            return;
        }
        if (this.f.title.value.trim() == '') {
            this.TitleError = true;
            return false;
        }
        else if (this.f.message.value.trim() == '') {
            this.MessageError = true;
            return false;
        }
        this.loading = true;
        this.success = '';
        this.error = '';
        this.notificationService.create(this.parameters).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).subscribe(function (data) {
            if (data.statusInfo.statusCode == 10) {
                // this.router.navigate([this.returnUrl]);
                _this.addNotificationForm.reset();
                if (data.statusInfo.message) {
                    // this.success = data.statusInfo.message;
                    localStorage.setItem('success', 'Notificatin has been sent Successfully');
                    _this.displayPopup = false;
                    _this.success = 'Notificatin has been sent Successfully';
                }
                else {
                    _this.success = 'Done Successfully';
                }
            }
            _this.loading = false;
            _this.scrollToTop();
        }, function (error) {
            _this.error = 'An Error Occured';
            _this.loading = false;
            _this.scrollToTop();
        });
        this.success = localStorage.getItem('success');
        localStorage.removeItem('success');
        if (this.success == null) {
            this.displayPopup = true;
        }
        setTimeout(function () {
            _this.displayPopup = true;
            console.log('settime fiif');
        }, 3000);
    };
    NotificationComponent.prototype.scrollToTop = function () {
        var scrollToTop = window.setInterval(function () {
            var pos = window.pageYOffset;
            if (pos > 0) {
                window.scrollTo(0, pos - 20); // how far to scroll on each step
            }
            else {
                window.clearInterval(scrollToTop);
            }
        }, 16);
    };
    NotificationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notification',
            template: __webpack_require__(/*! ./notification.component.html */ "./src/app/views/notification/notification.component.html"),
            styles: [__webpack_require__(/*! ./notification.component.scss */ "./src/app/views/notification/notification.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _services__WEBPACK_IMPORTED_MODULE_2__["NotificationService"],
            _services__WEBPACK_IMPORTED_MODULE_2__["MissionService"]])
    ], NotificationComponent);
    return NotificationComponent;
}());



/***/ }),

/***/ "./src/app/views/notification/notification.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/notification/notification.module.ts ***!
  \***********************************************************/
/*! exports provided: NotificationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationModule", function() { return NotificationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _notification_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notification.component */ "./src/app/views/notification/notification.component.ts");
/* harmony import */ var _notification_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notification-routing.module */ "./src/app/views/notification/notification-routing.module.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
// Angular









var routes = [
//   {
//     path:'add',
//     component: DegreesAddComponent
//   },
//   {
//     path:'view/:id',
//     component: FeedbackViewComponent
//   },
];
var NotificationModule = /** @class */ (function () {
    function NotificationModule() {
    }
    NotificationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _notification_routing_module__WEBPACK_IMPORTED_MODULE_3__["NotificationRoutingModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_8__["NgMultiSelectDropDownModule"].forRoot()
            ],
            declarations: [
                _notification_component__WEBPACK_IMPORTED_MODULE_2__["NotificationComponent"]
            ],
        })
    ], NotificationModule);
    return NotificationModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-notification-notification-module.js.map