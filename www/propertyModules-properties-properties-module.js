(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["propertyModules-properties-properties-module"],{

/***/ "./src/app/pages/propertyModules/properties/properties.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/propertyModules/properties/properties.module.ts ***!
  \***********************************************************************/
/*! exports provided: PropertiesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertiesPageModule", function() { return PropertiesPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _properties_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./properties.page */ "./src/app/pages/propertyModules/properties/properties.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _properties_page__WEBPACK_IMPORTED_MODULE_5__["PropertiesPage"]
    }
];
var PropertiesPageModule = /** @class */ (function () {
    function PropertiesPageModule() {
    }
    PropertiesPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_properties_page__WEBPACK_IMPORTED_MODULE_5__["PropertiesPage"]]
        })
    ], PropertiesPageModule);
    return PropertiesPageModule;
}());



/***/ }),

/***/ "./src/app/pages/propertyModules/properties/properties.page.html":
/*!***********************************************************************!*\
  !*** ./src/app/pages/propertyModules/properties/properties.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaulthref=\"\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>PROPERTIES</ion-title>\n  </ion-toolbar>\n\n  <ion-row class=\"tabss-row\" >\n    <!-- (click)=\"selectedtab(0)\" -->\n    <ion-col class=\"tabss-col\" (click)=\"selectedtab(0)\" value=\"0\" [ngClass]=\"{ 'tabss-colhover': tabs == 0 }\">Vacant\n    </ion-col>\n    <ion-col class=\"tabss-col\" (click)=\"selectedtab(1)\" value=\"1\" [ngClass]=\"{ 'tabss-colhover': tabs == 1 }\">Live\n    </ion-col>\n    <!-- <ion-col class=\"tabss-col\" (click)=\"selectedtab(2)\" value=\"2\" [ngClass]=\"{ 'tabss-colhover': tabs == 2 }\">History\n    </ion-col> -->\n  </ion-row>\n</ion-header>\n<ion-content >\n\n      <ion-slides #pageSlider2 (ionSlideWillChange)=\"changeWillSlide($event)\">\n          <ion-slide class=\"maintain_m\" [ngClass]=\"{ 'slideDisplay': tabs == 1 }\">\n\n         \n            <!-- *ngIf=\"this.globaldata.vacanttabs\" -->\n<div class=\"slide_div\"  *ngIf=\"tabs == 0\">\n    <div>\n        <ion-toolbar>\n            <ion-searchbar class=\"searchbar_vld\" #myInput  animated debounce=\"500\" placeholder=\"Search by property\" [(ngModel)]=\"searchlist\" (input)=\"filterItem(myInput.value)\" cancelButtonText=\"Custom Cancel\"></ion-searchbar>\n          </ion-toolbar>\n    </div>\n    <ion-card *ngFor=\"let property of properties\">\n      <ion-card-header class=\"propertyHeda\" routerLink=\"/submenu/first\">\n        19 cartlon st Granville <br><small>NSW 2142 Australia</small>\n      </ion-card-header>\n      <ion-row class=\"row_ffot\">\n        <ion-col>\n            <ion-ripple-effect></ion-ripple-effect>\n            <ion-icon class=\"font-icons\" name=\"notifications\"></ion-icon>\n\n            <br>Alerts</ion-col>\n\n        <ion-col>\n            <ion-ripple-effect></ion-ripple-effect>\n          <ion-icon class=\"font-icons\" name=\"briefcase\"></ion-icon>\n          <!-- <ion-badge color=\"primary\">11</ion-badge> -->\n          <br>Jobs</ion-col>\n        <ion-col>\n            <ion-ripple-effect></ion-ripple-effect>\n            <ion-icon class=\"font-icons\" name=\"chatboxes\"></ion-icon>\n\n            <br>Messages\n          </ion-col>\n            \n        <ion-col>\n            <ion-ripple-effect></ion-ripple-effect>\n            <ion-icon class=\"font-icons\" name=\"create\"></ion-icon>\n\n            <br>Notes</ion-col>\n      </ion-row>\n    </ion-card>\n    </div>\n  </ion-slide>\n  <ion-slide class=\"maintain_m\" [ngClass]=\"{ 'slideDisplay': tabs == 0 }\">\n      <!-- [ngClass]=\"{ 'slideDisplay': tabs == 0 }\" -->\n<div class=\"slide_div\" *ngIf=\"tabs == 1\">\n    <div>\n        <ion-toolbar>\n            <ion-searchbar class=\"searchbar_vld\" #myInput  animated debounce=\"500\" placeholder=\"Search by property\" [(ngModel)]=\"searchlist\" (input)=\"filterItem(myInput.value)\" cancelButtonText=\"Custom Cancel\"></ion-searchbar>\n          </ion-toolbar>\n    </div>\n    <ion-card *ngFor=\"let property of properties\">\n      <ion-card-header class=\"propertyHeda\" routerLink=\"/submenu/first\">\n        21 cartlon st Granville <br><small>NSW 2142 Australia</small>\n      </ion-card-header>\n      <ion-row class=\"row_ffot\">\n        <ion-col>\n            <ion-ripple-effect></ion-ripple-effect>\n            <ion-icon class=\"font-icons\" name=\"notifications\"></ion-icon>\n\n            <br>Alerts</ion-col>\n\n        <ion-col>\n            <ion-ripple-effect></ion-ripple-effect>\n          <ion-icon class=\"font-icons\" name=\"briefcase\"></ion-icon>\n          <!-- <ion-badge color=\"primary\">11</ion-badge> -->\n          <br>Jobs</ion-col>\n        <ion-col>\n            <ion-ripple-effect></ion-ripple-effect>\n            <ion-icon class=\"font-icons\" name=\"chatboxes\"></ion-icon>\n\n            <br>Messages\n          </ion-col>\n            \n        <ion-col>\n            <ion-ripple-effect></ion-ripple-effect>\n            <ion-icon class=\"font-icons\" name=\"create\"></ion-icon>\n\n            <br>Notes</ion-col>\n      </ion-row>\n    </ion-card>\n</div>\n    </ion-slide>\n  </ion-slides>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n      <ion-fab-button [routerLink]=\"['/menu/properties/addProperty']\" routerLinkActive=\"router-link-active\" >\n        <ion-icon name=\"add\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n</ion-content>\n\n\n\n        <!-- <img src=\"https://ionicframework.com/docs/demos/api/card/madison.jpg\" /> -->"

/***/ }),

/***/ "./src/app/pages/propertyModules/properties/properties.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/propertyModules/properties/properties.page.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-title {\n  text-align: center; }\n\n.tabss-colhover {\n  border-bottom: 4px solid #ffffff !important;\n  text-align: center;\n  color: #fff !important;\n  font-weight: 600; }\n\n.maintain_m {\n  height: auto;\n  overflow-y: scroll;\n  padding: 4px;\n  padding-bottom: 60px;\n  display: block; }\n\n.tabss-row {\n  height: 48px;\n  background-color: #3bdc7e !important;\n  color: #fff;\n  font-size: 16px;\n  font-weight: 400;\n  width: 100%;\n  text-align: center;\n  z-index: 10; }\n\n.row_ffot {\n  padding: 8px;\n  text-align: center;\n  border-top: 1px solid #f9f7f7; }\n\n.font-icons {\n  font-size: 22px;\n  color: #989aa2; }\n\n.propertyHeda {\n  font-size: 18px;\n  line-height: 28px;\n  padding: 30px 30px 30px 30px;\n  text-align: start; }\n\n.tabss-col {\n  text-transform: uppercase;\n  font-size: 14px;\n  padding-top: 10px; }\n\n.slide_div {\n  padding-bottom: 50px;\n  width: 100%; }\n\n.searchbar_vld {\n  text-align: start; }\n\n.slideDisplay {\n  display: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9JbnN0YXJlbnQvSW5zdGFyZW50IFJlcG9zL2FnZW50X3Rlc3RfcHJvamVjdC9pb25pYzQtdGVtcGxhdGUvc3JjL2FwcC9wYWdlcy9wcm9wZXJ0eU1vZHVsZXMvcHJvcGVydGllcy9wcm9wZXJ0aWVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFrQixFQUFBOztBQUt0QjtFQUNJLDJDQUEyQztFQUMzQyxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixjQUFjLEVBQUE7O0FBRWxCO0VBU0ksWUFBWTtFQUNaLG9DQUFvQztFQUNwQyxXQUFXO0VBQ1gsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFdBQVcsRUFBQTs7QUFFZjtFQUNJLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsNkJBQTZCLEVBQUE7O0FBRWpDO0VBQ0ksZUFBZTtFQUNkLGNBQWMsRUFBQTs7QUFFbkI7RUFDSSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLDRCQUE0QjtFQUM1QixpQkFBaUIsRUFBQTs7QUFFckI7RUFDSSx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLG9CQUFvQjtFQUNwQixXQUFXLEVBQUE7O0FBRWY7RUFDSSxpQkFBaUIsRUFBQTs7QUFFckI7RUFDSSxhQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9wZXJ0eU1vZHVsZXMvcHJvcGVydGllcy9wcm9wZXJ0aWVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cblxuXG4udGFic3MtY29saG92ZXJ7XG4gICAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICNmZmZmZmYgIWltcG9ydGFudDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogNjAwO1xufSBcbi5tYWludGFpbl9te1xuICAgIGhlaWdodDogYXV0bztcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgcGFkZGluZzogNHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA2MHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuLnRhYnNzLXJvd3tcbiAgICAvLyBoZWlnaHQ6IDUycHg7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzNiZGM3ZSAhaW1wb3J0YW50O1xuICAgIC8vIGNvbG9yOiAjZmZmO1xuICAgIC8vIGZvbnQtc2l6ZTogMTZweDtcbiAgICAvLyBmb250LXdlaWdodDogNDAwO1xuICAgIC8vIHdpZHRoOiAxMDAlO1xuICAgIC8vIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAvLyB6LWluZGV4OiAxMDtcbiAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNiZGM3ZSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB6LWluZGV4OiAxMDtcbn1cbi5yb3dfZmZvdHtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZjlmN2Y3O1xufVxuLmZvbnQtaWNvbnN7XG4gICAgZm9udC1zaXplOiAyMnB4OyAgIFxuICAgICBjb2xvcjogIzk4OWFhMjtcbn1cbi5wcm9wZXJ0eUhlZGF7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICAgIHBhZGRpbmc6IDMwcHggMzBweCAzMHB4IDMwcHg7XG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XG59XG4udGFic3MtY29se1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuLnNsaWRlX2RpdntcbiAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5zZWFyY2hiYXJfdmxke1xuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xufVxuLnNsaWRlRGlzcGxheXtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG5cbi8vIH0iXX0= */"

/***/ }),

/***/ "./src/app/pages/propertyModules/properties/properties.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/propertyModules/properties/properties.page.ts ***!
  \*********************************************************************/
/*! exports provided: PropertiesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertiesPage", function() { return PropertiesPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PropertiesPage = /** @class */ (function () {
    function PropertiesPage() {
        this.tabs = 0;
        this.properties = [1, 2, 3, 4, 5, 6, 7];
        this.globaldata = [];
    }
    PropertiesPage.prototype.ngOnInit = function () {
    };
    PropertiesPage.prototype.selectedtab = function (type) {
        this.tabs = type;
        console.log('hello', type);
    };
    PropertiesPage.prototype.changeWillSlide = function ($event) {
        this.tabs = $event.target.swiper.realIndex;
        console.log('hh', this.tabs);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('pageSlider2'),
        __metadata("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonSlides"])
    ], PropertiesPage.prototype, "pageSlider2", void 0);
    PropertiesPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-properties',
            template: __webpack_require__(/*! ./properties.page.html */ "./src/app/pages/propertyModules/properties/properties.page.html"),
            styles: [__webpack_require__(/*! ./properties.page.scss */ "./src/app/pages/propertyModules/properties/properties.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PropertiesPage);
    return PropertiesPage;
}());



/***/ })

}]);
//# sourceMappingURL=propertyModules-properties-properties-module.js.map