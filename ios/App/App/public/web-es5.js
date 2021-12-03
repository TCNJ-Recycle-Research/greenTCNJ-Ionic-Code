(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["web"], {
    /***/
    "FeWW":
    /*!***************************************************************************!*\
      !*** ./node_modules/@capacitor-community/barcode-scanner/dist/esm/web.js ***!
      \***************************************************************************/

    /*! exports provided: BarcodeScannerWeb */

    /***/
    function FeWW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BarcodeScannerWeb", function () {
        return BarcodeScannerWeb;
      });
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @capacitor/core */
      "FUe0");

      var BarcodeScannerWeb = /*#__PURE__*/function (_capacitor_core__WEBP) {
        _inherits(BarcodeScannerWeb, _capacitor_core__WEBP);

        var _super = _createSuper(BarcodeScannerWeb);

        function BarcodeScannerWeb() {
          _classCallCheck(this, BarcodeScannerWeb);

          return _super.apply(this, arguments);
        }

        _createClass(BarcodeScannerWeb, [{
          key: "prepare",
          value: function () {
            var _prepare = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      throw this.unimplemented('Not implemented on web.');

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            function prepare() {
              return _prepare.apply(this, arguments);
            }

            return prepare;
          }()
        }, {
          key: "hideBackground",
          value: function () {
            var _hideBackground = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      throw this.unimplemented('Not implemented on web.');

                    case 1:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));

            function hideBackground() {
              return _hideBackground.apply(this, arguments);
            }

            return hideBackground;
          }()
        }, {
          key: "showBackground",
          value: function () {
            var _showBackground = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      throw this.unimplemented('Not implemented on web.');

                    case 1:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));

            function showBackground() {
              return _showBackground.apply(this, arguments);
            }

            return showBackground;
          }()
        }, {
          key: "startScan",
          value: function () {
            var _startScan = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(_options) {
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      throw this.unimplemented('Not implemented on web.');

                    case 1:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));

            function startScan(_x) {
              return _startScan.apply(this, arguments);
            }

            return startScan;
          }()
        }, {
          key: "stopScan",
          value: function () {
            var _stopScan = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      throw this.unimplemented('Not implemented on web.');

                    case 1:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));

            function stopScan() {
              return _stopScan.apply(this, arguments);
            }

            return stopScan;
          }()
        }, {
          key: "checkPermission",
          value: function () {
            var _checkPermission = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(_options) {
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      throw this.unimplemented('Not implemented on web.');

                    case 1:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));

            function checkPermission(_x2) {
              return _checkPermission.apply(this, arguments);
            }

            return checkPermission;
          }()
        }, {
          key: "openAppSettings",
          value: function () {
            var _openAppSettings = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      throw this.unimplemented('Not implemented on web.');

                    case 1:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));

            function openAppSettings() {
              return _openAppSettings.apply(this, arguments);
            }

            return openAppSettings;
          }()
        }]);

        return BarcodeScannerWeb;
      }(_capacitor_core__WEBPACK_IMPORTED_MODULE_0__["WebPlugin"]); //# sourceMappingURL=web.js.map

      /***/

    },

    /***/
    "p3nu":
    /*!*****************************************************!*\
      !*** ./node_modules/@capacitor/app/dist/esm/web.js ***!
      \*****************************************************/

    /*! exports provided: AppWeb */

    /***/
    function p3nu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppWeb", function () {
        return AppWeb;
      });
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @capacitor/core */
      "FUe0");

      var AppWeb = /*#__PURE__*/function (_capacitor_core__WEBP2) {
        _inherits(AppWeb, _capacitor_core__WEBP2);

        var _super2 = _createSuper(AppWeb);

        function AppWeb() {
          var _this;

          _classCallCheck(this, AppWeb);

          _this = _super2.call(this);

          _this.handleVisibilityChange = function () {
            var data = {
              isActive: document.hidden !== true
            };

            _this.notifyListeners('appStateChange', data);
          };

          document.addEventListener('visibilitychange', _this.handleVisibilityChange, false);
          return _this;
        }

        _createClass(AppWeb, [{
          key: "exitApp",
          value: function exitApp() {
            throw this.unimplemented('Not implemented on web.');
          }
        }, {
          key: "getInfo",
          value: function () {
            var _getInfo = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      throw this.unimplemented('Not implemented on web.');

                    case 1:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));

            function getInfo() {
              return _getInfo.apply(this, arguments);
            }

            return getInfo;
          }()
        }, {
          key: "getLaunchUrl",
          value: function () {
            var _getLaunchUrl = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      return _context9.abrupt("return", {
                        url: ''
                      });

                    case 1:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9);
            }));

            function getLaunchUrl() {
              return _getLaunchUrl.apply(this, arguments);
            }

            return getLaunchUrl;
          }()
        }, {
          key: "getState",
          value: function () {
            var _getState = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      return _context10.abrupt("return", {
                        isActive: document.hidden !== true
                      });

                    case 1:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10);
            }));

            function getState() {
              return _getState.apply(this, arguments);
            }

            return getState;
          }()
        }]);

        return AppWeb;
      }(_capacitor_core__WEBPACK_IMPORTED_MODULE_0__["WebPlugin"]); //# sourceMappingURL=web.js.map

      /***/

    },

    /***/
    "srMn":
    /*!*********************************************************!*\
      !*** ./node_modules/@capacitor/storage/dist/esm/web.js ***!
      \*********************************************************/

    /*! exports provided: StorageWeb */

    /***/
    function srMn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StorageWeb", function () {
        return StorageWeb;
      });
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @capacitor/core */
      "FUe0");

      var StorageWeb = /*#__PURE__*/function (_capacitor_core__WEBP3) {
        _inherits(StorageWeb, _capacitor_core__WEBP3);

        var _super3 = _createSuper(StorageWeb);

        function StorageWeb() {
          var _this2;

          _classCallCheck(this, StorageWeb);

          _this2 = _super3.apply(this, arguments);
          _this2.group = 'CapacitorStorage';
          return _this2;
        }

        _createClass(StorageWeb, [{
          key: "configure",
          value: function () {
            var _configure = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(_ref) {
              var group;
              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      group = _ref.group;

                      if (typeof group === 'string') {
                        this.group = group;
                      }

                    case 2:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this);
            }));

            function configure(_x3) {
              return _configure.apply(this, arguments);
            }

            return configure;
          }()
        }, {
          key: "get",
          value: function () {
            var _get = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(options) {
              var value;
              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      value = this.impl.getItem(this.applyPrefix(options.key));
                      return _context12.abrupt("return", {
                        value: value
                      });

                    case 2:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12, this);
            }));

            function get(_x4) {
              return _get.apply(this, arguments);
            }

            return get;
          }()
        }, {
          key: "set",
          value: function () {
            var _set = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(options) {
              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      this.impl.setItem(this.applyPrefix(options.key), options.value);

                    case 1:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13, this);
            }));

            function set(_x5) {
              return _set.apply(this, arguments);
            }

            return set;
          }()
        }, {
          key: "remove",
          value: function () {
            var _remove = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(options) {
              return regeneratorRuntime.wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      this.impl.removeItem(this.applyPrefix(options.key));

                    case 1:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14, this);
            }));

            function remove(_x6) {
              return _remove.apply(this, arguments);
            }

            return remove;
          }()
        }, {
          key: "keys",
          value: function () {
            var _keys = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
              var _this3 = this;

              var keys;
              return regeneratorRuntime.wrap(function _callee15$(_context15) {
                while (1) {
                  switch (_context15.prev = _context15.next) {
                    case 0:
                      keys = this.rawKeys().map(function (k) {
                        return k.substring(_this3.prefix.length);
                      });
                      return _context15.abrupt("return", {
                        keys: keys
                      });

                    case 2:
                    case "end":
                      return _context15.stop();
                  }
                }
              }, _callee15, this);
            }));

            function keys() {
              return _keys.apply(this, arguments);
            }

            return keys;
          }()
        }, {
          key: "clear",
          value: function () {
            var _clear = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
              var _iterator, _step, key;

              return regeneratorRuntime.wrap(function _callee16$(_context16) {
                while (1) {
                  switch (_context16.prev = _context16.next) {
                    case 0:
                      _iterator = _createForOfIteratorHelper(this.rawKeys());

                      try {
                        for (_iterator.s(); !(_step = _iterator.n()).done;) {
                          key = _step.value;
                          this.impl.removeItem(key);
                        }
                      } catch (err) {
                        _iterator.e(err);
                      } finally {
                        _iterator.f();
                      }

                    case 2:
                    case "end":
                      return _context16.stop();
                  }
                }
              }, _callee16, this);
            }));

            function clear() {
              return _clear.apply(this, arguments);
            }

            return clear;
          }()
        }, {
          key: "migrate",
          value: function () {
            var _migrate = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
              var _a, migrated, existing, oldprefix, keys, _iterator2, _step2, oldkey, key, value, _yield$this$get, currentValue;

              return regeneratorRuntime.wrap(function _callee17$(_context17) {
                while (1) {
                  switch (_context17.prev = _context17.next) {
                    case 0:
                      migrated = [];
                      existing = [];
                      oldprefix = '_cap_';
                      keys = Object.keys(this.impl).filter(function (k) {
                        return k.indexOf(oldprefix) === 0;
                      });
                      _iterator2 = _createForOfIteratorHelper(keys);
                      _context17.prev = 5;

                      _iterator2.s();

                    case 7:
                      if ((_step2 = _iterator2.n()).done) {
                        _context17.next = 24;
                        break;
                      }

                      oldkey = _step2.value;
                      key = oldkey.substring(oldprefix.length);
                      value = (_a = this.impl.getItem(oldkey)) !== null && _a !== void 0 ? _a : '';
                      _context17.next = 13;
                      return this.get({
                        key: key
                      });

                    case 13:
                      _yield$this$get = _context17.sent;
                      currentValue = _yield$this$get.value;

                      if (!(typeof currentValue === 'string')) {
                        _context17.next = 19;
                        break;
                      }

                      existing.push(key);
                      _context17.next = 22;
                      break;

                    case 19:
                      _context17.next = 21;
                      return this.set({
                        key: key,
                        value: value
                      });

                    case 21:
                      migrated.push(key);

                    case 22:
                      _context17.next = 7;
                      break;

                    case 24:
                      _context17.next = 29;
                      break;

                    case 26:
                      _context17.prev = 26;
                      _context17.t0 = _context17["catch"](5);

                      _iterator2.e(_context17.t0);

                    case 29:
                      _context17.prev = 29;

                      _iterator2.f();

                      return _context17.finish(29);

                    case 32:
                      return _context17.abrupt("return", {
                        migrated: migrated,
                        existing: existing
                      });

                    case 33:
                    case "end":
                      return _context17.stop();
                  }
                }
              }, _callee17, this, [[5, 26, 29, 32]]);
            }));

            function migrate() {
              return _migrate.apply(this, arguments);
            }

            return migrate;
          }()
        }, {
          key: "removeOld",
          value: function () {
            var _removeOld = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
              var oldprefix, keys, _iterator3, _step3, oldkey;

              return regeneratorRuntime.wrap(function _callee18$(_context18) {
                while (1) {
                  switch (_context18.prev = _context18.next) {
                    case 0:
                      oldprefix = '_cap_';
                      keys = Object.keys(this.impl).filter(function (k) {
                        return k.indexOf(oldprefix) === 0;
                      });
                      _iterator3 = _createForOfIteratorHelper(keys);

                      try {
                        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                          oldkey = _step3.value;
                          this.impl.removeItem(oldkey);
                        }
                      } catch (err) {
                        _iterator3.e(err);
                      } finally {
                        _iterator3.f();
                      }

                    case 4:
                    case "end":
                      return _context18.stop();
                  }
                }
              }, _callee18, this);
            }));

            function removeOld() {
              return _removeOld.apply(this, arguments);
            }

            return removeOld;
          }()
        }, {
          key: "impl",
          get: function get() {
            return window.localStorage;
          }
        }, {
          key: "prefix",
          get: function get() {
            return this.group === 'NativeStorage' ? '' : "".concat(this.group, ".");
          }
        }, {
          key: "rawKeys",
          value: function rawKeys() {
            var _this4 = this;

            return Object.keys(this.impl).filter(function (k) {
              return k.indexOf(_this4.prefix) === 0;
            });
          }
        }, {
          key: "applyPrefix",
          value: function applyPrefix(key) {
            return this.prefix + key;
          }
        }]);

        return StorageWeb;
      }(_capacitor_core__WEBPACK_IMPORTED_MODULE_0__["WebPlugin"]); //# sourceMappingURL=web.js.map

      /***/

    }
  }]);
})();
//# sourceMappingURL=web-es5.js.map