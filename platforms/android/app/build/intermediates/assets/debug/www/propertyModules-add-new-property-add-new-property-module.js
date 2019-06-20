(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["propertyModules-add-new-property-add-new-property-module"],{

/***/ "./src/app/pages/propertyModules/add-new-property/add-new-property.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/propertyModules/add-new-property/add-new-property.module.ts ***!
  \***********************************************************************************/
/*! exports provided: AddNewPropertyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNewPropertyPageModule", function() { return AddNewPropertyPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _add_new_property_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-new-property.page */ "./src/app/pages/propertyModules/add-new-property/add-new-property.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _add_new_property_page__WEBPACK_IMPORTED_MODULE_5__["AddNewPropertyPage"]
    }
];
var AddNewPropertyPageModule = /** @class */ (function () {
    function AddNewPropertyPageModule() {
    }
    AddNewPropertyPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_add_new_property_page__WEBPACK_IMPORTED_MODULE_5__["AddNewPropertyPage"]]
        })
    ], AddNewPropertyPageModule);
    return AddNewPropertyPageModule;
}());



/***/ }),

/***/ "./src/app/pages/propertyModules/add-new-property/add-new-property.page.html":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/propertyModules/add-new-property/add-new-property.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaulthref=\"\"></ion-back-button>\n          </ion-buttons>\n      <ion-title>ADD PROPERTY</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content >\n<div *ngIf=\"wizardStep === 1\" style=\"padding-top:16px;\"> \n    <ion-toolbar *ngIf=\"!isCustomLocation\" >\n        <ion-searchbar #myInput  animated debounce=\"500\"  [(ngModel)]=\"searchlist\" (input)=\"filterItem(myInput.value)\" cancelButtonText=\"Custom Cancel\"></ion-searchbar>\n      </ion-toolbar>\n      <p class=\"not_found\">\n      <ion-checkbox style=\"top: 4px;\" color=\"primary\" [(ngModel)]=\"isCustomLocation\" (ionChange)=\"propertyNotFound($event.checked)\"\n        name=\"isCustomProperty\" class=\"agreed\"></ion-checkbox> <span class=\"notfound_txt\"> Couldn't find your address ?</span>\n    </p>\n<div text-start style=\"margin-top: 73px;margin: 22% 10%;\" *ngIf=\"!isCustomLocation && !searchlist\" >\n  <p> search with granville , nsw, carltion street</p>\n  <p>Add property by search </p>\n  <p>If your property not foound in search list go with couldn't find property </p>\n</div>\n <div  *ngIf=\"isCustomLocation\" style=\"padding-top: 12px;\">\n    <ion-toolbar >\n        <ion-searchbar #myInput   animated debounce=\"500\" placeholder=\"Search by Suburb\" [(ngModel)]=\"searchlist\" (input)=\"filterItem(myInput.value)\" cancelButtonText=\"Custom Cancel\"></ion-searchbar>\n      </ion-toolbar>\n      <ion-item>\n          <ion-label position=\"floating\" > Address</ion-label>\n          <ion-input name=\"businessName\" type=\"text\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\" minlength=\"2\" maxlength=\"60\" ngModel required></ion-input>\n      </ion-item>\n\n      <p class=\"not_found\" style=\"margin-top:30px;    text-align: start;    line-height: 31px;\">\n          <ion-checkbox style=\"top: 4px;\" color=\"primary\" [(ngModel)]=\"unitNumber\" (ionChange)=\"propertyNotFound($event.checked)\"\n            name=\"isCustomProperty\" class=\"agreed\"></ion-checkbox> <span class=\"notfound_txt\"> Is this property a apartment , unit ,<br> granny flat or villa</span>\n        </p>\n        <ion-item *ngIf=\"unitNumber\">\n            <ion-label position=\"floating\" > Unit Number</ion-label>\n            <ion-input name=\"businessName\" type=\"text\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\" minlength=\"2\" maxlength=\"60\" ngModel required></ion-input>\n        </ion-item>\n        <ion-button *ngIf=\"unitNumber\" color=\"primary\" class=\"unit_number\" (click)=\"gotoProprtie()\"  >Update unit number</ion-button>\n </div>\n      <ion-list *ngIf=\"searchlist\">\n          <ion-item class=\"list_item\" *ngFor=\"let item of agentSearchListItems;  let i = index\" (click)=\"getPropertyAddress(item.address)\" >\n              <ion-ripple-effect></ion-ripple-effect>\n              <ion-label > \n                <h4><ion-icon name=\"pin\" class=\"location_icon\"></ion-icon>  {{item.address}}</h4>\n              </ion-label>\n            </ion-item>\n    </ion-list>\n    <div class=\"setAddressavailable\" *ngIf=\"showPropertyAddress && !isCustomLocation\">\n      <p class=\"Congrats\">   <svg class=\"smallcheckmark_success\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 52 52\"><circle class=\"checkmark_success__circle\" cx=\"26\" cy=\"26\" r=\"25\" fill=\"none\"/><path class=\"checkmark_success__check\" fill=\"none\" d=\"M14.1 27.2l7.1 7.2 16.7-16.8\"/></svg>\n         </p>\n<p class=\"availableaddress\"> {{showPropertyAddress}} <br><span>Available</span></p>\n<div padding>\n    <!-- size=\"large\" -->\n  <!-- <ion-button type=\"submit\" [disabled]=\"!showPropertyAddress\" color=\"primary\" expand=\"block\" >  <ion-ripple-effect></ion-ripple-effect>Set current property status</ion-button> -->\n</div>\n    </div>\n</div>\n<div *ngIf=\"wizardStep === 2\" padding>\n  <p class=\"wizad_2\"><ion-icon name=\"pin\" class=\"location_icon\"></ion-icon>   {{showPropertyAddress}}</p>\n  <ion-row *ngIf=\"showPropertyAddress\" class=\"marg_top\">\n    <!-- <ion-col class=\"tad_mr\" col-12> -->\n      <ion-card class=\"mainCd_m\" (click)=\"selectVacantType(2)\" [ngClass]=\"{'selfCard': vacantType}\">\n        <h4 class=\"type_h1 main-tr\">Property currently Vacant</h4>\n        <ion-checkbox class=\"main_ck\" color=\"primary\" value=\"1\" [disabled]=\"!vacantType\" [checked]=\"vacantType\" >\n        </ion-checkbox>\n        <!-- <p class=\"type_p moc-f\">Property vacant, available for rent for new tenant</p> -->\n      </ion-card>\n    <!-- </ion-col> -->\n    <!-- <ion-col class=\"tad_tg\" col-12> -->\n      <ion-card class=\"mainCd_m\" (click)=\"selectVacantType(1)\" [ngClass]=\"{'selfCard': rentalType}\">\n        <h4 class=\"type_h1 main-tr\">Property currently Rented</h4>\n        <ion-checkbox class=\"main_ck\" color=\"primary\" value=\"1\" [disabled]=\"!rentalType\" [checked]=\"rentalType\" >\n        </ion-checkbox>\n        <!-- <p class=\"type_p\">Property rented with existing tenant</p> -->\n      </ion-card>\n    <!-- </ion-col> -->\n  </ion-row>\n</div>\n<div *ngIf=\"wizardStep === 3\" padding>\n\n      <h4 class=\"heading-title\">Landlord Details</h4>\n\n  <ion-item >\n    <ion-label position=\"floating\" >  Name</ion-label>\n    <ion-input name=\"businessName\" type=\"text\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\" minlength=\"2\" maxlength=\"30\" ngModel required></ion-input>\n</ion-item>\n<ion-item>\n  <ion-label position=\"floating\" >Email <small class=\"invitt\">( Invite will be sent to join instarent )</small></ion-label>\n  <ion-input type=\"email\" name=\"email\" ngModel required></ion-input>\n  </ion-item>\n<ion-item class=\"f-item pad-pt\">\n<ion-label position=\"floating\" >Mobile Number</ion-label>\n<ion-input type=\"tel\" minlength=\"10\" ngModel  maxlength=\"10\" name=\"phoneNumber\" required></ion-input>\n</ion-item>\n<br>\n    <h4 class=\"heading-title\">Tenant Details</h4>\n\n<ion-item >\n  <ion-label position=\"floating\" >  Name</ion-label>\n  <ion-input name=\"businessName\" type=\"text\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\" minlength=\"2\" maxlength=\"30\" ngModel required></ion-input>\n</ion-item>\n<ion-item>\n<ion-label position=\"floating\" >Email <small class=\"invitt\">( Invite will be sent to join instarent )</small></ion-label>\n<ion-input type=\"email\" name=\"email\" ngModel required></ion-input>\n</ion-item>\n<ion-item class=\"f-item pad-pt\">\n<ion-label position=\"floating\" >Mobile Number</ion-label>\n<ion-input type=\"tel\" minlength=\"10\" ngModel  maxlength=\"10\" name=\"phoneNumber\" required></ion-input>\n</ion-item>\n\n</div>\n    <div  class=\"lable_float\" *ngIf=\"wizardStep === 4\">\n        <div  class=\"main_check_Div\" style=\"    margin-top: 26%;\">\n            <svg class=\"checkmark_success\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 52 52\"><circle class=\"checkmark_success__circle\" cx=\"26\" cy=\"26\" r=\"25\" fill=\"none\"/><path class=\"checkmark_success__check\" fill=\"none\" d=\"M14.1 27.2l7.1 7.2 16.7-16.8\"/></svg>\n            <!-- <button ion-button class=\"submit_appli\" \n            (click)=\"submitApplication()\">\n            CLICK HERE TO\n            <br /> GO LIVE</button> -->\n            <p class=\"Congrats\"> Property created  <br /> Successful </p>\n            <!-- <p class=\"small_congrats\">your property is now live.</p> -->\n          </div>\n        <div text-center>\n            <ion-button  color=\"primary\" (click)=\"gotoProperties()\" >GO TO PROPERTIES</ion-button>\n        </div>\n</div>\n  </ion-content>  \n  <!-- <ion-footer color=\"primary\" *ngIf=\"isCustomLocation\">\n      <ion-toolbar color=\"primary\">\n          <ion-button  color=\"primary\" (click)=\"gotoPropertie()\" expand=\"block\" >Submit</ion-button>\n        </ion-toolbar>\n  </ion-footer> -->\n  <ion-footer *ngIf=\"wizardStep !== 4\">\n      <!-- && !isCustomLocation -->\n      <ion-toolbar>\n          <!-- showPropertyAddress -->\n          <ion-buttons slot=\"primary\" *ngIf=\"wizardStep === 1 \"  >\n              <ion-button (click)=\"gonext()\" class=\"footer_subbtns\" >\n                Next\n                <ion-icon name=\"arrow-forward\" class=\"hellos\"></ion-icon>\n              </ion-button>\n            </ion-buttons>\n            <ion-buttons slot=\"primary\" *ngIf=\"wizardStep === 2\" class=\"footer_butns\">\n                <ion-button (click)=\"gotoPreviousStep()\" class=\"footer_subbtns\">\n                    <ion-icon name=\"arrow-back\"  class=\"hellos\"></ion-icon> \n                    Back\n                  </ion-button>\n                <ion-button (click)=\"gonext()\" class=\"footer_subbtns\">\n                  Next\n                  <!-- <ion-icon slot=\"icon-only\" name=\"star\"></ion-icon> -->\n                  <ion-icon name=\"arrow-forward\" class=\"hellos\"></ion-icon>\n                </ion-button>\n              </ion-buttons>\n              <ion-buttons slot=\"primary\" *ngIf=\"wizardStep === 3\" class=\"footer_butns\">\n                <ion-button (click)=\"gotoPreviousStep()\" class=\"footer_subbtns\">\n                    <ion-icon name=\"arrow-back\"  class=\"hellos\"></ion-icon> \n                    Back\n                  </ion-button>\n                <ion-button (click)=\"gonext()\" class=\"footer_subbtns\">\n                  Finish\n                  <!-- <ion-icon slot=\"icon-only\" name=\"star\"></ion-icon> -->\n                  <ion-icon name=\"arrow-forward\" class=\"hellos\"></ion-icon>\n                </ion-button>\n              </ion-buttons>\n      </ion-toolbar>\n    </ion-footer>"

/***/ }),

/***/ "./src/app/pages/propertyModules/add-new-property/add-new-property.page.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/propertyModules/add-new-property/add-new-property.page.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".smallcheckmark_success {\n  width: 62px;\n  height: 62px;\n  border-radius: 50%;\n  display: block;\n  stroke-width: 3px;\n  stroke: #fff;\n  stroke-miterlimit: 10;\n  box-shadow: inset 0px 0px 0px #7ac142;\n  -webkit-animation: fill .1s ease-in-out .1s forwards, scale .2s ease-in-out .3s both;\n  animation: fill .1s ease-in-out .1s forwards, scale .2s ease-in-out .3s both;\n  background: #7ac142;\n  margin: auto;\n  position: relative;\n  top: 25%; }\n\n.availableaddress {\n  text-align: center;\n  line-height: 42px;\n  font-weight: 400;\n  font-size: 25px;\n  color: #7ac141; }\n\n.setAddressavailable {\n  margin-top: 17%; }\n\n.location_icon {\n  font-size: 20px;\n  position: relative;\n  top: 5px;\n  color: #3bdc7e; }\n\n.footer_butns {\n  width: 100%;\n  justify-content: space-between; }\n\n.footer_subbtns {\n  font-size: 18px !important; }\n\n.wizad_2 {\n  color: #3c3e3c;\n  font-size: 19px;\n  padding-left: 20px; }\n\n.tad_tg {\n  padding: 0px;\n  padding-left: 4px; }\n\n.mainCd_m {\n  margin: 10px;\n  padding: 10px;\n  width: 100%;\n  border-radius: 6px;\n  position: relative;\n  height: 142px; }\n\n.mainCd_m .main_ck {\n  position: absolute;\n  left: 32px;\n  top: 55px; }\n\n.type_h1 {\n  text-align: center;\n  font-size: 15px;\n  color: grey; }\n\n.main-tr {\n  font-weight: 400;\n  color: #5a5656;\n  font-size: 16px;\n  margin-top: 44px;\n  line-height: 27px; }\n\n.type_p {\n  padding: 20px 8px;\n  text-align: center;\n  line-height: 26px; }\n\n.moc-f {\n  padding: 18px 6px;\n  line-height: 23px; }\n\n.marg_top {\n  margin-top: 50px; }\n\n.tad_mr {\n  padding-right: 6px;\n  padding: 0px; }\n\n.selfCard {\n  background-color: #fbfbfb;\n  border: 1.5px solid #5ce68c;\n  box-shadow: 1px 0px 0px #e2dddd;\n  border-radius: 6px; }\n\n.invitt {\n  position: relative;\n  top: -1px;\n  left: 4px; }\n\n.not_found {\n  color: #424141;\n  font-size: 15px;\n  text-align: right;\n  font-weight: 500;\n  margin: 0px 22px; }\n\n.notfound_txt {\n  position: relative;\n  top: -3px; }\n\n.heading-title {\n  color: #6dd45e;\n  position: relative;\n  top: 15px;\n  left: 13px;\n  z-index: 999999; }\n\n.unit_number {\n  margin-top: 24px;\n  margin-left: 14px; }\n\n@media all and (min-width: 300px) and (max-width: 320px) {\n  .type_p {\n    padding: 11px 11px;\n    text-align: center;\n    line-height: 26px;\n    font-size: 12px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9JbnN0YXJlbnQvSW5zdGFyZW50IFJlcG9zL2FnZW50X3Rlc3RfcHJvamVjdC9pb25pYzQtdGVtcGxhdGUvc3JjL2FwcC9wYWdlcy9wcm9wZXJ0eU1vZHVsZXMvYWRkLW5ldy1wcm9wZXJ0eS9hZGQtbmV3LXByb3BlcnR5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixxQ0FBcUM7RUFDckMsb0ZBQW9GO0VBQ3BGLDRFQUE0RTtFQUM1RSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixRQUFRLEVBQUE7O0FBRVo7RUFDSSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsY0FBYyxFQUFBOztBQUVsQjtFQUNJLGVBQWUsRUFBQTs7QUFFbkI7RUFDSSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixjQUFjLEVBQUE7O0FBRWxCO0VBQ0ksV0FBVztFQUNYLDhCQUE4QixFQUFBOztBQUVsQztFQUNJLDBCQUEwQixFQUFBOztBQUU5QjtFQUNJLGNBQWM7RUFDZCxlQUFlO0VBQ2Ysa0JBQWtCLEVBQUE7O0FBSXRCO0VBQ0ksWUFBWTtFQUNaLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLFlBQVk7RUFDWixhQUFhO0VBQ2IsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsYUFBYSxFQUFBOztBQUVqQjtFQUNJLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsU0FBUyxFQUFBOztBQUViO0VBQ0ksa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixXQUFXLEVBQUE7O0FBRWY7RUFDSSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixpQkFBaUIsRUFBQTs7QUFFckI7RUFDSSxpQkFBaUI7RUFDakIsaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0ksa0JBQWtCO0VBQ2xCLFlBQVksRUFBQTs7QUFFaEI7RUFDSSx5QkFBeUI7RUFDekIsMkJBQTJCO0VBQzNCLCtCQUErQjtFQUMvQixrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFNBQVMsRUFBQTs7QUFFYjtFQUNJLGNBQWM7RUFDZCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxrQkFBa0I7RUFDbEIsU0FDSixFQUFBOztBQUNBO0VBQ0ksY0FBYztFQUNkLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLGVBQWUsRUFBQTs7QUFFbkI7RUFDSSxnQkFBZ0I7RUFDaEIsaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0k7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixlQUFlLEVBQUEsRUFDbEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9wZXJ0eU1vZHVsZXMvYWRkLW5ldy1wcm9wZXJ0eS9hZGQtbmV3LXByb3BlcnR5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zbWFsbGNoZWNrbWFya19zdWNjZXNzIHtcbiAgICB3aWR0aDogNjJweDtcbiAgICBoZWlnaHQ6IDYycHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHN0cm9rZS13aWR0aDogM3B4O1xuICAgIHN0cm9rZTogI2ZmZjtcbiAgICBzdHJva2UtbWl0ZXJsaW1pdDogMTA7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAwcHggIzdhYzE0MjtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZmlsbCAuMXMgZWFzZS1pbi1vdXQgLjFzIGZvcndhcmRzLCBzY2FsZSAuMnMgZWFzZS1pbi1vdXQgLjNzIGJvdGg7XG4gICAgYW5pbWF0aW9uOiBmaWxsIC4xcyBlYXNlLWluLW91dCAuMXMgZm9yd2FyZHMsIHNjYWxlIC4ycyBlYXNlLWluLW91dCAuM3MgYm90aDtcbiAgICBiYWNrZ3JvdW5kOiAjN2FjMTQyO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAyNSU7XG59XG4uYXZhaWxhYmxlYWRkcmVzc3tcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6IDQycHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgY29sb3I6ICM3YWMxNDE7XG59XG4uc2V0QWRkcmVzc2F2YWlsYWJsZXtcbiAgICBtYXJnaW4tdG9wOiAxNyU7XG59XG4ubG9jYXRpb25faWNvbntcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogNXB4O1xuICAgIGNvbG9yOiAjM2JkYzdlO1xufVxuLmZvb3Rlcl9idXRuc3tcbiAgICB3aWR0aDogMTAwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uZm9vdGVyX3N1YmJ0bnN7XG4gICAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG59XG4ud2l6YWRfMntcbiAgICBjb2xvcjogIzNjM2UzYztcbiAgICBmb250LXNpemU6IDE5cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuXG5cbi50YWRfdGcge1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDRweDtcbn1cbi5tYWluQ2RfbSB7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDE0MnB4O1xufVxuLm1haW5DZF9tIC5tYWluX2NrIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMzJweDtcbiAgICB0b3A6IDU1cHg7XG59XG4udHlwZV9oMSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBjb2xvcjogZ3JleTtcbn1cbi5tYWluLXRyIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGNvbG9yOiAjNWE1NjU2O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBtYXJnaW4tdG9wOiA0NHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyN3B4O1xufVxuLnR5cGVfcCB7XG4gICAgcGFkZGluZzogMjBweCA4cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuLm1vYy1mIHtcbiAgICBwYWRkaW5nOiAxOHB4IDZweDtcbiAgICBsaW5lLWhlaWdodDogMjNweDtcbn1cbi5tYXJnX3RvcHtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuLnRhZF9tciB7XG4gICAgcGFkZGluZy1yaWdodDogNnB4O1xuICAgIHBhZGRpbmc6IDBweDtcbn1cbi5zZWxmQ2FyZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZiZmJmYjtcbiAgICBib3JkZXI6IDEuNXB4IHNvbGlkICM1Y2U2OGM7XG4gICAgYm94LXNoYWRvdzogMXB4IDBweCAwcHggI2UyZGRkZDtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG4uaW52aXR0e1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IC0xcHg7XG4gICAgbGVmdDogNHB4O1xufVxuLm5vdF9mb3VuZHtcbiAgICBjb2xvcjogIzQyNDE0MTtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBtYXJnaW46IDBweCAyMnB4O1xufVxuLm5vdGZvdW5kX3R4dHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAtM3B4XG59XG4uaGVhZGluZy10aXRsZXtcbiAgICBjb2xvcjogIzZkZDQ1ZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAxNXB4O1xuICAgIGxlZnQ6IDEzcHg7XG4gICAgei1pbmRleDogOTk5OTk5O1xufVxuLnVuaXRfbnVtYmVye1xuICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDE0cHg7XG59XG5AbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiAzMDBweCkgYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XG4gICAgLnR5cGVfcCB7XG4gICAgICAgIHBhZGRpbmc6IDExcHggMTFweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBsaW5lLWhlaWdodDogMjZweDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/propertyModules/add-new-property/add-new-property.page.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/propertyModules/add-new-property/add-new-property.page.ts ***!
  \*********************************************************************************/
/*! exports provided: AddNewPropertyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNewPropertyPage", function() { return AddNewPropertyPage; });
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


var AddNewPropertyPage = /** @class */ (function () {
    function AddNewPropertyPage(router) {
        this.router = router;
        this.wizardStep = 1;
        this.showPropertyAddress = false;
        this.items = [
            {
                'address': '19 carlton street',
            },
            {
                'address': '423 george street Granville nsw',
            },
            {
                'address': '423 george street Granville nsw',
            },
            {
                'address': '43 george street Granville nsw',
            },
            {
                'address': '423 calton street Granville nsw',
            },
            {
                'address': 'qld',
            },
            {
                'address': '433 george street Granville nsw',
            },
            {
                'address': '13 george street Granville nsw',
            },
        ];
        this.agentSearchListItems = [];
    }
    AddNewPropertyPage.prototype.ngOnInit = function () {
    };
    AddNewPropertyPage.prototype.filterItem = function (value) {
        if (value) {
            this.agentSearchListItems = Object.assign([], this.items).filter(function (item) { return item.address.toLowerCase().indexOf(value.toLowerCase()) > -1; });
        }
        else {
            this.agentSearchListItems = [];
        }
    };
    AddNewPropertyPage.prototype.getPropertyAddress = function (address) {
        console.log('hello');
        if (address) {
            this.searchlist = address;
            this.showPropertyAddress = address;
            this.agentSearchListItems = [];
        }
    };
    AddNewPropertyPage.prototype.propertyNotFound = function (event) {
    };
    AddNewPropertyPage.prototype.gonext = function () {
        this.wizardStep++;
    };
    AddNewPropertyPage.prototype.gotoPreviousStep = function () {
        this.wizardStep--;
    };
    AddNewPropertyPage.prototype.selectVacantType = function (value) {
        // let valuee = status;
        if (value === 1) {
            this.vacantType = false;
            this.rentalType = true;
            this.propertyCategoryId = 1;
        }
        else if (value === 2) {
            this.rentalType = false;
            this.vacantType = true;
            this.propertyCategoryId = 2;
        }
    };
    AddNewPropertyPage.prototype.gotoProperties = function () {
        this.router.navigate(['/menu/first/tabs/Properties']);
    };
    AddNewPropertyPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-new-property',
            template: __webpack_require__(/*! ./add-new-property.page.html */ "./src/app/pages/propertyModules/add-new-property/add-new-property.page.html"),
            styles: [__webpack_require__(/*! ./add-new-property.page.scss */ "./src/app/pages/propertyModules/add-new-property/add-new-property.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AddNewPropertyPage);
    return AddNewPropertyPage;
}());



/***/ })

}]);
//# sourceMappingURL=propertyModules-add-new-property-add-new-property-module.js.map