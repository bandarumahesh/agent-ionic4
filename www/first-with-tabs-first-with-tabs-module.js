(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["first-with-tabs-first-with-tabs-module"],{

/***/ "./src/app/pages/first-with-tabs/first-with-tabs.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/first-with-tabs/first-with-tabs.module.ts ***!
  \*****************************************************************/
/*! exports provided: FirstWithTabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstWithTabsPageModule", function() { return FirstWithTabsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _first_with_tabs_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./first-with-tabs.page */ "./src/app/pages/first-with-tabs/first-with-tabs.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: 'tabs',
        component: _first_with_tabs_page__WEBPACK_IMPORTED_MODULE_5__["FirstWithTabsPage"],
        children: [
            {
                path: 'Dashboard',
                loadChildren: '../agency-dashboard/agency-dashboard.module#AgencyDashboardPageModule'
            },
            // {
            //   path: 'tab1/details',
            //   loadChildren: '../details/details.module#DetailsPageModule'
            // },
            {
                path: 'Properties',
                loadChildren: '../propertyModules/properties/properties.module#PropertiesPageModule'
            },
            // {
            //   path: 'properties/addProperty',
            //   loadChildren: '../add-new-property/add-new-property.module#AddNewPropertyPageModule'
            // },
            {
                path: 'Agents',
                loadChildren: '../agents/agents.module#AgentsPageModule'
            },
            // {
            //   path: 'Agents/addAgents',
            //   loadChildren: '../add-agents/add-agents.module#AddAgentsPageModule'
            // },
            {
                path: 'Chat',
                loadChildren: '../agents/agents.module#AgentsPageModule'
            },
            {
                path: 'Dashboard/profile',
                loadChildren: '../../profile/profile.module#ProfilePageModule'
            },
            {
                path: 'Dashboard/contacts',
                loadChildren: '../contacts/contacts.module#ContactsPageModule'
            },
            {
                path: 'Dashboard/settings',
                loadChildren: '../settings/settings.module#SettingsPageModule'
            }
        ]
    },
    {
        path: '',
        redirectTo: 'tabs/Dashboard',
        pathMatch: 'full'
    }
];
var FirstWithTabsPageModule = /** @class */ (function () {
    function FirstWithTabsPageModule() {
    }
    FirstWithTabsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_first_with_tabs_page__WEBPACK_IMPORTED_MODULE_5__["FirstWithTabsPage"]]
        })
    ], FirstWithTabsPageModule);
    return FirstWithTabsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/first-with-tabs/first-with-tabs.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/pages/first-with-tabs/first-with-tabs.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header id=\"globalMenu\">\n    <ion-toolbar color=\"primary\">\n      <ion-title class=\"menu_tile\"></ion-title>\n      <div  class=\"side_menuStl\">\n   <ion-label>\n             <img id=\"menu_forGlobal\"  src=\"https://ionicframework.com/docs/demos/api/card/madison.jpg\" style=\"width:40px;border-radius: 50%;height:40px;\"/>\n            <span class=\"name_menu\">AJ Chand</span>\n          <ion-select class=\"menu_select\" style=\"height: 0px;\"  [(ngModel)]=\"selectedMenu\" (ionChange)=\"selectMenuOptions($event.target.value)\" multiple=\"false\" interface=\"popover\">\n            <ion-select-option *ngFor=\"let menu of menuOptions\" [value]=\"menu\" >{{menu}}</ion-select-option>\n          </ion-select>\n        </ion-label>\n        </div>\n    </ion-toolbar>\n  </ion-header> -->\n\n<ion-tabs>\n \n  <ion-tab-bar slot=\"bottom\">\n \n    <ion-tab-button tab=\"Dashboard\">\n        <ion-icon name=\"podium\"></ion-icon>\n      <ion-label>Dashboard</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"Properties\">\n      <ion-icon name=\"home\"></ion-icon>\n      <ion-label>Properties</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"Agents\">\n      <ion-icon name=\"people\"></ion-icon>\n      <ion-label>Agents</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"Chat\">\n      <ion-icon name=\"chatboxes\"></ion-icon>\n      <ion-label>Chat</ion-label>\n    </ion-tab-button>\n    <!-- <ion-tab-button tab=\"Chat\">\n        <ion-icon name=\"star\"></ion-icon>\n        <ion-label>MORE</ion-label>\n      </ion-tab-button> -->\n  </ion-tab-bar>\n \n</ion-tabs>\n"

/***/ }),

/***/ "./src/app/pages/first-with-tabs/first-with-tabs.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/first-with-tabs/first-with-tabs.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZpcnN0LXdpdGgtdGFicy9maXJzdC13aXRoLXRhYnMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/first-with-tabs/first-with-tabs.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/first-with-tabs/first-with-tabs.page.ts ***!
  \***************************************************************/
/*! exports provided: FirstWithTabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstWithTabsPage", function() { return FirstWithTabsPage; });
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




var FirstWithTabsPage = /** @class */ (function () {
    function FirstWithTabsPage(router, alertController, authService) {
        this.router = router;
        this.alertController = alertController;
        this.authService = authService;
        this.menuOptions = ['Contacts', 'Profile', 'settings', 'logout'];
    }
    FirstWithTabsPage.prototype.ngOnInit = function () {
    };
    FirstWithTabsPage.prototype.selectMenuOptions = function (menu) {
        console.log('hell', menu, this.selectedMenu);
        if (menu == 'Contacts') {
        }
        else if (menu == 'Profile') {
            this.router.navigate(['/menu/first/tabs/Dashboard/Profile']);
        }
        else if (menu == 'settings') {
        }
        else {
            this.logout();
        }
    };
    FirstWithTabsPage.prototype.logout = function () {
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
    FirstWithTabsPage.prototype.confirmLogout = function () {
        this.authService.logout();
        this.router.navigateByUrl('');
    };
    FirstWithTabsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-first-with-tabs',
            template: __webpack_require__(/*! ./first-with-tabs.page.html */ "./src/app/pages/first-with-tabs/first-with-tabs.page.html"),
            styles: [__webpack_require__(/*! ./first-with-tabs.page.scss */ "./src/app/pages/first-with-tabs/first-with-tabs.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"],
            _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], FirstWithTabsPage);
    return FirstWithTabsPage;
}());



/***/ })

}]);
//# sourceMappingURL=first-with-tabs-first-with-tabs-module.js.map