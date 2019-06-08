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

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>DASHBOARD</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content padding>\n<p text-center>Welcome to Dashboard</p>\n   \n  </ion-content>\n  "

/***/ }),

/***/ "./src/app/pages/agency-dashboard/agency-dashboard.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/agency-dashboard/agency-dashboard.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FnZW5jeS1kYXNoYm9hcmQvYWdlbmN5LWRhc2hib2FyZC5wYWdlLnNjc3MifQ== */"

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