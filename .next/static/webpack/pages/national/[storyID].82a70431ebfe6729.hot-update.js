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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Post; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _home_nilaw_Desktop_newRangehaat_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_nilaw_Desktop_newRangehaat_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_nilaw_Desktop_newRangehaat_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ShareIt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShareIt */ \"./components/ShareIt.js\");\n/* harmony import */ var _SideBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SideBar */ \"./components/SideBar.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Post(param) {\n    var query = param.query;\n    _s();\n    var asPath = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)().asPath;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)([]), news = ref[0], setNews = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(true), isLoading = ref1[0], setLoading = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(function() {\n        var fetchData = function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(_home_nilaw_Desktop_newRangehaat_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(param) {\n                return _home_nilaw_Desktop_newRangehaat_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.next = 2;\n                            return fetch(\"https://rangehaatserver.herokuapp.com/\" + \"articles/\" + param).then(function(res) {\n                                return res.json();\n                            }).then(function(data) {\n                                setNews(data);\n                                setLoading(false);\n                            }).catch(function(error) {\n                                return console.log(\"ERROR\", error);\n                            });\n                        case 2:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return function fetchData(param) {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        setInterval(fetchData(query.storyID), 2000);\n    }, []);\n    if (isLoading || !query.storyID) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                children: \"Loading.....\"\n            }, void 0, false, {\n                fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/Post.js\",\n                lineNumber: 29,\n                columnNumber: 9\n            }, this)\n        }, void 0, false);\n    }\n    console.log(news.author);\n    var formattedContent = function(params) {\n        if (params == undefined) {\n            return 0;\n        } else {\n            var someHTMLString = params;\n            // // console.log(\"PARAMS\", params);\n            // const myString = someHTMLString.replace(/<[^>]+>/g, \"\");\n            // const myString = someHTMLString.replace(/<iframe/g, \"${<iFrame\");\n            // return myString;\n            return someHTMLString;\n        }\n    };\n    // const imageLoading = () => {\n    //   if (news.image.url == undefined) {\n    //     return <h1>LOADING</h1>;\n    //   } else {\n    //     return `${news.image.url}`;\n    //   }\n    // };\n    var convertedDate = function(params) {\n        var dateAndTime = params;\n        var splittedDateAndTime = dateAndTime.split(\"\");\n        var slicedDate = splittedDateAndTime.slice(0, 10);\n        var joinedDate = slicedDate.join(\"\");\n        return joinedDate;\n    };\n    // console.log(\"news >>\", news.author.name);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                            children: \"Rangehaat: \".concat(news.title)\n                        }, void 0, false, {\n                            fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/Post.js\",\n                            lineNumber: 71,\n                            columnNumber: 11\n                        }, this),\n                        \"FACEBOOK META SHARE\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"meta\", {\n                            property: \"og:url\",\n                            content: \"\".concat(\"https://www.rangehaat.com\").concat(asPath)\n                        }, void 0, false, {\n                            fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/Post.js\",\n                            lineNumber: 73,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"meta\", {\n                            property: \"og:type\",\n                            content: \"article\"\n                        }, void 0, false, {\n                            fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/Post.js\",\n                            lineNumber: 77,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"meta\", {\n                            property: \"og:title\",\n                            content: \"\"\n                        }, void 0, false, {\n                            fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/Post.js\",\n                            lineNumber: 78,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"meta\", {\n                            property: \"og:description\",\n                            content: \"\"\n                        }, void 0, false, {\n                            fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/Post.js\",\n                            lineNumber: 79,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/Post.js\",\n                    lineNumber: 70,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"section\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"row mt-5\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: \"col-lg-8 col-12\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                                            className: \"fw-bolder\",\n                                            children: news.title\n                                        }, void 0, false, {\n                                            fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/Post.js\",\n                                            lineNumber: 85,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                            className: \"d-flex mb-2\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                                    className: \"me-2 text-secondary\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"i\", {\n                                                            className: \"fa-solid fa-user me-1\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/Post.js\",\n                                                            lineNumber: 88,\n                                                            columnNumber: 19\n                                                        }, this),\n                                                        news.author.name\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/Post.js\",\n                                                    lineNumber: 87,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                                    className: \"text-secondary\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"i\", {\n                                                            className: \"fa-solid fa-calendar-days me-1\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/Post.js\",\n                                                            lineNumber: 93,\n                                                            columnNumber: 19\n                                                        }, this),\n                                                        convertedDate(news.created_at)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/Post.js\",\n                                                    lineNumber: 92,\n                                                    columnNumber: 17\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/Post.js\",\n                                            lineNumber: 86,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                            className: \"position-absolute z-1\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                                className: \"me-1 category\",\n                                                children: \"category\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/Post.js\",\n                                                lineNumber: 98,\n                                                columnNumber: 18\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/Post.js\",\n                                            lineNumber: 97,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                            className: \"position-relative headImageContainer bg-dark\",\n                                            children: \"IMAGE\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/Post.js\",\n                                            lineNumber: 100,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                            className: \"new-line mt-5 fs-5\",\n                                            children: \"content\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/Post.js\",\n                                            lineNumber: 103,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/Post.js\",\n                                    lineNumber: 84,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: \"col-lg-4 col-12 p-2 border\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_SideBar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                        fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/Post.js\",\n                                        lineNumber: 106,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/Post.js\",\n                                    lineNumber: 105,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/Post.js\",\n                            lineNumber: 83,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"iframe\", {\n                            src: \"https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&layout=button_count&size=small&appId=554848223043305&width=96&height=20\",\n                            width: \"96\",\n                            height: \"20\",\n                            scrolling: \"no\",\n                            frameBorder: \"0\",\n                            allowFullScreen: true,\n                            allow: \"autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share\"\n                        }, void 0, false, {\n                            fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/Post.js\",\n                            lineNumber: 109,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/Post.js\",\n                    lineNumber: 82,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/Post.js\",\n            lineNumber: 69,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n};\n_s(Post, \"x+3I1ecLyKlON14y3UcKHv0Egsc=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter\n    ];\n});\n_c = Post;\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Qzs7Ozs7O3dEQUMxQjs7Ozs7O2dEQUNIO3NEQUNOLDhEQUFDSCxNQUFJOzRDQUFDRixTQUFTLEVBQUMsdUJBQXVCO3NEQUNwQyw0RUFBQ0UsTUFBSTtnREFBQ0YsU0FBUyxFQUFDLGVBQWU7MERBQUMsVUFBUTs7Ozs7b0RBQU87Ozs7O2dEQUMzQztzREFDUCw4REFBQ1AsS0FBRzs0Q0FBQ08sU0FBUyxFQUFDLDhDQUE4QztzREFBQyxPQUU5RDs7Ozs7Z0RBQU07c0RBQ04sOERBQUNyQixHQUFDOzRDQUFDcUIsU0FBUyxFQUFDLG9CQUFvQjtzREFBQyxTQUFPOzs7OztnREFBSTs7Ozs7O3dDQUN6Qzs4Q0FDTiw4REFBQ1AsS0FBRztvQ0FBQ08sU0FBUyxFQUFDLDRCQUE0Qjs4Q0FDekMsNEVBQUNsRCxnREFBTzs7Ozs0Q0FBRzs7Ozs7d0NBQ1A7Ozs7OztnQ0FDRjtzQ0FDTiw4REFBQ3dELFFBQU07NEJBQ0xDLEdBQUcsRUFBQywwTEFBMEw7NEJBQzlMQyxLQUFLLEVBQUMsSUFBSTs0QkFDVkMsTUFBTSxFQUFDLElBQUk7NEJBQ1hDLFNBQVMsRUFBQyxJQUFJOzRCQUNkQyxXQUFXLEVBQUMsR0FBRzs0QkFDZkMsZUFBZSxFQUFFLElBQUk7NEJBQ3JCQyxLQUFLLEVBQUMsMkVBQTJFOzs7OztnQ0FDekU7Ozs7Ozt3QkFDRjs7Ozs7O2dCQU9OO3FCQUNMLENBQ0g7Q0FDSDtHQXhIdUJ6RCxJQUFJOztRQUNQSCxrREFBUzs7O0FBRE5HLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0LmpzPzM0NTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNoYXJlSXQgZnJvbSBcIi4vU2hhcmVJdFwiO1xuaW1wb3J0IFNpZGVCYXIgZnJvbSBcIi4vU2lkZUJhclwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdCh7IHF1ZXJ5IH0pIHtcbiAgY29uc3QgeyBhc1BhdGggfSA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IFtuZXdzLCBzZXROZXdzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jIChwYXJhbSkgPT4ge1xuICAgICAgYXdhaXQgZmV0Y2gocHJvY2Vzcy5lbnYuSEVST0tVX0hPU1RfVVJMICsgXCJhcnRpY2xlcy9cIiArIHBhcmFtKVxuICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHNldE5ld3MoZGF0YSk7XG4gICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUubG9nKFwiRVJST1JcIiwgZXJyb3IpKTtcbiAgICB9O1xuICAgIHNldEludGVydmFsKGZldGNoRGF0YShxdWVyeS5zdG9yeUlEKSwgMjAwMCk7XG4gIH0sIFtdKTtcbiAgaWYgKGlzTG9hZGluZyB8fCAhcXVlcnkuc3RvcnlJRCkge1xuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8cD5Mb2FkaW5nLi4uLi48L3A+XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG4gIGNvbnNvbGUubG9nKG5ld3MuYXV0aG9yKTtcblxuICBjb25zdCBmb3JtYXR0ZWRDb250ZW50ID0gKHBhcmFtcykgPT4ge1xuICAgIGlmIChwYXJhbXMgPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc29tZUhUTUxTdHJpbmcgPSBwYXJhbXM7XG4gICAgICAvLyAvLyBjb25zb2xlLmxvZyhcIlBBUkFNU1wiLCBwYXJhbXMpO1xuICAgICAgLy8gY29uc3QgbXlTdHJpbmcgPSBzb21lSFRNTFN0cmluZy5yZXBsYWNlKC88W14+XSs+L2csIFwiXCIpO1xuICAgICAgLy8gY29uc3QgbXlTdHJpbmcgPSBzb21lSFRNTFN0cmluZy5yZXBsYWNlKC88aWZyYW1lL2csIFwiJHs8aUZyYW1lXCIpO1xuICAgICAgLy8gcmV0dXJuIG15U3RyaW5nO1xuICAgICAgcmV0dXJuIHNvbWVIVE1MU3RyaW5nO1xuICAgIH1cbiAgfTtcblxuICAvLyBjb25zdCBpbWFnZUxvYWRpbmcgPSAoKSA9PiB7XG4gIC8vICAgaWYgKG5ld3MuaW1hZ2UudXJsID09IHVuZGVmaW5lZCkge1xuICAvLyAgICAgcmV0dXJuIDxoMT5MT0FESU5HPC9oMT47XG4gIC8vICAgfSBlbHNlIHtcbiAgLy8gICAgIHJldHVybiBgJHtuZXdzLmltYWdlLnVybH1gO1xuICAvLyAgIH1cbiAgLy8gfTtcbiAgY29uc3QgY29udmVydGVkRGF0ZSA9IChwYXJhbXMpID0+IHtcbiAgICBjb25zdCBkYXRlQW5kVGltZSA9IHBhcmFtcztcblxuICAgIGNvbnN0IHNwbGl0dGVkRGF0ZUFuZFRpbWUgPSBkYXRlQW5kVGltZS5zcGxpdChcIlwiKTtcblxuICAgIGNvbnN0IHNsaWNlZERhdGUgPSBzcGxpdHRlZERhdGVBbmRUaW1lLnNsaWNlKDAsIDEwKTtcblxuICAgIGNvbnN0IGpvaW5lZERhdGUgPSBzbGljZWREYXRlLmpvaW4oXCJcIik7XG5cbiAgICByZXR1cm4gam9pbmVkRGF0ZTtcbiAgfTtcbiAgLy8gY29uc29sZS5sb2coXCJuZXdzID4+XCIsIG5ld3MuYXV0aG9yLm5hbWUpO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+e2BSYW5nZWhhYXQ6ICR7bmV3cy50aXRsZX1gfTwvdGl0bGU+XG4gICAgICAgICAgRkFDRUJPT0sgTUVUQSBTSEFSRVxuICAgICAgICAgIDxtZXRhXG4gICAgICAgICAgICBwcm9wZXJ0eT1cIm9nOnVybFwiXG4gICAgICAgICAgICBjb250ZW50PXtgJHtwcm9jZXNzLmVudi5IT1NUX1VSTH0ke2FzUGF0aH1gfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0eXBlXCIgY29udGVudD1cImFydGljbGVcIiAvPlxuICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PVwiXCIgLz5cbiAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD1cIlwiIC8+XG4gICAgICAgICAgey8qIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PXtgJHtuZXdzLmltYWdlLnVybH1gfSAvPiAqL31cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtdC01XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy04IGNvbC0xMlwiPlxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZnctYm9sZGVyXCI+e25ld3MudGl0bGV9PC9oMT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggbWItMlwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1lLTIgdGV4dC1zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhLXNvbGlkIGZhLXVzZXIgbWUtMVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgIHsvKiB7IW5ld3MuYXV0aG9yID8gXCJhdXRob3JcIiA6IG5ld3MuYXV0aG9yLm5hbWV9ICovfVxuICAgICAgICAgICAgICAgICAge25ld3MuYXV0aG9yLm5hbWV9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYS1zb2xpZCBmYS1jYWxlbmRhci1kYXlzIG1lLTFcIj48L2k+XG4gICAgICAgICAgICAgICAgICB7Y29udmVydGVkRGF0ZShuZXdzLmNyZWF0ZWRfYXQpfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBvc2l0aW9uLWFic29sdXRlIHotMVwiPlxuICAgICAgICAgICAgICAgIHs8c3BhbiBjbGFzc05hbWU9XCJtZS0xIGNhdGVnb3J5XCI+Y2F0ZWdvcnk8L3NwYW4+fVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zaXRpb24tcmVsYXRpdmUgaGVhZEltYWdlQ29udGFpbmVyIGJnLWRhcmtcIj5cbiAgICAgICAgICAgICAgICBJTUFHRVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibmV3LWxpbmUgbXQtNSBmcy01XCI+Y29udGVudDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNCBjb2wtMTIgcC0yIGJvcmRlclwiPlxuICAgICAgICAgICAgICA8U2lkZUJhciAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGlmcmFtZVxuICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3BsdWdpbnMvc2hhcmVfYnV0dG9uLnBocD9ocmVmPWh0dHBzJTNBJTJGJTJGZGV2ZWxvcGVycy5mYWNlYm9vay5jb20lMkZkb2NzJTJGcGx1Z2lucyUyRiZsYXlvdXQ9YnV0dG9uX2NvdW50JnNpemU9c21hbGwmYXBwSWQ9NTU0ODQ4MjIzMDQzMzA1JndpZHRoPTk2JmhlaWdodD0yMFwiXG4gICAgICAgICAgICB3aWR0aD1cIjk2XCJcbiAgICAgICAgICAgIGhlaWdodD1cIjIwXCJcbiAgICAgICAgICAgIHNjcm9sbGluZz1cIm5vXCJcbiAgICAgICAgICAgIGZyYW1lQm9yZGVyPVwiMFwiXG4gICAgICAgICAgICBhbGxvd0Z1bGxTY3JlZW49e3RydWV9XG4gICAgICAgICAgICBhbGxvdz1cImF1dG9wbGF5OyBjbGlwYm9hcmQtd3JpdGU7IGVuY3J5cHRlZC1tZWRpYTsgcGljdHVyZS1pbi1waWN0dXJlOyB3ZWItc2hhcmVcIlxuICAgICAgICAgID48L2lmcmFtZT5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICB7LyogPEltYWdlXG4gICAgICAgICAgICAgICAgICBzcmM9e2ltYWdlTG9hZGluZygpfVxuICAgICAgICAgICAgICAgICAgbGF5b3V0PVwiZmlsbFwiXG4gICAgICAgICAgICAgICAgICBvYmplY3RGaXQ9XCJjb250YWluXCJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIlBvc3RJbWFnZVwiXG4gICAgICAgICAgICAgICAgLz4gKi99XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJTaGFyZUl0IiwiU2lkZUJhciIsIkltYWdlIiwiSGVhZCIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiUG9zdCIsInF1ZXJ5IiwiYXNQYXRoIiwibmV3cyIsInNldE5ld3MiLCJpc0xvYWRpbmciLCJzZXRMb2FkaW5nIiwiZmV0Y2hEYXRhIiwicGFyYW0iLCJmZXRjaCIsInByb2Nlc3MiLCJlbnYiLCJIRVJPS1VfSE9TVF9VUkwiLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInNldEludGVydmFsIiwic3RvcnlJRCIsInAiLCJhdXRob3IiLCJmb3JtYXR0ZWRDb250ZW50IiwicGFyYW1zIiwidW5kZWZpbmVkIiwic29tZUhUTUxTdHJpbmciLCJjb252ZXJ0ZWREYXRlIiwiZGF0ZUFuZFRpbWUiLCJzcGxpdHRlZERhdGVBbmRUaW1lIiwic3BsaXQiLCJzbGljZWREYXRlIiwic2xpY2UiLCJqb2luZWREYXRlIiwiam9pbiIsImRpdiIsInRpdGxlIiwibWV0YSIsInByb3BlcnR5IiwiY29udGVudCIsIkhPU1RfVVJMIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImgxIiwic3BhbiIsImkiLCJuYW1lIiwiY3JlYXRlZF9hdCIsImlmcmFtZSIsInNyYyIsIndpZHRoIiwiaGVpZ2h0Iiwic2Nyb2xsaW5nIiwiZnJhbWVCb3JkZXIiLCJhbGxvd0Z1bGxTY3JlZW4iLCJhbGxvdyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Post.js\n"));

/***/ })

});