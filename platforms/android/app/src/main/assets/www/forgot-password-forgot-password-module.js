(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forgot-password-forgot-password-module"],{

/***/ "./src/app/forgot-password/forgot-password.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.module.ts ***!
  \***********************************************************/
/*! exports provided: ForgotPasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPageModule", function() { return ForgotPasswordPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _forgot_password_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forgot-password.page */ "./src/app/forgot-password/forgot-password.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _forgot_password_page__WEBPACK_IMPORTED_MODULE_5__["ForgotPasswordPage"]
    }
];
var ForgotPasswordPageModule = /** @class */ (function () {
    function ForgotPasswordPageModule() {
    }
    ForgotPasswordPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_forgot_password_page__WEBPACK_IMPORTED_MODULE_5__["ForgotPasswordPage"]]
        })
    ], ForgotPasswordPageModule);
    return ForgotPasswordPageModule;
}());



/***/ }),

/***/ "./src/app/forgot-password/forgot-password.page.html":
/*!***********************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button id=\"backbutton\" defaulthref=\"\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>FORGOT PASSWORD</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding class=\"regis-content\" id=\"cont-tent\">\n      <div class=\"regis-header\" *ngIf=\"wizardStep != 4\">\n        <img src=\"assets/imgs/instarentlogoupdated.png\" style=\"width:58%;height: 10%;\" />\n      </div>\n      <div>\n        <div class=\"registration-step\" *ngIf=\"wizardStep == 1\">\n          <div>\n            <div class=\"registration-step\">\n              <div class=\"header\">\n                Verify Your Email\n              </div>\n              <form class=\"green-form\">\n                <div>\n                  <ion-item class=\"lable_float\">\n                      <ion-label position=\"floating\" > <ion-icon  item-start name=\"mail\" ></ion-icon>Email </ion-label>\n                      <ion-input type=\"email\" style=\"text-transform: lowercase;\"  pattern=\"\"  autocapitalize=\"off\" name=\"userEmail\" [(ngModel)]=\"userEmail\" required></ion-input>\n                    </ion-item>\n                </div>\n                <div class=\"btn ram-cls\">\n                    <ion-button type=\"submit\" [disabled]=\"!userEmail\" (click)=\"checkUserEmail()\" expand=\"block\" >Verify</ion-button>\n\n                </div>\n              </form>\n            </div>\n          </div>\n        </div>\n        <div *ngIf=\"wizardStep == 2\">\n          <div class=\"registration-step\">\n            <div class=\"header2\">\n              Enter the code sent to your registered <br> Email \n           </div>\n            <form class=\"for-text\">\n              <div>\n                <ion-item class=\"f-item pad-pt\">\n                    <ion-input class=\"otp-input te-t\" type=\"tel\"  minlength=\"4\" maxlength=\"4\" name=\"otp\" [(ngModel)]=\"userOTP\" name=\"userOTP\"  required></ion-input>\n                  </ion-item>\n\n\n              </div>\n              <div class=\"otp-label\">\n                <a (click)=\"resendOtp()\"> Resend Verification Code ? </a>\n              </div>\n              <div class=\"btns\">\n                <!-- <button ion-button block class=\"button-md-secondary sub-tagbtn\" type=\"submit\"\n                  (click)=\"checkOtp()\">SUBMIT</button> -->\n                  <ion-button type=\"submit\" (click)=\"checkOtp()\" class=\" sub-tagbtn\" expand=\"block\" >Verify</ion-button>\n\n              </div>\n            </form>\n          </div>\n        </div>\n        <div *ngIf=\"wizardStep == 3\">\n          <div>\n            <div class=\"registration-step\">\n              <div class=\"header\">\n                Create New Password\n              </div>\n              <div>\n                <div class=\"max-mac\">\n                  <ion-list style=\"position:relative;    padding: 2px 23px 0px 23px;\">\n                  \n                    <div style=position:relative>\n                        <ion-item>\n                            <ion-label position=\"floating\" >New Password</ion-label>\n                            <ion-input [(ngModel)]=\"newPassword1\" [type]=\"passwordType\" clearOnEdit=\"false\" name=\"userPassword\"></ion-input>\n                        </ion-item>\n                       <ion-icon item-end [name]=\"passwordIcon\" class=\"passwordIcon\" (click)='hideShowPassword()'></ion-icon>\n                    </div>\n\n\n                   <!-- <p *ngIf=\"formatMatch==1\" style=\"padding-left: 20px;color: red;margin-top: 0px;text-align: start;\">Password must contain\n                      at least six characters,\n                      including special character, uppercase, lowercase letters and numbers.</p> -->\n                      <div style=position:relative>\n                      <ion-item>\n                          <ion-label position=\"floating\" >Confirm Password</ion-label>\n                          <ion-input [(ngModel)]=\"newPassword2\" [type]=\"passwordType\" (keyup)=\"checkPassword()\" clearOnEdit=\"false\" name=\"userPassword\"></ion-input>\n                      </ion-item>\n                     <ion-icon item-end [name]=\"passwordIcon\" class=\"passwordIcon\" (click)='hideShowPassword()'></ion-icon>\n                    </div>\n                    <p *ngIf=\"isMatch==0\" style=\"padding-left: 20px;color: red;text-align: start;\">password doesn't match\n                    </p>\n                    <p *ngIf=\"isMatch==1\" style=\"padding-left: 20px;color: green;text-align: start;\">password matched</p>\n                  </ion-list>\n                  <!-- <button type=\"submit\" color=\"secondary\" ion-button full class=\"button-md-secondary demonty-tbtn\"\n                    style=\"width:95% !important\" (click)=\"updatePassword()\" >Change\n                    Password</button> -->\n                    <ion-button type=\"submit\" (click)=\"updatePassword()\" class=\" sub-tagbtn\" expand=\"block\" >Verify</ion-button>\n\n                    <!-- [disabled]=\"isMatch==0||isMatch==2\" -->\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div *ngIf=\"wizardStep == 4\" class=\"registration-step\">\n          <div  class=\"main_check_Div\">\n              <svg class=\"checkmark_success\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 52 52\"><circle class=\"checkmark_success__circle\" cx=\"26\" cy=\"26\" r=\"25\" fill=\"none\"/><path class=\"checkmark_success__check\" fill=\"none\" d=\"M14.1 27.2l7.1 7.2 16.7-16.8\"/></svg>\n              <!-- <button ion-button class=\"submit_appli\" \n              (click)=\"submitApplication()\">\n              CLICK HERE TO\n              <br /> GO LIVE</button> -->\n              <p class=\"Congrats\"> Password Update  <br /> Successful </p>\n              <!-- <p class=\"small_congrats\">your property is now live.</p> -->\n            </div>\n          <div>\n              <ion-button type=\"submit\" class=\"succes_login\" (click)=\"gotoSignin()\" >Login</ion-button>\n            <!-- <button ion-button class=\"button-md-secondary sign-change\" type=\"submit\" (click)=\"gotoSignin()\">login</button> \n            \n [routerLink]=\"['/home',{'from':'forgot'}]\"  routerLinkActive=\"router-link-active\"  \n            -->\n          </div>\n        </div>\n      </div>\n    </ion-content>"

/***/ }),

/***/ "./src/app/forgot-password/forgot-password.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".lable_float ion-label {\n  position: relative;\n  top: 2.5px;\n  width: 100%;\n  font-size: 15px; }\n\n.lable_float ion-icon {\n  position: relative;\n  top: 2.5px;\n  width: 22px;\n  margin-right: 2%; }\n\n.lable_float ion-input {\n  font-size: 15px;\n  padding-left: 5px !important;\n  color: #615f5f;\n  font-weight: 400; }\n\n.passwordIcon {\n  font-size: 2rem !important;\n  position: absolute !important;\n  top: 33px !important;\n  margin: 0 auto !important;\n  right: 0px; }\n\n.succes_login {\n  width: 43%; }\n\n#cont-tent .scroll-content {\n  padding: 10px;\n  margin-bottom: 0px !important; }\n\n#inspect {\n  font-size: 16px;\n  text-transform: uppercase;\n  position: relative;\n  bottom: 11px;\n  color: #fff;\n  font-family: 'Altair-Bold'; }\n\n.eye-cls {\n  position: absolute;\n  bottom: 71px;\n  font-size: 23px;\n  right: 20px;\n  z-index: 9999;\n  position: relative;\n  bottom: 30px;\n  left: 135px;\n  font-size: 23px; }\n\n.head-y {\n  padding-top: 21px !important; }\n\n.t-icons {\n  margin-right: 10px;\n  color: #4CAF50 !important; }\n\n.otp-input {\n  letter-spacing: 49px;\n  text-align: center;\n  font-size: 25px;\n  font-weight: 600;\n  color: grey;\n  padding-left: 18% !important;\n  width: 100%; }\n\n.te-t ::-webkit-input-placeholder {\n  /* Chrome/Opera/Safari */\n  letter-spacing: 0px !important;\n  font-size: 12px !important;\n  text-align: start; }\n\n.te-t ::-moz-placeholder {\n  /* Firefox 19+ */\n  letter-spacing: 1px !important;\n  font-size: 12px !important;\n  text-align: start; }\n\n.te-t :-ms-input-placeholder {\n  /* IE 10+ */\n  letter-spacing: 1px !important;\n  font-size: 12px !important;\n  text-align: start; }\n\n.get-otpbtnn {\n  margin-top: 25px !important; }\n\n.for-text {\n  padding-right: 20px;\n  padding: 5px 20px; }\n\n.sub-tagbtn {\n  margin-top: 30px;\n  margin-left: 0px !important;\n  width: 100% !important; }\n\n.demonty-tbtn {\n  margin-left: 14px;\n  margin-top: 18px; }\n\n.toolbar .toolbar-title {\n  color: #fff;\n  font-size: 1.6rem;\n  text-transform: uppercase; }\n\n.regis-page-header .btn-bar {\n  color: white; }\n\n.regis-content {\n  background-color: #fff;\n  color: #8d8d8d;\n  padding: 25px !important;\n  text-align: center; }\n\n.regis-content .regis-header {\n    display: flex;\n    justify-content: center;\n    text-align: center;\n    padding-top: 40px; }\n\n.regis-content .sign-change {\n    padding: 20px 100px !important; }\n\n.regis-content .icons-in {\n    position: absolute;\n    left: 4px;\n    margin-bottom: 10px;\n    top: 2px; }\n\n.regis-content .alt-jet {\n    padding-left: 40px !important; }\n\n.regis-content .in-item {\n    padding-left: 4px !important; }\n\n.regis-content .green-form {\n    padding: 20px !important;\n    padding-top: 0px !important; }\n\n.regis-content .registration-step {\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    text-align: center;\n    padding-top: 20px;\n    padding-right: px; }\n\n.regis-content .registration-step .header {\n      font-size: 22px;\n      padding-top: 11px;\n      color: #7a7878;\n      padding-bottom: 30px; }\n\n.regis-content .registration-step .header2 {\n      font-size: 18px;\n      padding-top: 11px;\n      color: #7a7878;\n      padding-bottom: 30px; }\n\n.regis-content .registration-step .header3 {\n      font-size: 22px;\n      padding-top: 11px;\n      color: #7a7878;\n      padding-bottom: 30px; }\n\n.regis-content .registration-step .lbl-header {\n      padding-top: 10px;\n      color: #423c3c; }\n\n.regis-content .registration-step .icon {\n      color: #423c3c; }\n\n.regis-content .registration-step .item {\n      background: #fff; }\n\n.regis-content .registration-step .label[stacked],\n    .regis-content .registration-step .label[floating] {\n      color: white;\n      font-size: 14px; }\n\n.regis-content .registration-step .btn {\n      padding-top: 20px; }\n\n.regis-content .registration-step .btns {\n      display: flex;\n      flex: 1 1 auto;\n      justify-content: space-between; }\n\n.regis-content .registration-step .otp-label {\n      padding-top: 12px;\n      text-align: end;\n      color: #000;\n      cursor: pointer !important; }\n\n.regis-content .registration-step img {\n      width: 80px;\n      height: 80px; }\n\n.regis-content .item-input-has-focus .item-inner,\n  .regis-content .item.input-has-focus .item-inner {\n    border-bottom-color: #4CAF50;\n    box-shadow: inset 0 -1px 0 0 #4CAF50; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9JbnN0YXJlbnQvSW5zdGFyZW50IFJlcG9zL2FnZW50X3Rlc3RfcHJvamVjdC9pb25pYzQtdGVtcGxhdGUvc3JjL2FwcC9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztFQUNYLGVBQWUsRUFBQTs7QUFMbkI7RUFRSSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxnQkFBZ0IsRUFBQTs7QUFYcEI7RUFjSSxlQUFlO0VBQ2YsNEJBQTRCO0VBQzVCLGNBQWM7RUFDZCxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSwwQkFBMEI7RUFDMUIsNkJBQTZCO0VBQzdCLG9CQUFvQjtFQUNwQix5QkFBeUI7RUFDekIsVUFBVSxFQUFBOztBQUVkO0VBQ0ksVUFBVSxFQUFBOztBQUtkO0VBQ0ksYUFBYTtFQUNiLDZCQUE2QixFQUFBOztBQUVqQztFQUNJLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsMEJBQTBCLEVBQUE7O0FBRTlCO0VBQ0ksa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixlQUFlO0VBQ2YsV0FBVztFQUNYLGFBQWE7RUFBTyxrQkFBa0I7RUFDdEMsWUFBWTtFQUNaLFdBQVc7RUFDWCxlQUFlLEVBQUE7O0FBRW5CO0VBQ0ksNEJBQTRCLEVBQUE7O0FBRWhDO0VBQ0ksa0JBQWtCO0VBQ2xCLHlCQUF5QixFQUFBOztBQUU3QjtFQUNJLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsNEJBQTRCO0VBQzVCLFdBQVcsRUFBQTs7QUFFZjtFQUVRLHdCQUFBO0VBQ0EsOEJBQThCO0VBQzlCLDBCQUEwQjtFQUMxQixpQkFBaUIsRUFBQTs7QUFMekI7RUFRUSxnQkFBQTtFQUNBLDhCQUE4QjtFQUM5QiwwQkFBMEI7RUFDMUIsaUJBQWlCLEVBQUE7O0FBWHpCO0VBY1EsV0FBQTtFQUNBLDhCQUE4QjtFQUM5QiwwQkFBMEI7RUFDMUIsaUJBQWlCLEVBQUE7O0FBR3pCO0VBRUksMkJBQTJCLEVBQUE7O0FBRS9CO0VBQ0ksbUJBQW1CO0VBQ25CLGlCQUFpQixFQUFBOztBQUVyQjtFQUVJLGdCQUFnQjtFQUNoQiwyQkFBMkI7RUFDM0Isc0JBQXNCLEVBQUE7O0FBRTFCO0VBRUksaUJBQWlCO0VBQ2pCLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIseUJBQXlCLEVBQUE7O0FBRTdCO0VBRVEsWUFBWSxFQUFBOztBQUdwQjtFQUNJLHNCQUFzQjtFQUN0QixjQUFjO0VBQ2Qsd0JBQXdCO0VBQ3hCLGtCQUFrQixFQUFBOztBQUp0QjtJQU1RLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGlCQUNKLEVBQUE7O0FBVko7SUFZUSw4QkFBOEIsRUFBQTs7QUFadEM7SUFlUSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULG1CQUFtQjtJQUNuQixRQUFRLEVBQUE7O0FBbEJoQjtJQXFCUSw2QkFBNkIsRUFBQTs7QUFyQnJDO0lBd0JRLDRCQUE0QixFQUFBOztBQXhCcEM7SUEyQlEsd0JBQXdCO0lBQ3hCLDJCQUEyQixFQUFBOztBQTVCbkM7SUErQlEsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixpQkFBaUIsRUFBQTs7QUFwQ3pCO01Bc0NZLGVBQWU7TUFDZixpQkFBaUI7TUFDakIsY0FBYztNQUNkLG9CQUFvQixFQUFBOztBQXpDaEM7TUE0Q1ksZUFBZTtNQUNmLGlCQUFpQjtNQUNqQixjQUFjO01BQ2Qsb0JBQW9CLEVBQUE7O0FBL0NoQztNQWtEWSxlQUFlO01BQ2YsaUJBQWlCO01BQ2pCLGNBQWM7TUFDZCxvQkFBb0IsRUFBQTs7QUFyRGhDO01Bd0RZLGlCQUFpQjtNQUNqQixjQUFjLEVBQUE7O0FBekQxQjtNQTREWSxjQUFjLEVBQUE7O0FBNUQxQjtNQStEWSxnQkFBZ0IsRUFBQTs7QUEvRDVCOztNQW1FWSxZQUFZO01BQ1osZUFBZSxFQUFBOztBQXBFM0I7TUF1RVksaUJBQWlCLEVBQUE7O0FBdkU3QjtNQTBFWSxhQUFhO01BQ2IsY0FBYztNQUNkLDhCQUE4QixFQUFBOztBQTVFMUM7TUErRVksaUJBQWlCO01BQ2pCLGVBQWU7TUFDZixXQUFXO01BQ1gsMEJBQTBCLEVBQUE7O0FBbEZ0QztNQXFGWSxXQUFXO01BQ1gsWUFBWSxFQUFBOztBQXRGeEI7O0lBMkZRLDRCQUE0QjtJQUU1QixvQ0FBb0MsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxhYmxlX2Zsb2F0IHtcbiAgICBpb24tbGFiZWwge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDIuNXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbn1cbmlvbi1pY29ue1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDIuNXB4O1xuICAgIHdpZHRoOiAyMnB4O1xuICAgIG1hcmdpbi1yaWdodDogMiU7XG59XG5pb24taW5wdXQge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjNjE1ZjVmO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG59XG4ucGFzc3dvcmRJY29ue1xuICAgIGZvbnQtc2l6ZTogMnJlbSAhaW1wb3J0YW50O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICAgIHRvcDogMzNweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMCBhdXRvICFpbXBvcnRhbnQ7XG4gICAgcmlnaHQ6IDBweDtcbiB9XG4uc3VjY2VzX2xvZ2lue1xuICAgIHdpZHRoOiA0MyU7XG59XG5cblxuXG4jY29udC10ZW50IC5zY3JvbGwtY29udGVudCB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbn1cbiNpbnNwZWN0IHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm90dG9tOiAxMXB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtZmFtaWx5OiAnQWx0YWlyLUJvbGQnO1xufVxuLmV5ZS1jbHMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDcxcHg7XG4gICAgZm9udC1zaXplOiAyM3B4O1xuICAgIHJpZ2h0OiAyMHB4O1xuICAgIHotaW5kZXg6IDk5OTk7ICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvdHRvbTogMzBweDtcbiAgICBsZWZ0OiAxMzVweDtcbiAgICBmb250LXNpemU6IDIzcHg7XG59XG4uaGVhZC15IHtcbiAgICBwYWRkaW5nLXRvcDogMjFweCAhaW1wb3J0YW50O1xufVxuLnQtaWNvbnMge1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBjb2xvcjogIzRDQUY1MCAhaW1wb3J0YW50O1xufVxuLm90cC1pbnB1dHtcbiAgICBsZXR0ZXItc3BhY2luZzogNDlweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6IGdyZXk7XG4gICAgcGFkZGluZy1sZWZ0OiAxOCUgIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi50ZS10IHtcbiAgICA6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgICAgICAvKiBDaHJvbWUvT3BlcmEvU2FmYXJpICovXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwcHggIWltcG9ydGFudDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xuICAgIH1cbiAgICA6Oi1tb3otcGxhY2Vob2xkZXIge1xuICAgICAgICAvKiBGaXJlZm94IDE5KyAqL1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICAgICAgICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgICB9XG4gICAgOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgICAgIC8qIElFIDEwKyAqL1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICAgICAgICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgICB9XG59XG4uZ2V0LW90cGJ0bm4ge1xuICAgIC8vIG1hcmdpbi1sZWZ0OiAxOHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXRvcDogMjVweCAhaW1wb3J0YW50OyAvLyBwYWRkaW5nOiAyMHB4IDEwMHB4ICFpbXBvcnRhbnQ7XG59XG4uZm9yLXRleHQge1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgcGFkZGluZzogNXB4IDIwcHg7XG59XG4uc3ViLXRhZ2J0biB7XG4gICAgLy8gcGFkZGluZzogMjBweCAxMDBweDtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufVxuLmRlbW9udHktdGJ0biB7XG4gICAgLy8gcGFkZGluZzogMjBweCA1OXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxNHB4O1xuICAgIG1hcmdpbi10b3A6IDE4cHg7XG59XG4udG9vbGJhciAudG9vbGJhci10aXRsZSB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5yZWdpcy1wYWdlLWhlYWRlciB7XG4gICAgLmJ0bi1iYXIge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxufVxuLnJlZ2lzLWNvbnRlbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgY29sb3I6ICM4ZDhkOGQ7XG4gICAgcGFkZGluZzogMjVweCAhaW1wb3J0YW50O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAucmVnaXMtaGVhZGVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZy10b3A6IDQwcHhcbiAgICB9XG4gICAgLnNpZ24tY2hhbmdlIHtcbiAgICAgICAgcGFkZGluZzogMjBweCAxMDBweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuaWNvbnMtaW4ge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDRweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgdG9wOiAycHg7XG4gICAgfVxuICAgIC5hbHQtamV0IHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA0MHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5pbi1pdGVtIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA0cHggIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmdyZWVuLWZvcm0ge1xuICAgICAgICBwYWRkaW5nOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIHBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcbiAgICB9XG4gICAgLnJlZ2lzdHJhdGlvbi1zdGVwIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IHB4O1xuICAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMXB4O1xuICAgICAgICAgICAgY29sb3I6ICM3YTc4Nzg7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgICAgICAgfVxuICAgICAgICAuaGVhZGVyMiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTFweDtcbiAgICAgICAgICAgIGNvbG9yOiAjN2E3ODc4O1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDMwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmhlYWRlcjMge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDExcHg7XG4gICAgICAgICAgICBjb2xvcjogIzdhNzg3ODtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5sYmwtaGVhZGVyIHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICAgICAgY29sb3I6ICM0MjNjM2M7XG4gICAgICAgIH1cbiAgICAgICAgLmljb24ge1xuICAgICAgICAgICAgY29sb3I6ICM0MjNjM2M7XG4gICAgICAgIH1cbiAgICAgICAgLml0ZW0ge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgfVxuICAgICAgICAubGFiZWxbc3RhY2tlZF0sXG4gICAgICAgIC5sYWJlbFtmbG9hdGluZ10ge1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB9XG4gICAgICAgIC5idG4ge1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmJ0bnMge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyAvLyBwYWRkaW5nOiAxMHB4IDIwcHggMjBweCAyMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5vdHAtbGFiZWwge1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDEycHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBlbmQ7XG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICB3aWR0aDogODBweDtcbiAgICAgICAgICAgIGhlaWdodDogODBweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuaXRlbS1pbnB1dC1oYXMtZm9jdXMgLml0ZW0taW5uZXIsXG4gICAgLml0ZW0uaW5wdXQtaGFzLWZvY3VzIC5pdGVtLWlubmVyIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzRDQUY1MDtcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIC0xcHggMCAwICM0Q0FGNTA7XG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCAwIDAgIzRDQUY1MDtcbiAgICB9XG59XG5cbi8vIC5yYW0tY2xzIC5idXR0b24taW9zIHtcbi8vICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4vLyAgICAgaGVpZ2h0OiAyLjhlbSAhaW1wb3J0YW50O1xuLy8gICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuLy8gICAgIGNvbG9yOiAjZmZmO1xuLy8gICAgIG1hcmdpbjogMC40cmVtIDAuMnJlbTtcbi8vICAgICBwYWRkaW5nOiAwIDFlbTtcbi8vICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuLy8gfSJdfQ== */"

/***/ }),

/***/ "./src/app/forgot-password/forgot-password.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.page.ts ***!
  \*********************************************************/
/*! exports provided: ForgotPasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPage", function() { return ForgotPasswordPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ForgotPasswordPage = /** @class */ (function () {
    function ForgotPasswordPage(router, route) {
        this.router = router;
        this.route = route;
        this.passwordFormat = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        this.regexp = /^(?=.*[0-9])(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]{6,16}$/;
        this.show = false;
        this.wizardStep = 1;
        this.wizardStepData = [{ stepNum: 1 }, { stepNum: 2 }, { stepNum: 3 }, { stepNum: 4 }];
        this.isMatch = 2;
        this.formatMatch = 0;
        this.passwordType = 'password';
        this.passwordIcon = 'eye-off';
    }
    ForgotPasswordPage.prototype.ngOnInit = function () {
    };
    ForgotPasswordPage.prototype.checkUserEmail = function () {
        this.wizardStep++;
        // this.alertCalls.showLoading();
        // this.serviceCall.userForgotPasswrod(this.userEmail).subscribe(
        //   (resp) => {
        //     this.alertCalls.closeLoading();
        //     console.log(resp);
        //     if (resp != null) {
        //       localStorage.setItem('userId', resp.userId);
        //       this.wizardStep++;
        //     } else {
        //       this.alertCalls.showToastAlert('Please enter valid details ', 'red');
        //       return;
        //     }
        //   }, err => {
        //     this.alertCalls.closeLoading();
        //   });
    };
    ForgotPasswordPage.prototype.checkOtp = function () {
        this.wizardStep++;
        // this.alertCalls.showLoading();
        // const data = { 'userId': localStorage.getItem('userId'), 'mobileToken': this.userOTP };
        // this.serviceCall.checkForOTPValid(data).subscribe(
        //   (resp) => {
        //     this.alertCalls.closeLoading();
        //     this.alertCalls.showToastAlert('Email verified successfully', 'green');
        //     this.wizardStep++;
        //   }, err => {
        //     this.alertCalls.closeLoading();
        //     if (err.status == 400) {
        //       this.userOTP = '';
        //       console.log(err.error.message);
        //     }
        //   });
    };
    ForgotPasswordPage.prototype.hideShowPassword = function () {
        console.log("hello");
        this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
        this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
        console.log("hello", this.passwordType, this.passwordIcon);
    };
    ForgotPasswordPage.prototype.resendOtp = function () {
        // this.alertCalls.showLoading();
        // this.serviceCall.userForgotPasswrod(this.userEmail).subscribe(
        //   (resp) => {
        //     this.alertCalls.closeLoading();
        //     this.userOTP = '';
        //   }, err => {
        //     this.alertCalls.closeLoading();
        //   });
    };
    ForgotPasswordPage.prototype.checkPassword = function () {
        if (this.newPassword1 != null && this.newPassword2 != null && this.newPassword1 != '' && this.newPassword2 != '') {
            if (this.newPassword1 == this.newPassword2) {
                this.isMatch = 1;
            }
            else {
                this.isMatch = 0;
            }
        }
        else {
            this.isMatch = 2;
        }
        if (!this.newPassword1.match(this.passwordFormat)) {
            this.formatMatch = 1;
        }
        else {
            this.formatMatch = 0;
        }
    };
    ForgotPasswordPage.prototype.updatePassword = function () {
        this.wizardStep++;
        // if (this.newPassword1 == '' || this.newPassword1 == null) {
        //   this.alertCalls.showToastAlert('Enter New Password', 'red');
        //   return;
        // } else if (this.newPassword2 == '' || this.newPassword2 == null) {
        //   this.alertCalls.showToastAlert('Enter Confirm New Password', 'red');
        //   return;
        // }
        // const data = { 'userId': localStorage.getItem('userId'), 'userPassword': this.newPassword1 };
        // this.alertCalls.showLoading();
        // this.serviceCall.setNewPassword(data).subscribe(resp => {
        //   this.alertCalls.closeLoading();
        //   if (resp.message == 'Password Successfully updated') {
        //     this.isMatch = 2;
        //     this.newPassword1 = null;
        //     this.newPassword2 = null;
        //     this.wizardStep++;
        //   }
        // }, err => {
        //   this.alertCalls.closeLoading();
        // });
    };
    ForgotPasswordPage.prototype.gotoSignin = function () {
        // this.router.navigate(['/login'], { replaceUrl: true });
        var element = document.getElementById('backbutton').click();
    };
    ForgotPasswordPage.prototype.loginUser = function () {
        // const data = { userEmail: this.userEmail, userPassword: this.newPassword };
        // this.alertCalls.showLoading();
        // this.serviceCall.userLoginAuth(data).subscribe(
        //   (resp: any) => {
        //     this.alertCalls.closeLoading();
        //     const result: any = resp;
        //     if (resp != null) {
        //       localStorage.setItem('token', result.token);
        //       localStorage.setItem('roleId', result.roleId);
        //       localStorage.setItem('userId', result.userId);
        //       localStorage.setItem('membershipId', result.MembershipId);
        //       this.redirectToPage(data);
        //     } else {
        //       this.alertCalls.showToastAlert('Incorrect email/mobile,Enter valid email/mobile,password', 'red');
        //     }
        //   }, err => {
        //     this.alertCalls.closeLoading();
        //   });
    };
    ForgotPasswordPage.prototype.loadUserDetails = function (data) {
        // this.alertCalls.showLoading();
        // this.commonCalls.getUserBasicDetails().subscribe(resp => {
        //   this.alertCalls.closeLoading();
        //   const name = (resp[0].firstName + '' + resp[0].lastName);
        //   localStorage.setItem('userName', name);
        //   localStorage.setItem('email', resp[0].userEmail);
        //   this.redirectToPage(data);
        // }, err => {
        //   this.alertCalls.closeLoading();
        //   this.alertCalls.showToastAlert('Please try again', 'red');
        // });
    };
    ForgotPasswordPage.prototype.redirectToPage = function (resp) {
        // localStorage.setItem('switchDashbord', 'dashboard');
        // if (resp.roleId == 2 && resp.MembershipId == null) {
        //   this.navCtrl.push('MembershipForLandlordPage');
        // } else if (resp.roleId == 10 && resp.MembershipId == null) {
        //   this.navCtrl.push('MembershipForTenantExistsPage');
        //      } else if (resp.roleId == 3 && resp.MembershipId == null) {
        //   this.navCtrl.push('VacantTenantMembershipPage');
        //      } else if (resp.roleId == 2 && resp.MembershipId != null) {
        //   localStorage.setItem('sideMenuType', 'LandlordDashboard');
        //   localStorage.setItem('ActiveUser', 'Landlord');
        //   this.ev.publish('update-sitemap', 'LandlordDashboard');
        //   this.navCtrl.setRoot('LandlordManagePropertyPage');
        // } else if ((resp.roleId == 10 || resp.roleId == 3) && resp.MembershipId != null) {
        //   localStorage.setItem('sideMenuType', 'TenantDashboard');
        //   localStorage.setItem('ActiveUser', 'Tenant');
        //   this.ev.publish('update-sitemap', 'TenantDashboard');
        //   this.navCtrl.setRoot('TenantManagePropertyPage');
        // } else {
        //   console.log('support');
        //      }
    };
    ForgotPasswordPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forgot-password',
            template: __webpack_require__(/*! ./forgot-password.page.html */ "./src/app/forgot-password/forgot-password.page.html"),
            styles: [__webpack_require__(/*! ./forgot-password.page.scss */ "./src/app/forgot-password/forgot-password.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ForgotPasswordPage);
    return ForgotPasswordPage;
}());



/***/ })

}]);
//# sourceMappingURL=forgot-password-forgot-password-module.js.map