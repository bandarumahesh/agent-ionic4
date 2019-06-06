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

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaulthref=\"\"></ion-back-button>\n          </ion-buttons>\n      <ion-title>FORGOT PASSWORD</ion-title>\n    </ion-toolbar>\n  </ion-header>\n    <!-- <ion-content padding class=\"regis-content\" id=\"cont-tent\">\n      <div class=\"regis-header\">\n        <img src=\"assets/images/svg/instarentlogoupdated.png\" style=\"width:58%;height: 10%;\" />\n      </div>\n      <div>\n        <div class=\"registration-step\" *ngIf=\"wizardStep == 1\">\n          <div>\n            <div class=\"registration-step\">\n              <div class=\"header\">\n                Verify Your Email\n              </div>\n              <form class=\"green-form\">\n                <div>\n                  <ion-item class=\"in-item\">\n                    <ion-icon class=\"icons-in\" item-start name=\"mail\"></ion-icon>\n                    <ion-input type=\"text\" style=\"text-transform: lowercase;\" autocapitalize=\"off\" class=\"alt-jet\" name=\"userEmail\" placeholder=\"Enter your email\"\n                      [(ngModel)]=\"userEmail\"></ion-input>\n                  </ion-item>\n                </div>\n                <div class=\"btn ram-cls\">\n                  <button ion-button block class=\"button-md-secondary get-otpbtnn \" type=\"submit\" [disabled]=\"!userEmail\"\n                    (click)=\"checkUserEmail()\">Verify</button>\n                </div>\n              </form>\n            </div>\n          </div>\n        </div>\n        <div *ngIf=\"wizardStep == 2\">\n          <div class=\"registration-step\">\n            <div class=\"header2\">\n              Enter the code sent to your registered <br> Email \n           </div>\n            <form class=\"for-text\">\n              <div>\n                <ion-item>\n                  <ion-input class=\"otp-input te-t\" placeholder=\" Enter Four Digit Verification Code\" type=\"tel\"\n                    minlength=\"4\" maxlength=\"4\" name=\"otp\" [(ngModel)]=\"userOTP\"></ion-input>\n                </ion-item>\n              </div>\n              <div class=\"otp-label\">\n                <a (click)=\"resendOtp()\"> Resend Verification Code ? </a>\n              </div>\n              <div class=\"btns\">\n                <button ion-button block class=\"button-md-secondary sub-tagbtn\" type=\"submit\"\n                  (click)=\"checkOtp()\">SUBMIT</button>\n              </div>\n            </form>\n          </div>\n        </div>\n        <div *ngIf=\"wizardStep == 3\">\n          <div>\n            <div class=\"registration-step\">\n              <div class=\"header\">\n                Create New Password\n              </div>\n              <div>\n                <div class=\"max-mac\">\n                  <ion-list style=\"position:relative;    padding: 2px 23px 0px 23px;\">\n                    <ion-item>\n                      <ion-label stacked>New Password</ion-label>\n                      <ion-input [type]=\"show ? 'text' : 'password'\" [(ngModel)]=\"newPassword1\"\n                        placeholder=\"Enter New Password\" (keyup)=\"checkPassword()\"></ion-input>\n                    </ion-item>\n                    <ion-icon *ngIf=\"show\" name=\"eye\" class=\"eye-cls\" (click)=\"showpassword()\"></ion-icon>\n                    <ion-icon *ngIf=\"!show\" name=\"eye-off\" class=\"eye-cls\" (click)=\"showpassword()\"></ion-icon>\n                    <p *ngIf=\"formatMatch==1\" style=\"padding-left: 20px;color: red;margin-top: 0px;text-align: start;\">Password must contain\n                      at least six characters,\n                      including special character, uppercase, lowercase letters and numbers.</p>\n                    <ion-item>\n                      <br>\n                      <ion-label stacked>Confirm Password</ion-label>\n                      <ion-input type=\"password\" [(ngModel)]=\"newPassword2\" placeholder=\"Confirm Password\"\n                        (keyup)=\"checkPassword()\"></ion-input>\n                    </ion-item>\n                    <p *ngIf=\"isMatch==0\" style=\"padding-left: 20px;color: red;text-align: start;\">password doesn't match\n                    </p>\n                    <p *ngIf=\"isMatch==1\" style=\"padding-left: 20px;color: green;text-align: start;\">password matched</p>\n                  </ion-list>\n                  <button type=\"submit\" color=\"secondary\" ion-button full class=\"button-md-secondary demonty-tbtn\"\n                    style=\"width:95% !important\" (click)=\"updatePassword()\" [disabled]=\"isMatch==0||isMatch==2\">Change\n                    Password</button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div *ngIf=\"wizardStep == 4\" class=\"registration-step\">\n          <div class=\"success\">\n            <ion-icon name=\"checkmark-circle\"></ion-icon>\n          </div>\n          <div class=\"header3\">\n            Password Update\n            <br /> Successful\n          </div>\n          <div>\n            <button ion-button class=\"button-md-secondary sign-change\" type=\"submit\" (click)=\"gotoSignin()\">login</button>\n          </div>\n        </div>\n      </div>\n    </ion-content> -->\n"

/***/ }),

/***/ "./src/app/forgot-password/forgot-password.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQucGFnZS5zY3NzIn0= */"

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
    function ForgotPasswordPage() {
    }
    ForgotPasswordPage.prototype.ngOnInit = function () {
    };
    ForgotPasswordPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forgot-password',
            template: __webpack_require__(/*! ./forgot-password.page.html */ "./src/app/forgot-password/forgot-password.page.html"),
            styles: [__webpack_require__(/*! ./forgot-password.page.scss */ "./src/app/forgot-password/forgot-password.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ForgotPasswordPage);
    return ForgotPasswordPage;
}());



/***/ })

}]);
//# sourceMappingURL=forgot-password-forgot-password-module.js.map