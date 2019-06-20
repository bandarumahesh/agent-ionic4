(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["agentModules-agent-jobs-agent-jobs-module"],{

/***/ "./src/app/pages/agentModules/agent-jobs/agent-jobs.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/agentModules/agent-jobs/agent-jobs.module.ts ***!
  \********************************************************************/
/*! exports provided: AgentJobsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentJobsPageModule", function() { return AgentJobsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _agent_jobs_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./agent-jobs.page */ "./src/app/pages/agentModules/agent-jobs/agent-jobs.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _agent_jobs_page__WEBPACK_IMPORTED_MODULE_5__["AgentJobsPage"]
    }
];
var AgentJobsPageModule = /** @class */ (function () {
    function AgentJobsPageModule() {
    }
    AgentJobsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_agent_jobs_page__WEBPACK_IMPORTED_MODULE_5__["AgentJobsPage"]]
        })
    ], AgentJobsPageModule);
    return AgentJobsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/agentModules/agent-jobs/agent-jobs.page.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/agentModules/agent-jobs/agent-jobs.page.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaulthref=\"\"></ion-back-button>\n          </ion-buttons>\n      <ion-title>JOBS</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content >\n    <ion-card class=\"padd_agent\">\n        <div class=\"list_item\" >\n            <ion-thumbnail slot=\"start\">\n              <!-- <img src=\"assets/imgs/profilepic.svg\" class=\"agent_image\"> -->\n              <img src=\"assets/icon/instarent_icon.png\" class=\"agent_image\">\n            </ion-thumbnail>\n            <ion-label>\n              <h4 class=\"h4_agent\">Instarent Agent </h4>\n              <p class=\"agent_type\">19 crlton street nsw</p>\n              <p text-end class=\"right_alignflot\">22</p>\n            </ion-label>\n          </div>\n    </ion-card>\n      <!-- <div class=\"aligin_dv\">\n          <p class=\"first_hed\">Properties</p>\n          <p  text-end class=\"jobs_v\">Jobs</p>\n        </div> -->\n  <ion-card class=\"propertyCards\"  *ngFor=\"let property of agentProperties; let i =index;\" > \n    <ion-card-header class=\"backgrey\"  >\n        <ion-ripple-effect></ion-ripple-effect>\n        <ion-card-subtitle >Complete General inspection scheduled on 26th May 2019 for proper\u000bty 19 carlton st Granville .\u000b   \n       \n        </ion-card-subtitle>\n           <p class=\"postion_action\">withdrawn by Jason</p>\n      </ion-card-header>\n  </ion-card> \n  </ion-content>"

/***/ }),

/***/ "./src/app/pages/agentModules/agent-jobs/agent-jobs.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/agentModules/agent-jobs/agent-jobs.page.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".backgrey {\n  background: #ffffff;\n  padding: 24px 24px 4px 24px; }\n\n.aligin_dv {\n  display: inline-flex;\n  width: 100%;\n  padding: 2px 33px 2px 32px; }\n\nion-card-subtitle {\n  font-size: 14px;\n  text-transform: capitalize;\n  color: #000 !important;\n  font-weight: 400;\n  line-height: 27px; }\n\n.agent_type {\n  /* position: absolute; */\n  font-weight: 600;\n  font-size: 12px;\n  /* top: 27px; */\n  margin-left: 12px;\n  margin-top: 6px; }\n\n.propertyCards {\n  margin: 11px 10px; }\n\n.list_item {\n  display: inline-flex; }\n\n.agent_image {\n  border-radius: 50%;\n  width: 52px;\n  height: 52px; }\n\n.padd_agent {\n  padding: 12px;\n  margin: 11px 10px;\n  position: relative; }\n\n.h4_agent {\n  position: relative;\n  top: 2px;\n  left: 14px;\n  font-size: 18px;\n  font-weight: 400; }\n\n.first_hed {\n  width: 100%;\n  font-weight: 500;\n  font-size: 19px;\n  margin-bottom: 0px; }\n\n.jobs_v {\n  font-weight: 500;\n  font-size: 19px;\n  margin-bottom: 0px; }\n\n.right_alignflot {\n  font-size: 18px;\n  background: #3cdc7f;\n  color: #fff;\n  border-radius: 39%;\n  border-bottom-left-radius: 0px;\n  padding: 4px;\n  min-width: 31px !important;\n  text-align: center !important;\n  position: absolute;\n  right: 22px;\n  top: 20px; }\n\n.postion_action {\n  text-align: end; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9JbnN0YXJlbnQvSW5zdGFyZW50IFJlcG9zL2FnZW50X3Rlc3RfcHJvamVjdC9pb25pYzQtdGVtcGxhdGUvc3JjL2FwcC9wYWdlcy9hZ2VudE1vZHVsZXMvYWdlbnQtam9icy9hZ2VudC1qb2JzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFtQjtFQUNuQiwyQkFBMkIsRUFBQTs7QUFFL0I7RUFDSSxvQkFBb0I7RUFDcEIsV0FBVztFQUNYLDBCQUEwQixFQUFBOztBQUU5QjtFQUNJLGVBQWU7RUFDZiwwQkFBMEI7RUFDMUIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixpQkFBaUIsRUFBQTs7QUFHckI7RUFDTSx3QkFBQTtFQUNBLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZUFBQTtFQUNBLGlCQUFpQjtFQUNqQixlQUFlLEVBQUE7O0FBRXJCO0VBQ0ksaUJBQWlCLEVBQUE7O0FBSXJCO0VBQ0ksb0JBQW9CLEVBQUE7O0FBRXhCO0VBQ0ksa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBRWhCO0VBQ0ksYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFVBQVU7RUFDVixlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0ksV0FBVztFQUNYLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsOEJBQThCO0VBQzlCLFlBQVk7RUFDWiwwQkFBMEI7RUFDMUIsNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsU0FBUyxFQUFBOztBQUViO0VBQ0ksZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWdlbnRNb2R1bGVzL2FnZW50LWpvYnMvYWdlbnQtam9icy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2dyZXl7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICBwYWRkaW5nOiAyNHB4IDI0cHggNHB4IDI0cHg7XG59XG4uYWxpZ2luX2R2e1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDJweCAzM3B4IDJweCAzMnB4O1xufVxuaW9uLWNhcmQtc3VidGl0bGV7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBsaW5lLWhlaWdodDogMjdweDtcbn1cblxuLmFnZW50X3R5cGV7XG4gICAgICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7ICovXG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgLyogdG9wOiAyN3B4OyAqL1xuICAgICAgbWFyZ2luLWxlZnQ6IDEycHg7XG4gICAgICBtYXJnaW4tdG9wOiA2cHg7XG59XG4ucHJvcGVydHlDYXJkc3tcbiAgICBtYXJnaW46IDExcHggMTBweDtcbiAgICAvLyBib3JkZXItbGVmdDogNHB4IHNvbGlkICMzYmRjN2U7XG4gICAgLy8gYm94LXNoYWRvdzogMXB4IDFweCAxcHggI2VjZWNlYztcbn1cbi5saXN0X2l0ZW17XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG59XG4uYWdlbnRfaW1hZ2V7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHdpZHRoOiA1MnB4O1xuICAgIGhlaWdodDogNTJweDtcbn1cbi5wYWRkX2FnZW50e1xuICAgIHBhZGRpbmc6IDEycHg7XG4gICAgbWFyZ2luOiAxMXB4IDEwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmg0X2FnZW50e1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDJweDtcbiAgICBsZWZ0OiAxNHB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xufVxuLmZpcnN0X2hlZHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG4uam9ic192e1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxOXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbn1cbi5yaWdodF9hbGlnbmZsb3R7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGJhY2tncm91bmQ6ICMzY2RjN2Y7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMzklO1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDBweDtcbiAgICBwYWRkaW5nOiA0cHg7XG4gICAgbWluLXdpZHRoOiAzMXB4ICFpbXBvcnRhbnQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAyMnB4O1xuICAgIHRvcDogMjBweDtcbn1cbi5wb3N0aW9uX2FjdGlvbntcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/agentModules/agent-jobs/agent-jobs.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/agentModules/agent-jobs/agent-jobs.page.ts ***!
  \******************************************************************/
/*! exports provided: AgentJobsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentJobsPage", function() { return AgentJobsPage; });
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

var AgentJobsPage = /** @class */ (function () {
    function AgentJobsPage() {
        this.agentProperties = [1, 2, 3, 4, 5];
    }
    AgentJobsPage.prototype.ngOnInit = function () {
    };
    AgentJobsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-agent-jobs',
            template: __webpack_require__(/*! ./agent-jobs.page.html */ "./src/app/pages/agentModules/agent-jobs/agent-jobs.page.html"),
            styles: [__webpack_require__(/*! ./agent-jobs.page.scss */ "./src/app/pages/agentModules/agent-jobs/agent-jobs.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AgentJobsPage);
    return AgentJobsPage;
}());



/***/ })

}]);
//# sourceMappingURL=agentModules-agent-jobs-agent-jobs-module.js.map