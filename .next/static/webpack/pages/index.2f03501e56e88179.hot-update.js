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

/***/ "./components/HeadPost.js":
/*!********************************!*\
  !*** ./components/HeadPost.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _home_nilaw_Desktop_newRangehaat_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_nilaw_Desktop_newRangehaat_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_nilaw_Desktop_newRangehaat_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_HeadPost_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../styles/HeadPost.module.css */ \"./styles/HeadPost.module.css\");\n/* harmony import */ var _styles_HeadPost_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_HeadPost_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar HeadPost = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]), news = ref[0], setNews = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), loading = ref1[0], setLoading = ref1[1];\n    //   debugger;\n    var fetchData = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_home_nilaw_Desktop_newRangehaat_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var res, data;\n            return _home_nilaw_Desktop_newRangehaat_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        setLoading(true);\n                        _ctx.next = 3;\n                        return fetch(\"https://rangehaatserver.herokuapp.com/\" + \"articles\");\n                    case 3:\n                        res = _ctx.sent;\n                        _ctx.next = 6;\n                        return res.json();\n                    case 6:\n                        data = _ctx.sent;\n                        setNews(data);\n                        setLoading(false);\n                    case 9:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function fetchData() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        fetchData();\n    }, []);\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n            children: \"Data is loading...\"\n        }, void 0, false, {\n            fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/HeadPost.js\",\n            lineNumber: 23,\n            columnNumber: 12\n        }, _this);\n    }\n    var convertedDate = function() {\n        var dateAndTime = news[news.length - 1].created_at;\n        var splittedDateAndTime = dateAndTime.split(\"\");\n        var slicedDate = splittedDateAndTime.slice(0, 10);\n        // const slicedTime = splittedDateAndTime.slice(12, 19);\n        var joinedDate = slicedDate.join(\"\");\n        // const joinedTime = slicedTime.join(\"\");\n        return joinedDate;\n    };\n    var subContent = function() {\n        var paragraph = news[news.length - 1].content;\n        var splittedParagraph = paragraph.split(\" \");\n        var slicedParagraph = splittedParagraph.slice(0, 40);\n        var joinedParagraph = slicedParagraph.join(\",\");\n        var joinedParagraph2 = joinedParagraph.replace(/,/g, \" \");\n        return joinedParagraph2;\n    };\n    // const categoryName = (category) => {\n    //   const formattedCategory =\n    //     category == null ? (\n    //       <span className=\"me-2 category\">Others</span>\n    //     ) : (\n    //       <span className=\"me-2 category\">{category.name}</span>\n    //     );\n    //   return formattedCategory;\n    // };\n    var headNews = news.length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n        children: \"LOADING....\"\n    }, void 0, false, {\n        fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/HeadPost.js\",\n        lineNumber: 61,\n        columnNumber: 7\n    }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"headPostImage\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                        className: (_styles_HeadPost_module_css__WEBPACK_IMPORTED_MODULE_6___default().category),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                            className: \"z-1 category\",\n                            children: news[news.length - 1].category.name\n                        }, void 0, false, {\n                            fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/HeadPost.js\",\n                            lineNumber: 66,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/HeadPost.js\",\n                        lineNumber: 65,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"imageContainer\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: news[news.length - 1].image.url,\n                            layout: \"responsive\",\n                            className: \"border\",\n                            width: 10,\n                            height: 7,\n                            alt: \"HeadPostImage\"\n                        }, void 0, false, {\n                            fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/HeadPost.js\",\n                            lineNumber: 71,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/HeadPost.js\",\n                        lineNumber: 70,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/HeadPost.js\",\n                lineNumber: 64,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h6\", {\n                    className: \"blockquote-footer mt-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"i\", {\n                            className: \"fa-solid fa-user me-1\"\n                        }, void 0, false, {\n                            fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/HeadPost.js\",\n                            lineNumber: 83,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                            className: \"me-2\",\n                            children: news[news.length - 1].author.name\n                        }, void 0, false, {\n                            fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/HeadPost.js\",\n                            lineNumber: 84,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"i\", {\n                            className: \"fa-solid fa-calendar-days me-1\"\n                        }, void 0, false, {\n                            fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/HeadPost.js\",\n                            lineNumber: 85,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                            children: convertedDate()\n                        }, void 0, false, {\n                            fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/HeadPost.js\",\n                            lineNumber: 86,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/HeadPost.js\",\n                    lineNumber: 82,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/HeadPost.js\",\n                lineNumber: 81,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                className: \"f2-bold fw-bolder mt-3\",\n                children: news[news.length - 1].title\n            }, void 0, false, {\n                fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/HeadPost.js\",\n                lineNumber: 90,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                className: \"new-line fs-5 fw-bold\",\n                children: subContent() + \" ......\"\n            }, void 0, false, {\n                fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/HeadPost.js\",\n                lineNumber: 94,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                href: {\n                    pathname: \"/\".concat(news[news.length - 1].category.name.toLowerCase(), \"/\").concat(news[news.length - 1].slug),\n                    query: {\n                        title: news[news.length - 1].title,\n                        content: news[news.length - 1].content,\n                        author: news[news.length - 1].author.name,\n                        category: news[news.length - 1].category.name,\n                        created_at: convertedDate(news[news.length - 1].created_at),\n                        image: news[news.length - 1].image.url\n                    }\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                    className: \"btn btn-primary\",\n                    children: \"Read More\"\n                }, void 0, false, {\n                    fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/HeadPost.js\",\n                    lineNumber: 111,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/HeadPost.js\",\n                lineNumber: 96,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/HeadPost.js\",\n        lineNumber: 63,\n        columnNumber: 7\n    }, _this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: (_styles_HeadPost_module_css__WEBPACK_IMPORTED_MODULE_6___default().headPost) + \" mb-5\",\n            children: headNews\n        }, void 0, false, {\n            fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/HeadPost.js\",\n            lineNumber: 117,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false);\n};\n_s(HeadPost, \"e+Qj8lEadTQIYcROuVnJ4J/+oDY=\");\n_c = HeadPost;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HeadPost);\nvar _c;\n$RefreshReg$(_c, \"HeadPost\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVM7Ozs7O3lCQUFJOzs7OztxQkFDdkM7Ozs7OzthQUNIO0lBRVYscUJBQ0U7a0JBQ0UsNEVBQUNELEtBQUc7WUFBQ0MsU0FBUyxFQUFFdkMsNkVBQWMsR0FBRyxPQUFPO3NCQUFHcUMsUUFBUTs7Ozs7aUJBQU87cUJBQ3pELENBQ0g7Q0FDSDtHQWxIS2hDLFFBQVE7QUFBUkEsS0FBQUEsUUFBUTtBQW9IZCwrREFBZUEsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSGVhZFBvc3QuanM/MjI1OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGUgZnJvbSBcIi4vLi4vc3R5bGVzL0hlYWRQb3N0Lm1vZHVsZS5jc3NcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5jb25zdCBIZWFkUG9zdCA9ICgpID0+IHtcbiAgY29uc3QgW25ld3MsIHNldE5ld3NdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIC8vICAgZGVidWdnZXI7XG4gIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIC8vIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHByb2Nlc3MuZW52LkFQSV9IT1NUX1VSTCArIFwiYXJ0aWNsZXNcIik7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2gocHJvY2Vzcy5lbnYuSEVST0tVX0hPU1RfVVJMICsgXCJhcnRpY2xlc1wiKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICBzZXROZXdzKGRhdGEpO1xuICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2hEYXRhKCk7XG4gIH0sIFtdKTtcbiAgaWYgKGxvYWRpbmcpIHtcbiAgICByZXR1cm4gPHA+RGF0YSBpcyBsb2FkaW5nLi4uPC9wPjtcbiAgfVxuICBjb25zdCBjb252ZXJ0ZWREYXRlID0gKCkgPT4ge1xuICAgIGNvbnN0IGRhdGVBbmRUaW1lID0gbmV3c1tuZXdzLmxlbmd0aCAtIDFdLmNyZWF0ZWRfYXQ7XG5cbiAgICBjb25zdCBzcGxpdHRlZERhdGVBbmRUaW1lID0gZGF0ZUFuZFRpbWUuc3BsaXQoXCJcIik7XG5cbiAgICBjb25zdCBzbGljZWREYXRlID0gc3BsaXR0ZWREYXRlQW5kVGltZS5zbGljZSgwLCAxMCk7XG5cbiAgICAvLyBjb25zdCBzbGljZWRUaW1lID0gc3BsaXR0ZWREYXRlQW5kVGltZS5zbGljZSgxMiwgMTkpO1xuXG4gICAgY29uc3Qgam9pbmVkRGF0ZSA9IHNsaWNlZERhdGUuam9pbihcIlwiKTtcblxuICAgIC8vIGNvbnN0IGpvaW5lZFRpbWUgPSBzbGljZWRUaW1lLmpvaW4oXCJcIik7XG4gICAgcmV0dXJuIGpvaW5lZERhdGU7XG4gIH07XG4gIGNvbnN0IHN1YkNvbnRlbnQgPSAoKSA9PiB7XG4gICAgY29uc3QgcGFyYWdyYXBoID0gbmV3c1tuZXdzLmxlbmd0aCAtIDFdLmNvbnRlbnQ7XG4gICAgY29uc3Qgc3BsaXR0ZWRQYXJhZ3JhcGggPSBwYXJhZ3JhcGguc3BsaXQoXCIgXCIpO1xuICAgIGNvbnN0IHNsaWNlZFBhcmFncmFwaCA9IHNwbGl0dGVkUGFyYWdyYXBoLnNsaWNlKDAsIDQwKTtcblxuICAgIGNvbnN0IGpvaW5lZFBhcmFncmFwaCA9IHNsaWNlZFBhcmFncmFwaC5qb2luKFwiLFwiKTtcblxuICAgIGNvbnN0IGpvaW5lZFBhcmFncmFwaDIgPSBqb2luZWRQYXJhZ3JhcGgucmVwbGFjZSgvLC9nLCBcIiBcIik7XG4gICAgcmV0dXJuIGpvaW5lZFBhcmFncmFwaDI7XG4gIH07XG4gIC8vIGNvbnN0IGNhdGVnb3J5TmFtZSA9IChjYXRlZ29yeSkgPT4ge1xuICAvLyAgIGNvbnN0IGZvcm1hdHRlZENhdGVnb3J5ID1cbiAgLy8gICAgIGNhdGVnb3J5ID09IG51bGwgPyAoXG4gIC8vICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1lLTIgY2F0ZWdvcnlcIj5PdGhlcnM8L3NwYW4+XG4gIC8vICAgICApIDogKFxuICAvLyAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtZS0yIGNhdGVnb3J5XCI+e2NhdGVnb3J5Lm5hbWV9PC9zcGFuPlxuICAvLyAgICAgKTtcbiAgLy8gICByZXR1cm4gZm9ybWF0dGVkQ2F0ZWdvcnk7XG4gIC8vIH07XG5cbiAgY29uc3QgaGVhZE5ld3MgPVxuICAgIG5ld3MubGVuZ3RoID09PSAwID8gKFxuICAgICAgPHA+TE9BRElORy4uLi48L3A+XG4gICAgKSA6IChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZFBvc3RJbWFnZVwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGUuY2F0ZWdvcnl9PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiei0xIGNhdGVnb3J5XCI+XG4gICAgICAgICAgICAgIHtuZXdzW25ld3MubGVuZ3RoIC0gMV0uY2F0ZWdvcnkubmFtZX1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZUNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgIHNyYz17bmV3c1tuZXdzLmxlbmd0aCAtIDFdLmltYWdlLnVybH1cbiAgICAgICAgICAgICAgbGF5b3V0PVwicmVzcG9uc2l2ZVwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlclwiXG4gICAgICAgICAgICAgIHdpZHRoPXsxMH1cbiAgICAgICAgICAgICAgaGVpZ2h0PXs3fVxuICAgICAgICAgICAgICBhbHQ9XCJIZWFkUG9zdEltYWdlXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJibG9ja3F1b3RlLWZvb3RlciBtdC0yXCI+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYS1zb2xpZCBmYS11c2VyIG1lLTFcIj48L2k+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtZS0yXCI+e25ld3NbbmV3cy5sZW5ndGggLSAxXS5hdXRob3IubmFtZX08L3NwYW4+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYS1zb2xpZCBmYS1jYWxlbmRhci1kYXlzIG1lLTFcIj48L2k+XG4gICAgICAgICAgICA8c3Bhbj57Y29udmVydGVkRGF0ZSgpfTwvc3Bhbj5cbiAgICAgICAgICA8L2g2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZjItYm9sZCBmdy1ib2xkZXIgbXQtM1wiPlxuICAgICAgICAgIHtuZXdzW25ld3MubGVuZ3RoIC0gMV0udGl0bGV9XG4gICAgICAgIDwvaDM+XG4gICAgICAgIHsvKiBDT05URU5UICovfVxuICAgICAgICA8cCBjbGFzc05hbWU9XCJuZXctbGluZSBmcy01IGZ3LWJvbGRcIj57c3ViQ29udGVudCgpICsgXCIgLi4uLi4uXCJ9PC9wPlxuXG4gICAgICAgIDxMaW5rXG4gICAgICAgICAgaHJlZj17e1xuICAgICAgICAgICAgcGF0aG5hbWU6IGAvJHtuZXdzW25ld3MubGVuZ3RoIC0gMV0uY2F0ZWdvcnkubmFtZS50b0xvd2VyQ2FzZSgpfS8ke1xuICAgICAgICAgICAgICBuZXdzW25ld3MubGVuZ3RoIC0gMV0uc2x1Z1xuICAgICAgICAgICAgfWAsXG4gICAgICAgICAgICBxdWVyeToge1xuICAgICAgICAgICAgICB0aXRsZTogbmV3c1tuZXdzLmxlbmd0aCAtIDFdLnRpdGxlLFxuICAgICAgICAgICAgICBjb250ZW50OiBuZXdzW25ld3MubGVuZ3RoIC0gMV0uY29udGVudCxcbiAgICAgICAgICAgICAgYXV0aG9yOiBuZXdzW25ld3MubGVuZ3RoIC0gMV0uYXV0aG9yLm5hbWUsXG4gICAgICAgICAgICAgIGNhdGVnb3J5OiBuZXdzW25ld3MubGVuZ3RoIC0gMV0uY2F0ZWdvcnkubmFtZSxcbiAgICAgICAgICAgICAgY3JlYXRlZF9hdDogY29udmVydGVkRGF0ZShuZXdzW25ld3MubGVuZ3RoIC0gMV0uY3JlYXRlZF9hdCksXG4gICAgICAgICAgICAgIGltYWdlOiBuZXdzW25ld3MubGVuZ3RoIC0gMV0uaW1hZ2UudXJsLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+UmVhZCBNb3JlPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuaGVhZFBvc3QgKyBcIiBtYi01XCJ9PntoZWFkTmV3c308L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRQb3N0O1xuIl0sIm5hbWVzIjpbInN0eWxlIiwiSW1hZ2UiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkxpbmsiLCJIZWFkUG9zdCIsIm5ld3MiLCJzZXROZXdzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJmZXRjaERhdGEiLCJyZXMiLCJkYXRhIiwiZmV0Y2giLCJwcm9jZXNzIiwiZW52IiwiSEVST0tVX0hPU1RfVVJMIiwianNvbiIsInAiLCJjb252ZXJ0ZWREYXRlIiwiZGF0ZUFuZFRpbWUiLCJsZW5ndGgiLCJjcmVhdGVkX2F0Iiwic3BsaXR0ZWREYXRlQW5kVGltZSIsInNwbGl0Iiwic2xpY2VkRGF0ZSIsInNsaWNlIiwiam9pbmVkRGF0ZSIsImpvaW4iLCJzdWJDb250ZW50IiwicGFyYWdyYXBoIiwiY29udGVudCIsInNwbGl0dGVkUGFyYWdyYXBoIiwic2xpY2VkUGFyYWdyYXBoIiwiam9pbmVkUGFyYWdyYXBoIiwiam9pbmVkUGFyYWdyYXBoMiIsInJlcGxhY2UiLCJoZWFkTmV3cyIsImRpdiIsImNsYXNzTmFtZSIsInNwYW4iLCJjYXRlZ29yeSIsIm5hbWUiLCJzcmMiLCJpbWFnZSIsInVybCIsImxheW91dCIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0IiwiaDYiLCJpIiwiYXV0aG9yIiwiaDMiLCJ0aXRsZSIsImhyZWYiLCJwYXRobmFtZSIsInRvTG93ZXJDYXNlIiwic2x1ZyIsInF1ZXJ5IiwiYSIsImhlYWRQb3N0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/HeadPost.js\n"));

/***/ })

});