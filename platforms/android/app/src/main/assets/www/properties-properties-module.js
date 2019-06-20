(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["properties-properties-module"],{

/***/ "./src/app/pages/properties/properties.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/properties/properties.module.ts ***!
  \*******************************************************/
/*! exports provided: PropertiesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertiesPageModule", function() { return PropertiesPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _properties_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./properties.page */ "./src/app/pages/properties/properties.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _properties_page__WEBPACK_IMPORTED_MODULE_5__["PropertiesPage"]
    }
];
var PropertiesPageModule = /** @class */ (function () {
    function PropertiesPageModule() {
    }
    PropertiesPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_properties_page__WEBPACK_IMPORTED_MODULE_5__["PropertiesPage"]]
        })
    ], PropertiesPageModule);
    return PropertiesPageModule;
}());



/***/ }),

/***/ "./src/app/pages/properties/properties.page.html":
/*!*******************************************************!*\
  !*** ./src/app/pages/properties/properties.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaulthref=\"\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>PROPERTIES</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n<div style=\"padding-bottom: 50px;\">\n    <ion-card routerLink=\"/submenu/first\">\n      <ion-card-header>\n        <img src=\"https://ionicframework.com/docs/demos/api/card/madison.jpg\" />\n      </ion-card-header>\n      <ion-card-content>\n        <ion-card-title style=\"font-size: 18px\"\n          >19 carlton street nsw 2012</ion-card-title\n        >\n        <ion-card-subtitle class=\"ios hydrated\" role=\"heading\" aria-level=\"3\"\n          >granvell</ion-card-subtitle\n        >\n       \n      </ion-card-content>\n    </ion-card>\n    <ion-card routerLink=\"/submenu/first\">\n      <ion-card-header>\n        <img src=\"https://ionicframework.com/docs/demos/api/card/madison.jpg\" />\n      </ion-card-header>\n      <ion-card-content>\n        <ion-card-title style=\"font-size: 18px\"\n          >19 carlton street nsw 2012</ion-card-title\n        >\n        <ion-card-subtitle class=\"ios hydrated\" role=\"heading\" aria-level=\"3\"\n          >granvell</ion-card-subtitle\n        >\n      </ion-card-content>\n    </ion-card>\n    <ion-card routerLink=\"/submenu/first\">\n      <ion-card-header>\n        <img src=\"https://ionicframework.com/docs/demos/api/card/madison.jpg\" />\n      </ion-card-header>\n      <ion-card-content>\n        <ion-card-title style=\"font-size: 18px\"\n          >19 carlton street nsw 2012</ion-card-title\n        >\n        <ion-card-subtitle class=\"ios hydrated\" role=\"heading\" aria-level=\"3\"\n          >granvell</ion-card-subtitle\n        >\n      </ion-card-content>\n    </ion-card>\n</div>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n      <ion-fab-button [routerLink]=\"['/menu/first/tabs/Properties/addProperty']\" routerLinkActive=\"router-link-active\" >\n        <ion-icon name=\"add\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/properties/properties.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/properties/properties.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb3BlcnRpZXMvcHJvcGVydGllcy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/properties/properties.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/properties/properties.page.ts ***!
  \*****************************************************/
/*! exports provided: PropertiesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertiesPage", function() { return PropertiesPage; });
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

var PropertiesPage = /** @class */ (function () {
    function PropertiesPage() {
    }
    PropertiesPage.prototype.ngOnInit = function () {
    };
    PropertiesPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-properties',
            template: __webpack_require__(/*! ./properties.page.html */ "./src/app/pages/properties/properties.page.html"),
            styles: [__webpack_require__(/*! ./properties.page.scss */ "./src/app/pages/properties/properties.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PropertiesPage);
    return PropertiesPage;
}());



/***/ })

}]);
//# sourceMappingURL=properties-properties-module.js.map