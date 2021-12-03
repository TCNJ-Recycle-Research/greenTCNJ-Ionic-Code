(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-settings-settings-module"], {
    /***/
    "HATU":
    /*!***********************************************************!*\
      !*** ./src/app/pages/settings/settings-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: SettingsPageRoutingModule */

    /***/
    function HATU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingsPageRoutingModule", function () {
        return SettingsPageRoutingModule;
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


      var _settings_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./settings.page */
      "nD9t");

      var routes = [{
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_3__["SettingsPage"]
      }];

      var SettingsPageRoutingModule = function SettingsPageRoutingModule() {
        _classCallCheck(this, SettingsPageRoutingModule);
      };

      SettingsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SettingsPageRoutingModule);
      /***/
    },

    /***/
    "JLDx":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings/settings.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function JLDx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar mode=\"ios\">\n    <ion-title>\n      <div class=\"ion-text-wrap\">\n        Settings\n      </div>\n    </ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu =\"main-menu\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n\n\n\n  \n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <!-- <ion-item lines=\"full\">\n      <ion-icon slot=\"start\" name=\"moon\"></ion-icon>\n      <ion-label>\n        Toggle Dark Theme\n      </ion-label>\n      <ion-toggle (ionChange)=\"onClick($event)\" slot=\"end\"></ion-toggle>\n    </ion-item> -->\n\n    <ion-item lines=\"full\">\n      <ion-label>\n       Receive push notifications\n      </ion-label>\n      <ion-toggle (ionChange)=\"onClick($event)\" slot=\"end\"></ion-toggle>\n    </ion-item>\n\n  </ion-list>\n\n\n  <br>\n  <ion-list>\n    <ion-title>Manage my interests</ion-title>\n    <ion-item *ngFor=\"let entry of form\">\n      <ion-label>{{entry.val}}</ion-label>\n      <ion-checkbox slot=\"end\" (ionChange)=\"boxChecked($event)\" [(ngModel)]=\"entry.isChecked\"></ion-checkbox>\n    </ion-item>\n    <ion-button aria-label=\"update interests\" [disabled]=\"buttonDisabled\" color=\"success\" expand=\"full\" (click)=\"updateUserInterests()\">Update Interests</ion-button>\n  </ion-list>\n  \n\n\n\n\n\n</ion-content>\n\n\n<ion-footer class=\"ion-no-border\">\n  <ion-toolbar>\n    \n    <ion-button aria-label=\"logout\" expand=\"full\" (click)=\"logout()\">Logout</ion-button>\n  </ion-toolbar>\n</ion-footer>\n";
      /***/
    },

    /***/
    "j/5A":
    /*!***************************************************!*\
      !*** ./src/app/pages/settings/settings.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function j5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXR0aW5ncy5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "nD9t":
    /*!*************************************************!*\
      !*** ./src/app/pages/settings/settings.page.ts ***!
      \*************************************************/

    /*! exports provided: SettingsPage */

    /***/
    function nD9t(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingsPage", function () {
        return SettingsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_settings_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./settings.page.html */
      "JLDx");
      /* harmony import */


      var _settings_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./settings.page.scss */
      "j/5A");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/authentication.service */
      "ej43");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");

      var SettingsPage = /*#__PURE__*/function () {
        function SettingsPage(authService, router, renderer, storage, http) {
          var _this = this;

          _classCallCheck(this, SettingsPage);

          this.authService = authService;
          this.router = router;
          this.renderer = renderer;
          this.storage = storage;
          this.http = http;
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
          }];
          storage.get('userID').then(function (val) {
            _this.userID = val;
          });
          this.buttonDisabled = true;
          this.loadInterests();
        }

        _createClass(SettingsPage, [{
          key: "loadInterests",
          value: function loadInterests() {
            var _this2 = this;

            this.storage.get('userRecyclingInterest').then(function (val) {
              _this2.recycling = val;

              if (val == 0 || val == null) {
                _this2.form[0].isChecked = false;
              } else {
                _this2.form[0].isChecked = true;
              }
            });
            this.storage.get('userWaterInterest').then(function (val) {
              _this2.water = val;

              if (val == 0 || val == null) {
                _this2.form[1].isChecked = false;
              } else {
                _this2.form[1].isChecked = true;
              }
            });
            this.storage.get('userPollutionInterest').then(function (val) {
              _this2.pollution = val;

              if (val == 0 || val == null) {
                _this2.form[2].isChecked = false;
              } else {
                _this2.form[2].isChecked = true;
              }
            });
            this.storage.get('userEnergyInterest').then(function (val) {
              _this2.energy = val;

              if (val == 0 || val == null) {
                _this2.form[3].isChecked = false;
              } else {
                _this2.form[3].isChecked = true;
              }
            });
            this.buttonDisabled = true;
          }
        }, {
          key: "boxChecked",
          value: function boxChecked(item) {
            //check item.user and do stuff
            // enables update user interests if a box has been altered
            this.buttonDisabled = false;
          }
        }, {
          key: "updateUserInterests",
          value: function updateUserInterests() {
            var _this3 = this;

            if (this.form[0].isChecked) {
              this.recycling = 1;
            } else {
              this.recycling = 0;
            }

            if (this.form[1].isChecked) {
              this.water = 1;
            } else {
              this.water = 0;
            }

            if (this.form[2].isChecked) {
              this.pollution = 1;
            } else {
              this.pollution = 0;
            }

            if (this.form[3].isChecked) {
              this.energy = 1;
            } else {
              this.energy = 0;
            }

            var obj = {
              func: "edit_user_interests",
              userID: this.userID,
              recyclingInterest: this.recycling,
              waterInterest: this.water,
              pollutionInterest: this.pollution,
              energyInterest: this.energy
            };
            this.http.post("https://recycle.hpc.tcnj.edu/php/users-handler.php", JSON.stringify(obj)).subscribe(function (data) {
              var result = data;

              if (result['missingInput']) {
                // output to user it succeeded and move to next page
                console.log("missing Input");
              } else {
                _this3.storage.set('userRecyclingInterest', _this3.recycling);

                _this3.storage.set('userWaterInterest', _this3.water);

                _this3.storage.set('userPollutionInterest', _this3.pollution);

                _this3.storage.set('userEnergyInterest', _this3.energy);

                _this3.buttonDisabled = true;
              }
            });
          }
        }, {
          key: "logout",
          value: function logout() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      // clears local storage 
                      this.storage.clear();
                      _context.next = 3;
                      return this.authService.logout();

                    case 3:
                      this.router.navigateByUrl('/', {
                        replaceUrl: true
                      });

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "onClick",
          value: function onClick(event) {
            if (event.detail.checked) {
              this.renderer.setAttribute(document.body, 'color-theme', 'dark');
            } else {
              this.renderer.setAttribute(document.body, 'color-theme', 'light');
            }
          }
        }]);

        return SettingsPage;
      }();

      SettingsPage.ctorParameters = function () {
        return [{
          type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]
        }];
      };

      SettingsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-settings',
        template: _raw_loader_settings_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_settings_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SettingsPage);
      /***/
    },

    /***/
    "yPrK":
    /*!***************************************************!*\
      !*** ./src/app/pages/settings/settings.module.ts ***!
      \***************************************************/

    /*! exports provided: SettingsPageModule */

    /***/
    function yPrK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function () {
        return SettingsPageModule;
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


      var _settings_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./settings-routing.module */
      "HATU");
      /* harmony import */


      var _settings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./settings.page */
      "nD9t");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");

      var SettingsPageModule = function SettingsPageModule() {
        _classCallCheck(this, SettingsPageModule);
      };

      SettingsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["IonicStorageModule"].forRoot(), _settings_routing_module__WEBPACK_IMPORTED_MODULE_5__["SettingsPageRoutingModule"]],
        declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]]
      })], SettingsPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-settings-settings-module-es5.js.map