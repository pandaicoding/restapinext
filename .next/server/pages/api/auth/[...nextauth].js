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

/***/ "./pages/api/auth/[...nextauth].ts":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers */ \"next-auth/providers\");\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @next-auth/prisma-adapter */ \"@next-auth/prisma-adapter\");\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_clients_prisma__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../src/clients/prisma */ \"./src/clients/prisma.ts\");\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n  providers: [// OAuth authentication providers\n  next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default().GitHub({\n    clientId: process.env.GITHUB_ID,\n    clientSecret: process.env.GITHUB_SECRET,\n\n    profile(profile) {\n      console.log(process.env.GITHUB_ID);\n      return {\n        id: profile.id.toString(),\n        name: profile.name || profile.login,\n        email: profile.email,\n        image: profile.avatar_url\n      };\n    }\n\n  }) // Providers.Apple({\n  //   clientId: process.env.APPLE_ID,\n  //   clientSecret: process.env.APPLE_SECRET,\n  // }),\n  // Providers.Google({\n  //   clientId: process.env.GOOGLE_ID,\n  //   clientSecret: process.env.GOOGLE_SECRET,\n  // }),\n  // Sign in with passwordless email link\n  // Providers.Email({\n  //   server: process.env.MAIL_SERVER,\n  //   from: \"<no-reply@example.com>\",\n  // }),\n  ],\n  // SQL or MongoDB database (or leave empty)\n  adapter: (0,_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2__.PrismaAdapter)(_src_clients_prisma__WEBPACK_IMPORTED_MODULE_3__.default)\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxpRUFBZUEsZ0RBQVEsQ0FBQztBQUN0QkksRUFBQUEsU0FBUyxFQUFFLENBQ1Q7QUFDQUgsRUFBQUEsaUVBQUEsQ0FBaUI7QUFDZkssSUFBQUEsUUFBUSxFQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsU0FEUDtBQUVmQyxJQUFBQSxZQUFZLEVBQUVILE9BQU8sQ0FBQ0MsR0FBUixDQUFZRyxhQUZYOztBQUtmQyxJQUFBQSxPQUFPLENBQUNBLE9BQUQsRUFBVTtBQUNmQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWVAsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFNBQXhCO0FBQ0EsYUFBTztBQUNMTSxRQUFBQSxFQUFFLEVBQUVILE9BQU8sQ0FBQ0csRUFBUixDQUFXQyxRQUFYLEVBREM7QUFFTEMsUUFBQUEsSUFBSSxFQUFFTCxPQUFPLENBQUNLLElBQVIsSUFBaUJMLE9BQU8sQ0FBQ00sS0FGMUI7QUFHTEMsUUFBQUEsS0FBSyxFQUFFUCxPQUFPLENBQUNPLEtBSFY7QUFJTEMsUUFBQUEsS0FBSyxFQUFFUixPQUFPLENBQUNTO0FBSlYsT0FBUDtBQU1EOztBQWJjLEdBQWpCLENBRlMsQ0FpQlQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE3QlMsR0FEVztBQWdDdEI7QUFDQUMsRUFBQUEsT0FBTyxFQUFFcEIsd0VBQWEsQ0FBQ0Msd0RBQUQ7QUFqQ0EsQ0FBRCxDQUF2QiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqc2dxbGFwb2xsby8uL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0udHM/MjhjMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiO1xuaW1wb3J0IFByb3ZpZGVycyBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVyc1wiO1xuaW1wb3J0IHsgUHJpc21hQWRhcHRlciB9IGZyb20gJ0BuZXh0LWF1dGgvcHJpc21hLWFkYXB0ZXInO1xuaW1wb3J0IFByaXNtYSBmcm9tICcuLi8uLi8uLi9zcmMvY2xpZW50cy9wcmlzbWEnO1xuXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aCh7XG4gIHByb3ZpZGVyczogW1xuICAgIC8vIE9BdXRoIGF1dGhlbnRpY2F0aW9uIHByb3ZpZGVyc1xuICAgIFByb3ZpZGVycy5HaXRIdWIoe1xuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdJVEhVQl9JRCxcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR0lUSFVCX1NFQ1JFVCxcblxuXG4gICAgICBwcm9maWxlKHByb2ZpbGUpIHtcbiAgICAgICAgY29uc29sZS5sb2cocHJvY2Vzcy5lbnYuR0lUSFVCX0lEKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBpZDogcHJvZmlsZS5pZC50b1N0cmluZygpLFxuICAgICAgICAgIG5hbWU6IHByb2ZpbGUubmFtZSB8fCAocHJvZmlsZS5sb2dpbiBhcyBzdHJpbmcpLFxuICAgICAgICAgIGVtYWlsOiBwcm9maWxlLmVtYWlsLFxuICAgICAgICAgIGltYWdlOiBwcm9maWxlLmF2YXRhcl91cmwgYXMgc3RyaW5nLFxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0pLFxuICAgIC8vIFByb3ZpZGVycy5BcHBsZSh7XG4gICAgLy8gICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuQVBQTEVfSUQsXG4gICAgLy8gICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkFQUExFX1NFQ1JFVCxcbiAgICAvLyB9KSxcbiAgICAvLyBQcm92aWRlcnMuR29vZ2xlKHtcbiAgICAvLyAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HT09HTEVfSUQsXG4gICAgLy8gICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdPT0dMRV9TRUNSRVQsXG4gICAgLy8gfSksXG4gICAgLy8gU2lnbiBpbiB3aXRoIHBhc3N3b3JkbGVzcyBlbWFpbCBsaW5rXG4gICAgLy8gUHJvdmlkZXJzLkVtYWlsKHtcbiAgICAvLyAgIHNlcnZlcjogcHJvY2Vzcy5lbnYuTUFJTF9TRVJWRVIsXG4gICAgLy8gICBmcm9tOiBcIjxuby1yZXBseUBleGFtcGxlLmNvbT5cIixcbiAgICAvLyB9KSxcbiAgXSxcbiAgLy8gU1FMIG9yIE1vbmdvREIgZGF0YWJhc2UgKG9yIGxlYXZlIGVtcHR5KVxuICBhZGFwdGVyOiBQcmlzbWFBZGFwdGVyKFByaXNtYSksXG59KSJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsIlByb3ZpZGVycyIsIlByaXNtYUFkYXB0ZXIiLCJQcmlzbWEiLCJwcm92aWRlcnMiLCJHaXRIdWIiLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJHSVRIVUJfSUQiLCJjbGllbnRTZWNyZXQiLCJHSVRIVUJfU0VDUkVUIiwicHJvZmlsZSIsImNvbnNvbGUiLCJsb2ciLCJpZCIsInRvU3RyaW5nIiwibmFtZSIsImxvZ2luIiwiZW1haWwiLCJpbWFnZSIsImF2YXRhcl91cmwiLCJhZGFwdGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/auth/[...nextauth].ts\n");

/***/ }),

/***/ "./src/clients/prisma.ts":
/*!*******************************!*\
  !*** ./src/clients/prisma.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n // add prisma to the NodeJS global type\n\nconst prisma = global.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) global.prisma = prisma;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2xpZW50cy9wcmlzbWEudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0NBR0E7O0FBUUEsTUFBTUMsTUFBTSxHQUFHQyxNQUFNLENBQUNELE1BQVAsSUFBaUIsSUFBSUQsd0RBQUosRUFBaEM7QUFFQSxJQUFJLE1BQXdDRSxNQUFNLENBQUNELE1BQVAsR0FBZ0JBLE1BQWhCO0FBRTVDLGlFQUFlQSxNQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzZ3FsYXBvbGxvLy4vc3JjL2NsaWVudHMvcHJpc21hLnRzP2I1MWIiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XG5cbi8vIGFkZCBwcmlzbWEgdG8gdGhlIE5vZGVKUyBnbG9iYWwgdHlwZVxuaW50ZXJmYWNlIEN1c3RvbU5vZGVKc0dsb2JhbCBleHRlbmRzIE5vZGVKUy5HbG9iYWwge1xuICAgIHByaXNtYTogUHJpc21hQ2xpZW50O1xufVxuXG4vLyBQcmV2ZW50IG11bHRpcGxlIGluc3RhbmNlIG9mIFByaXNtYSBDbGllbnQgaW4gZGV2ZWxvcG1lbnRcbmRlY2xhcmUgY29uc3QgZ2xvYmFsOiBDdXN0b21Ob2RlSnNHbG9iYWw7XG5cbmNvbnN0IHByaXNtYSA9IGdsb2JhbC5wcmlzbWEgfHwgbmV3IFByaXNtYUNsaWVudCgpO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIGdsb2JhbC5wcmlzbWEgPSBwcmlzbWE7XG5cbmV4cG9ydCBkZWZhdWx0IHByaXNtYTtcblxuZXhwb3J0IGludGVyZmFjZSBDb250ZXh0IHtcbiAgICB1aWQ6IHN0cmluZyB8IG51bGw7XG4gICAgcHJpc21hOiBQcmlzbWFDbGllbnQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUF1dGhDb250ZXh0IGV4dGVuZHMgQ29udGV4dCB7XG4gICAgdWlkOiBzdHJpbmc7XG59Il0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInByaXNtYSIsImdsb2JhbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/clients/prisma.ts\n");

/***/ }),

/***/ "@next-auth/prisma-adapter":
/*!********************************************!*\
  !*** external "@next-auth/prisma-adapter" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@next-auth/prisma-adapter");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers":
/*!**************************************!*\
  !*** external "next-auth/providers" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/auth/[...nextauth].ts"));
module.exports = __webpack_exports__;

})();