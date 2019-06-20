(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["agentModules-add-agents-add-agents-module"],{

/***/ "./src/app/pages/agentModules/add-agents/add-agents.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/agentModules/add-agents/add-agents.module.ts ***!
  \********************************************************************/
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
/* harmony import */ var _add_agents_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-agents.page */ "./src/app/pages/agentModules/add-agents/add-agents.page.ts");
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

/***/ "./src/app/pages/agentModules/add-agents/add-agents.page.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/agentModules/add-agents/add-agents.page.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <!-- <ion-buttons slot=\"end\">\n            <ion-back-button defaulthref=\"/menu/first/tabs/tab1/details\"></ion-back-button>\n          </ion-buttons> -->\n          <ion-icon name=\"arrow-back\" class=\"back_arrow_common\"  routerLink=\"/menu/first/tabs/Properties\"></ion-icon>\n      <ion-title>ADD AGENT</ion-title>\n    </ion-toolbar>\n  </ion-header>\n<ion-content >\n  <div class=\"profile_Mainview\" *ngIf=\"!sendInviteView && newAgentView\">\n      <!--  -->\n    <div class=\"main-picsss\" id=\"back-ground\">\n      <img src=\"{{profilePicture}}\" onerror=\"this.onerror=null;this.src='assets/imgs/profilepic.svg'\" alt=\"Profile Pic\">\n      <div class=\"red-cam\" (click)=\"uploadPhoto()\">\n        <ion-icon name=\"camera\"></ion-icon>\n      </div>\n    </div>\n <div class=\"padding_info\">\n    <ion-item>\n        <ion-label position=\"floating\" > Name</ion-label>\n        <ion-input name=\"businessName\" type=\"text\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\" minlength=\"2\" maxlength=\"30\" ngModel required></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\" >  Email </ion-label>\n      <ion-input type=\"email\" name=\"email\" ngModel required></ion-input>\n    </ion-item>\n    <ion-item class=\"f-item pad-pt\">\n      <ion-label position=\"floating\" > Mobile Number</ion-label>\n      <ion-input type=\"tel\" minlength=\"10\" ngModel  maxlength=\"10\" name=\"phoneNumber\" required></ion-input>\n    </ion-item>\n            <ion-item>\n              <ion-label position=\"floating\" > Address</ion-label>\n              <ion-input name=\"businessName\" type=\"text\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\" minlength=\"2\" maxlength=\"30\" ngModel required></ion-input>\n          </ion-item>\n       <div>\n          <p>Property agent licence</p>\n          <p><small>Upload jpeg,png,pdf formats.</small></p>\n          <ion-button color=\"light\" >  Upload</ion-button>\n       </div>\n       <div>\n          <p>Id card / Identity proof</p>\n          <p><small>Upload jpeg,png formats.</small></p>\n          <ion-button color=\"light\" >  Upload</ion-button>\n       </div>\n     \n </div>\n <div class=\"agent_btn_div\">\n   <ion-toolbar color=\"primary\">\n    <ion-button class=\"agent-Btn\" color=\"primary\" expand=\"block\"   (click)=AddNewAgentUpload()> Add Agent  </ion-button>\n  </ion-toolbar>\n  </div >\n  </div>\n  <ion-toolbar *ngIf=\"!sendInviteView && !newAgentView && !showAdgentSuccessfullAdd\">\n      <ion-searchbar #myInput  animated debounce=\"500\" [(ngModel)]=\"searchlist\" (input)=\"filterItem(myInput.value)\" cancelButtonText=\"Custom Cancel\"></ion-searchbar>\n    </ion-toolbar>\n  <!-- // for invite send success ful page start here -->\n    <div *ngIf=\"sendInviteView && !newAgentView\" class=\"main_check_Div\">\n      <svg class=\"checkmark_success\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 52 52\"><circle class=\"checkmark_success__circle\" cx=\"26\" cy=\"26\" r=\"25\" fill=\"none\"/><path class=\"checkmark_success__check\" fill=\"none\" d=\"M14.1 27.2l7.1 7.2 16.7-16.8\"/></svg>\n      <p class=\"Congrats\">Invited Successfull </p>\n      <!-- <p class=\"small_congrats\">your property is now live.</p> -->\n    </div>\n    <div *ngIf=\"!sendInviteView && !newAgentView && showAdgentSuccessfullAdd\" class=\"main_check_Div\">\n        <svg class=\"checkmark_success\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 52 52\"><circle class=\"checkmark_success__circle\" cx=\"26\" cy=\"26\" r=\"25\" fill=\"none\"/><path class=\"checkmark_success__check\" fill=\"none\" d=\"M14.1 27.2l7.1 7.2 16.7-16.8\"/></svg>\n        <p class=\"Congrats\">Agent added Successfull </p>\n      </div>\n<ion-list *ngIf=\"showAgentSearchlist && !newAgentView && searchlist && !showAdgentSuccessfullAdd\">\n          <ion-item class=\"list_item\" (click)=\"agentFullView()\" *ngFor=\"let item of agentSearchListItems;  let i = index\">\n              <ion-thumbnail slot=\"start\">\n                <img src=\"assets/icon/instarent_icon.png\" class=\"agent_image\">\n              </ion-thumbnail>\n              <ion-label>\n                <h4>{{item.name}}</h4>\n                <p><strong>Email</strong> : {{item.email}}</p>  \n                   <p><strong>Mobile number</strong> : {{item.number}}</p>\n                <ion-button type=\"button\"  color=\"primary\" class=\"agent_add\" (click)=\"sendInvite()\" >  <ion-ripple-effect></ion-ripple-effect>Invite</ion-button>\n              </ion-label>\n            </ion-item>\n    </ion-list>\n    <ion-card class=\"suggestion_div\" padding *ngIf=\"!searchlist && !newAgentView && (agentSearchListItems && agentSearchListItems.length ==0) && !showAdgentSuccessfullAdd\">\n        <p class=\"suggestions\"> Use above search\n          to find agent in\n          Instarent database\n          with agent personnel\n          mobile or email.\n        </p>\n        <p class=\"suggestions\">    Once found send\n            invite to join\n            Instarent .</p>\n      \n            <p class=\"suggestions\"> \n          If agent not found</p>\n       <div class=\"new_one\">\n          <ion-button type=\"button\"  color=\"primary\" class=\"\" (click)=\"addNewAgent()\">  <ion-ripple-effect></ion-ripple-effect>Add new agent</ion-button>\n       </div>    \n      </ion-card> \n    <!-- // for invite send success ful page end here -->\n    </ion-content>\n"

/***/ }),

/***/ "./src/app/pages/agentModules/add-agents/add-agents.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/agentModules/add-agents/add-agents.page.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile_Mainview {\n  height: 34%;\n  background: linear-gradient(to bottom, #3bdc7e, #b0e66d);\n  width: 100%; }\n\n.list_item {\n  position: relative; }\n\n.status_list {\n  position: absolute;\n  right: 20px;\n  top: 6px;\n  background: #ffffff;\n  padding: 7px 18px;\n  border-radius: 14px;\n  color: #272626;\n  font-size: 11px;\n  box-shadow: 1px 1px 1px 1px #efe9e9; }\n\n.agent_add {\n  position: absolute;\n  right: 4%;\n  top: 10px;\n  min-width: 70px; }\n\n.agent_image {\n  border-radius: 50%;\n  width: 52px;\n  height: 52px; }\n\n.padding_info {\n  padding: 8% 6%; }\n\nion-item {\n  padding-bottom: 12px; }\n\n.suggestions {\n  padding: 0% 16% 0 16%;\n  line-height: 33px;\n  font-size: 17px;\n  margin: 4px 0px; }\n\n.suggestion_div {\n  box-shadow: 0px 1px 3px 1px #f5f0f0; }\n\n.new_one {\n  text-align: center;\n  margin-bottom: 15px; }\n\n.agent_btn_div {\n  background: #3bdc7e !important;\n  text-align: center; }\n\n.agent-Btn {\n  margin: 0px;\n  height: 54px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9JbnN0YXJlbnQvSW5zdGFyZW50IFJlcG9zL2FnZW50X3Rlc3RfcHJvamVjdC9pb25pYzQtdGVtcGxhdGUvc3JjL2FwcC9wYWdlcy9hZ2VudE1vZHVsZXMvYWRkLWFnZW50cy9hZGQtYWdlbnRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVc7RUFDWCx3REFBd0Q7RUFDeEQsV0FBVyxFQUFBOztBQUVmO0VBQ0ksa0JBQWtCLEVBQUE7O0FBRXRCO0VBVUksa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxRQUFRO0VBQ1IsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGVBQWU7RUFDZixtQ0FBbUMsRUFBQTs7QUFFdkM7RUFDSSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFNBQVM7RUFDVCxlQUFlLEVBQUE7O0FBRW5CO0VBQ0ksa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBRWhCO0VBQ0ksY0FBYyxFQUFBOztBQUVkO0VBQ0ksb0JBQW9CLEVBQUE7O0FBRTVCO0VBQ0kscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsZUFBZSxFQUFBOztBQUVuQjtFQUNJLG1DQUFtQyxFQUFBOztBQUV2QztFQUNJLGtCQUFrQjtFQUNsQixtQkFBbUIsRUFBQTs7QUFFdkI7RUFDSSw4QkFBOEI7RUFDOUIsa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksV0FBVztFQUNYLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FnZW50TW9kdWxlcy9hZGQtYWdlbnRzL2FkZC1hZ2VudHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGVfTWFpbnZpZXd7XG4gICAgaGVpZ2h0OiAzNCU7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzNiZGM3ZSwgI2IwZTY2ZCk7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4ubGlzdF9pdGVte1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5zdGF0dXNfbGlzdHtcbiAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLy8gcmlnaHQ6IDIwcHg7XG4gICAgLy8gdG9wOiA2cHg7XG4gICAgLy8gYmFja2dyb3VuZDogI2FlYmRjNztcbiAgICAvLyBwYWRkaW5nOiA3cHggMThweDtcbiAgICAvLyBib3JkZXItcmFkaXVzOiAxNHB4O1xuICAgIC8vIGNvbG9yOiAjZmZmO1xuICAgIC8vIGZvbnQtc2l6ZTogMTFweDtcblxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMjBweDtcbiAgICB0b3A6IDZweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIHBhZGRpbmc6IDdweCAxOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gICAgY29sb3I6ICMyNzI2MjY7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IDFweCAjZWZlOWU5O1xufVxuLmFnZW50X2FkZHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDQlO1xuICAgIHRvcDogMTBweDtcbiAgICBtaW4td2lkdGg6IDcwcHg7XG59XG4uYWdlbnRfaW1hZ2V7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHdpZHRoOiA1MnB4O1xuICAgIGhlaWdodDogNTJweDtcbn1cbi5wYWRkaW5nX2luZm97XG4gICAgcGFkZGluZzogOCUgNiU7XG59XG4gICAgaW9uLWl0ZW0ge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcbn1cbi5zdWdnZXN0aW9uc3tcbiAgICBwYWRkaW5nOiAwJSAxNiUgMCAxNiU7XG4gICAgbGluZS1oZWlnaHQ6IDMzcHg7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIG1hcmdpbjogNHB4IDBweDtcbn1cbi5zdWdnZXN0aW9uX2RpdntcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDNweCAxcHggI2Y1ZjBmMDtcbn1cbi5uZXdfb25le1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLmFnZW50X2J0bl9kaXZ7XG4gICAgYmFja2dyb3VuZDogIzNiZGM3ZSAhaW1wb3J0YW50O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5hZ2VudC1CdG57XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgaGVpZ2h0OiA1NHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/pages/agentModules/add-agents/add-agents.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/agentModules/add-agents/add-agents.page.ts ***!
  \******************************************************************/
/*! exports provided: AddAgentsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAgentsPage", function() { return AddAgentsPage; });
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


var AddAgentsPage = /** @class */ (function () {
    function AddAgentsPage(router) {
        this.router = router;
        this.items = [
            {
                'id': 1,
                'name': 'mahesh',
                'email': 'mahesh@gmail.com',
                'number': 9294249294
            },
            {
                'id': 2,
                'name': 'chaityna',
                'email': 'chaityna@gmail.com',
                'number': 9294249112
            },
            {
                'id': 3,
                'name': 'raj',
                'email': 'raj@gmail.com',
                'number': 9294249223
            },
            {
                'id': 4,
                'name': 'raghu',
                'email': 'raghu@gmail.com',
                'number': 9294249552
            },
            {
                'id': 5,
                'name': 'mahesh2',
                'email': 'mahesh2@gmail.com',
                'number': 9294246643
            },
            {
                'id': 6,
                'name': 'aj',
                'email': 'aj@gmail.com',
                'number': 9294249234
            },
            {
                'id': 7,
                'name': 'jake',
                'email': 'jake@gmail.com',
                'number': 9294249264
            },
            {
                'id': 7,
                'name': 'george',
                'email': 'george@gmail.com',
                'number': 9294249253
            },
            {
                'id': 7,
                'name': 'george2',
                'email': 'george2@gmail.com',
                'number': 9294434534
            },
        ];
        this.agentSearchListItems = [];
        this.sendInviteView = false;
        this.showAgentSearchlist = true;
        this.newAgentView = false;
        this.showAdgentSuccessfullAdd = false;
    }
    AddAgentsPage.prototype.ngOnInit = function () {
    };
    AddAgentsPage.prototype.sendInvite = function () {
        var _this = this;
        this.sendInviteView = true;
        this.showAgentSearchlist = false;
        setTimeout(function () {
            _this.sendInviteView = false;
            _this.showAgentSearchlist = true;
            _this.router.navigate(['/menu/first/tabs/Agents']);
        }, 4000);
    };
    AddAgentsPage.prototype.filterItem = function (value) {
        if (value) {
            this.agentSearchListItems = Object.assign([], this.items).filter(function (item) { return item.email.toLowerCase().indexOf(value.toLowerCase()) > -1; });
        }
        else {
            this.agentSearchListItems = [];
        }
    };
    AddAgentsPage.prototype.addNewAgent = function () {
        this.sendInviteView = false;
        this.showAgentSearchlist = false;
        this.newAgentView = true;
    };
    AddAgentsPage.prototype.AddNewAgentUpload = function () {
        var _this = this;
        this.sendInviteView = false;
        this.showAgentSearchlist = false;
        this.newAgentView = false;
        this.showAdgentSuccessfullAdd = true;
        setTimeout(function () {
            _this.router.navigate(['/menu/first/tabs/Agents']);
        }, 4000);
    };
    AddAgentsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-agents',
            template: __webpack_require__(/*! ./add-agents.page.html */ "./src/app/pages/agentModules/add-agents/add-agents.page.html"),
            styles: [__webpack_require__(/*! ./add-agents.page.scss */ "./src/app/pages/agentModules/add-agents/add-agents.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AddAgentsPage);
    return AddAgentsPage;
}());



/***/ })

}]);
//# sourceMappingURL=agentModules-add-agents-add-agents-module.js.map