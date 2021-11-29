(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-reset-password-reset-password-module"], {
    /***/
    "0nA7":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/reset-password/reset-password-routing.module.ts ***!
      \***********************************************************************/

    /*! exports provided: ResetPasswordPageRoutingModule */

    /***/
    function nA7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResetPasswordPageRoutingModule", function () {
        return ResetPasswordPageRoutingModule;
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


      var _reset_password_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./reset-password.page */
      "dBPC");

      var routes = [{
        path: '',
        component: _reset_password_page__WEBPACK_IMPORTED_MODULE_3__["ResetPasswordPage"]
      }];

      var ResetPasswordPageRoutingModule = function ResetPasswordPageRoutingModule() {
        _classCallCheck(this, ResetPasswordPageRoutingModule);
      };

      ResetPasswordPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ResetPasswordPageRoutingModule);
      /***/
    },

    /***/
    "5AxV":
    /*!***************************************************************!*\
      !*** ./src/app/pages/reset-password/reset-password.page.scss ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function AxV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".validation-errors {\n  color: red;\n  margin: 10px;\n  font-size: 75%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Jlc2V0LXBhc3N3b3JkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQUNKIiwiZmlsZSI6InJlc2V0LXBhc3N3b3JkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi52YWxpZGF0aW9uLWVycm9yc3tcbiAgICBjb2xvcjogcmVkOyBcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgZm9udC1zaXplOiA3NSU7XG59Il19 */";
      /***/
    },

    /***/
    "9nUT":
    /*!***************************************************************!*\
      !*** ./src/app/pages/reset-password/reset-password.module.ts ***!
      \***************************************************************/

    /*! exports provided: ResetPasswordPageModule */

    /***/
    function nUT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResetPasswordPageModule", function () {
        return ResetPasswordPageModule;
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


      var _reset_password_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./reset-password-routing.module */
      "0nA7");
      /* harmony import */


      var _reset_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./reset-password.page */
      "dBPC");

      var ResetPasswordPageModule = function ResetPasswordPageModule() {
        _classCallCheck(this, ResetPasswordPageModule);
      };

      ResetPasswordPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _reset_password_routing_module__WEBPACK_IMPORTED_MODULE_5__["ResetPasswordPageRoutingModule"]],
        declarations: [_reset_password_page__WEBPACK_IMPORTED_MODULE_6__["ResetPasswordPage"]]
      })], ResetPasswordPageModule);
      /***/
    },

    /***/
    "EoN7":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/reset-password/reset-password.page.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function EoN7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title style=\"padding: 0;\">\n        Reset Password\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n <!-- The required elements will not proceed unless they are filled out  -->\n <form [formGroup]=\"resetForm\" (ngSubmit)=\"validatePasswordReset()\" novalidate>\n   \n  <!--\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Email</ion-label>\n      <ion-input formControlName=\"email\" type=\"text\" required></ion-input>\n    </ion-item>\n\n  -->\n    \n\n    <div class=\"validation-errors\">\n      <ng-container *ngFor=\"let validation of validation_messages.email\">\n        <div class=\"error-message\" *ngIf=\"resetForm.get('email').hasError(validation.type) && (resetForm.get('email').dirty || resetForm.get('email').touched)\">\n          {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>\n\n    <!-- type password allows it to appear encrypted and not be visible upon entering -->\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">New Password</ion-label>\n      <ion-input formControlName=\"password\" type=\"password\" required></ion-input>\n    </ion-item>\n\n    <div class=\"validation-errors\">\n      <ng-container *ngFor=\"let validation of validation_messages.password\">\n        <div class=\"error-message\" *ngIf=\"resetForm.get('password').hasError(validation.type) && (resetForm.get('password').dirty || resetForm.get('password').touched)\">\n          {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>\n\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Confirm New Password</ion-label>\n      <ion-input formControlName=\"passwordRepeat\" type=\"password\" required></ion-input>\n    </ion-item>\n\n    <div class=\"validation-errors\">\n      <ng-container *ngFor=\"let validation of validation_messages.password\">\n        <div class=\"error-message\"\n          *ngIf=\"resetForm.get('passwordRepeat').hasError('passwordMismatch')\">\n        Passwords Don't Match\n        </div>\n        <div class=\"error-message\" *ngIf=\"resetForm.get('password').hasError(validation.type) && (resetForm.get('password').dirty || resetForm.get('password').touched)\">\n          {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>\n\n    <ion-row>\n      <ion-col>\n        <ion-button aria-label=\"change password\" type=\"submit\" color=\"success\" expand=\"block\">Change Password</ion-button>\n      </ion-col>\n    </ion-row>\n  </form>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "dBPC":
    /*!*************************************************************!*\
      !*** ./src/app/pages/reset-password/reset-password.page.ts ***!
      \*************************************************************/

    /*! exports provided: ResetPasswordPage */

    /***/
    function dBPC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResetPasswordPage", function () {
        return ResetPasswordPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_reset_password_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./reset-password.page.html */
      "EoN7");
      /* harmony import */


      var _reset_password_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./reset-password.page.scss */
      "5AxV");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_services_custom_validation_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/custom-validation.service */
      "xHyB");

      var ResetPasswordPage = /*#__PURE__*/function () {
        function ResetPasswordPage(http, navCtrl, formBuilder, customValidator, platform) {
          _classCallCheck(this, ResetPasswordPage);

          this.http = http;
          this.navCtrl = navCtrl;
          this.formBuilder = formBuilder;
          this.customValidator = customValidator;
          this.platform = platform;
          this.passwordInput = "";
          this.passwordConfirmInput = ""; // responsible for printing error messages to the screen based on validator 

          this.validation_messages = {
            'password': [{
              type: 'required',
              message: 'A password is required.'
            }],
            'passwordRepeat': [{
              type: 'required',
              message: 'A password is required.'
            }]
          };
          this.resetForm = formBuilder.group({
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(30), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])],
            passwordRepeat: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(30), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])]
          }, {
            validator: this.customValidator.passwordMatchValidator('password', 'passwordRepeat')
          });
        }

        _createClass(ResetPasswordPage, [{
          key: "validatePasswordReset",
          value: function validatePasswordReset() {
            console.log(this.resetForm.value); // Get the unique selector (basically username) and validator (basically encrypted password) for the password reset that was concatenated 
            // with the password reset URL in the link sent to the user's email

            var selector = this.platform.getQueryParam('selector');
            var validator = this.platform.getQueryParam('validator');
            console.log("Selector: " + selector);
            console.log("Validator: " + validator);

            if (!this.resetForm.valid) {
              console.log("INVALID");
            } else {
              console.log("VALID"); // Find a way to get email and password input from user

              var obj = {
                func: "verify_reset",
                password: this.resetForm.value['password'],
                passwordRepeat: this.resetForm.value['passwordRepeat'],
                selector: selector,
                validator: validator
              };
              this.http.post("https://recycle.hpc.tcnj.edu/php/password-resets-handler.php", JSON.stringify(obj)).subscribe(function (data) {
                var result = data;

                if (result['missingInput']) {
                  // output to user it succeeded and move to next page
                  console.log("missing Input");
                } else {
                  // dont move to next page and output error message "Email or password entered was incorrect"
                  console.log("email sent");
                }
              });
            }
          }
        }]);

        return ResetPasswordPage;
      }();

      ResetPasswordPage.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
        }, {
          type: src_app_services_custom_validation_service__WEBPACK_IMPORTED_MODULE_7__["CustomValidationService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }];
      };

      ResetPasswordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-reset-password',
        template: _raw_loader_reset_password_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_reset_password_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ResetPasswordPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-reset-password-reset-password-module-es5.js.map