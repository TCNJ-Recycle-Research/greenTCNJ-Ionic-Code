(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-registration-registration-module"], {
    /***/
    "5jUK":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/registration/registration.page.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function jUK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar mode=\"ios\">\n    <ion-title>\n      Register\n    </ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/start\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <form [formGroup]=\"signupForm\" (ngSubmit)=\"trySignup()\">\n  <ion-slides [options]=\"{onlyExternal: true}\" pager=\"false\">\n\n  <ion-slide>\n  <ion-list>\n\n\n<!-- signupForm is the label that corresponds with the form in the ts files -->\n\n\n    <!-- Collects First Name and stores it into the form, this field is required -->\n    <br>\n    <ion-item lines=\"full\">\n      <ion-img alt=\"\" class=\"center\" src=\"../../assets/icon/icon.png\" vertical-align=\"middle\"></ion-img>\n      <ion-label position=\"floating\">First name</ion-label>\n      <ion-input  formControlName=\"firstName\" type=\"text\" required></ion-input>\n    </ion-item> \n\n    <!-- Error checking: checks to see if a valid name is entered (no numbers) and that it is less than 30 characters -->\n    <div class=\"validation-errors\">\n      <ng-container *ngFor=\"let validation of validation_messages.firstName\">\n        <div class=\"error-message\" *ngIf=\"signupForm.get('firstName').hasError(validation.type) && (signupForm.get('firstName').dirty || signupForm.get('firstName').touched)\">\n          {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>\n\n    <!-- Collects Last Name and stores it into the form, this field is required -->\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Last name</ion-label>\n      <ion-input  formControlName=\"lastName\" type=\"text\" required></ion-input>\n    </ion-item>\n\n    <!-- Error checking: checks to see if a valid name is entered (no numbers) and that it is less than 30 characters -->\n    <div class=\"validation-errors\">\n      <ng-container *ngFor=\"let validation of validation_messages.lastName\">\n        <div class=\"error-message\" *ngIf=\"signupForm.get('lastName').hasError(validation.type) && (signupForm.get('lastName').dirty || signupForm.get('lastName').touched)\">\n          {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>\n\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Email</ion-label>\n      <ion-input  formControlName=\"email\" type=\"text\" required></ion-input>\n    </ion-item>\n\n    <!-- Error checking: checks to see if a valid email is entered (correct email format aaa@bbb.ccc) and that it is less than 30 characters -->\n    <div class=\"validation-errors\">\n      <ng-container *ngFor=\"let validation of validation_messages.email\">\n        <div class=\"error-message\" *ngIf=\"signupForm.get('email').hasError(validation.type) && (signupForm.get('email').dirty || signupForm.get('email').touched)\">\n          {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>\n\n    <ion-item lines=\"full\">\n      <!-- <ion-label position=\"floating\">Password\n        <span *ngIf=\"formInputIsRequired('password')\" class=\"required\">Please chose an email separate from your TCNJ credentials</span>\n      </ion-label> -->\n\n      <ion-label position=\"floating\">Password\n        <span *ngIf=\"formInputIsRequired('password')\" class=\"required\" class=\"pwDisclaimer\">&#42;please do not use your TCNJ password</span>\n      </ion-label>\n      \n      <!-- <ion-label position=\"floating\" class=\"pwDisclaimer\">*separate from your TCNJ credentials</ion-label> -->\n      <ion-input  formControlName=\"password\" type=\"password\" required></ion-input>\n    </ion-item>\n\n  <!-- Error checking: checks to see if a password is entered as it is a required field -->\n    <div class=\"validation-errors\">\n      <ng-container *ngFor=\"let validation of validation_messages.password\">\n        <div class=\"error-message\" *ngIf=\"signupForm.get('password').hasError(validation.type) && (signupForm.get('password').dirty || signupForm.get('password').touched)\">\n          {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>\n\n    <ion-item lines=\"full\" type=\"submit\">\n      <ion-label position=\"floating\">Confirm Password</ion-label>\n      <ion-input  formControlName=\"passwordRepeat\" type=\"password\" required></ion-input>\n\n    </ion-item>\n\n\n    <div class=\"validation-errors\">\n      <div class=\"error-message\"\n        *ngIf=\"signupForm.get('passwordRepeat').hasError('passwordMismatch')\">\n      Passwords Don't Match\n      </div>\n    </div>\n\n    <ion-list> \n    \n      <ion-item type=\"submit\">\n        <ion-label>Type of User</ion-label>\n        <ion-select formControlName=\"userType\" placeholder=\"Select One\" type=\"submit\" required>\n          <ion-select-option aria-selected=\"false\" aria-controls=\"Student\" value=\"Student\">Student</ion-select-option>\n          <ion-select-option aria-selected=\"false\" aria-controls=\"Faculty\" value=\"Faculty\">Faculty</ion-select-option>\n          <ion-select-option aria-selected=\"false\" aria-controls=\"Staff\" value=\"Staff\">Staff</ion-select-option>\n          <ion-select-option aria-selected=\"false\" aria-controls=\"Visitor\" value=\"Visitor\">Visitor</ion-select-option>\n          <ion-select-option aria-selected=\"false\" aria-controls=\"Community Member\" value=\"Community Member\">Community Member</ion-select-option>\n          <ion-select-option aria-selected=\"false\" aria-controls=\"Outreach Partner\" value=\"Outreach Partner\">Outreach Partner</ion-select-option>\n        </ion-select>\n      </ion-item>\n    \n    </ion-list>\n\n    <div class=\"validation-errors\">\n      <ng-container *ngFor=\"let validation of validation_messages.userType\">\n        <div class=\"error-message\" *ngIf=\"signupForm.get('userType').hasError(validation.type) && (signupForm.get('userType').dirty || signupForm.get('userType').touched)\">\n          {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>\n\n    <ion-row>\n      <ion-col>\n\n        <div class=\"validation-errors\">\n          <span *ngIf=\"registrationFailure()\">Email is allready in use.</span>        \n        </div>\n      <!-- <ion-button type=\"submit\" color=\"danger\" expand=\"block\">Sign Up</ion-button> -->\n      <ion-button aria-label=\"Next\" [disabled]=\"!signupForm.valid\" [color]=\"isDisabled? 'danger':'primary'\" (click)=\"next()\">Next</ion-button>\n      <br>\n      <br>\n        \n      </ion-col>\n    </ion-row>\n    <!-- </form> -->\n\n  </ion-list>\n\n  </ion-slide>\n\n  <ion-slide>\n\n    <ion-list>\n      <br>\n      <ion-item lines=\"full\">\n        <ion-img class=\"center\" src=\"../../assets/RecyclingRoscoeSquare.png\" vertical-align=\"middle\"></ion-img>\n      </ion-item> \n      <br>\n\n\n      <ion-list-header>\n        <ion-label>\n          <h1> Please select the topics that interest you!</h1>\n        </ion-label>\n      </ion-list-header>\n      <br>\n    \n      <!-- <p>test</p>\n      <ion-item *ngFor=\"let entry of form\">\n        <ion-label>{{entry.val}}</ion-label>\n        <ion-checkbox slot=\"end\" [(ngModel)]=\"entry.isChecked\"></ion-checkbox>\n      </ion-item>\n      <p>test</p> -->\n\n      <ion-item>\n        <ion-checkbox slot=\"start\" (ionChange)=\"addValue($event)\"></ion-checkbox>\n        <ion-label>Recycling</ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-checkbox slot=\"start\" (ionChange)=\"addValue($event)\"></ion-checkbox>\n        <ion-label>Water Conservation</ion-label>\n      </ion-item>\n\n      <ion-item>\n      <ion-checkbox slot=\"start\" (ionChange)=\"addValue($event)\"></ion-checkbox>\n        <ion-label>Pollution Prevention</ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-checkbox  slot=\"start\" (ionChange)=\"addValue($event)\"></ion-checkbox>\n        <ion-label>Energy</ion-label>\n      </ion-item>\n      <br>\n\n    <!-- <ion-button [routerLink]=\"['/login']\" expand=\"block\" color=\"danger\">Submit</ion-button> -->\n\n    <ion-button aria-label=\"Sign up\" type=\"submit\" color=\"success\" expand=\"block\">Sign Up</ion-button>   \n\n    </ion-list>                   \n\n  </ion-slide>\n \n</ion-slides>\n</form> \n\n</ion-content>";
      /***/
    },

    /***/
    "Zsiw":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/registration/registration-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: RegistrationPageRoutingModule */

    /***/
    function Zsiw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegistrationPageRoutingModule", function () {
        return RegistrationPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _registration_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./registration.page */
      "yGlH");

      var routes = [{
        path: '',
        component: _registration_page__WEBPACK_IMPORTED_MODULE_3__["RegistrationPage"]
      }];

      var RegistrationPageRoutingModule = function RegistrationPageRoutingModule() {
        _classCallCheck(this, RegistrationPageRoutingModule);
      };

      RegistrationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], RegistrationPageRoutingModule);
      /***/
    },

    /***/
    "sc1d":
    /*!***********************************************************!*\
      !*** ./src/app/pages/registration/registration.page.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function sc1d(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".validation-errors {\n  color: red;\n  margin: 5px;\n  font-size: 75%;\n}\n\n.pwDisclaimer {\n  color: red;\n  font-size: 60%;\n}\n\nion-img.center {\n  height: 25vh;\n  width: auto;\n  display: block;\n  margin: 0 auto;\n}\n\n.slider {\n  position: absolute !important;\n  top: 0 !important;\n  bottom: 0 !important;\n  right: 0 !important;\n  left: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3JlZ2lzdHJhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLFVBQUE7RUFFQSxjQUFBO0FBQUo7O0FBR0E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FBQUo7O0FBWUE7RUFDSSw2QkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBVEoiLCJmaWxlIjoicmVnaXN0cmF0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi52YWxpZGF0aW9uLWVycm9yc3tcbiAgICBjb2xvcjogcmVkOyBcbiAgICBtYXJnaW46IDVweDtcbiAgICBmb250LXNpemU6IDc1JTtcbn1cblxuLnB3RGlzY2xhaW1lcntcbiAgICBjb2xvcjogcmVkOyBcbiAgIC8vIG1hcmdpbjogNXB4O1xuICAgIGZvbnQtc2l6ZTogNjAlO1xufVxuXG5pb24taW1nLmNlbnRlciB7XG4gICAgaGVpZ2h0OiAyNXZoO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuXG4vLyBpb24tc2xpZGVzLCBpb24tc2xpZGUge1xuLy8gICAgIC8vaGVpZ2h0OiAxMDAlO1xuLy8gICAgLy8gd2lkdGg6IGF1dG87XG4vLyAvLyAgICB3aWR0aDogMTAwdnc7XG4vLyAvLyAgICBoZWlnaHQ6IDEwMHZoO1xuLy8gICAgIC8vIC0tYnVsbGV0LWJhY2tncm91bmQtYWN0aXZlOiByZ2IoNCwgMjUyLCAxMjgpO1xuLy8gICAgIC8vIC0tYnVsbGV0LWJhY2tncm91bmQ6ICMwMDA7XG4vLyB9XG5cbi5zbGlkZXJ7XG4gICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gICAgdG9wOiAwICFpbXBvcnRhbnQ7XG4gICAgYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gICAgcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgICBsZWZ0OiAwICFpbXBvcnRhbnQ7XG4gIH1cbiJdfQ== */";
      /***/
    },

    /***/
    "yGlH":
    /*!*********************************************************!*\
      !*** ./src/app/pages/registration/registration.page.ts ***!
      \*********************************************************/

    /*! exports provided: RegistrationPage */

    /***/
    function yGlH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegistrationPage", function () {
        return RegistrationPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_registration_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./registration.page.html */
      "5jUK");
      /* harmony import */


      var _registration_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./registration.page.scss */
      "sc1d");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_custom_validation_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/custom-validation.service */
      "xHyB");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var RegistrationPage = /*#__PURE__*/function () {
        function RegistrationPage(router, http, formBuilder, customValidator, alertCtrl) {
          _classCallCheck(this, RegistrationPage);

          this.router = router;
          this.http = http;
          this.formBuilder = formBuilder;
          this.customValidator = customValidator;
          this.alertCtrl = alertCtrl;
          this.invalidRegistration = false;
          this.userVerified = false; // thses are currently not being stored anywhere they are just in place to select after registration, will connect to db next semester 

          this.form = [{
            val: 'Recycling',
            isChecked: false
          }, {
            val: 'Water Conservation',
            isChecked: false
          }, {
            val: 'Pollution Prevention',
            isChecked: false
          }, {
            val: 'Energy',
            isChecked: false
          }]; // responsible for printing error messages to the screen based on validator 

          this.validation_messages = {
            'firstName': [{
              type: 'maxlength',
              message: 'Your first name cannot be more than 30 characters long.'
            }, {
              type: 'required',
              message: 'A first name is required.'
            }, {
              type: 'pattern',
              message: 'You must enter a valid first name'
            }],
            'lastName': [{
              type: 'maxlength',
              message: 'Your last name cannot be more than 30 characters long.'
            }, {
              type: 'required',
              message: 'A last name is required.'
            }, {
              type: 'pattern',
              message: 'You must enter a valid last name'
            }],
            'email': [{
              type: 'maxlength',
              message: 'Your email cannot be more than 30 characters long.'
            }, {
              type: 'required',
              message: 'An email is required.'
            }, {
              type: 'pattern',
              message: 'You must enter a valid email.'
            }],
            'password': [{
              type: 'minlength',
              message: 'Your password must be at least 8 characters long.'
            }, {
              type: 'pattern',
              message: 'Your password must include 1 uppercase letter, 1 lowercase letter, and one number'
            }, {
              type: 'maxlength',
              message: 'Your last name cannot be more than 30 characters long.'
            }, {
              type: 'required',
              message: 'A password is required.'
            }],
            'passwordRepeat': [//{ type: 'required', message: 'A password is required.' }
            ],
            'userType': [{
              type: 'required',
              message: 'A user type is required.'
            }]
          };
          this.signupForm = formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(30), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[a-zA-Z ]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(30), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[a-zA-Z ]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(30), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            // https://stackoverflow.com/questions/48350506/how-to-validate-password-strength-with-angular-5-validator-pattern
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(30), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('(?=\\D*\\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}'), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            passwordRepeat: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(30), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            userType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])] // userInterests: [
            //   { val: 'Recycling', isChecked: false },
            //   { val: 'Water Conservation', isChecked: false },
            //   { val: 'Pollution Prevention', isChecked: false },
            //   { val: 'Energy', isChecked: false }
            // ]

          }, {
            validator: this.customValidator.passwordMatchValidator('password', 'passwordRepeat')
          }); // initialized to all 0s for false

          this.temp = {
            recycling: 0,
            water: 0,
            pollution: 0,
            energy: 0
          };
          this.buttonDisabled = true; // this.slides.lockSwipeToNext(true); 

          if (!this.signupForm.valid) {
            console.log("INVALID");
            this.buttonDisabled = true;
          } else {
            console.log("VALID");
            this.buttonDisabled = false;
          }
        }

        _createClass(RegistrationPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "trySignup",
          value: function trySignup() {
            var _this = this;

            if (!this.signupForm.valid) {
              console.log("INVALID");
              this.buttonDisabled = true;
            } else {
              console.log("VALID");
              this.buttonDisabled = false;
              var email = this.signupForm.value['email'];
              var pwd = this.signupForm.value['password'];
              var pwdRepeat = this.signupForm.value['passwordRepeat'];
              var first = this.signupForm.value['firstName'];
              var last = this.signupForm.value['lastName'];
              var type = this.signupForm.value['userType'];
              var obj = {
                func: "add_user2",
                email: email,
                password: pwd,
                passwordRepeat: pwdRepeat,
                firstName: first,
                lastName: last,
                userType: type,
                userInterests: this.temp
              }; //checking to see if user exists in users table (verified users)

              this.http.post("https://recycle.hpc.tcnj.edu/php/users-handler.php", JSON.stringify(obj)).subscribe(function (data) {
                var result = data;

                if (result["addSuccess"]) {
                  // output to user it succeeded and move to next page
                  console.log("Signup SUCCESS");
                  _this.invalidRegistration = false;

                  _this.successAlert(email);

                  _this.navigateToLogin();
                } else if (result["missingInput"]) {
                  console.log("Missing Input");

                  _this.failAlert("ERROR: Server Missing Input");

                  _this.invalidRegistration = true;
                  _this.buttonDisabled = true;
                } else if (result["passwordMismatch"]) {
                  console.log("passwords didnt match");

                  _this.failAlert("ERROR: Passwords do not match");

                  _this.invalidRegistration = true;
                  _this.buttonDisabled = true;
                } else if (result["userExists"]) {
                  _this.userVerified = true;
                  console.log("verified user exists");

                  _this.failAlert("ERROR: A verified account with that email already exists! If you can't remember your password, reset it on the sign in page.");

                  _this.invalidRegistration = true;
                  _this.buttonDisabled = true;
                } else if (result["unverifiedExists"]) {
                  console.log("unverified user exists");

                  _this.failAlert("ERROR: An unverified account with that email already exists! Check your inbox for the verification email.");

                  _this.invalidRegistration = true;
                  _this.buttonDisabled = true;
                } else {
                  // dont move to next page and output error message "Email or password entered was incorrect"
                  console.log("Signup failure on server");

                  _this.failAlert("ERROR: Signup failure. If this issue persists, please contact an administrator.");

                  _this.invalidRegistration = true;
                }
              });
            }
          }
        }, {
          key: "successAlert",
          value: function successAlert(email) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var obj, alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      obj = {
                        func: "generate_confirmation",
                        email: email
                      };
                      this.http.post("https://recycle.hpc.tcnj.edu/php/verify-email-handler.php", JSON.stringify(obj)).subscribe(function (data) {
                        console.log("sent confirmation email");
                      });
                      _context.next = 4;
                      return this.alertCtrl.create({
                        header: 'Registration Success!',
                        message: 'Please verify your account with the email we sent you!',
                        buttons: ['OK']
                      });

                    case 4:
                      alert = _context.sent;
                      _context.next = 7;
                      return alert.present();

                    case 7:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "failAlert",
          value: function failAlert(msg) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alertCtrl.create({
                        header: 'Registration Failed',
                        message: msg,
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context2.sent;
                      _context2.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "setRecycleInterest",
          value: function setRecycleInterest(x) {
            if (x) {
              this.temp.recycling = 1;
            } else {
              this.temp.recycling = 0;
            }
          }
        }, {
          key: "setWaterInterest",
          value: function setWaterInterest(x) {
            if (x) {
              this.temp.water = 1;
            } else {
              this.temp.water = 0;
            }
          }
        }, {
          key: "setPollutionInterest",
          value: function setPollutionInterest(x) {
            if (x) {
              this.temp.pollution = 1;
            } else {
              this.temp.pollution = 0;
            }
          }
        }, {
          key: "setEnergyInterest",
          value: function setEnergyInterest(x) {
            if (x) {
              this.temp.energy = 1;
            } else {
              this.temp.energy = 0;
            }
          }
        }, {
          key: "navigateToLogin",
          value: function navigateToLogin() {
            this.router.navigateByUrl('/login');
          }
        }, {
          key: "registrationFailure",
          value: function registrationFailure() {
            return this.invalidRegistration;
          }
        }, {
          key: "formInputIsRequired",
          value: function formInputIsRequired(formInput) {
            if (this.signupForm.controls[formInput]) {
              if (this.signupForm.controls[formInput].hasError('required')) {
                return true;
              }
            }

            return false;
          }
        }, {
          key: "next",
          value: function next() {
            if (this.signupForm.valid) {
              this.slides.slideNext();
            }
          }
        }, {
          key: "fillForm",
          value: function fillForm() {
            if (this.signupForm.valid) {
              this.slides.lockSwipeToNext(false);
            } else {
              this.slides.lockSwipeToNext(true);
            }
          }
        }, {
          key: "addValue",
          value: function addValue(e) {
            if (e.currentTarget.name == "ion-cb-0") {
              this.setRecycleInterest(e.currentTarget.checked);
            }

            if (e.currentTarget.name == "ion-cb-1") {
              this.setWaterInterest(e.currentTarget.checked);
            }

            if (e.currentTarget.name == "ion-cb-2") {
              this.setPollutionInterest(e.currentTarget.checked);
            }

            if (e.currentTarget.name == "ion-cb-3") {
              this.setEnergyInterest(e.currentTarget.checked);
            }
          }
        }]);

        return RegistrationPage;
      }();

      RegistrationPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: src_app_services_custom_validation_service__WEBPACK_IMPORTED_MODULE_7__["CustomValidationService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"]
        }];
      };

      RegistrationPage.propDecorators = {
        slides: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonSlides"]]
        }]
      };
      RegistrationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-registration',
        template: _raw_loader_registration_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_registration_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], RegistrationPage);
      /***/
    },

    /***/
    "z6fL":
    /*!***********************************************************!*\
      !*** ./src/app/pages/registration/registration.module.ts ***!
      \***********************************************************/

    /*! exports provided: RegistrationPageModule */

    /***/
    function z6fL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegistrationPageModule", function () {
        return RegistrationPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _registration_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./registration-routing.module */
      "Zsiw");
      /* harmony import */


      var _registration_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./registration.page */
      "yGlH");

      var RegistrationPageModule = function RegistrationPageModule() {
        _classCallCheck(this, RegistrationPageModule);
      };

      RegistrationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _registration_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegistrationPageRoutingModule"]],
        declarations: [_registration_page__WEBPACK_IMPORTED_MODULE_6__["RegistrationPage"]]
      })], RegistrationPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-registration-registration-module-es5.js.map