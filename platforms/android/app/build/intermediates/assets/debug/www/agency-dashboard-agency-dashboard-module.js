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

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n      <!-- <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons> -->\n      <ion-title>DASHBOARD</ion-title>\n      <div  class=\"side_menuStl\">\n          <ion-label>\n                    <img id=\"menu_forGlobal\"  src=\"https://ionicframework.com/docs/demos/api/card/madison.jpg\" class=\"headerProfile_img\"/>\n                   <span class=\"name_menu\">AJ Chand</span>\n                 <ion-select class=\"menu_select\" style=\"height: 0px;\"  [(ngModel)]=\"selectedMenu\" (ionChange)=\"selectMenuOptions($event.target.value)\" multiple=\"false\" interface=\"popover\">\n                   <ion-select-option *ngFor=\"let menu of menuOptions\" [value]=\"menu\" >{{menu}}</ion-select-option>\n                 </ion-select>\n               </ion-label>\n               </div>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content padding>\n<!-- <p text-center>Welcome to Dashboard</p> -->\n\n<br>\n\n    <ion-card class=\"card_dashboard\">\n        <ion-card-header class=\"backgrey\">\n            <ion-ripple-effect></ion-ripple-effect>\n            <ion-card-subtitle >Alert          \n              <p text-end class=\"right_alignflot\">22</p>\n            </ion-card-subtitle>\n            <!-- <ion-card-title>Card Title</ion-card-title> -->\n          </ion-card-header>\n        <ion-card-header>\n            <ion-ripple-effect></ion-ripple-effect>\n          <ion-card-subtitle>Messages           \n            <p text-end class=\"right_alignflot\">5</p>\n          </ion-card-subtitle>\n          <!-- <ion-card-title>Card Title</ion-card-title> -->\n        </ion-card-header>\n        <ion-card-header class=\"backgrey\">\n            <ion-ripple-effect></ion-ripple-effect>\n            <ion-card-subtitle >Jobs        \n              <p text-end class=\"right_alignflot\">12</p>\n            </ion-card-subtitle>\n            <!-- <ion-card-title>Card Title</ion-card-title> -->\n          </ion-card-header>\n          <ion-card-header>\n              <ion-ripple-effect></ion-ripple-effect>\n              <ion-card-subtitle>Agents\n                <p text-end class=\"right_alignflot\">28</p>\n              </ion-card-subtitle>\n              <!-- <ion-card-title>Card Title</ion-card-title> -->\n            </ion-card-header>\n      </ion-card>\n      <ion-card class=\"card_dashboard\">\n      <ion-row>\n        <ion-col col-6 class=\"col_border_left\">\n            <ion-ripple-effect></ion-ripple-effect>\n          <h2 class=\"prop_count\" text-center>1123</h2>\n    <p text-center class=\"prop_titl\">Properties</p>\n        </ion-col>\n        <ion-col col-6>\n     <div>\n        <ion-ripple-effect></ion-ripple-effect>\n        <h2 text-center>11</h2>\n  <p text-center>Vacant</p>\n     </div>\n      <hr>\n     <div>\n        <h2 text-center>113</h2>\n      <p text-center>Live</p>\n     </div>\n          </ion-col>\n      </ion-row>\n    </ion-card>\n  </ion-content>\n  "

/***/ }),

/***/ "./src/app/pages/agency-dashboard/agency-dashboard.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/agency-dashboard/agency-dashboard.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card_dashboard {\n  border-top: 2px solid #3bdc7e; }\n\nion-toolbar {\n  position: relative; }\n\n.title-md {\n  text-align: center !important;\n  font-size: 17px;\n  font-weight: 500; }\n\nion-title {\n  text-align: center !important;\n  font-size: 17px;\n  font-weight: 500; }\n\n.right_alignflot {\n  /* float: right; */\n  font-size: 18px;\n  /* margin-right: 20px; */\n  background: #3cdc7f;\n  color: #fff;\n  border-radius: 39%;\n  border-bottom-left-radius: 0px;\n  padding: 4px;\n  min-width: 31px !important;\n  text-align: center !important;\n  position: absolute;\n  right: 6px;\n  top: -21px; }\n\n.backgrey {\n  background: #f9f9f9; }\n\nion-card-subtitle {\n  font-size: 18px; }\n\n.prop_titl {\n  font-size: 20px;\n  font-weight: 400;\n  margin-top: 12px; }\n\n.prop_count {\n  margin-top: 36px;\n  font-size: 42px;\n  font-weight: 300; }\n\n.col_border_left {\n  border-right: 1px solid #f5f1f1; }\n\nhr {\n  background: #ece9e9; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9JbnN0YXJlbnQvSW5zdGFyZW50IFJlcG9zL2FnZW50X3Rlc3RfcHJvamVjdC9pb25pYzQtdGVtcGxhdGUvc3JjL2FwcC9wYWdlcy9hZ2VuY3ktZGFzaGJvYXJkL2FnZW5jeS1kYXNoYm9hcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNkJBQTZCLEVBQUE7O0FBR2pDO0VBQ0ksa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksNkJBQTZCO0VBQzdCLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTs7QUFJcEI7RUFDSSw2QkFBNkI7RUFDN0IsZUFBZTtFQUNmLGdCQUFnQixFQUFBOztBQUdwQjtFQUtRLGtCQUFBO0VBQ0EsZUFBZTtFQUNmLHdCQUFBO0VBRUEsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsOEJBQThCO0VBQzlCLFlBQVk7RUFDWiwwQkFBMEI7RUFDMUIsNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsVUFBVSxFQUFBOztBQUVsQjtFQUNJLG1CQUFtQixFQUFBOztBQUV2QjtFQUNJLGVBQWUsRUFBQTs7QUFFbkI7RUFDSSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksK0JBQStCLEVBQUE7O0FBRW5DO0VBQ0ksbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hZ2VuY3ktZGFzaGJvYXJkL2FnZW5jeS1kYXNoYm9hcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmRfZGFzaGJvYXJke1xuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjM2JkYzdlO1xufVxuXG5pb24tdG9vbGJhcntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4udGl0bGUtbWR7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG5cbiAgICAvLyBwYWRkaW5nLXJpZ2h0OiAyMSUgIWltcG9ydGFudDtcbn1cbmlvbi10aXRsZXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcblxufVxuLnJpZ2h0X2FsaWduZmxvdHtcbiAgICAvLyBmbG9hdDogcmlnaHQ7XG4gICAgLy8gZm9udC1zaXplOiAxOHB4O1xuICAgIC8vIG1hcmdpbi1yaWdodDogMjBweDtcblxuICAgICAgICAvKiBmbG9hdDogcmlnaHQ7ICovXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgLyogbWFyZ2luLXJpZ2h0OiAyMHB4OyAqL1xuICAgICAgICAvLyBiYWNrZ3JvdW5kOiAjZDJkMGQwO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjM2NkYzdmO1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzklO1xuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwcHg7XG4gICAgICAgIHBhZGRpbmc6IDRweDtcbiAgICAgICAgbWluLXdpZHRoOiAzMXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiA2cHg7XG4gICAgICAgIHRvcDogLTIxcHg7XG59XG4uYmFja2dyZXl7XG4gICAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcbn1cbmlvbi1jYXJkLXN1YnRpdGxle1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cbi5wcm9wX3RpdGx7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbWFyZ2luLXRvcDogMTJweDtcbn1cbi5wcm9wX2NvdW50e1xuICAgIG1hcmdpbi10b3A6IDM2cHg7XG4gICAgZm9udC1zaXplOiA0MnB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgXG59XG4uY29sX2JvcmRlcl9sZWZ0e1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmNWYxZjE7XG59XG5ocntcbiAgICBiYWNrZ3JvdW5kOiAjZWNlOWU5O1xufVxuIl19 */"

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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/auth/auth.service */ "./src/app/core/auth/auth.service.ts");
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




var AgencyDashboardPage = /** @class */ (function () {
    function AgencyDashboardPage(router, alertController, authService) {
        this.router = router;
        this.alertController = alertController;
        this.authService = authService;
        this.menuOptions = ['Contacts', 'Profile', 'settings', 'logout'];
    }
    AgencyDashboardPage.prototype.ngOnInit = function () {
    };
    AgencyDashboardPage.prototype.selectMenuOptions = function (menu) {
        console.log('hell', menu, this.selectedMenu);
        if (menu === 'Contacts') {
            this.router.navigate(['/menu/first/tabs/Dashboard/contacts']);
            this.selectedMenu = '';
        }
        else if (menu === 'Profile') {
            this.router.navigate(['/menu/first/tabs/Dashboard/profile']);
            this.selectedMenu = '';
        }
        else if (menu === 'settings') {
            this.router.navigate(['/menu/first/tabs/Dashboard/settings']);
            this.selectedMenu = '';
        }
        else if (menu === 'logout') {
            this.logout();
            this.selectedMenu = '';
        }
    };
    AgencyDashboardPage.prototype.logout = function () {
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
    AgencyDashboardPage.prototype.confirmLogout = function () {
        this.authService.logout();
        this.router.navigateByUrl('');
    };
    AgencyDashboardPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-agency-dashboard',
            template: __webpack_require__(/*! ./agency-dashboard.page.html */ "./src/app/pages/agency-dashboard/agency-dashboard.page.html"),
            styles: [__webpack_require__(/*! ./agency-dashboard.page.scss */ "./src/app/pages/agency-dashboard/agency-dashboard.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"],
            _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], AgencyDashboardPage);
    return AgencyDashboardPage;
}());



/***/ })

}]);
//# sourceMappingURL=agency-dashboard-agency-dashboard-module.js.map