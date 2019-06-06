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
                path: 'tab1',
                loadChildren: '../tab1/tab1.module#Tab1PageModule'
            },
            {
                path: 'tab1/details',
                loadChildren: '../details/details.module#DetailsPageModule'
            },
            {
                path: 'tab2',
                loadChildren: '../tab2/tab2.module#Tab2PageModule'
            },
            {
                path: 'tab2/add-user',
                loadChildren: '../add-user/add-user.module#AddUserPageModule'
            },
            {
                path: 'tab3',
                loadChildren: '../tab3/tab3.module#Tab3PageModule'
            }
        ]
    },
    {
        path: '',
        redirectTo: 'tabs/tab1',
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

module.exports = "<ion-tabs>\n \n  <ion-tab-bar slot=\"bottom\">\n \n    <ion-tab-button tab=\"tab1\">\n      <ion-icon name=\"sunny\"></ion-icon>\n      <ion-label>Tab 1</ion-label>\n    </ion-tab-button>\n \n    <ion-tab-button tab=\"tab2\">\n      <ion-icon name=\"moon\"></ion-icon>\n      <ion-label>Tab 2</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"tab3\">\n      <ion-icon name=\"star\"></ion-icon>\n      <ion-label>Tab 3</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n \n</ion-tabs>\n"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FirstWithTabsPage = /** @class */ (function () {
    function FirstWithTabsPage() {
    }
    FirstWithTabsPage.prototype.ngOnInit = function () {
    };
    FirstWithTabsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-first-with-tabs',
            template: __webpack_require__(/*! ./first-with-tabs.page.html */ "./src/app/pages/first-with-tabs/first-with-tabs.page.html"),
            styles: [__webpack_require__(/*! ./first-with-tabs.page.scss */ "./src/app/pages/first-with-tabs/first-with-tabs.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FirstWithTabsPage);
    return FirstWithTabsPage;
}());



/***/ })

}]);
//# sourceMappingURL=first-with-tabs-first-with-tabs-module.js.map