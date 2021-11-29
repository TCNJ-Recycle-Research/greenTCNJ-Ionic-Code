(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-my-registered-events-my-registered-events-module"], {
    /***/
    "VO3K":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/event-modal/event-modal.page.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function VO3K(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header translucent>\n  <ion-toolbar>\n    <ion-title>Event Registration</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button aria-label=\"close\" (click)=\"close()\">Close</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n  <ion-list inset=\"false\">\n    <ion-list-header class=\"ion-padding-right ion-padding-top\">\n      <h1 class=\"ion-no-margin\" [innerHTML]=\"eventName\"></h1>\n    </ion-list-header>\n    <ion-item lines=\"full\">\n      <ion-text  class=\"ion-color-medium\" color=\"ion-color-medium\" >\n        <p class=\"ion-no-margin\" [innerHTML]=\"eventTime\"></p>\n      </ion-text>\n    </ion-item>\n    <ion-item lines=\"full\" >\n      <ion-text>\n        <p [innerHTML]=\"eventDescription\"></p>\n      </ion-text>\n    </ion-item>\n    <ion-button aria-label=\"Register\" [class.ion-hide]=\"registered == true\" class=\"ion-margin-top\" color=\"success\" expand=\"block\" (click)=\"registerForEvent()\">Register</ion-button>\n    <ion-button aria-label=\"Unregister\" [class.ion-hide]=\"registered == false\" class=\"ion-margin-top\" color=\"danger\" expand=\"block\" (click)=\"unregisterForEvent()\">Unregister</ion-button>\n  </ion-list>\n</ion-content>";
      /***/
    },

    /***/
    "XudC":
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/my-registered-events/my-registered-events.page.html ***!
      \*****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function XudC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/schedule\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      <div class=\"ion-text-wrap\">\n        My Registered Events\n      </div>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n\n  <ion-segment color=\"primary\" [(ngModel)]=\"type\" scrollable>\n    <ion-segment-button value=\"all\">\n      <ion-label>All</ion-label>\n    </ion-segment-button>\n\n    <ion-segment-button value=\"future\">\n      <ion-label>Future</ion-label>\n    </ion-segment-button>\n\n    <ion-segment-button value=\"past\">\n      <ion-label>Past</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n\n  <div [ngSwitch]=\"type\">\n    <ion-list *ngSwitchCase=\"'all'\">\n\n      <ion-item>\n        <h2><strong>All Registered Events</strong></h2>\n      </ion-item>\n\n      <ion-list>\n\n        <ion-item *ngIf=\"noEvents != null\"> \n          <ion-label>\n            <h2>\n              {{ noEvents }} \n            </h2>\n          </ion-label>\n        </ion-item>\n\n\n        <ion-item *ngFor=\"let event of myEvents\" (click)=\"onEventSelected(event)\">\n          <ion-label>\n            <h2>\n              {{event.title}} \n            </h2>\n            <p>\n              {{event.startTime|date: 'MM/dd/yyyy'}} \n            </p>\n          </ion-label>\n        </ion-item>\n      </ion-list>\n\n    </ion-list>\n\n    <ion-list *ngSwitchCase=\"'future'\">\n\n      <ion-item>\n        <h2><strong>All Upcoming Events</strong></h2>\n      </ion-item>\n\n      <ion-list>\n        \n        <ion-item *ngIf=\"noFutureEvents != null\"> \n          <ion-label>\n            <h2>\n              {{ noFutureEvents }} \n            </h2>\n          </ion-label>\n        </ion-item>\n\n        <ion-item *ngFor=\"let event of futureEvents\" (click)=\"onEventSelected(event)\">\n          <ion-label>\n            <h2>\n              {{event.title}} \n            </h2>\n            <p>\n              {{event.startTime|date: 'MM/dd/yyyy'}} \n            </p>\n          </ion-label>\n        </ion-item>\n      </ion-list>\n\n    </ion-list>\n\n    <ion-list *ngSwitchCase=\"'past'\" >\n\n      <ion-item>\n        <h2><strong>All Past Events</strong></h2>\n      </ion-item>\n\n      <ion-list>\n\n        <ion-item *ngIf=\"noPastEvents != null\">\n          <ion-label>\n            <h2>\n              {{ noPastEvents }} \n            </h2>\n          </ion-label>\n        </ion-item>\n\n        <ion-item *ngFor=\"let event of pastEvents\" (click)=\"onEventSelected(event)\">\n          <ion-label>\n            <h2>\n              {{event.title}} \n            </h2>\n            <p>\n              {{event.startTime|date: 'MM/dd/yyyy'}} \n            </p>\n          </ion-label>\n        </ion-item>\n      </ion-list>\n\n    </ion-list>\n  </div>\n\n\n\n</ion-content>\n";
      /***/
    },

    /***/
    "i6bQ":
    /*!***********************************************************************************!*\
      !*** ./src/app/pages/my-registered-events/my-registered-events-routing.module.ts ***!
      \***********************************************************************************/

    /*! exports provided: MyRegisteredEventsPageRoutingModule */

    /***/
    function i6bQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyRegisteredEventsPageRoutingModule", function () {
        return MyRegisteredEventsPageRoutingModule;
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


      var _my_registered_events_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./my-registered-events.page */
      "x9fP");

      var routes = [{
        path: '',
        component: _my_registered_events_page__WEBPACK_IMPORTED_MODULE_3__["MyRegisteredEventsPage"]
      }];

      var MyRegisteredEventsPageRoutingModule = function MyRegisteredEventsPageRoutingModule() {
        _classCallCheck(this, MyRegisteredEventsPageRoutingModule);
      };

      MyRegisteredEventsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MyRegisteredEventsPageRoutingModule);
      /***/
    },

    /***/
    "mHEi":
    /*!***************************************************************************!*\
      !*** ./src/app/pages/my-registered-events/my-registered-events.module.ts ***!
      \***************************************************************************/

    /*! exports provided: MyRegisteredEventsPageModule */

    /***/
    function mHEi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyRegisteredEventsPageModule", function () {
        return MyRegisteredEventsPageModule;
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


      var _my_registered_events_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./my-registered-events-routing.module */
      "i6bQ");
      /* harmony import */


      var _my_registered_events_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./my-registered-events.page */
      "x9fP");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");

      var MyRegisteredEventsPageModule = function MyRegisteredEventsPageModule() {
        _classCallCheck(this, MyRegisteredEventsPageModule);
      };

      MyRegisteredEventsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], //EventModalPageModule,
        _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["IonicStorageModule"].forRoot(), _my_registered_events_routing_module__WEBPACK_IMPORTED_MODULE_5__["MyRegisteredEventsPageRoutingModule"]],
        declarations: [_my_registered_events_page__WEBPACK_IMPORTED_MODULE_6__["MyRegisteredEventsPage"]]
      })], MyRegisteredEventsPageModule);
      /***/
    },

    /***/
    "mi7v":
    /*!*******************************************************!*\
      !*** ./src/app/pages/event-modal/event-modal.page.ts ***!
      \*******************************************************/

    /*! exports provided: EventModalPage */

    /***/
    function mi7v(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EventModalPage", function () {
        return EventModalPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_event_modal_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./event-modal.page.html */
      "VO3K");
      /* harmony import */


      var _event_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./event-modal.page.scss */
      "zFP5");
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");

      var EventModalPage = /*#__PURE__*/function () {
        function EventModalPage(modalCtrl, storage, router, http, navCtrl) {
          _classCallCheck(this, EventModalPage);

          this.modalCtrl = modalCtrl;
          this.storage = storage;
          this.router = router;
          this.http = http;
          this.navCtrl = navCtrl;
          this.modalReady = false;
        }

        _createClass(EventModalPage, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this = this;

            if (this.registered == true) {}

            setTimeout(function () {
              _this.modalReady = true;
            }, 0);
          } // function attached to the close button to close the modal

        }, {
          key: "close",
          value: function close() {
            this.modalCtrl.dismiss();
          } // function to register for an event calling the php script

        }, {
          key: "registerForEvent",
          value: function registerForEvent() {
            var _this2 = this;

            this.storage.get('userID').then(function (val) {
              //need to pass the userID eventID, and attendance Value
              // attendance valaue is initially set to null, 0 means the user is registered but not attendin, and 1 is for registered and attending
              //thus we are hardcoding it to 0 and it will be updated once the attendance is set
              var obj = {
                func: "add_participant",
                userID: val,
                eventID: _this2.eventID,
                attendance: 0
              };

              _this2.http.post("https://recycle.hpc.tcnj.edu/php/participants-handler.php", JSON.stringify(obj)).subscribe(function (data) {
                var result = data;

                if (result["addSuccess"]) {
                  _this2.eventObj.registered = _this2.registered = true;
                }
              });
            });
          } // function to unregister for an event calling the php script

        }, {
          key: "unregisterForEvent",
          value: function unregisterForEvent() {
            var _this3 = this;

            this.storage.get('userID').then(function (val) {
              //need to pass the eventID, and userID to the php function 
              var obj = {
                func: "delete_participant",
                eventID: _this3.eventID,
                userID: val
              };

              _this3.http.post("https://recycle.hpc.tcnj.edu/php/participants-handler.php", JSON.stringify(obj)).subscribe(function (data) {
                var result = data;

                if (result["deleteSuccess"]) {
                  _this3.eventObj.registered = _this3.registered = false;
                }
              });
            });
          }
        }]);

        return EventModalPage;
      }();

      EventModalPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }];
      };

      EventModalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-event-modal',
        template: _raw_loader_event_modal_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_event_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], EventModalPage);
      /***/
    },

    /***/
    "nvDp":
    /*!***************************************************************************!*\
      !*** ./src/app/pages/my-registered-events/my-registered-events.page.scss ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function nvDp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJteS1yZWdpc3RlcmVkLWV2ZW50cy5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "x9fP":
    /*!*************************************************************************!*\
      !*** ./src/app/pages/my-registered-events/my-registered-events.page.ts ***!
      \*************************************************************************/

    /*! exports provided: MyRegisteredEventsPage */

    /***/
    function x9fP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyRegisteredEventsPage", function () {
        return MyRegisteredEventsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_my_registered_events_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./my-registered-events.page.html */
      "XudC");
      /* harmony import */


      var _my_registered_events_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./my-registered-events.page.scss */
      "nvDp");
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
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _event_modal_event_modal_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../event-modal/event-modal.page */
      "mi7v");

      var MyRegisteredEventsPage = /*#__PURE__*/function () {
        function MyRegisteredEventsPage(router, route, http, alertCtrl, locale, modalCtrl) {
          var _this4 = this;

          _classCallCheck(this, MyRegisteredEventsPage);

          this.router = router;
          this.route = route;
          this.http = http;
          this.alertCtrl = alertCtrl;
          this.locale = locale;
          this.modalCtrl = modalCtrl; // arrays to hold all events, your registered events, registered past events, and registered future events, 

          this.eventList = [];
          this.myEvents = [];
          this.pastEvents = [];
          this.futureEvents = []; // date to sort events into past/future

          this.today = new Date(Date.now());
          this.route.queryParams.subscribe(function (params) {
            if (_this4.router.getCurrentNavigation().extras.state) {
              _this4.eventList = _this4.router.getCurrentNavigation().extras.state.events;

              for (var i = 0; i < _this4.eventList.length; i++) {
                _this4.registeredForEvent(i);
              }
            }
          });
          this.type = "all";
        }

        _createClass(MyRegisteredEventsPage, [{
          key: "registeredForEvent",
          value: function registeredForEvent(num) {
            if (this.eventList[num].registered) {
              this.myEvents.push(this.eventList[num]);
            }

            if (num == this.eventList.length - 1) {
              this.gotAllEvents = true;
              this.myEvents = this.myEvents.sort(function (a, b) {
                return b.date - a.date;
              });
              this.getAllEvents();
              this.sortEvents();
            }
          }
        }, {
          key: "getAllEvents",
          value: function getAllEvents() {
            return this.myEvents;
          }
        }, {
          key: "sortEvents",
          value: function sortEvents() {
            for (var i = 0; i < this.myEvents.length; i++) {
              // turns the event date into a date format
              var tempDate = new Date(this.myEvents[i].startTime); // if statement to sort through events into past and future arrays 

              if (tempDate >= this.today) {
                this.futureEvents.push(this.myEvents[i]);
              } else {
                this.pastEvents.unshift(this.myEvents[i]);
              }
            } // checks to see if any event arrays are empty by checking if length  == 0 to display no events message


            if (this.myEvents.length == 0) {
              this.noEvents = "No registered events.";
            } else {
              this.noEvents = null;
            }

            if (this.futureEvents.length == 0) {
              this.noFutureEvents = "No upcoming registered events.";
            } else {
              this.noFutureEvents = null;
            }

            if (this.pastEvents.length == 0) {
              this.noPastEvents = "No registered past events.";
            } else {
              this.noPastEvents = null;
            }
          } // opens up event-modal for the selected event, called the same way as it is being called on the schedule page

        }, {
          key: "onEventSelected",
          value: function onEventSelected(event) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var date, start, end, modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      date = Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["formatDate"])(event.startTime, 'MMM d, yyyy', this.locale);
                      start = Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["formatDate"])(event.startTime, 'h:mma', this.locale);
                      end = Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["formatDate"])(event.endTime, 'h:mma', this.locale);
                      _context.next = 5;
                      return this.modalCtrl.create({
                        component: _event_modal_event_modal_page__WEBPACK_IMPORTED_MODULE_8__["EventModalPage"],
                        componentProps: {
                          eventObj: event,
                          eventName: event.title,
                          eventTime: date + '    ' + start + ' - ' + end,
                          eventDescription: event.desc,
                          eventID: event.ID,
                          registered: event.registered
                        }
                      });

                    case 5:
                      modal = _context.sent;
                      _context.next = 8;
                      return modal.present();

                    case 8:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return MyRegisteredEventsPage;
      }();

      MyRegisteredEventsPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["LOCALE_ID"]]
          }]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
        }];
      };

      MyRegisteredEventsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-my-registered-events',
        template: _raw_loader_my_registered_events_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_my_registered_events_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], MyRegisteredEventsPage);
      /***/
    },

    /***/
    "zFP5":
    /*!*********************************************************!*\
      !*** ./src/app/pages/event-modal/event-modal.page.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function zFP5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".subtitle {\n  position: absolute;\n  top: 8px;\n  font-size: 80%;\n  padding-right: 20%;\n  word-wrap: break-word;\n  width: 11em;\n}\n\n.validation-errors {\n  color: red;\n  margin: 10px;\n  font-size: 75%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2V2ZW50LW1vZGFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUdFO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBQUoiLCJmaWxlIjoiZXZlbnQtbW9kYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN1YnRpdGxlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA4cHg7XG4gICAgZm9udC1zaXplOiA4MCU7XG4gICAgcGFkZGluZy1yaWdodDogMjAlO1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICB3aWR0aDogMTFlbTsgXG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcbiAgfVxuXG4gIC52YWxpZGF0aW9uLWVycm9yc3tcbiAgICBjb2xvcjogcmVkOyBcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgZm9udC1zaXplOiA3NSU7XG59XG5cbi8vICAgLm1vZGFsLWJvZHkgcCB7XG4vLyAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuLy8gfSJdfQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-my-registered-events-my-registered-events-module-es5.js.map