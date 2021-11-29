(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-reset-password-email-sent-reset-password-email-sent-module"],{

/***/ "FCsu":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/reset-password-email-sent/reset-password-email-sent-routing.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: ResetPasswordEmailSentPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordEmailSentPageRoutingModule", function() { return ResetPasswordEmailSentPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _reset_password_email_sent_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reset-password-email-sent.page */ "t6KT");




const routes = [
    {
        path: '',
        component: _reset_password_email_sent_page__WEBPACK_IMPORTED_MODULE_3__["ResetPasswordEmailSentPage"]
    }
];
let ResetPasswordEmailSentPageRoutingModule = class ResetPasswordEmailSentPageRoutingModule {
};
ResetPasswordEmailSentPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ResetPasswordEmailSentPageRoutingModule);



/***/ }),

/***/ "JAZH":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/reset-password-email-sent/reset-password-email-sent.module.ts ***!
  \*************************************************************************************/
/*! exports provided: ResetPasswordEmailSentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordEmailSentPageModule", function() { return ResetPasswordEmailSentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _reset_password_email_sent_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reset-password-email-sent-routing.module */ "FCsu");
/* harmony import */ var _reset_password_email_sent_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reset-password-email-sent.page */ "t6KT");







let ResetPasswordEmailSentPageModule = class ResetPasswordEmailSentPageModule {
};
ResetPasswordEmailSentPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _reset_password_email_sent_routing_module__WEBPACK_IMPORTED_MODULE_5__["ResetPasswordEmailSentPageRoutingModule"]
        ],
        declarations: [_reset_password_email_sent_page__WEBPACK_IMPORTED_MODULE_6__["ResetPasswordEmailSentPage"]]
    })
], ResetPasswordEmailSentPageModule);



/***/ }),

/***/ "gGEp":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/reset-password-email-sent/reset-password-email-sent.page.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXNldC1wYXNzd29yZC1lbWFpbC1zZW50LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "t6KT":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/reset-password-email-sent/reset-password-email-sent.page.ts ***!
  \***********************************************************************************/
/*! exports provided: ResetPasswordEmailSentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordEmailSentPage", function() { return ResetPasswordEmailSentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_reset_password_email_sent_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./reset-password-email-sent.page.html */ "xVXB");
/* harmony import */ var _reset_password_email_sent_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reset-password-email-sent.page.scss */ "gGEp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ResetPasswordEmailSentPage = class ResetPasswordEmailSentPage {
    constructor() { }
    ngOnInit() {
    }
};
ResetPasswordEmailSentPage.ctorParameters = () => [];
ResetPasswordEmailSentPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-reset-password-email-sent',
        template: _raw_loader_reset_password_email_sent_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_reset_password_email_sent_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ResetPasswordEmailSentPage);



/***/ }),

/***/ "xVXB":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/reset-password-email-sent/reset-password-email-sent.page.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>reset-password-email-sent</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=pages-reset-password-email-sent-reset-password-email-sent-module-es2015.js.map