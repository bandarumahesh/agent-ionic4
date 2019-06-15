(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./src/app/profile/profile.module.ts":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile.page */ "./src/app/profile/profile.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_5__["ProfilePage"]
    }
];
var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_5__["ProfilePage"]]
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());



/***/ }),

/***/ "./src/app/profile/profile.page.html":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaulthref=\"\"></ion-back-button>\n          </ion-buttons>\n      <ion-title>PROFILE</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <div class=\"profile_Mainview\">\n        <div class=\"main-picsss\" id=\"back-ground\">\n              <img src=\"{{profilePicture}}\" onerror=\"this.onerror=null;this.src='assets/imgs/profilepic.svg'\" alt=\"Profile Pic\">\n              <!-- <div class=\"red-cam\" (click)=\"uploadPhoto()\">\n                <ion-icon name=\"camera\"></ion-icon>\n              </div> -->\n          </div>\n          <button class=\"editbtn\" ion-button [routerLink]=\"['/membership/12']\" routerDirection=\"forward\"  (click)=\"editUserProfile()\">\n              <img src=\"assets/icon/pencil.svg\" width=\"60\" />\n            </button>\n    </div>\n    <ion-row class=\"details\">\n        <ion-col>\n          <ion-list class=\"my-lst\" lines=\"none\">\n            <ion-item class=\"manage\">\n              <h4 class=\"heading-title\">Business Details</h4>\n            </ion-item>\n            <ion-item>\n                <ion-label>\n              <h6 class=\"profile_h6\"> <ion-icon class=\"profile_icon\" name=\"person\" item-start></ion-icon> Business Name</h6>\n              <p class=\"profile_p\">Instarent Agency info.tech</p>\n            </ion-label>\n            </ion-item>\n            <ion-item>\n                <ion-label>\n                <h6 class=\"profile_h6\">  <ion-icon class=\"profile_icon\" name=\"pin\" item-start></ion-icon> Business Address</h6>\n                <p class=\"profile_p\"> 19 carlton street granville nsw 2142\n                </p>\n              </ion-label>\n              </ion-item>\n            <ion-item>\n                <ion-label>\n              <h6 class=\"profile_h6\"> <ion-icon class=\"profile_icon\" name=\"mail\" item-start></ion-icon> Business Email</h6>\n              <p class=\"profile_p\"> instarentagency@gmail.com</p>\n            </ion-label>\n            </ion-item>\n            <ion-item>\n                <ion-label>\n              <h6 class=\"profile_h6\"> <ion-icon class=\"profile_icon\" name=\"call\" item-start></ion-icon> Business contact</h6>\n              <p class=\"profile_p\">0430340404</p>\n            </ion-label>\n            </ion-item>\n            <ion-item class=\"manage\">\n                <h4 class=\"heading-title\">Business Admin</h4>\n              </ion-item>\n              <ion-item>\n                  <ion-label>\n                <h6 class=\"profile_h6\"> <ion-icon class=\"profile_icon\" name=\"person\" item-start></ion-icon> Admin Name</h6>\n                <p class=\"profile_p\">Instarent Agency info.tech</p>\n              </ion-label>\n              </ion-item>\n              <ion-item>\n                  <ion-label>\n                <h6 class=\"profile_h6\"> <ion-icon class=\"profile_icon\" name=\"call\" item-start></ion-icon> Mobile Number</h6>\n                <p class=\"profile_p\">0430340404</p>\n              </ion-label>\n              </ion-item>\n              <ion-item>\n                  <ion-label>\n                <h6 class=\"profile_h6\"> <ion-icon class=\"profile_icon\" name=\"mail\" item-start></ion-icon>  Email</h6>\n                <p class=\"profile_p\"> instarentagency@gmail.com</p>\n              </ion-label>\n              </ion-item>\n          </ion-list>\n        </ion-col>\n      </ion-row>\n    <!-- <ion-button color=\"tertiary\" expand=\"block\" routerLink=\"/menu/profile/details\" routerDirection=\"forward\">\n      Details forward\n    </ion-button> -->\n  </ion-content>"

/***/ }),

/***/ "./src/app/profile/profile.page.scss":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile_Mainview {\n  height: 38%;\n  background: linear-gradient(to bottom, #3bdc7e, #b0e66d);\n  width: 100%; }\n\n.editbtn {\n  position: absolute;\n  right: 20px;\n  top: 33.4%;\n  z-index: 10;\n  width: 52px;\n  height: 52px;\n  font-size: 2rem;\n  box-shadow: transparent 1px 1px 1px 7px;\n  border-radius: 50%;\n  background: linear-gradient(#20c659, #a8e063);\n  padding: 9px 16px 14px 15px; }\n\n.profile_p {\n  font-size: 15px;\n  padding-left: 29px;\n  margin-top: 9px; }\n\n.profile_h6 {\n  font-size: 17px; }\n\n.profile_icon {\n  font-size: 21px;\n  position: relative;\n  top: 5px;\n  margin-right: 5px;\n  color: #80e275; }\n\n.heading-title {\n  color: #6dd45e; }\n\n#globalMenu {\n  display: none !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9JbnN0YXJlbnQvSW5zdGFyZW50IFJlcG9zL2FnZW50X3Rlc3RfcHJvamVjdC9pb25pYzQtdGVtcGxhdGUvc3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVztFQUNYLHdEQUF3RDtFQUN4RCxXQUFXLEVBQUE7O0FBRWY7RUFDSSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFVBQVU7RUFDVixXQUFXO0VBQ1gsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YsdUNBQXVDO0VBQ3ZDLGtCQUFrQjtFQUNsQiw2Q0FBNkM7RUFDN0MsMkJBQTJCLEVBQUE7O0FBRS9CO0VBQ0ksZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixlQUFlLEVBQUE7O0FBRW5CO0VBQ0ksZUFBZSxFQUFBOztBQUVuQjtFQUNJLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLGlCQUFpQjtFQUNqQixjQUFjLEVBQUE7O0FBRWxCO0VBQ0ksY0FBYyxFQUFBOztBQUVsQjtFQUNJLHdCQUF3QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxlX01haW52aWV3e1xuICAgIGhlaWdodDogMzglO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMzYmRjN2UsICNiMGU2NmQpO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLmVkaXRidG4ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMjBweDtcbiAgICB0b3A6IDMzLjQlO1xuICAgIHotaW5kZXg6IDEwO1xuICAgIHdpZHRoOiA1MnB4O1xuICAgIGhlaWdodDogNTJweDtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgYm94LXNoYWRvdzogdHJhbnNwYXJlbnQgMXB4IDFweCAxcHggN3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzIwYzY1OSwgI2E4ZTA2Myk7XG4gICAgcGFkZGluZzogOXB4IDE2cHggMTRweCAxNXB4O1xufVxuLnByb2ZpbGVfcHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAyOXB4O1xuICAgIG1hcmdpbi10b3A6IDlweDtcbn1cbi5wcm9maWxlX2g2e1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbn1cbi5wcm9maWxlX2ljb257XG4gICAgZm9udC1zaXplOiAyMXB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICBjb2xvcjogIzgwZTI3NTtcbn1cbi5oZWFkaW5nLXRpdGxle1xuICAgIGNvbG9yOiAjNmRkNDVlO1xufVxuI2dsb2JhbE1lbnV7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/profile/profile.page.ts":
/*!*****************************************!*\
  !*** ./src/app/profile/profile.page.ts ***!
  \*****************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
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


var ProfilePage = /** @class */ (function () {
    function ProfilePage(router) {
        this.router = router;
    }
    ProfilePage.prototype.ngOnInit = function () {
    };
    ProfilePage.prototype.uploadPhoto = function () {
    };
    ProfilePage.prototype.editUserProfile = function () {
        // this.router.navigate(["membership"]);
        // this.router.navigateForward('membership')
    };
    ProfilePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.page.html */ "./src/app/profile/profile.page.html"),
            styles: [__webpack_require__(/*! ./profile.page.scss */ "./src/app/profile/profile.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ProfilePage);
    return ProfilePage;
}());



/***/ })

}]);
//# sourceMappingURL=profile-profile-module.js.map