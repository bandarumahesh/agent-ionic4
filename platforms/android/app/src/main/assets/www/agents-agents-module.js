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

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaulthref=\"\"></ion-back-button>\n          </ion-buttons>\n      <ion-title>AGENTS</ion-title>\n    \n    </ion-toolbar>\n  </ion-header>\n\n<ion-content >\n <div>\n    <ion-toolbar>\n        <ion-searchbar  animated debounce=\"500\" cancelButtonText=\"Custom Cancel\"></ion-searchbar>\n\n      </ion-toolbar>\n      <div class=\"invites_v\">\n          <ion-checkbox color=\"primary\" [(ngModel)]=\"termsandConditons\" name=\"termsandConditons\" class=\"terms_conditions\"></ion-checkbox> \n          <span class=\"invites_txt\"> Invites</span>\n      </div>\n </div>\n      <!-- List of Sliding Items -->\n<ion-list>\n    <ion-item-sliding class=\"list_item\" *ngFor=\"let item of items;  let i = index\">\n        <ion-item  (click)=\"agentFullView()\">\n            <ion-thumbnail slot=\"start\">\n              <!-- <img src=\"assets/imgs/profilepic.svg\" class=\"agent_image\"> -->\n              <img src=\"assets/icon/instarent_icon.png\" class=\"agent_image\">\n            </ion-thumbnail>\n            <ion-label>\n              <h4>Instarent Agent {{i}}</h4>\n              <p>properties 5</p>\n              <!-- <p><small>Requires text </small></p> -->\n            </ion-label>\n            <p class=\"status_list\"> New</p>\n          </ion-item>\n      <ion-item-options side=\"end\">\n        <ion-item-option (click)=\"unread(item)\"><ion-icon name=\"trash\"></ion-icon> Delete</ion-item-option>\n      </ion-item-options>\n    </ion-item-sliding>\n\n  </ion-list>\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n        <ion-fab-button [routerLink]=\"['/menu/Agents/addAgents']\" routerLinkActive=\"router-link-active\" >\n          <ion-icon name=\"person-add\"></ion-icon>\n        </ion-fab-button>\n      </ion-fab>\n</ion-content>\n\n\n"

/***/ }),

/***/ "./src/app/pages/agents/agents.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/agents/agents.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-title {\n  text-align: center; }\n\n.list_item {\n  margin-bottom: 12px; }\n\n.status_list {\n  position: absolute;\n  right: 20px;\n  top: 6px;\n  background: #ffffff;\n  padding: 7px 18px;\n  border-radius: 14px;\n  color: #272626;\n  font-size: 11px;\n  box-shadow: 1px 1px 1px 1px #efe9e9; }\n\n.agent_image {\n  border-radius: 50%;\n  width: 52px;\n  height: 52px; }\n\n.invites_v {\n  text-align: end;\n  margin-right: 32px;\n  margin-bottom: 12px; }\n\n.invites_txt {\n  position: relative;\n  top: -8px;\n  left: 4px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9JbnN0YXJlbnQvSW5zdGFyZW50IFJlcG9zL2FnZW50X3Rlc3RfcHJvamVjdC9pb25pYzQtdGVtcGxhdGUvc3JjL2FwcC9wYWdlcy9hZ2VudHMvYWdlbnRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFrQixFQUFBOztBQUl0QjtFQUNDLG1CQUFtQixFQUFBOztBQUVwQjtFQVVJLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsUUFBUTtFQUNSLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxlQUFlO0VBQ2YsbUNBQW1DLEVBQUE7O0FBRXZDO0VBQ0ksa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBTWhCO0VBQ0ksZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixtQkFBbUIsRUFBQTs7QUFFdkI7RUFDSSxrQkFBa0I7RUFDbEIsU0FBUTtFQUNSLFNBQVMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FnZW50cy9hZ2VudHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxle1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuXG4ubGlzdF9pdGVte1xuIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG4uc3RhdHVzX2xpc3R7XG4gICAgLy8gcG9zaXRpb246IGFic29sdXRlO1xuICAgIC8vIHJpZ2h0OiAyMHB4O1xuICAgIC8vIHRvcDogNnB4O1xuICAgIC8vIGJhY2tncm91bmQ6ICNhZWJkYzc7XG4gICAgLy8gcGFkZGluZzogN3B4IDE4cHg7XG4gICAgLy8gYm9yZGVyLXJhZGl1czogMTRweDtcbiAgICAvLyBjb2xvcjogI2ZmZjtcbiAgICAvLyBmb250LXNpemU6IDExcHg7XG5cbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDIwcHg7XG4gICAgdG9wOiA2cHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICBwYWRkaW5nOiA3cHggMThweDtcbiAgICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICAgIGNvbG9yOiAjMjcyNjI2O1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAxcHggI2VmZTllOTtcbn1cbi5hZ2VudF9pbWFnZXtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgd2lkdGg6IDUycHg7XG4gICAgaGVpZ2h0OiA1MnB4O1xufVxuXG4vLyAgICAgaW9uLWl0ZW0ge1xuLy8gICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcbi8vIH0gXG4uaW52aXRlc192e1xuICAgIHRleHQtYWxpZ246IGVuZDtcbiAgICBtYXJnaW4tcmlnaHQ6IDMycHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cbi5pbnZpdGVzX3R4dHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOi04cHg7XG4gICAgbGVmdDogNHB4O1xufSJdfQ== */"

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
        this.items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    }
    AgentsPage.prototype.ngOnInit = function () {
    };
    AgentsPage.prototype.addNewAgent = function () {
        this.router.navigate(['/menu/first/tabs/Agents/addAgents']);
    };
    AgentsPage.prototype.agentFullView = function () {
        this.router.navigateByUrl('menu/agent-full-view');
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