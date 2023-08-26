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

/***/ "./comps/Trending.js":
/*!***************************!*\
  !*** ./comps/Trending.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/react/outline */ \"./node_modules/@heroicons/react/outline/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nfunction Trending(param) {\n    var result = param.result;\n    var _this = this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"hover:bg-white hover:bg-opacity-[0.03] cursor-pointer transition duration-200 ease-out px-4 py-3 flex items-center justify-between\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"space-y-0.5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-xs tex-[#6e7d7d] font-medium\",\n                        children: result.heading\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\Documents\\\\Twitter\\\\comps\\\\Trending.js\",\n                        lineNumber: 9,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                        className: \"text-sm max-w-[250px] font-bold\",\n                        children: result.description\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\Documents\\\\Twitter\\\\comps\\\\Trending.js\",\n                        lineNumber: 10,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-[#1d96f0] text-xs font-medium max-w-[250px]\",\n                        children: [\n                            \"Trending with\",\n                            result.tags.map(function(el) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"tag\",\n                                    children: el.name\n                                }, el.index, false, {\n                                    fileName: \"C:\\\\Users\\\\USER\\\\Documents\\\\Twitter\\\\comps\\\\Trending.js\",\n                                    lineNumber: 12,\n                                    columnNumber: 9\n                                }, _this);\n                            })\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\Documents\\\\Twitter\\\\comps\\\\Trending.js\",\n                        lineNumber: 11,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\USER\\\\Documents\\\\Twitter\\\\comps\\\\Trending.js\",\n                lineNumber: 8,\n                columnNumber: 6\n            }, this),\n            result.image ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                src: result.image,\n                width: 70,\n                height: 70,\n                objectFit: \"cover\",\n                className: \"rounded-2xl\",\n                alt: result.heading\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\USER\\\\Documents\\\\Twitter\\\\comps\\\\Trending.js\",\n                lineNumber: 14,\n                columnNumber: 22\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"icon group\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__.DotsCircleHorizontalIcon, {\n                    className: \"h-5 w-5 text-[#6e767d] group-hover:text-[#1d9bf0]\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\USER\\\\Documents\\\\Twitter\\\\comps\\\\Trending.js\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\USER\\\\Documents\\\\Twitter\\\\comps\\\\Trending.js\",\n                lineNumber: 15,\n                columnNumber: 6\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\USER\\\\Documents\\\\Twitter\\\\comps\\\\Trending.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n_c = Trending;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Trending);\nvar _c;\n$RefreshReg$(_c, \"Trending\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wcy9UcmVuZGluZy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQW1FO0FBQzFDO0FBQ007QUFFL0IsU0FBU0csUUFBUSxDQUFDLEtBQVEsRUFBRTtRQUFWLE1BQU8sR0FBUCxLQUFRLENBQVBDLE1BQU07O0lBQ3ZCLHFCQUNFLDhEQUFDQyxLQUFHO1FBQUVDLFNBQVMsRUFBQyxvSUFBb0k7OzBCQUNuSiw4REFBQ0QsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLGFBQWE7O2tDQUN6Qiw4REFBQ0MsR0FBQzt3QkFBQ0QsU0FBUyxFQUFDLG1DQUFtQztrQ0FBRUYsTUFBTSxDQUFDSSxPQUFPOzs7Ozs0QkFBSztrQ0FDckUsOERBQUNDLElBQUU7d0JBQUNILFNBQVMsRUFBQyxpQ0FBaUM7a0NBQUVGLE1BQU0sQ0FBQ00sV0FBVzs7Ozs7NEJBQU07a0NBQ3pFLDhEQUFDSCxHQUFDO3dCQUFDRCxTQUFTLEVBQUMsa0RBQWtEOzs0QkFBQyxlQUFhOzRCQUFDRixNQUFNLENBQUNPLElBQUksQ0FBQ0MsR0FBRyxDQUFDLFNBQUNDLEVBQUU7cURBQ2pHLDhEQUFDQyxNQUFJO29DQUFnQlIsU0FBUyxFQUFDLEtBQUs7OENBQUVPLEVBQUUsQ0FBQ0UsSUFBSTttQ0FBbENGLEVBQUUsQ0FBQ0csS0FBSzs7Ozt5Q0FBa0M7NkJBQUMsQ0FBQzs7Ozs7OzRCQUFLOzs7Ozs7b0JBQ3pEO1lBQ0xaLE1BQU0sQ0FBQ2EsS0FBSyxpQkFBRyw4REFBQ2YsbURBQUs7Z0JBQUNnQixHQUFHLEVBQUVkLE1BQU0sQ0FBQ2EsS0FBSztnQkFBRUUsS0FBSyxFQUFFLEVBQUU7Z0JBQUVDLE1BQU0sRUFBRSxFQUFFO2dCQUFFQyxTQUFTLEVBQUMsT0FBTztnQkFBQ2YsU0FBUyxFQUFDLGFBQWE7Z0JBQUNnQixHQUFHLEVBQUVsQixNQUFNLENBQUNJLE9BQU87Ozs7O29CQUFHLGlCQUNqSSw4REFBQ0gsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLFlBQVk7MEJBQ3hCLDRFQUFDTiw4RUFBd0I7b0JBQUNNLFNBQVMsRUFBQyxtREFBbUQ7Ozs7O3dCQUFFOzs7OztvQkFDdEY7Ozs7OztZQUNELENBQ1A7Q0FDRjtBQWZRSCxLQUFBQSxRQUFRO0FBaUJqQiwrREFBZUEsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wcy9UcmVuZGluZy5qcz9hNjIzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERvdHNDaXJjbGVIb3Jpem9udGFsSWNvbiB9IGZyb20gJ0BoZXJvaWNvbnMvcmVhY3Qvb3V0bGluZSdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcblxuZnVuY3Rpb24gVHJlbmRpbmcoe3Jlc3VsdH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2ICBjbGFzc05hbWU9J2hvdmVyOmJnLXdoaXRlIGhvdmVyOmJnLW9wYWNpdHktWzAuMDNdIGN1cnNvci1wb2ludGVyIHRyYW5zaXRpb24gZHVyYXRpb24tMjAwIGVhc2Utb3V0IHB4LTQgcHktMyBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4nPlxuICAgICA8ZGl2IGNsYXNzTmFtZT0nc3BhY2UteS0wLjUnPlxuICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQteHMgdGV4LVsjNmU3ZDdkXSBmb250LW1lZGl1bSc+e3Jlc3VsdC5oZWFkaW5nfTwvcD5cbiAgICAgICAgPGg2IGNsYXNzTmFtZT0ndGV4dC1zbSBtYXgtdy1bMjUwcHhdIGZvbnQtYm9sZCc+e3Jlc3VsdC5kZXNjcmlwdGlvbn08L2g2PlxuICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtWyMxZDk2ZjBdIHRleHQteHMgZm9udC1tZWRpdW0gbWF4LXctWzI1MHB4XSc+VHJlbmRpbmcgd2l0aHtyZXN1bHQudGFncy5tYXAoKGVsKSA9PiAoXG4gICAgICAgIDxzcGFuIGtleT17ZWwuaW5kZXh9IGNsYXNzTmFtZT0ndGFnJz57ZWwubmFtZX08L3NwYW4+KSl9PC9wPlxuICAgICA8L2Rpdj5cbiAgICAge3Jlc3VsdC5pbWFnZSA/IDxJbWFnZSBzcmM9e3Jlc3VsdC5pbWFnZX0gd2lkdGg9ezcwfSBoZWlnaHQ9ezcwfSBvYmplY3RGaXQ9XCJjb3ZlclwiIGNsYXNzTmFtZT1cInJvdW5kZWQtMnhsXCIgYWx0PXtyZXN1bHQuaGVhZGluZ30vPiA6XG4gICAgIDxkaXYgY2xhc3NOYW1lPSdpY29uIGdyb3VwJz5cbiAgICAgICAgPERvdHNDaXJjbGVIb3Jpem9udGFsSWNvbiBjbGFzc05hbWU9J2gtNSB3LTUgdGV4dC1bIzZlNzY3ZF0gZ3JvdXAtaG92ZXI6dGV4dC1bIzFkOWJmMF0nLz5cbiAgICAgPC9kaXY+IH1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUcmVuZGluZyJdLCJuYW1lcyI6WyJEb3RzQ2lyY2xlSG9yaXpvbnRhbEljb24iLCJSZWFjdCIsIkltYWdlIiwiVHJlbmRpbmciLCJyZXN1bHQiLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwiaGVhZGluZyIsImg2IiwiZGVzY3JpcHRpb24iLCJ0YWdzIiwibWFwIiwiZWwiLCJzcGFuIiwibmFtZSIsImluZGV4IiwiaW1hZ2UiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsIm9iamVjdEZpdCIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./comps/Trending.js\n");

/***/ })

});