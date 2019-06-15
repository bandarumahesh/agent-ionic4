(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["subtab1-subtab1-module"],{

/***/ "./src/app/pages/submenu/subtab1/subtab1.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/submenu/subtab1/subtab1.module.ts ***!
  \*********************************************************/
/*! exports provided: SubTab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubTab1PageModule", function() { return SubTab1PageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _subtab1_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./subtab1.page */ "./src/app/pages/submenu/subtab1/subtab1.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _subtab1_page__WEBPACK_IMPORTED_MODULE_5__["SubTab1Page"]
    }
];
var SubTab1PageModule = /** @class */ (function () {
    function SubTab1PageModule() {
    }
    SubTab1PageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_subtab1_page__WEBPACK_IMPORTED_MODULE_5__["SubTab1Page"]]
        })
    ], SubTab1PageModule);
    return SubTab1PageModule;
}());



/***/ }),

/***/ "./src/app/pages/submenu/subtab1/subtab1.page.html":
/*!*********************************************************!*\
  !*** ./src/app/pages/submenu/subtab1/subtab1.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header>\n  <ion-toolbar color=\"primary\">\n  \t<ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>subtab1</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n<ion-header>\n  <ion-toolbar color=\"primary\">\n      <!-- <ion-buttons slot=\"end\">\n          <ion-back-button defaulthref=\"/menu/first/tabs/tab1/details\"></ion-back-button>\n        </ion-buttons> -->\n        <ion-icon name=\"arrow-back\" class=\"back_arrow_common\"  routerLink=\"/menu/first/tabs/Properties\"></ion-icon>\n    <ion-title>Sub Tab 1</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  My first tab content\n  <!-- <ion-button color=\"tertiary\" expand=\"block\" (click)=\"goToPlanets()\" ></ion-button> -->\n  <ion-button color=\"tertiary\" expand=\"block\" routerLink=\"/menu/first/tabs/Properties\" >\n    Details forward\n  </ion-button>\n \n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/submenu/subtab1/subtab1.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/submenu/subtab1/subtab1.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N1Ym1lbnUvc3VidGFiMS9zdWJ0YWIxLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/submenu/subtab1/subtab1.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/submenu/subtab1/subtab1.page.ts ***!
  \*******************************************************/
/*! exports provided: SubTab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubTab1Page", function() { return SubTab1Page; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SubTab1Page = /** @class */ (function () {
    function SubTab1Page(navController) {
        this.navController = navController;
    }
    SubTab1Page.prototype.ngOnInit = function () {
    };
    SubTab1Page.prototype.goToPlanets = function () {
        this.navController.navigateRoot('/menu/first/tabs/tab1/details');
    };
    SubTab1Page = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-subtab1',
            template: __webpack_require__(/*! ./subtab1.page.html */ "./src/app/pages/submenu/subtab1/subtab1.page.html"),
            styles: [__webpack_require__(/*! ./subtab1.page.scss */ "./src/app/pages/submenu/subtab1/subtab1.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"]])
    ], SubTab1Page);
    return SubTab1Page;
}());



/***/ })

}]);
//# sourceMappingURL=subtab1-subtab1-module.js.map