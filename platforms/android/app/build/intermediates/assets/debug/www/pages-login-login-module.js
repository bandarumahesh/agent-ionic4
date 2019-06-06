(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_5__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_5__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/pages/login/login.page.html":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-content padding>\n  <ion-button color=\"tertiary\" expand=\"full\" (click)=\"login(1)\" *ngIf=\"!(authState$ | async)\">MembershipLogin</ion-button>\n  <ion-button color=\"tertiary\" expand=\"full\" (click)=\"login(2)\" *ngIf=\"!(authState$ | async)\">Modules login</ion-button>\n  <ion-button expand=\"full\" color=\"secondary\" (click)=\"logout()\" *ngIf=\"(authState$ | async)\">Logout</ion-button>\n<ion-button expand=\"full\" color=\"tertiary\" href=\"/home\" routerDirection=\"forward\">Home</ion-button> \n</ion-content> -->\n<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaulthref=\"\"></ion-back-button>\n          </ion-buttons>\n      <ion-title>LOGIN</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content  padding>\n    <div class=\"regis-header\">\n        <img src=\"assets/imgs/instarentlogoupdated.png\" class=\"ten_tom\" />\n    </div>\n    <form  #form=\"ngForm\" (ngSubmit)=\"userLogin(form.value) \" method=\"POST\" >\n      <ion-grid>\n        <ion-row color=\"primary\" justify-content-center>\n          <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n            <div text-center>\n              <h3 class=\"header55\">Sign up as property agency</h3>\n            </div>\n            <div padding class=\"lable_float\">\n                <ion-item>\n                    <ion-label position=\"floating\" > <ion-icon  item-start name=\"mail\" ></ion-icon>Email </ion-label>\n                    <ion-input type=\"email\" name=\"email\" ngModel required></ion-input>\n                  </ion-item>\n                \n<div style=position:relative>\n    <ion-item>\n        <ion-label position=\"floating\" >Password</ion-label>\n        <ion-input ngModel [type]=\"passwordType\" clearOnEdit=\"false\" name=\"userPassword\"></ion-input>\n    </ion-item>\n   <ion-icon item-end [name]=\"passwordIcon\" class=\"passwordIcon\" (click)='hideShowPassword()'></ion-icon>\n</div>\n                   \n            </div>\n            <div class=\"rememberme\">\n                <div (click)=\"forgotPassword()\">\n                  <a>Forgot Password?</a>\n                </div>\n              </div>\n            <div padding>\n                <!-- size=\"large\" -->\n              <ion-button type=\"submit\" [disabled]=\"form.invalid\" expand=\"block\" >Login</ion-button>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </form>\n    <div class=\"signup\" style=\"display: inherit\">\n        <p class=\"connected\">Don't have an account ? <strong class=\"ten_ser\" routerLink=\"/login\" >Sign up</strong>\n        </p>\n      </div>\n  </ion-content>"

/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".regis-header {\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  padding-top: 40px; }\n\n.ten_tom {\n  width: 58%;\n  height: 10%; }\n\n.header55 {\n  text-align: center;\n  padding-bottom: 0px;\n  font-size: 14px;\n  color: #7a7878; }\n\n.connected {\n  font-size: 17px;\n  text-align: center; }\n\n.lable_float ion-label {\n  position: relative;\n  top: 2.5px;\n  width: 100%;\n  font-size: 15px; }\n\n.lable_float ion-icon {\n  position: relative;\n  top: 2.5px;\n  width: 22px;\n  margin-right: 2%; }\n\n.lable_float ion-input {\n  font-size: 15px;\n  padding-left: 5px !important;\n  color: #615f5f;\n  font-weight: 400; }\n\n.passwordIcon {\n  font-size: 2rem !important;\n  position: absolute !important;\n  top: 33px !important;\n  margin: 0 auto !important;\n  right: 0px; }\n\n.rememberme {\n  font-size: 12px;\n  display: flex;\n  flex: 1 1 auto;\n  justify-content: space-between;\n  padding: 1px 20px 20px 30px; }\n\n.rememberme a {\n    text-decoration: none; }\n\n.rememberme a:link {\n    text-decoration: none; }\n\n.rememberme a:hover {\n    color: white;\n    text-decoration: none;\n    cursor: pointer; }\n\n@media all and (min-width: 768px) and (max-width: 1024px) {\n  .ten_tom {\n    width: 35%;\n    height: 10%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9JbnN0YXJlbnQvSW5zdGFyZW50IFJlcG9zL2FnZW50X3Rlc3RfcHJvamVjdC9pb25pYzQtdGVtcGxhdGUvc3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixpQkFBaUIsRUFBQTs7QUFFckI7RUFDSSxVQUFVO0VBQ1YsV0FBVyxFQUFBOztBQUVmO0VBQ0ksa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsY0FBYyxFQUFBOztBQUVsQjtFQUNJLGVBQWU7RUFDZixrQkFBaUIsRUFBQTs7QUFHckI7RUFFSSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxlQUFlLEVBQUE7O0FBTG5CO0VBUUksa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXO0VBQ1gsZ0JBQWdCLEVBQUE7O0FBWHBCO0VBY0ksZUFBZTtFQUNmLDRCQUE0QjtFQUM1QixjQUFjO0VBQ2QsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksMEJBQTBCO0VBQzFCLDZCQUE2QjtFQUM3QixvQkFBb0I7RUFDcEIseUJBQXlCO0VBQ3pCLFVBQVUsRUFBQTs7QUFFYjtFQUNHLGVBQWU7RUFDZixhQUFhO0VBQ2IsY0FBYztFQUNkLDhCQUE4QjtFQUM5QiwyQkFBMkIsRUFBQTs7QUFMOUI7SUFRTyxxQkFBcUIsRUFBQTs7QUFSNUI7SUFZTyxxQkFBcUIsRUFBQTs7QUFaNUI7SUFlTyxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLGVBQWUsRUFBQTs7QUFHdkI7RUFDSTtJQUNJLFVBQVU7SUFDVixXQUFXLEVBQUEsRUFDZCIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWdpcy1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xufVxuLnRlbl90b217XG4gICAgd2lkdGg6IDU4JTtcbiAgICBoZWlnaHQ6IDEwJTtcbn1cbi5oZWFkZXI1NXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICM3YTc4Nzg7XG59XG4uY29ubmVjdGVke1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcblxufVxuLmxhYmxlX2Zsb2F0IHtcbiAgICBpb24tbGFiZWwge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDIuNXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbn1cbmlvbi1pY29ue1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDIuNXB4O1xuICAgIHdpZHRoOiAyMnB4O1xuICAgIG1hcmdpbi1yaWdodDogMiU7XG59XG5pb24taW5wdXQge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjNjE1ZjVmO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG59XG4ucGFzc3dvcmRJY29ue1xuICAgIGZvbnQtc2l6ZTogMnJlbSAhaW1wb3J0YW50O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICAgIHRvcDogMzNweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMCBhdXRvICFpbXBvcnRhbnQ7XG4gICAgcmlnaHQ6IDBweDtcbiB9XG4gLnJlbWVtYmVybWUge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nOiAxcHggMjBweCAyMHB4IDMwcHg7XG4gICAgYSB7XG4gICAgICAgIC8vIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIH1cbiAgICBhOmxpbmsge1xuICAgICAgICAvLyBjb2xvcjogd2hpdGU7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB9XG4gICAgYTpob3ZlciB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxufVxuQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgICAudGVuX3RvbXtcbiAgICAgICAgd2lkdGg6IDM1JTtcbiAgICAgICAgaGVpZ2h0OiAxMCU7XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/auth/auth.service */ "./src/app/core/auth/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginPage = /** @class */ (function () {
    function LoginPage(authService, router, route, storage) {
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.storage = storage;
        this.user = {
            name: 'mahesh',
            email: 'mahi@gmail.com',
            address: {
                zip: '673383',
                city: 'hyderabad',
                state: 'telangana'
            }
        };
        this.return = '';
        this.show = false;
        this.passwordType = 'password';
        this.passwordIcon = 'eye-off';
    }
    LoginPage.prototype.ngOnInit = function () {
        this.authState$ = this.authService.getAuthStateObserver();
        console.log('hello', this.authState$);
        // Get the query params
        // this.route.queryParams
        //   .subscribe(params => this.return = params['return'] || '/home');
    };
    // for testing purpose
    LoginPage.prototype.login = function (route) {
        var _this = this;
        if (this.storage.get('membership')) {
            this.router_url = '/menu/first';
        }
        else if (route === 1) {
            this.router_url = '/membership';
        }
        else {
            this.router_url = '/login';
        }
        this.authService.login().then(function (_) { return _this.router.navigateByUrl(_this.router_url); });
    };
    LoginPage.prototype.hideShowPassword = function () {
        this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
        this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
    };
    LoginPage.prototype.userLogin = function (userdata) {
        var _this = this;
        console.log("hello", userdata);
        if (userdata.email && userdata.userPassword) {
            this.router_url = '/membership';
            this.authService.login().then(function (_) { return _this.router.navigateByUrl(_this.router_url); });
        }
    };
    LoginPage.prototype.forgotPassword = function () {
        this.router.navigateByUrl('/forgot-password');
    };
    LoginPage.prototype.logout = function () {
        this.authService.logout();
    };
    LoginPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/pages/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")]
        }),
        __metadata("design:paramtypes", [_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module.js.map