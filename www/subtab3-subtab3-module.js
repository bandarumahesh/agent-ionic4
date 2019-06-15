(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["subtab3-subtab3-module"],{

/***/ "./src/app/pages/submenu/subtab3/subtab3.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/submenu/subtab3/subtab3.module.ts ***!
  \*********************************************************/
/*! exports provided: SubTab3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubTab3PageModule", function() { return SubTab3PageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _subtab3_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./subtab3.page */ "./src/app/pages/submenu/subtab3/subtab3.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _subtab3_page__WEBPACK_IMPORTED_MODULE_5__["SubTab3Page"]
    }
];
var SubTab3PageModule = /** @class */ (function () {
    function SubTab3PageModule() {
    }
    SubTab3PageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_subtab3_page__WEBPACK_IMPORTED_MODULE_5__["SubTab3Page"]]
        })
    ], SubTab3PageModule);
    return SubTab3PageModule;
}());



/***/ }),

/***/ "./src/app/pages/submenu/subtab3/subtab3.page.html":
/*!*********************************************************!*\
  !*** ./src/app/pages/submenu/subtab3/subtab3.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n  \t<!-- <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons> -->\n    <ion-icon name=\"arrow-back\" class=\"back_arrow_common\"  routerLink=\"/menu/first/tabs/Properties\"></ion-icon>\n    <ion-title>tab3</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/submenu/subtab3/subtab3.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/submenu/subtab3/subtab3.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N1Ym1lbnUvc3VidGFiMy9zdWJ0YWIzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/submenu/subtab3/subtab3.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/submenu/subtab3/subtab3.page.ts ***!
  \*******************************************************/
/*! exports provided: SubTab3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubTab3Page", function() { return SubTab3Page; });
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

var SubTab3Page = /** @class */ (function () {
    function SubTab3Page() {
    }
    SubTab3Page.prototype.ngOnInit = function () {
    };
    SubTab3Page = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tab3',
            template: __webpack_require__(/*! ./subtab3.page.html */ "./src/app/pages/submenu/subtab3/subtab3.page.html"),
            styles: [__webpack_require__(/*! ./subtab3.page.scss */ "./src/app/pages/submenu/subtab3/subtab3.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SubTab3Page);
    return SubTab3Page;
}());



/***/ })

}]);
//# sourceMappingURL=subtab3-subtab3-module.js.map