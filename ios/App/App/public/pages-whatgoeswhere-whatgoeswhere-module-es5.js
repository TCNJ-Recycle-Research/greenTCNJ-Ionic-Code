(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-whatgoeswhere-whatgoeswhere-module"], {
    /***/
    "6KIB":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/whatgoeswhere/whatgoeswhere.page.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function KIB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu =\"main-menu\"></ion-menu-button>\n    </ion-buttons>\n      <ion-title>\n        <div class=\"ion-text-wrap\">\n          What Goes Where?\n        </div>\n      </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- Default Segment -->\n  <ion-segment color=\"primary\" [(ngModel)]=\"type\" scrollable>\n    <ion-segment-button value=\"all\" checked>\n      <ion-label>All Items</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"popular\">\n      <ion-label>Popular Searches</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n\n  <div [ngSwitch]=\"type\">\n    <ion-list *ngSwitchCase=\"'all'\">\n\n      <ion-item>\n        <ion-thumbnail slot=\"start\">\n          <img alt=\"\" src = \"../../assets/RecyclingRoscoeSquare.png\">\n        </ion-thumbnail>\n        <ion-label class=\"ion-text-wrap\"><h1><strong>What Goes Where?</strong></h1> Ask Roscoe!</ion-label>\n      </ion-item>\n      \n    \n      <ion-searchbar \n        animated\n        (ionInput)=\"searchMaterials($event)\">\n      </ion-searchbar>\n    \n      <ion-list id=\"search-results\">\n        <ion-item *ngFor=\"let material of searchResults\">\n          <ion-button aria-label=\"material.name\" color=\"success\" size=\"medium\" [innerHTML]=\"material.name\" [attr.data-material-id]=\"material.id\" (click)=\"openDetailsWithState($event)\">\n          </ion-button>\n        </ion-item>\n      </ion-list>\n\n    </ion-list>\n\n    <ion-list *ngSwitchCase=\"'popular'\">\n      <!-- Here is where we display the popular materials () -->\n      <ion-item>\n        <ion-thumbnail slot=\"start\">\n          <img alt=\"\" src = \"../../assets/RecyclingRoscoeSquare.png\">\n        </ion-thumbnail>\n        <ion-label class=\"ion-text-wrap\"><h1><strong>Top Materials</strong></h1>These are commonly searched items.</ion-label>\n      </ion-item>\n      \n\n      <ion-list>\n        <ion-item *ngFor=\"let material of popMaterials\">\n          <ion-button  aria-label=\"material.name\" color=\"success\" size=\"medium\" [innerHTML]=\"material.name\" [attr.data-material-id]=\"material.id\" (click)=\"openDetailsWithState($event)\">\n          </ion-button>\n        </ion-item>\n      </ion-list>\n      \n    </ion-list>\n  </div>\n  \n  \n  <ion-footer class=\"ion-no-border padding-vertical\">\n    <ion-toolbar>\n      <ion-item>\n        <ion-text class=\"ion-padding-vertical\">Looking for a material that is not on our list? \n          <a [routerLink]=\"['/suggestmaterial']\" class=\"small-text\">Submit a material here!</a>\n        </ion-text>\n      </ion-item>\n    </ion-toolbar>\n  </ion-footer>\n\n  \n  </ion-content>\n";
      /***/
    },

    /***/
    "GyYP":
    /*!*********************************************************************!*\
      !*** ./src/app/pages/whatgoeswhere/whatgoeswhere-routing.module.ts ***!
      \*********************************************************************/

    /*! exports provided: WhatgoeswherePageRoutingModule */

    /***/
    function GyYP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WhatgoeswherePageRoutingModule", function () {
        return WhatgoeswherePageRoutingModule;
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


      var _whatgoeswhere_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./whatgoeswhere.page */
      "oTtR");

      var routes = [{
        path: '',
        component: _whatgoeswhere_page__WEBPACK_IMPORTED_MODULE_3__["WhatgoeswherePage"]
      }];

      var WhatgoeswherePageRoutingModule = function WhatgoeswherePageRoutingModule() {
        _classCallCheck(this, WhatgoeswherePageRoutingModule);
      };

      WhatgoeswherePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], WhatgoeswherePageRoutingModule);
      /***/
    },

    /***/
    "KgyM":
    /*!*************************************************************!*\
      !*** ./src/app/pages/whatgoeswhere/whatgoeswhere.page.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function KgyM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".block {\n  display: block;\n  width: 100%;\n  border: none;\n  background-color: #4CAF50;\n  padding: 14px 28px;\n  font-size: 16px;\n  cursor: pointer;\n  text-align: center;\n}\n\n.list-title {\n  text-overflow: unset;\n  white-space: unset;\n}\n\n.button {\n  --vertical-align: middle;\n  --padding-start: 10px;\n  --padding-end: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3doYXRnb2Vzd2hlcmUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFRTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQztFQUlDLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQUZGIiwiZmlsZSI6IndoYXRnb2Vzd2hlcmUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJsb2NrIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcbiAgICBwYWRkaW5nOiAxNHB4IDI4cHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAubGlzdC10aXRsZSB7XG4gICAgdGV4dC1vdmVyZmxvdzogdW5zZXQ7XG4gICAgd2hpdGUtc3BhY2U6IHVuc2V0O1xuIH1cblxuIC5idXR0b257XG4gIC8vIC0td2lkdGg6IDkwcHg7XG4gIC8vIC0taGVpZ2h0OiA5MHB4O1xuICAvLyAtLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLS12ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDEwcHg7XG4gfSJdfQ== */";
      /***/
    },

    /***/
    "UzLM":
    /*!*************************************************************!*\
      !*** ./src/app/pages/whatgoeswhere/whatgoeswhere.module.ts ***!
      \*************************************************************/

    /*! exports provided: WhatgoeswherePageModule */

    /***/
    function UzLM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WhatgoeswherePageModule", function () {
        return WhatgoeswherePageModule;
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


      var _whatgoeswhere_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./whatgoeswhere-routing.module */
      "GyYP");
      /* harmony import */


      var _whatgoeswhere_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./whatgoeswhere.page */
      "oTtR");

      var WhatgoeswherePageModule = function WhatgoeswherePageModule() {
        _classCallCheck(this, WhatgoeswherePageModule);
      };

      WhatgoeswherePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _whatgoeswhere_routing_module__WEBPACK_IMPORTED_MODULE_5__["WhatgoeswherePageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
        declarations: [_whatgoeswhere_page__WEBPACK_IMPORTED_MODULE_6__["WhatgoeswherePage"]]
      })], WhatgoeswherePageModule);
      /***/
    },

    /***/
    "oTtR":
    /*!***********************************************************!*\
      !*** ./src/app/pages/whatgoeswhere/whatgoeswhere.page.ts ***!
      \***********************************************************/

    /*! exports provided: WhatgoeswherePage */

    /***/
    function oTtR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WhatgoeswherePage", function () {
        return WhatgoeswherePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_whatgoeswhere_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./whatgoeswhere.page.html */
      "6KIB");
      /* harmony import */


      var _whatgoeswhere_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./whatgoeswhere.page.scss */
      "KgyM");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var WhatgoeswherePage = /*#__PURE__*/function () {
        function WhatgoeswherePage(router, http) {
          _classCallCheck(this, WhatgoeswherePage);

          this.router = router;
          this.http = http;
          this.materialsBackup = {};
          this.materials = [];
          this.searchResults = [];
          this.popMaterials = [];
          this.getAllMaterials();
          this.popularMaterials();
          this.type = 'all';
        }

        _createClass(WhatgoeswherePage, [{
          key: "getAllMaterials",
          value: function getAllMaterials() {
            var _this = this;

            if (this.materials.length > 0) {
              this.searchResults = this.materials;
            } else {
              var obj = {
                func: "get_all_materials"
              };
              this.http.post("https://recycle.hpc.tcnj.edu/php/materials-handler.php", JSON.stringify(obj)).subscribe(function (data) {
                var result = data;

                for (var i = 0; i < result.length; i++) {
                  _this.materials.push({
                    id: result[i]["materialID"],
                    name: result[i]["materialName"],
                    type: result[i]["materialType"]
                  });

                  _this.materialsBackup[result[i]["materialID"]] = result[i];
                }

                _this.searchResults = _this.materials;
              });
            }
          }
        }, {
          key: "popularMaterials",
          value: function popularMaterials() {
            var _this2 = this;

            var obj = {
              func: "get_material_stats"
            };
            this.http.post("https://recycle.hpc.tcnj.edu/php/graphs-handler.php", JSON.stringify(obj)).subscribe(function (data) {
              var result = data; // want the top 6 materials to be displayed

              for (var i = 0; i < 6; i++) {
                _this2.popMaterials.push({
                  name: result["topMaterials"][i]["materialName"],
                  id: result["topMaterials"][i]["materialID"]
                });
              }
            });
          }
        }, {
          key: "searchMaterials",
          value: function searchMaterials(ev) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var searchString;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.searchResults = this.materials;
                      searchString = ev.target.value;

                      if (searchString) {
                        _context.next = 4;
                        break;
                      }

                      return _context.abrupt("return");

                    case 4:
                      this.searchResults = this.searchResults.filter(function (currMaterial) {
                        return currMaterial.name.toLowerCase().indexOf(searchString.toLowerCase()) > -1 || currMaterial.type.toLowerCase().indexOf(searchString.toLowerCase()) > -1;
                      });

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          } // this function is to send the material ID to the materials-specs page 

        }, {
          key: "openDetailsWithState",
          value: function openDetailsWithState(ev) {
            var navigationExtras = {
              state: {
                searchResults: this.materialsBackup[ev.target.getAttribute('data-material-id').toString()]
              }
            };
            this.router.navigate(['/material-specs'], navigationExtras);
          }
        }]);

        return WhatgoeswherePage;
      }();

      WhatgoeswherePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }];
      };

      WhatgoeswherePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-whatgoeswhere',
        template: _raw_loader_whatgoeswhere_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_whatgoeswhere_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], WhatgoeswherePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-whatgoeswhere-whatgoeswhere-module-es5.js.map