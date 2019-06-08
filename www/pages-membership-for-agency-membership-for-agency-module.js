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

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <!-- <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons> -->\n    <ion-buttons slot=\"start\" *ngIf=\"globaldata.id\">\n        <ion-back-button id=\"backbutton\" defaulthref=\"menu/profile\"></ion-back-button>\n      </ion-buttons>\n    <ion-title *ngIf=\"!globaldata.id\">MEMBERSHIP FOR AGENCY</ion-title>\n    <ion-title *ngIf=\"globaldata.id\">EDIT PROFILE</ion-title>\n    <ion-buttons slot=\"primary\">\n        <ion-button (click)=\"logout()\" *ngIf=\"!globaldata.id\">\n          <ion-icon slot=\"icon-only\" name=\"power\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n<!-- <ion-card> -->\n  <!-- <p text-center>{{data.name}}</p> -->\n  <!-- <p text-center>{{data.email}}</p> -->\n<!-- </ion-card> -->\n<div  class=\"lable_float\" *ngIf=\"wizardStep === 1\">\n    <div class=\"profilePic main-pic\">\n        <ion-row>\n          <ion-col col-12 >\n            <ion-list no-lines>\n              <div class=\"main-picsss\" id=\"back-ground\">\n                <!-- <ion-avatar item-start> -->\n                  <img src=\"{{profilePicture}}\" onerror=\"this.onerror=null;this.src='assets/imgs/profilepic.svg'\" alt=\"Profile Pic\">\n                  <div class=\"red-cam\" (click)=\"uploadPhoto()\">\n                    <ion-icon name=\"camera\"></ion-icon>\n                  </div>\n                <!-- </ion-avatar> -->\n              </div>\n            </ion-list>\n          </ion-col>\n        </ion-row>\n      </div>\n  <ion-item style=\"margin-top:225px\">\n      <ion-label position=\"floating\" >  Business Name</ion-label>\n      <ion-input name=\"businessName\" type=\"text\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\" minlength=\"2\" maxlength=\"30\" ngModel required></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label position=\"floating\" >  Business Address</ion-label>\n    <ion-input name=\"businessName\" type=\"text\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\" minlength=\"2\" maxlength=\"30\" ngModel required></ion-input>\n</ion-item>\n<ion-item class=\"f-item pad-pt\">\n  <ion-label position=\"floating\" > Business Contact</ion-label>\n  <ion-input type=\"tel\" minlength=\"10\" ngModel  maxlength=\"10\" name=\"phoneNumber\" required></ion-input>\n</ion-item>\n<ion-item>\n  <ion-label position=\"floating\" > Business Email </ion-label>\n  <ion-input type=\"email\" name=\"email\" ngModel required></ion-input>\n</ion-item>\n\n<h4 class=\"businesss_admin\"> Business Admin</h4>\n<ion-item>\n  <ion-label position=\"floating\" >  Admin Name</ion-label>\n  <ion-input name=\"businessName\" type=\"text\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\" minlength=\"2\" maxlength=\"30\" ngModel required></ion-input>\n</ion-item>\n<ion-item class=\"f-item pad-pt\">\n  <ion-label position=\"floating\" > Mobile Number</ion-label>\n  <ion-input type=\"tel\" minlength=\"10\" ngModel  maxlength=\"10\" name=\"phoneNumber\" required></ion-input>\n</ion-item>\n<ion-item>\n  <ion-label position=\"floating\" > Email </ion-label>\n  <ion-input type=\"email\" name=\"email\" ngModel required></ion-input>\n</ion-item>\n</div>\n<div padding class=\"lable_float\" *ngIf=\"wizardStep === 2\">\n<h4>Terms and condtions</h4>\n\n<p style=\"line-height:30px;\">\n  Terms of service are rules by which one must agree to abide in order to use a service. \n  Terms of service can also be merely a disclaimer, especially regarding the use of websites.\n   Often times in the fine text there will be sentences saying that they are not responsible for any lost data,\n    Terms of service are rules by which one must agree to abide in order to use a service. Terms of service can also be merely a disclaimer,\n     especially regarding the use of websites. Often times in the fine text there will be sentences saying that they are not responsible for any lost data,\n</p>\n<div>\n    <ion-checkbox color=\"primary\" [(ngModel)]=\"termsandConditons\" name=\"termsandConditons\" class=\"terms_conditions\"></ion-checkbox> \n    <span>Accept terms & conditions</span>\n</div>\n</div>\n<div padding class=\"lable_float\" *ngIf=\"wizardStep === 3\">\n    <div  class=\"main_check_Div\" style=\"    margin-top: 26%;\">\n        <svg class=\"checkmark_success\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 52 52\"><circle class=\"checkmark_success__circle\" cx=\"26\" cy=\"26\" r=\"25\" fill=\"none\"/><path class=\"checkmark_success__check\" fill=\"none\" d=\"M14.1 27.2l7.1 7.2 16.7-16.8\"/></svg>\n        <!-- <button ion-button class=\"submit_appli\" \n        (click)=\"submitApplication()\">\n        CLICK HERE TO\n        <br /> GO LIVE</button> -->\n        <p class=\"Congrats\"> Membership completed  <br /> Successful </p>\n        <!-- <p class=\"small_congrats\">your property is now live.</p> -->\n      </div>\n    <div text-center>\n        <ion-button  color=\"primary\" (click)=\"completeMembership()\" >GO TO DASHBOARD</ion-button>\n    </div>\n  </div>\n\n</ion-content>\n<ion-footer>\n    <ion-toolbar>\n        <ion-buttons slot=\"primary\" *ngIf=\"wizardStep === 1\"  >\n            <ion-button (click)=\"gonext()\" class=\"footer_subbtns\" *ngIf=\"!globaldata.id\">\n              Next\n              <ion-icon name=\"arrow-forward\" class=\"hellos\"></ion-icon>\n            </ion-button>\n            <ion-button (click)=\"gotoprofile()\" class=\"footer_subbtns\" *ngIf=\"globaldata.id\">\n                Save\n                <ion-icon name=\"arrow-forward\" class=\"hellos\"></ion-icon>\n                </ion-button>\n          </ion-buttons>\n          <ion-buttons slot=\"primary\" *ngIf=\"wizardStep === 2\" class=\"footer_butns\">\n              <ion-button (click)=\"gotoPreviousStep()\" class=\"footer_subbtns\">\n                  <ion-icon name=\"arrow-back\"  class=\"hellos\"></ion-icon> \n                  Back\n                </ion-button>\n              <ion-button (click)=\"gonext()\" class=\"footer_subbtns\">\n                Finish\n                <!-- <ion-icon slot=\"icon-only\" name=\"star\"></ion-icon> -->\n                <ion-icon name=\"arrow-forward\" class=\"hellos\"></ion-icon>\n              </ion-button>\n            </ion-buttons>\n    </ion-toolbar>\n  </ion-footer>\n  <!-- <ion-icon name=\"arrow-back\"  class=\"hellos\"></ion-icon> -->\n  <!-- gotoPreviousStep -->"

/***/ }),

/***/ "./src/app/pages/membership-for-agency/membership-for-agency.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/membership-for-agency/membership-for-agency.page.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profilePic .list {\n  margin-bottom: 5px;\n  background-color: transparent; }\n  .profilePic .list .main-picsss img {\n    width: 130px;\n    height: 130px; }\n  .profilePic .list .main-picsss .button {\n    height: 40px; }\n  .main-picsss {\n  margin: 0 auto;\n  width: 150px;\n  background: transparent !important;\n  padding-top: 45px;\n  padding-left: 0px !important;\n  border-bottom: 0px; }\n  .main-pic {\n  background: linear-gradient(to bottom, #3bdc7e, #b0e66d);\n  position: absolute;\n  /* bottom: 100px; */\n  width: 100%;\n  left: 0;\n  top: 0px; }\n  #back-ground {\n  background: transparent !important; }\n  .main-divvc {\n  padding-top: 146px; }\n  .footer_butns {\n  width: 100%;\n  justify-content: space-between; }\n  ion-item {\n  padding: 4px 16px 4px 5px; }\n  .businesss_admin {\n  padding-left: 18px;\n  margin-top: 34px; }\n  .footer_subbtns {\n  font-size: 18px !important; }\n  .hellos {\n  position: relative;\n  top: 0.6px; }\n  .terms_conditions {\n  position: relative;\n  top: 6px;\n  margin-right: 11px; }\n  @media all and (min-width: 768px) and (max-width: 1024px) {\n  .main-picsss {\n    margin: 0 auto;\n    width: 240px !important;\n    background: transparent !important;\n    padding-top: 25px !important; }\n  .red-cam {\n    width: 47px !important;\n    height: 47px !important;\n    background-color: #4caf50;\n    color: white;\n    position: relative;\n    top: -48px !important;\n    right: -121px !important;\n    padding-left: 14px !important;\n    padding-top: 12px !important;\n    border-radius: 50%;\n    font-size: 20px;\n    border: 2px solid #fff; }\n  .main-pic {\n    background: linear-gradient(to bottom, #20c659, #a8e063);\n    position: absolute;\n    /* bottom: 100px; */\n    width: 100%;\n    left: 0;\n    top: 0px;\n    padding-bottom: 180px !important; }\n  .main-divvc {\n    padding-top: 215px !important; }\n  .profilePic .list .main-picsss ion-avatar img {\n    width: 185px !important;\n    height: 185px !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9JbnN0YXJlbnQvSW5zdGFyZW50IFJlcG9zL2FnZW50X3Rlc3RfcHJvamVjdC9pb25pYzQtdGVtcGxhdGUvc3JjL2FwcC9wYWdlcy9tZW1iZXJzaGlwLWZvci1hZ2VuY3kvbWVtYmVyc2hpcC1mb3ItYWdlbmN5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLGtCQUFrQjtFQUNsQiw2QkFBNkIsRUFBQTtFQUhyQztJQU1vQixZQUFZO0lBQ1osYUFBYSxFQUFBO0VBUGpDO0lBVWdCLFlBQVksRUFBQTtFQUs1QjtFQUNJLGNBQWM7RUFDZCxZQUFZO0VBQ1osa0NBQWtDO0VBQ2xDLGlCQUFpQjtFQUNqQiw0QkFBNEI7RUFDNUIsa0JBQWtCLEVBQUE7RUFFdEI7RUFFQSx3REFBd0Q7RUFDdEQsa0JBQWtCO0VBQ2xCLG1CQUFBO0VBQ0EsV0FBVztFQUNYLE9BQU87RUFDUCxRQUFRLEVBQUE7RUFHVjtFQUNJLGtDQUFrQyxFQUFBO0VBRXRDO0VBQ0ksa0JBQWtCLEVBQUE7RUFNdEI7RUFDSSxXQUFXO0VBQ1gsOEJBQThCLEVBQUE7RUFFbEM7RUFDSSx5QkFBeUIsRUFBQTtFQUU3QjtFQUNJLGtCQUFrQjtFQUNsQixnQkFBZ0IsRUFBQTtFQUVwQjtFQUNJLDBCQUEwQixFQUFBO0VBRTlCO0VBQ0ksa0JBQWtCO0VBQ2xCLFVBQVUsRUFBQTtFQUVkO0VBQ0ksa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixrQkFBa0IsRUFBQTtFQUt0QjtFQUVBO0lBQ0ksY0FBYztJQUNkLHVCQUF1QjtJQUN2QixrQ0FBa0M7SUFDbEMsNEJBQTRCLEVBQUE7RUFHaEM7SUFDSSxzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQix3QkFBd0I7SUFDeEIsNkJBQTZCO0lBQzdCLDRCQUE0QjtJQUM1QixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLHNCQUFzQixFQUFBO0VBRTFCO0lBQ0ksd0RBQXdEO0lBQ3hELGtCQUFrQjtJQUNsQixtQkFBQTtJQUNBLFdBQVc7SUFDWCxPQUFPO0lBQ1AsUUFBUTtJQUNSLGdDQUFnQyxFQUFBO0VBRXBDO0lBQ0ksNkJBQTZCLEVBQUE7RUFHakM7SUFDQSx1QkFBdUI7SUFDdkIsd0JBQXdCLEVBQUEsRUFDdkIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tZW1iZXJzaGlwLWZvci1hZ2VuY3kvbWVtYmVyc2hpcC1mb3ItYWdlbmN5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxlUGlje1xuICAgIC5saXN0e1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAubWFpbi1waWNzc3Mge1xuICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMzBweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMzBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAuYnV0dG9uIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4ubWFpbi1waWNzc3N7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy10b3A6IDQ1cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcbiAgICBib3JkZXItYm90dG9tOiAwcHg7XG59XG4ubWFpbi1waWN7XG4vLyAgIGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzIwYzY1OSwgI2E4ZTA2Myk7XG5iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjM2JkYzdlLCAjYjBlNjZkKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAvKiBib3R0b206IDEwMHB4OyAqL1xuICB3aWR0aDogMTAwJTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwcHg7XG4vLyAgIHBhZGRpbmctYm90dG9tOiAxNjBweDtcbn1cbiNiYWNrLWdyb3VuZHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuLm1haW4tZGl2dmN7XG4gICAgcGFkZGluZy10b3A6IDE0NnB4O1xufVxuXG5cblxuXG4uZm9vdGVyX2J1dG5ze1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbmlvbi1pdGVte1xuICAgIHBhZGRpbmc6IDRweCAxNnB4IDRweCA1cHg7XG59XG4uYnVzaW5lc3NzX2FkbWlue1xuICAgIHBhZGRpbmctbGVmdDogMThweDtcbiAgICBtYXJnaW4tdG9wOiAzNHB4O1xufVxuLmZvb3Rlcl9zdWJidG5ze1xuICAgIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xufVxuLmhlbGxvc3tcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAwLjZweDtcbn1cbi50ZXJtc19jb25kaXRpb25ze1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDZweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDExcHg7XG59XG5cblxuXG5AbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAgIFxuLm1haW4tcGljc3Nze1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHdpZHRoOiAyNDBweCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy10b3A6IDI1cHggIWltcG9ydGFudDtcblxufVxuLnJlZC1jYW0ge1xuICAgIHdpZHRoOiA0N3B4ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiA0N3B4ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRjYWY1MDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogLTQ4cHggIWltcG9ydGFudDtcbiAgICByaWdodDogLTEyMXB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAxNHB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy10b3A6IDEycHggIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG59XG4ubWFpbi1waWN7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzIwYzY1OSwgI2E4ZTA2Myk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIC8qIGJvdHRvbTogMTAwcHg7ICovXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTgwcHggIWltcG9ydGFudDtcbn1cbi5tYWluLWRpdnZje1xuICAgIHBhZGRpbmctdG9wOiAyMTVweCAhaW1wb3J0YW50O1xufVxuXG4ucHJvZmlsZVBpYyAubGlzdCAubWFpbi1waWNzc3MgaW9uLWF2YXRhciBpbWcge1xud2lkdGg6IDE4NXB4ICFpbXBvcnRhbnQ7XG5oZWlnaHQ6IDE4NXB4ICFpbXBvcnRhbnQ7XG59XG59Il19 */"

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
/* harmony import */ var _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/auth/auth.service */ "./src/app/core/auth/auth.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





// import { AlertCallsProvider } from 'src/app/providers/alert-calls/alert-calls';
var MembershipForAgencyPage = /** @class */ (function () {
    function MembershipForAgencyPage(router, route, storage, authService, alertController) {
        this.router = router;
        this.route = route;
        this.storage = storage;
        this.authService = authService;
        this.alertController = alertController;
        this.globaldata = {};
        //  selectedPath = '';
        this.wizardStep = 1;
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
        //     let selectedPath = event.url;
        //     console.log("hello",selectedPath)
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
        // 4th method from profile
        this.globaldata.id = this.route.snapshot.paramMap.get('id');
    }
    MembershipForAgencyPage.prototype.ngOnInit = function () {
        // 2nd method params data sharing form home page by params ******  this is best for large object ******
        //  if(this.route.snapshot.data['special']){
        //    this.data=this.route.snapshot.data['special'];
        //    console.log("dta",this.route.snapshot.data)
        //  }
        console.log('dta', this.router.getCurrentNavigation());
    };
    MembershipForAgencyPage.prototype.logout = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Confirm!',
                            message: 'Do you want to logout ?',
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                    }
                                }, {
                                    text: 'Logout',
                                    handler: function () {
                                        _this.confirmLogout();
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MembershipForAgencyPage.prototype.confirmLogout = function () {
        this.authService.logout();
        this.router.navigateByUrl('');
    };
    MembershipForAgencyPage.prototype.uploadPhoto = function () {
    };
    MembershipForAgencyPage.prototype.completeMembership = function () {
        this.storage.set('membership', 'completed').then(function (res) {
        });
        this.router.navigateByUrl('/menu/first');
    };
    MembershipForAgencyPage.prototype.gonext = function () {
        if (this.wizardStep == 2) {
            if (this.termsandConditons == false || this.termsandConditons == 'false' || this.termsandConditons == null) {
                // this.alertCall.showToastAlert('Please accept terms & conditions', 'red')
                alert('Please accept terms & conditions');
                return;
            }
            else {
                this.wizardStep++;
            }
        }
        else {
            this.wizardStep++;
        }
    };
    MembershipForAgencyPage.prototype.gotoprofile = function () {
        var element = document.getElementById('backbutton').click();
    };
    MembershipForAgencyPage.prototype.gotoPreviousStep = function () {
        this.wizardStep--;
    };
    MembershipForAgencyPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-membership-for-agency',
            template: __webpack_require__(/*! ./membership-for-agency.page.html */ "./src/app/pages/membership-for-agency/membership-for-agency.page.html"),
            styles: [__webpack_require__(/*! ./membership-for-agency.page.scss */ "./src/app/pages/membership-for-agency/membership-for-agency.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
            _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
    ], MembershipForAgencyPage);
    return MembershipForAgencyPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-membership-for-agency-membership-for-agency-module.js.map