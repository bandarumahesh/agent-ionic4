(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-membership-for-agency-membership-for-agency-module"],{

/***/ "./src/app/pages/membership-for-agency/membership-for-agency.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/membership-for-agency/membership-for-agency.module.ts ***!
  \*****************************************************************************/
/*! exports provided: MembershipForAgencyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembershipForAgencyPageModule", function() { return MembershipForAgencyPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _membership_for_agency_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./membership-for-agency.page */ "./src/app/pages/membership-for-agency/membership-for-agency.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _membership_for_agency_page__WEBPACK_IMPORTED_MODULE_5__["MembershipForAgencyPage"],
    }
];
var MembershipForAgencyPageModule = /** @class */ (function () {
    function MembershipForAgencyPageModule() {
    }
    MembershipForAgencyPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_membership_for_agency_page__WEBPACK_IMPORTED_MODULE_5__["MembershipForAgencyPage"]]
        })
    ], MembershipForAgencyPageModule);
    return MembershipForAgencyPageModule;
}());



/***/ }),

/***/ "./src/app/pages/membership-for-agency/membership-for-agency.page.html":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/membership-for-agency/membership-for-agency.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Membership For Agency</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n<ion-card>\n  <p text-center>{{data.name}}</p>\n  <p text-center>{{data.email}}</p>\n\n\n  \n</ion-card>\n<ion-button expand=\"full\" color=\"secondary\" (click)=\"completeMembership()\" >complete membership</ion-button>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/membership-for-agency/membership-for-agency.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/membership-for-agency/membership-for-agency.page.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21lbWJlcnNoaXAtZm9yLWFnZW5jeS9tZW1iZXJzaGlwLWZvci1hZ2VuY3kucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/membership-for-agency/membership-for-agency.page.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/membership-for-agency/membership-for-agency.page.ts ***!
  \***************************************************************************/
/*! exports provided: MembershipForAgencyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembershipForAgencyPage", function() { return MembershipForAgencyPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { AuthService } from '../../core/auth/auth.service';

var MembershipForAgencyPage = /** @class */ (function () {
    function MembershipForAgencyPage(router, route, storage) {
        this.router = router;
        this.route = route;
        this.storage = storage;
        //  selectedPath = '';
        this.firstdata = {};
        this.data = {};
        this.pages = [
            {
                title: 'First Page with Tabs',
                url: '/membership'
            }
        ];
        // this.router.events.subscribe((event: RouterEvent) => {
        //   if (event && event.url) {
        //     this.selectedPath = event.url;
        //     console.log("hello",this.selectedPath)
        //   }
        // });
        // 1st method from home page
        // this.route.queryParams.subscribe(params =>{
        // console.log(params)
        // if(params && params.special){
        // this.firstdata=params.special;
        // console.log("data",this.data)
        // this.data=JSON.parse(params.special)  //for object but not good one try to use data share for object share
        // }
        // })
        //  3 rd method state 
        //  if(this.router.getCurrentNavigation().extras.state){
        //   this.data=this.router.getCurrentNavigation().extras.state.user;
        //   console.log("this",this.data)
        // }
    }
    MembershipForAgencyPage.prototype.ngOnInit = function () {
        //2nd method params data sharing form home page by params ******  this is best for large object ******
        //  if(this.route.snapshot.data['special']){
        //    this.data=this.route.snapshot.data['special'];
        //    console.log("dta",this.route.snapshot.data)
        //  }
        console.log("dta", this.router.getCurrentNavigation());
    };
    MembershipForAgencyPage.prototype.logout = function () {
        // this.authService.logout();
        this.router.navigateByUrl('');
    };
    MembershipForAgencyPage.prototype.completeMembership = function () {
        this.storage.set('membership', 'completed').then(function (res) {
        });
        this.router.navigateByUrl('/menu/first');
    };
    MembershipForAgencyPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-membership-for-agency',
            template: __webpack_require__(/*! ./membership-for-agency.page.html */ "./src/app/pages/membership-for-agency/membership-for-agency.page.html"),
            styles: [__webpack_require__(/*! ./membership-for-agency.page.scss */ "./src/app/pages/membership-for-agency/membership-for-agency.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]])
    ], MembershipForAgencyPage);
    return MembershipForAgencyPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-membership-for-agency-membership-for-agency-module.js.map