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
exports.id = "pages/api/graphql";
exports.ids = ["pages/api/graphql"];
exports.modules = {

/***/ "./pages/api/graphql.ts":
/*!******************************!*\
  !*** ./pages/api/graphql.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler),\n/* harmony export */   \"config\": () => (/* binding */ config)\n/* harmony export */ });\n/* harmony import */ var _src_clients_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/clients/prisma */ \"./src/clients/prisma.ts\");\n/* harmony import */ var apollo_server_micro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-server-micro */ \"apollo-server-micro\");\n/* harmony import */ var apollo_server_micro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(apollo_server_micro__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_graphql_schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/graphql/schema */ \"./src/graphql/schema.ts\");\n/* harmony import */ var apollo_server_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-server-core */ \"apollo-server-core\");\n/* harmony import */ var apollo_server_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(apollo_server_core__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/client */ \"next-auth/client\");\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst apolloServer = new apollo_server_micro__WEBPACK_IMPORTED_MODULE_1__.ApolloServer({\n  context: async ({\n    req\n  }) => {\n    var _session$user;\n\n    const session = await (0,next_auth_client__WEBPACK_IMPORTED_MODULE_4__.getSession)({\n      req\n    });\n    let uid = null;\n    const email = session === null || session === void 0 ? void 0 : (_session$user = session.user) === null || _session$user === void 0 ? void 0 : _session$user.email;\n\n    if (email) {\n      const user = await _src_clients_prisma__WEBPACK_IMPORTED_MODULE_0__.default.user.findUnique({\n        where: {\n          email\n        }\n      });\n      uid = user.id;\n    }\n\n    return {\n      uid,\n      prisma: _src_clients_prisma__WEBPACK_IMPORTED_MODULE_0__.default\n    };\n  },\n  schema: _src_graphql_schema__WEBPACK_IMPORTED_MODULE_2__.executableSchema,\n  plugins: [(0,apollo_server_core__WEBPACK_IMPORTED_MODULE_3__.ApolloServerPluginLandingPageGraphQLPlayground)()]\n});\nconst startServer = apolloServer.start();\nasync function handler(req, res) {\n  await startServer;\n  await apolloServer.createHandler({\n    path: '/api/graphql'\n  })(req, res);\n}\n;\nconst config = {\n  api: {\n    bodyParser: false\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvZ3JhcGhxbC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBLE1BQU1LLFlBQVksR0FBRyxJQUFJSiw2REFBSixDQUFpQjtBQUNsQ0ssRUFBQUEsT0FBTyxFQUFFLE9BQU87QUFBRUMsSUFBQUE7QUFBRixHQUFQLEtBQTZEO0FBQUE7O0FBRWxFLFVBQU1DLE9BQU8sR0FBRyxNQUFNSiw0REFBVSxDQUFDO0FBQUVHLE1BQUFBO0FBQUYsS0FBRCxDQUFoQztBQUVBLFFBQUlFLEdBQUcsR0FBRyxJQUFWO0FBRUEsVUFBTUMsS0FBSyxHQUFHRixPQUFILGFBQUdBLE9BQUgsd0NBQUdBLE9BQU8sQ0FBRUcsSUFBWixrREFBRyxjQUFlRCxLQUE3Qjs7QUFDQSxRQUFJQSxLQUFKLEVBQVc7QUFDUCxZQUFNQyxJQUFJLEdBQUcsTUFBTVgsd0VBQUEsQ0FBdUI7QUFDdENhLFFBQUFBLEtBQUssRUFBQztBQUFDSCxVQUFBQTtBQUFEO0FBRGdDLE9BQXZCLENBQW5CO0FBR0FELE1BQUFBLEdBQUcsR0FBR0UsSUFBSSxDQUFDRyxFQUFYO0FBQ0g7O0FBRUQsV0FBTztBQUNITCxNQUFBQSxHQURHO0FBRUhULE1BQUFBLE1BQU1BLDBEQUFBQTtBQUZILEtBQVA7QUFJSCxHQW5CaUM7QUFvQmxDZSxFQUFBQSxNQUFNLEVBQUViLGlFQXBCMEI7QUFxQmxDYyxFQUFBQSxPQUFPLEVBQUUsQ0FBQ2Isa0dBQThDLEVBQS9DO0FBckJ5QixDQUFqQixDQUFyQjtBQXdCQSxNQUFNYyxXQUFXLEdBQUdaLFlBQVksQ0FBQ2EsS0FBYixFQUFwQjtBQUVlLGVBQWVDLE9BQWYsQ0FDWFosR0FEVyxFQUVYYSxHQUZXLEVBR2Q7QUFDRyxRQUFNSCxXQUFOO0FBQ0EsUUFBTVosWUFBWSxDQUFDZ0IsYUFBYixDQUEyQjtBQUM3QkMsSUFBQUEsSUFBSSxFQUFFO0FBRHVCLEdBQTNCLEVBRUhmLEdBRkcsRUFFRWEsR0FGRixDQUFOO0FBR0g7QUFBQTtBQUVNLE1BQU1HLE1BQU0sR0FBRztBQUNsQkMsRUFBQUEsR0FBRyxFQUFFO0FBQ0RDLElBQUFBLFVBQVUsRUFBRTtBQURYO0FBRGEsQ0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqc2dxbGFwb2xsby8uL3BhZ2VzL2FwaS9ncmFwaHFsLnRzPzE2NmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByaXNtYSwge0NvbnRleHR9IGZyb20gJy4uLy4uL3NyYy9jbGllbnRzL3ByaXNtYSc7XG5pbXBvcnQgeyBBcG9sbG9TZXJ2ZXIgfSBmcm9tICdhcG9sbG8tc2VydmVyLW1pY3JvJztcbmltcG9ydCB7TmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZX0gZnJvbSAnbmV4dCdcbmltcG9ydCB7ZXhlY3V0YWJsZVNjaGVtYX0gZnJvbSAnLi4vLi4vc3JjL2dyYXBocWwvc2NoZW1hJ1xuaW1wb3J0IHsgQXBvbGxvU2VydmVyUGx1Z2luTGFuZGluZ1BhZ2VHcmFwaFFMUGxheWdyb3VuZCB9IGZyb20gJ2Fwb2xsby1zZXJ2ZXItY29yZSc7XG5pbXBvcnQgeyBnZXRTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9jbGllbnRcIjtcblxuXG5jb25zdCBhcG9sbG9TZXJ2ZXIgPSBuZXcgQXBvbGxvU2VydmVyKHtcbiAgICBjb250ZXh0OiBhc3luYyAoeyByZXEgfToge3JlcTogTmV4dEFwaVJlcXVlc3QgfSk6IFByb21pc2U8Q29udGV4dD4gPT4ge1xuXG4gICAgICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKHsgcmVxIH0pXG5cbiAgICAgICAgbGV0IHVpZCA9IG51bGw7XG5cbiAgICAgICAgY29uc3QgZW1haWwgPSBzZXNzaW9uPy51c2VyPy5lbWFpbDtcbiAgICAgICAgaWYgKGVtYWlsKSB7XG4gICAgICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XG4gICAgICAgICAgICAgICAgd2hlcmU6e2VtYWlsfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB1aWQgPSB1c2VyLmlkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHVpZCxcbiAgICAgICAgICAgIHByaXNtYSxcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIHNjaGVtYTogZXhlY3V0YWJsZVNjaGVtYSxcbiAgICBwbHVnaW5zOiBbQXBvbGxvU2VydmVyUGx1Z2luTGFuZGluZ1BhZ2VHcmFwaFFMUGxheWdyb3VuZCgpXSxcbn0pXG5cbmNvbnN0IHN0YXJ0U2VydmVyID0gYXBvbGxvU2VydmVyLnN0YXJ0KCk7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXG4gICAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgICByZXM6IE5leHRBcGlSZXNwb25zZVxuKXtcbiAgICBhd2FpdCBzdGFydFNlcnZlcjtcbiAgICBhd2FpdCBhcG9sbG9TZXJ2ZXIuY3JlYXRlSGFuZGxlcih7XG4gICAgICAgIHBhdGg6ICcvYXBpL2dyYXBocWwnXG4gICAgfSkocmVxLCByZXMpXG59O1xuXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xuICAgIGFwaToge1xuICAgICAgICBib2R5UGFyc2VyOiBmYWxzZVxuICAgIH0sXG59OyJdLCJuYW1lcyI6WyJwcmlzbWEiLCJBcG9sbG9TZXJ2ZXIiLCJleGVjdXRhYmxlU2NoZW1hIiwiQXBvbGxvU2VydmVyUGx1Z2luTGFuZGluZ1BhZ2VHcmFwaFFMUGxheWdyb3VuZCIsImdldFNlc3Npb24iLCJhcG9sbG9TZXJ2ZXIiLCJjb250ZXh0IiwicmVxIiwic2Vzc2lvbiIsInVpZCIsImVtYWlsIiwidXNlciIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsImlkIiwic2NoZW1hIiwicGx1Z2lucyIsInN0YXJ0U2VydmVyIiwic3RhcnQiLCJoYW5kbGVyIiwicmVzIiwiY3JlYXRlSGFuZGxlciIsInBhdGgiLCJjb25maWciLCJhcGkiLCJib2R5UGFyc2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/graphql.ts\n");

/***/ }),

/***/ "./src/clients/prisma.ts":
/*!*******************************!*\
  !*** ./src/clients/prisma.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n // add prisma to the NodeJS global type\n\nconst prisma = global.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) global.prisma = prisma;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2xpZW50cy9wcmlzbWEudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0NBR0E7O0FBUUEsTUFBTUMsTUFBTSxHQUFHQyxNQUFNLENBQUNELE1BQVAsSUFBaUIsSUFBSUQsd0RBQUosRUFBaEM7QUFFQSxJQUFJLE1BQXdDRSxNQUFNLENBQUNELE1BQVAsR0FBZ0JBLE1BQWhCO0FBRTVDLGlFQUFlQSxNQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzZ3FsYXBvbGxvLy4vc3JjL2NsaWVudHMvcHJpc21hLnRzP2I1MWIiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XG5cbi8vIGFkZCBwcmlzbWEgdG8gdGhlIE5vZGVKUyBnbG9iYWwgdHlwZVxuaW50ZXJmYWNlIEN1c3RvbU5vZGVKc0dsb2JhbCBleHRlbmRzIE5vZGVKUy5HbG9iYWwge1xuICAgIHByaXNtYTogUHJpc21hQ2xpZW50O1xufVxuXG4vLyBQcmV2ZW50IG11bHRpcGxlIGluc3RhbmNlIG9mIFByaXNtYSBDbGllbnQgaW4gZGV2ZWxvcG1lbnRcbmRlY2xhcmUgY29uc3QgZ2xvYmFsOiBDdXN0b21Ob2RlSnNHbG9iYWw7XG5cbmNvbnN0IHByaXNtYSA9IGdsb2JhbC5wcmlzbWEgfHwgbmV3IFByaXNtYUNsaWVudCgpO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIGdsb2JhbC5wcmlzbWEgPSBwcmlzbWE7XG5cbmV4cG9ydCBkZWZhdWx0IHByaXNtYTtcblxuZXhwb3J0IGludGVyZmFjZSBDb250ZXh0IHtcbiAgICB1aWQ6IHN0cmluZyB8IG51bGw7XG4gICAgcHJpc21hOiBQcmlzbWFDbGllbnQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUF1dGhDb250ZXh0IGV4dGVuZHMgQ29udGV4dCB7XG4gICAgdWlkOiBzdHJpbmc7XG59Il0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInByaXNtYSIsImdsb2JhbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/clients/prisma.ts\n");

/***/ }),

/***/ "./src/graphql/resolvers.ts":
/*!**********************************!*\
  !*** ./src/graphql/resolvers.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nconst resolvers = {\n  Query: {\n    hello: () => {\n      return \"Hi, nDrugal!\";\n    }\n  },\n  Mutation: {\n    createRoutine: async (_, {\n      routineInput\n    }, context) => {\n      const routine = await context.prisma.routine.create({\n        data: _objectSpread({}, routineInput)\n      });\n\n      if (routine) {\n        console.log('Success created routine');\n        return routine;\n      }\n\n      return null;\n    }\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (resolvers);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ3JhcGhxbC9yZXNvbHZlcnMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUdBLE1BQU1BLFNBQVMsR0FBRztBQUNkQyxFQUFBQSxLQUFLLEVBQUU7QUFDSEMsSUFBQUEsS0FBSyxFQUFHLE1BQU07QUFDVixhQUFPLGNBQVA7QUFDSDtBQUhFLEdBRE87QUFNZEMsRUFBQUEsUUFBUSxFQUFFO0FBQ05DLElBQUFBLGFBQWEsRUFBRSxPQUNYQyxDQURXLEVBRVg7QUFBRUMsTUFBQUE7QUFBRixLQUZXLEVBR1hDLE9BSFcsS0FJTjtBQUNELFlBQU1DLE9BQU8sR0FBRyxNQUFNRCxPQUFPLENBQUNFLE1BQVIsQ0FBZUQsT0FBZixDQUF1QkUsTUFBdkIsQ0FBOEI7QUFDaERDLFFBQUFBLElBQUksb0JBQU9MLFlBQVA7QUFENEMsT0FBOUIsQ0FBdEI7O0FBR0EsVUFBSUUsT0FBSixFQUFhO0FBQ1RJLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHlCQUFaO0FBQ0EsZUFBT0wsT0FBUDtBQUNIOztBQUNELGFBQU8sSUFBUDtBQUNIO0FBZEM7QUFOSSxDQUFsQjtBQXdCQSxpRUFBZVIsU0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqc2dxbGFwb2xsby8uL3NyYy9ncmFwaHFsL3Jlc29sdmVycy50cz8yYmRiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnRleHQgfSBmcm9tIFwiLi4vY2xpZW50cy9wcmlzbWFcIjtcbmltcG9ydCB7IFJvdXRpbmVJbnB1dCB9IGZyb20gXCIuLi9nZW5lcmF0ZWQvZ3JhcGhxbFwiO1xuXG5jb25zdCByZXNvbHZlcnMgPSB7XG4gICAgUXVlcnk6IHtcbiAgICAgICAgaGVsbG8gOiAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gXCJIaSwgbkRydWdhbCFcIjtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgTXV0YXRpb246IHtcbiAgICAgICAgY3JlYXRlUm91dGluZTogYXN5bmMgKFxuICAgICAgICAgICAgXyxcbiAgICAgICAgICAgIHsgcm91dGluZUlucHV0IH06IHtyb3V0aW5lSW5wdXQ6IFJvdXRpbmVJbnB1dH0sXG4gICAgICAgICAgICBjb250ZXh0OiBDb250ZXh0IFxuICAgICAgICAgICAgKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgcm91dGluZSA9IGF3YWl0IGNvbnRleHQucHJpc21hLnJvdXRpbmUuY3JlYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogeyAuLi5yb3V0aW5lSW5wdXQgfSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAocm91dGluZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnU3VjY2VzcyBjcmVhdGVkIHJvdXRpbmUnKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJvdXRpbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlc29sdmVyczsiXSwibmFtZXMiOlsicmVzb2x2ZXJzIiwiUXVlcnkiLCJoZWxsbyIsIk11dGF0aW9uIiwiY3JlYXRlUm91dGluZSIsIl8iLCJyb3V0aW5lSW5wdXQiLCJjb250ZXh0Iiwicm91dGluZSIsInByaXNtYSIsImNyZWF0ZSIsImRhdGEiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/graphql/resolvers.ts\n");

/***/ }),

/***/ "./src/graphql/schema.ts":
/*!*******************************!*\
  !*** ./src/graphql/schema.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"executableSchema\": () => (/* binding */ executableSchema)\n/* harmony export */ });\n/* harmony import */ var _graphql_tools_schema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @graphql-tools/schema */ \"@graphql-tools/schema\");\n/* harmony import */ var _graphql_tools_schema__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_graphql_tools_schema__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ \"./src/graphql/types.ts\");\n/* harmony import */ var _resolvers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resolvers */ \"./src/graphql/resolvers.ts\");\n/* harmony import */ var graphql_middleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-middleware */ \"graphql-middleware\");\n/* harmony import */ var graphql_middleware__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_middleware__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var apollo_server_errors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-server-errors */ \"apollo-server-errors\");\n/* harmony import */ var apollo_server_errors__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(apollo_server_errors__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nconst checkUserId = async (resolve, root, args, context, info) => {\n  if (!context.uid) {\n    throw new apollo_server_errors__WEBPACK_IMPORTED_MODULE_4__.AuthenticationError(\"Not authenticated\");\n  } else {\n    const result = await resolve(root, args, context, info);\n    return result;\n  }\n};\n\nconst schema = (0,_graphql_tools_schema__WEBPACK_IMPORTED_MODULE_0__.makeExecutableSchema)({\n  typeDefs: _types__WEBPACK_IMPORTED_MODULE_1__.default,\n  resolvers: _resolvers__WEBPACK_IMPORTED_MODULE_2__.default\n});\nconst executableSchema = (0,graphql_middleware__WEBPACK_IMPORTED_MODULE_3__.applyMiddleware)(schema, checkUserId);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ3JhcGhxbC9zY2hlbWEudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxNQUFNSyxXQUFXLEdBQUcsT0FBT0MsT0FBUCxFQUFnQkMsSUFBaEIsRUFBc0JDLElBQXRCLEVBQTRCQyxPQUE1QixFQUE4Q0MsSUFBOUMsS0FBdUQ7QUFDdkUsTUFBSSxDQUFDRCxPQUFPLENBQUNFLEdBQWIsRUFBa0I7QUFDZCxVQUFNLElBQUlQLHFFQUFKLENBQXdCLG1CQUF4QixDQUFOO0FBQ0gsR0FGRCxNQUVPO0FBQ0gsVUFBTVEsTUFBTSxHQUFHLE1BQU1OLE9BQU8sQ0FBQ0MsSUFBRCxFQUFPQyxJQUFQLEVBQWFDLE9BQWIsRUFBc0JDLElBQXRCLENBQTVCO0FBQ0EsV0FBT0UsTUFBUDtBQUNIO0FBQ0YsQ0FQSDs7QUFTQSxNQUFNQyxNQUFNLEdBQUdiLDJFQUFvQixDQUFDO0FBQUNDLEVBQUFBLFFBQUQ7QUFBV0MsRUFBQUEsU0FBU0EsaURBQUFBO0FBQXBCLENBQUQsQ0FBbkM7QUFDTyxNQUFNWSxnQkFBZ0IsR0FBR1gsbUVBQWUsQ0FBQ1UsTUFBRCxFQUFTUixXQUFULENBQXhDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzZ3FsYXBvbGxvLy4vc3JjL2dyYXBocWwvc2NoZW1hLnRzPzE0MzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWFrZUV4ZWN1dGFibGVTY2hlbWEgfSBmcm9tIFwiQGdyYXBocWwtdG9vbHMvc2NoZW1hXCI7XG5pbXBvcnQgdHlwZURlZnMgZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgcmVzb2x2ZXJzIGZyb20gJy4vcmVzb2x2ZXJzJztcbmltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSB9IGZyb20gXCJncmFwaHFsLW1pZGRsZXdhcmVcIjtcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tIFwiLi4vY2xpZW50cy9wcmlzbWFcIjtcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uRXJyb3IgfSBmcm9tIFwiYXBvbGxvLXNlcnZlci1lcnJvcnNcIjtcblxuY29uc3QgY2hlY2tVc2VySWQgPSBhc3luYyAocmVzb2x2ZSwgcm9vdCwgYXJncywgY29udGV4dDogQ29udGV4dCwgaW5mbykgPT4ge1xuICAgIGlmICghY29udGV4dC51aWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEF1dGhlbnRpY2F0aW9uRXJyb3IoXCJOb3QgYXV0aGVudGljYXRlZFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNvbHZlKHJvb3QsIGFyZ3MsIGNvbnRleHQsIGluZm8pXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG4gIH1cblxuY29uc3Qgc2NoZW1hID0gbWFrZUV4ZWN1dGFibGVTY2hlbWEoe3R5cGVEZWZzLCByZXNvbHZlcnN9KTtcbmV4cG9ydCBjb25zdCBleGVjdXRhYmxlU2NoZW1hID0gYXBwbHlNaWRkbGV3YXJlKHNjaGVtYSwgY2hlY2tVc2VySWQpIl0sIm5hbWVzIjpbIm1ha2VFeGVjdXRhYmxlU2NoZW1hIiwidHlwZURlZnMiLCJyZXNvbHZlcnMiLCJhcHBseU1pZGRsZXdhcmUiLCJBdXRoZW50aWNhdGlvbkVycm9yIiwiY2hlY2tVc2VySWQiLCJyZXNvbHZlIiwicm9vdCIsImFyZ3MiLCJjb250ZXh0IiwiaW5mbyIsInVpZCIsInJlc3VsdCIsInNjaGVtYSIsImV4ZWN1dGFibGVTY2hlbWEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/graphql/schema.ts\n");

/***/ }),

/***/ "./src/graphql/types.ts":
/*!******************************!*\
  !*** ./src/graphql/types.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-micro */ \"apollo-server-micro\");\n/* harmony import */ var apollo_server_micro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__);\n\nconst typeDefs = apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__.gql`\n    type Query {\n        hello: String\n    }\n    type Routine {\n        id: ID!\n        title: String!\n        startTime: Int!\n        endTime: Int!\n        habits: [Habit]!\n    }\n    type Habit {\n        id: ID!\n        title: String!\n        activeDays: [activeDay]!\n    }\n    enum activeDay {\n        Monday\n        Tuesday\n        Wednesday\n        Thursday\n        Friday\n        SaturDay\n        Sunday\n    }\n    input RoutineInput {\n        title: String!\n        startTime: Int!\n        endTime: Int!\n    }\n    type Mutation {\n        createRoutine(routineInput: RoutineInput): Routine\n    }\n`;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (typeDefs);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ3JhcGhxbC90eXBlcy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUVBLE1BQU1DLFFBQVEsR0FBR0Qsb0RBQUk7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBakNBO0FBbUNBLGlFQUFlQyxRQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzZ3FsYXBvbGxvLy4vc3JjL2dyYXBocWwvdHlwZXMudHM/YjkwZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBncWwgfSBmcm9tICdhcG9sbG8tc2VydmVyLW1pY3JvJztcblxuY29uc3QgdHlwZURlZnMgPSBncWxgXG4gICAgdHlwZSBRdWVyeSB7XG4gICAgICAgIGhlbGxvOiBTdHJpbmdcbiAgICB9XG4gICAgdHlwZSBSb3V0aW5lIHtcbiAgICAgICAgaWQ6IElEIVxuICAgICAgICB0aXRsZTogU3RyaW5nIVxuICAgICAgICBzdGFydFRpbWU6IEludCFcbiAgICAgICAgZW5kVGltZTogSW50IVxuICAgICAgICBoYWJpdHM6IFtIYWJpdF0hXG4gICAgfVxuICAgIHR5cGUgSGFiaXQge1xuICAgICAgICBpZDogSUQhXG4gICAgICAgIHRpdGxlOiBTdHJpbmchXG4gICAgICAgIGFjdGl2ZURheXM6IFthY3RpdmVEYXldIVxuICAgIH1cbiAgICBlbnVtIGFjdGl2ZURheSB7XG4gICAgICAgIE1vbmRheVxuICAgICAgICBUdWVzZGF5XG4gICAgICAgIFdlZG5lc2RheVxuICAgICAgICBUaHVyc2RheVxuICAgICAgICBGcmlkYXlcbiAgICAgICAgU2F0dXJEYXlcbiAgICAgICAgU3VuZGF5XG4gICAgfVxuICAgIGlucHV0IFJvdXRpbmVJbnB1dCB7XG4gICAgICAgIHRpdGxlOiBTdHJpbmchXG4gICAgICAgIHN0YXJ0VGltZTogSW50IVxuICAgICAgICBlbmRUaW1lOiBJbnQhXG4gICAgfVxuICAgIHR5cGUgTXV0YXRpb24ge1xuICAgICAgICBjcmVhdGVSb3V0aW5lKHJvdXRpbmVJbnB1dDogUm91dGluZUlucHV0KTogUm91dGluZVxuICAgIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IHR5cGVEZWZzOyJdLCJuYW1lcyI6WyJncWwiLCJ0eXBlRGVmcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/graphql/types.ts\n");

/***/ }),

/***/ "@graphql-tools/schema":
/*!****************************************!*\
  !*** external "@graphql-tools/schema" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@graphql-tools/schema");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "apollo-server-core":
/*!*************************************!*\
  !*** external "apollo-server-core" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("apollo-server-core");

/***/ }),

/***/ "apollo-server-errors":
/*!***************************************!*\
  !*** external "apollo-server-errors" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("apollo-server-errors");

/***/ }),

/***/ "apollo-server-micro":
/*!**************************************!*\
  !*** external "apollo-server-micro" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("apollo-server-micro");

/***/ }),

/***/ "graphql-middleware":
/*!*************************************!*\
  !*** external "graphql-middleware" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("graphql-middleware");

/***/ }),

/***/ "next-auth/client":
/*!***********************************!*\
  !*** external "next-auth/client" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("next-auth/client");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/graphql.ts"));
module.exports = __webpack_exports__;

})();