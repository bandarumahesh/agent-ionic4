(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["agentModules-agent-full-view-agent-full-view-module"],{

/***/ "./src/app/pages/agentModules/agent-full-view/agent-full-view.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/agentModules/agent-full-view/agent-full-view.module.ts ***!
  \******************************************************************************/
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
/* harmony import */ var _agent_full_view_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./agent-full-view.page */ "./src/app/pages/agentModules/agent-full-view/agent-full-view.page.ts");
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

/***/ "./src/app/pages/agentModules/agent-full-view/agent-full-view.page.html":
/*!******************************************************************************!*\
  !*** ./src/app/pages/agentModules/agent-full-view/agent-full-view.page.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n      <!-- <ion-buttons slot=\"end\">\n          <ion-back-button defaulthref=\"/menu/first/tabs/tab1/details\"></ion-back-button>\n        </ion-buttons> -->\n        <ion-icon name=\"arrow-back\" class=\"back_arrow_common\"  routerLink=\"/menu/first/tabs/Agents\"></ion-icon>\n    <ion-title>AGENT PROFILE</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"profile_Mainview\">\n      <div class=\"main-picsss\" id=\"back-ground\">\n            <img src=\"{{profilePicture}}\" onerror=\"this.onerror=null;this.src='assets/imgs/profilepic.svg'\" alt=\"Profile Pic\">\n            <!-- <div class=\"red-cam\" (click)=\"uploadPhoto()\">\n              <ion-icon name=\"camera\"></ion-icon>\n            </div> -->\n        </div>\n        <button class=\"editbtn\" ion-button [routerLink]=\"['/membership/12']\" routerDirection=\"forward\"  (click)=\"editUserProfile()\">\n            <img src=\"assets/icon/pencil.svg\" width=\"60\" />\n          </button>\n  </div>\n  <div>\n    <div class=\"invite_div\">\n        <ion-button type=\"button\" class=\"resend_invite\" color=\"primary\" >  <ion-ripple-effect></ion-ripple-effect>Re-send invite</ion-button>\n        <ion-button type=\"button\"  color=\"light\" >  <ion-ripple-effect></ion-ripple-effect>Cancel invite</ion-button>\n    </div>\n    <!-- <br> -->\n    <ion-card color=\"primary\">\n        <ion-card-header class=\"backgrey\" [routerLink]=\"['/menu/agent-full-view/agentProperties']\" routerLinkActive=\"router-link-active\" >\n            <ion-ripple-effect></ion-ripple-effect>\n            <ion-card-subtitle >Properties          \n              <p text-end class=\"right_alignflot\">22</p>\n            </ion-card-subtitle>\n            <!-- <ion-card-title>Card Title</ion-card-title> -->\n          </ion-card-header>\n    </ion-card> \n  </div>\n  <ion-row class=\"details\">\n      <ion-col>\n        <ion-list class=\"my-lst\" lines=\"none\">\n          <ion-item class=\"manage\">\n            <h4 class=\"heading-title\">Basic Details</h4>\n          </ion-item>\n          <ion-item class=\"postion_item\">\n              <ion-label>\n            <h6 class=\"profile_h6\"> <ion-icon class=\"profile_icon\" name=\"person\" item-start></ion-icon>Name</h6>\n            <p class=\"profile_p\">John david</p>\n          </ion-label>\n          <ion-button type=\"button\"  color=\"warning\" class=\"action_btins\" >  <ion-ripple-effect></ion-ripple-effect>Chat</ion-button>\n          </ion-item>\n          <ion-item class=\"postion_item\">\n            <ion-label>\n          <h6 class=\"profile_h6\"> <ion-icon class=\"profile_icon\" name=\"mail\" item-start></ion-icon> Email</h6>\n          <p class=\"profile_p\"> instarentagency@gmail.com</p>\n        </ion-label>\n        <ion-button type=\"button\"  color=\"warning\" class=\"action_btins\" >  <ion-ripple-effect></ion-ripple-effect>Email</ion-button>\n        </ion-item>\n        <ion-item class=\"postion_item\">\n            <ion-label>\n          <h6 class=\"profile_h6\"> <ion-icon class=\"profile_icon\" name=\"call\" item-start></ion-icon> Mobile Number</h6>\n          <p class=\"profile_p\">0430340404</p>\n        </ion-label>\n        <ion-button type=\"button\"  color=\"warning\" class=\"action_btins\" >  <ion-ripple-effect></ion-ripple-effect>Call</ion-button>\n        </ion-item>\n          <!-- <ion-item>\n              <ion-label>\n              <h6 class=\"profile_h6\">  <ion-icon class=\"profile_icon\" name=\"pin\" item-start></ion-icon> Business Address</h6>\n              <p class=\"profile_p\"> 19 carlton street granville nsw 2142\n              </p>\n            </ion-label>\n            </ion-item> -->\n            <ion-item class=\"manage \">\n              <h4 class=\"heading-title\">Business Email & Contact</h4>\n            </ion-item>\n          <ion-item class=\" postion_item\">\n              <ion-label>\n            <h6 class=\"profile_h6\"> <ion-icon class=\"profile_icon\" name=\"mail\" item-start></ion-icon> Business Email</h6>\n            <p class=\"profile_p\"> instarentagency@gmail.com</p>\n          </ion-label>\n          <ion-button type=\"button\"  color=\"warning\" class=\"action_btins\" >  <ion-ripple-effect></ion-ripple-effect>Email</ion-button>\n          </ion-item>\n          <ion-item class=\" postion_item\">\n              <ion-label>\n            <h6 class=\"profile_h6\"> <ion-icon class=\"profile_icon\" name=\"call\" item-start></ion-icon> Business contact</h6>\n            <p class=\"profile_p\">0430340404</p>\n          </ion-label>\n          <ion-button type=\"button\"  color=\"warning\" class=\"action_btins\" >  <ion-ripple-effect></ion-ripple-effect>Call</ion-button>\n          </ion-item>\n          <ion-item>\n            <ion-label>\n          <h6 class=\"profile_h6\">  Property agent licence</h6>\n          <p class=\"profile_p\">Upload</p>\n        </ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>\n        <h6 class=\"profile_h6\">  Upload ID card /identity proof</h6>\n        <p class=\"profile_p\">Upload</p>\n      </ion-label>\n      </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  <!-- <ion-button color=\"tertiary\" expand=\"block\" routerLink=\"/menu/profile/details\" routerDirection=\"forward\">\n    Details forward\n  </ion-button> -->\n</ion-content>\n "

/***/ }),

/***/ "./src/app/pages/agentModules/agent-full-view/agent-full-view.page.scss":
/*!******************************************************************************!*\
  !*** ./src/app/pages/agentModules/agent-full-view/agent-full-view.page.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile_Mainview {\n  height: 34%;\n  background: linear-gradient(to bottom, #3bdc7e, #b0e66d);\n  width: 100%; }\n\n.backgrey {\n  background: #f9f9f9; }\n\nion-card-subtitle {\n  font-size: 14px;\n  text-transform: capitalize;\n  color: #000 !important; }\n\n.right_alignflot {\n  /* float: right; */\n  font-size: 18px;\n  /* margin-right: 20px; */\n  background: #3cdc7f;\n  color: #fff;\n  border-radius: 39%;\n  border-bottom-left-radius: 0px;\n  padding: 4px;\n  min-width: 31px !important;\n  text-align: center !important;\n  position: absolute;\n  right: 6px;\n  top: -26px; }\n\n.action_btins {\n  position: absolute;\n  right: 8px;\n  top: 16px;\n  padding: 0px;\n  width: 17%;\n  height: 34px; }\n\n.editbtn {\n  position: absolute;\n  right: 20px;\n  top: 28.6%;\n  z-index: 10;\n  width: 52px;\n  height: 52px;\n  font-size: 2rem;\n  box-shadow: transparent 1px 1px 1px 7px;\n  border-radius: 50%;\n  background: linear-gradient(#20c659, #a8e063);\n  padding: 9px 16px 14px 15px; }\n\n.profile_p {\n  font-size: 15px;\n  padding-left: 29px;\n  margin-top: 9px; }\n\n.profile_h6 {\n  font-size: 17px; }\n\n.profile_icon {\n  font-size: 21px;\n  position: relative;\n  top: 5px;\n  margin-right: 5px;\n  color: #80e275; }\n\n.heading-title {\n  color: #6dd45e; }\n\n#globalMenu {\n  display: none !important; }\n\n.invite_div {\n  margin-top: 28px;\n  padding: 10px;\n  text-align: center; }\n\n.resend_invite {\n  margin-right: 15px; }\n\n@media (min-width: 760px) and (max-width: 2900px) {\n  .action_btins {\n    position: absolute;\n    right: 30px;\n    top: 12px;\n    padding: 0px;\n    width: 13%;\n    height: 38px; }\n  .editbtn[_ngcontent-c6] {\n    top: 30.6%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9JbnN0YXJlbnQvSW5zdGFyZW50IFJlcG9zL2FnZW50X3Rlc3RfcHJvamVjdC9pb25pYzQtdGVtcGxhdGUvc3JjL2FwcC9wYWdlcy9hZ2VudE1vZHVsZXMvYWdlbnQtZnVsbC12aWV3L2FnZW50LWZ1bGwtdmlldy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxXQUFXO0VBQ1gsd0RBQXdEO0VBQ3hELFdBQVcsRUFBQTs7QUFFZjtFQUNJLG1CQUFtQixFQUFBOztBQUV2QjtFQUNJLGVBQWU7RUFDZiwwQkFBMEI7RUFDMUIsc0JBQXNCLEVBQUE7O0FBRTFCO0VBS1Esa0JBQUE7RUFDQSxlQUFlO0VBQ2Ysd0JBQUE7RUFFQSxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQiw4QkFBOEI7RUFDOUIsWUFBWTtFQUNaLDBCQUEwQjtFQUMxQiw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixVQUFVLEVBQUE7O0FBRWxCO0VBQ0ksa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixTQUFTO0VBQ1QsWUFBWTtFQUNaLFVBQVU7RUFDVixZQUFZLEVBQUE7O0FBRWhCO0VBQ0ksa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxVQUFVO0VBQ1YsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLHVDQUF1QztFQUN2QyxrQkFBa0I7RUFDbEIsNkNBQTZDO0VBQzdDLDJCQUEyQixFQUFBOztBQUUvQjtFQUNJLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZUFBZSxFQUFBOztBQUVuQjtFQUNJLGVBQWUsRUFBQTs7QUFFbkI7RUFDSSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixpQkFBaUI7RUFDakIsY0FBYyxFQUFBOztBQUVsQjtFQUNJLGNBQWMsRUFBQTs7QUFFbEI7RUFDSSx3QkFBd0IsRUFBQTs7QUFFNUI7RUFDSSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLGtCQUFrQixFQUFBOztBQUV0QjtFQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxTQUFTO0lBQ1QsWUFBWTtJQUNaLFVBQVU7SUFDVixZQUFZLEVBQUE7RUFFaEI7SUFDSSxVQUFVLEVBQUEsRUFFYiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FnZW50TW9kdWxlcy9hZ2VudC1mdWxsLXZpZXcvYWdlbnQtZnVsbC12aWV3LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4ucHJvZmlsZV9NYWludmlld3tcbiAgICBoZWlnaHQ6IDM0JTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjM2JkYzdlLCAjYjBlNjZkKTtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5iYWNrZ3JleXtcbiAgICBiYWNrZ3JvdW5kOiAjZjlmOWY5O1xufVxuaW9uLWNhcmQtc3VidGl0bGV7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG59XG4ucmlnaHRfYWxpZ25mbG90e1xuICAgIC8vIGZsb2F0OiByaWdodDtcbiAgICAvLyBmb250LXNpemU6IDE4cHg7XG4gICAgLy8gbWFyZ2luLXJpZ2h0OiAyMHB4O1xuXG4gICAgICAgIC8qIGZsb2F0OiByaWdodDsgKi9cbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAvKiBtYXJnaW4tcmlnaHQ6IDIwcHg7ICovXG4gICAgICAgIC8vIGJhY2tncm91bmQ6ICNkMmQwZDA7XG4gICAgICAgIGJhY2tncm91bmQ6ICMzY2RjN2Y7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzOSU7XG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDBweDtcbiAgICAgICAgcGFkZGluZzogNHB4O1xuICAgICAgICBtaW4td2lkdGg6IDMxcHggIWltcG9ydGFudDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDZweDtcbiAgICAgICAgdG9wOiAtMjZweDtcbn1cbi5hY3Rpb25fYnRpbnN7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiA4cHg7XG4gICAgdG9wOiAxNnB4O1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICB3aWR0aDogMTclO1xuICAgIGhlaWdodDogMzRweDtcbn1cbi5lZGl0YnRuIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDIwcHg7XG4gICAgdG9wOiAyOC42JTtcbiAgICB6LWluZGV4OiAxMDtcbiAgICB3aWR0aDogNTJweDtcbiAgICBoZWlnaHQ6IDUycHg7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGJveC1zaGFkb3c6IHRyYW5zcGFyZW50IDFweCAxcHggMXB4IDdweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMyMGM2NTksICNhOGUwNjMpO1xuICAgIHBhZGRpbmc6IDlweCAxNnB4IDE0cHggMTVweDtcbn1cbi5wcm9maWxlX3B7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIHBhZGRpbmctbGVmdDogMjlweDtcbiAgICBtYXJnaW4tdG9wOiA5cHg7XG59XG4ucHJvZmlsZV9oNntcbiAgICBmb250LXNpemU6IDE3cHg7XG59XG4ucHJvZmlsZV9pY29ue1xuICAgIGZvbnQtc2l6ZTogMjFweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiA1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgY29sb3I6ICM4MGUyNzU7XG59XG4uaGVhZGluZy10aXRsZXtcbiAgICBjb2xvcjogIzZkZDQ1ZTtcbn1cbiNnbG9iYWxNZW51e1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cbi5pbnZpdGVfZGl2e1xuICAgIG1hcmdpbi10b3A6IDI4cHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucmVzZW5kX2ludml0ZXtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5AbWVkaWEobWluLXdpZHRoOjc2MHB4KSBhbmQgKG1heC13aWR0aDoyOTAwcHgpIHtcbi5hY3Rpb25fYnRpbnN7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAzMHB4O1xuICAgIHRvcDogMTJweDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgd2lkdGg6IDEzJTtcbiAgICBoZWlnaHQ6IDM4cHg7XG59XG4uZWRpdGJ0bltfbmdjb250ZW50LWM2XSB7XG4gICAgdG9wOiAzMC42JTtcbiBcbn1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/agentModules/agent-full-view/agent-full-view.page.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/agentModules/agent-full-view/agent-full-view.page.ts ***!
  \****************************************************************************/
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
            template: __webpack_require__(/*! ./agent-full-view.page.html */ "./src/app/pages/agentModules/agent-full-view/agent-full-view.page.html"),
            styles: [__webpack_require__(/*! ./agent-full-view.page.scss */ "./src/app/pages/agentModules/agent-full-view/agent-full-view.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AgentFullViewPage);
    return AgentFullViewPage;
}());



/***/ })

}]);
//# sourceMappingURL=agentModules-agent-full-view-agent-full-view-module.js.map