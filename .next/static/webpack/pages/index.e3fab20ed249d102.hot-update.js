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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _home_nilaw_Desktop_newRangehaat_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_nilaw_Desktop_newRangehaat_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_nilaw_Desktop_newRangehaat_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_HeadPost_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../styles/HeadPost.module.css */ \"./styles/HeadPost.module.css\");\n/* harmony import */ var _styles_HeadPost_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_HeadPost_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar HeadPost = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]), news = ref[0], setNews = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), loading = ref1[0], setLoading = ref1[1];\n    //   debugger;\n    var fetchData = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_home_nilaw_Desktop_newRangehaat_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var res, data;\n            return _home_nilaw_Desktop_newRangehaat_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        setLoading(true);\n                        _ctx.next = 3;\n                        return fetch(\"https://rangehaatserver.herokuapp.com/\" + \"articles\");\n                    case 3:\n                        res = _ctx.sent;\n                        _ctx.next = 6;\n                        return res.json();\n                    case 6:\n                        data = _ctx.sent;\n                        setNews(data);\n                        setLoading(false);\n                    case 9:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function fetchData() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        fetchData();\n    }, []);\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n            children: \"Data is loading...\"\n        }, void 0, false, {\n            fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/HeadPost.js\",\n            lineNumber: 23,\n            columnNumber: 12\n        }, _this);\n    }\n    var convertedDate = function() {\n        var dateAndTime = news[news.length - 1].created_at;\n        var splittedDateAndTime = dateAndTime.split(\"\");\n        var slicedDate = splittedDateAndTime.slice(0, 10);\n        // const slicedTime = splittedDateAndTime.slice(12, 19);\n        var joinedDate = slicedDate.join(\"\");\n        // const joinedTime = slicedTime.join(\"\");\n        return joinedDate;\n    };\n    var subContent = function() {\n        var paragraph = news[news.length - 1].content;\n        var splittedParagraph = paragraph.split(\" \");\n        var slicedParagraph = splittedParagraph.slice(0, 40);\n        var joinedParagraph = slicedParagraph.join(\",\");\n        var joinedParagraph2 = joinedParagraph.replace(/,/g, \" \");\n        return joinedParagraph2;\n    };\n    // const categoryName = (category) => {\n    //   const formattedCategory =\n    //     category == null ? (\n    //       <span className=\"me-2 category\">Others</span>\n    //     ) : (\n    //       <span className=\"me-2 category\">{category.name}</span>\n    //     );\n    //   return formattedCategory;\n    // };\n    var headNews = news.length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n        children: \"LOADING....\"\n    }, void 0, false, {\n        fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/HeadPost.js\",\n        lineNumber: 61,\n        columnNumber: 7\n    }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"headPostImage\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                        className: (_styles_HeadPost_module_css__WEBPACK_IMPORTED_MODULE_6___default().category),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                            className: \"z-1 category\",\n                            children: news[news.length - 1].category.name\n                        }, void 0, false, {\n                            fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/HeadPost.js\",\n                            lineNumber: 66,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/HeadPost.js\",\n                        lineNumber: 65,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"imageContainer\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: news[news.length - 1].image.url,\n                            layout: \"responsive\",\n                            className: \"border\",\n                            width: 10,\n                            height: 7,\n                            alt: \"HeadPostImage\"\n                        }, void 0, false, {\n                            fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/HeadPost.js\",\n                            lineNumber: 71,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/HeadPost.js\",\n                        lineNumber: 70,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/HeadPost.js\",\n                lineNumber: 64,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h6\", {\n                    className: \"blockquote-footer mt-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"i\", {\n                            className: \"fa-solid fa-user me-1\"\n                        }, void 0, false, {\n                            fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/HeadPost.js\",\n                            lineNumber: 83,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                            className: \"me-2\",\n                            children: news[news.length - 1].author.name\n                        }, void 0, false, {\n                            fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/HeadPost.js\",\n                            lineNumber: 84,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"i\", {\n                            className: \"fa-solid fa-calendar-days me-1\"\n                        }, void 0, false, {\n                            fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/HeadPost.js\",\n                            lineNumber: 85,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                            children: convertedDate()\n                        }, void 0, false, {\n                            fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/HeadPost.js\",\n                            lineNumber: 86,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/HeadPost.js\",\n                    lineNumber: 82,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/HeadPost.js\",\n                lineNumber: 81,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                className: \"f2-bold fw-bolder mt-3\",\n                children: news[news.length - 1].title\n            }, void 0, false, {\n                fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/HeadPost.js\",\n                lineNumber: 90,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                className: \"new-line fs-5\",\n                children: subContent() + \" ......\"\n            }, void 0, false, {\n                fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/HeadPost.js\",\n                lineNumber: 94,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                href: {\n                    pathname: \"/\".concat(news[news.length - 1].category.name.toLowerCase(), \"/\").concat(news[news.length - 1].slug),\n                    query: {\n                        title: news[news.length - 1].title,\n                        content: news[news.length - 1].content,\n                        author: news[news.length - 1].author.name,\n                        category: news[news.length - 1].category.name,\n                        created_at: convertedDate(news[news.length - 1].created_at),\n                        image: news[news.length - 1].image.url\n                    }\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                    className: \"btn btn-primary\",\n                    children: \"Read More\"\n                }, void 0, false, {\n                    fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/HeadPost.js\",\n                    lineNumber: 111,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/HeadPost.js\",\n                lineNumber: 96,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/HeadPost.js\",\n        lineNumber: 63,\n        columnNumber: 7\n    }, _this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: (_styles_HeadPost_module_css__WEBPACK_IMPORTED_MODULE_6___default().headPost) + \" mb-5\",\n            children: headNews\n        }, void 0, false, {\n            fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/HeadPost.js\",\n            lineNumber: 117,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false);\n};\n_s(HeadPost, \"e+Qj8lEadTQIYcROuVnJ4J/+oDY=\");\n_c = HeadPost;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HeadPost);\nvar _c;\n$RefreshReg$(_c, \"HeadPost\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozt5QkFBSTs7Ozs7cUJBQ3ZDOzs7Ozs7YUFDSDtJQUVWLHFCQUNFO2tCQUNFLDRFQUFDRCxLQUFHO1lBQUNDLFNBQVMsRUFBRXZDLDZFQUFjLEdBQUcsT0FBTztzQkFBR3FDLFFBQVE7Ozs7O2lCQUFPO3FCQUN6RCxDQUNIO0NBQ0g7R0FsSEtoQyxRQUFRO0FBQVJBLEtBQUFBLFFBQVE7QUFvSGQsK0RBQWVBLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0hlYWRQb3N0LmpzPzIyNTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlIGZyb20gXCIuLy4uL3N0eWxlcy9IZWFkUG9zdC5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuY29uc3QgSGVhZFBvc3QgPSAoKSA9PiB7XG4gIGNvbnN0IFtuZXdzLCBzZXROZXdzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAvLyAgIGRlYnVnZ2VyO1xuICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICAvLyBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChwcm9jZXNzLmVudi5BUElfSE9TVF9VUkwgKyBcImFydGljbGVzXCIpO1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHByb2Nlc3MuZW52LkhFUk9LVV9IT1NUX1VSTCArIFwiYXJ0aWNsZXNcIik7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgc2V0TmV3cyhkYXRhKTtcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoRGF0YSgpO1xuICB9LCBbXSk7XG4gIGlmIChsb2FkaW5nKSB7XG4gICAgcmV0dXJuIDxwPkRhdGEgaXMgbG9hZGluZy4uLjwvcD47XG4gIH1cbiAgY29uc3QgY29udmVydGVkRGF0ZSA9ICgpID0+IHtcbiAgICBjb25zdCBkYXRlQW5kVGltZSA9IG5ld3NbbmV3cy5sZW5ndGggLSAxXS5jcmVhdGVkX2F0O1xuXG4gICAgY29uc3Qgc3BsaXR0ZWREYXRlQW5kVGltZSA9IGRhdGVBbmRUaW1lLnNwbGl0KFwiXCIpO1xuXG4gICAgY29uc3Qgc2xpY2VkRGF0ZSA9IHNwbGl0dGVkRGF0ZUFuZFRpbWUuc2xpY2UoMCwgMTApO1xuXG4gICAgLy8gY29uc3Qgc2xpY2VkVGltZSA9IHNwbGl0dGVkRGF0ZUFuZFRpbWUuc2xpY2UoMTIsIDE5KTtcblxuICAgIGNvbnN0IGpvaW5lZERhdGUgPSBzbGljZWREYXRlLmpvaW4oXCJcIik7XG5cbiAgICAvLyBjb25zdCBqb2luZWRUaW1lID0gc2xpY2VkVGltZS5qb2luKFwiXCIpO1xuICAgIHJldHVybiBqb2luZWREYXRlO1xuICB9O1xuICBjb25zdCBzdWJDb250ZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IHBhcmFncmFwaCA9IG5ld3NbbmV3cy5sZW5ndGggLSAxXS5jb250ZW50O1xuICAgIGNvbnN0IHNwbGl0dGVkUGFyYWdyYXBoID0gcGFyYWdyYXBoLnNwbGl0KFwiIFwiKTtcbiAgICBjb25zdCBzbGljZWRQYXJhZ3JhcGggPSBzcGxpdHRlZFBhcmFncmFwaC5zbGljZSgwLCA0MCk7XG5cbiAgICBjb25zdCBqb2luZWRQYXJhZ3JhcGggPSBzbGljZWRQYXJhZ3JhcGguam9pbihcIixcIik7XG5cbiAgICBjb25zdCBqb2luZWRQYXJhZ3JhcGgyID0gam9pbmVkUGFyYWdyYXBoLnJlcGxhY2UoLywvZywgXCIgXCIpO1xuICAgIHJldHVybiBqb2luZWRQYXJhZ3JhcGgyO1xuICB9O1xuICAvLyBjb25zdCBjYXRlZ29yeU5hbWUgPSAoY2F0ZWdvcnkpID0+IHtcbiAgLy8gICBjb25zdCBmb3JtYXR0ZWRDYXRlZ29yeSA9XG4gIC8vICAgICBjYXRlZ29yeSA9PSBudWxsID8gKFxuICAvLyAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtZS0yIGNhdGVnb3J5XCI+T3RoZXJzPC9zcGFuPlxuICAvLyAgICAgKSA6IChcbiAgLy8gICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWUtMiBjYXRlZ29yeVwiPntjYXRlZ29yeS5uYW1lfTwvc3Bhbj5cbiAgLy8gICAgICk7XG4gIC8vICAgcmV0dXJuIGZvcm1hdHRlZENhdGVnb3J5O1xuICAvLyB9O1xuXG4gIGNvbnN0IGhlYWROZXdzID1cbiAgICBuZXdzLmxlbmd0aCA9PT0gMCA/IChcbiAgICAgIDxwPkxPQURJTkcuLi4uPC9wPlxuICAgICkgOiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRQb3N0SW1hZ2VcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlLmNhdGVnb3J5fT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInotMSBjYXRlZ29yeVwiPlxuICAgICAgICAgICAgICB7bmV3c1tuZXdzLmxlbmd0aCAtIDFdLmNhdGVnb3J5Lm5hbWV9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VDb250YWluZXJcIj5cbiAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICBzcmM9e25ld3NbbmV3cy5sZW5ndGggLSAxXS5pbWFnZS51cmx9XG4gICAgICAgICAgICAgIGxheW91dD1cInJlc3BvbnNpdmVcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXJcIlxuICAgICAgICAgICAgICB3aWR0aD17MTB9XG4gICAgICAgICAgICAgIGhlaWdodD17N31cbiAgICAgICAgICAgICAgYWx0PVwiSGVhZFBvc3RJbWFnZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwiYmxvY2txdW90ZS1mb290ZXIgbXQtMlwiPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEtc29saWQgZmEtdXNlciBtZS0xXCI+PC9pPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWUtMlwiPntuZXdzW25ld3MubGVuZ3RoIC0gMV0uYXV0aG9yLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEtc29saWQgZmEtY2FsZW5kYXItZGF5cyBtZS0xXCI+PC9pPlxuICAgICAgICAgICAgPHNwYW4+e2NvbnZlcnRlZERhdGUoKX08L3NwYW4+XG4gICAgICAgICAgPC9oNj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cImYyLWJvbGQgZnctYm9sZGVyIG10LTNcIj5cbiAgICAgICAgICB7bmV3c1tuZXdzLmxlbmd0aCAtIDFdLnRpdGxlfVxuICAgICAgICA8L2gzPlxuICAgICAgICB7LyogQ09OVEVOVCAqL31cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwibmV3LWxpbmUgZnMtNVwiPntzdWJDb250ZW50KCkgKyBcIiAuLi4uLi5cIn08L3A+XG5cbiAgICAgICAgPExpbmtcbiAgICAgICAgICBocmVmPXt7XG4gICAgICAgICAgICBwYXRobmFtZTogYC8ke25ld3NbbmV3cy5sZW5ndGggLSAxXS5jYXRlZ29yeS5uYW1lLnRvTG93ZXJDYXNlKCl9LyR7XG4gICAgICAgICAgICAgIG5ld3NbbmV3cy5sZW5ndGggLSAxXS5zbHVnXG4gICAgICAgICAgICB9YCxcbiAgICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICAgIHRpdGxlOiBuZXdzW25ld3MubGVuZ3RoIC0gMV0udGl0bGUsXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IG5ld3NbbmV3cy5sZW5ndGggLSAxXS5jb250ZW50LFxuICAgICAgICAgICAgICBhdXRob3I6IG5ld3NbbmV3cy5sZW5ndGggLSAxXS5hdXRob3IubmFtZSxcbiAgICAgICAgICAgICAgY2F0ZWdvcnk6IG5ld3NbbmV3cy5sZW5ndGggLSAxXS5jYXRlZ29yeS5uYW1lLFxuICAgICAgICAgICAgICBjcmVhdGVkX2F0OiBjb252ZXJ0ZWREYXRlKG5ld3NbbmV3cy5sZW5ndGggLSAxXS5jcmVhdGVkX2F0KSxcbiAgICAgICAgICAgICAgaW1hZ2U6IG5ld3NbbmV3cy5sZW5ndGggLSAxXS5pbWFnZS51cmwsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5SZWFkIE1vcmU8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5oZWFkUG9zdCArIFwiIG1iLTVcIn0+e2hlYWROZXdzfTwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZFBvc3Q7XG4iXSwibmFtZXMiOlsic3R5bGUiLCJJbWFnZSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTGluayIsIkhlYWRQb3N0IiwibmV3cyIsInNldE5ld3MiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImZldGNoRGF0YSIsInJlcyIsImRhdGEiLCJmZXRjaCIsInByb2Nlc3MiLCJlbnYiLCJIRVJPS1VfSE9TVF9VUkwiLCJqc29uIiwicCIsImNvbnZlcnRlZERhdGUiLCJkYXRlQW5kVGltZSIsImxlbmd0aCIsImNyZWF0ZWRfYXQiLCJzcGxpdHRlZERhdGVBbmRUaW1lIiwic3BsaXQiLCJzbGljZWREYXRlIiwic2xpY2UiLCJqb2luZWREYXRlIiwiam9pbiIsInN1YkNvbnRlbnQiLCJwYXJhZ3JhcGgiLCJjb250ZW50Iiwic3BsaXR0ZWRQYXJhZ3JhcGgiLCJzbGljZWRQYXJhZ3JhcGgiLCJqb2luZWRQYXJhZ3JhcGgiLCJqb2luZWRQYXJhZ3JhcGgyIiwicmVwbGFjZSIsImhlYWROZXdzIiwiZGl2IiwiY2xhc3NOYW1lIiwic3BhbiIsImNhdGVnb3J5IiwibmFtZSIsInNyYyIsImltYWdlIiwidXJsIiwibGF5b3V0Iiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJoNiIsImkiLCJhdXRob3IiLCJoMyIsInRpdGxlIiwiaHJlZiIsInBhdGhuYW1lIiwidG9Mb3dlckNhc2UiLCJzbHVnIiwicXVlcnkiLCJhIiwiaGVhZFBvc3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/HeadPost.js\n"));

/***/ })

});