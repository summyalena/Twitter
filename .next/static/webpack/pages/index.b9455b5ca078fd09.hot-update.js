"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _comps_SideBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../comps/SideBar */ \"./comps/SideBar.js\");\n/* harmony import */ var _comps_feed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../comps/feed */ \"./comps/feed.js\");\n/* harmony import */ var _comps_Login_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../comps/Login.js */ \"./comps/Login.js\");\n/* harmony import */ var _comps_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../comps/modal */ \"./comps/modal.js\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _atoms_modalAtom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../atoms/modalAtom */ \"./atoms/modalAtom.js\");\n/* harmony import */ var _comps_widgets__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../comps/widgets */ \"./comps/widgets.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Home = function(param) {\n    var providers = param.providers, trendingResults = param.trendingResults, followingResults = param.followingResults;\n    _s();\n    // to however retrieve the session in the frontend\n    var ref = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_7__.useSession)(), session = ref.data;\n    var ref1 = _slicedToArray((0,recoil__WEBPACK_IMPORTED_MODULE_6__.useRecoilState)(_atoms_modalAtom__WEBPACK_IMPORTED_MODULE_8__.modalState), 2), isOpen = ref1[0], setIsOpen = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(false), loading = ref2[0], setLoading = ref2[1];\n    // if there is no authentication then it shows the login page first\n    if (!session) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_comps_Login_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        providers: providers\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\USER\\\\Documents\\\\Twitter\\\\pages\\\\index.js\",\n        lineNumber: 18,\n        columnNumber: 23\n    }, _this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Twitter\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\Documents\\\\Twitter\\\\pages\\\\index.js\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"https://rb.gy/ogau5a\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\Documents\\\\Twitter\\\\pages\\\\index.js\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\USER\\\\Documents\\\\Twitter\\\\pages\\\\index.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"bg-black max-w-[1500px] min-h-screen flex mx-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_comps_SideBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\Documents\\\\Twitter\\\\pages\\\\index.js\",\n                        lineNumber: 28,\n                        columnNumber: 10\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_comps_feed__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\Documents\\\\Twitter\\\\pages\\\\index.js\",\n                        lineNumber: 29,\n                        columnNumber: 10\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_comps_widgets__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                        trendingResults: trendingResults,\n                        followingResults: followingResults\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\Documents\\\\Twitter\\\\pages\\\\index.js\",\n                        lineNumber: 30,\n                        columnNumber: 10\n                    }, _this),\n                    isOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_comps_modal__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\Documents\\\\Twitter\\\\pages\\\\index.js\",\n                        lineNumber: 32,\n                        columnNumber: 20\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\USER\\\\Documents\\\\Twitter\\\\pages\\\\index.js\",\n                lineNumber: 27,\n                columnNumber: 8\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\USER\\\\Documents\\\\Twitter\\\\pages\\\\index.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, _this);\n};\n_s(Home, \"+yXT1YupaPq1TFmmERroA4Q3mws=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_7__.useSession,\n        recoil__WEBPACK_IMPORTED_MODULE_6__.useRecoilState\n    ];\n});\n_c = Home;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE0QjtBQUNVO0FBQ047QUFDSztBQUNIO0FBQ0s7QUFDK0I7QUFDdkI7QUFDVDtBQUNSOztBQUU5QixJQUFNVSxJQUFJLEdBQUcsZ0JBQW9EO1FBQWxEQyxTQUFTLFNBQVRBLFNBQVMsRUFBRUMsZUFBZSxTQUFmQSxlQUFlLEVBQUVDLGdCQUFnQixTQUFoQkEsZ0JBQWdCOztJQUMzRCxrREFBa0Q7SUFDaEQsSUFBdUJQLEdBQVksR0FBWkEsMkRBQVUsRUFBRSxFQUE1QlEsT0FBWSxHQUFJUixHQUFZLENBQTVCUSxJQUFJO0lBQ1gsSUFBMkJULElBQTBCLGtCQUExQkEsc0RBQWMsQ0FBQ0Usd0RBQVUsQ0FBQyxNQUE5Q1MsTUFBTSxHQUFjWCxJQUEwQixHQUF4QyxFQUFDWSxTQUFTLEdBQUlaLElBQTBCLEdBQTlCO0lBQ3ZCLElBQTZCSSxJQUFlLEdBQWZBLGdEQUFRLENBQUMsS0FBSyxDQUFDLEVBZjlDLE9BZWdCLEdBQWVBLElBQWUsR0FBOUIsRUFmaEIsVUFlMkIsR0FBSUEsSUFBZSxHQUFuQjtJQUN6QixtRUFBbUU7SUFDbkUsSUFBRyxDQUFDTSxPQUFPLEVBQUUscUJBQU8sOERBQUNaLHVEQUFLO1FBQUNRLFNBQVMsRUFBRUEsU0FBUzs7Ozs7YUFBRztJQUVsRCxxQkFDRSw4REFBQ1MsS0FBRztRQUFDQyxTQUFTLEVBQUMsR0FBRzs7MEJBQ2hCLDhEQUFDckIsa0RBQUk7O2tDQUNILDhEQUFDc0IsT0FBSztrQ0FBQyxTQUFPOzs7Ozs2QkFBUTtrQ0FDdEIsOERBQUNDLE1BQUk7d0JBQUNDLEdBQUcsRUFBQyxNQUFNO3dCQUFDQyxJQUFJLEVBQUMsc0JBQXNCOzs7Ozs2QkFBRzs7Ozs7O3FCQUMxQzswQkFFTiw4REFBQ0MsTUFBSTtnQkFBQ0wsU0FBUyxFQUFDLG1EQUFtRDs7a0NBQ2pFLDhEQUFDcEIsc0RBQU87Ozs7NkJBQUU7a0NBQ1YsOERBQUNDLG1EQUFJOzs7OzZCQUFFO2tDQUNQLDhEQUFDTSxzREFBTzt3QkFBQ0ksZUFBZSxFQUFFQSxlQUFlO3dCQUFFQyxnQkFBZ0IsRUFBRUEsZ0JBQWdCOzs7Ozs2QkFBSTtvQkFFakZHLE1BQU0sa0JBQUksOERBQUNaLG9EQUFLOzs7OzZCQUFFOzs7Ozs7cUJBQ2I7Ozs7OzthQUNGLENBQ0o7Q0FDUDtHQXhCS00sSUFBSTs7UUFFZUosdURBQVU7UUFDTkQsa0RBQWM7OztBQUhyQ0ssS0FBQUEsSUFBSTs7QUEwQlYsK0RBQWVBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgU2lkZUJhciBmcm9tICcuLi9jb21wcy9TaWRlQmFyJ1xuaW1wb3J0IEZlZWQgZnJvbSAnLi4vY29tcHMvZmVlZCdcbmltcG9ydCBMb2dpbiBmcm9tICcuLi9jb21wcy9Mb2dpbi5qcydcbmltcG9ydCBNb2RhbCBmcm9tICcuLi9jb21wcy9tb2RhbCdcbmltcG9ydCB7IHVzZVJlY29pbFN0YXRlIH0gZnJvbSAncmVjb2lsJ1xuaW1wb3J0IHsgZ2V0UHJvdmlkZXJzLCBnZXRTZXNzaW9uLCB1c2VTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoL3JlYWN0J1xuaW1wb3J0IHsgbW9kYWxTdGF0ZSB9IGZyb20gJy4uL2F0b21zL21vZGFsQXRvbSdcbmltcG9ydCBXaWRnZXRzIGZyb20gJy4uL2NvbXBzL3dpZGdldHMnXG5pbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcblxuY29uc3QgSG9tZSA9ICh7cHJvdmlkZXJzLCB0cmVuZGluZ1Jlc3VsdHMsIGZvbGxvd2luZ1Jlc3VsdHN9KSA9PiB7XG4vLyB0byBob3dldmVyIHJldHJpZXZlIHRoZSBzZXNzaW9uIGluIHRoZSBmcm9udGVuZFxuICBjb25zdCB7ZGF0YTpzZXNzaW9ufSA9IHVzZVNlc3Npb24oKTtcbiAgY29uc3QgW2lzT3BlbixzZXRJc09wZW5dID0gdXNlUmVjb2lsU3RhdGUobW9kYWxTdGF0ZSlcbiAgY29uc3QgW2xvYWRpbmcsc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIC8vIGlmIHRoZXJlIGlzIG5vIGF1dGhlbnRpY2F0aW9uIHRoZW4gaXQgc2hvd3MgdGhlIGxvZ2luIHBhZ2UgZmlyc3RcbiAgaWYoIXNlc3Npb24pIHJldHVybiA8TG9naW4gcHJvdmlkZXJzPXtwcm92aWRlcnN9Lz5cbiBcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIiBcIj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+VHdpdHRlcjwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiaHR0cHM6Ly9yYi5neS9vZ2F1NWFcIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICAgPG1haW4gY2xhc3NOYW1lPVwiYmctYmxhY2sgbWF4LXctWzE1MDBweF0gbWluLWgtc2NyZWVuIGZsZXggbXgtYXV0b1wiPlxuICAgICAgICAgPFNpZGVCYXIvPlxuICAgICAgICAgPEZlZWQvPiBcbiAgICAgICAgIDxXaWRnZXRzIHRyZW5kaW5nUmVzdWx0cz17dHJlbmRpbmdSZXN1bHRzfSBmb2xsb3dpbmdSZXN1bHRzPXtmb2xsb3dpbmdSZXN1bHRzfSAvPlxuXG4gICAgICAgIHtpc09wZW4gJiYgPE1vZGFsLz4gfVxuICAgICAgIDwvbWFpbj5cbiAgICAgIDwvZGl2PlxuICAgICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCl7XG4gICAgICAvLyAgY29uc3QgdHJlbmRpbmdSZXN1bHRzID0gZmV0Y2goXCJodHRwczovL2pzb25rZWVwZXIuY29tL2IvSFU5T1wiKS50aGVuKChyZXMpPT4gcmVzLmpzb24oKSlcbiAgICAgIC8vIGNvbnN0IGZvbGxvd2luZ1Jlc3VsdHMgPSBmZXRjaChcImh0dHBzOi8vanNvbmtlZXBlci5jb20vYi9XV01KXCIpLnRoZW4oKHJlcyk9PnJlcy5qc29uKCkpXG4gICAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbihjb250ZXh0KTtcbiAgICAgIGNvbnN0IHByb3ZpZGVycyA9IGF3YWl0IGdldFByb3ZpZGVycygpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcHM6e1xuICAgICAgICAgICAgcHJvdmlkZXJzLFxuICAgICAgICAgICAgc2Vzc2lvbixcbiAgICAgICAgICAgIC8vIGZvbGxvd2luZ1Jlc3VsdHMsXG4gICAgICAgICAgICB0cmVuZGluZ1Jlc3VsdHNcbiAgICAgICAgfVxuICAgICAgfVxufSJdLCJuYW1lcyI6WyJIZWFkIiwiU2lkZUJhciIsIkZlZWQiLCJMb2dpbiIsIk1vZGFsIiwidXNlUmVjb2lsU3RhdGUiLCJ1c2VTZXNzaW9uIiwibW9kYWxTdGF0ZSIsIldpZGdldHMiLCJ1c2VTdGF0ZSIsIkhvbWUiLCJwcm92aWRlcnMiLCJ0cmVuZGluZ1Jlc3VsdHMiLCJmb2xsb3dpbmdSZXN1bHRzIiwiZGF0YSIsInNlc3Npb24iLCJpc09wZW4iLCJzZXRJc09wZW4iLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImRpdiIsImNsYXNzTmFtZSIsInRpdGxlIiwibGluayIsInJlbCIsImhyZWYiLCJtYWluIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});