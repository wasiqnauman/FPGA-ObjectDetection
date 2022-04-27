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
      children: loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYTU3OWQyNmIxZjQzNTFjYzIyYTkuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQSxTQUFTSSxNQUFULEdBQWtCO0FBQUE7O0FBQ2hCLGtCQUEwQkQsK0NBQVEsQ0FBQyxJQUFELENBQWxDO0FBQUEsTUFBT0UsS0FBUDtBQUFBLE1BQWNDLFFBQWQ7O0FBQ0EsbUJBQThDSCwrQ0FBUSxDQUFDLElBQUQsQ0FBdEQ7QUFBQSxNQUFPSSxlQUFQO0FBQUEsTUFBd0JDLGtCQUF4Qjs7QUFDQSxtQkFBOEJMLCtDQUFRLENBQUMsS0FBRCxDQUF0QztBQUFBLE1BQU9NLE9BQVA7QUFBQSxNQUFnQkMsVUFBaEI7O0FBRUEsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsQ0FBRCxFQUFPO0FBQ3pCLFFBQUlBLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFULElBQWtCRixDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVCxDQUFlLENBQWYsQ0FBdEIsRUFBeUM7QUFDdkMsVUFBTUMsQ0FBQyxHQUFHSCxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVCxDQUFlLENBQWYsQ0FBVjtBQUVBUixNQUFBQSxRQUFRLENBQUNTLENBQUQsQ0FBUjtBQUNBUCxNQUFBQSxrQkFBa0IsQ0FBQ1EsR0FBRyxDQUFDVCxlQUFKLENBQW9CUSxDQUFwQixDQUFELENBQWxCO0FBQ0Q7QUFDRixHQVBEOztBQVNBLFdBQVNFLGdCQUFULENBQTBCQyxRQUExQixFQUFvQztBQUNsQyxRQUFJLENBQUNBLFFBQVEsQ0FBQ0MsRUFBZCxFQUFrQjtBQUNoQixZQUFNQyxLQUFLLENBQUNGLFFBQVEsQ0FBQ0csVUFBVixDQUFYO0FBQ0Q7O0FBQ0QsV0FBT0gsUUFBUDtBQUNEOztBQUVELE1BQU1JLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNWLENBQUQsRUFBTztBQUN6QixRQUFNVyxJQUFJLEdBQUcsSUFBSUMsUUFBSixFQUFiO0FBQ0FELElBQUFBLElBQUksQ0FBQ0UsTUFBTCxDQUFZLE1BQVosRUFBb0JwQixLQUFwQjtBQUNBSyxJQUFBQSxVQUFVLENBQUMsSUFBRCxDQUFWO0FBQ0FnQixJQUFBQSxLQUFLLENBQUMsbUNBQUQsRUFBc0M7QUFDekNDLE1BQUFBLE1BQU0sRUFBRSxNQURpQztBQUV6Q0osTUFBQUEsSUFBSSxFQUFKQTtBQUZ5QyxLQUF0QyxDQUFMLENBSUdLLElBSkgsQ0FJUVgsZ0JBSlIsRUFLR1csSUFMSCxDQUtRLFVBQUNWLFFBQUQ7QUFBQSxhQUFjQSxRQUFRLENBQUNXLElBQVQsRUFBZDtBQUFBLEtBTFIsRUFNR0QsSUFOSCxDQU1RLFVBQUNDLElBQUQsRUFBVTtBQUNkckIsTUFBQUEsa0JBQWtCLENBQUNRLEdBQUcsQ0FBQ1QsZUFBSixDQUFvQnNCLElBQXBCLENBQUQsQ0FBbEI7QUFDQW5CLE1BQUFBLFVBQVUsQ0FBQyxLQUFELENBQVY7QUFDRCxLQVRIO0FBVUQsR0FkRDs7QUFnQkEsc0JBQ0U7QUFBSyxhQUFTLEVBQUMseUVBQWY7QUFBQSw0QkFDRSw4REFBQyxtREFBRDtBQUFPLFNBQUcsRUFBRVQsOERBQVo7QUFBb0IsWUFBTSxFQUFDLE1BQTNCO0FBQWtDLGVBQVMsRUFBQyxPQUE1QztBQUFvRCxlQUFTLEVBQUM7QUFBOUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFBSyxlQUFTLEVBQUMscUNBQWY7QUFBQSw4QkFDRTtBQUFHLGlCQUFTLEVBQUMsOENBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUlFO0FBQ0UsWUFBSSxFQUFDLE1BRFA7QUFFRSxZQUFJLEVBQUMsU0FGUDtBQUdFLGdCQUFRLEVBQUVVLFdBSFo7QUFJRSxpQkFBUyxFQUFDO0FBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGLGVBVUU7QUFDRSxlQUFPLEVBQUVXLFdBRFg7QUFFRSxpQkFBUyxFQUFDLHlJQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsZUFtQkU7QUFBSyxlQUFTLEVBQUMsK0VBQWY7QUFBQSxnQkFDR2IsT0FBTyxnQkFDTjtBQUFBLGdDQUNFO0FBQUssYUFBRyxFQUFFRixlQUFWO0FBQTJCLG1CQUFTLEVBQUM7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFLDhEQUFDLDRDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQSxzQkFETSxnQkFNTjtBQUFLLFdBQUcsRUFBRUEsZUFBVjtBQUEyQixpQkFBUyxFQUFDO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbkJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBZ0NEOztHQXJFUUg7O0tBQUFBO0FBdUVULCtEQUFlQSxNQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQmFubmVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IGJhbm5lciBmcm9tIFwiL2Fzc2V0cy9pbWFnZXMvYmFubmVyLmpwZ1wiO1xuaW1wb3J0IExvYWRlciBmcm9tIFwiLi9Mb2FkZXJcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIEJhbm5lcigpIHtcbiAgY29uc3QgW2ltYWdlLCBzZXRJbWFnZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2NyZWF0ZU9iamVjdFVSTCwgc2V0Q3JlYXRlT2JqZWN0VVJMXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgdXBsb2FkSW1hZ2UgPSAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC5maWxlcyAmJiBlLnRhcmdldC5maWxlc1swXSkge1xuICAgICAgY29uc3QgaSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xuXG4gICAgICBzZXRJbWFnZShpKTtcbiAgICAgIHNldENyZWF0ZU9iamVjdFVSTChVUkwuY3JlYXRlT2JqZWN0VVJMKGkpKTtcbiAgICB9XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsaWRhdGVSZXNwb25zZShyZXNwb25zZSkge1xuICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgIHRocm93IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH1cblxuICBjb25zdCBzdWJtaXRJbWFnZSA9IChlKSA9PiB7XG4gICAgY29uc3QgYm9keSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIGJvZHkuYXBwZW5kKFwiZmlsZVwiLCBpbWFnZSk7XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICBmZXRjaChcImh0dHA6Ly8xMjcuMC4wLjE6NTAwMC91cGxvYWRfZmlsZVwiLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgYm9keSxcbiAgICB9KVxuICAgICAgLnRoZW4odmFsaWRhdGVSZXNwb25zZSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuYmxvYigpKVxuICAgICAgLnRoZW4oKGJsb2IpID0+IHtcbiAgICAgICAgc2V0Q3JlYXRlT2JqZWN0VVJMKFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYikpO1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBoLVszMDBweF0gc206aC1bNDAwcHhdIGxnOmgtWzUwMHB4XSB4bDpoLVs2MDBweF0gMnhsOmgtWzcwMHB4XVwiPlxuICAgICAgPEltYWdlIHNyYz17YmFubmVyfSBsYXlvdXQ9XCJmaWxsXCIgb2JqZWN0Rml0PVwiY292ZXJcIiBjbGFzc05hbWU9XCJcIiAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMS8yIHctZnVsbCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHNtOnRleHQtbGcgZHJvcC1zaGFkb3ctbWQgdGV4dC13aGl0ZVwiPlxuICAgICAgICAgIFdhbnQgdG8gZGV0ZWN0IG9iamVjdHMgaW4gYW4gaW1hZ2U/IFBlcmZlY3RcbiAgICAgICAgPC9wPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICAgICAgbmFtZT1cIm15SW1hZ2VcIlxuICAgICAgICAgIG9uQ2hhbmdlPXt1cGxvYWRJbWFnZX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LVszMDBweF0gdGV4dC1vcmFuZ2UtNTAwIGJnLXdoaXRlIG0tMy41IHB4LTEwIHB5LTQgc2hhZG93LW1kIHJvdW5kZWQtZnVsbCBmb250LWJvbGQgbXktMyBob3ZlcjpzaGFkb3cteGwgYWN0aXZlOnNjYWxlLTkwIHRyYW5zaXRpb24gZHVyYXRpb24tMTUwXCJcbiAgICAgICAgPjwvaW5wdXQ+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBvbkNsaWNrPXtzdWJtaXRJbWFnZX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LW9yYW5nZS01MDAgYmctd2hpdGUgbS0zLjUgcHgtMTAgcHktNCBzaGFkb3ctbWQgcm91bmRlZC1mdWxsIGZvbnQtYm9sZCBteS0zIGhvdmVyOnNoYWRvdy14bCBhY3RpdmU6c2NhbGUtOTAgdHJhbnNpdGlvbiBkdXJhdGlvbi0xNTBcIlxuICAgICAgICA+XG4gICAgICAgICAgRGV0ZWN0XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIG10LTEgdG9wLWZ1bGwgbGVmdC0xLzIgdHJhbnNmb3JtIC10cmFuc2xhdGUteC0xLzIgdy03LzEyIHRleHQtY2VudGVyXCI+XG4gICAgICAgIHtsb2FkaW5nID8gXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtjcmVhdGVPYmplY3RVUkx9IGNsYXNzTmFtZT1cImJyaWdodG5lc3MtWzAuMjVdIG9iamVjdC1jb3ZlciBhYnNvbHV0ZSB0b3AtZnVsbCBsZWZ0LTEvMiB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS14LTEvMlwiLz5cbiAgICAgICAgICAgIDxMb2FkZXIgLz5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgIDogXG4gICAgICAgICAgPGltZyBzcmM9e2NyZWF0ZU9iamVjdFVSTH0gY2xhc3NOYW1lPVwib2JqZWN0LWNvdmVyIGFic29sdXRlIHRvcC1mdWxsIGxlZnQtMS8yIHRyYW5zZm9ybSAtdHJhbnNsYXRlLXgtMS8yXCIvPlxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFubmVyO1xuIl0sIm5hbWVzIjpbIkltYWdlIiwiYmFubmVyIiwiTG9hZGVyIiwidXNlU3RhdGUiLCJCYW5uZXIiLCJpbWFnZSIsInNldEltYWdlIiwiY3JlYXRlT2JqZWN0VVJMIiwic2V0Q3JlYXRlT2JqZWN0VVJMIiwibG9hZGluZyIsInNldExvYWRpbmciLCJ1cGxvYWRJbWFnZSIsImUiLCJ0YXJnZXQiLCJmaWxlcyIsImkiLCJVUkwiLCJ2YWxpZGF0ZVJlc3BvbnNlIiwicmVzcG9uc2UiLCJvayIsIkVycm9yIiwic3RhdHVzVGV4dCIsInN1Ym1pdEltYWdlIiwiYm9keSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiZmV0Y2giLCJtZXRob2QiLCJ0aGVuIiwiYmxvYiJdLCJzb3VyY2VSb290IjoiIn0=