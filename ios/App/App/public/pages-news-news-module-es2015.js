(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-news-news-module"],{

/***/ "Bp3h":
/*!*****************************************!*\
  !*** ./src/app/pages/news/news.page.ts ***!
  \*****************************************/
/*! exports provided: NewsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsPage", function() { return NewsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_news_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./news.page.html */ "CTMM");
/* harmony import */ var _news_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./news.page.scss */ "jLJ2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _news_modal_news_modal_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../news-modal/news-modal.page */ "wcIy");








let NewsPage = class NewsPage {
    constructor(router, http, modalCtrl) {
        this.router = router;
        this.http = http;
        this.modalCtrl = modalCtrl;
        this.news = [];
        this.getAllnews();
        this.type = 'all';
    }
    ngOnInit() {
    }
    getAllnews() {
        var obj = { func: "get_all_articles" };
        this.http.post("https://recycle.hpc.tcnj.edu/php/news-handler.php", JSON.stringify(obj)).subscribe(data => {
            var result = data;
            for (var i = 0; i < result.length; i++) {
                this.news.push({ articleID: result[i]["articleID"], title: result[i]["articleTitle"], author: result[i]["articleAuthor"],
                    text: result[i]["articleText"], datePublished: result[i]["publishDate"] });
            }
        });
    }
    ionViewWillEnter() {
        setTimeout(() => {
            this.news;
        }, 5000);
    }
    onArticleSelected(news) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _news_modal_news_modal_page__WEBPACK_IMPORTED_MODULE_7__["NewsModalPage"],
                componentProps: {
                    newsObj: news,
                    newsID: news.articleID,
                    newsTitle: news.title,
                    newsAuthor: news.author,
                    newsDescription: news.text,
                    newsDatePublished: news.datePublished
                }
            });
            yield modal.present();
        });
    }
};
NewsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] }
];
NewsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-news',
        template: _raw_loader_news_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_news_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], NewsPage);



/***/ }),

/***/ "CTMM":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/news/news.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu =\"main-menu\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>News</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"news\">\n  \n    <ion-list>\n      <!-- <ion-list-header>\n        <ion-label>\n          News\n        </ion-label>\n      </ion-list-header> -->\n\n      <ion-item lines=\"full\" *ngFor=\"let article of news\" button (click)=\"onArticleSelected(article)\">\n        <!-- <ion-thumbnail slot=\"start\">\n          <img src=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\">\n        </ion-thumbnail> -->\n        <ion-label>\n          <h2>\n            {{ article.title }}\n          </h2>\n          <p> By: \n            {{ article.author }}\n          </p>\n          <p>\n            {{ article.datePublished }}\n          </p>\n\n          <!-- <ion-item  >\n            <ion-text  >\n              <p>\n                {{ article.datePublished }}\n              </p>\n            </ion-text>\n          </ion-item> -->\n\n        </ion-label>\n\n      </ion-item>\n    </ion-list>\n  </div>\n\n</ion-content>\n");

/***/ }),

/***/ "VO3K":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/event-modal/event-modal.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header translucent>\n  <ion-toolbar>\n    <ion-title>Event Registration</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button aria-label=\"close\" (click)=\"close()\">Close</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n  <ion-list inset=\"false\">\n    <ion-list-header class=\"ion-padding-right ion-padding-top\">\n      <h1 class=\"ion-no-margin\" [innerHTML]=\"eventName\"></h1>\n    </ion-list-header>\n    <ion-item lines=\"full\">\n      <ion-text  class=\"ion-color-medium\" color=\"ion-color-medium\" >\n        <p class=\"ion-no-margin\" [innerHTML]=\"eventTime\"></p>\n      </ion-text>\n    </ion-item>\n    <ion-item lines=\"full\" >\n      <ion-text>\n        <p [innerHTML]=\"eventDescription\"></p>\n      </ion-text>\n    </ion-item>\n    <ion-button aria-label=\"Register\" [class.ion-hide]=\"registered == true\" class=\"ion-margin-top\" color=\"success\" expand=\"block\" (click)=\"registerForEvent()\">Register</ion-button>\n    <ion-button aria-label=\"Unregister\" [class.ion-hide]=\"registered == false\" class=\"ion-margin-top\" color=\"danger\" expand=\"block\" (click)=\"unregisterForEvent()\">Unregister</ion-button>\n  </ion-list>\n</ion-content>");

/***/ }),

/***/ "XkMT":
/*!***************************************************!*\
  !*** ./src/app/pages/news/news-routing.module.ts ***!
  \***************************************************/
/*! exports provided: NewsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsPageRoutingModule", function() { return NewsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _news_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./news.page */ "Bp3h");




const routes = [
    {
        path: '',
        component: _news_page__WEBPACK_IMPORTED_MODULE_3__["NewsPage"]
    }
];
let NewsPageRoutingModule = class NewsPageRoutingModule {
};
NewsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NewsPageRoutingModule);



/***/ }),

/***/ "YKP9":
/*!*********************************************************!*\
  !*** ./src/app/pages/event-modal/event-modal.module.ts ***!
  \*********************************************************/
/*! exports provided: EventModalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventModalPageModule", function() { return EventModalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _event_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./event-modal-routing.module */ "gyWr");
/* harmony import */ var _event_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./event-modal.page */ "mi7v");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "e8h1");









let EventModalPageModule = class EventModalPageModule {
};
EventModalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["IonicStorageModule"].forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _event_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__["EventModalPageRoutingModule"]
        ],
        declarations: [_event_modal_page__WEBPACK_IMPORTED_MODULE_6__["EventModalPage"]]
    })
], EventModalPageModule);



/***/ }),

/***/ "gyWr":
/*!*****************************************************************!*\
  !*** ./src/app/pages/event-modal/event-modal-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: EventModalPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventModalPageRoutingModule", function() { return EventModalPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _event_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./event-modal.page */ "mi7v");




const routes = [
    {
        path: '',
        component: _event_modal_page__WEBPACK_IMPORTED_MODULE_3__["EventModalPage"]
    }
];
let EventModalPageRoutingModule = class EventModalPageRoutingModule {
};
EventModalPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EventModalPageRoutingModule);



/***/ }),

/***/ "jLJ2":
/*!*******************************************!*\
  !*** ./src/app/pages/news/news.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Custom Skeleton Line Height and Margin */\n.custom-skeleton ion-skeleton-text {\n  line-height: 13px;\n}\n.custom-skeleton ion-skeleton-text:last-child {\n  margin-bottom: 5px;\n}\nion-item ion-label {\n  white-space: normal;\n}\np {\n  color: #2a2a2a;\n}\nh2 {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25ld3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJDQUFBO0FBQ0E7RUFDSSxpQkFBQTtBQUNKO0FBRUU7RUFDRSxrQkFBQTtBQUNKO0FBR0U7RUFDRSxtQkFBQTtBQUFKO0FBR0U7RUFDRSxjQUFBO0FBQUo7QUFHRTtFQUNFLGlCQUFBO0FBQUoiLCJmaWxlIjoibmV3cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBDdXN0b20gU2tlbGV0b24gTGluZSBIZWlnaHQgYW5kIE1hcmdpbiAqL1xuLmN1c3RvbS1za2VsZXRvbiBpb24tc2tlbGV0b24tdGV4dCB7XG4gICAgbGluZS1oZWlnaHQ6IDEzcHg7XG4gIH1cbiAgXG4gIC5jdXN0b20tc2tlbGV0b24gaW9uLXNrZWxldG9uLXRleHQ6bGFzdC1jaGlsZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICB9XG5cblxuICBpb24taXRlbSBpb24tbGFiZWx7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgfVxuICBcbiAgcHtcbiAgICBjb2xvcjogIzJhMmEyYTtcbiAgfVxuXG4gIGgye1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9Il19 */");

/***/ }),

/***/ "mi7v":
/*!*******************************************************!*\
  !*** ./src/app/pages/event-modal/event-modal.page.ts ***!
  \*******************************************************/
/*! exports provided: EventModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventModalPage", function() { return EventModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_event_modal_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./event-modal.page.html */ "VO3K");
/* harmony import */ var _event_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event-modal.page.scss */ "zFP5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "e8h1");









let EventModalPage = class EventModalPage {
    constructor(modalCtrl, storage, router, http, navCtrl) {
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this.router = router;
        this.http = http;
        this.navCtrl = navCtrl;
        this.modalReady = false;
    }
    ngAfterViewInit() {
        if (this.registered == true) {
        }
        setTimeout(() => {
            this.modalReady = true;
        }, 0);
    }
    // function attached to the close button to close the modal
    close() {
        this.modalCtrl.dismiss();
    }
    // function to register for an event calling the php script
    registerForEvent() {
        this.storage.get('userID').then((val) => {
            //need to pass the userID eventID, and attendance Value
            // attendance valaue is initially set to null, 0 means the user is registered but not attendin, and 1 is for registered and attending
            //thus we are hardcoding it to 0 and it will be updated once the attendance is set
            var obj = { func: "add_participant", userID: val, eventID: this.eventID, attendance: 0 };
            this.http.post("https://recycle.hpc.tcnj.edu/php/participants-handler.php", JSON.stringify(obj)).subscribe(data => {
                var result = data;
                if (result["addSuccess"]) {
                    this.eventObj.registered = this.registered = true;
                }
            });
        });
    }
    // function to unregister for an event calling the php script
    unregisterForEvent() {
        this.storage.get('userID').then((val) => {
            //need to pass the eventID, and userID to the php function 
            var obj = { func: "delete_participant", eventID: this.eventID, userID: val };
            this.http.post("https://recycle.hpc.tcnj.edu/php/participants-handler.php", JSON.stringify(obj)).subscribe(data => {
                var result = data;
                if (result["deleteSuccess"]) {
                    this.eventObj.registered = this.registered = false;
                }
            });
        });
    }
};
EventModalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
];
EventModalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-event-modal',
        template: _raw_loader_event_modal_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_event_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EventModalPage);



/***/ }),

/***/ "qUUn":
/*!*******************************************!*\
  !*** ./src/app/pages/news/news.module.ts ***!
  \*******************************************/
/*! exports provided: NewsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsPageModule", function() { return NewsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _news_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./news-routing.module */ "XkMT");
/* harmony import */ var _news_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./news.page */ "Bp3h");
/* harmony import */ var _event_modal_event_modal_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../event-modal/event-modal.module */ "YKP9");








let NewsPageModule = class NewsPageModule {
};
NewsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _news_routing_module__WEBPACK_IMPORTED_MODULE_5__["NewsPageRoutingModule"],
            _event_modal_event_modal_module__WEBPACK_IMPORTED_MODULE_7__["EventModalPageModule"]
        ],
        declarations: [_news_page__WEBPACK_IMPORTED_MODULE_6__["NewsPage"]]
    })
], NewsPageModule);



/***/ }),

/***/ "zFP5":
/*!*********************************************************!*\
  !*** ./src/app/pages/event-modal/event-modal.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".subtitle {\n  position: absolute;\n  top: 8px;\n  font-size: 80%;\n  padding-right: 20%;\n  word-wrap: break-word;\n  width: 11em;\n}\n\n.validation-errors {\n  color: red;\n  margin: 10px;\n  font-size: 75%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2V2ZW50LW1vZGFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUdFO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBQUoiLCJmaWxlIjoiZXZlbnQtbW9kYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN1YnRpdGxlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA4cHg7XG4gICAgZm9udC1zaXplOiA4MCU7XG4gICAgcGFkZGluZy1yaWdodDogMjAlO1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICB3aWR0aDogMTFlbTsgXG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcbiAgfVxuXG4gIC52YWxpZGF0aW9uLWVycm9yc3tcbiAgICBjb2xvcjogcmVkOyBcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgZm9udC1zaXplOiA3NSU7XG59XG5cbi8vICAgLm1vZGFsLWJvZHkgcCB7XG4vLyAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuLy8gfSJdfQ== */");

/***/ })

}]);
//# sourceMappingURL=pages-news-news-module-es2015.js.map