(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["agency-dashboard-agency-dashboard-module"],{

/***/ "./src/app/pages/agency-dashboard/agency-dashboard.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/agency-dashboard/agency-dashboard.module.ts ***!
  \*******************************************************************/
/*! exports provided: AgencyDashboardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgencyDashboardPageModule", function() { return AgencyDashboardPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _agency_dashboard_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./agency-dashboard.page */ "./src/app/pages/agency-dashboard/agency-dashboard.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _agency_dashboard_page__WEBPACK_IMPORTED_MODULE_5__["AgencyDashboardPage"]
    }
];
var AgencyDashboardPageModule = /** @class */ (function () {
    function AgencyDashboardPageModule() {
    }
    AgencyDashboardPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_agency_dashboard_page__WEBPACK_IMPORTED_MODULE_5__["AgencyDashboardPage"]]
        })
    ], AgencyDashboardPageModule);
    return AgencyDashboardPageModule;
}());



/***/ }),

/***/ "./src/app/pages/agency-dashboard/agency-dashboard.page.html":
/*!*******************************************************************!*\
  !*** ./src/app/pages/agency-dashboard/agency-dashboard.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>DASHBOARD</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content padding>\n<!-- <p text-center>Welcome to Dashboard</p> -->\n\n<br>\n\n    <ion-card class=\"card_dashboard\">\n        <ion-card-header class=\"backgrey\">\n            <ion-ripple-effect></ion-ripple-effect>\n            <ion-card-subtitle >Alert          \n              <p text-end class=\"right_alignflot\">22</p>\n            </ion-card-subtitle>\n            <!-- <ion-card-title>Card Title</ion-card-title> -->\n          </ion-card-header>\n        <ion-card-header>\n            <ion-ripple-effect></ion-ripple-effect>\n          <ion-card-subtitle>Messages           \n            <p text-end class=\"right_alignflot\">5</p>\n          </ion-card-subtitle>\n          <!-- <ion-card-title>Card Title</ion-card-title> -->\n        </ion-card-header>\n        <ion-card-header class=\"backgrey\">\n            <ion-ripple-effect></ion-ripple-effect>\n            <ion-card-subtitle >Jobs        \n              <p text-end class=\"right_alignflot\">12</p>\n            </ion-card-subtitle>\n            <!-- <ion-card-title>Card Title</ion-card-title> -->\n          </ion-card-header>\n          <ion-card-header>\n              <ion-ripple-effect></ion-ripple-effect>\n              <ion-card-subtitle>Agents\n                <p text-end class=\"right_alignflot\">28</p>\n              </ion-card-subtitle>\n              <!-- <ion-card-title>Card Title</ion-card-title> -->\n            </ion-card-header>\n      </ion-card>\n      <ion-card class=\"card_dashboard\">\n      <ion-row>\n        <ion-col col-6 class=\"col_border_left\">\n            <ion-ripple-effect></ion-ripple-effect>\n          <h2 class=\"prop_count\" text-center>1123</h2>\n    <p text-center class=\"prop_titl\">Properties</p>\n        </ion-col>\n        <ion-col col-6>\n     <div>\n        <ion-ripple-effect></ion-ripple-effect>\n        <h2 text-center>11</h2>\n  <p text-center>Vacant</p>\n     </div>\n      <hr>\n     <div>\n        <h2 text-center>113</h2>\n      <p text-center>Live</p>\n     </div>\n          </ion-col>\n      </ion-row>\n    </ion-card>\n  </ion-content>\n  "

/***/ }),

/***/ "./src/app/pages/agency-dashboard/agency-dashboard.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/agency-dashboard/agency-dashboard.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card_dashboard {\n  border-top: 2px solid #3bdc7e; }\n\n.right_alignflot {\n  /* float: right; */\n  font-size: 18px;\n  /* margin-right: 20px; */\n  background: #3cdc7f;\n  color: #fff;\n  border-radius: 39%;\n  border-bottom-left-radius: 0px;\n  padding: 4px;\n  min-width: 31px !important;\n  text-align: center !important;\n  position: absolute;\n  right: 6px;\n  top: -21px; }\n\n.backgrey {\n  background: #f9f9f9; }\n\nion-card-subtitle {\n  font-size: 18px; }\n\n.prop_titl {\n  font-size: 20px;\n  font-weight: 400;\n  margin-top: 12px; }\n\n.prop_count {\n  margin-top: 36px;\n  font-size: 42px;\n  font-weight: 300; }\n\n.col_border_left {\n  border-right: 1px solid #f5f1f1; }\n\nhr {\n  background: #ece9e9; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9JbnN0YXJlbnQvSW5zdGFyZW50IFJlcG9zL2FnZW50X3Rlc3RfcHJvamVjdC9pb25pYzQtdGVtcGxhdGUvc3JjL2FwcC9wYWdlcy9hZ2VuY3ktZGFzaGJvYXJkL2FnZW5jeS1kYXNoYm9hcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNkJBQTZCLEVBQUE7O0FBSWpDO0VBS1Esa0JBQUE7RUFDQSxlQUFlO0VBQ2Ysd0JBQUE7RUFFQSxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQiw4QkFBOEI7RUFDOUIsWUFBWTtFQUNaLDBCQUEwQjtFQUMxQiw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixVQUFVLEVBQUE7O0FBRWxCO0VBQ0ksbUJBQW1CLEVBQUE7O0FBRXZCO0VBQ0ksZUFBZSxFQUFBOztBQUVuQjtFQUNJLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0ksZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSwrQkFBK0IsRUFBQTs7QUFFbkM7RUFDSSxtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FnZW5jeS1kYXNoYm9hcmQvYWdlbmN5LWRhc2hib2FyZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZF9kYXNoYm9hcmR7XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICMzYmRjN2U7XG59XG5cblxuLnJpZ2h0X2FsaWduZmxvdHtcbiAgICAvLyBmbG9hdDogcmlnaHQ7XG4gICAgLy8gZm9udC1zaXplOiAxOHB4O1xuICAgIC8vIG1hcmdpbi1yaWdodDogMjBweDtcblxuICAgICAgICAvKiBmbG9hdDogcmlnaHQ7ICovXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgLyogbWFyZ2luLXJpZ2h0OiAyMHB4OyAqL1xuICAgICAgICAvLyBiYWNrZ3JvdW5kOiAjZDJkMGQwO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjM2NkYzdmO1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzklO1xuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwcHg7XG4gICAgICAgIHBhZGRpbmc6IDRweDtcbiAgICAgICAgbWluLXdpZHRoOiAzMXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiA2cHg7XG4gICAgICAgIHRvcDogLTIxcHg7XG59XG4uYmFja2dyZXl7XG4gICAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcbn1cbmlvbi1jYXJkLXN1YnRpdGxle1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cbi5wcm9wX3RpdGx7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbWFyZ2luLXRvcDogMTJweDtcbn1cbi5wcm9wX2NvdW50e1xuICAgIG1hcmdpbi10b3A6IDM2cHg7XG4gICAgZm9udC1zaXplOiA0MnB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgXG59XG4uY29sX2JvcmRlcl9sZWZ0e1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmNWYxZjE7XG59XG5ocntcbiAgICBiYWNrZ3JvdW5kOiAjZWNlOWU5O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/pages/agency-dashboard/agency-dashboard.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/agency-dashboard/agency-dashboard.page.ts ***!
  \*****************************************************************/
/*! exports provided: AgencyDashboardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgencyDashboardPage", function() { return AgencyDashboardPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AgencyDashboardPage = /** @class */ (function () {
    function AgencyDashboardPage() {
    }
    AgencyDashboardPage.prototype.ngOnInit = function () {
    };
    AgencyDashboardPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-agency-dashboard',
            template: __webpack_require__(/*! ./agency-dashboard.page.html */ "./src/app/pages/agency-dashboard/agency-dashboard.page.html"),
            styles: [__webpack_require__(/*! ./agency-dashboard.page.scss */ "./src/app/pages/agency-dashboard/agency-dashboard.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AgencyDashboardPage);
    return AgencyDashboardPage;
}());



/***/ })

}]);
//# sourceMappingURL=agency-dashboard-agency-dashboard-module.js.map