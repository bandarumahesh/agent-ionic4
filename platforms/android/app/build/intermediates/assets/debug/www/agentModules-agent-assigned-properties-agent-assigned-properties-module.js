(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["agentModules-agent-assigned-properties-agent-assigned-properties-module"],{

/***/ "./src/app/pages/agentModules/agent-assigned-properties/agent-assigned-properties.module.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/agentModules/agent-assigned-properties/agent-assigned-properties.module.ts ***!
  \**************************************************************************************************/
/*! exports provided: AgentAssignedPropertiesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentAssignedPropertiesPageModule", function() { return AgentAssignedPropertiesPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _agent_assigned_properties_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./agent-assigned-properties.page */ "./src/app/pages/agentModules/agent-assigned-properties/agent-assigned-properties.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _agent_assigned_properties_page__WEBPACK_IMPORTED_MODULE_5__["AgentAssignedPropertiesPage"]
    }
];
var AgentAssignedPropertiesPageModule = /** @class */ (function () {
    function AgentAssignedPropertiesPageModule() {
    }
    AgentAssignedPropertiesPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_agent_assigned_properties_page__WEBPACK_IMPORTED_MODULE_5__["AgentAssignedPropertiesPage"]]
        })
    ], AgentAssignedPropertiesPageModule);
    return AgentAssignedPropertiesPageModule;
}());



/***/ }),

/***/ "./src/app/pages/agentModules/agent-assigned-properties/agent-assigned-properties.page.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/agentModules/agent-assigned-properties/agent-assigned-properties.page.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n          <ion-back-button defaulthref=\"\"></ion-back-button>\n        </ion-buttons>\n    <ion-title>PROPERTIES</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content >\n  <ion-card class=\"padd_agent\">\n      <div class=\"list_item\" >\n          <ion-thumbnail slot=\"start\">\n            <!-- <img src=\"assets/imgs/profilepic.svg\" class=\"agent_image\"> -->\n            <img src=\"assets/icon/instarent_icon.png\" class=\"agent_image\">\n          </ion-thumbnail>\n          <ion-label>\n            <h4 class=\"h4_agent\">Instarent Agent </h4>\n            <p class=\"agent_typee\">Agent</p>\n          </ion-label>\n        </div>\n  </ion-card>\n    <div class=\"aligin_dv\">\n        <p class=\"first_hed\">Properties</p>\n        <p  text-end class=\"jobs_v\">Jobs</p>\n      </div>\n<ion-card class=\"propertyCards\"  *ngFor=\"let property of agentProperties; let i =index;\" > \n  <ion-card-header class=\"backgrey\"  routerLinkActive=\"router-link-active\" >\n      <ion-ripple-effect></ion-ripple-effect>\n      <ion-card-subtitle >\n        <h4 [routerLink]=\"['/submenu/first/subtabs/tab1']\" routerLinkActive=\"router-link-active\">19 carlton street ,granville, NSW  </h4>        \n        <p text-end class=\"right_alignflot\" [routerLink]=\"['/menu/agent-full-view/agentProperties/agentJobs']\"> {{2 + i}}</p>\n      </ion-card-subtitle>\n      <!-- <ion-card-title>Card Title</ion-card-title> -->\n    </ion-card-header>\n</ion-card> \n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/agentModules/agent-assigned-properties/agent-assigned-properties.page.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/agentModules/agent-assigned-properties/agent-assigned-properties.page.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".backgrey {\n  background: #f9f9f9;\n  padding: 24px; }\n\nh4 {\n  font-size: 13px;\n  margin: 12px 0px; }\n\n.aligin_dv {\n  display: inline-flex;\n  width: 100%;\n  padding: 2px 33px 2px 32px; }\n\nion-card-subtitle {\n  font-size: 14px;\n  text-transform: capitalize;\n  color: #000 !important; }\n\n.right_alignflot {\n  font-size: 18px;\n  background: #3cdc7f;\n  color: #fff;\n  border-radius: 39%;\n  border-bottom-left-radius: 0px;\n  padding: 4px;\n  min-width: 31px !important;\n  text-align: center !important;\n  position: absolute;\n  right: 2px;\n  top: -26px; }\n\n.agent_typee {\n  position: absolute;\n  right: 6%;\n  font-weight: 600;\n  font-size: 16px;\n  top: 27px; }\n\n.propertyCards {\n  margin: 11px 10px;\n  border-left: 4px solid #3bdc7e; }\n\n.list_item {\n  display: inline-flex; }\n\n.agent_image {\n  border-radius: 50%;\n  width: 52px;\n  height: 52px; }\n\n.padd_agent {\n  padding: 12px;\n  margin: 11px 10px; }\n\n.h4_agent {\n  position: relative;\n  top: 0px;\n  left: 14px;\n  font-size: 18px !important;\n  font-weight: 400; }\n\n.first_hed {\n  width: 100%;\n  font-weight: 500;\n  font-size: 19px;\n  margin-bottom: 0px; }\n\n.jobs_v {\n  font-weight: 500;\n  font-size: 19px;\n  margin-bottom: 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9JbnN0YXJlbnQvSW5zdGFyZW50IFJlcG9zL2FnZW50X3Rlc3RfcHJvamVjdC9pb25pYzQtdGVtcGxhdGUvc3JjL2FwcC9wYWdlcy9hZ2VudE1vZHVsZXMvYWdlbnQtYXNzaWduZWQtcHJvcGVydGllcy9hZ2VudC1hc3NpZ25lZC1wcm9wZXJ0aWVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFtQjtFQUNuQixhQUFhLEVBQUE7O0FBRWpCO0VBQ0ksZUFBZTtFQUNmLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLG9CQUFvQjtFQUNwQixXQUFXO0VBQ1gsMEJBQTBCLEVBQUE7O0FBRTlCO0VBQ0ksZUFBZTtFQUNmLDBCQUEwQjtFQUMxQixzQkFBc0IsRUFBQTs7QUFFMUI7RUFDSSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsOEJBQThCO0VBQzlCLFlBQVk7RUFDWiwwQkFBMEI7RUFDMUIsNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsVUFBVSxFQUFBOztBQUVkO0VBQ0ksa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFNBQVMsRUFBQTs7QUFFYjtFQUNJLGlCQUFpQjtFQUNqQiw4QkFBOEIsRUFBQTs7QUFHbEM7RUFDSSxvQkFBb0IsRUFBQTs7QUFFeEI7RUFDSSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFFaEI7RUFDSSxhQUFhO0VBQ2IsaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixVQUFVO0VBQ1YsMEJBQTBCO0VBQzFCLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hZ2VudE1vZHVsZXMvYWdlbnQtYXNzaWduZWQtcHJvcGVydGllcy9hZ2VudC1hc3NpZ25lZC1wcm9wZXJ0aWVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrZ3JleXtcbiAgICBiYWNrZ3JvdW5kOiAjZjlmOWY5O1xuICAgIHBhZGRpbmc6IDI0cHg7XG59XG5oNCB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIG1hcmdpbjogMTJweCAwcHg7XG59XG4uYWxpZ2luX2R2e1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDJweCAzM3B4IDJweCAzMnB4O1xufVxuaW9uLWNhcmQtc3VidGl0bGV7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG59XG4ucmlnaHRfYWxpZ25mbG90e1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBiYWNrZ3JvdW5kOiAjM2NkYzdmO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDM5JTtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwcHg7XG4gICAgcGFkZGluZzogNHB4O1xuICAgIG1pbi13aWR0aDogMzFweCAhaW1wb3J0YW50O1xuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMnB4O1xuICAgIHRvcDogLTI2cHg7XG59XG4uYWdlbnRfdHlwZWV7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiA2JTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB0b3A6IDI3cHg7XG59XG4ucHJvcGVydHlDYXJkc3tcbiAgICBtYXJnaW46IDExcHggMTBweDtcbiAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkICMzYmRjN2U7XG4gICAgLy8gYm94LXNoYWRvdzogMXB4IDFweCAxcHggI2VjZWNlYztcbn1cbi5saXN0X2l0ZW17XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG59XG4uYWdlbnRfaW1hZ2V7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHdpZHRoOiA1MnB4O1xuICAgIGhlaWdodDogNTJweDtcbn1cbi5wYWRkX2FnZW50e1xuICAgIHBhZGRpbmc6IDEycHg7XG4gICAgbWFyZ2luOiAxMXB4IDEwcHg7XG59XG4uaDRfYWdlbnR7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMHB4O1xuICAgIGxlZnQ6IDE0cHg7XG4gICAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5maXJzdF9oZWR7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDE5cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuLmpvYnNfdntcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/agentModules/agent-assigned-properties/agent-assigned-properties.page.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/pages/agentModules/agent-assigned-properties/agent-assigned-properties.page.ts ***!
  \************************************************************************************************/
/*! exports provided: AgentAssignedPropertiesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentAssignedPropertiesPage", function() { return AgentAssignedPropertiesPage; });
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

var AgentAssignedPropertiesPage = /** @class */ (function () {
    function AgentAssignedPropertiesPage() {
        this.agentProperties = [1, 2, 3, 4, 5];
    }
    AgentAssignedPropertiesPage.prototype.ngOnInit = function () {
    };
    AgentAssignedPropertiesPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-agent-assigned-properties',
            template: __webpack_require__(/*! ./agent-assigned-properties.page.html */ "./src/app/pages/agentModules/agent-assigned-properties/agent-assigned-properties.page.html"),
            styles: [__webpack_require__(/*! ./agent-assigned-properties.page.scss */ "./src/app/pages/agentModules/agent-assigned-properties/agent-assigned-properties.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AgentAssignedPropertiesPage);
    return AgentAssignedPropertiesPage;
}());



/***/ })

}]);
//# sourceMappingURL=agentModules-agent-assigned-properties-agent-assigned-properties-module.js.map