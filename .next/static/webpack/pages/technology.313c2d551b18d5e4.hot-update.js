"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/technology",{

/***/ "./components/CategoryPage.js":
/*!************************************!*\
  !*** ./components/CategoryPage.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CategoryPage; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _home_nilaw_Desktop_newRangehaat_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_nilaw_Desktop_newRangehaat_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_nilaw_Desktop_newRangehaat_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction CategoryPage(param) {\n    var query = param.query;\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), category = ref[0], setCategory = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), isLoading = ref1[0], setLoading = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        console.log(\"CategoryPage\", query);\n        // setLoading(true);\n        var fetchData = function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_home_nilaw_Desktop_newRangehaat_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                return _home_nilaw_Desktop_newRangehaat_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.next = 2;\n                            return fetch(\"http://localhost:1337/\" + \"categories\" + query).then(function(res) {\n                                return res.json();\n                            }).then(function(data) {\n                                setCategory(data);\n                                setLoading(false);\n                            }).catch(function(error) {\n                                return console.log(\"ERROR\", error);\n                            });\n                        case 2:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return function fetchData() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        fetchData();\n    }, []);\n    if (isLoading) {\n        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n            children: \"Loading.....\"\n        }, void 0, false, {\n            fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/CategoryPage.js\",\n            lineNumber: 25,\n            columnNumber: 5\n        }, this);\n    }\n    var convertedDate = function(created_at) {\n        var dateAndTime = created_at;\n        var splittedDateAndTime = dateAndTime.split(\"\");\n        var slicedDate = splittedDateAndTime.slice(0, 10);\n        var joinedDate = slicedDate.join(\"\");\n        return joinedDate;\n    };\n    var subContent = function(content) {\n        if (content === null) {\n            return 0;\n        } else {\n            var formattedParagraph = content;\n            var splittedParagraph = formattedParagraph.split(\" \");\n            var slicedParagraph = splittedParagraph.slice(0, 25);\n            var joinedParagraph = slicedParagraph.join(\",\");\n            var joinedParagraph2 = joinedParagraph.replace(/,/g, \" \");\n            return joinedParagraph2;\n        }\n    };\n    var checkStatus = !category.articles ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n        children: \"Loading......\"\n    }, void 0, false, {\n        fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/CategoryPage.js\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"section\", {\n        className: \"mt-5\",\n        children: category.articles.map(function(param) {\n            var id = param.id, slug = param.slug, name = param.name, author = param.author, created_at = param.created_at, title = param.title, content = param.content, image = param.image;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"row flex-row w-100 col-12 col-lg-4 card mb-5 p-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"headPostImage col-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                className: \"position-absolute z-1\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                    className: \"me-1 category\",\n                                    children: category.name\n                                }, void 0, false, {\n                                    fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/CategoryPage.js\",\n                                    lineNumber: 64,\n                                    columnNumber: 18\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/CategoryPage.js\",\n                                lineNumber: 63,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"imageContainer\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                    src: \"http://localhost:1337\".concat(image.url),\n                                    layout: \"responsive\",\n                                    width: 10,\n                                    height: 7,\n                                    alt: \"test\"\n                                }, void 0, false, {\n                                    fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/CategoryPage.js\",\n                                    lineNumber: 67,\n                                    columnNumber: 17\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/CategoryPage.js\",\n                                lineNumber: 66,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h6\", {\n                                    className: \"blockquote-footer mt-2\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"i\", {\n                                            className: \"fa-solid fa-user me-1\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/CategoryPage.js\",\n                                            lineNumber: 77,\n                                            columnNumber: 19\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                            className: \"me-2\",\n                                            children: author.name\n                                        }, void 0, false, {\n                                            fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/CategoryPage.js\",\n                                            lineNumber: 78,\n                                            columnNumber: 19\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"i\", {\n                                            className: \"fa-solid fa-calendar-days me-1\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/CategoryPage.js\",\n                                            lineNumber: 79,\n                                            columnNumber: 19\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                            children: convertedDate(created_at)\n                                        }, void 0, false, {\n                                            fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/CategoryPage.js\",\n                                            lineNumber: 80,\n                                            columnNumber: 19\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/CategoryPage.js\",\n                                    lineNumber: 76,\n                                    columnNumber: 17\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/CategoryPage.js\",\n                                lineNumber: 75,\n                                columnNumber: 15\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/CategoryPage.js\",\n                        lineNumber: 62,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"col-9 card-body\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h5\", {\n                                className: \"card-title\",\n                                children: title\n                            }, void 0, false, {\n                                fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/CategoryPage.js\",\n                                lineNumber: 85,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                className: \"card-text new-line\",\n                                children: subContent(content) + \" ....\"\n                            }, void 0, false, {\n                                fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/CategoryPage.js\",\n                                lineNumber: 86,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                href: {\n                                    pathname: \"/\".concat(category.name.toLowerCase(), \"/\").concat(slug),\n                                    query: {\n                                        title: title,\n                                        content: content,\n                                        author: author.name,\n                                        category: category.name,\n                                        created_at: convertedDate(created_at),\n                                        image: image.url\n                                    }\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                    className: \"btn btn-primary\",\n                                    children: \"Read More\"\n                                }, void 0, false, {\n                                    fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/CategoryPage.js\",\n                                    lineNumber: 102,\n                                    columnNumber: 17\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/CategoryPage.js\",\n                                lineNumber: 89,\n                                columnNumber: 15\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/CategoryPage.js\",\n                        lineNumber: 84,\n                        columnNumber: 13\n                    }, _this)\n                ]\n            }, id, true, {\n                fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/CategoryPage.js\",\n                lineNumber: 58,\n                columnNumber: 11\n            }, _this);\n        })\n    }, void 0, false, {\n        fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/CategoryPage.js\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                className: \"row justify-content-center align-content-center mt-5 mb-5\",\n                children: category.name\n            }, void 0, false, {\n                fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/CategoryPage.js\",\n                lineNumber: 112,\n                columnNumber: 7\n            }, this),\n            checkStatus\n        ]\n    }, void 0, true);\n};\n_s(CategoryPage, \"e+Qj8lEadTQIYcROuVnJ4J/+oDY=\");\n_c = CategoryPage;\nvar _c;\n$RefreshReg$(_c, \"CategoryPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ckMsWUFBWTtBQUFaQSxLQUFBQSxZQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ2F0ZWdvcnlQYWdlLmpzP2FiYTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2F0ZWdvcnlQYWdlKHsgcXVlcnkgfSkge1xuICBjb25zdCBbY2F0ZWdvcnksIHNldENhdGVnb3J5XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJDYXRlZ29yeVBhZ2VcIiwgcXVlcnkpO1xuXG4gICAgLy8gc2V0TG9hZGluZyh0cnVlKTtcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICBhd2FpdCBmZXRjaChwcm9jZXNzLmVudi5BUElfSE9TVF9VUkwgKyBcImNhdGVnb3JpZXNcIiArIHF1ZXJ5KVxuICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHNldENhdGVnb3J5KGRhdGEpO1xuICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmxvZyhcIkVSUk9SXCIsIGVycm9yKSk7XG4gICAgfTtcbiAgICBmZXRjaERhdGEoKTtcbiAgfSwgW10pO1xuICBpZiAoaXNMb2FkaW5nKSB7XG4gICAgPHA+TG9hZGluZy4uLi4uPC9wPjtcbiAgfVxuXG4gIGNvbnN0IGNvbnZlcnRlZERhdGUgPSAoY3JlYXRlZF9hdCkgPT4ge1xuICAgIGNvbnN0IGRhdGVBbmRUaW1lID0gY3JlYXRlZF9hdDtcblxuICAgIGNvbnN0IHNwbGl0dGVkRGF0ZUFuZFRpbWUgPSBkYXRlQW5kVGltZS5zcGxpdChcIlwiKTtcblxuICAgIGNvbnN0IHNsaWNlZERhdGUgPSBzcGxpdHRlZERhdGVBbmRUaW1lLnNsaWNlKDAsIDEwKTtcblxuICAgIGNvbnN0IGpvaW5lZERhdGUgPSBzbGljZWREYXRlLmpvaW4oXCJcIik7XG5cbiAgICByZXR1cm4gam9pbmVkRGF0ZTtcbiAgfTtcblxuICBjb25zdCBzdWJDb250ZW50ID0gKGNvbnRlbnQpID0+IHtcbiAgICBpZiAoY29udGVudCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGZvcm1hdHRlZFBhcmFncmFwaCA9IGNvbnRlbnQ7XG4gICAgICBjb25zdCBzcGxpdHRlZFBhcmFncmFwaCA9IGZvcm1hdHRlZFBhcmFncmFwaC5zcGxpdChcIiBcIik7XG4gICAgICBjb25zdCBzbGljZWRQYXJhZ3JhcGggPSBzcGxpdHRlZFBhcmFncmFwaC5zbGljZSgwLCAyNSk7XG4gICAgICBjb25zdCBqb2luZWRQYXJhZ3JhcGggPSBzbGljZWRQYXJhZ3JhcGguam9pbihcIixcIik7XG4gICAgICBjb25zdCBqb2luZWRQYXJhZ3JhcGgyID0gam9pbmVkUGFyYWdyYXBoLnJlcGxhY2UoLywvZywgXCIgXCIpO1xuICAgICAgcmV0dXJuIGpvaW5lZFBhcmFncmFwaDI7XG4gICAgfVxuICB9O1xuICBjb25zdCBjaGVja1N0YXR1cyA9ICFjYXRlZ29yeS5hcnRpY2xlcyA/IChcbiAgICA8aDE+TG9hZGluZy4uLi4uLjwvaDE+XG4gICkgOiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibXQtNVwiPlxuICAgICAge2NhdGVnb3J5LmFydGljbGVzLm1hcChcbiAgICAgICAgKHsgaWQsIHNsdWcsIG5hbWUsIGF1dGhvciwgY3JlYXRlZF9hdCwgdGl0bGUsIGNvbnRlbnQsIGltYWdlIH0pID0+IChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJyb3cgZmxleC1yb3cgdy0xMDAgY29sLTEyIGNvbC1sZy00IGNhcmQgbWItNSBwLTJcIlxuICAgICAgICAgICAga2V5PXtpZH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRQb3N0SW1hZ2UgY29sLTJcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicG9zaXRpb24tYWJzb2x1dGUgei0xXCI+XG4gICAgICAgICAgICAgICAgezxzcGFuIGNsYXNzTmFtZT1cIm1lLTEgY2F0ZWdvcnlcIj57Y2F0ZWdvcnkubmFtZX08L3NwYW4+fVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VDb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgIHNyYz17YGh0dHA6Ly9sb2NhbGhvc3Q6MTMzNyR7aW1hZ2UudXJsfWB9XG4gICAgICAgICAgICAgICAgICBsYXlvdXQ9XCJyZXNwb25zaXZlXCJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPXsxMH1cbiAgICAgICAgICAgICAgICAgIGhlaWdodD17N31cbiAgICAgICAgICAgICAgICAgIGFsdD1cInRlc3RcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJibG9ja3F1b3RlLWZvb3RlciBtdC0yXCI+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYS1zb2xpZCBmYS11c2VyIG1lLTFcIj48L2k+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtZS0yXCI+e2F1dGhvci5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhLXNvbGlkIGZhLWNhbGVuZGFyLWRheXMgbWUtMVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPntjb252ZXJ0ZWREYXRlKGNyZWF0ZWRfYXQpfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2g2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtOSBjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj57dGl0bGV9PC9oNT5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0IG5ldy1saW5lXCI+XG4gICAgICAgICAgICAgICAge3N1YkNvbnRlbnQoY29udGVudCkgKyBcIiAuLi4uXCJ9XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICBocmVmPXt7XG4gICAgICAgICAgICAgICAgICBwYXRobmFtZTogYC8ke2NhdGVnb3J5Lm5hbWUudG9Mb3dlckNhc2UoKX0vJHtzbHVnfWAsXG4gICAgICAgICAgICAgICAgICBxdWVyeToge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudCxcbiAgICAgICAgICAgICAgICAgICAgYXV0aG9yOiBhdXRob3IubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IGNhdGVnb3J5Lm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZWRfYXQ6IGNvbnZlcnRlZERhdGUoY3JlYXRlZF9hdCksXG4gICAgICAgICAgICAgICAgICAgIGltYWdlOiBpbWFnZS51cmwsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5SZWFkIE1vcmU8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgICApfVxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWNvbnRlbnQtY2VudGVyIG10LTUgbWItNVwiPlxuICAgICAgICB7Y2F0ZWdvcnkubmFtZX1cbiAgICAgIDwvaDE+XG4gICAgICB7Y2hlY2tTdGF0dXN9XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJMaW5rIiwiSW1hZ2UiLCJ1c2VSb3V0ZXIiLCJDYXRlZ29yeVBhZ2UiLCJxdWVyeSIsImNhdGVnb3J5Iiwic2V0Q2F0ZWdvcnkiLCJpc0xvYWRpbmciLCJzZXRMb2FkaW5nIiwiY29uc29sZSIsImxvZyIsImZldGNoRGF0YSIsImZldGNoIiwicHJvY2VzcyIsImVudiIsIkFQSV9IT1NUX1VSTCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsImNhdGNoIiwiZXJyb3IiLCJwIiwiY29udmVydGVkRGF0ZSIsImNyZWF0ZWRfYXQiLCJkYXRlQW5kVGltZSIsInNwbGl0dGVkRGF0ZUFuZFRpbWUiLCJzcGxpdCIsInNsaWNlZERhdGUiLCJzbGljZSIsImpvaW5lZERhdGUiLCJqb2luIiwic3ViQ29udGVudCIsImNvbnRlbnQiLCJmb3JtYXR0ZWRQYXJhZ3JhcGgiLCJzcGxpdHRlZFBhcmFncmFwaCIsInNsaWNlZFBhcmFncmFwaCIsImpvaW5lZFBhcmFncmFwaCIsImpvaW5lZFBhcmFncmFwaDIiLCJyZXBsYWNlIiwiY2hlY2tTdGF0dXMiLCJhcnRpY2xlcyIsImgxIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsIm1hcCIsImlkIiwic2x1ZyIsIm5hbWUiLCJhdXRob3IiLCJ0aXRsZSIsImltYWdlIiwiZGl2Iiwic3BhbiIsInNyYyIsInVybCIsImxheW91dCIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0IiwiaDYiLCJpIiwiaDUiLCJocmVmIiwicGF0aG5hbWUiLCJ0b0xvd2VyQ2FzZSIsImEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/CategoryPage.js\n"));

/***/ })

});