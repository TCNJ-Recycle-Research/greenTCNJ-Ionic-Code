(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-material-specs-material-specs-module"],{

/***/ "87yW":
/*!*************************************************************!*\
  !*** ./src/app/pages/material-specs/material-specs.page.ts ***!
  \*************************************************************/
/*! exports provided: MaterialSpecsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialSpecsPage", function() { return MaterialSpecsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_material_specs_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./material-specs.page.html */ "cepN");
/* harmony import */ var _material_specs_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./material-specs.page.scss */ "aDmI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






let MaterialSpecsPage = class MaterialSpecsPage {
    // this is used to read in the material id from the previous page
    constructor(http, route, router) {
        this.http = http;
        this.route = route;
        this.router = router;
        // holds material information to be displayed on the page
        this.materialResult = [];
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.materialObj = this.router.getCurrentNavigation().extras.state.searchResults;
            }
        });
        this.loadMaterial();
    }
    loadMaterial() {
        // set material_id to the value of the passed material ID based on what was pressed
        this.materialObj = this.router.getCurrentNavigation().extras.state.searchResults;
        // if there is no image path set the image path to display not-found.jpg image
        var imgPath = "https://recycle.hpc.tcnj.edu/materialImages/not-found.jpg";
        if (this.materialObj["imagePath"] !== null && this.materialObj["imagePath"] !== "null") {
            // else, there is a valid image path so you must concatinate the image name to the full image path
            var str1 = new String('https://recycle.hpc.tcnj.edu/materialImages/'); // db image url
            var str2 = this.materialObj["imagePath"]; // image name 
            var imgPath = str1.concat(str2.toString()); //combine the path with the image name 
        }
        this.materialResult.push({ name: this.materialObj["materialName"], type: this.materialObj["materialType"],
            description: this.materialObj["materialDescription"], image: imgPath });
        // Let database know a material was viewed
        var obj = { func: "material_viewed", materialID: this.materialObj["materialID"] };
        this.http.post("https://recycle.hpc.tcnj.edu/php/materials-handler.php", JSON.stringify(obj)).subscribe(data => { });
    }
};
MaterialSpecsPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
MaterialSpecsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-material-specs',
        template: _raw_loader_material_specs_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_material_specs_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MaterialSpecsPage);



/***/ }),

/***/ "aDmI":
/*!***************************************************************!*\
  !*** ./src/app/pages/material-specs/material-specs.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img.center {\n  height: 25vh;\n  width: auto;\n  display: block;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL21hdGVyaWFsLXNwZWNzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUFDSiIsImZpbGUiOiJtYXRlcmlhbC1zcGVjcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcuY2VudGVyIHtcbiAgICBoZWlnaHQ6IDI1dmg7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAwIGF1dG87XG59Il19 */");

/***/ }),

/***/ "cepN":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/material-specs/material-specs.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/whatgoeswhere\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>What goes where?</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-app id=\"load_material_page\" *ngFor=\"let material of materialResult\">\n    <ion-header translucent>\n      <ion-toolbar>\n        <ion-title [innerHTML]=\"material.name\"></ion-title>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content fullscreen>\n      <ion-card>\n        <br>\n        <img alt=\"\" class=\"center\" [src]= \"material.image\" vertical-align=\"middle\">\n        <ion-card-header>\n          <ion-card-subtitle [innerHTML]=\"material.type\"></ion-card-subtitle>\n          <!-- <ion-card-title [innerHTML]=\"material.image\"></ion-card-title> -->\n        </ion-card-header>\n        <ion-card-content [innerHTML]=\"material.description\"></ion-card-content>\n      </ion-card>\n    </ion-content>\n  </ion-app>\n\n  <!-- <p [innerHTML] = \"material_name\"></p> -->\n\n  <!-- <iframe src=\"https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FNew_York&amp;src=Y18ycGQzMXFlZ2s0OW1qdWMzczdqODQ5Y25sb0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&amp;src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%233F51B5&amp;color=%230B8043\" style=\"border:solid 1px #777\" width=\"800\" height=\"600\" frameborder=\"0\" scrolling=\"no\"></iframe> -->\n  \n</ion-content>\n");

/***/ }),

/***/ "kL3D":
/*!***************************************************************!*\
  !*** ./src/app/pages/material-specs/material-specs.module.ts ***!
  \***************************************************************/
/*! exports provided: MaterialSpecsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialSpecsPageModule", function() { return MaterialSpecsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _material_specs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./material-specs-routing.module */ "yAsV");
/* harmony import */ var _material_specs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./material-specs.page */ "87yW");







let MaterialSpecsPageModule = class MaterialSpecsPageModule {
};
MaterialSpecsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _material_specs_routing_module__WEBPACK_IMPORTED_MODULE_5__["MaterialSpecsPageRoutingModule"]
        ],
        declarations: [_material_specs_page__WEBPACK_IMPORTED_MODULE_6__["MaterialSpecsPage"]]
    })
    // export type Int = number & { __int__: void };
    // export const roundToInt = (num: number): Int => Math.round(num) as Int;
], MaterialSpecsPageModule);



/***/ }),

/***/ "yAsV":
/*!***********************************************************************!*\
  !*** ./src/app/pages/material-specs/material-specs-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: MaterialSpecsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialSpecsPageRoutingModule", function() { return MaterialSpecsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _material_specs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./material-specs.page */ "87yW");




const routes = [
    {
        path: '',
        component: _material_specs_page__WEBPACK_IMPORTED_MODULE_3__["MaterialSpecsPage"]
    }
];
let MaterialSpecsPageRoutingModule = class MaterialSpecsPageRoutingModule {
};
MaterialSpecsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
    // export type Int = number & { __int__: void };
    // export const roundToInt = (num: number): Int => Math.round(num) as Int; 
], MaterialSpecsPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=pages-material-specs-material-specs-module-es2015.js.map