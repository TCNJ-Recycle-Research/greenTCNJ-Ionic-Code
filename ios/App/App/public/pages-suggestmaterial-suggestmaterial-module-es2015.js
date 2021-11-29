(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-suggestmaterial-suggestmaterial-module"],{

/***/ "3gKz":
/*!*****************************************************************!*\
  !*** ./src/app/pages/suggestmaterial/suggestmaterial.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".validation-errors {\n  color: red;\n  margin: 10px;\n  font-size: 75%;\n}\n\n.validation-confirmation {\n  color: green;\n  margin: 10px;\n  font-size: 75%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3N1Z2dlc3RtYXRlcmlhbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQUNKIiwiZmlsZSI6InN1Z2dlc3RtYXRlcmlhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmFsaWRhdGlvbi1lcnJvcnN7XG4gICAgY29sb3I6IHJlZDsgXG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogNzUlO1xufVxuXG4udmFsaWRhdGlvbi1jb25maXJtYXRpb257XG4gICAgY29sb3I6IGdyZWVuOyBcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgZm9udC1zaXplOiA3NSU7XG59Il19 */");

/***/ }),

/***/ "EpqJ":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/suggestmaterial/suggestmaterial.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/whatgoeswhere\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      <div class=\"ion-text-wrap\">\n        Suggest New Material\n      </div>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  \n\n  <form [formGroup]=\"wordForm\" (ngSubmit)=\"submitWord()\">\n    <ion-item lines=\"full\">\n      <br>\n      <br>\n      <ion-text>Suggest a material to be added to the application, an admin will review your suggestion.  A material description is optional if you wish to include one.</ion-text>\n\n      <br>\n      <ion-label position=\"floating\">Suggested Material\n        <span *ngIf=\"formInputIsRequired('word')\" class=\"required\">&#42;</span>\n      </ion-label>\n      <ion-input formControlName=\"word\" type=\"text\" autoGrow=\"true\" required></ion-input>\n      \n    </ion-item>\n\n    <div class=\"validation-errors\">\n      <ng-container *ngFor=\"let validation of validation_messages.word\">\n        <div class=\"error-message\" *ngIf=\"wordForm.get('word').hasError(validation.type) && (wordForm.get('word').dirty || wordForm.get('word').touched)\">\n          {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>\n\n    <ion-item lines=\"full\">\n      \n      <ion-label position=\"floating\">Material Description</ion-label>\n      <ion-textarea formControlName=\"description\" type=\"text\" autoGrow=\"true\"></ion-textarea>\n    </ion-item>\n\n    <br>\n    \n    <ion-row>\n      <ion-col>\n        <ion-button aria-label=\"submit\" type=\"submit\" color=\"success\" expand=\"block\">Submit</ion-button>\n\n        <div class=\"validation-confirmation\">\n          <span *ngIf=\"wordFailure()\">Your word has been submitted!</span>        \n        </div>\n\n      </ion-col>\n    </ion-row>\n\n\n    <!-- <ion-row>\n      <ion-col>\n        <small>\n          *Please provide your word upon registration.\n        </small>         \n      </ion-col>\n    </ion-row> -->\n\n  </form>\n</ion-content>\n");

/***/ }),

/***/ "T7Tf":
/*!***************************************************************!*\
  !*** ./src/app/pages/suggestmaterial/suggestmaterial.page.ts ***!
  \***************************************************************/
/*! exports provided: SuggestmaterialPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuggestmaterialPage", function() { return SuggestmaterialPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_suggestmaterial_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./suggestmaterial.page.html */ "EpqJ");
/* harmony import */ var _suggestmaterial_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./suggestmaterial.page.scss */ "3gKz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "e8h1");








let SuggestmaterialPage = class SuggestmaterialPage {
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
                { type: 'maxlength', message: 'Your suggested material must be less than 30 characters long.' },
                { type: 'required', message: 'You must enter a word to submit.' }
            ]
        };
        this.wordForm = formBuilder.group({
            // Require validators for the input fields so we can quickly tell them if their input is valid, the patten string is what characters
            // are allowed in the field and for email it makes sure there is a @ character and a domain field like .com
            word: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(30), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            description: ['']
        });
        storage.get('userEmail').then((val) => {
            console.log('Your email is', val);
            this.usrEmail = val;
        });
    }
    submitWord() {
        if (!this.wordForm.valid) {
            console.log("INVALID");
        }
        else {
            console.log("VALID");
            this.wordSent = true;
            // Find a way to get email and password input from user
            var obj = { func: "add_request", requestMaterial: this.wordForm.value['word'], requestDescription: this.wordForm.value['description'], userEmail: this.usrEmail };
            this.http.post("https://recycle.hpc.tcnj.edu/php/material-requests-handler.php", JSON.stringify(obj)).subscribe(data => {
                var result = data;
                if (result['missingInput']) {
                    // output to user it succeeded and move to next page
                    this.wordSent = false;
                }
                else {
                    this.wordSent = true;
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
SuggestmaterialPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"] }
];
SuggestmaterialPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-suggestmaterial',
        template: _raw_loader_suggestmaterial_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_suggestmaterial_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SuggestmaterialPage);



/***/ }),

/***/ "peSJ":
/*!*****************************************************************!*\
  !*** ./src/app/pages/suggestmaterial/suggestmaterial.module.ts ***!
  \*****************************************************************/
/*! exports provided: SuggestmaterialPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuggestmaterialPageModule", function() { return SuggestmaterialPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _suggestmaterial_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./suggestmaterial-routing.module */ "s4Xr");
/* harmony import */ var _suggestmaterial_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./suggestmaterial.page */ "T7Tf");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "e8h1");









let SuggestmaterialPageModule = class SuggestmaterialPageModule {
};
SuggestmaterialPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["IonicStorageModule"].forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _suggestmaterial_routing_module__WEBPACK_IMPORTED_MODULE_5__["SuggestmaterialPageRoutingModule"]
        ],
        declarations: [_suggestmaterial_page__WEBPACK_IMPORTED_MODULE_6__["SuggestmaterialPage"]]
    })
], SuggestmaterialPageModule);



/***/ }),

/***/ "s4Xr":
/*!*************************************************************************!*\
  !*** ./src/app/pages/suggestmaterial/suggestmaterial-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: SuggestmaterialPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuggestmaterialPageRoutingModule", function() { return SuggestmaterialPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _suggestmaterial_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./suggestmaterial.page */ "T7Tf");




const routes = [
    {
        path: '',
        component: _suggestmaterial_page__WEBPACK_IMPORTED_MODULE_3__["SuggestmaterialPage"]
    }
];
let SuggestmaterialPageRoutingModule = class SuggestmaterialPageRoutingModule {
};
SuggestmaterialPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SuggestmaterialPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=pages-suggestmaterial-suggestmaterial-module-es2015.js.map