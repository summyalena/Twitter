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

/***/ "./comps/widgets.js":
/*!**************************!*\
  !*** ./comps/widgets.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @heroicons/react/solid */ \"./node_modules/@heroicons/react/solid/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _comps_Trending__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../comps/Trending */ \"./comps/Trending.js\");\n/* harmony import */ var _comps_Following__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../comps/Following */ \"./comps/Following.js\");\n/* harmony import */ var _utils_trendingResults__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/trendingResults */ \"./comps/utils/trendingResults.js\");\n\n\n\n\n\n\n\nfunction widgets(param) {\n    var trendingResults1 = param.trendingResults, followingResults1 = param.followingResults;\n    var _this = this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"hidden lg:inline ml-8 xl:w-[450px] py-1 space-y-5\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"sticky top-0 py-1.5 bg-black z-50 w-11/12 xl:w-9/12\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center bg-[#202327] p-3 rounded-full relative\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_5__.SearchIcon, {\n                            className: \"text-gray-500 h-5 z-50\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\Documents\\\\Twitter\\\\comps\\\\widgets.js\",\n                            lineNumber: 13,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            className: \"bg-transparent placeholder-gray-500 outline-none text-[#d9d9d9] absolute inset-0 pl-11 border border-transparent w-full focus:border-[#1d9bf0] rounded-full focus:bg-black focus:shadow-lg\",\n                            placeholder: \"Search Twitter\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\Documents\\\\Twitter\\\\comps\\\\widgets.js\",\n                            lineNumber: 14,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\USER\\\\Documents\\\\Twitter\\\\comps\\\\widgets.js\",\n                    lineNumber: 12,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\USER\\\\Documents\\\\Twitter\\\\comps\\\\widgets.js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-11/12 space-y-3 rounded-xl bg-[#15181c] pt-2 text-[#d9d9d9] xl:w-9/12\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        className: \"px-4 text-xl font-bold\",\n                        children: \"What's happening?\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\Documents\\\\Twitter\\\\comps\\\\widgets.js\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this),\n                    trendingResults1.map(function(result, index) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_comps_Trending__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            result: result\n                        }, index, false, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\Documents\\\\Twitter\\\\comps\\\\widgets.js\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, _this);\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"trendBtn\",\n                        children: \"Show More\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\Documents\\\\Twitter\\\\comps\\\\widgets.js\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\USER\\\\Documents\\\\Twitter\\\\comps\\\\widgets.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-11/12 space-y-3 rounded-xl bg-[#15181c] pt-2 text-[#d9d9d9] xl:w-9/12\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        className: \"px-4 text-xl font-bold\",\n                        children: \"Who to follow?\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\Documents\\\\Twitter\\\\comps\\\\widgets.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this),\n                    followingResults1.map(function(result, index) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_comps_Following__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            result: result\n                        }, index, false, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\Documents\\\\Twitter\\\\comps\\\\widgets.js\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, _this);\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"trendBtn\",\n                        children: \"Show More\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\Documents\\\\Twitter\\\\comps\\\\widgets.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\USER\\\\Documents\\\\Twitter\\\\comps\\\\widgets.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\USER\\\\Documents\\\\Twitter\\\\comps\\\\widgets.js\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (widgets);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wcy93aWRnZXRzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQW1EO0FBQzFCO0FBQ2U7QUFDRztBQUNXO0FBQ0s7QUFFM0QsU0FBU00sT0FBTyxDQUFDLEtBQXFDLEVBQUU7UUFBckNGLGdCQUFlLEdBQWpCLEtBQXFDLENBQW5DQSxlQUFlLEVBQUVDLGlCQUFnQixHQUFuQyxLQUFxQyxDQUFsQkEsZ0JBQWdCOztJQUNsRCxxQkFDRSw4REFBQ0UsS0FBRztRQUFDQyxTQUFTLEVBQUMsbURBQW1EOzswQkFDaEUsOERBQUNELEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxxREFBcUQ7MEJBQ2xFLDRFQUFDRCxLQUFHO29CQUFDQyxTQUFTLEVBQUMsMERBQTBEOztzQ0FDdkUsOERBQUNSLDhEQUFVOzRCQUFDUSxTQUFTLEVBQUMsd0JBQXdCOzs7OztnQ0FBRztzQ0FDakQsOERBQUNDLE9BQUs7NEJBQ0pDLElBQUksRUFBQyxNQUFNOzRCQUNYRixTQUFTLEVBQUMsNExBTzBGOzRCQUNwR0csV0FBVyxFQUFDLGdCQUFnQjs7Ozs7Z0NBQzVCOzs7Ozs7d0JBQ0U7Ozs7O29CQUNGOzBCQUNOLDhEQUFDSixLQUFHO2dCQUFDQyxTQUFTLEVBQUMseUVBQXlFOztrQ0FDdEYsOERBQUNJLElBQUU7d0JBQUNKLFNBQVMsRUFBQyx3QkFBd0I7a0NBQUMsbUJBQWlCOzs7Ozs0QkFBSztvQkFDNURKLGdCQUFlLENBQUNTLEdBQUcsQ0FBQyxTQUFDQyxNQUFNLEVBQUVDLEtBQUs7NkNBQ2pDLDhEQUFDYix1REFBUTs0QkFBQ1ksTUFBTSxFQUFFQSxNQUFNOzJCQUFPQyxLQUFLOzs7O2lDQUFJO3FCQUN6QyxDQUFDO2tDQUNGLDhEQUFDQyxRQUFNO3dCQUFDUixTQUFTLEVBQUMsVUFBVTtrQ0FBQyxXQUFTOzs7Ozs0QkFBUzs7Ozs7O29CQUMzQzswQkFHTiw4REFBQ0QsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLHlFQUF5RTs7a0NBQ3RGLDhEQUFDSSxJQUFFO3dCQUFDSixTQUFTLEVBQUMsd0JBQXdCO2tDQUFDLGdCQUFjOzs7Ozs0QkFBSztvQkFDekRILGlCQUFnQixDQUFDUSxHQUFHLENBQUMsU0FBQ0MsTUFBTSxFQUFFQyxLQUFLOzZDQUNsQyw4REFBQ1osd0RBQVM7NEJBQUNXLE1BQU0sRUFBRUEsTUFBTTsyQkFBT0MsS0FBSzs7OztpQ0FBSTtxQkFDMUMsQ0FBQztrQ0FDRiw4REFBQ0MsUUFBTTt3QkFBQ1IsU0FBUyxFQUFDLFVBQVU7a0NBQUMsV0FBUzs7Ozs7NEJBQVM7Ozs7OztvQkFDM0M7Ozs7OztZQUNGLENBQ1A7Q0FDRjtBQUVELCtEQUFlRixPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBzL3dpZGdldHMuanM/NDQyNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZWFyY2hJY29uIH0gZnJvbSAnQGhlcm9pY29ucy9yZWFjdC9zb2xpZCdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBUcmVuZGluZyBmcm9tICcuLi9jb21wcy9UcmVuZGluZydcbmltcG9ydCBGb2xsb3dpbmcgZnJvbSAnLi4vY29tcHMvRm9sbG93aW5nJztcbmltcG9ydCB0cmVuZGluZ1Jlc3VsdHMgZnJvbSAnLi91dGlscy90cmVuZGluZ1Jlc3VsdHMnO1xuaW1wb3J0IHsgZm9sbG93aW5nUmVzdWx0cyB9IGZyb20gJy4vdXRpbHMvdHJlbmRpbmdSZXN1bHRzJztcblxuZnVuY3Rpb24gd2lkZ2V0cyh7IHRyZW5kaW5nUmVzdWx0cywgZm9sbG93aW5nUmVzdWx0cyB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gbGc6aW5saW5lIG1sLTggeGw6dy1bNDUwcHhdIHB5LTEgc3BhY2UteS01XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0aWNreSB0b3AtMCBweS0xLjUgYmctYmxhY2sgei01MCB3LTExLzEyIHhsOnctOS8xMlwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGJnLVsjMjAyMzI3XSBwLTMgcm91bmRlZC1mdWxsIHJlbGF0aXZlXCI+XG4gICAgICAgICAgPFNlYXJjaEljb24gY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMCBoLTUgei01MFwiIC8+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiZy10cmFuc3BhcmVudCBcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyLWdyYXktNTAwIFxuICAgICAgICAgICAgb3V0bGluZS1ub25lIFxuICAgICAgICAgICAgdGV4dC1bI2Q5ZDlkOV0gXG4gICAgICAgICAgICBhYnNvbHV0ZSBcbiAgICAgICAgICAgIGluc2V0LTAgXG4gICAgICAgICAgICBwbC0xMSBcbiAgICAgICAgICAgIGJvcmRlciBib3JkZXItdHJhbnNwYXJlbnQgdy1mdWxsIGZvY3VzOmJvcmRlci1bIzFkOWJmMF0gcm91bmRlZC1mdWxsIGZvY3VzOmJnLWJsYWNrIGZvY3VzOnNoYWRvdy1sZ1wiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBUd2l0dGVyXCJcbiAgICAgICAgICAvPiBcbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMS8xMiBzcGFjZS15LTMgcm91bmRlZC14bCBiZy1bIzE1MTgxY10gcHQtMiB0ZXh0LVsjZDlkOWQ5XSB4bDp3LTkvMTJcIj5cbiAgICAgICAgPGg0IGNsYXNzTmFtZT1cInB4LTQgdGV4dC14bCBmb250LWJvbGRcIj5XaGF0J3MgaGFwcGVuaW5nPzwvaDQ+XG4gICAgICAgIHt0cmVuZGluZ1Jlc3VsdHMubWFwKChyZXN1bHQsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPFRyZW5kaW5nIHJlc3VsdD17cmVzdWx0fSBrZXk9e2luZGV4fSAvPlxuICAgICAgICApKX1cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0cmVuZEJ0blwiPlNob3cgTW9yZTwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICBcblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTExLzEyIHNwYWNlLXktMyByb3VuZGVkLXhsIGJnLVsjMTUxODFjXSBwdC0yIHRleHQtWyNkOWQ5ZDldIHhsOnctOS8xMlwiPlxuICAgICAgICA8aDQgY2xhc3NOYW1lPVwicHgtNCB0ZXh0LXhsIGZvbnQtYm9sZFwiPldobyB0byBmb2xsb3c/PC9oND5cbiAgICAgICAge2ZvbGxvd2luZ1Jlc3VsdHMubWFwKChyZXN1bHQsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPEZvbGxvd2luZyByZXN1bHQ9e3Jlc3VsdH0ga2V5PXtpbmRleH0gLz5cbiAgICAgICAgKSl9XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidHJlbmRCdG5cIj5TaG93IE1vcmU8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpZGdldHNcbiJdLCJuYW1lcyI6WyJTZWFyY2hJY29uIiwiUmVhY3QiLCJUcmVuZGluZyIsIkZvbGxvd2luZyIsInRyZW5kaW5nUmVzdWx0cyIsImZvbGxvd2luZ1Jlc3VsdHMiLCJ3aWRnZXRzIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJoNCIsIm1hcCIsInJlc3VsdCIsImluZGV4IiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./comps/widgets.js\n");

/***/ })

});