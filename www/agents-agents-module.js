(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["agents-agents-module"],{

/***/ "./src/app/pages/agents/agents.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/agents/agents.module.ts ***!
  \***********************************************/
/*! exports provided: AgentsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentsPageModule", function() { return AgentsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _agents_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./agents.page */ "./src/app/pages/agents/agents.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _agents_page__WEBPACK_IMPORTED_MODULE_5__["AgentsPage"]
    }
];
var AgentsPageModule = /** @class */ (function () {
    function AgentsPageModule() {
    }
    AgentsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_agents_page__WEBPACK_IMPORTED_MODULE_5__["AgentsPage"]]
        })
    ], AgentsPageModule);
    return AgentsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/agents/agents.page.html":
/*!***********************************************!*\
  !*** ./src/app/pages/agents/agents.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaulthref=\"\"></ion-back-button>\n          </ion-buttons>\n      <ion-title>AGENTS</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content padding>\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n        <ion-fab-button [routerLink]=\"['/menu/first/tabs/Agents/addAgents']\" routerLinkActive=\"router-link-active\" >\n          <ion-icon name=\"person-add\"></ion-icon>\n        </ion-fab-button>\n      </ion-fab>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/agents/agents.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/agents/agents.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FnZW50cy9hZ2VudHMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/agents/agents.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/agents/agents.page.ts ***!
  \*********************************************/
/*! exports provided: AgentsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentsPage", function() { return AgentsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AgentsPage = /** @class */ (function () {
    function AgentsPage(router) {
        this.router = router;
    }
    AgentsPage.prototype.ngOnInit = function () {
    };
    AgentsPage.prototype.addNewAgent = function () {
        this.router.navigate(['/menu/first/tabs/Agents/addAgents']);
    };
    AgentsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-agents',
            template: __webpack_require__(/*! ./agents.page.html */ "./src/app/pages/agents/agents.page.html"),
            styles: [__webpack_require__(/*! ./agents.page.scss */ "./src/app/pages/agents/agents.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AgentsPage);
    return AgentsPage;
}());



/***/ })

}]);
//# sourceMappingURL=agents-agents-module.js.map