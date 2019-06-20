(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["agent-full-view-agent-full-view-module"],{

/***/ "./src/app/pages/agent-full-view/agent-full-view.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/agent-full-view/agent-full-view.module.ts ***!
  \*****************************************************************/
/*! exports provided: AgentFullViewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentFullViewPageModule", function() { return AgentFullViewPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _agent_full_view_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./agent-full-view.page */ "./src/app/pages/agent-full-view/agent-full-view.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _agent_full_view_page__WEBPACK_IMPORTED_MODULE_5__["AgentFullViewPage"]
    }
];
var AgentFullViewPageModule = /** @class */ (function () {
    function AgentFullViewPageModule() {
    }
    AgentFullViewPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_agent_full_view_page__WEBPACK_IMPORTED_MODULE_5__["AgentFullViewPage"]]
        })
    ], AgentFullViewPageModule);
    return AgentFullViewPageModule;
}());



/***/ }),

/***/ "./src/app/pages/agent-full-view/agent-full-view.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/pages/agent-full-view/agent-full-view.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n      <!-- <ion-buttons slot=\"end\">\n          <ion-back-button defaulthref=\"/menu/first/tabs/tab1/details\"></ion-back-button>\n        </ion-buttons> -->\n        <ion-icon name=\"arrow-back\" class=\"back_arrow_common\"  routerLink=\"/menu/first/tabs/Agents\"></ion-icon>\n    <ion-title>AGENT PROFILE</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"profile_Mainview\">\n      <div class=\"main-picsss\" id=\"back-ground\">\n            <img src=\"{{profilePicture}}\" onerror=\"this.onerror=null;this.src='assets/imgs/profilepic.svg'\" alt=\"Profile Pic\">\n            <!-- <div class=\"red-cam\" (click)=\"uploadPhoto()\">\n              <ion-icon name=\"camera\"></ion-icon>\n            </div> -->\n        </div>\n        <button class=\"editbtn\" ion-button [routerLink]=\"['/membership/12']\" routerDirection=\"forward\"  (click)=\"editUserProfile()\">\n            <img src=\"assets/icon/pencil.svg\" width=\"60\" />\n          </button>\n  </div>\n  <ion-row class=\"details\">\n      <ion-col>\n        <ion-list class=\"my-lst\" lines=\"none\">\n          <ion-item class=\"manage\">\n            <h4 class=\"heading-title\">Basic Details</h4>\n          </ion-item>\n          <ion-item>\n              <ion-label>\n            <h6 class=\"profile_h6\"> <ion-icon class=\"profile_icon\" name=\"person\" item-start></ion-icon>Name</h6>\n            <p class=\"profile_p\">John david</p>\n          </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label>\n          <h6 class=\"profile_h6\"> <ion-icon class=\"profile_icon\" name=\"mail\" item-start></ion-icon> Email</h6>\n          <p class=\"profile_p\"> instarentagency@gmail.com</p>\n        </ion-label>\n        </ion-item>\n        <ion-item>\n            <ion-label>\n          <h6 class=\"profile_h6\"> <ion-icon class=\"profile_icon\" name=\"call\" item-start></ion-icon> Mobile Number</h6>\n          <p class=\"profile_p\">0430340404</p>\n        </ion-label>\n        </ion-item>\n          <!-- <ion-item>\n              <ion-label>\n              <h6 class=\"profile_h6\">  <ion-icon class=\"profile_icon\" name=\"pin\" item-start></ion-icon> Business Address</h6>\n              <p class=\"profile_p\"> 19 carlton street granville nsw 2142\n              </p>\n            </ion-label>\n            </ion-item> -->\n            <ion-item class=\"manage\">\n              <h4 class=\"heading-title\">Business Email & Contact</h4>\n            </ion-item>\n          <ion-item>\n              <ion-label>\n            <h6 class=\"profile_h6\"> <ion-icon class=\"profile_icon\" name=\"mail\" item-start></ion-icon> Business Email</h6>\n            <p class=\"profile_p\"> instarentagency@gmail.com</p>\n          </ion-label>\n          </ion-item>\n          <ion-item>\n              <ion-label>\n            <h6 class=\"profile_h6\"> <ion-icon class=\"profile_icon\" name=\"call\" item-start></ion-icon> Business contact</h6>\n            <p class=\"profile_p\">0430340404</p>\n          </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label>\n          <h6 class=\"profile_h6\">  Property agent licence</h6>\n          <p class=\"profile_p\">Upload</p>\n        </ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>\n        <h6 class=\"profile_h6\">  Upload ID card /identity proof</h6>\n        <p class=\"profile_p\">Upload</p>\n      </ion-label>\n      </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  <!-- <ion-button color=\"tertiary\" expand=\"block\" routerLink=\"/menu/profile/details\" routerDirection=\"forward\">\n    Details forward\n  </ion-button> -->\n</ion-content>\n "

/***/ }),

/***/ "./src/app/pages/agent-full-view/agent-full-view.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/agent-full-view/agent-full-view.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile_Mainview {\n  height: 34%;\n  background: linear-gradient(to bottom, #3bdc7e, #b0e66d);\n  width: 100%; }\n\n.editbtn {\n  position: absolute;\n  right: 20px;\n  top: 29.4%;\n  z-index: 10;\n  width: 52px;\n  height: 52px;\n  font-size: 2rem;\n  box-shadow: transparent 1px 1px 1px 7px;\n  border-radius: 50%;\n  background: linear-gradient(#20c659, #a8e063);\n  padding: 9px 16px 14px 15px; }\n\n.profile_p {\n  font-size: 15px;\n  padding-left: 29px;\n  margin-top: 9px; }\n\n.profile_h6 {\n  font-size: 17px; }\n\n.profile_icon {\n  font-size: 21px;\n  position: relative;\n  top: 5px;\n  margin-right: 5px;\n  color: #80e275; }\n\n.heading-title {\n  color: #6dd45e; }\n\n#globalMenu {\n  display: none !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9JbnN0YXJlbnQvSW5zdGFyZW50IFJlcG9zL2FnZW50X3Rlc3RfcHJvamVjdC9pb25pYzQtdGVtcGxhdGUvc3JjL2FwcC9wYWdlcy9hZ2VudC1mdWxsLXZpZXcvYWdlbnQtZnVsbC12aWV3LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLFdBQVc7RUFDWCx3REFBd0Q7RUFDeEQsV0FBVyxFQUFBOztBQUVmO0VBQ0ksa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxVQUFVO0VBQ1YsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLHVDQUF1QztFQUN2QyxrQkFBa0I7RUFDbEIsNkNBQTZDO0VBQzdDLDJCQUEyQixFQUFBOztBQUUvQjtFQUNJLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZUFBZSxFQUFBOztBQUVuQjtFQUNJLGVBQWUsRUFBQTs7QUFFbkI7RUFDSSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixpQkFBaUI7RUFDakIsY0FBYyxFQUFBOztBQUVsQjtFQUNJLGNBQWMsRUFBQTs7QUFFbEI7RUFDSSx3QkFBd0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FnZW50LWZ1bGwtdmlldy9hZ2VudC1mdWxsLXZpZXcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbi5wcm9maWxlX01haW52aWV3e1xuICAgIGhlaWdodDogMzQlO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMzYmRjN2UsICNiMGU2NmQpO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLmVkaXRidG4ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMjBweDtcbiAgICB0b3A6IDI5LjQlO1xuICAgIHotaW5kZXg6IDEwO1xuICAgIHdpZHRoOiA1MnB4O1xuICAgIGhlaWdodDogNTJweDtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgYm94LXNoYWRvdzogdHJhbnNwYXJlbnQgMXB4IDFweCAxcHggN3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzIwYzY1OSwgI2E4ZTA2Myk7XG4gICAgcGFkZGluZzogOXB4IDE2cHggMTRweCAxNXB4O1xufVxuLnByb2ZpbGVfcHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAyOXB4O1xuICAgIG1hcmdpbi10b3A6IDlweDtcbn1cbi5wcm9maWxlX2g2e1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbn1cbi5wcm9maWxlX2ljb257XG4gICAgZm9udC1zaXplOiAyMXB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICBjb2xvcjogIzgwZTI3NTtcbn1cbi5oZWFkaW5nLXRpdGxle1xuICAgIGNvbG9yOiAjNmRkNDVlO1xufVxuI2dsb2JhbE1lbnV7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/agent-full-view/agent-full-view.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/agent-full-view/agent-full-view.page.ts ***!
  \***************************************************************/
/*! exports provided: AgentFullViewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentFullViewPage", function() { return AgentFullViewPage; });
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

var AgentFullViewPage = /** @class */ (function () {
    function AgentFullViewPage() {
    }
    AgentFullViewPage.prototype.ngOnInit = function () {
    };
    AgentFullViewPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-agent-full-view',
            template: __webpack_require__(/*! ./agent-full-view.page.html */ "./src/app/pages/agent-full-view/agent-full-view.page.html"),
            styles: [__webpack_require__(/*! ./agent-full-view.page.scss */ "./src/app/pages/agent-full-view/agent-full-view.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AgentFullViewPage);
    return AgentFullViewPage;
}());



/***/ })

}]);
//# sourceMappingURL=agent-full-view-agent-full-view-module.js.map