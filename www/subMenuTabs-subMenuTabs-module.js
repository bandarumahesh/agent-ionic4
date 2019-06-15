(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["subMenuTabs-subMenuTabs-module"],{

/***/ "./src/app/pages/submenu/subMenuTabs/subMenuTabs.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/submenu/subMenuTabs/subMenuTabs.module.ts ***!
  \*****************************************************************/
/*! exports provided: SubMenuTabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubMenuTabsPageModule", function() { return SubMenuTabsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _subMenuTabs_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./subMenuTabs.page */ "./src/app/pages/submenu/subMenuTabs/subMenuTabs.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: 'subtabs',
        component: _subMenuTabs_page__WEBPACK_IMPORTED_MODULE_5__["subMenuTabsPage"],
        children: [
            {
                path: 'tab1',
                loadChildren: '../subtab1/subtab1.module#SubTab1PageModule'
            },
            // {
            //   path: 'tab1/details',
            //   loadChildren: '../details/details.module#DetailsPageModule'
            // },
            {
                path: 'tab2',
                loadChildren: '../subtab2/subtab2.module#SubTab2PageModule'
            },
            // {
            //   path: 'tab2/add-user',
            //   loadChildren: '../add-user/add-user.module#AddUserPageModule'
            // },
            {
                path: 'tab3',
                loadChildren: '../subtab3/subtab3.module#SubTab3PageModule'
            }
        ]
    },
    {
        path: '',
        redirectTo: 'subtabs/tab1',
        pathMatch: 'full'
    }
];
var SubMenuTabsPageModule = /** @class */ (function () {
    function SubMenuTabsPageModule() {
    }
    SubMenuTabsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_subMenuTabs_page__WEBPACK_IMPORTED_MODULE_5__["subMenuTabsPage"]]
        })
    ], SubMenuTabsPageModule);
    return SubMenuTabsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/submenu/subMenuTabs/subMenuTabs.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/pages/submenu/subMenuTabs/subMenuTabs.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-tabs>\n \n  <ion-tab-bar slot=\"bottom\">\n \n    <ion-tab-button tab=\"tab1\">\n      <ion-icon name=\"sunny\"></ion-icon>\n      <ion-label>DASHBOARD</ion-label>\n    </ion-tab-button>\n \n    <ion-tab-button tab=\"tab2\">\n      <ion-icon name=\"moon\"></ion-icon>\n      <ion-label>ACCOUNTS</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"tab3\">\n      <ion-icon name=\"star\"></ion-icon>\n      <ion-label>INSPECTIONS</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"tab4\">\n        <ion-icon name=\"star\"></ion-icon>\n        <ion-label>REPAIRS</ion-label>\n      </ion-tab-button>\n      <ion-tab-button tab=\"tab5\">\n          <ion-icon name=\"star\"></ion-icon>\n          <ion-label>CHAT</ion-label>\n        </ion-tab-button>\n  </ion-tab-bar>\n \n</ion-tabs>\n"

/***/ }),

/***/ "./src/app/pages/submenu/subMenuTabs/subMenuTabs.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/submenu/subMenuTabs/subMenuTabs.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N1Ym1lbnUvc3ViTWVudVRhYnMvc3ViTWVudVRhYnMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/submenu/subMenuTabs/subMenuTabs.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/submenu/subMenuTabs/subMenuTabs.page.ts ***!
  \***************************************************************/
/*! exports provided: subMenuTabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subMenuTabsPage", function() { return subMenuTabsPage; });
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

var subMenuTabsPage = /** @class */ (function () {
    function subMenuTabsPage() {
    }
    subMenuTabsPage.prototype.ngOnInit = function () {
    };
    subMenuTabsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-subMenuTabs',
            template: __webpack_require__(/*! ./subMenuTabs.page.html */ "./src/app/pages/submenu/subMenuTabs/subMenuTabs.page.html"),
            styles: [__webpack_require__(/*! ./subMenuTabs.page.scss */ "./src/app/pages/submenu/subMenuTabs/subMenuTabs.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], subMenuTabsPage);
    return subMenuTabsPage;
}());



/***/ })

}]);
//# sourceMappingURL=subMenuTabs-subMenuTabs-module.js.map