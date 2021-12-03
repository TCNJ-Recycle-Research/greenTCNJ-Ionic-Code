(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-recover-password-recover-password-module"], {
    /***/
    "4SKl":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/recover-password/recover-password.page.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function SKl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title style=\"padding: 0;\">Reset Your Password</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"emailForm\" (ngSubmit)=\"checkEmail()\">\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Email</ion-label>\n      <ion-input formControlName=\"email\" type=\"text\" required></ion-input>\n    </ion-item>\n\n    <div class=\"validation-errors\">\n      <ng-container *ngFor=\"let validation of validation_messages.email\">\n        <div class=\"error-message\" *ngIf=\"emailForm.get('email').hasError(validation.type) && (emailForm.get('email').dirty || emailForm.get('email').touched)\">\n          {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>\n\n    <ion-row>\n      <ion-col>\n        <ion-button aria-label=\"Send\" type=\"submit\" color=\"success\" expand=\"block\">Send</ion-button>\n\n        <div class=\"validation-confirmation\">\n          <span *ngIf=\"emailFailure()\">If an account with that email exists a password reset link has been sent.</span>        \n        </div>\n\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row>\n      <ion-col>\n        <small>\n          *Please provide your account's email.\n        </small>         \n      </ion-col>\n    </ion-row>\n\n  </form>\n</ion-content>\n";
      /***/
    },

    /***/
    "Ald3":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/recover-password/recover-password.module.ts ***!
      \*******************************************************************/

    /*! exports provided: RecoverPasswordPageModule */

    /***/
    function Ald3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RecoverPasswordPageModule", function () {
        return RecoverPasswordPageModule;
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


      var _recover_password_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./recover-password-routing.module */
      "kD3S");
      /* harmony import */


      var _recover_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./recover-password.page */
      "PmGq");

      var RecoverPasswordPageModule = function RecoverPasswordPageModule() {
        _classCallCheck(this, RecoverPasswordPageModule);
      };

      RecoverPasswordPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _recover_password_routing_module__WEBPACK_IMPORTED_MODULE_5__["RecoverPasswordPageRoutingModule"]],
        declarations: [_recover_password_page__WEBPACK_IMPORTED_MODULE_6__["RecoverPasswordPage"]]
      })], RecoverPasswordPageModule);
      /***/
    },

    /***/
    "PmGq":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/recover-password/recover-password.page.ts ***!
      \*****************************************************************/

    /*! exports provided: RecoverPasswordPage */

    /***/
    function PmGq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RecoverPasswordPage", function () {
        return RecoverPasswordPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_recover_password_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./recover-password.page.html */
      "4SKl");
      /* harmony import */


      var _recover_password_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./recover-password.page.scss */
      "xTpE");
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

      var RecoverPasswordPage = /*#__PURE__*/function () {
        // firstName: new FormControl()
        function RecoverPasswordPage(router, http, formBuilder) {
          _classCallCheck(this, RecoverPasswordPage);

          this.router = router;
          this.http = http;
          this.formBuilder = formBuilder;
          this.emailInput = "";
          this.emailSent = false; // responsible for printing error messages to the screen based on validator 

          this.validation_messages = {
            'email': [{
              type: 'maxlength',
              message: 'Your email cannot be more than 30 characters long.'
            }, {
              type: 'pattern',
              message: 'You must enter a valid email.'
            }]
          };
          this.emailForm = formBuilder.group({
            // Require validators for the input fields so we can quickly tell them if their input is valid, the patten string is what characters
            // are allowed in the field and for email it makes sure there is a @ character and a domain field like .com
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(30), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])]
          });
        } // If an account with that email exists and password reset link will be sent
        // generate_password_reset


        _createClass(RecoverPasswordPage, [{
          key: "checkEmail",
          value: function checkEmail() {
            var _this = this;

            console.log("try signup");
            console.log(this.emailForm.value);

            if (!this.emailForm.valid) {
              console.log("INVALID");
            } else {
              console.log("VALID"); // Find a way to get email and password input from user

              var obj = {
                func: "generate_reset",
                email: this.emailForm.value['email'],
                isMobileRequest: true
              };
              this.http.post("https://recycle.hpc.tcnj.edu/php/password-resets-handler.php", JSON.stringify(obj)).subscribe(function (data) {
                //not getting result
                var result = data;

                if (result['missingInput']) {
                  console.log("missing Input");
                  _this.emailSent = false;
                } else {
                  // output to user it succeeded and move to next page
                  _this.emailSent = true;
                  console.log("email sent");

                  _this.emailForm.reset();
                }
              });
            }
          }
        }, {
          key: "emailFailure",
          value: function emailFailure() {
            return this.emailSent;
          }
        }]);

        return RecoverPasswordPage;
      }();

      RecoverPasswordPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }];
      };

      RecoverPasswordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-recover-password',
        template: _raw_loader_recover_password_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_recover_password_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], RecoverPasswordPage);
      /***/
    },

    /***/
    "kD3S":
    /*!***************************************************************************!*\
      !*** ./src/app/pages/recover-password/recover-password-routing.module.ts ***!
      \***************************************************************************/

    /*! exports provided: RecoverPasswordPageRoutingModule */

    /***/
    function kD3S(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RecoverPasswordPageRoutingModule", function () {
        return RecoverPasswordPageRoutingModule;
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


      var _recover_password_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./recover-password.page */
      "PmGq");

      var routes = [{
        path: '',
        component: _recover_password_page__WEBPACK_IMPORTED_MODULE_3__["RecoverPasswordPage"]
      }];

      var RecoverPasswordPageRoutingModule = function RecoverPasswordPageRoutingModule() {
        _classCallCheck(this, RecoverPasswordPageRoutingModule);
      };

      RecoverPasswordPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], RecoverPasswordPageRoutingModule);
      /***/
    },

    /***/
    "xTpE":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/recover-password/recover-password.page.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function xTpE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".validation-errors {\n  color: red;\n  margin: 10px;\n  font-size: 75%;\n}\n\n.validation-confirmation {\n  color: green;\n  margin: 10px;\n  font-size: 75%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3JlY292ZXItcGFzc3dvcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFDSiIsImZpbGUiOiJyZWNvdmVyLXBhc3N3b3JkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi52YWxpZGF0aW9uLWVycm9yc3tcbiAgICBjb2xvcjogcmVkOyBcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgZm9udC1zaXplOiA3NSU7XG59XG5cbi52YWxpZGF0aW9uLWNvbmZpcm1hdGlvbntcbiAgICBjb2xvcjogZ3JlZW47IFxuICAgIG1hcmdpbjogMTBweDtcbiAgICBmb250LXNpemU6IDc1JTtcbn0iXX0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-recover-password-recover-password-module-es5.js.map