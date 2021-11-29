(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "A3+G":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "zpKS");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomePageRoutingModule);



/***/ }),

/***/ "WcN3":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar mode=\"ios\">\n    <ion-title>\n      <div class=\"ion-text-wrap\">\n        Home\n      </div>\n    </ion-title>\n    <ion-buttons slot=\"start\">\n      <!-- to display menu button that can be toggled -->\n      \n      <!-- <ion-side-menus enable-menu-with-back-views=\"true\"> -->\n        <ion-menu-button menu =\"main-menu\"></ion-menu-button>\n      <!-- </ion-side-menus> -->\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n    <!-- page title, need to fix centering as it is not being centered \n    <ion-item style=\"padding: 0; margin: 0;\" lines=\"full\">\n      <ion-title style=\"padding: 0; margin: 0;\" [innerHTML]=\"welcomeMsg\" style=\"padding: 0;\"></ion-title>\n    </ion-item>\n    \n    <ion-list-header>Not sure where something goes? </ion-list-header>-->\n\n    <!-- <ion-item style=\"padding: 0; margin: 0;\" lines=\"full\">\n      <ion-title style=\"padding: 0; margin: 0;\" [innerHTML]=\"welcomeMsg\" style=\"padding: 0;\"></ion-title>\n    </ion-item> -->\n\n    \n    <ion-item>\n      <!-- <ion-item-divider>\n        <ion-label>\n          Basic Item Divider\n        </ion-label>\n      </ion-item-divider> -->\n\n      <ion-thumbnail slot=\"start\">\n        <img alt=\"\" src = \"../../assets/RecyclingRoscoeSquare.png\">\n        <!-- <img src=\"../../assets/icon/TCNJ SPIRIT HEAD FULL COLOR RGB.png\"> -->\n      </ion-thumbnail>\n      <!-- <ion-label [innerHTML]=\"welcomeMsg\">test</ion-label>\n      <br> -->\n      <ion-label class=\"ion-text-wrap\">\n        <h1 [innerHTML]=\"welcomeMsg\"></h1>\n        <ion-item-divider></ion-item-divider>\n        <h2><strong>What Goes Where?</strong></h2> \n        <h3>Ask Roscoe!</h3>\n      </ion-label>\n    </ion-item>\n\n    <!-- onClick() routes you to the whatgoeswhere page to use the search bar -->\n    <!-- on this page the search bar is not actually functional, it is just meant to link you to the other page as seen in recycle coach -->\n    <ion-searchbar (click)=\"onClick($event)\"></ion-searchbar>\n\n    <ion-item lines=\"full\">\n      <!-- link to campusresources page to display provided links -->\n      <a [routerLink]=\"['/campusresources']\" class=\"small-text\">TCNJ Recycling Guidelines</a>\n    </ion-item>\n\n\n  <ion-card>\n    <ion-card-header style=\"padding-bottom: 0;\">\n      <ion-card-title>Events for today: </ion-card-title>\n      <!-- prints current date -->\n      <ion-card-subtitle>{{today | date}}</ion-card-subtitle>\n    </ion-card-header>\n  \n    <ion-card-content style=\"padding-bottom: 0.5em;\">\n      <!-- List of Text Items -->\n      <ion-list>\n        <ion-item class=\"ion-no-padding\" lines=\"full\" *ngFor=\"let test of events\">\n            <ion-label class=\"ion-text-wrap\" [innerHTML]=\"test.name\"></ion-label>\n        </ion-item>\n      </ion-list>\n      <!-- link to calendar page to display all events -->\n      <ion-item lines=\"none\" class=\"ion-no-padding\">\n        <a [routerLink]=\"['/schedule']\" class=\"small-text\">View all events</a>\n      </ion-item>\n      \n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n");

/***/ }),

/***/ "ct+p":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "zpKS");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-routing.module */ "A3+G");
/* harmony import */ var ionic2_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic2-calendar */ "L+Ny");
/* harmony import */ var _pages_event_modal_event_modal_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pages/event-modal/event-modal.module */ "YKP9");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/storage */ "e8h1");










let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_9__["IonicStorageModule"].forRoot(),
            _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"],
            ionic2_calendar__WEBPACK_IMPORTED_MODULE_7__["NgCalendarModule"],
            _pages_event_modal_event_modal_module__WEBPACK_IMPORTED_MODULE_8__["EventModalPageModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "f6od":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n  text-align: center;\n}\n\n.divider {\n  display: flex;\n}\n\n.divider:before, .divider:after {\n  content: \"\";\n  flex: 1;\n}\n\n.line {\n  align-items: center;\n  margin: 1em -1em;\n  color: #cccccc;\n}\n\n.line:before, .line:after {\n  height: 1px;\n  margin: 0 1em;\n}\n\n.one-line:before, .one-line:after {\n  background: #cccccc;\n}\n\n.auth-form ion-grid,\n.auth-form ion-row {\n  height: 100%;\n  justify-content: center;\n}\n\n.already {\n  display: block;\n  text-align: center;\n  padding-bottom: 10px;\n}\n\na {\n  text-decoration: none;\n  text-align: center;\n  text-decoration: underline;\n}\n\nion-item ion-label ion-list-header ion-title {\n  white-space: normal;\n}\n\nion-item-divider {\n  margin-top: 0px;\n  min-height: 1px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FBRkY7O0FBS0E7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0FBRkY7O0FBS0E7RUFDRSxhQUFBO0FBRkY7O0FBSUU7RUFFRSxXQUFBO0VBQ0EsT0FBQTtBQUhKOztBQU9BO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFKRjs7QUFNRTtFQUVFLFdBQUE7RUFDQSxhQUFBO0FBTEo7O0FBVUU7RUFFRyxtQkFBQTtBQVJMOztBQVlBOztFQUVFLFlBQUE7RUFDQSx1QkFBQTtBQVRGOztBQVlBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUFURjs7QUFZQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtBQVRGOztBQWFBO0VBQ0UsbUJBQUE7QUFWRjs7QUFhQTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtBQVZGIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG5cbiAgY29sb3I6ICM4YzhjOGM7XG5cbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmRpdmlkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBcbiAgJjpiZWZvcmUsXG4gICY6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgZmxleDogMTtcbiAgfVxufVxuXG4ubGluZSB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMWVtIC0xZW07XG4gIGNvbG9yOiAjY2NjY2NjO1xuICBcbiAgJjpiZWZvcmUsXG4gICY6YWZ0ZXIge1xuICAgIGhlaWdodDogMXB4O1xuICAgIG1hcmdpbjogMCAxZW07XG4gIH1cbn0gXG5cbi5vbmUtbGluZSB7XG4gICY6YmVmb3JlLFxuICAmOmFmdGVyIHtcbiAgICAgYmFja2dyb3VuZDogI2NjY2NjYztcbiAgfVxufVxuXG4uYXV0aC1mb3JtIGlvbi1ncmlkLFxuLmF1dGgtZm9ybSBpb24tcm93IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmFscmVhZHkge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuXG5pb24taXRlbSBpb24tbGFiZWwgaW9uLWxpc3QtaGVhZGVyIGlvbi10aXRsZXtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn1cblxuaW9uLWl0ZW0tZGl2aWRlcntcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBtaW4taGVpZ2h0OiAxcHghaW1wb3J0YW50O1xufVxuXG4iXX0= */");

/***/ }),

/***/ "qfBg":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let UserService = class UserService {
    constructor() { }
    get firstName() {
        return this.f_name;
    }
    set firstName(name) {
        this.f_name = name;
    }
    get lastName() {
        return this.l_name;
    }
    set lastName(name) {
        this.l_name = name;
    }
    get fullName() {
        this.full_name = this.f_name + this.l_name;
        return this.full_name;
    }
    get email() {
        return this._email;
    }
    set email(email) {
        this._email = email;
    }
    get type() {
        return this._type;
    }
    set type(type) {
        this._type = type;
    }
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
};
UserService.ctorParameters = () => [];
UserService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ "zpKS":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.page.html */ "WcN3");
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss */ "f6od");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/user.service */ "qfBg");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "e8h1");











let HomePage = class HomePage {
    constructor(userService, menuCtrl, locale, router, http, storage) {
        this.userService = userService;
        this.menuCtrl = menuCtrl;
        this.locale = locale;
        this.router = router;
        this.http = http;
        this.storage = storage;
        this.today = new Date(Date.now());
        this.events = [];
        this.loadMyEvents();
        this.menuCtrl.enable(true);
        this.user = this.userService;
        storage.get('userID').then((val) => {
            //updates user last login
            var obj = { func: "update_last_login", userID: val };
            this.http.post("https://recycle.hpc.tcnj.edu/php/users-handler.php", JSON.stringify(obj)).subscribe(data => { });
        });
        storage.get('userName').then((val) => {
            this.welcomeMsg = "Welcome to Green TCNJ " + val + "!";
        });
    }
    loadMyEvents() {
        this.storage.get('userID').then((val) => {
            var obj = { func: "get_my_events", userID: val };
            this.http.post("https://recycle.hpc.tcnj.edu/php/events-handler.php", JSON.stringify(obj)).subscribe(data => {
                var result = data;
                for (var i = 0; i < result.length; i++) {
                    // turns the event date into a date format
                    var tempDate = new Date(result[i]["eventDate"]);
                    // for loop to show any events if they are scheduled for today
                    if ((tempDate.getMonth() + 1) == (this.today.getMonth() + 1) && ((tempDate.getDate() + 1) == this.today.getDate()) && (tempDate.getFullYear() == this.today.getFullYear())) {
                        this.events.push({ name: result[i]["eventName"], description: result[i]["eventDescription"], date: result[i]["eventDate"] });
                    }
                }
                if (this.events.length == 0) {
                    this.events.push({ name: "No events listed for you today.", description: " ", date: " " });
                }
            });
        });
    }
    // simple function to link search bar to next page when clicked 
    onClick(ev) {
        this.router.navigate(['/whatgoeswhere']);
    }
};
HomePage.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["MenuController"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["LOCALE_ID"],] }] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["IonicStorageModule"].forRoot()
        ]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map