(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "F4UR":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "aTZN");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "bP1B");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "e8h1");








let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["IonicStorageModule"].forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "H+1c":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".validation-errors {\n  color: red;\n  margin: 10px;\n  font-size: 75%;\n}\n\nimg.center {\n  height: 25vh;\n  width: auto;\n  display: block;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQUNKIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi52YWxpZGF0aW9uLWVycm9yc3tcbiAgICBjb2xvcjogcmVkOyBcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgZm9udC1zaXplOiA3NSU7XG59XG5cbmltZy5jZW50ZXIge1xuICAgIGhlaWdodDogMjV2aDtcbiAgICB3aWR0aDogYXV0bztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDAgYXV0bztcbn1cbiJdfQ== */");

/***/ }),

/***/ "TuYN":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- This page is responsible for the login page -->\n<ion-header>\n  <ion-toolbar mode=\"ios\">\n    <ion-title >\n      Log In\n    </ion-title>\n    <!-- has a back button to be able to go back to the start page in the event that they need to register rather than sign up -->\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/start\"></ion-back-button>\n    </ion-buttons>\n    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<!-- This is added to space out the image so it is in the center of the screen -->\n<ion-grid>\n  <ion-row>\n      <ion-col>\n        <!-- <ion-img [src]=\"assets/logo\" alt=\"logo-image\"></ion-img> -->\n        <img alt=\"\" class=\"center\" src=\"../../assets/icon/icon.png\" vertical-align=\"middle\">\n      </ion-col>\n </ion-row>\n</ion-grid>\n\n  <!-- The required elements will not proceed unless they are filled out  -->\n  <form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\n\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Email\n        <span *ngIf=\"formInputIsRequired('email')\" class=\"required\">&#42;</span>\n      </ion-label>\n      <ion-input formControlName=\"email\" type=\"text\" required></ion-input>\n    </ion-item>\n\n    <div class=\"validation-errors\">\n      <ng-container *ngFor=\"let validation of validation_messages.email\">\n        <div class=\"error-message\" *ngIf=\"loginForm.get('email').hasError(validation.type) && (loginForm.get('email').dirty || loginForm.get('email').touched)\">\n          {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>\n\n    <!-- type password allows it to appear encrypted and not be visible upon entering -->\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Password</ion-label>\n      <ion-input formControlName=\"password\" type=\"password\" required></ion-input>\n    </ion-item>\n\n    <div class=\"validation-errors\">\n      <ng-container *ngFor=\"let validation of validation_messages.password\">\n        <div class=\"error-message\" *ngIf=\"loginForm.get('password').hasError(validation.type) && (loginForm.get('password').dirty || loginForm.get('password').touched)\">\n          {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>\n\n    <ion-row>\n      <ion-col>\n        <div class=\"validation-errors\">\n          <span *ngIf=\"loginFailure()\">Email or password entered was incorrect</span>        \n        </div>\n        <ion-button aria-label=\"Login\" type=\"submit\" color=\"success\" expand=\"block\" (click)=\"checkValidLogin()\">Login</ion-button>\n      </ion-col>\n    </ion-row>\n\n    <ion-item lines=\"none\" class=\"ion-no-padding\">\n      <a style=\"margin: 0 auto; padding: 0 auto;\" [routerLink]=\"['/recover-password']\" class=\"small-text\">Forgot Password?</a>\n    </ion-item>\n\n  </form>\n</ion-content>\n");

/***/ }),

/***/ "aTZN":
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "bP1B");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "bP1B":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.page.html */ "TuYN");
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page.scss */ "H+1c");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../services/authentication.service */ "ej43");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/storage */ "e8h1");












let LoginPage = class LoginPage {
    constructor(storage, menuCtrl, alertController, authService, router, http, navCtrl, formBuilder, loadingController) {
        this.storage = storage;
        this.menuCtrl = menuCtrl;
        this.alertController = alertController;
        this.authService = authService;
        this.router = router;
        this.http = http;
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.loadingController = loadingController;
        // form input 
        this.emailInput = "";
        this.passwordInput = "";
        // boolean values for login checks 
        this.invalidLogin = false;
        this.pageLoaded = false;
        this.wrongInput = false;
        this.correctInput = false;
        this.missingInput = false;
        this.canLogin = false;
        // responsible for printing error messages to the screen based on validator 
        this.validation_messages = {
            'email': [
                { type: 'maxlength', message: 'Your email cannot be more than 30 characters long.' },
                { type: 'pattern', message: 'You must enter a valid email.' }
            ],
            'password': [
                { type: 'required', message: 'A password is required.' }
            ]
        };
        this.loginForm = formBuilder.group({
            // Require validators for the input fields so we can quickly tell them if their input is valid, the patten string is what characters
            // are allowed in the field and for email it makes sure there is a @ character and a domain field like .com
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(30), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(30), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])]
        });
        this.menuCtrl.enable(false);
    }
    checkValidLogin() {
        if (!this.loginForm.valid) {
            console.log("INVALID");
        }
        else {
            console.log("VALID");
            // Find a way to get email and password input from user
            var obj = { func: "try_login", email: this.loginForm.value['email'], password: this.loginForm.value['password'] };
            this.http.post("https://recycle.hpc.tcnj.edu/php/users-handler.php", JSON.stringify(obj)).subscribe(data => {
                var result = data;
                if (result["loginSuccess"]) {
                    this.invalidLogin = false;
                    // this is used to store user info within the app, stores userID, Name, type, and email 
                    this.storage.set('userID', result['userInfo']['userID']);
                    this.storage.set('userName', result['userInfo']['userFirstName']);
                    this.storage.set('userType', result['userInfo']['userType']);
                    this.storage.set('userEmail', result["userInfo"]["userEmail"]);
                    // used to set user interests within the app
                    this.storage.set('userRecyclingInterest', result["userInfo"]["recyclingInterest"]);
                    this.storage.set('userWaterInterest', result["userInfo"]["waterInterest"]);
                    this.storage.set('userPollutionInterest', result["userInfo"]["pollutionInterest"]);
                    this.storage.set('userEnergyInterest', result["userInfo"]["energyInterest"]);
                    this.invalidLogin = false;
                    this.correctInput = true;
                    this.missingInput = false;
                    this.wrongInput = false;
                }
                else if (result["missingInputs"]) {
                    // output error message of missing inputs
                    console.log("Missing Input");
                    this.invalidLogin = true;
                    this.correctInput = false;
                    this.missingInput = true;
                    this.wrongInput = false;
                }
                else {
                    // dont move to next page and output error message "Email or password entered was incorrect"
                    console.log("Email or password was incorrect");
                    this.invalidLogin = true;
                    this.correctInput = false;
                    this.missingInput = false;
                    this.wrongInput = true;
                }
            });
        }
        this.canLogin = true;
    }
    //
    login() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create();
            yield loading.present();
            if (!this.loginForm.valid && this.canLogin) {
                console.log("INVALID");
                this.authService.login(this.loginForm.value).subscribe((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    yield loading.dismiss();
                    const alert = yield this.alertController.create({
                        header: 'Login failed',
                        message: 'Please enter valid fields.',
                        buttons: ['OK'],
                    });
                    yield alert.present();
                }));
            }
            else {
                console.log("VALID");
                // valid login
                if (this.loginSuccess() && !this.missingValues() && !this.wrongCredientals()) {
                    this.authService.login(this.loginForm.value).subscribe((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        loading.dismiss();
                        this.invalidLogin = false;
                        this.navigateToHomePage();
                    }));
                    this.correctInput = true;
                    this.missingInput = false;
                    this.wrongInput = false;
                    // missing input  
                }
                else if (!this.loginSuccess() && this.missingValues() && !this.wrongCredientals()) {
                    console.log("Missing Input");
                    this.authService.login(this.loginForm.value).subscribe((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        yield loading.dismiss();
                        const alert = yield this.alertController.create({
                            header: 'Login failed',
                            message: 'You are missing input.',
                            buttons: ['OK'],
                        });
                        yield alert.present();
                    }));
                    this.correctInput = false;
                    this.missingInput = true;
                    this.wrongInput = false;
                    // wrong credentials 
                }
                else if (!this.loginSuccess() && !this.missingValues() && this.wrongCredientals()) {
                    console.log("Email or password was incorrect");
                    this.authService.login(this.loginForm.value).subscribe((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        yield loading.dismiss();
                        const alert = yield this.alertController.create({
                            header: 'Login failed',
                            message: 'Your email or password was incorrect',
                            buttons: ['OK'],
                        });
                        yield alert.present();
                    }));
                    this.correctInput = false;
                    this.missingInput = false;
                    this.wrongInput = true;
                    // should never resch here   
                }
                else {
                    loading.dismiss();
                }
            }
        });
    }
    // function to route to the home page after logging in 
    navigateToHomePage() {
        this.pageLoaded = true;
        this.menuCtrl.enable(true);
        this.router.navigate(['/home'], { replaceUrl: true });
        this.router.navigateByUrl('/home').then(success => console.log(`routing status: ${success}`));
    }
    // used to add * to email and it is removed once something is entered
    formInputIsRequired(formInput) {
        if (this.loginForm.controls[formInput]) {
            if (this.loginForm.controls[formInput].hasError('required')) {
                return true;
            }
        }
        return false;
    }
    // boolean return values
    loginFailure() {
        return this.invalidLogin;
    }
    wrongCredientals() {
        return this.wrongInput;
    }
    loginSuccess() {
        return this.correctInput;
    }
    missingValues() {
        return this.missingInput;
    }
};
LoginPage.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_9__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module-es2015.js.map