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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Post; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _home_nilaw_Desktop_newRangehaat_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_nilaw_Desktop_newRangehaat_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_nilaw_Desktop_newRangehaat_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ShareIt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShareIt */ \"./components/ShareIt.js\");\n/* harmony import */ var _SideBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SideBar */ \"./components/SideBar.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Post(param1) {\n    var query = param1.query;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    console.log(router);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)([]), news = ref[0], setNews = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(true), isLoading = ref1[0], setLoading = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(function() {\n        if (!router.isReady) {\n            return console.log(\"Not Ready\");\n        } else {\n            console.log(\"Ready\");\n            var fetchData = function() {\n                var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(_home_nilaw_Desktop_newRangehaat_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                    return _home_nilaw_Desktop_newRangehaat_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                        while(1)switch(_ctx.prev = _ctx.next){\n                            case 0:\n                                _ctx.next = 2;\n                                return fetch(\"https://rangehaatserver.herokuapp.com/\" + \"articles/\" + router.query.storyID).then(function(res) {\n                                    return res.json();\n                                }).then(function(data) {\n                                    setNews(data);\n                                    setLoading(false);\n                                    console.log(\"param\", param);\n                                }).catch(function(error) {\n                                    return console.log(\"ERROR\", error);\n                                });\n                            case 2:\n                            case \"end\":\n                                return _ctx.stop();\n                        }\n                    }, _callee);\n                }));\n                return function fetchData() {\n                    return _ref.apply(this, arguments);\n                };\n            }();\n            fetchData();\n        }\n    }, [\n        router.isReady\n    ]);\n    console.log(\"StoryID\", query.storyID);\n    if (isLoading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                children: \"Loading.....\"\n            }, void 0, false, {\n                fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/Post.js\",\n                lineNumber: 38,\n                columnNumber: 9\n            }, this)\n        }, void 0, false);\n    }\n    console.log(news.author);\n    var formattedContent = function(params) {\n        if (params == undefined) {\n            return 0;\n        } else {\n            var someHTMLString = params;\n            // // console.log(\"PARAMS\", params);\n            // const myString = someHTMLString.replace(/<[^>]+>/g, \"\");\n            // const myString = someHTMLString.replace(/<iframe/g, \"${<iFrame\");\n            // return myString;\n            return someHTMLString;\n        }\n    };\n    // const imageLoading = () => {\n    //   if (news.image.url == undefined) {\n    //     return <h1>LOADING</h1>;\n    //   } else {\n    //     return `${news.image.url}`;\n    //   }\n    // };\n    var convertedDate = function(params) {\n        var dateAndTime = params;\n        var splittedDateAndTime = dateAndTime.split(\"\");\n        var slicedDate = splittedDateAndTime.slice(0, 10);\n        var joinedDate = slicedDate.join(\"\");\n        return joinedDate;\n    };\n    // console.log(\"news >>\", news.author.name);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                            children: \"Rangehaat: \".concat(news.title)\n                        }, void 0, false, {\n                            fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/Post.js\",\n                            lineNumber: 80,\n                            columnNumber: 11\n                        }, this),\n                        \"FACEBOOK META SHARE\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"meta\", {\n                            property: \"og:type\",\n                            content: \"article\"\n                        }, void 0, false, {\n                            fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/Post.js\",\n                            lineNumber: 86,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"meta\", {\n                            property: \"og:title\",\n                            content: \"\"\n                        }, void 0, false, {\n                            fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/Post.js\",\n                            lineNumber: 87,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"meta\", {\n                            property: \"og:description\",\n                            content: \"\"\n                        }, void 0, false, {\n                            fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/Post.js\",\n                            lineNumber: 88,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/Post.js\",\n                    lineNumber: 79,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"section\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"row mt-5\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: \"col-lg-8 col-12\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                                            className: \"fw-bolder\",\n                                            children: news.title\n                                        }, void 0, false, {\n                                            fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/Post.js\",\n                                            lineNumber: 94,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                            className: \"d-flex mb-2\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                                    className: \"me-2 text-secondary\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"i\", {\n                                                            className: \"fa-solid fa-user me-1\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/Post.js\",\n                                                            lineNumber: 97,\n                                                            columnNumber: 19\n                                                        }, this),\n                                                        news.author.name\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/Post.js\",\n                                                    lineNumber: 96,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                                    className: \"text-secondary\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"i\", {\n                                                            className: \"fa-solid fa-calendar-days me-1\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/Post.js\",\n                                                            lineNumber: 102,\n                                                            columnNumber: 19\n                                                        }, this),\n                                                        convertedDate(news.created_at)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/Post.js\",\n                                                    lineNumber: 101,\n                                                    columnNumber: 17\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/Post.js\",\n                                            lineNumber: 95,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                            className: \"position-absolute z-1\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                                className: \"me-1 category\",\n                                                children: \"category\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/Post.js\",\n                                                lineNumber: 107,\n                                                columnNumber: 18\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/Post.js\",\n                                            lineNumber: 106,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                            className: \"position-relative headImageContainer bg-dark\",\n                                            children: \"IMAGE\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/Post.js\",\n                                            lineNumber: 109,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                            className: \"new-line mt-5 fs-5\",\n                                            children: \"content\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/Post.js\",\n                                            lineNumber: 112,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/Post.js\",\n                                    lineNumber: 93,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: \"col-lg-4 col-12 p-2 border\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_SideBar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                        fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/Post.js\",\n                                        lineNumber: 115,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/Post.js\",\n                                    lineNumber: 114,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/Post.js\",\n                            lineNumber: 92,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"iframe\", {\n                            src: \"https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&layout=button_count&size=small&appId=554848223043305&width=96&height=20\",\n                            width: \"96\",\n                            height: \"20\",\n                            scrolling: \"no\",\n                            frameBorder: \"0\",\n                            allowFullScreen: true,\n                            allow: \"autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share\"\n                        }, void 0, false, {\n                            fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/Post.js\",\n                            lineNumber: 118,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/Post.js\",\n                    lineNumber: 91,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/Post.js\",\n            lineNumber: 78,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n};\n_s(Post, \"Ou8cu8j4e4TgwgNpZG+4Edb9hFA=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter\n    ];\n});\n_c = Post;\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJO29EQUFDRixTQUFTLEVBQUMsZ0JBQWdCOztzRUFDOUIsOERBQUNHLEdBQUM7NERBQUNILFNBQVMsRUFBQyxnQ0FBZ0M7Ozs7O2dFQUFLO3dEQUNqRGQsYUFBYSxDQUFDeEIsSUFBSSxDQUFDMkMsVUFBVSxDQUFDOzs7Ozs7d0RBQzFCOzs7Ozs7Z0RBQ0g7c0RBQ04sOERBQUNILE1BQUk7NENBQUNGLFNBQVMsRUFBQyx1QkFBdUI7c0RBQ3BDLDRFQUFDRSxNQUFJO2dEQUFDRixTQUFTLEVBQUMsZUFBZTswREFBQyxVQUFROzs7OztvREFBTzs7Ozs7Z0RBQzNDO3NEQUNQLDhEQUFDTixLQUFHOzRDQUFDTSxTQUFTLEVBQUMsOENBQThDO3NEQUFDLE9BRTlEOzs7OztnREFBTTtzREFDTiw4REFBQ3BCLEdBQUM7NENBQUNvQixTQUFTLEVBQUMsb0JBQW9CO3NEQUFDLFNBQU87Ozs7O2dEQUFJOzs7Ozs7d0NBQ3pDOzhDQUNOLDhEQUFDTixLQUFHO29DQUFDTSxTQUFTLEVBQUMsNEJBQTRCOzhDQUN6Qyw0RUFBQ2pELGdEQUFPOzs7OzRDQUFHOzs7Ozt3Q0FDUDs7Ozs7O2dDQUNGO3NDQUNOLDhEQUFDdUQsUUFBTTs0QkFDTEMsR0FBRyxFQUFDLDBMQUEwTDs0QkFDOUxDLEtBQUssRUFBQyxJQUFJOzRCQUNWQyxNQUFNLEVBQUMsSUFBSTs0QkFDWEMsU0FBUyxFQUFDLElBQUk7NEJBQ2RDLFdBQVcsRUFBQyxHQUFHOzRCQUNmQyxlQUFlLEVBQUUsSUFBSTs0QkFDckJDLEtBQUssRUFBQywyRUFBMkU7Ozs7O2dDQUN6RTs7Ozs7O3dCQUNGOzs7Ozs7Z0JBT047cUJBQ0wsQ0FDSDtDQUNIO0dBakl1QnhELElBQUk7O1FBQ1hILGtEQUFTOzs7QUFERkcsS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Bvc3QuanM/MzQ1NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2hhcmVJdCBmcm9tIFwiLi9TaGFyZUl0XCI7XG5pbXBvcnQgU2lkZUJhciBmcm9tIFwiLi9TaWRlQmFyXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0KHsgcXVlcnkgfSkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc29sZS5sb2cocm91dGVyKTtcbiAgY29uc3QgW25ld3MsIHNldE5ld3NdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFyb3V0ZXIuaXNSZWFkeSkge1xuICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKFwiTm90IFJlYWR5XCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhcIlJlYWR5XCIpO1xuICAgICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBhd2FpdCBmZXRjaChcbiAgICAgICAgICBwcm9jZXNzLmVudi5IRVJPS1VfSE9TVF9VUkwgKyBcImFydGljbGVzL1wiICsgcm91dGVyLnF1ZXJ5LnN0b3J5SURcbiAgICAgICAgKVxuICAgICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgIHNldE5ld3MoZGF0YSk7XG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicGFyYW1cIiwgcGFyYW0pO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5sb2coXCJFUlJPUlwiLCBlcnJvcikpO1xuICAgICAgfTtcbiAgICAgIGZldGNoRGF0YSgpO1xuICAgIH1cbiAgfSwgW3JvdXRlci5pc1JlYWR5XSk7XG4gIGNvbnNvbGUubG9nKFwiU3RvcnlJRFwiLCBxdWVyeS5zdG9yeUlEKTtcbiAgaWYgKGlzTG9hZGluZykge1xuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8cD5Mb2FkaW5nLi4uLi48L3A+XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG4gIGNvbnNvbGUubG9nKG5ld3MuYXV0aG9yKTtcblxuICBjb25zdCBmb3JtYXR0ZWRDb250ZW50ID0gKHBhcmFtcykgPT4ge1xuICAgIGlmIChwYXJhbXMgPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc29tZUhUTUxTdHJpbmcgPSBwYXJhbXM7XG4gICAgICAvLyAvLyBjb25zb2xlLmxvZyhcIlBBUkFNU1wiLCBwYXJhbXMpO1xuICAgICAgLy8gY29uc3QgbXlTdHJpbmcgPSBzb21lSFRNTFN0cmluZy5yZXBsYWNlKC88W14+XSs+L2csIFwiXCIpO1xuICAgICAgLy8gY29uc3QgbXlTdHJpbmcgPSBzb21lSFRNTFN0cmluZy5yZXBsYWNlKC88aWZyYW1lL2csIFwiJHs8aUZyYW1lXCIpO1xuICAgICAgLy8gcmV0dXJuIG15U3RyaW5nO1xuICAgICAgcmV0dXJuIHNvbWVIVE1MU3RyaW5nO1xuICAgIH1cbiAgfTtcblxuICAvLyBjb25zdCBpbWFnZUxvYWRpbmcgPSAoKSA9PiB7XG4gIC8vICAgaWYgKG5ld3MuaW1hZ2UudXJsID09IHVuZGVmaW5lZCkge1xuICAvLyAgICAgcmV0dXJuIDxoMT5MT0FESU5HPC9oMT47XG4gIC8vICAgfSBlbHNlIHtcbiAgLy8gICAgIHJldHVybiBgJHtuZXdzLmltYWdlLnVybH1gO1xuICAvLyAgIH1cbiAgLy8gfTtcbiAgY29uc3QgY29udmVydGVkRGF0ZSA9IChwYXJhbXMpID0+IHtcbiAgICBjb25zdCBkYXRlQW5kVGltZSA9IHBhcmFtcztcblxuICAgIGNvbnN0IHNwbGl0dGVkRGF0ZUFuZFRpbWUgPSBkYXRlQW5kVGltZS5zcGxpdChcIlwiKTtcblxuICAgIGNvbnN0IHNsaWNlZERhdGUgPSBzcGxpdHRlZERhdGVBbmRUaW1lLnNsaWNlKDAsIDEwKTtcblxuICAgIGNvbnN0IGpvaW5lZERhdGUgPSBzbGljZWREYXRlLmpvaW4oXCJcIik7XG5cbiAgICByZXR1cm4gam9pbmVkRGF0ZTtcbiAgfTtcbiAgLy8gY29uc29sZS5sb2coXCJuZXdzID4+XCIsIG5ld3MuYXV0aG9yLm5hbWUpO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+e2BSYW5nZWhhYXQ6ICR7bmV3cy50aXRsZX1gfTwvdGl0bGU+XG4gICAgICAgICAgRkFDRUJPT0sgTUVUQSBTSEFSRVxuICAgICAgICAgIHsvKiA8bWV0YVxuICAgICAgICAgICAgcHJvcGVydHk9XCJvZzp1cmxcIlxuICAgICAgICAgICAgY29udGVudD17YCR7cHJvY2Vzcy5lbnYuSE9TVF9VUkx9JHthc1BhdGh9YH1cbiAgICAgICAgICAvPiAqL31cbiAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnR5cGVcIiBjb250ZW50PVwiYXJ0aWNsZVwiIC8+XG4gICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9XCJcIiAvPlxuICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PVwiXCIgLz5cbiAgICAgICAgICB7LyogPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9e2Ake25ld3MuaW1hZ2UudXJsfWB9IC8+ICovfVxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG10LTVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTggY29sLTEyXCI+XG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmdy1ib2xkZXJcIj57bmV3cy50aXRsZX08L2gxPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBtYi0yXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWUtMiB0ZXh0LXNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEtc29saWQgZmEtdXNlciBtZS0xXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgey8qIHshbmV3cy5hdXRob3IgPyBcImF1dGhvclwiIDogbmV3cy5hdXRob3IubmFtZX0gKi99XG4gICAgICAgICAgICAgICAgICB7bmV3cy5hdXRob3IubmFtZX1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhLXNvbGlkIGZhLWNhbGVuZGFyLWRheXMgbWUtMVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgIHtjb252ZXJ0ZWREYXRlKG5ld3MuY3JlYXRlZF9hdCl9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicG9zaXRpb24tYWJzb2x1dGUgei0xXCI+XG4gICAgICAgICAgICAgICAgezxzcGFuIGNsYXNzTmFtZT1cIm1lLTEgY2F0ZWdvcnlcIj5jYXRlZ29yeTwvc3Bhbj59XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3NpdGlvbi1yZWxhdGl2ZSBoZWFkSW1hZ2VDb250YWluZXIgYmctZGFya1wiPlxuICAgICAgICAgICAgICAgIElNQUdFXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJuZXctbGluZSBtdC01IGZzLTVcIj5jb250ZW50PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00IGNvbC0xMiBwLTIgYm9yZGVyXCI+XG4gICAgICAgICAgICAgIDxTaWRlQmFyIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8aWZyYW1lXG4gICAgICAgICAgICBzcmM9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vcGx1Z2lucy9zaGFyZV9idXR0b24ucGhwP2hyZWY9aHR0cHMlM0ElMkYlMkZkZXZlbG9wZXJzLmZhY2Vib29rLmNvbSUyRmRvY3MlMkZwbHVnaW5zJTJGJmxheW91dD1idXR0b25fY291bnQmc2l6ZT1zbWFsbCZhcHBJZD01NTQ4NDgyMjMwNDMzMDUmd2lkdGg9OTYmaGVpZ2h0PTIwXCJcbiAgICAgICAgICAgIHdpZHRoPVwiOTZcIlxuICAgICAgICAgICAgaGVpZ2h0PVwiMjBcIlxuICAgICAgICAgICAgc2Nyb2xsaW5nPVwibm9cIlxuICAgICAgICAgICAgZnJhbWVCb3JkZXI9XCIwXCJcbiAgICAgICAgICAgIGFsbG93RnVsbFNjcmVlbj17dHJ1ZX1cbiAgICAgICAgICAgIGFsbG93PVwiYXV0b3BsYXk7IGNsaXBib2FyZC13cml0ZTsgZW5jcnlwdGVkLW1lZGlhOyBwaWN0dXJlLWluLXBpY3R1cmU7IHdlYi1zaGFyZVwiXG4gICAgICAgICAgPjwvaWZyYW1lPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIHsvKiA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgIHNyYz17aW1hZ2VMb2FkaW5nKCl9XG4gICAgICAgICAgICAgICAgICBsYXlvdXQ9XCJmaWxsXCJcbiAgICAgICAgICAgICAgICAgIG9iamVjdEZpdD1cImNvbnRhaW5cIlxuICAgICAgICAgICAgICAgICAgYWx0PVwiUG9zdEltYWdlXCJcbiAgICAgICAgICAgICAgICAvPiAqL31cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlNoYXJlSXQiLCJTaWRlQmFyIiwiSW1hZ2UiLCJIZWFkIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJQb3N0IiwicXVlcnkiLCJyb3V0ZXIiLCJjb25zb2xlIiwibG9nIiwibmV3cyIsInNldE5ld3MiLCJpc0xvYWRpbmciLCJzZXRMb2FkaW5nIiwiaXNSZWFkeSIsImZldGNoRGF0YSIsImZldGNoIiwicHJvY2VzcyIsImVudiIsIkhFUk9LVV9IT1NUX1VSTCIsInN0b3J5SUQiLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJwYXJhbSIsImNhdGNoIiwiZXJyb3IiLCJwIiwiYXV0aG9yIiwiZm9ybWF0dGVkQ29udGVudCIsInBhcmFtcyIsInVuZGVmaW5lZCIsInNvbWVIVE1MU3RyaW5nIiwiY29udmVydGVkRGF0ZSIsImRhdGVBbmRUaW1lIiwic3BsaXR0ZWREYXRlQW5kVGltZSIsInNwbGl0Iiwic2xpY2VkRGF0ZSIsInNsaWNlIiwiam9pbmVkRGF0ZSIsImpvaW4iLCJkaXYiLCJ0aXRsZSIsIm1ldGEiLCJwcm9wZXJ0eSIsImNvbnRlbnQiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiaDEiLCJzcGFuIiwiaSIsIm5hbWUiLCJjcmVhdGVkX2F0IiwiaWZyYW1lIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJzY3JvbGxpbmciLCJmcmFtZUJvcmRlciIsImFsbG93RnVsbFNjcmVlbiIsImFsbG93Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Post.js\n"));

/***/ })

});