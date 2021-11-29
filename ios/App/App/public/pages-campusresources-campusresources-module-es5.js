(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-campusresources-campusresources-module"], {
    /***/
    "65Ah":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/campusresources/campusresources.module.ts ***!
      \*****************************************************************/

    /*! exports provided: CampusresourcesPageModule */

    /***/
    function Ah(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CampusresourcesPageModule", function () {
        return CampusresourcesPageModule;
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


      var _campusresources_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./campusresources-routing.module */
      "BoXz");
      /* harmony import */


      var _campusresources_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./campusresources.page */
      "F7+L");

      var CampusresourcesPageModule = function CampusresourcesPageModule() {
        _classCallCheck(this, CampusresourcesPageModule);
      };

      CampusresourcesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _campusresources_routing_module__WEBPACK_IMPORTED_MODULE_5__["CampusresourcesPageRoutingModule"]],
        declarations: [_campusresources_page__WEBPACK_IMPORTED_MODULE_6__["CampusresourcesPage"]]
      })], CampusresourcesPageModule);
      /***/
    },

    /***/
    "BoXz":
    /*!*************************************************************************!*\
      !*** ./src/app/pages/campusresources/campusresources-routing.module.ts ***!
      \*************************************************************************/

    /*! exports provided: CampusresourcesPageRoutingModule */

    /***/
    function BoXz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CampusresourcesPageRoutingModule", function () {
        return CampusresourcesPageRoutingModule;
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


      var _campusresources_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./campusresources.page */
      "F7+L");

      var routes = [{
        path: '',
        component: _campusresources_page__WEBPACK_IMPORTED_MODULE_3__["CampusresourcesPage"]
      }];

      var CampusresourcesPageRoutingModule = function CampusresourcesPageRoutingModule() {
        _classCallCheck(this, CampusresourcesPageRoutingModule);
      };

      CampusresourcesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CampusresourcesPageRoutingModule);
      /***/
    },

    /***/
    "CqrY":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/campusresources/campusresources.page.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function CqrY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "p {\n  margin: 20px;\n}\n\na {\n  text-decoration: none;\n  text-align: center;\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NhbXB1c3Jlc291cmNlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FBQ0o7O0FBR0E7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7QUFBSiIsImZpbGUiOiJjYW1wdXNyZXNvdXJjZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XG4gICAgbWFyZ2luOiAyMHB4O1xuICAgIC8vcGFkZGluZzogNDBweDtcbn1cblxuYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgfSJdfQ== */";
      /***/
    },

    /***/
    "F7+L":
    /*!***************************************************************!*\
      !*** ./src/app/pages/campusresources/campusresources.page.ts ***!
      \***************************************************************/

    /*! exports provided: CampusresourcesPage */

    /***/
    function F7L(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CampusresourcesPage", function () {
        return CampusresourcesPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_campusresources_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./campusresources.page.html */
      "LKJf");
      /* harmony import */


      var _campusresources_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./campusresources.page.scss */
      "CqrY");
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

      var CampusresourcesPage = /*#__PURE__*/function () {
        function CampusresourcesPage(http, router) {
          _classCallCheck(this, CampusresourcesPage);

          this.http = http;
          this.router = router; // array thet holds an id number, the link name and the actual link specified by admins in the web portal

          this.campusResources = []; //loads the getAllResources function in the constructor

          this.getAllResources();
        } // function to call php function to get list of resources


        _createClass(CampusresourcesPage, [{
          key: "getAllResources",
          value: function getAllResources() {
            var _this = this;

            // php function call, does not require passing any parameters
            var obj = {
              func: "get_all_resources"
            }; // calling the function in the recources-handpler.php script 

            this.http.post("https://recycle.hpc.tcnj.edu/php/resources-handler.php", JSON.stringify(obj)).subscribe(function (data) {
              var result = data; // pushes campus resources into the created array

              for (var i = 0; i < result.length; i++) {
                _this.campusResources.push({
                  id: result[i]["resourceID"],
                  name: result[i]["resourceName"],
                  link: result[i]["resourceLink"]
                });
              }
            });
          }
        }]);

        return CampusresourcesPage;
      }();

      CampusresourcesPage.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      };

      CampusresourcesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-campusresources',
        template: _raw_loader_campusresources_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_campusresources_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], CampusresourcesPage);
      /***/
    },

    /***/
    "LKJf":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/campusresources/campusresources.page.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function LKJf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu =\"main-menu\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      <div class=\"ion-text-wrap\">\n        Campus Resources\n      </div>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    \n  <ion-item>\n    <h1><strong>About Green TCNJ</strong></h1>\n  </ion-item>\n\n  <!-- about message (not dynamic) -->\n    <ion-item >\n      <p>Green TCNJ is an app focused on displaying and storing useful information in regards to a greener campus.  \n        You can search which materials can be discarded or recycled on campus, register for upcoming environmental events, and view the latest recycling and environmental news for TCNJ.</p>\n    </ion-item>\n\n    <!-- lists the resources from the array we created in the typescript file from the php script -->\n    <!-- ng for allows us to loop through each item in the array -->\n    <ion-list>\n      <ion-item *ngFor=\"let resource of campusResources\">        \n        <a href= {{resource.link}} > {{ resource.name }} </a>\n      </ion-item>\n    </ion-list>\n\n    <!-- mailto is a way to link to email to contact Amanda Radosti, currently hardcoded -->\n  <p> \n    Want to reach out to The Office of Occupational Safety and Environmental Services? Contact Amanda Radosti at:  \n    <a href=\"mailto:radosti@tcnj.edu?subject=GreenTCNJ App Help\">radosti@tcnj.edu</a>\n  </p>\n  \n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-campusresources-campusresources-module-es5.js.map