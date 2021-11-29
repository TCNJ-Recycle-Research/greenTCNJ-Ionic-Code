(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-news-modal-news-modal-module"],{

/***/ "uFFq":
/*!*******************************************************!*\
  !*** ./src/app/pages/news-modal/news-modal.module.ts ***!
  \*******************************************************/
/*! exports provided: NewsModalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsModalPageModule", function() { return NewsModalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _news_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./news-modal-routing.module */ "yiYv");
/* harmony import */ var _news_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./news-modal.page */ "wcIy");







let NewsModalPageModule = class NewsModalPageModule {
};
NewsModalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _news_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__["NewsModalPageRoutingModule"]
        ],
        declarations: [_news_modal_page__WEBPACK_IMPORTED_MODULE_6__["NewsModalPage"]]
    })
], NewsModalPageModule);



/***/ }),

/***/ "yiYv":
/*!***************************************************************!*\
  !*** ./src/app/pages/news-modal/news-modal-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: NewsModalPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsModalPageRoutingModule", function() { return NewsModalPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _news_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./news-modal.page */ "wcIy");




const routes = [
    {
        path: '',
        component: _news_modal_page__WEBPACK_IMPORTED_MODULE_3__["NewsModalPage"]
    }
];
let NewsModalPageRoutingModule = class NewsModalPageRoutingModule {
};
NewsModalPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NewsModalPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=pages-news-modal-news-modal-module-es2015.js.map