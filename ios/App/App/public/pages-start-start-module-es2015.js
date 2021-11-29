(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-start-start-module"],{

/***/ "Ryxb":
/*!*****************************************************!*\
  !*** ./src/app/pages/start/start-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: StartPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartPageRoutingModule", function() { return StartPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _start_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./start.page */ "x2OB");




const routes = [
    {
        path: '',
        component: _start_page__WEBPACK_IMPORTED_MODULE_3__["StartPage"]
    }
];
let StartPageRoutingModule = class StartPageRoutingModule {
};
StartPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], StartPageRoutingModule);



/***/ }),

/***/ "TXlj":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/start/start.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- This page is loaded up upon entering the app, it will prompt users to register or sign in to the application -->\n<ion-header>\n  <ion-toolbar mode=\"ios\">\n    <ion-title>\n      <div class=\"ion-text-wrap\">\n        Welcome to Green TCNJ\n      </div>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n<!-- This is used to center the image, as of now it is a placeholder value but as a logo is finalized it will be placed here -->\n  <ion-grid>\n    <ion-row>\n        <ion-col>\n          <!-- <ion-img [src]=\"assets/logo\" alt=\"logo-image\"></ion-img> -->\n          <img alt=\"\" class=\"center\" src=\"../../assets/icon/icon.png\" vertical-align=\"middle\">\n        </ion-col>\n   </ion-row>\n  </ion-grid>\n\n  <!-- <ion-thumbnail>\n    <img src=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\" vertical-align=\"middle\">\n  </ion-thumbnail> -->\n\n  <div id=\"container\">\n    <!-- <strong>Ready to create an app?</strong>\n    <p>Start with Ionic <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://ionicframework.com/docs/components\">UI Components</a></p> -->\n  </div>\n  <!-- Creates buttons for registration or login and uses [routerLink] to link the buttons to the corresponding pages -->\n  <ion-grid>\n    <ion-row>\n      <ion-col align-self-center>\n        <span class=\"already\">Need an Account?</span>\n\n        <ion-button aria-label=\"register\" [routerLink]=\"['/registration']\" expand=\"block\" color=\"primary\">Register</ion-button>\n\n        <span class=\"divider line one-line\">or</span>\n\n        <span class=\"already\">Already a user?</span>\n\n        <ion-button aria-label=\"sign in\" [routerLink]=\"['/login']\" expand=\"block\" color=\"success\">Sign In</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n");

/***/ }),

/***/ "f9I+":
/*!*********************************************!*\
  !*** ./src/app/pages/start/start.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".divider {\n  display: flex;\n}\n.divider:before, .divider:after {\n  content: \"\";\n  flex: 1;\n}\n.line {\n  align-items: center;\n  margin: 1em -1em;\n  color: #2a2a2a;\n}\n.line:before, .line:after {\n  height: 1px;\n  margin: 0 1em;\n}\n.one-line:before, .one-line:after {\n  background: #cccccc;\n}\n.auth-form ion-grid,\n.auth-form ion-row {\n  height: 100%;\n  justify-content: center;\n}\n.already {\n  display: block;\n  text-align: center;\n  padding-bottom: 10px;\n}\nimg.center {\n  height: 25vh;\n  width: auto;\n  display: block;\n  margin: 0 auto;\n}\n.toolbar-title {\n  text-overflow: inherit;\n  white-space: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3N0YXJ0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGFBQUE7QUFBSjtBQUVJO0VBRUUsV0FBQTtFQUNBLE9BQUE7QUFETjtBQUtBO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFGSjtBQUlJO0VBRUUsV0FBQTtFQUNBLGFBQUE7QUFITjtBQVFJO0VBRUcsbUJBQUE7QUFOUDtBQVVBOztFQUVJLFlBQUE7RUFDQSx1QkFBQTtBQVBKO0FBVUE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQVBKO0FBVUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FBUEo7QUFVQTtFQUNJLHNCQUFBO0VBQ0EsbUJBQUE7QUFQSiIsImZpbGUiOiJzdGFydC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5kaXZpZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIFxuICAgICY6YmVmb3JlLFxuICAgICY6YWZ0ZXIge1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIGZsZXg6IDE7XG4gICAgfVxufVxuICBcbi5saW5lIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbjogMWVtIC0xZW07XG4gICAgY29sb3I6ICMyYTJhMmE7XG4gICAgXG4gICAgJjpiZWZvcmUsXG4gICAgJjphZnRlciB7XG4gICAgICBoZWlnaHQ6IDFweDtcbiAgICAgIG1hcmdpbjogMCAxZW07XG4gICAgfVxufSBcblxuLm9uZS1saW5lIHtcbiAgICAmOmJlZm9yZSxcbiAgICAmOmFmdGVyIHtcbiAgICAgICBiYWNrZ3JvdW5kOiAjY2NjY2NjO1xuICAgIH1cbn1cblxuLmF1dGgtZm9ybSBpb24tZ3JpZCxcbi5hdXRoLWZvcm0gaW9uLXJvdyB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uYWxyZWFkeSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG5pbWcuY2VudGVyIHtcbiAgICBoZWlnaHQ6IDI1dmg7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi50b29sYmFyLXRpdGxlIHtcbiAgICB0ZXh0LW92ZXJmbG93OiBpbmhlcml0O1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gfVxuIl19 */");

/***/ }),

/***/ "ulMc":
/*!*********************************************!*\
  !*** ./src/app/pages/start/start.module.ts ***!
  \*********************************************/
/*! exports provided: StartPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartPageModule", function() { return StartPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _start_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./start-routing.module */ "Ryxb");
/* harmony import */ var _start_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./start.page */ "x2OB");







let StartPageModule = class StartPageModule {
};
StartPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _start_routing_module__WEBPACK_IMPORTED_MODULE_5__["StartPageRoutingModule"]
        ],
        declarations: [_start_page__WEBPACK_IMPORTED_MODULE_6__["StartPage"]]
    })
], StartPageModule);



/***/ }),

/***/ "x2OB":
/*!*******************************************!*\
  !*** ./src/app/pages/start/start.page.ts ***!
  \*******************************************/
/*! exports provided: StartPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartPage", function() { return StartPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_start_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./start.page.html */ "TXlj");
/* harmony import */ var _start_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./start.page.scss */ "f9I+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let StartPage = class StartPage {
    constructor(menuCtrl) {
        this.menuCtrl = menuCtrl;
        this.menuCtrl.enable(false);
    }
    ngOnInit() {
    }
};
StartPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] }
];
StartPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-start',
        template: _raw_loader_start_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_start_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], StartPage);



/***/ })

}]);
//# sourceMappingURL=pages-start-start-module-es2015.js.map