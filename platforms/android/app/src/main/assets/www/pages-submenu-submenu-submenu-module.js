(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-submenu-submenu-submenu-module"],{

/***/ "./src/app/pages/submenu/submenu/submenu.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/submenu/submenu/submenu.module.ts ***!
  \*********************************************************/
/*! exports provided: SubMenuPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubMenuPageModule", function() { return SubMenuPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _submenu_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./submenu.page */ "./src/app/pages/submenu/submenu/submenu.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// import { AddAgentsPage } from '../add-agents/add-agents.page';
var routes = [
    {
        path: '',
        component: _submenu_page__WEBPACK_IMPORTED_MODULE_5__["SubMenuPage"],
        children: [
            { path: 'agency-dashboard',
                loadChildren: '../../agency-dashboard/agency-dashboard.module#AgencyDashboardPageModule' },
            {
                path: 'first',
                loadChildren: '../subMenuTabs/subMenuTabs.module#SubMenuTabsPageModule'
            },
            {
                path: 'second',
                loadChildren: '../../second/second.module#SecondPageModule'
            },
            // {
            //   path: 'second/details',
            //   loadChildren: '../../details/details.module#DetailsPageModule'
            // },
            { path: 'profile',
                loadChildren: '../../../profile/profile.module#ProfilePageModule'
            },
            { path: 'profile/details',
                loadChildren: '../../../profile/profile.module#ProfilePageModule'
            },
            { path: 'revenues', loadChildren: '../../revenues/revenues.module#RevenuesPageModule' },
            { path: 'agents', loadChildren: '../../agents/agents.module#AgentsPageModule' },
            { path: 'contacts', loadChildren: '../../contacts/contacts.module#ContactsPageModule' },
        ]
    }
];
var SubMenuPageModule = /** @class */ (function () {
    function SubMenuPageModule() {
    }
    SubMenuPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_submenu_page__WEBPACK_IMPORTED_MODULE_5__["SubMenuPage"]]
        })
    ], SubMenuPageModule);
    return SubMenuPageModule;
}());



/***/ }),

/***/ "./src/app/pages/submenu/submenu/submenu.page.html":
/*!*********************************************************!*\
  !*** ./src/app/pages/submenu/submenu/submenu.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-split-pane>\n  <ion-menu contentId=\"content\">\n    <ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-title>Menu</ion-title>\n      </ion-toolbar> \n      <ion-menu-toggle auto-hide=\"false\">\n      <div class=\"profile profile_new\" routerDirection=\"root\"  [routerLink]=\"['/menu/profile']\" routerLinkActive=\"router-link-active\" >\n        <img  class=\"user-img\" alt=\"profile-pic \"  [src]=\"userData.imagePath ? userData.imagePath : 'assets/imgs/profilepic.svg'\">\n      \n              \n              <p *ngIf=\"userData.name\"><span style=\"margin-left: 16px;margin-right: 4px;\">Hi</span> {{userData.name}}</p>\n\n        </div>\n        </ion-menu-toggle>\n    </ion-header>\n    <ion-content>\n      <ion-list>\n        <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of pages\">\n          <ion-item [routerLink]=\"p.url\" routerDirection=\"root\" [class.active-item]=\"selectedPath.startsWith(p.url)\">\n            <ion-label>\n              {{ p.title }}\n            </ion-label>\n          </ion-item>\n        </ion-menu-toggle> \n       <ion-item tappable routerLink=\"/login\" routerDirection=\"root\">\n          <ion-icon name=\"log-out\" slot=\"start\"></ion-icon>\n          Logout\n        </ion-item>\n        <ion-item tappable (click)=\"logout()\" routerDirection=\"root\">\n          <ion-icon name=\"log-out\" slot=\"start\"></ion-icon>\n          Logout\n        </ion-item>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n\n \n</ion-split-pane> -->\nhello\n\n<ion-router-outlet id=\"content\" main></ion-router-outlet>"

/***/ }),

/***/ "./src/app/pages/submenu/submenu/submenu.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/submenu/submenu/submenu.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".active-item {\n  border-left: 8px solid var(--ion-color-primary); }\n\n.profile {\n  height: 104px;\n  padding-top: 12px;\n  background: #20c659;\n  /* fallback for old browsers */\n  /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(to bottom, #20c659, #a8e063);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n  color: #fff;\n  padding-bottom: 10px;\n  padding-left: 9px;\n  padding-top: 24px;\n  display: inline-flex;\n  width: 100%; }\n\n.profile img {\n    width: 64px !important;\n    border-radius: 50%;\n    height: 64px !important;\n    position: relative;\n    left: 8px; }\n\n.profile p {\n    margin-left: 10px;\n    font-size: 18px;\n    font-weight: 600;\n    padding-top: 2px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9JbnN0YXJlbnQvSW5zdGFyZW50IFJlcG9zL2FnZW50X3Rlc3RfcHJvamVjdC9pb25pYzQtdGVtcGxhdGUvc3JjL2FwcC9wYWdlcy9zdWJtZW51L3N1Ym1lbnUvc3VibWVudS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQ0FBK0MsRUFBQTs7QUFFbkQ7RUFDSSxhQUFhO0VBQ2IsaUJBQWlCO0VBRWpCLG1CQUFtQjtFQUNuQiw4QkFBQTtFQUVBLCtCQUFBO0VBQ0Esd0RBQXdEO0VBQ3hELHFFQUFBO0VBQ0EsV0FBVztFQUNYLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsaUJBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixXQUFXLEVBQUE7O0FBZmY7SUFpQlEsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFNBQVMsRUFBQTs7QUFyQmpCO0lBd0JRLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc3VibWVudS9zdWJtZW51L3N1Ym1lbnUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjdGl2ZS1pdGVtIHtcbiAgICBib3JkZXItbGVmdDogOHB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbi5wcm9maWxlIHtcbiAgICBoZWlnaHQ6IDEwNHB4O1xuICAgIHBhZGRpbmctdG9wOiAxMnB4O1xuICAgIC8vIGhlaWdodDogMTQwcHg7XG4gICAgYmFja2dyb3VuZDogIzIwYzY1OTtcbiAgICAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMjBjNjU5LCAjYThlMDYzKTtcbiAgICAvKiBDaHJvbWUgMTAtMjUsIFNhZmFyaSA1LjEtNiAqL1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMyMGM2NTksICNhOGUwNjMpO1xuICAgIC8qIFczQywgSUUgMTArLyBFZGdlLCBGaXJlZm94IDE2KywgQ2hyb21lIDI2KywgT3BlcmEgMTIrLCBTYWZhcmkgNysgKi9cbiAgICBjb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDlweDtcbiAgICBwYWRkaW5nLXRvcDoyNHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiA2NHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgaGVpZ2h0OiA2NHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbGVmdDogOHB4O1xuICAgIH1cbiAgICBwe1xuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBwYWRkaW5nLXRvcDogMnB4O1xuICAgIH1cbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/submenu/submenu/submenu.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/submenu/submenu/submenu.page.ts ***!
  \*******************************************************/
/*! exports provided: SubMenuPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubMenuPage", function() { return SubMenuPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/auth/auth.service */ "./src/app/core/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SubMenuPage = /** @class */ (function () {
    function SubMenuPage(router, authService) {
        var _this = this;
        this.router = router;
        this.authService = authService;
        this.selectedPath = '';
        this.pages = [
            {
                title: 'Dashboard',
                url: '/submenu/agency-dashboard'
            },
            {
                title: 'Properties',
                url: '/submenu/first'
            },
            {
                title: 'Revenues',
                url: '/submenu/revenues'
            },
            {
                title: 'Agents',
                url: '/submenu/agents'
            },
            {
                title: 'Contacts',
                url: '/submenu/contacts'
            },
            {
                title: 'Settings',
                url: '/submenu/second'
            }
        ];
        this.userData = { 'name': 'Aj Chand', 'imagePath': null };
        this.router.events.subscribe(function (event) {
            if (event && event.url) {
                _this.selectedPath = event.url;
            }
        });
    }
    SubMenuPage.prototype.ngOnInit = function () {
    };
    SubMenuPage.prototype.gotoProfile = function () {
        this.router.navigate(['/profile']);
    };
    SubMenuPage.prototype.logout = function () {
        this.authService.logout();
        this.router.navigateByUrl('');
    };
    SubMenuPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-submenu',
            template: __webpack_require__(/*! ./submenu.page.html */ "./src/app/pages/submenu/submenu/submenu.page.html"),
            styles: [__webpack_require__(/*! ./submenu.page.scss */ "./src/app/pages/submenu/submenu/submenu.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], SubMenuPage);
    return SubMenuPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-submenu-submenu-submenu-module.js.map