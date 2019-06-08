(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/pages/home/home.page.html":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding>\n  <div class=\"trend_home\">\n    <div class=\"regis-header\">\n      <img src=\"assets/imgs/icon.png\" class=\"ten_tom\" />\n    </div>\n    <p class=\"agency_test\">Property Agency</p>\n    <ion-button expand=\"full\" id=\"trend_logg_btn\" shape=\"round\" color=\"primary\" (click)=\"signIn()\">Sign In</ion-button>\n    <p class=\"or_center\" text-center>OR</p>\n    <ion-button expand=\"full\" id=\"trend_logg_btn\" shape=\"round\" color=\"primary\" (click)=\"signUp()\">Sign Up</ion-button>\n  </div>\n</ion-content>\n<!-- expand=\"block\" -->\n"

/***/ }),

/***/ "./src/app/pages/home/home.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".regis-header {\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  padding-top: 35%; }\n\n.ten_tom {\n  width: 34%;\n  height: 10%;\n  border-radius: 50%; }\n\n.agency_test {\n  text-align: center;\n  font-size: 25px;\n  font-weight: 500;\n  color: grey; }\n\n.trend_home {\n  padding: 10%; }\n\n.or_center {\n  color: grey;\n  font-weight: 700;\n  font-size: 13px; }\n\n#trend_logg_btn .button-native {\n  background: linear-gradient(to bottom, #4aad54, #a8e063); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9JbnN0YXJlbnQvSW5zdGFyZW50IFJlcG9zL2FnZW50X3Rlc3RfcHJvamVjdC9pb25pYzQtdGVtcGxhdGUvc3JjL2FwcC9wYWdlcy9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsZ0JBQWdCLEVBQUE7O0FBRXBCO0VBR0ksVUFBVTtFQUNWLFdBQVc7RUFDWCxrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixXQUFXLEVBQUE7O0FBRWY7RUFDSSxZQUFZLEVBQUE7O0FBRWhCO0VBQ0ksV0FBVztFQUNYLGdCQUFnQjtFQUNoQixlQUFlLEVBQUE7O0FBRW5CO0VBQ0ksd0RBQXdELEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlZ2lzLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDM1JTtcbn1cbi50ZW5fdG9te1xuICAgIC8vIHdpZHRoOiA1OCU7XG4gICAgLy8gaGVpZ2h0OiAxMCU7XG4gICAgd2lkdGg6IDM0JTtcbiAgICBoZWlnaHQ6IDEwJTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4uYWdlbmN5X3Rlc3R7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiBncmV5O1xufVxuLnRyZW5kX2hvbWV7XG4gICAgcGFkZGluZzogMTAlO1xufVxuLm9yX2NlbnRlcntcbiAgICBjb2xvcjogZ3JleTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbn1cbiN0cmVuZF9sb2dnX2J0biAuYnV0dG9uLW5hdGl2ZXtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjNGFhZDU0LCAjYThlMDYzKTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/home/home.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/auth/auth.service */ "./src/app/core/auth/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(authService, router, route, dataService) {
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.dataService = dataService;
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
    }
    HomePage.prototype.ngOnInit = function () {
        this.authState$ = this.authService.getAuthStateObserver();
        // Get the query params
        // this.route.queryParams
        //   .subscribe(params => this.return = params['return'] || '/home');
    };
    HomePage.prototype.detailswithqueryparams = function () {
        var _this = this;
        var navigationExtras = {
            queryParams: {
                special: 'required string',
            }
        };
        this.authService.login().then(function (_) { return _this.router.navigate(['/membership'], navigationExtras); });
        // end
        // check in membership page
    };
    HomePage.prototype.detailswithservice = function () {
        var _this = this;
        console.log(this.user);
        this.dataService.setData(42, this.user);
        // this.router.navigateByUrl('/membership/42')
        this.authService.login().then(function (_) { return _this.router.navigateByUrl('/membership/42'); });
    };
    HomePage.prototype.detailswithstate = function () {
        var _this = this;
        var navigationExtras = {
            state: {
                user: this.user
            }
        };
        this.authService.login().then(function (_) { return _this.router.navigate(['/membership'], navigationExtras); });
    };
    HomePage.prototype.logout = function () {
        this.authService.logout();
    };
    HomePage.prototype.signIn = function () {
        this.router.navigate(['/login']);
    };
    HomePage.prototype.signUp = function () {
        this.router.navigate(['/signup']);
    };
    HomePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/pages/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/pages/home/home.page.scss")]
        }),
        __metadata("design:paramtypes", [_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], HomePage);
    return HomePage;
}());

// link for data share
// https://www.youtube.com/watch?v=XyLcPdv1LKM
//  for model and pophover
// https://www.youtube.com/watch?v=jRxPOs1OM34


/***/ })

}]);
//# sourceMappingURL=pages-home-home-module.js.map