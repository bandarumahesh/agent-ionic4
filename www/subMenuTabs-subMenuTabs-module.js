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

module.exports = "<ion-tabs>\n    <ion-tab-bar slot=\"bottom\">\n      <ion-tab-button tab=\"tab1\">\n        <ion-icon name=\"sunny\"></ion-icon>\n        <ion-label>DASHBOARD</ion-label>\n      </ion-tab-button>\n      <ion-tab-button tab=\"tab2\">\n        <ion-icon name=\"moon\"></ion-icon>\n        <ion-label>ACCOUNTS</ion-label>\n      </ion-tab-button>\n      <ion-tab-button tab=\"tab3\">\n        <ion-icon name=\"star\"></ion-icon>\n        <ion-label>INSPECTIONS</ion-label>\n      </ion-tab-button>\n      <ion-tab-button tab=\"moon\">\n          <ion-icon name=\"star\"></ion-icon>\n          <ion-label>REPAIRS</ion-label>\n        </ion-tab-button>\n        <ion-tab-button tab=\"tab3\">\n            <ion-icon name=\"sunny\"></ion-icon>\n            <ion-label>Notices</ion-label>\n          </ion-tab-button>\n        <ion-tab-button tab=\"tab5\">\n            <ion-icon name=\"sunny\"></ion-icon>\n            <ion-label>CHAT</ion-label>\n          </ion-tab-button>\n\n\n\n    </ion-tab-bar>\n  </ion-tabs>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!-- <ion-tabs>\n \n  <ion-tab-bar slot=\"bottom\">\n      <ion-slides class=\"slides_main\" (ionSlideWillChange)=\"changeWillSlide($event)\">\n          <ion-slide class=\"maintain_m\">\n    <ion-tab-button tab=\"tab1\">\n      <ion-icon name=\"sunny\"></ion-icon>\n      <ion-label>DASHBOARD</ion-label>\n    </ion-tab-button>\n </ion-slide>\n <ion-slide class=\"maintain_m\">\n    <ion-tab-button tab=\"tab2\">\n      <ion-icon name=\"moon\"></ion-icon>\n      <ion-label>ACCOUNTS</ion-label>\n    </ion-tab-button>\n    </ion-slide>\n    <ion-slide class=\"maintain_m\">\n\n    <ion-tab-button tab=\"tab3\">\n      <ion-icon name=\"star\"></ion-icon>\n      <ion-label>INSPECTIONS</ion-label>\n    </ion-tab-button>\n    </ion-slide>\n    <ion-slide class=\"maintain_m\">\n    <ion-tab-button tab=\"tab4\">\n        <ion-icon name=\"star\"></ion-icon>\n        <ion-label>REPAIRS</ion-label>\n      </ion-tab-button>\n      </ion-slide>\n      <ion-slide class=\"maintain_m\">\n      <ion-tab-button tab=\"tab5\">\n          <ion-icon name=\"star\"></ion-icon>\n          <ion-label>CHAT</ion-label>\n        </ion-tab-button>\n        </ion-slide>\n        </ion-slides>\n  </ion-tab-bar>\n \n</ion-tabs> -->\n"

/***/ }),

/***/ "./src/app/pages/submenu/subMenuTabs/subMenuTabs.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/submenu/subMenuTabs/subMenuTabs.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".maintain_m {\n  width: 90px !important; }\n\n.slides_main {\n  margin: 0px !important;\n  width: 100%;\n  overflow-x: scroll; }\n\nion-tab-bar {\n  overflow-x: scroll;\n  justify-content: left; }\n\nion-tab-button {\n  min-width: 90px !important;\n  font-size: 9px;\n  padding: 0px; }\n\n@media all and (min-width: 375px) and (max-width: 400px) {\n  ion-tab-button {\n    min-width: 94px !important;\n    font-size: 9px;\n    padding: 0px; } }\n\n@media all and (min-width: 400px) and (max-width: 1024px) {\n  ion-tab-button {\n    min-width: 104px !important;\n    font-size: 9px;\n    padding: 0px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9JbnN0YXJlbnQvSW5zdGFyZW50IFJlcG9zL2FnZW50X3Rlc3RfcHJvamVjdC9pb25pYzQtdGVtcGxhdGUvc3JjL2FwcC9wYWdlcy9zdWJtZW51L3N1Yk1lbnVUYWJzL3N1Yk1lbnVUYWJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFzQixFQUFBOztBQUUxQjtFQUNJLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksa0JBQWlCO0VBQ2pCLHFCQUFxQixFQUFBOztBQUV6QjtFQUNJLDBCQUEwQjtFQUMxQixjQUFjO0VBQ2QsWUFBWSxFQUFBOztBQUdoQjtFQUNJO0lBQ0ksMEJBQTBCO0lBQzFCLGNBQWM7SUFDZCxZQUFZLEVBQUEsRUFDZjs7QUFFTDtFQUNJO0lBQ0ksMkJBQTJCO0lBQzNCLGNBQWM7SUFDZCxZQUFZLEVBQUEsRUFDZiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N1Ym1lbnUvc3ViTWVudVRhYnMvc3ViTWVudVRhYnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW50YWluX217XG4gICAgd2lkdGg6IDkwcHggIWltcG9ydGFudDtcbn1cbi5zbGlkZXNfbWFpbntcbiAgICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcbn1cbmlvbi10YWItYmFye1xuICAgIG92ZXJmbG93LXg6c2Nyb2xsO1xuICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcbn1cbmlvbi10YWItYnV0dG9ue1xuICAgIG1pbi13aWR0aDogOTBweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogOXB4O1xuICAgIHBhZGRpbmc6IDBweDtcbn0gXG5cbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDM3NXB4KSBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcbiAgICBpb24tdGFiLWJ1dHRvbiB7XG4gICAgICAgIG1pbi13aWR0aDogOTRweCAhaW1wb3J0YW50O1xuICAgICAgICBmb250LXNpemU6IDlweDtcbiAgICAgICAgcGFkZGluZzogMHB4O1xuICAgIH1cbiAgICB9XG5AbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiA0MDBweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAgIGlvbi10YWItYnV0dG9uIHtcbiAgICAgICAgbWluLXdpZHRoOiAxMDRweCAhaW1wb3J0YW50O1xuICAgICAgICBmb250LXNpemU6IDlweDtcbiAgICAgICAgcGFkZGluZzogMHB4O1xuICAgIH1cbn0iXX0= */"

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