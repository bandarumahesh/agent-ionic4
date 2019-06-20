(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-agents-add-agents-module"],{

/***/ "./src/app/pages/add-agents/add-agents.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/add-agents/add-agents.module.ts ***!
  \*******************************************************/
/*! exports provided: AddAgentsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAgentsPageModule", function() { return AddAgentsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _add_agents_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-agents.page */ "./src/app/pages/add-agents/add-agents.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _add_agents_page__WEBPACK_IMPORTED_MODULE_5__["AddAgentsPage"]
    }
];
var AddAgentsPageModule = /** @class */ (function () {
    function AddAgentsPageModule() {
    }
    AddAgentsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_add_agents_page__WEBPACK_IMPORTED_MODULE_5__["AddAgentsPage"]]
        })
    ], AddAgentsPageModule);
    return AddAgentsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/add-agents/add-agents.page.html":
/*!*******************************************************!*\
  !*** ./src/app/pages/add-agents/add-agents.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaulthref=\"\"></ion-back-button>\n          </ion-buttons>\n      <ion-title>ADD NEW AGENT</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content >\n  <div class=\"profile_Mainview\">\n    <div class=\"main-picsss\" id=\"back-ground\">\n          <img src=\"{{profilePicture}}\" onerror=\"this.onerror=null;this.src='assets/imgs/profilepic.svg'\" alt=\"Profile Pic\">\n          <div class=\"red-cam\" (click)=\"uploadPhoto()\">\n            <ion-icon name=\"camera\"></ion-icon>\n          </div>\n      </div>\n      <!-- <button class=\"editbtn\" ion-button [routerLink]=\"['/membership/12']\" routerDirection=\"forward\"  (click)=\"editUserProfile()\">\n          <img src=\"assets/icon/pencil.svg\" width=\"60\" />\n        </button> -->\n</div>\n</ion-content>\n "

/***/ }),

/***/ "./src/app/pages/add-agents/add-agents.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/add-agents/add-agents.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile_Mainview {\n  height: 34%;\n  background: linear-gradient(to bottom, #3bdc7e, #b0e66d);\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9JbnN0YXJlbnQvSW5zdGFyZW50IFJlcG9zL2FnZW50X3Rlc3RfcHJvamVjdC9pb25pYzQtdGVtcGxhdGUvc3JjL2FwcC9wYWdlcy9hZGQtYWdlbnRzL2FkZC1hZ2VudHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVztFQUNYLHdEQUF3RDtFQUN4RCxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hZGQtYWdlbnRzL2FkZC1hZ2VudHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGVfTWFpbnZpZXd7XG4gICAgaGVpZ2h0OiAzNCU7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzNiZGM3ZSwgI2IwZTY2ZCk7XG4gICAgd2lkdGg6IDEwMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/add-agents/add-agents.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/add-agents/add-agents.page.ts ***!
  \*****************************************************/
/*! exports provided: AddAgentsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAgentsPage", function() { return AddAgentsPage; });
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

var AddAgentsPage = /** @class */ (function () {
    function AddAgentsPage() {
    }
    AddAgentsPage.prototype.ngOnInit = function () {
    };
    AddAgentsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-agents',
            template: __webpack_require__(/*! ./add-agents.page.html */ "./src/app/pages/add-agents/add-agents.page.html"),
            styles: [__webpack_require__(/*! ./add-agents.page.scss */ "./src/app/pages/add-agents/add-agents.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AddAgentsPage);
    return AddAgentsPage;
}());



/***/ })

}]);
//# sourceMappingURL=add-agents-add-agents-module.js.map