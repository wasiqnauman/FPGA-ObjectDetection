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
    var response = fetch("http://127.0.0.1:5000/upload_file", {
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
      className: "absolute top-full left-1/2 transform -translate-x-1/2 sm:w-full xl:w-7/12 text-center z-10",
      children: loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
          src: createObjectURL,
          className: "brightness-25 object-cover border-2 border-black\t "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_Loader__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 11
      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
        src: createObjectURL,
        className: "object-cover border-2 border-black "
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOTM3NWYwMjU0MTY1N2NhYzRkMWYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLFNBQVNJLE1BQVQsR0FBa0I7QUFBQTs7QUFDaEIsa0JBQTBCRCwrQ0FBUSxDQUFDLElBQUQsQ0FBbEM7QUFBQSxNQUFPRSxLQUFQO0FBQUEsTUFBY0MsUUFBZDs7QUFDQSxtQkFBOENILCtDQUFRLENBQUMsSUFBRCxDQUF0RDtBQUFBLE1BQU9JLGVBQVA7QUFBQSxNQUF3QkMsa0JBQXhCOztBQUNBLG1CQUE4QkwsK0NBQVEsQ0FBQyxLQUFELENBQXRDO0FBQUEsTUFBT00sT0FBUDtBQUFBLE1BQWdCQyxVQUFoQjs7QUFFQSxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxDQUFELEVBQU87QUFDekIsUUFBSUEsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVQsSUFBa0JGLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFULENBQWUsQ0FBZixDQUF0QixFQUF5QztBQUN2QyxVQUFNQyxDQUFDLEdBQUdILENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFULENBQWUsQ0FBZixDQUFWO0FBRUFSLE1BQUFBLFFBQVEsQ0FBQ1MsQ0FBRCxDQUFSO0FBQ0FQLE1BQUFBLGtCQUFrQixDQUFDUSxHQUFHLENBQUNULGVBQUosQ0FBb0JRLENBQXBCLENBQUQsQ0FBbEI7QUFDRDtBQUNGLEdBUEQ7O0FBU0EsV0FBU0UsZ0JBQVQsQ0FBMEJDLFFBQTFCLEVBQW9DO0FBQ2xDLFFBQUksQ0FBQ0EsUUFBUSxDQUFDQyxFQUFkLEVBQWtCO0FBQ2hCLFlBQU1DLEtBQUssQ0FBQ0YsUUFBUSxDQUFDRyxVQUFWLENBQVg7QUFDRDs7QUFDRCxXQUFPSCxRQUFQO0FBQ0Q7O0FBRUQsTUFBTUksV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ1YsQ0FBRCxFQUFPO0FBQ3pCLFFBQU1XLElBQUksR0FBRyxJQUFJQyxRQUFKLEVBQWI7QUFDQUQsSUFBQUEsSUFBSSxDQUFDRSxNQUFMLENBQVksTUFBWixFQUFvQnBCLEtBQXBCO0FBQ0FLLElBQUFBLFVBQVUsQ0FBQyxJQUFELENBQVY7QUFDQSxRQUFNUSxRQUFRLEdBQUdRLEtBQUssQ0FBQyxtQ0FBRCxFQUFzQztBQUMxREMsTUFBQUEsTUFBTSxFQUFFLE1BRGtEO0FBRTFESixNQUFBQSxJQUFJLEVBQUpBO0FBRjBELEtBQXRDLENBQUwsQ0FJZEssSUFKYyxDQUlUWCxnQkFKUyxFQUtkVyxJQUxjLENBS1QsVUFBQ1YsUUFBRDtBQUFBLGFBQWNBLFFBQVEsQ0FBQ1csSUFBVCxFQUFkO0FBQUEsS0FMUyxFQU1kRCxJQU5jLENBTVQsVUFBQ0MsSUFBRCxFQUFVO0FBQ2RyQixNQUFBQSxrQkFBa0IsQ0FBQ1EsR0FBRyxDQUFDVCxlQUFKLENBQW9Cc0IsSUFBcEIsQ0FBRCxDQUFsQjtBQUNBbkIsTUFBQUEsVUFBVSxDQUFDLEtBQUQsQ0FBVjtBQUNELEtBVGMsQ0FBakI7QUFVRCxHQWREOztBQWdCQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyx5RUFBZjtBQUFBLDRCQUNFLDhEQUFDLG1EQUFEO0FBQU8sU0FBRyxFQUFFVCw4REFBWjtBQUFvQixZQUFNLEVBQUMsTUFBM0I7QUFBa0MsZUFBUyxFQUFDLE9BQTVDO0FBQW9ELGVBQVMsRUFBQztBQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFLLGVBQVMsRUFBQyxxQ0FBZjtBQUFBLDhCQUNFO0FBQUcsaUJBQVMsRUFBQyw4Q0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBSUU7QUFDRSxZQUFJLEVBQUMsTUFEUDtBQUVFLFlBQUksRUFBQyxTQUZQO0FBR0UsZ0JBQVEsRUFBRVUsV0FIWjtBQUlFLGlCQUFTLEVBQUM7QUFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkYsZUFVRTtBQUNFLGVBQU8sRUFBRVcsV0FEWDtBQUVFLGlCQUFTLEVBQUMseUlBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQW1CRTtBQUFLLGVBQVMsRUFBQyw0RkFBZjtBQUFBLGdCQUNHYixPQUFPLGdCQUNOO0FBQUEsZ0NBQ0U7QUFBSyxhQUFHLEVBQUVGLGVBQVY7QUFBMkIsbUJBQVMsRUFBQztBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUUsOERBQUMsNENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FETSxnQkFNTjtBQUFLLFdBQUcsRUFBRUEsZUFBVjtBQUEyQixpQkFBUyxFQUFDO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbkJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBZ0NEOztHQXJFUUg7O0tBQUFBO0FBdUVULCtEQUFlQSxNQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQmFubmVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IGJhbm5lciBmcm9tIFwiL2Fzc2V0cy9pbWFnZXMvYmFubmVyLmpwZ1wiO1xuaW1wb3J0IExvYWRlciBmcm9tIFwiLi9Mb2FkZXJcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIEJhbm5lcigpIHtcbiAgY29uc3QgW2ltYWdlLCBzZXRJbWFnZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2NyZWF0ZU9iamVjdFVSTCwgc2V0Q3JlYXRlT2JqZWN0VVJMXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgdXBsb2FkSW1hZ2UgPSAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC5maWxlcyAmJiBlLnRhcmdldC5maWxlc1swXSkge1xuICAgICAgY29uc3QgaSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xuXG4gICAgICBzZXRJbWFnZShpKTtcbiAgICAgIHNldENyZWF0ZU9iamVjdFVSTChVUkwuY3JlYXRlT2JqZWN0VVJMKGkpKTtcbiAgICB9XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsaWRhdGVSZXNwb25zZShyZXNwb25zZSkge1xuICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgIHRocm93IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH1cblxuICBjb25zdCBzdWJtaXRJbWFnZSA9IChlKSA9PiB7XG4gICAgY29uc3QgYm9keSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIGJvZHkuYXBwZW5kKFwiZmlsZVwiLCBpbWFnZSk7XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICBjb25zdCByZXNwb25zZSA9IGZldGNoKFwiaHR0cDovLzEyNy4wLjAuMTo1MDAwL3VwbG9hZF9maWxlXCIsIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBib2R5LFxuICAgIH0pXG4gICAgICAudGhlbih2YWxpZGF0ZVJlc3BvbnNlKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5ibG9iKCkpXG4gICAgICAudGhlbigoYmxvYikgPT4ge1xuICAgICAgICBzZXRDcmVhdGVPYmplY3RVUkwoVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKSk7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGgtWzMwMHB4XSBzbTpoLVs0MDBweF0gbGc6aC1bNTAwcHhdIHhsOmgtWzYwMHB4XSAyeGw6aC1bNzAwcHhdXCI+XG4gICAgICA8SW1hZ2Ugc3JjPXtiYW5uZXJ9IGxheW91dD1cImZpbGxcIiBvYmplY3RGaXQ9XCJjb3ZlclwiIGNsYXNzTmFtZT1cIlwiIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0xLzIgdy1mdWxsIHRleHQtY2VudGVyXCI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gc206dGV4dC1sZyBkcm9wLXNoYWRvdy1tZCB0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgV2FudCB0byBkZXRlY3Qgb2JqZWN0cyBpbiBhbiBpbWFnZT8gUGVyZmVjdFxuICAgICAgICA8L3A+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICBuYW1lPVwibXlJbWFnZVwiXG4gICAgICAgICAgb25DaGFuZ2U9e3VwbG9hZEltYWdlfVxuICAgICAgICAgIGNsYXNzTmFtZT1cInctWzMwMHB4XSB0ZXh0LW9yYW5nZS01MDAgYmctd2hpdGUgbS0zLjUgcHgtMTAgcHktNCBzaGFkb3ctbWQgcm91bmRlZC1mdWxsIGZvbnQtYm9sZCBteS0zIGhvdmVyOnNoYWRvdy14bCBhY3RpdmU6c2NhbGUtOTAgdHJhbnNpdGlvbiBkdXJhdGlvbi0xNTBcIlxuICAgICAgICA+PC9pbnB1dD5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9e3N1Ym1pdEltYWdlfVxuICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtb3JhbmdlLTUwMCBiZy13aGl0ZSBtLTMuNSBweC0xMCBweS00IHNoYWRvdy1tZCByb3VuZGVkLWZ1bGwgZm9udC1ib2xkIG15LTMgaG92ZXI6c2hhZG93LXhsIGFjdGl2ZTpzY2FsZS05MCB0cmFuc2l0aW9uIGR1cmF0aW9uLTE1MFwiXG4gICAgICAgID5cbiAgICAgICAgICBEZXRlY3RcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLWZ1bGwgbGVmdC0xLzIgdHJhbnNmb3JtIC10cmFuc2xhdGUteC0xLzIgc206dy1mdWxsIHhsOnctNy8xMiB0ZXh0LWNlbnRlciB6LTEwXCI+XG4gICAgICAgIHtsb2FkaW5nID8gKFxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aW1nIHNyYz17Y3JlYXRlT2JqZWN0VVJMfSBjbGFzc05hbWU9XCJicmlnaHRuZXNzLTI1IG9iamVjdC1jb3ZlciBib3JkZXItMiBib3JkZXItYmxhY2tcdCBcIiAvPlxuICAgICAgICAgICAgPExvYWRlciAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxpbWcgc3JjPXtjcmVhdGVPYmplY3RVUkx9IGNsYXNzTmFtZT1cIm9iamVjdC1jb3ZlciBib3JkZXItMiBib3JkZXItYmxhY2sgXCIgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBCYW5uZXI7XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJiYW5uZXIiLCJMb2FkZXIiLCJ1c2VTdGF0ZSIsIkJhbm5lciIsImltYWdlIiwic2V0SW1hZ2UiLCJjcmVhdGVPYmplY3RVUkwiLCJzZXRDcmVhdGVPYmplY3RVUkwiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInVwbG9hZEltYWdlIiwiZSIsInRhcmdldCIsImZpbGVzIiwiaSIsIlVSTCIsInZhbGlkYXRlUmVzcG9uc2UiLCJyZXNwb25zZSIsIm9rIiwiRXJyb3IiLCJzdGF0dXNUZXh0Iiwic3VibWl0SW1hZ2UiLCJib2R5IiwiRm9ybURhdGEiLCJhcHBlbmQiLCJmZXRjaCIsIm1ldGhvZCIsInRoZW4iLCJibG9iIl0sInNvdXJjZVJvb3QiOiIifQ==