"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__);\n\n\n// this here, we want to add the google authentication tokens here, this helps us access the google next authentication.\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    providers: [\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.GOOGLE_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET\n        })\n    ],\n    // we add callbacks, callbacks are async functions that control when a session is initialized\n    callbacks: {\n        async session ({ session , token  }) {\n            session.user.tag = session.user.name.split(\" \").join(\"\").toLocaleLowerCase();\n            session.user.uid = token.sub;\n            return session;\n        }\n    },\n    //    this would add a secret to my enviornment variables\n    secret: process.env.JWT_SECRET\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWlDO0FBQ3NCO0FBRXZELHdIQUF3SDtBQUN4SCxpRUFBZUEsZ0RBQVEsQ0FBQztJQUVwQkUsU0FBUyxFQUFFO1FBQ1BELGlFQUFjLENBQUU7WUFDWkUsUUFBUSxFQUFFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsZ0JBQWdCO1lBQ3RDQyxZQUFZLEVBQUVILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRyxvQkFBb0I7U0FDakQsQ0FBQztLQUNMO0lBQ0QsNkZBQTZGO0lBRTlGQyxTQUFTLEVBQUU7UUFDUCxNQUFNQyxPQUFPLEVBQUMsRUFBQ0EsT0FBTyxHQUFFQyxLQUFLLEdBQUMsRUFBQztZQUMzQkQsT0FBTyxDQUFDRSxJQUFJLENBQUNDLEdBQUcsR0FBR0gsT0FBTyxDQUFDRSxJQUFJLENBQUNFLElBQUksQ0FBQ0MsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUNDLGlCQUFpQixFQUFFLENBQUM7WUFDN0VQLE9BQU8sQ0FBQ0UsSUFBSSxDQUFDTSxHQUFHLEdBQUdQLEtBQUssQ0FBQ1EsR0FBRyxDQUFDO1lBQzdCLE9BQU9ULE9BQU8sQ0FBQztTQUNsQjtLQUNKO0lBQ0QseURBQXlEO0lBQ3pEVSxNQUFNLEVBQUVoQixPQUFPLENBQUNDLEdBQUcsQ0FBQ2dCLFVBQVU7Q0FDaEMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0uanM/NTI3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSAnbmV4dC1hdXRoJztcbmltcG9ydCBHb29nbGVQcm92aWRlciBmcm9tICduZXh0LWF1dGgvcHJvdmlkZXJzL2dvb2dsZSdcblxuLy8gdGhpcyBoZXJlLCB3ZSB3YW50IHRvIGFkZCB0aGUgZ29vZ2xlIGF1dGhlbnRpY2F0aW9uIHRva2VucyBoZXJlLCB0aGlzIGhlbHBzIHVzIGFjY2VzcyB0aGUgZ29vZ2xlIG5leHQgYXV0aGVudGljYXRpb24uXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aCh7XG4gXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIEdvb2dsZVByb3ZpZGVyICh7XG4gICAgICAgICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9JRCxcbiAgICAgICAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9TRUNSRVQsXG4gICAgICAgIH0pXG4gICAgXSxcbiAgICAvLyB3ZSBhZGQgY2FsbGJhY2tzLCBjYWxsYmFja3MgYXJlIGFzeW5jIGZ1bmN0aW9ucyB0aGF0IGNvbnRyb2wgd2hlbiBhIHNlc3Npb24gaXMgaW5pdGlhbGl6ZWRcblxuICAgY2FsbGJhY2tzOiB7XG4gICAgICAgYXN5bmMgc2Vzc2lvbih7c2Vzc2lvbiwgdG9rZW59KXtcbiAgICAgICAgICAgc2Vzc2lvbi51c2VyLnRhZyA9IHNlc3Npb24udXNlci5uYW1lLnNwbGl0KFwiIFwiKS5qb2luKFwiXCIpLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgICAgICAgIHNlc3Npb24udXNlci51aWQgPSB0b2tlbi5zdWI7IFxuICAgICAgICAgICByZXR1cm4gc2Vzc2lvbjtcbiAgICAgICB9LFxuICAgfSxcbiAgIC8vICAgIHRoaXMgd291bGQgYWRkIGEgc2VjcmV0IHRvIG15IGVudmlvcm5tZW50IHZhcmlhYmxlc1xuICAgc2VjcmV0OiBwcm9jZXNzLmVudi5KV1RfU0VDUkVUXG59KVxuLy8gbmV4dCBzdGVwIGFmdGVyIGFkZGluZyBnb29nbGVQcm92aWRlcjtcbi8vIGFmdGVyIGRldmVsb3BpbmcgYW4gYXBpIGZvciB0aGlzLCB3ZSBub3cgYWRkIGEgdXNlU2Vzc2lvbiBpbiBvdXIgYXBwIHNvIHRoYXQgaXQgaXMgYWNjZXNzaWJsZSBldmVyeSB3aGVyZS5cbiJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsIkdvb2dsZVByb3ZpZGVyIiwicHJvdmlkZXJzIiwiY2xpZW50SWQiLCJwcm9jZXNzIiwiZW52IiwiR09PR0xFX0NMSUVOVF9JRCIsImNsaWVudFNlY3JldCIsIkdPT0dMRV9DTElFTlRfU0VDUkVUIiwiY2FsbGJhY2tzIiwic2Vzc2lvbiIsInRva2VuIiwidXNlciIsInRhZyIsIm5hbWUiLCJzcGxpdCIsImpvaW4iLCJ0b0xvY2FsZUxvd2VyQ2FzZSIsInVpZCIsInN1YiIsInNlY3JldCIsIkpXVF9TRUNSRVQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();