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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _home_nilaw_Desktop_newRangehaat_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_nilaw_Desktop_newRangehaat_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_nilaw_Desktop_newRangehaat_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_HeadPost_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../styles/HeadPost.module.css */ \"./styles/HeadPost.module.css\");\n/* harmony import */ var _styles_HeadPost_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_HeadPost_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar HeadPost = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]), news = ref[0], setNews = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), loading = ref1[0], setLoading = ref1[1];\n    //   debugger;\n    var fetchData = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_home_nilaw_Desktop_newRangehaat_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var res, data;\n            return _home_nilaw_Desktop_newRangehaat_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        setLoading(true);\n                        _ctx.next = 3;\n                        return fetch(\"https://rangehaatserver.herokuapp.com/\" + \"articles\");\n                    case 3:\n                        res = _ctx.sent;\n                        _ctx.next = 6;\n                        return res.json();\n                    case 6:\n                        data = _ctx.sent;\n                        setNews(data);\n                        setLoading(false);\n                    case 9:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function fetchData() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        fetchData();\n    }, []);\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n            children: \"Data is loading...\"\n        }, void 0, false, {\n            fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/HeadPost.js\",\n            lineNumber: 23,\n            columnNumber: 12\n        }, _this);\n    }\n    var convertedDate = function() {\n        var dateAndTime = news[news.length - 1].created_at;\n        var splittedDateAndTime = dateAndTime.split(\"\");\n        var slicedDate = splittedDateAndTime.slice(0, 10);\n        // const slicedTime = splittedDateAndTime.slice(12, 19);\n        var joinedDate = slicedDate.join(\"\");\n        // const joinedTime = slicedTime.join(\"\");\n        return joinedDate;\n    };\n    var subContent = function() {\n        var paragraph = news[news.length - 1].content;\n        var splittedParagraph = paragraph.split(\" \");\n        var slicedParagraph = splittedParagraph.slice(0, 40);\n        var joinedParagraph = slicedParagraph.join(\",\");\n        var joinedParagraph2 = joinedParagraph.replace(/,/g, \" \");\n        return joinedParagraph2;\n    };\n    // const categoryName = (category) => {\n    //   const formattedCategory =\n    //     category == null ? (\n    //       <span className=\"me-2 category\">Others</span>\n    //     ) : (\n    //       <span className=\"me-2 category\">{category.name}</span>\n    //     );\n    //   return formattedCategory;\n    // };\n    var headNews = news.length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n        children: \"LOADING....\"\n    }, void 0, false, {\n        fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/HeadPost.js\",\n        lineNumber: 61,\n        columnNumber: 7\n    }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"border p-2 border-3\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"headPostImage \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                        className: (_styles_HeadPost_module_css__WEBPACK_IMPORTED_MODULE_6___default().category),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                            className: \"z-1 category\",\n                            children: news[news.length - 1].category.name\n                        }, void 0, false, {\n                            fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/HeadPost.js\",\n                            lineNumber: 66,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/HeadPost.js\",\n                        lineNumber: 65,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"position-relative headImageContainer bg-dark\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: news[news.length - 1].image.url,\n                            layout: \"fill\",\n                            objectFit: \"contain\",\n                            className: \"border\",\n                            alt: \"HeadPostImage\"\n                        }, void 0, false, {\n                            fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/HeadPost.js\",\n                            lineNumber: 71,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/HeadPost.js\",\n                        lineNumber: 70,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/HeadPost.js\",\n                lineNumber: 64,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h6\", {\n                    className: \"blockquote-footer mt-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"i\", {\n                            className: \"fa-solid fa-user me-1\"\n                        }, void 0, false, {\n                            fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/HeadPost.js\",\n                            lineNumber: 82,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                            className: \"me-2\",\n                            children: news[news.length - 1].author.name\n                        }, void 0, false, {\n                            fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/HeadPost.js\",\n                            lineNumber: 83,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"i\", {\n                            className: \"fa-solid fa-calendar-days me-1\"\n                        }, void 0, false, {\n                            fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/HeadPost.js\",\n                            lineNumber: 84,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                            children: convertedDate()\n                        }, void 0, false, {\n                            fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/HeadPost.js\",\n                            lineNumber: 85,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/HeadPost.js\",\n                    lineNumber: 81,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/HeadPost.js\",\n                lineNumber: 80,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                className: \"fw-bolder mt-3\",\n                children: news[news.length - 1].title\n            }, void 0, false, {\n                fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/HeadPost.js\",\n                lineNumber: 89,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                className: \"new-line fs-5\",\n                children: subContent() + \" ......\"\n            }, void 0, false, {\n                fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/HeadPost.js\",\n                lineNumber: 91,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                href: {\n                    pathname: \"/\".concat(news[news.length - 1].category.name.toLowerCase(), \"/\").concat(news[news.length - 1].slug),\n                    query: {\n                        title: news[news.length - 1].title,\n                        content: news[news.length - 1].content,\n                        author: news[news.length - 1].author.name,\n                        category: news[news.length - 1].category.name,\n                        created_at: convertedDate(news[news.length - 1].created_at),\n                        image: news[news.length - 1].image.url\n                    }\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                    className: \"btn btn-primary\",\n                    children: \"Read More\"\n                }, void 0, false, {\n                    fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/HeadPost.js\",\n                    lineNumber: 108,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/HeadPost.js\",\n                lineNumber: 93,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/HeadPost.js\",\n        lineNumber: 63,\n        columnNumber: 7\n    }, _this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: (_styles_HeadPost_module_css__WEBPACK_IMPORTED_MODULE_6___default().headPost) + \" mb-5\",\n            children: headNews\n        }, void 0, false, {\n            fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/HeadPost.js\",\n            lineNumber: 114,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false);\n};\n_s(HeadPost, \"e+Qj8lEadTQIYcROuVnJ4J/+oDY=\");\n_c = HeadPost;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HeadPost);\nvar _c;\n$RefreshReg$(_c, \"HeadPost\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFTOzs7Ozt5QkFBSTs7Ozs7cUJBQ3ZDOzs7Ozs7YUFDSDtJQUVWLHFCQUNFO2tCQUNFLDRFQUFDRCxLQUFHO1lBQUNDLFNBQVMsRUFBRXZDLDZFQUFjLEdBQUcsT0FBTztzQkFBR3FDLFFBQVE7Ozs7O2lCQUFPO3FCQUN6RCxDQUNIO0NBQ0g7R0EvR0toQyxRQUFRO0FBQVJBLEtBQUFBLFFBQVE7QUFpSGQsK0RBQWVBLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0hlYWRQb3N0LmpzPzIyNTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlIGZyb20gXCIuLy4uL3N0eWxlcy9IZWFkUG9zdC5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuY29uc3QgSGVhZFBvc3QgPSAoKSA9PiB7XG4gIGNvbnN0IFtuZXdzLCBzZXROZXdzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAvLyAgIGRlYnVnZ2VyO1xuICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICAvLyBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChwcm9jZXNzLmVudi5BUElfSE9TVF9VUkwgKyBcImFydGljbGVzXCIpO1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHByb2Nlc3MuZW52LkhFUk9LVV9IT1NUX1VSTCArIFwiYXJ0aWNsZXNcIik7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgc2V0TmV3cyhkYXRhKTtcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoRGF0YSgpO1xuICB9LCBbXSk7XG4gIGlmIChsb2FkaW5nKSB7XG4gICAgcmV0dXJuIDxwPkRhdGEgaXMgbG9hZGluZy4uLjwvcD47XG4gIH1cbiAgY29uc3QgY29udmVydGVkRGF0ZSA9ICgpID0+IHtcbiAgICBjb25zdCBkYXRlQW5kVGltZSA9IG5ld3NbbmV3cy5sZW5ndGggLSAxXS5jcmVhdGVkX2F0O1xuXG4gICAgY29uc3Qgc3BsaXR0ZWREYXRlQW5kVGltZSA9IGRhdGVBbmRUaW1lLnNwbGl0KFwiXCIpO1xuXG4gICAgY29uc3Qgc2xpY2VkRGF0ZSA9IHNwbGl0dGVkRGF0ZUFuZFRpbWUuc2xpY2UoMCwgMTApO1xuXG4gICAgLy8gY29uc3Qgc2xpY2VkVGltZSA9IHNwbGl0dGVkRGF0ZUFuZFRpbWUuc2xpY2UoMTIsIDE5KTtcblxuICAgIGNvbnN0IGpvaW5lZERhdGUgPSBzbGljZWREYXRlLmpvaW4oXCJcIik7XG5cbiAgICAvLyBjb25zdCBqb2luZWRUaW1lID0gc2xpY2VkVGltZS5qb2luKFwiXCIpO1xuICAgIHJldHVybiBqb2luZWREYXRlO1xuICB9O1xuICBjb25zdCBzdWJDb250ZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IHBhcmFncmFwaCA9IG5ld3NbbmV3cy5sZW5ndGggLSAxXS5jb250ZW50O1xuICAgIGNvbnN0IHNwbGl0dGVkUGFyYWdyYXBoID0gcGFyYWdyYXBoLnNwbGl0KFwiIFwiKTtcbiAgICBjb25zdCBzbGljZWRQYXJhZ3JhcGggPSBzcGxpdHRlZFBhcmFncmFwaC5zbGljZSgwLCA0MCk7XG5cbiAgICBjb25zdCBqb2luZWRQYXJhZ3JhcGggPSBzbGljZWRQYXJhZ3JhcGguam9pbihcIixcIik7XG5cbiAgICBjb25zdCBqb2luZWRQYXJhZ3JhcGgyID0gam9pbmVkUGFyYWdyYXBoLnJlcGxhY2UoLywvZywgXCIgXCIpO1xuICAgIHJldHVybiBqb2luZWRQYXJhZ3JhcGgyO1xuICB9O1xuICAvLyBjb25zdCBjYXRlZ29yeU5hbWUgPSAoY2F0ZWdvcnkpID0+IHtcbiAgLy8gICBjb25zdCBmb3JtYXR0ZWRDYXRlZ29yeSA9XG4gIC8vICAgICBjYXRlZ29yeSA9PSBudWxsID8gKFxuICAvLyAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtZS0yIGNhdGVnb3J5XCI+T3RoZXJzPC9zcGFuPlxuICAvLyAgICAgKSA6IChcbiAgLy8gICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWUtMiBjYXRlZ29yeVwiPntjYXRlZ29yeS5uYW1lfTwvc3Bhbj5cbiAgLy8gICAgICk7XG4gIC8vICAgcmV0dXJuIGZvcm1hdHRlZENhdGVnb3J5O1xuICAvLyB9O1xuXG4gIGNvbnN0IGhlYWROZXdzID1cbiAgICBuZXdzLmxlbmd0aCA9PT0gMCA/IChcbiAgICAgIDxwPkxPQURJTkcuLi4uPC9wPlxuICAgICkgOiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlciBwLTIgYm9yZGVyLTNcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkUG9zdEltYWdlIFwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGUuY2F0ZWdvcnl9PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiei0xIGNhdGVnb3J5XCI+XG4gICAgICAgICAgICAgIHtuZXdzW25ld3MubGVuZ3RoIC0gMV0uY2F0ZWdvcnkubmFtZX1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3NpdGlvbi1yZWxhdGl2ZSBoZWFkSW1hZ2VDb250YWluZXIgYmctZGFya1wiPlxuICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgIHNyYz17bmV3c1tuZXdzLmxlbmd0aCAtIDFdLmltYWdlLnVybH1cbiAgICAgICAgICAgICAgbGF5b3V0PVwiZmlsbFwiXG4gICAgICAgICAgICAgIG9iamVjdEZpdD1cImNvbnRhaW5cIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXJcIlxuICAgICAgICAgICAgICBhbHQ9XCJIZWFkUG9zdEltYWdlXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJibG9ja3F1b3RlLWZvb3RlciBtdC0yXCI+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYS1zb2xpZCBmYS11c2VyIG1lLTFcIj48L2k+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtZS0yXCI+e25ld3NbbmV3cy5sZW5ndGggLSAxXS5hdXRob3IubmFtZX08L3NwYW4+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYS1zb2xpZCBmYS1jYWxlbmRhci1kYXlzIG1lLTFcIj48L2k+XG4gICAgICAgICAgICA8c3Bhbj57Y29udmVydGVkRGF0ZSgpfTwvc3Bhbj5cbiAgICAgICAgICA8L2g2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgey8qIEhFQUQgUE9TVCBUSVRMRSAqL31cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZ3LWJvbGRlciBtdC0zXCI+e25ld3NbbmV3cy5sZW5ndGggLSAxXS50aXRsZX08L2gzPlxuICAgICAgICB7LyogSEVBRCBQT1NUIENPTlRFTlQgKi99XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIm5ldy1saW5lIGZzLTVcIj57c3ViQ29udGVudCgpICsgXCIgLi4uLi4uXCJ9PC9wPlxuXG4gICAgICAgIDxMaW5rXG4gICAgICAgICAgaHJlZj17e1xuICAgICAgICAgICAgcGF0aG5hbWU6IGAvJHtuZXdzW25ld3MubGVuZ3RoIC0gMV0uY2F0ZWdvcnkubmFtZS50b0xvd2VyQ2FzZSgpfS8ke1xuICAgICAgICAgICAgICBuZXdzW25ld3MubGVuZ3RoIC0gMV0uc2x1Z1xuICAgICAgICAgICAgfWAsXG4gICAgICAgICAgICBxdWVyeToge1xuICAgICAgICAgICAgICB0aXRsZTogbmV3c1tuZXdzLmxlbmd0aCAtIDFdLnRpdGxlLFxuICAgICAgICAgICAgICBjb250ZW50OiBuZXdzW25ld3MubGVuZ3RoIC0gMV0uY29udGVudCxcbiAgICAgICAgICAgICAgYXV0aG9yOiBuZXdzW25ld3MubGVuZ3RoIC0gMV0uYXV0aG9yLm5hbWUsXG4gICAgICAgICAgICAgIGNhdGVnb3J5OiBuZXdzW25ld3MubGVuZ3RoIC0gMV0uY2F0ZWdvcnkubmFtZSxcbiAgICAgICAgICAgICAgY3JlYXRlZF9hdDogY29udmVydGVkRGF0ZShuZXdzW25ld3MubGVuZ3RoIC0gMV0uY3JlYXRlZF9hdCksXG4gICAgICAgICAgICAgIGltYWdlOiBuZXdzW25ld3MubGVuZ3RoIC0gMV0uaW1hZ2UudXJsLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+UmVhZCBNb3JlPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuaGVhZFBvc3QgKyBcIiBtYi01XCJ9PntoZWFkTmV3c308L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRQb3N0O1xuIl0sIm5hbWVzIjpbInN0eWxlIiwiSW1hZ2UiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkxpbmsiLCJIZWFkUG9zdCIsIm5ld3MiLCJzZXROZXdzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJmZXRjaERhdGEiLCJyZXMiLCJkYXRhIiwiZmV0Y2giLCJwcm9jZXNzIiwiZW52IiwiSEVST0tVX0hPU1RfVVJMIiwianNvbiIsInAiLCJjb252ZXJ0ZWREYXRlIiwiZGF0ZUFuZFRpbWUiLCJsZW5ndGgiLCJjcmVhdGVkX2F0Iiwic3BsaXR0ZWREYXRlQW5kVGltZSIsInNwbGl0Iiwic2xpY2VkRGF0ZSIsInNsaWNlIiwiam9pbmVkRGF0ZSIsImpvaW4iLCJzdWJDb250ZW50IiwicGFyYWdyYXBoIiwiY29udGVudCIsInNwbGl0dGVkUGFyYWdyYXBoIiwic2xpY2VkUGFyYWdyYXBoIiwiam9pbmVkUGFyYWdyYXBoIiwiam9pbmVkUGFyYWdyYXBoMiIsInJlcGxhY2UiLCJoZWFkTmV3cyIsImRpdiIsImNsYXNzTmFtZSIsInNwYW4iLCJjYXRlZ29yeSIsIm5hbWUiLCJzcmMiLCJpbWFnZSIsInVybCIsImxheW91dCIsIm9iamVjdEZpdCIsImFsdCIsImg2IiwiaSIsImF1dGhvciIsImgzIiwidGl0bGUiLCJocmVmIiwicGF0aG5hbWUiLCJ0b0xvd2VyQ2FzZSIsInNsdWciLCJxdWVyeSIsImEiLCJoZWFkUG9zdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/HeadPost.js\n"));

/***/ })

});