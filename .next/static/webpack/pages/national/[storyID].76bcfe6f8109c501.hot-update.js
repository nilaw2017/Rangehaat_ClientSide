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

/***/ "./components/Post.js":
/*!****************************!*\
  !*** ./components/Post.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Post; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ShareIt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShareIt */ \"./components/ShareIt.js\");\n/* harmony import */ var _SideBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SideBar */ \"./components/SideBar.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction Post(param) {\n    var query = param.query;\n    var _this = this;\n    console.log(query);\n    var formattedContent = function(params) {\n        if (params == undefined) {\n            return 0;\n        } else {\n            var someHTMLString = params;\n            // // console.log(\"PARAMS\", params);\n            // const myString = someHTMLString.replace(/<[^>]+>/g, \"\");\n            // const myString = someHTMLString.replace(/<iframe/g, \"${<iFrame\");\n            // return myString;\n            return someHTMLString;\n        }\n    };\n    var imageLoading = function() {\n        if (query.image == undefined) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"LOADING\"\n            }, void 0, false, {\n                fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/Post.js\",\n                lineNumber: 23,\n                columnNumber: 14\n            }, _this);\n        } else {\n            return \"\".concat(query.image);\n        }\n    };\n    console.log(query);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Hello\"\n                    }, void 0, false, {\n                        fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/Post.js\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:url\",\n                        content: \"http://www.nytimes.com/2015/02/19/arts/international/when-great-minds-dont-think-alike.html\"\n                    }, void 0, false, {\n                        fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/Post.js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:type\",\n                        content: \"article\"\n                    }, void 0, false, {\n                        fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/Post.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:title\",\n                        content: \"When Great Minds Don’t Think Alike\"\n                    }, void 0, false, {\n                        fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/Post.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:description\",\n                        content: \"How much does culture influence creative thinking?\"\n                    }, void 0, false, {\n                        fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/Post.js\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:image\",\n                        content: \"http://static01.nyt.com/images/2015/02/19/arts/international/19iht-btnumbers19A/19iht-btnumbers19A-facebookJumbo-v2.jpg\"\n                    }, void 0, false, {\n                        fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/Post.js\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/Post.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"row mt-5\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"col-lg-8 col-12\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: \"fw-bolder\",\n                                        children: query.title\n                                    }, void 0, false, {\n                                        fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/Post.js\",\n                                        lineNumber: 55,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"d-flex mb-2\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"me-2 text-secondary\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                                        className: \"fa-solid fa-user me-1\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/Post.js\",\n                                                        lineNumber: 58,\n                                                        columnNumber: 17\n                                                    }, this),\n                                                    query.author\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/Post.js\",\n                                                lineNumber: 57,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"text-secondary\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                                        className: \"fa-solid fa-calendar-days me-1\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/Post.js\",\n                                                        lineNumber: 62,\n                                                        columnNumber: 17\n                                                    }, this),\n                                                    query.created_at\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/Post.js\",\n                                                lineNumber: 61,\n                                                columnNumber: 15\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/Post.js\",\n                                        lineNumber: 56,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"position-absolute z-1\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"me-1 category\",\n                                            children: query.category\n                                        }, void 0, false, {\n                                            fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/Post.js\",\n                                            lineNumber: 67,\n                                            columnNumber: 16\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/Post.js\",\n                                        lineNumber: 66,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"position-relative headImageContainer bg-dark\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                            src: imageLoading(),\n                                            layout: \"fill\",\n                                            objectFit: \"contain\",\n                                            alt: \"PostImage\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/Post.js\",\n                                            lineNumber: 70,\n                                            columnNumber: 15\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/Post.js\",\n                                        lineNumber: 69,\n                                        columnNumber: 13\n                                    }, this),\n                                    console.log(query.image),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"new-line mt-5 fs-5\",\n                                        children: formattedContent(query.content)\n                                    }, void 0, false, {\n                                        fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/Post.js\",\n                                        lineNumber: 78,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/Post.js\",\n                                lineNumber: 54,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"col-lg-4 col-12 p-2 border\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SideBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/Post.js\",\n                                    lineNumber: 83,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/Post.js\",\n                                lineNumber: 82,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/Post.js\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                        src: \"https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&layout=button_count&size=small&appId=554848223043305&width=96&height=20\",\n                        width: \"96\",\n                        height: \"20\",\n                        scrolling: \"no\",\n                        frameBorder: \"0\",\n                        allowFullScreen: true,\n                        allow: \"autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share\"\n                    }, void 0, false, {\n                        fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/Post.js\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/Post.js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n};\n_c = Post;\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Bvc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFBZ0M7QUFDQTtBQUNEO0FBQ0Y7QUFFZCxTQUFTSSxJQUFJLENBQUMsS0FBUyxFQUFFO1FBQVgsS0FBTyxHQUFQLEtBQVMsQ0FBUEMsS0FBSzs7SUFDbENDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixLQUFLLENBQUMsQ0FBQztJQUNuQixJQUFNRyxnQkFBZ0IsR0FBRyxTQUFDQyxNQUFNLEVBQUs7UUFDbkMsSUFBSUEsTUFBTSxJQUFJQyxTQUFTLEVBQUU7WUFDdkIsT0FBTyxDQUFDLENBQUM7U0FDVixNQUFNO1lBQ0wsSUFBTUMsY0FBYyxHQUFHRixNQUFNO1lBQzdCLG9DQUFvQztZQUNwQywyREFBMkQ7WUFDM0Qsb0VBQW9FO1lBQ3BFLG1CQUFtQjtZQUNuQixPQUFPRSxjQUFjLENBQUM7U0FDdkI7S0FDRjtJQUVELElBQU1DLFlBQVksR0FBRyxXQUFNO1FBQ3pCLElBQUlQLEtBQUssQ0FBQ1EsS0FBSyxJQUFJSCxTQUFTLEVBQUU7WUFDNUIscUJBQU8sOERBQUNJLElBQUU7MEJBQUMsU0FBTzs7Ozs7cUJBQUssQ0FBQztTQUN6QixNQUFNO1lBQ0wsT0FBTyxFQUFDLENBQWMsT0FBWlQsS0FBSyxDQUFDUSxLQUFLLENBQUUsQ0FBQztTQUN6QjtLQUNGO0lBQ0RQLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixLQUFLLENBQUMsQ0FBQztJQUNuQixxQkFDRTs7MEJBQ0UsOERBQUNGLGtEQUFJOztrQ0FDSCw4REFBQ1ksT0FBSztrQ0FBQyxPQUFLOzs7Ozs0QkFBUTtrQ0FFcEIsOERBQUNDLE1BQUk7d0JBQ0hDLFFBQVEsRUFBQyxRQUFRO3dCQUNqQkMsT0FBTyxFQUFDLDZGQUE2Rjs7Ozs7NEJBQ3JHO2tDQUNGLDhEQUFDRixNQUFJO3dCQUFDQyxRQUFRLEVBQUMsU0FBUzt3QkFBQ0MsT0FBTyxFQUFDLFNBQVM7Ozs7OzRCQUFHO2tDQUM3Qyw4REFBQ0YsTUFBSTt3QkFDSEMsUUFBUSxFQUFDLFVBQVU7d0JBQ25CQyxPQUFPLEVBQUMsb0NBQW9DOzs7Ozs0QkFDNUM7a0NBQ0YsOERBQUNGLE1BQUk7d0JBQ0hDLFFBQVEsRUFBQyxnQkFBZ0I7d0JBQ3pCQyxPQUFPLEVBQUMsb0RBQW9EOzs7Ozs0QkFDNUQ7a0NBQ0YsOERBQUNGLE1BQUk7d0JBQ0hDLFFBQVEsRUFBQyxVQUFVO3dCQUNuQkMsT0FBTyxFQUFDLHlIQUF5SDs7Ozs7NEJBQ2pJOzs7Ozs7b0JBQ0c7MEJBQ1AsOERBQUNDLFNBQU87O2tDQUNOLDhEQUFDQyxLQUFHO3dCQUFDQyxTQUFTLEVBQUMsVUFBVTs7MENBQ3ZCLDhEQUFDRCxLQUFHO2dDQUFDQyxTQUFTLEVBQUMsaUJBQWlCOztrREFDOUIsOERBQUNQLElBQUU7d0NBQUNPLFNBQVMsRUFBQyxXQUFXO2tEQUFFaEIsS0FBSyxDQUFDVSxLQUFLOzs7Ozs0Q0FBTTtrREFDNUMsOERBQUNLLEtBQUc7d0NBQUNDLFNBQVMsRUFBQyxhQUFhOzswREFDMUIsOERBQUNDLE1BQUk7Z0RBQUNELFNBQVMsRUFBQyxxQkFBcUI7O2tFQUNuQyw4REFBQ0UsR0FBQzt3REFBQ0YsU0FBUyxFQUFDLHVCQUF1Qjs7Ozs7NERBQUs7b0RBQ3hDaEIsS0FBSyxDQUFDbUIsTUFBTTs7Ozs7O29EQUNSOzBEQUNQLDhEQUFDRixNQUFJO2dEQUFDRCxTQUFTLEVBQUMsZ0JBQWdCOztrRUFDOUIsOERBQUNFLEdBQUM7d0RBQUNGLFNBQVMsRUFBQyxnQ0FBZ0M7Ozs7OzREQUFLO29EQUNqRGhCLEtBQUssQ0FBQ29CLFVBQVU7Ozs7OztvREFDWjs7Ozs7OzRDQUNIO2tEQUNOLDhEQUFDSCxNQUFJO3dDQUFDRCxTQUFTLEVBQUMsdUJBQXVCO2tEQUNwQyw0RUFBQ0MsTUFBSTs0Q0FBQ0QsU0FBUyxFQUFDLGVBQWU7c0RBQUVoQixLQUFLLENBQUNxQixRQUFROzs7OztnREFBUTs7Ozs7NENBQ25EO2tEQUNQLDhEQUFDTixLQUFHO3dDQUFDQyxTQUFTLEVBQUMsOENBQThDO2tEQUMzRCw0RUFBQ25CLG1EQUFLOzRDQUNKeUIsR0FBRyxFQUFFZixZQUFZLEVBQUU7NENBQ25CZ0IsTUFBTSxFQUFDLE1BQU07NENBQ2JDLFNBQVMsRUFBQyxTQUFTOzRDQUNuQkMsR0FBRyxFQUFDLFdBQVc7Ozs7O2dEQUNmOzs7Ozs0Q0FDRTtvQ0FDTHhCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixLQUFLLENBQUNRLEtBQUssQ0FBQztrREFDekIsOERBQUNrQixHQUFDO3dDQUFDVixTQUFTLEVBQUMsb0JBQW9CO2tEQUM5QmIsZ0JBQWdCLENBQUNILEtBQUssQ0FBQ2EsT0FBTyxDQUFDOzs7Ozs0Q0FDOUI7Ozs7OztvQ0FDQTswQ0FDTiw4REFBQ0UsS0FBRztnQ0FBQ0MsU0FBUyxFQUFDLDRCQUE0QjswQ0FDekMsNEVBQUNwQixnREFBTzs7Ozt3Q0FBRzs7Ozs7b0NBQ1A7Ozs7Ozs0QkFDRjtrQ0FDTiw4REFBQytCLFFBQU07d0JBQ0xMLEdBQUcsRUFBQywwTEFBMEw7d0JBQzlMTSxLQUFLLEVBQUMsSUFBSTt3QkFDVkMsTUFBTSxFQUFDLElBQUk7d0JBQ1hDLFNBQVMsRUFBQyxJQUFJO3dCQUNkQyxXQUFXLEVBQUMsR0FBRzt3QkFDZkMsZUFBZSxFQUFFLElBQUk7d0JBQ3JCQyxLQUFLLEVBQUMsMkVBQTJFOzs7Ozs0QkFDekU7Ozs7OztvQkFDRjs7b0JBQ1QsQ0FDSDtDQUNIO0FBNUZ1QmxDLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0LmpzPzM0NTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNoYXJlSXQgZnJvbSBcIi4vU2hhcmVJdFwiO1xuaW1wb3J0IFNpZGVCYXIgZnJvbSBcIi4vU2lkZUJhclwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3QoeyBxdWVyeSB9KSB7XG4gIGNvbnNvbGUubG9nKHF1ZXJ5KTtcbiAgY29uc3QgZm9ybWF0dGVkQ29udGVudCA9IChwYXJhbXMpID0+IHtcbiAgICBpZiAocGFyYW1zID09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHNvbWVIVE1MU3RyaW5nID0gcGFyYW1zO1xuICAgICAgLy8gLy8gY29uc29sZS5sb2coXCJQQVJBTVNcIiwgcGFyYW1zKTtcbiAgICAgIC8vIGNvbnN0IG15U3RyaW5nID0gc29tZUhUTUxTdHJpbmcucmVwbGFjZSgvPFtePl0rPi9nLCBcIlwiKTtcbiAgICAgIC8vIGNvbnN0IG15U3RyaW5nID0gc29tZUhUTUxTdHJpbmcucmVwbGFjZSgvPGlmcmFtZS9nLCBcIiR7PGlGcmFtZVwiKTtcbiAgICAgIC8vIHJldHVybiBteVN0cmluZztcbiAgICAgIHJldHVybiBzb21lSFRNTFN0cmluZztcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaW1hZ2VMb2FkaW5nID0gKCkgPT4ge1xuICAgIGlmIChxdWVyeS5pbWFnZSA9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiA8aDE+TE9BRElORzwvaDE+O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYCR7cXVlcnkuaW1hZ2V9YDtcbiAgICB9XG4gIH07XG4gIGNvbnNvbGUubG9nKHF1ZXJ5KTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5IZWxsbzwvdGl0bGU+XG4gICAgICAgIHsvKiBGQUNFQk9PSyBNRVRBIFNIQVJFICovfVxuICAgICAgICA8bWV0YVxuICAgICAgICAgIHByb3BlcnR5PVwib2c6dXJsXCJcbiAgICAgICAgICBjb250ZW50PVwiaHR0cDovL3d3dy5ueXRpbWVzLmNvbS8yMDE1LzAyLzE5L2FydHMvaW50ZXJuYXRpb25hbC93aGVuLWdyZWF0LW1pbmRzLWRvbnQtdGhpbmstYWxpa2UuaHRtbFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9XCJhcnRpY2xlXCIgLz5cbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBwcm9wZXJ0eT1cIm9nOnRpdGxlXCJcbiAgICAgICAgICBjb250ZW50PVwiV2hlbiBHcmVhdCBNaW5kcyBEb27igJl0IFRoaW5rIEFsaWtlXCJcbiAgICAgICAgLz5cbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCJcbiAgICAgICAgICBjb250ZW50PVwiSG93IG11Y2ggZG9lcyBjdWx0dXJlIGluZmx1ZW5jZSBjcmVhdGl2ZSB0aGlua2luZz9cIlxuICAgICAgICAvPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIHByb3BlcnR5PVwib2c6aW1hZ2VcIlxuICAgICAgICAgIGNvbnRlbnQ9XCJodHRwOi8vc3RhdGljMDEubnl0LmNvbS9pbWFnZXMvMjAxNS8wMi8xOS9hcnRzL2ludGVybmF0aW9uYWwvMTlpaHQtYnRudW1iZXJzMTlBLzE5aWh0LWJ0bnVtYmVyczE5QS1mYWNlYm9va0p1bWJvLXYyLmpwZ1wiXG4gICAgICAgIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8c2VjdGlvbj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbXQtNVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTggY29sLTEyXCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZnctYm9sZGVyXCI+e3F1ZXJ5LnRpdGxlfTwvaDE+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBtYi0yXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1lLTIgdGV4dC1zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYS1zb2xpZCBmYS11c2VyIG1lLTFcIj48L2k+XG4gICAgICAgICAgICAgICAge3F1ZXJ5LmF1dGhvcn1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhLXNvbGlkIGZhLWNhbGVuZGFyLWRheXMgbWUtMVwiPjwvaT5cbiAgICAgICAgICAgICAgICB7cXVlcnkuY3JlYXRlZF9hdH1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwb3NpdGlvbi1hYnNvbHV0ZSB6LTFcIj5cbiAgICAgICAgICAgICAgezxzcGFuIGNsYXNzTmFtZT1cIm1lLTEgY2F0ZWdvcnlcIj57cXVlcnkuY2F0ZWdvcnl9PC9zcGFuPn1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zaXRpb24tcmVsYXRpdmUgaGVhZEltYWdlQ29udGFpbmVyIGJnLWRhcmtcIj5cbiAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgc3JjPXtpbWFnZUxvYWRpbmcoKX1cbiAgICAgICAgICAgICAgICBsYXlvdXQ9XCJmaWxsXCJcbiAgICAgICAgICAgICAgICBvYmplY3RGaXQ9XCJjb250YWluXCJcbiAgICAgICAgICAgICAgICBhbHQ9XCJQb3N0SW1hZ2VcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7Y29uc29sZS5sb2cocXVlcnkuaW1hZ2UpfVxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibmV3LWxpbmUgbXQtNSBmcy01XCI+XG4gICAgICAgICAgICAgIHtmb3JtYXR0ZWRDb250ZW50KHF1ZXJ5LmNvbnRlbnQpfVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTQgY29sLTEyIHAtMiBib3JkZXJcIj5cbiAgICAgICAgICAgIDxTaWRlQmFyIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aWZyYW1lXG4gICAgICAgICAgc3JjPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3BsdWdpbnMvc2hhcmVfYnV0dG9uLnBocD9ocmVmPWh0dHBzJTNBJTJGJTJGZGV2ZWxvcGVycy5mYWNlYm9vay5jb20lMkZkb2NzJTJGcGx1Z2lucyUyRiZsYXlvdXQ9YnV0dG9uX2NvdW50JnNpemU9c21hbGwmYXBwSWQ9NTU0ODQ4MjIzMDQzMzA1JndpZHRoPTk2JmhlaWdodD0yMFwiXG4gICAgICAgICAgd2lkdGg9XCI5NlwiXG4gICAgICAgICAgaGVpZ2h0PVwiMjBcIlxuICAgICAgICAgIHNjcm9sbGluZz1cIm5vXCJcbiAgICAgICAgICBmcmFtZUJvcmRlcj1cIjBcIlxuICAgICAgICAgIGFsbG93RnVsbFNjcmVlbj17dHJ1ZX1cbiAgICAgICAgICBhbGxvdz1cImF1dG9wbGF5OyBjbGlwYm9hcmQtd3JpdGU7IGVuY3J5cHRlZC1tZWRpYTsgcGljdHVyZS1pbi1waWN0dXJlOyB3ZWItc2hhcmVcIlxuICAgICAgICA+PC9pZnJhbWU+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiU2hhcmVJdCIsIlNpZGVCYXIiLCJJbWFnZSIsIkhlYWQiLCJQb3N0IiwicXVlcnkiLCJjb25zb2xlIiwibG9nIiwiZm9ybWF0dGVkQ29udGVudCIsInBhcmFtcyIsInVuZGVmaW5lZCIsInNvbWVIVE1MU3RyaW5nIiwiaW1hZ2VMb2FkaW5nIiwiaW1hZ2UiLCJoMSIsInRpdGxlIiwibWV0YSIsInByb3BlcnR5IiwiY29udGVudCIsInNlY3Rpb24iLCJkaXYiLCJjbGFzc05hbWUiLCJzcGFuIiwiaSIsImF1dGhvciIsImNyZWF0ZWRfYXQiLCJjYXRlZ29yeSIsInNyYyIsImxheW91dCIsIm9iamVjdEZpdCIsImFsdCIsInAiLCJpZnJhbWUiLCJ3aWR0aCIsImhlaWdodCIsInNjcm9sbGluZyIsImZyYW1lQm9yZGVyIiwiYWxsb3dGdWxsU2NyZWVuIiwiYWxsb3ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Post.js\n"));

/***/ })

});