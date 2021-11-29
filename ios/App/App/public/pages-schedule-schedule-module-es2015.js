(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-schedule-schedule-module"],{

/***/ "4uF0":
/*!***********************************************************!*\
  !*** ./src/app/pages/schedule/schedule-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: SchedulePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchedulePageRoutingModule", function() { return SchedulePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _schedule_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./schedule.page */ "jnUA");




const routes = [
    {
        path: '',
        component: _schedule_page__WEBPACK_IMPORTED_MODULE_3__["SchedulePage"]
    }
];
let SchedulePageRoutingModule = class SchedulePageRoutingModule {
};
SchedulePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SchedulePageRoutingModule);



/***/ }),

/***/ "jaRq":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/schedule/schedule.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar mode=\"ios\">\n    <ion-title>\n      <div class=\"ion-text-wrap\">\n        My Schedule\n      </div>\n    </ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu =\"main-menu\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n\n  <ion-segment [(ngModel)]=\"calendar.mode\">\n\n    <ion-segment-button value=\"month\">\n      <ion-label>Month</ion-label>\n    </ion-segment-button>\n\n\n    <ion-segment-button value=\"week\">\n      <ion-label>Week</ion-label>\n    </ion-segment-button>\n    \n    <ion-segment-button value=\"day\">\n      <ion-label>Day</ion-label>\n    </ion-segment-button>\n\n  </ion-segment>\n\n  <ion-row>\n    <ion-col size=\"2\">\n      <ion-button aria-label=\"back\" fill=\"clear\" (click)=\"back()\">\n        <ion-icon name=\"arrow-back\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-col>\n\n    <ion-col size=\"8\" class=\"ion-text-center\">\n      <h2>{{ viewTitle }}</h2>\n    </ion-col>\n\n    <ion-col size=\"2\">\n      <ion-button aria-label=\"next\" fill=\"clear\" (click)=\"next()\">\n        <ion-icon name=\"arrow-forward\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-col>\n\n\n  </ion-row>\n\n  <calendar\n    [eventSource]=\"eventSource\"\n    [calendarMode]=\"calendar.mode\"\n    [currentDate]=\"calendar.currentDate\"\n    (onTitleChanged)=\"onViewTitleChanged($event)\"\n    (onEventSelected)=\"onEventSelected($event)\"\n    [monthviewDisplayEventTemplate]=\"foo\"\n    [monthviewEventDetailTemplate]=\"template\"\n  >\n  </calendar>\n\n  <ng-template #foo let-view=\"view\" let-row=\"row\" let-col=\"col\">\n    {{view.dates[row*7+col].label}}    \n  </ng-template>\n\n  <ng-template #template let-showEventDetail=\"showEventDetail\" let-selectedDate=\"selectedDate\" let-noEventsLabel=\"noEventsLabel\">\n    <ion-list class=\"event-detail-container\" has-bouncing=\"false\" *ngIf=\"showEventDetail\" overflow-scroll=\"false\">\n      <ion-item lines=\"full\" *ngFor=\"let event of selectedDate?.events\" (click)=\"onEventSelected(event)\">\n        <span *ngIf=\"!event.allDay\" class=\"monthview-eventdetail-timecolumn\">\n          {{event.startTime|date: 'h:mma'}}-{{event.endTime|date: 'h:mma'}} \n\n        </span>\n        <span *ngIf=\"event.allDay\" class=\"monthview-eventdetail-timecolumn\">{{allDayLabel}}</span>\n        <span class=\"event-detail\">&nbsp; |  {{(event.title.length > 20)? (event.title | slice:0:20)+'..':(event.title) }}</span>\n      </ion-item>\n      <ion-item lines=\"full\" *ngIf=\"selectedDate?.events.length==0\">\n        <div class=\"no-events-label\">{{noEventsLabel}}</div>\n      </ion-item>\n    </ion-list>\n  </ng-template>\n\n\n</ion-content>\n\n\n  <ion-footer class=\"ion-no-border\">\n    <ion-toolbar>\n\n        <ion-button aria-label=\"My Registered Events\" (click)=\"passEventArray($event)\" class=\"small-text\" color=\"success\" expand=\"block\">My Registered Events</ion-button>\n\n    </ion-toolbar>\n  </ion-footer>");

/***/ }),

/***/ "jnUA":
/*!*************************************************!*\
  !*** ./src/app/pages/schedule/schedule.page.ts ***!
  \*************************************************/
/*! exports provided: SchedulePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchedulePage", function() { return SchedulePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_schedule_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./schedule.page.html */ "jaRq");
/* harmony import */ var _schedule_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./schedule.page.scss */ "q7zA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ionic2_calendar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ionic2-calendar */ "L+Ny");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _event_modal_event_modal_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../event-modal/event-modal.page */ "mi7v");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/storage */ "e8h1");











let SchedulePage = class SchedulePage {
    constructor(router, http, alertCtrl, locale, modalCtrl, storage) {
        this.router = router;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.locale = locale;
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this.eventSource = [];
        this.calendar = {
            mode: 'month',
            currentDate: new Date(),
        };
        this.loadAllEvents();
    }
    next() {
        this.myCal.slideNext();
    }
    back() {
        this.myCal.slidePrev();
    }
    onViewTitleChanged(title) {
        this.viewTitle = title;
    }
    loadAllEvents() {
        this.eventSource = this.loadEvents();
    }
    loadEvents() {
        this.storage.get('userID').then((val) => {
            var obj = { func: "get_my_events", userID: val };
            this.http.post("https://recycle.hpc.tcnj.edu/php/events-handler.php", JSON.stringify(obj)).subscribe(data => {
                var result = data;
                console.log(result);
                this.createStaticNormalDayEvents(result);
                this.myCal.loadEvents();
            });
        });
        return this.eventSource;
    }
    createStaticNormalDayEvents(events) {
        for (var i = 0; i < events.length; i++) {
            var date = events[i]["eventDate"].split("-");
            date = new Date(parseInt(date[0]), parseInt(date[1]) - 1, parseInt(date[2]));
            var name = events[i]["eventName"];
            var description = events[i]["eventDescription"];
            var start = events[i]["startTime"].split(":", 2);
            var startHour = start[0];
            var startMinute = start[1];
            var end = events[i]["endTime"].split(":", 2);
            var endHour = end[0];
            var endMinute = end[1];
            var startTime = new Date(date.getFullYear(), date.getMonth(), date.getDate(), startHour, startMinute, 0);
            var endTime = new Date(date.getFullYear(), date.getMonth(), date.getDate(), endHour, endMinute, 0);
            this.eventSource.push({
                title: name,
                startTime: startTime,
                endTime: endTime,
                desc: description,
                allDay: false,
                ID: events[i]["eventID"],
                registered: (events[i]["attended"] != null)
            });
        }
    }
    passEventArray(ev) {
        let navigationExtras = {
            state: {
                events: this.eventSource
            }
        };
        this.router.navigate(['/my-registered-events'], navigationExtras);
    }
    // https://stackoverflow.com/questions/1500260/detect-urls-in-text-with-javascript 
    // function to detect a link from within an event description and allow it to be clickable in the event
    linkify(text) {
        var urlRegex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
        return text.replace(urlRegex, function (url) {
            url = '<a href="' + url + '" target="_blank">  here </a>';
            console.log(url);
            return url;
        });
    }
    onEventSelected(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let date = Object(_angular_common__WEBPACK_IMPORTED_MODULE_8__["formatDate"])(event.startTime, 'MMM d, yyyy', this.locale);
            let start = Object(_angular_common__WEBPACK_IMPORTED_MODULE_8__["formatDate"])(event.startTime, 'h:mma', this.locale);
            let end = Object(_angular_common__WEBPACK_IMPORTED_MODULE_8__["formatDate"])(event.endTime, 'h:mma', this.locale);
            const modal = yield this.modalCtrl.create({
                component: _event_modal_event_modal_page__WEBPACK_IMPORTED_MODULE_9__["EventModalPage"],
                componentProps: {
                    eventObj: event,
                    eventName: event.title,
                    eventTime: date + '    ' + start + ' - ' + end,
                    eventDescription: this.linkify(event.desc),
                    eventID: event.ID,
                    registered: event.registered
                }
            });
            yield modal.present();
        });
    }
};
SchedulePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["LOCALE_ID"],] }] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_10__["Storage"] }
];
SchedulePage.propDecorators = {
    myCal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [ionic2_calendar__WEBPACK_IMPORTED_MODULE_4__["CalendarComponent"],] }]
};
SchedulePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-schedule',
        template: _raw_loader_schedule_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_schedule_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SchedulePage);



/***/ }),

/***/ "nLfy":
/*!***************************************************!*\
  !*** ./src/app/pages/schedule/schedule.module.ts ***!
  \***************************************************/
/*! exports provided: SchedulePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchedulePageModule", function() { return SchedulePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _schedule_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./schedule-routing.module */ "4uF0");
/* harmony import */ var ionic2_calendar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ionic2-calendar */ "L+Ny");
/* harmony import */ var _event_modal_event_modal_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../event-modal/event-modal.module */ "YKP9");
/* harmony import */ var _schedule_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./schedule.page */ "jnUA");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/locales/en */ "tAZD");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_10__);












Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["registerLocaleData"])(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_10___default.a);
let SchedulePageModule = class SchedulePageModule {
};
SchedulePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_9__["IonicStorageModule"].forRoot(),
            _schedule_routing_module__WEBPACK_IMPORTED_MODULE_5__["SchedulePageRoutingModule"],
            ionic2_calendar__WEBPACK_IMPORTED_MODULE_6__["NgCalendarModule"],
            _event_modal_event_modal_module__WEBPACK_IMPORTED_MODULE_7__["EventModalPageModule"]
        ],
        declarations: [_schedule_page__WEBPACK_IMPORTED_MODULE_8__["SchedulePage"]],
        providers: [
            { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"], useValue: 'en-EN' }
        ]
    })
], SchedulePageModule);



/***/ }),

/***/ "q7zA":
/*!***************************************************!*\
  !*** ./src/app/pages/schedule/schedule.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".event-indicator {\n  background: var(--ion-color-success);\n  width: 5px;\n  height: 5px;\n  border-radius: 5px;\n  margin: 0;\n  padding: 0;\n  display: table-cell;\n  word-wrap: break-word;\n  display: none;\n}\n\n.indicator-container {\n  padding-left: 0.5rem;\n  padding-bottom: 0.4rem;\n  word-wrap: break-word;\n}\n\n:host ::ng-deep .monthview-primary-with-event {\n  background-color: var(--ion-color-primary) !important;\n}\n\n:host ::ng-deep .monthview-selected {\n  background-color: var(--ion-color-success) !important;\n}\n\n.with-event {\n  background-color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NjaGVkdWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9DQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7QUFDSjs7QUFFRTtFQUNFLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtBQUNKOztBQUdNO0VBQ0UscURBQUE7QUFBUjs7QUFHTTtFQUNJLHFEQUFBO0FBRFY7O0FBS0U7RUFDSSwwQ0FBQTtBQUZOIiwiZmlsZSI6InNjaGVkdWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ldmVudC1pbmRpY2F0b3J7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpO1xuICAgIHdpZHRoOiA1cHg7XG4gICAgaGVpZ2h0OiA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOjA7XG4gICAgZGlzcGxheTp0YWJsZS1jZWxsO1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICBkaXNwbGF5Om5vbmU7XG4gIH1cbiAgXG4gIC5pbmRpY2F0b3ItY29udGFpbmVye1xuICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAwLjRyZW07XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICB9XG5cbiAgOmhvc3QgOjpuZy1kZWVwe1xuICAgICAgLm1vbnRodmlldy1wcmltYXJ5LXdpdGgtZXZlbnR7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSAhaW1wb3J0YW50O1xuICAgICAgfVxuXG4gICAgICAubW9udGh2aWV3LXNlbGVjdGVke1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKSAhaW1wb3J0YW50O1xuICAgICAgfVxuICB9XG5cbiAgLndpdGgtZXZlbnR7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIH1cbiJdfQ== */");

/***/ }),

/***/ "tAZD":
/*!****************************************************!*\
  !*** ./node_modules/@angular/common/locales/en.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
(function (factory) {
    if ( true && typeof module.exports === "object") {
        var v = factory(null, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // THIS CODE IS GENERATED - DO NOT MODIFY
    // See angular/tools/gulp-tasks/cldr/extract.js
    var u = undefined;
    function plural(n) {
        var i = Math.floor(Math.abs(n)), v = n.toString().replace(/^[^.]*\.?/, '').length;
        if (i === 1 && v === 0)
            return 1;
        return 5;
    }
    exports.default = [
        'en',
        [['a', 'p'], ['AM', 'PM'], u],
        [['AM', 'PM'], u, u],
        [
            ['S', 'M', 'T', 'W', 'T', 'F', 'S'], ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
        ],
        u,
        [
            ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
            ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            [
                'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
                'October', 'November', 'December'
            ]
        ],
        u,
        [['B', 'A'], ['BC', 'AD'], ['Before Christ', 'Anno Domini']],
        0,
        [6, 0],
        ['M/d/yy', 'MMM d, y', 'MMMM d, y', 'EEEE, MMMM d, y'],
        ['h:mm a', 'h:mm:ss a', 'h:mm:ss a z', 'h:mm:ss a zzzz'],
        ['{1}, {0}', u, '{1} \'at\' {0}', u],
        ['.', ',', ';', '%', '+', '-', 'E', '×', '‰', '∞', 'NaN', ':'],
        ['#,##0.###', '#,##0%', '¤#,##0.00', '#E0'],
        'USD',
        '$',
        'US Dollar',
        {},
        'ltr',
        plural
    ];
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vbG9jYWxlcy9lbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7OztJQUVILHlDQUF5QztJQUN6QywrQ0FBK0M7SUFFL0MsSUFBTSxDQUFDLEdBQUcsU0FBUyxDQUFDO0lBRXBCLFNBQVMsTUFBTSxDQUFDLENBQVM7UUFDdkIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUNsRixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFBRSxPQUFPLENBQUMsQ0FBQztRQUNqQyxPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCxrQkFBZTtRQUNiLElBQUk7UUFDSixDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM3QixDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDcEI7WUFDRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDO1lBQ3RGLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsVUFBVSxDQUFDO1lBQzlFLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDO1NBQzNDO1FBQ0QsQ0FBQztRQUNEO1lBQ0UsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztZQUM1RCxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDO1lBQ3BGO2dCQUNFLFNBQVMsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsV0FBVztnQkFDckYsU0FBUyxFQUFFLFVBQVUsRUFBRSxVQUFVO2FBQ2xDO1NBQ0Y7UUFDRCxDQUFDO1FBQ0QsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLGVBQWUsRUFBRSxhQUFhLENBQUMsQ0FBQztRQUM1RCxDQUFDO1FBQ0QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ04sQ0FBQyxRQUFRLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxpQkFBaUIsQ0FBQztRQUN0RCxDQUFDLFFBQVEsRUFBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLGdCQUFnQixDQUFDO1FBQ3hELENBQUMsVUFBVSxFQUFFLENBQUMsRUFBRSxnQkFBZ0IsRUFBRSxDQUFDLENBQUM7UUFDcEMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQztRQUM5RCxDQUFDLFdBQVcsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLEtBQUssQ0FBQztRQUMzQyxLQUFLO1FBQ0wsR0FBRztRQUNILFdBQVc7UUFDWCxFQUFFO1FBQ0YsS0FBSztRQUNMLE1BQU07S0FDUCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbi8vIFRISVMgQ09ERSBJUyBHRU5FUkFURUQgLSBETyBOT1QgTU9ESUZZXG4vLyBTZWUgYW5ndWxhci90b29scy9ndWxwLXRhc2tzL2NsZHIvZXh0cmFjdC5qc1xuXG5jb25zdCB1ID0gdW5kZWZpbmVkO1xuXG5mdW5jdGlvbiBwbHVyYWwobjogbnVtYmVyKTogbnVtYmVyIHtcbiAgbGV0IGkgPSBNYXRoLmZsb29yKE1hdGguYWJzKG4pKSwgdiA9IG4udG9TdHJpbmcoKS5yZXBsYWNlKC9eW14uXSpcXC4/LywgJycpLmxlbmd0aDtcbiAgaWYgKGkgPT09IDEgJiYgdiA9PT0gMCkgcmV0dXJuIDE7XG4gIHJldHVybiA1O1xufVxuXG5leHBvcnQgZGVmYXVsdCBbXG4gICdlbicsXG4gIFtbJ2EnLCAncCddLCBbJ0FNJywgJ1BNJ10sIHVdLFxuICBbWydBTScsICdQTSddLCB1LCB1XSxcbiAgW1xuICAgIFsnUycsICdNJywgJ1QnLCAnVycsICdUJywgJ0YnLCAnUyddLCBbJ1N1bicsICdNb24nLCAnVHVlJywgJ1dlZCcsICdUaHUnLCAnRnJpJywgJ1NhdCddLFxuICAgIFsnU3VuZGF5JywgJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHVyc2RheScsICdGcmlkYXknLCAnU2F0dXJkYXknXSxcbiAgICBbJ1N1JywgJ01vJywgJ1R1JywgJ1dlJywgJ1RoJywgJ0ZyJywgJ1NhJ11cbiAgXSxcbiAgdSxcbiAgW1xuICAgIFsnSicsICdGJywgJ00nLCAnQScsICdNJywgJ0onLCAnSicsICdBJywgJ1MnLCAnTycsICdOJywgJ0QnXSxcbiAgICBbJ0phbicsICdGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJywgJ0p1bCcsICdBdWcnLCAnU2VwJywgJ09jdCcsICdOb3YnLCAnRGVjJ10sXG4gICAgW1xuICAgICAgJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJyxcbiAgICAgICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ1xuICAgIF1cbiAgXSxcbiAgdSxcbiAgW1snQicsICdBJ10sIFsnQkMnLCAnQUQnXSwgWydCZWZvcmUgQ2hyaXN0JywgJ0Fubm8gRG9taW5pJ11dLFxuICAwLFxuICBbNiwgMF0sXG4gIFsnTS9kL3l5JywgJ01NTSBkLCB5JywgJ01NTU0gZCwgeScsICdFRUVFLCBNTU1NIGQsIHknXSxcbiAgWydoOm1tIGEnLCAnaDptbTpzcyBhJywgJ2g6bW06c3MgYSB6JywgJ2g6bW06c3MgYSB6enp6J10sXG4gIFsnezF9LCB7MH0nLCB1LCAnezF9IFxcJ2F0XFwnIHswfScsIHVdLFxuICBbJy4nLCAnLCcsICc7JywgJyUnLCAnKycsICctJywgJ0UnLCAnw5cnLCAn4oCwJywgJ+KInicsICdOYU4nLCAnOiddLFxuICBbJyMsIyMwLiMjIycsICcjLCMjMCUnLCAnwqQjLCMjMC4wMCcsICcjRTAnXSxcbiAgJ1VTRCcsXG4gICckJyxcbiAgJ1VTIERvbGxhcicsXG4gIHt9LFxuICAnbHRyJyxcbiAgcGx1cmFsXG5dO1xuIl19

/***/ })

}]);
//# sourceMappingURL=pages-schedule-schedule-module-es2015.js.map