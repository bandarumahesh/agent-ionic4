(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sign-up-sign-up-module"],{

/***/ "./src/app/sign-up/sign-up.module.ts":
/*!*******************************************!*\
  !*** ./src/app/sign-up/sign-up.module.ts ***!
  \*******************************************/
/*! exports provided: SignUpPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpPageModule", function() { return SignUpPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sign_up_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sign-up.page */ "./src/app/sign-up/sign-up.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _sign_up_page__WEBPACK_IMPORTED_MODULE_5__["SignUpPage"]
    }
];
var SignUpPageModule = /** @class */ (function () {
    function SignUpPageModule() {
    }
    SignUpPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_sign_up_page__WEBPACK_IMPORTED_MODULE_5__["SignUpPage"]]
        })
    ], SignUpPageModule);
    return SignUpPageModule;
}());



/***/ }),

/***/ "./src/app/sign-up/sign-up.page.html":
/*!*******************************************!*\
  !*** ./src/app/sign-up/sign-up.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n          <ion-back-button defaulthref=\"\"></ion-back-button>\n        </ion-buttons>\n    <ion-title>REGISTRATION</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content  padding>\n  <div class=\"regis-header\">\n      <img src=\"assets/imgs/instarentlogoupdated.png\" class=\"ten_tom\" />\n  </div>\n  <form  #form=\"ngForm\" (ngSubmit)=\"register(form.value) \" method=\"POST\" >\n    <ion-grid>\n      <ion-row color=\"primary\" justify-content-center>\n        <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n          <div text-center>\n            <h3 class=\"header55\">Sign up as property agency</h3>\n          </div>\n          <div padding class=\"lable_float\">\n              <ion-item>\n                  <ion-label position=\"floating\" > <ion-icon  item-start name=\"person\"></ion-icon> Property Agency Name</ion-label>\n                  <ion-input name=\"businessName\" type=\"text\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\" minlength=\"2\" maxlength=\"30\" ngModel required></ion-input>\n              </ion-item>\n              <ion-item>\n                  <ion-label position=\"floating\" > <ion-icon  item-start name=\"mail\" ></ion-icon>Business Email </ion-label>\n                  <ion-input type=\"email\" name=\"email\" ngModel required></ion-input>\n                </ion-item>\n            <ion-item class=\"f-item pad-pt\">\n              <ion-label position=\"floating\" ><ion-icon  item-start name=\"phone-portrait\"></ion-icon> Business Contact</ion-label>\n              <ion-input type=\"tel\" minlength=\"10\" ngModel  maxlength=\"10\" name=\"phoneNumber\" required></ion-input>\n            </ion-item>\n          </div>\n          <div padding>\n              <!-- size=\"large\" -->\n            <ion-button type=\"submit\" [disabled]=\"form.invalid\" expand=\"block\">  <ion-ripple-effect></ion-ripple-effect> Sign Up</ion-button>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n  <div class=\"signup\" style=\"display: inherit\">\n      <p class=\"connected\">Already have an account ? <strong class=\"ten_ser\" routerLink=\"/login\" >  Sign in</strong>\n      </p>\n    </div>\n</ion-content> "

/***/ }),

/***/ "./src/app/sign-up/sign-up.page.scss":
/*!*******************************************!*\
  !*** ./src/app/sign-up/sign-up.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".regis-header {\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  padding-top: 40px; }\n\n.ten_tom {\n  width: 58%;\n  height: 10%; }\n\n.header55 {\n  text-align: center;\n  padding-bottom: 0px;\n  font-size: 14px;\n  color: #7a7878; }\n\n.connected {\n  font-size: 17px;\n  text-align: center; }\n\n.lable_float ion-label {\n  position: relative;\n  top: 2.5px;\n  width: 100%;\n  font-size: 15px; }\n\n.lable_float ion-icon {\n  position: relative;\n  top: 2.5px;\n  width: 22px;\n  margin-right: 2%; }\n\n.lable_float ion-input {\n  font-size: 15px;\n  padding-left: 5px !important;\n  color: #615f5f;\n  font-weight: 400; }\n\n.prop_count {\n  font-size: 49px;\n  font-weight: 300;\n  margin-top: 35px;\n  margin-bottom: 0px; }\n\n.prop_titl {\n  font-size: 26px;\n  margin-top: 8px; }\n\n@media all and (min-width: 768px) and (max-width: 1024px) {\n  .ten_tom {\n    width: 35%;\n    height: 10%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9JbnN0YXJlbnQvSW5zdGFyZW50IFJlcG9zL2FnZW50X3Rlc3RfcHJvamVjdC9pb25pYzQtdGVtcGxhdGUvc3JjL2FwcC9zaWduLXVwL3NpZ24tdXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksVUFBVTtFQUNWLFdBQVcsRUFBQTs7QUFFZjtFQUNJLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGNBQWMsRUFBQTs7QUFFbEI7RUFDSSxlQUFlO0VBQ2Ysa0JBQWlCLEVBQUE7O0FBR3JCO0VBRUksa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXO0VBQ1gsZUFBZSxFQUFBOztBQUxuQjtFQVFJLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztFQUNYLGdCQUFnQixFQUFBOztBQVhwQjtFQWNJLGVBQWU7RUFDZiw0QkFBNEI7RUFDNUIsY0FBYztFQUNkLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLGVBQWU7RUFDZixlQUFlLEVBQUE7O0FBRW5CO0VBQ0k7SUFDSSxVQUFVO0lBQ1YsV0FBVyxFQUFBLEVBQ2QiLCJmaWxlIjoic3JjL2FwcC9zaWduLXVwL3NpZ24tdXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlZ2lzLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDQwcHg7XG59XG4udGVuX3RvbXtcbiAgICB3aWR0aDogNTglO1xuICAgIGhlaWdodDogMTAlO1xufVxuLmhlYWRlcjU1e1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogIzdhNzg3ODtcbn1cbi5jb25uZWN0ZWR7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIHRleHQtYWxpZ246Y2VudGVyO1xuXG59XG4ubGFibGVfZmxvYXQge1xuICAgIGlvbi1sYWJlbCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMi41cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiAxNXB4O1xufVxuaW9uLWljb257XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMi41cHg7XG4gICAgd2lkdGg6IDIycHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyJTtcbn1cbmlvbi1pbnB1dCB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIHBhZGRpbmctbGVmdDogNXB4ICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICM2MTVmNWY7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbn1cbi5wcm9wX2NvdW50e1xuICAgIGZvbnQtc2l6ZTogNDlweDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIG1hcmdpbi10b3A6IDM1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuLnByb3BfdGl0bHtcbiAgICBmb250LXNpemU6IDI2cHg7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xufVxuQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgICAudGVuX3RvbXtcbiAgICAgICAgd2lkdGg6IDM1JTtcbiAgICAgICAgaGVpZ2h0OiAxMCU7XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/sign-up/sign-up.page.ts":
/*!*****************************************!*\
  !*** ./src/app/sign-up/sign-up.page.ts ***!
  \*****************************************/
/*! exports provided: SignUpPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpPage", function() { return SignUpPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/auth/auth.service */ "./src/app/core/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignUpPage = /** @class */ (function () {
    function SignUpPage(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    SignUpPage.prototype.ngOnInit = function () {
    };
    SignUpPage.prototype.register = function (form) {
        var _this = this;
        this.router_url = '/membership';
        this.authService.login().then(function (_) { return _this.router.navigateByUrl(_this.router_url); });
    };
    SignUpPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-up',
            template: __webpack_require__(/*! ./sign-up.page.html */ "./src/app/sign-up/sign-up.page.html"),
            styles: [__webpack_require__(/*! ./sign-up.page.scss */ "./src/app/sign-up/sign-up.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], SignUpPage);
    return SignUpPage;
}());



/***/ })

}]);
//# sourceMappingURL=sign-up-sign-up-module.js.map