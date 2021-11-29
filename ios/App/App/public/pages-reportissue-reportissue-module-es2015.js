(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-reportissue-reportissue-module"],{

/***/ "6mQJ":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/reportissue/reportissue.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar mode=\"ios\">\n    <ion-title>\n      <div class=\"ion-text-wrap\">\n        Help/Report an Issue\n      </div>\n    </ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu =\"main-menu\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  \n\n  <form [formGroup]=\"wordForm\" (ngSubmit)=\"submitWord()\">\n    <ion-item lines=\"full\">\n      <br>\n      <br>\n      <ion-text>Having issues within the application or with green initiatives on campus?  Submit your reports here.</ion-text>\n\n      <br>\n      <ion-label position=\"floating\">Report Issue\n        <span *ngIf=\"formInputIsRequired('word')\" class=\"required\">&#42;</span>\n      </ion-label>\n      <ion-textarea formControlName=\"word\" type=\"text\" autoGrow=\"true\" required></ion-textarea>\n    </ion-item>\n\n    <div class=\"validation-errors\">\n      <ng-container *ngFor=\"let validation of validation_messages.word\">\n        <div class=\"error-message\" *ngIf=\"wordForm.get('word').hasError(validation.type) && (wordForm.get('word').dirty || wordForm.get('word').touched)\">\n          {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>\n\n    <ion-row>\n      <ion-col>\n        <ion-button aria-label=\"Submit\" type=\"submit\" color=\"success\" expand=\"block\">Submit</ion-button>\n\n        <div class=\"validation-confirmation\">\n          <span *ngIf=\"wordFailure()\">Your report has been submitted!</span>        \n        </div>\n\n      </ion-col>\n    </ion-row>\n  </form>\n\n\n</ion-content>\n");

/***/ }),

/***/ "B8y7":
/*!*****************************************************************!*\
  !*** ./src/app/pages/reportissue/reportissue-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: ReportissuePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportissuePageRoutingModule", function() { return ReportissuePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _reportissue_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reportissue.page */ "y7/k");




const routes = [
    {
        path: '',
        component: _reportissue_page__WEBPACK_IMPORTED_MODULE_3__["ReportissuePage"]
    }
];
let ReportissuePageRoutingModule = class ReportissuePageRoutingModule {
};
ReportissuePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ReportissuePageRoutingModule);



/***/ }),

/***/ "UOYY":
/*!*********************************************************!*\
  !*** ./src/app/pages/reportissue/reportissue.module.ts ***!
  \*********************************************************/
/*! exports provided: ReportissuePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportissuePageModule", function() { return ReportissuePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _reportissue_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reportissue-routing.module */ "B8y7");
/* harmony import */ var _reportissue_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reportissue.page */ "y7/k");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "e8h1");









let ReportissuePageModule = class ReportissuePageModule {
};
ReportissuePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["IonicStorageModule"].forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _reportissue_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReportissuePageRoutingModule"]
        ],
        declarations: [_reportissue_page__WEBPACK_IMPORTED_MODULE_6__["ReportissuePage"]]
    })
], ReportissuePageModule);



/***/ }),

/***/ "uU6z":
/*!*********************************************************!*\
  !*** ./src/app/pages/reportissue/reportissue.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".validation-errors {\n  color: red;\n  margin: 10px;\n  font-size: 75%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3JlcG9ydGlzc3VlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQUNKIiwiZmlsZSI6InJlcG9ydGlzc3VlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi52YWxpZGF0aW9uLWVycm9yc3tcbiAgICBjb2xvcjogcmVkOyBcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgZm9udC1zaXplOiA3NSU7XG59Il19 */");

/***/ }),

/***/ "y7/k":
/*!*******************************************************!*\
  !*** ./src/app/pages/reportissue/reportissue.page.ts ***!
  \*******************************************************/
/*! exports provided: ReportissuePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportissuePage", function() { return ReportissuePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_reportissue_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./reportissue.page.html */ "6mQJ");
/* harmony import */ var _reportissue_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reportissue.page.scss */ "uU6z");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "e8h1");








let ReportissuePage = class ReportissuePage {
    // firstName: new FormControl()
    constructor(router, http, formBuilder, storage) {
        this.router = router;
        this.http = http;
        this.formBuilder = formBuilder;
        this.storage = storage;
        this.emailInput = "";
        this.wordSent = false;
        this.today = new Date(Date.now());
        // responsible for printing error messages to the screen based on validator 
        this.validation_messages = {
            'word': [
                { type: 'minlength', message: 'Your suggested material must be at least 2 characters long.' },
                { type: 'maxlength', message: 'Your suggested material must be less than 200 characters long.' },
                { type: 'required', message: 'You must enter a word to submit.' }
            ]
        };
        this.wordForm = formBuilder.group({
            // Require validators for the input fields so we can quickly tell them if their input is valid, the patten string is what characters
            // are allowed in the field and for email it makes sure there is a @ character and a domain field like .com
            word: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(200), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            description: ['']
        });
        storage.get('userEmail').then((val) => {
            this.usrEmail = val;
        });
    }
    ngOnInit() {
    }
    submitWord() {
        if (!this.wordForm.valid) {
            console.log("INVALID");
        }
        else {
            console.log("VALID");
            this.wordSent = true;
            // Find a way to get email and password input from user
            var obj = { func: "add_issue", userEmail: this.usrEmail, issueDescription: this.wordForm.value['word'] };
            this.http.post("https://recycle.hpc.tcnj.edu/php/issues-handler.php", JSON.stringify(obj)).subscribe(data => {
                var result = data;
                if (result['missingInput']) {
                    // output to user it succeeded and move to next page
                    console.log("missing Input");
                    this.wordSent = false;
                }
                else {
                    this.wordSent = true;
                    console.log("word submitted");
                    this.wordForm.reset();
                }
            });
        }
    }
    wordFailure() {
        return this.wordSent;
    }
    formInputIsRequired(formInput) {
        if (this.wordForm.controls[formInput]) {
            if (this.wordForm.controls[formInput].hasError('required')) {
                return true;
            }
        }
        return false;
    }
};
ReportissuePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"] }
];
ReportissuePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-reportissue',
        template: _raw_loader_reportissue_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_reportissue_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ReportissuePage);



/***/ })

}]);
//# sourceMappingURL=pages-reportissue-reportissue-module-es2015.js.map