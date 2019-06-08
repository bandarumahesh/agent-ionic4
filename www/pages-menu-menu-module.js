(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-menu-menu-module"],{

/***/ "./src/app/pages/menu/menu.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/menu/menu.module.ts ***!
  \*******************************************/
/*! exports provided: MenuPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageModule", function() { return MenuPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu.page */ "./src/app/pages/menu/menu.page.ts");
/* harmony import */ var _profile_profile_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../profile/profile.module */ "./src/app/profile/profile.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







_profile_profile_module__WEBPACK_IMPORTED_MODULE_6__["ProfilePageModule"];
var routes = [
    {
        path: '',
        component: _menu_page__WEBPACK_IMPORTED_MODULE_5__["MenuPage"],
        children: [
            { path: 'agency-dashboard',
                loadChildren: '../agency-dashboard/agency-dashboard.module#AgencyDashboardPageModule' },
            {
                path: 'first',
                loadChildren: '../first-with-tabs/first-with-tabs.module#FirstWithTabsPageModule'
            },
            {
                path: 'second',
                loadChildren: '../second/second.module#SecondPageModule'
            },
            {
                path: 'second/details',
                loadChildren: '../details/details.module#DetailsPageModule'
            },
            { path: 'profile',
                loadChildren: '../../profile/profile.module#ProfilePageModule'
            },
            { path: 'profile/details',
                loadChildren: '../../profile/profile.module#ProfilePageModule'
            },
        ]
    }
];
var MenuPageModule = /** @class */ (function () {
    function MenuPageModule() {
    }
    MenuPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_menu_page__WEBPACK_IMPORTED_MODULE_5__["MenuPage"]]
        })
    ], MenuPageModule);
    return MenuPageModule;
}());



/***/ }),

/***/ "./src/app/pages/menu/menu.page.html":
/*!*******************************************!*\
  !*** ./src/app/pages/menu/menu.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-split-pane>\n  <ion-menu contentId=\"content\">\n    <ion-header>\n      <!-- <ion-toolbar color=\"primary\">\n        <ion-title>Menu</ion-title>\n      </ion-toolbar> -->\n      <ion-menu-toggle auto-hide=\"false\">\n      <div class=\"profile profile_new\" routerDirection=\"root\"  [routerLink]=\"['/menu/profile']\" routerLinkActive=\"router-link-active\" >\n        <img  class=\"user-img\" alt=\"profile-pic \"  [src]=\"userData.imagePath ? userData.imagePath : 'assets/imgs/profilepic.svg'\">\n      \n              \n              <p *ngIf=\"userData.name\"><span style=\"margin-left: 16px;margin-right: 4px;\">Hi</span> {{userData.name}}</p>\n\n        </div>\n        </ion-menu-toggle>\n    </ion-header>\n    <ion-content>\n      <ion-list>\n        <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of pages\">\n          <ion-item [routerLink]=\"p.url\" routerDirection=\"root\" [class.active-item]=\"selectedPath.startsWith(p.url)\">\n            <ion-label>\n              {{ p.title }}\n            </ion-label>\n          </ion-item>\n        </ion-menu-toggle> \n        <!-- <ion-item tappable routerLink=\"/login\" routerDirection=\"root\">\n          <ion-icon name=\"log-out\" slot=\"start\"></ion-icon>\n          Logout\n        </ion-item> -->\n        <ion-item tappable (click)=\"logout()\" routerDirection=\"root\">\n          <ion-icon name=\"log-out\" slot=\"start\"></ion-icon>\n          Logout\n        </ion-item>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n  <ion-router-outlet id=\"content\" main></ion-router-outlet>\n</ion-split-pane>"

/***/ }),

/***/ "./src/app/pages/menu/menu.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/menu/menu.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".active-item {\n  border-left: 8px solid var(--ion-color-primary); }\n\n.profile {\n  height: 104px;\n  padding-top: 12px;\n  background: #20c659;\n  /* fallback for old browsers */\n  /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(to bottom, #20c659, #a8e063);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n  color: #fff;\n  margin-bottom: 10px;\n  padding-left: 9px;\n  padding-top: 24px;\n  display: inline-flex;\n  width: 100%; }\n\n.profile img {\n    width: 64px !important;\n    border-radius: 50%;\n    height: 64px !important;\n    position: relative;\n    left: 8px; }\n\n.profile p {\n    margin-left: 10px;\n    font-size: 18px;\n    font-weight: 600;\n    padding-top: 2px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9JbnN0YXJlbnQvSW5zdGFyZW50IFJlcG9zL2FnZW50X3Rlc3RfcHJvamVjdC9pb25pYzQtdGVtcGxhdGUvc3JjL2FwcC9wYWdlcy9tZW51L21lbnUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksK0NBQStDLEVBQUE7O0FBRW5EO0VBQ0ksYUFBYTtFQUNiLGlCQUFpQjtFQUVqQixtQkFBbUI7RUFDbkIsOEJBQUE7RUFFQSwrQkFBQTtFQUNBLHdEQUF3RDtFQUN4RCxxRUFBQTtFQUNBLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGlCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsV0FBVyxFQUFBOztBQWZmO0lBa0JRLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixTQUFTLEVBQUE7O0FBdEJqQjtJQXlCUSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21lbnUvbWVudS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWN0aXZlLWl0ZW0ge1xuICAgIGJvcmRlci1sZWZ0OiA4cHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuLnByb2ZpbGUge1xuICAgIGhlaWdodDogMTA0cHg7XG4gICAgcGFkZGluZy10b3A6IDEycHg7XG4gICAgLy8gaGVpZ2h0OiAxNDBweDtcbiAgICBiYWNrZ3JvdW5kOiAjMjBjNjU5O1xuICAgIC8qIGZhbGxiYWNrIGZvciBvbGQgYnJvd3NlcnMgKi9cbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMyMGM2NTksICNhOGUwNjMpO1xuICAgIC8qIENocm9tZSAxMC0yNSwgU2FmYXJpIDUuMS02ICovXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzIwYzY1OSwgI2E4ZTA2Myk7XG4gICAgLyogVzNDLCBJRSAxMCsvIEVkZ2UsIEZpcmVmb3ggMTYrLCBDaHJvbWUgMjYrLCBPcGVyYSAxMissIFNhZmFyaSA3KyAqL1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiA5cHg7XG4gICAgcGFkZGluZy10b3A6MjRweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBcbiAgICBpbWcge1xuICAgICAgICB3aWR0aDogNjRweCAhaW1wb3J0YW50O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGhlaWdodDogNjRweCAhaW1wb3J0YW50O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGxlZnQ6IDhweDtcbiAgICB9XG4gICAgcHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgcGFkZGluZy10b3A6IDJweDtcbiAgICB9XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/pages/menu/menu.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/menu/menu.page.ts ***!
  \*****************************************/
/*! exports provided: MenuPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPage", function() { return MenuPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/auth/auth.service */ "./src/app/core/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MenuPage = /** @class */ (function () {
    function MenuPage(router, authService) {
        var _this = this;
        this.router = router;
        this.authService = authService;
        this.selectedPath = '';
        this.pages = [
            {
                title: 'Dashboard',
                url: '/menu/agency-dashboard'
            }, {
                title: 'Properties',
                url: '/menu/first'
            },
            {
                title: 'Revenues',
                url: '/menu/second'
            },
            {
                title: 'Agents',
                url: '/menu/second'
            },
            {
                title: 'Contacts',
                url: '/menu/second'
            },
            {
                title: 'Settings',
                url: '/menu/second'
            }
        ];
        this.userData = { 'name': 'Aj Chand', 'imagePath': null };
        this.router.events.subscribe(function (event) {
            if (event && event.url) {
                _this.selectedPath = event.url;
            }
        });
    }
    MenuPage.prototype.ngOnInit = function () {
    };
    MenuPage.prototype.gotoProfile = function () {
        this.router.navigate(['/profile']);
    };
    MenuPage.prototype.logout = function () {
        this.authService.logout();
        this.router.navigateByUrl('');
    };
    MenuPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.page.html */ "./src/app/pages/menu/menu.page.html"),
            styles: [__webpack_require__(/*! ./menu.page.scss */ "./src/app/pages/menu/menu.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], MenuPage);
    return MenuPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-menu-menu-module.js.map