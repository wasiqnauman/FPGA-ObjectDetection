"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Banner.js":
/*!******************************!*\
  !*** ./components/Banner.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_images_banner_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../assets/images/banner.jpg */ "./assets/images/banner.jpg");
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Loader */ "./components/Loader.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "/home/renzo-wsl/Repos/FPGA-ObjectDetection/frontend/components/Banner.js",
    _s = $RefreshSig$();








function Banner() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),
      image = _useState[0],
      setImage = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),
      createObjectURL = _useState2[0],
      setCreateObjectURL = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      loading = _useState3[0],
      setLoading = _useState3[1];

  var uploadImage = function uploadImage(e) {
    if (e.target.files && e.target.files[0]) {
      var i = e.target.files[0];
      setImage(i);
      setCreateObjectURL(URL.createObjectURL(i));
    }
  };

  function validateResponse(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }

    return response;
  }

  var submitImage = function submitImage(e) {
    var body = new FormData();
    body.append("file", image);
    setLoading(true);
    fetch("http://127.0.0.1:5000/upload_file", {
      method: "POST",
      body: body
    }).then(validateResponse).then(function (response) {
      return response.blob();
    }).then(function (blob) {
      setCreateObjectURL(URL.createObjectURL(blob));
      setLoading(false);
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    className: "relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {
      src: _assets_images_banner_jpg__WEBPACK_IMPORTED_MODULE_1__.default,
      layout: "fill",
      objectFit: "cover",
      className: ""
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: "absolute top-1/2 w-full text-center",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
        className: "text-sm sm:text-lg drop-shadow-md text-white",
        children: "Want to detect objects in an image? Perfect"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
        type: "file",
        name: "myImage",
        onChange: uploadImage,
        className: "w-[300px] text-orange-500 bg-white m-3.5 px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
        onClick: submitImage,
        className: "text-orange-500 bg-white m-3.5 px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150",
        children: "Detect"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: "absolute mt-1 top-full left-1/2 transform -translate-x-1/2 w-7/12 text-center",
      children: !loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
          src: createObjectURL,
          className: "brightness-[0.25] object-cover absolute top-full left-1/2 transform -translate-x-1/2"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_Loader__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 13
        }, this)]
      }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
        src: createObjectURL,
        className: "object-cover absolute top-full left-1/2 transform -translate-x-1/2"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 5
  }, this);
}

_s(Banner, "7brKd58HKBgRWmk4AVwxYZPaD/M=");

_c = Banner;
/* harmony default export */ __webpack_exports__["default"] = (Banner);

var _c;

$RefreshReg$(_c, "Banner");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZjA1ODRhZjdmNjkzODI3OWVmN2YuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQSxTQUFTSSxNQUFULEdBQWtCO0FBQUE7O0FBQ2hCLGtCQUEwQkQsK0NBQVEsQ0FBQyxJQUFELENBQWxDO0FBQUEsTUFBT0UsS0FBUDtBQUFBLE1BQWNDLFFBQWQ7O0FBQ0EsbUJBQThDSCwrQ0FBUSxDQUFDLElBQUQsQ0FBdEQ7QUFBQSxNQUFPSSxlQUFQO0FBQUEsTUFBd0JDLGtCQUF4Qjs7QUFDQSxtQkFBOEJMLCtDQUFRLENBQUMsS0FBRCxDQUF0QztBQUFBLE1BQU9NLE9BQVA7QUFBQSxNQUFnQkMsVUFBaEI7O0FBRUEsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsQ0FBRCxFQUFPO0FBQ3pCLFFBQUlBLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFULElBQWtCRixDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVCxDQUFlLENBQWYsQ0FBdEIsRUFBeUM7QUFDdkMsVUFBTUMsQ0FBQyxHQUFHSCxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVCxDQUFlLENBQWYsQ0FBVjtBQUVBUixNQUFBQSxRQUFRLENBQUNTLENBQUQsQ0FBUjtBQUNBUCxNQUFBQSxrQkFBa0IsQ0FBQ1EsR0FBRyxDQUFDVCxlQUFKLENBQW9CUSxDQUFwQixDQUFELENBQWxCO0FBQ0Q7QUFDRixHQVBEOztBQVNBLFdBQVNFLGdCQUFULENBQTBCQyxRQUExQixFQUFvQztBQUNsQyxRQUFJLENBQUNBLFFBQVEsQ0FBQ0MsRUFBZCxFQUFrQjtBQUNoQixZQUFNQyxLQUFLLENBQUNGLFFBQVEsQ0FBQ0csVUFBVixDQUFYO0FBQ0Q7O0FBQ0QsV0FBT0gsUUFBUDtBQUNEOztBQUVELE1BQU1JLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNWLENBQUQsRUFBTztBQUN6QixRQUFNVyxJQUFJLEdBQUcsSUFBSUMsUUFBSixFQUFiO0FBQ0FELElBQUFBLElBQUksQ0FBQ0UsTUFBTCxDQUFZLE1BQVosRUFBb0JwQixLQUFwQjtBQUNBSyxJQUFBQSxVQUFVLENBQUMsSUFBRCxDQUFWO0FBQ0FnQixJQUFBQSxLQUFLLENBQUMsbUNBQUQsRUFBc0M7QUFDekNDLE1BQUFBLE1BQU0sRUFBRSxNQURpQztBQUV6Q0osTUFBQUEsSUFBSSxFQUFKQTtBQUZ5QyxLQUF0QyxDQUFMLENBSUdLLElBSkgsQ0FJUVgsZ0JBSlIsRUFLR1csSUFMSCxDQUtRLFVBQUNWLFFBQUQ7QUFBQSxhQUFjQSxRQUFRLENBQUNXLElBQVQsRUFBZDtBQUFBLEtBTFIsRUFNR0QsSUFOSCxDQU1RLFVBQUNDLElBQUQsRUFBVTtBQUNkckIsTUFBQUEsa0JBQWtCLENBQUNRLEdBQUcsQ0FBQ1QsZUFBSixDQUFvQnNCLElBQXBCLENBQUQsQ0FBbEI7QUFDQW5CLE1BQUFBLFVBQVUsQ0FBQyxLQUFELENBQVY7QUFDRCxLQVRIO0FBVUQsR0FkRDs7QUFnQkEsc0JBQ0U7QUFBSyxhQUFTLEVBQUMseUVBQWY7QUFBQSw0QkFDRSw4REFBQyxtREFBRDtBQUFPLFNBQUcsRUFBRVQsOERBQVo7QUFBb0IsWUFBTSxFQUFDLE1BQTNCO0FBQWtDLGVBQVMsRUFBQyxPQUE1QztBQUFvRCxlQUFTLEVBQUM7QUFBOUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFBSyxlQUFTLEVBQUMscUNBQWY7QUFBQSw4QkFDRTtBQUFHLGlCQUFTLEVBQUMsOENBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUlFO0FBQ0UsWUFBSSxFQUFDLE1BRFA7QUFFRSxZQUFJLEVBQUMsU0FGUDtBQUdFLGdCQUFRLEVBQUVVLFdBSFo7QUFJRSxpQkFBUyxFQUFDO0FBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGLGVBVUU7QUFDRSxlQUFPLEVBQUVXLFdBRFg7QUFFRSxpQkFBUyxFQUFDLHlJQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsZUFtQkU7QUFBSyxlQUFTLEVBQUMsK0VBQWY7QUFBQSxnQkFDRyxDQUFDYixPQUFELGdCQUNDO0FBQUEsZ0NBQ0U7QUFBSyxhQUFHLEVBQUVGLGVBQVY7QUFBMkIsbUJBQVMsRUFBQztBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUUsOERBQUMsNENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBLHNCQURELGdCQU1DO0FBQUssV0FBRyxFQUFFQSxlQUFWO0FBQTJCLGlCQUFTLEVBQUM7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFuQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFnQ0Q7O0dBckVRSDs7S0FBQUE7QUF1RVQsK0RBQWVBLE1BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CYW5uZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgYmFubmVyIGZyb20gXCIvYXNzZXRzL2ltYWdlcy9iYW5uZXIuanBnXCI7XG5pbXBvcnQgTG9hZGVyIGZyb20gXCIuL0xvYWRlclwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gQmFubmVyKCkge1xuICBjb25zdCBbaW1hZ2UsIHNldEltYWdlXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbY3JlYXRlT2JqZWN0VVJMLCBzZXRDcmVhdGVPYmplY3RVUkxdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCB1cGxvYWRJbWFnZSA9IChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LmZpbGVzICYmIGUudGFyZ2V0LmZpbGVzWzBdKSB7XG4gICAgICBjb25zdCBpID0gZS50YXJnZXQuZmlsZXNbMF07XG5cbiAgICAgIHNldEltYWdlKGkpO1xuICAgICAgc2V0Q3JlYXRlT2JqZWN0VVJMKFVSTC5jcmVhdGVPYmplY3RVUkwoaSkpO1xuICAgIH1cbiAgfTtcblxuICBmdW5jdGlvbiB2YWxpZGF0ZVJlc3BvbnNlKHJlc3BvbnNlKSB7XG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgdGhyb3cgRXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dCk7XG4gICAgfVxuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxuXG4gIGNvbnN0IHN1Ym1pdEltYWdlID0gKGUpID0+IHtcbiAgICBjb25zdCBib2R5ID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgYm9keS5hcHBlbmQoXCJmaWxlXCIsIGltYWdlKTtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIGZldGNoKFwiaHR0cDovLzEyNy4wLjAuMTo1MDAwL3VwbG9hZF9maWxlXCIsIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBib2R5LFxuICAgIH0pXG4gICAgICAudGhlbih2YWxpZGF0ZVJlc3BvbnNlKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5ibG9iKCkpXG4gICAgICAudGhlbigoYmxvYikgPT4ge1xuICAgICAgICBzZXRDcmVhdGVPYmplY3RVUkwoVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKSk7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGgtWzMwMHB4XSBzbTpoLVs0MDBweF0gbGc6aC1bNTAwcHhdIHhsOmgtWzYwMHB4XSAyeGw6aC1bNzAwcHhdXCI+XG4gICAgICA8SW1hZ2Ugc3JjPXtiYW5uZXJ9IGxheW91dD1cImZpbGxcIiBvYmplY3RGaXQ9XCJjb3ZlclwiIGNsYXNzTmFtZT1cIlwiIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0xLzIgdy1mdWxsIHRleHQtY2VudGVyXCI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gc206dGV4dC1sZyBkcm9wLXNoYWRvdy1tZCB0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgV2FudCB0byBkZXRlY3Qgb2JqZWN0cyBpbiBhbiBpbWFnZT8gUGVyZmVjdFxuICAgICAgICA8L3A+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICBuYW1lPVwibXlJbWFnZVwiXG4gICAgICAgICAgb25DaGFuZ2U9e3VwbG9hZEltYWdlfVxuICAgICAgICAgIGNsYXNzTmFtZT1cInctWzMwMHB4XSB0ZXh0LW9yYW5nZS01MDAgYmctd2hpdGUgbS0zLjUgcHgtMTAgcHktNCBzaGFkb3ctbWQgcm91bmRlZC1mdWxsIGZvbnQtYm9sZCBteS0zIGhvdmVyOnNoYWRvdy14bCBhY3RpdmU6c2NhbGUtOTAgdHJhbnNpdGlvbiBkdXJhdGlvbi0xNTBcIlxuICAgICAgICA+PC9pbnB1dD5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9e3N1Ym1pdEltYWdlfVxuICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtb3JhbmdlLTUwMCBiZy13aGl0ZSBtLTMuNSBweC0xMCBweS00IHNoYWRvdy1tZCByb3VuZGVkLWZ1bGwgZm9udC1ib2xkIG15LTMgaG92ZXI6c2hhZG93LXhsIGFjdGl2ZTpzY2FsZS05MCB0cmFuc2l0aW9uIGR1cmF0aW9uLTE1MFwiXG4gICAgICAgID5cbiAgICAgICAgICBEZXRlY3RcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgbXQtMSB0b3AtZnVsbCBsZWZ0LTEvMiB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS14LTEvMiB3LTcvMTIgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgeyFsb2FkaW5nID8gKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8aW1nIHNyYz17Y3JlYXRlT2JqZWN0VVJMfSBjbGFzc05hbWU9XCJicmlnaHRuZXNzLVswLjI1XSBvYmplY3QtY292ZXIgYWJzb2x1dGUgdG9wLWZ1bGwgbGVmdC0xLzIgdHJhbnNmb3JtIC10cmFuc2xhdGUteC0xLzJcIiAvPlxuICAgICAgICAgICAgPExvYWRlciAvPlxuICAgICAgICAgIDwvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxpbWcgc3JjPXtjcmVhdGVPYmplY3RVUkx9IGNsYXNzTmFtZT1cIm9iamVjdC1jb3ZlciBhYnNvbHV0ZSB0b3AtZnVsbCBsZWZ0LTEvMiB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS14LTEvMlwiIC8+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFubmVyO1xuIl0sIm5hbWVzIjpbIkltYWdlIiwiYmFubmVyIiwiTG9hZGVyIiwidXNlU3RhdGUiLCJCYW5uZXIiLCJpbWFnZSIsInNldEltYWdlIiwiY3JlYXRlT2JqZWN0VVJMIiwic2V0Q3JlYXRlT2JqZWN0VVJMIiwibG9hZGluZyIsInNldExvYWRpbmciLCJ1cGxvYWRJbWFnZSIsImUiLCJ0YXJnZXQiLCJmaWxlcyIsImkiLCJVUkwiLCJ2YWxpZGF0ZVJlc3BvbnNlIiwicmVzcG9uc2UiLCJvayIsIkVycm9yIiwic3RhdHVzVGV4dCIsInN1Ym1pdEltYWdlIiwiYm9keSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiZmV0Y2giLCJtZXRob2QiLCJ0aGVuIiwiYmxvYiJdLCJzb3VyY2VSb290IjoiIn0=