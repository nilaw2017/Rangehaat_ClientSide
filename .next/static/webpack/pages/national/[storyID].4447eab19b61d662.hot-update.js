"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/national/[storyID]",{

/***/ "./pages/national/[storyID].js":
/*!*************************************!*\
  !*** ./pages/national/[storyID].js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var _home_nilaw_Desktop_newRangehaat_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_nilaw_Desktop_newRangehaat_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_nilaw_Desktop_newRangehaat_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_cjs_react_production_min__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/cjs/react.production.min */ \"./node_modules/react/cjs/react.production.min.js\");\n/* harmony import */ var _components_Post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Post */ \"./components/Post.js\");\n\n\n\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar storyID = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var query = router.query;\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,react_cjs_react_production_min__WEBPACK_IMPORTED_MODULE_4__.useState)([]), 2), metaData = ref[0], setMetaData = ref[1];\n    (0,react_cjs_react_production_min__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        if (!router.isReady) {\n            return;\n        } else {\n            console.log(\"Ready\");\n            var fetchData = function() {\n                var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_home_nilaw_Desktop_newRangehaat_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                    return _home_nilaw_Desktop_newRangehaat_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                        while(1)switch(_ctx.prev = _ctx.next){\n                            case 0:\n                                _ctx.next = 2;\n                                return fetch(\"https://rangehaatserver.herokuapp.com/\" + \"articles/\" + router.query.storyID).then(function(res) {\n                                    return res.json();\n                                }).then(function(data) {\n                                    setMetaData(data);\n                                    setLoading(false);\n                                }).catch(function(error) {\n                                    return console.log(\"ERROR\", error);\n                                });\n                            case 2:\n                            case \"end\":\n                                return _ctx.stop();\n                        }\n                    }, _callee);\n                }));\n                return function fetchData() {\n                    return _ref.apply(this, arguments);\n                };\n            }();\n            fetchData();\n        }\n    }, [\n        router.isReady\n    ]);\n    console.log(\"QUERY=>\", router);\n    console.log(\"META DATA=>\", metaData);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Post__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                query: query\n            }, void 0, false, {\n                fileName: \"/home/nilaw/Desktop/newRangehaat/client/pages/national/[storyID].js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, _this),\n            \";\"\n        ]\n    }, void 0, true);\n};\n_s(storyID, \"SntYbLQ+zUbollK4f/RQgAJUZRo=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (storyID);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9uYXRpb25hbC9bc3RvcnlJRF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOzs7OztBQUE2QjtBQUNXO0FBQzZCO0FBQzVCOztBQUV6QyxJQUFNSyxPQUFPLEdBQUcsV0FBTTs7SUFDcEIsSUFBTUMsTUFBTSxHQUFHTCxzREFBUyxFQUFFO0lBQzFCLElBQU1NLEtBQUssR0FBR0QsTUFBTSxDQUFDQyxLQUFLO0lBQzFCLElBQWdDSixHQUFZLG9GQUFaQSx3RUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFyQ0ssUUFBUSxHQUFpQkwsR0FBWSxHQUE3QixFQUFFTSxXQUFXLEdBQUlOLEdBQVksR0FBaEI7SUFDNUJELHlFQUFTLENBQUMsV0FBTTtRQUNkLElBQUksQ0FBQ0ksTUFBTSxDQUFDSSxPQUFPLEVBQUU7WUFDbkIsT0FBTztTQUNSLE1BQU07WUFDTEMsT0FBTyxDQUFDQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDckIsSUFBTUMsU0FBUzsyQkFBRywwUEFBWTs7Ozs7dUNBQ3RCQyxLQUFLLENBQ1RDLHdDQUEyQixHQUFHLFdBQVcsR0FBR1QsTUFBTSxDQUFDQyxLQUFLLENBQUNGLE9BQU8sQ0FDakUsQ0FDRWEsSUFBSSxDQUFDLFNBQUNDLEdBQUc7MkNBQUtBLEdBQUcsQ0FBQ0MsSUFBSSxFQUFFO2lDQUFBLENBQUMsQ0FDekJGLElBQUksQ0FBQyxTQUFDRyxJQUFJLEVBQUs7b0NBQ2RaLFdBQVcsQ0FBQ1ksSUFBSSxDQUFDLENBQUM7b0NBQ2xCQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7aUNBQ25CLENBQUMsQ0FDREMsS0FBSyxDQUFDLFNBQUNDLEtBQUs7MkNBQUtiLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLE9BQU8sRUFBRVksS0FBSyxDQUFDO2lDQUFBLENBQUM7Ozs7OztpQkFDakQ7Z0NBVktYLFNBQVM7OztlQVVkO1lBQ0RBLFNBQVMsRUFBRSxDQUFDO1NBQ2I7S0FDRixFQUFFO1FBQUNQLE1BQU0sQ0FBQ0ksT0FBTztLQUFDLENBQUMsQ0FBQztJQUNyQkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsU0FBUyxFQUFFTixNQUFNLENBQUMsQ0FBQztJQUMvQkssT0FBTyxDQUFDQyxHQUFHLENBQUMsYUFBYSxFQUFFSixRQUFRLENBQUMsQ0FBQztJQUNyQyxxQkFDRTs7MEJBSUUsOERBQUNKLHdEQUFJO2dCQUFDRyxLQUFLLEVBQUVBLEtBQUs7Ozs7O3FCQUFJO1lBQUEsR0FDeEI7O29CQUFHLENBQ0g7Q0FDSDtHQWpDS0YsT0FBTzs7UUFDSUosa0RBQVM7OztBQWtDMUIsK0RBQWVJLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9uYXRpb25hbC9bc3RvcnlJRF0uanM/ZThkZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3QvY2pzL3JlYWN0LnByb2R1Y3Rpb24ubWluXCI7XG5pbXBvcnQgUG9zdCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Qb3N0XCI7XG5cbmNvbnN0IHN0b3J5SUQgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBxdWVyeSA9IHJvdXRlci5xdWVyeTtcbiAgY29uc3QgW21ldGFEYXRhLCBzZXRNZXRhRGF0YV0gPSB1c2VTdGF0ZShbXSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFyb3V0ZXIuaXNSZWFkeSkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhcIlJlYWR5XCIpO1xuICAgICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBhd2FpdCBmZXRjaChcbiAgICAgICAgICBwcm9jZXNzLmVudi5IRVJPS1VfSE9TVF9VUkwgKyBcImFydGljbGVzL1wiICsgcm91dGVyLnF1ZXJ5LnN0b3J5SURcbiAgICAgICAgKVxuICAgICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgIHNldE1ldGFEYXRhKGRhdGEpO1xuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmxvZyhcIkVSUk9SXCIsIGVycm9yKSk7XG4gICAgICB9O1xuICAgICAgZmV0Y2hEYXRhKCk7XG4gICAgfVxuICB9LCBbcm91dGVyLmlzUmVhZHldKTtcbiAgY29uc29sZS5sb2coXCJRVUVSWT0+XCIsIHJvdXRlcik7XG4gIGNvbnNvbGUubG9nKFwiTUVUQSBEQVRBPT5cIiwgbWV0YURhdGEpO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7LyogPEhlYWQ+XG4gICAgPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PXt9Lz5cbiAgPC9IZWFkPiAqL31cbiAgICAgIDxQb3N0IHF1ZXJ5PXtxdWVyeX0gLz47XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzdG9yeUlEO1xuIl0sIm5hbWVzIjpbIkhlYWQiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlBvc3QiLCJzdG9yeUlEIiwicm91dGVyIiwicXVlcnkiLCJtZXRhRGF0YSIsInNldE1ldGFEYXRhIiwiaXNSZWFkeSIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaERhdGEiLCJmZXRjaCIsInByb2Nlc3MiLCJlbnYiLCJIRVJPS1VfSE9TVF9VUkwiLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJzZXRMb2FkaW5nIiwiY2F0Y2giLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/national/[storyID].js\n"));

/***/ })

});