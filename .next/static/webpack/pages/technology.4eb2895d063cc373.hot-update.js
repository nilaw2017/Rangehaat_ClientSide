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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CategoryPage; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _home_nilaw_Desktop_newRangehaat_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_nilaw_Desktop_newRangehaat_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_nilaw_Desktop_newRangehaat_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction CategoryPage(param) {\n    var query = param.query;\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), category = ref[0], setCategory = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), isLoading = ref1[0], setLoading = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        console.log(\"CategoryPage\", query);\n        // setLoading(true);\n        var fetchData = function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_home_nilaw_Desktop_newRangehaat_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                return _home_nilaw_Desktop_newRangehaat_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.next = 2;\n                            return fetch(\"http://localhost:1337/\" + \"categories\" + query).then(function(res) {\n                                return res.json();\n                            }).then(function(data) {\n                                setCategory(data);\n                                setLoading(false);\n                            }).catch(function(error) {\n                                return console.log(\"ERROR\", error);\n                            });\n                        case 2:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return function fetchData() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        fetchData();\n    }, []);\n    if (isLoading) {\n        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n            children: \"Loading.....\"\n        }, void 0, false, {\n            fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/CategoryPage.js\",\n            lineNumber: 25,\n            columnNumber: 5\n        }, this);\n    }\n    var convertedDate = function(created_at) {\n        var dateAndTime = created_at;\n        var splittedDateAndTime = dateAndTime.split(\"\");\n        var slicedDate = splittedDateAndTime.slice(0, 10);\n        var joinedDate = slicedDate.join(\"\");\n        return joinedDate;\n    };\n    var checkStatus = !category.articles ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n        children: \"Loading......\"\n    }, void 0, false, {\n        fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/CategoryPage.js\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"section\", {\n        className: \"mt-5\",\n        children: category.articles.map(function(param) {\n            var id = param.id, slug = param.slug, name = param.name, author = param.author, created_at = param.created_at, title = param.title, content = param.content, image = param.image;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"row w-100 col-12 col-lg-4 card mb-5 p-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"headPostImage col-3\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                className: \"position-absolute z-1\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                    className: \"me-1 category\",\n                                    children: category.name\n                                }, void 0, false, {\n                                    fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/CategoryPage.js\",\n                                    lineNumber: 48,\n                                    columnNumber: 18\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/CategoryPage.js\",\n                                lineNumber: 47,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"imageContainer\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                    src: \"http://localhost:1337\".concat(image.url),\n                                    layout: \"responsive\",\n                                    width: 10,\n                                    height: 7,\n                                    alt: \"test\"\n                                }, void 0, false, {\n                                    fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/CategoryPage.js\",\n                                    lineNumber: 51,\n                                    columnNumber: 17\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/CategoryPage.js\",\n                                lineNumber: 50,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h6\", {\n                                    className: \"blockquote-footer mt-2\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"i\", {\n                                            className: \"fa-solid fa-user me-1\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/CategoryPage.js\",\n                                            lineNumber: 61,\n                                            columnNumber: 19\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                            className: \"me-2\",\n                                            children: author.name\n                                        }, void 0, false, {\n                                            fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/CategoryPage.js\",\n                                            lineNumber: 62,\n                                            columnNumber: 19\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"i\", {\n                                            className: \"fa-solid fa-calendar-days me-1\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/CategoryPage.js\",\n                                            lineNumber: 63,\n                                            columnNumber: 19\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                            children: convertedDate(created_at)\n                                        }, void 0, false, {\n                                            fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/CategoryPage.js\",\n                                            lineNumber: 64,\n                                            columnNumber: 19\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/CategoryPage.js\",\n                                    lineNumber: 60,\n                                    columnNumber: 17\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/CategoryPage.js\",\n                                lineNumber: 59,\n                                columnNumber: 15\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/CategoryPage.js\",\n                        lineNumber: 46,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"col-9 card-body\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h5\", {\n                                className: \"card-title\",\n                                children: title\n                            }, void 0, false, {\n                                fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/CategoryPage.js\",\n                                lineNumber: 69,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                className: \"card-text new-line\"\n                            }, void 0, false, {\n                                fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/CategoryPage.js\",\n                                lineNumber: 70,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                href: {\n                                    pathname: \"/\".concat(category.name.toLowerCase(), \"/\").concat(slug),\n                                    query: {\n                                        title: title,\n                                        content: content,\n                                        author: author.name,\n                                        category: category.name,\n                                        created_at: convertedDate(created_at),\n                                        image: image.url\n                                    }\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                    className: \"btn btn-primary\",\n                                    children: \"Read More\"\n                                }, void 0, false, {\n                                    fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/CategoryPage.js\",\n                                    lineNumber: 86,\n                                    columnNumber: 17\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/CategoryPage.js\",\n                                lineNumber: 73,\n                                columnNumber: 15\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/CategoryPage.js\",\n                        lineNumber: 68,\n                        columnNumber: 13\n                    }, _this)\n                ]\n            }, id, true, {\n                fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/CategoryPage.js\",\n                lineNumber: 45,\n                columnNumber: 11\n            }, _this);\n        })\n    }, void 0, false, {\n        fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/CategoryPage.js\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                className: \"row justify-content-center align-content-center mt-5 mb-5\",\n                children: category.name\n            }, void 0, false, {\n                fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/CategoryPage.js\",\n                lineNumber: 96,\n                columnNumber: 7\n            }, this),\n            checkStatus\n        ]\n    }, void 0, true);\n};\n_s(CategoryPage, \"e+Qj8lEadTQIYcROuVnJ4J/+oDY=\");\n_c = CategoryPage;\nvar _c;\n$RefreshReg$(_c, \"CategoryPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhdGVnb3J5UGFnZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7QUFBNEM7QUFDZjtBQUNFO0FBQ1M7O0FBRXpCLFNBQVNLLFlBQVksQ0FBQyxLQUFTLEVBQUU7UUFBWCxLQUFPLEdBQVAsS0FBUyxDQUFQQyxLQUFLOzs7SUFDMUMsSUFBZ0NOLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFBckNPLFFBQVEsR0FBaUJQLEdBQVksR0FBN0IsRUFBRVEsV0FBVyxHQUFJUixHQUFZLEdBQWhCO0lBQzVCLElBQWdDQSxJQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBQXhDUyxTQUFTLEdBQWdCVCxJQUFlLEdBQS9CLEVBQUVVLFVBQVUsR0FBSVYsSUFBZSxHQUFuQjtJQUM1QkMsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2RVLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsRUFBRU4sS0FBSyxDQUFDLENBQUM7UUFFbkMsb0JBQW9CO1FBQ3BCLElBQU1PLFNBQVM7dUJBQUcsMFBBQVk7Ozs7O21DQUN0QkMsS0FBSyxDQUFDQyx3QkFBd0IsR0FBRyxZQUFZLEdBQUdULEtBQUssQ0FBQyxDQUN6RFksSUFBSSxDQUFDLFNBQUNDLEdBQUc7dUNBQUtBLEdBQUcsQ0FBQ0MsSUFBSSxFQUFFOzZCQUFBLENBQUMsQ0FDekJGLElBQUksQ0FBQyxTQUFDRyxJQUFJLEVBQUs7Z0NBQ2RiLFdBQVcsQ0FBQ2EsSUFBSSxDQUFDLENBQUM7Z0NBQ2xCWCxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7NkJBQ25CLENBQUMsQ0FDRFksS0FBSyxDQUFDLFNBQUNDLEtBQUs7dUNBQUtaLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLE9BQU8sRUFBRVcsS0FBSyxDQUFDOzZCQUFBLENBQUM7Ozs7OzthQUNqRDs0QkFSS1YsU0FBUzs7O1dBUWQ7UUFDREEsU0FBUyxFQUFFLENBQUM7S0FDYixFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ1AsSUFBSUosU0FBUyxFQUFFO3NCQUNiLDhEQUFDZSxHQUFDO3NCQUFDLGNBQVk7Ozs7O2dCQUFJLENBQUM7S0FDckI7SUFFRCxJQUFNQyxhQUFhLEdBQUcsU0FBQ0MsVUFBVSxFQUFLO1FBQ3BDLElBQU1DLFdBQVcsR0FBR0QsVUFBVTtRQUU5QixJQUFNRSxtQkFBbUIsR0FBR0QsV0FBVyxDQUFDRSxLQUFLLENBQUMsRUFBRSxDQUFDO1FBRWpELElBQU1DLFVBQVUsR0FBR0YsbUJBQW1CLENBQUNHLEtBQUssQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBRW5ELElBQU1DLFVBQVUsR0FBR0YsVUFBVSxDQUFDRyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBRXRDLE9BQU9ELFVBQVUsQ0FBQztLQUNuQjtJQUNELElBQU1FLFdBQVcsR0FBRyxDQUFDM0IsUUFBUSxDQUFDNEIsUUFBUSxpQkFDcEMsOERBQUNDLElBQUU7a0JBQUMsZUFBYTs7Ozs7WUFBSyxpQkFFdEIsOERBQUNDLFNBQU87UUFBQ0MsU0FBUyxFQUFDLE1BQU07a0JBQ3RCL0IsUUFBUSxDQUFDNEIsUUFBUSxDQUFDSSxHQUFHLENBQ3BCO2dCQUFHQyxFQUFFLFNBQUZBLEVBQUUsRUFBRUMsSUFBSSxTQUFKQSxJQUFJLEVBQUVDLElBQUksU0FBSkEsSUFBSSxFQUFFQyxNQUFNLFNBQU5BLE1BQU0sRUFBRWpCLFVBQVUsU0FBVkEsVUFBVSxFQUFFa0IsS0FBSyxTQUFMQSxLQUFLLEVBQUVDLE9BQU8sU0FBUEEsT0FBTyxFQUFFQyxLQUFLLFNBQUxBLEtBQUs7aUNBQzFELDhEQUFDQyxLQUFHO2dCQUFDVCxTQUFTLEVBQUMseUNBQXlDOztrQ0FDdEQsOERBQUNTLEtBQUc7d0JBQUNULFNBQVMsRUFBQyxxQkFBcUI7OzBDQUNsQyw4REFBQ1UsTUFBSTtnQ0FBQ1YsU0FBUyxFQUFDLHVCQUF1QjswQ0FDcEMsNEVBQUNVLE1BQUk7b0NBQUNWLFNBQVMsRUFBQyxlQUFlOzhDQUFFL0IsUUFBUSxDQUFDbUMsSUFBSTs7Ozs7eUNBQVE7Ozs7O3FDQUNsRDswQ0FDUCw4REFBQ0ssS0FBRztnQ0FBQ1QsU0FBUyxFQUFDLGdCQUFnQjswQ0FDN0IsNEVBQUNuQyxtREFBSztvQ0FDSjhDLEdBQUcsRUFBRSx1QkFBc0IsQ0FBWSxPQUFWSCxLQUFLLENBQUNJLEdBQUcsQ0FBRTtvQ0FDeENDLE1BQU0sRUFBQyxZQUFZO29DQUNuQkMsS0FBSyxFQUFFLEVBQUU7b0NBQ1RDLE1BQU0sRUFBRSxDQUFDO29DQUNUQyxHQUFHLEVBQUMsTUFBTTs7Ozs7eUNBQ1Y7Ozs7O3FDQUNFOzBDQUNOLDhEQUFDUCxLQUFHOzBDQUNGLDRFQUFDUSxJQUFFO29DQUFDakIsU0FBUyxFQUFDLHdCQUF3Qjs7c0RBQ3BDLDhEQUFDa0IsR0FBQzs0Q0FBQ2xCLFNBQVMsRUFBQyx1QkFBdUI7Ozs7O2lEQUFLO3NEQUN6Qyw4REFBQ1UsTUFBSTs0Q0FBQ1YsU0FBUyxFQUFDLE1BQU07c0RBQUVLLE1BQU0sQ0FBQ0QsSUFBSTs7Ozs7aURBQVE7c0RBQzNDLDhEQUFDYyxHQUFDOzRDQUFDbEIsU0FBUyxFQUFDLGdDQUFnQzs7Ozs7aURBQUs7c0RBQ2xELDhEQUFDVSxNQUFJO3NEQUFFdkIsYUFBYSxDQUFDQyxVQUFVLENBQUM7Ozs7O2lEQUFROzs7Ozs7eUNBQ3JDOzs7OztxQ0FDRDs7Ozs7OzZCQUNGO2tDQUNOLDhEQUFDcUIsS0FBRzt3QkFBQ1QsU0FBUyxFQUFDLGlCQUFpQjs7MENBQzlCLDhEQUFDbUIsSUFBRTtnQ0FBQ25CLFNBQVMsRUFBQyxZQUFZOzBDQUFFTSxLQUFLOzs7OztxQ0FBTTswQ0FDdkMsOERBQUNwQixHQUFDO2dDQUFDYyxTQUFTLEVBQUMsb0JBQW9COzs7OztxQ0FFN0I7MENBQ0osOERBQUNwQyxrREFBSTtnQ0FDSHdELElBQUksRUFBRTtvQ0FDSkMsUUFBUSxFQUFFLEdBQUUsQ0FBaUNsQixNQUFJLENBQW5DbEMsUUFBUSxDQUFDbUMsSUFBSSxDQUFDa0IsV0FBVyxFQUFFLEVBQUMsR0FBQyxDQUFPLFFBQUxuQixJQUFJLENBQUU7b0NBQ25EbkMsS0FBSyxFQUFFO3dDQUNMc0MsS0FBSyxFQUFMQSxLQUFLO3dDQUNMQyxPQUFPLEVBQVBBLE9BQU87d0NBQ1BGLE1BQU0sRUFBRUEsTUFBTSxDQUFDRCxJQUFJO3dDQUNuQm5DLFFBQVEsRUFBRUEsUUFBUSxDQUFDbUMsSUFBSTt3Q0FDdkJoQixVQUFVLEVBQUVELGFBQWEsQ0FBQ0MsVUFBVSxDQUFDO3dDQUNyQ29CLEtBQUssRUFBRUEsS0FBSyxDQUFDSSxHQUFHO3FDQUNqQjtpQ0FDRjswQ0FFRCw0RUFBQ1csR0FBQztvQ0FBQ3ZCLFNBQVMsRUFBQyxpQkFBaUI7OENBQUMsV0FBUzs7Ozs7eUNBQUk7Ozs7O3FDQUN2Qzs7Ozs7OzZCQUNIOztlQTNDc0RFLEVBQUU7Ozs7cUJBNEMxRDtTQUNQLENBQ0Y7Ozs7O1lBQ087SUFFWixxQkFDRTs7MEJBQ0UsOERBQUNKLElBQUU7Z0JBQUNFLFNBQVMsRUFBQywyREFBMkQ7MEJBQ3RFL0IsUUFBUSxDQUFDbUMsSUFBSTs7Ozs7b0JBQ1g7WUFDSlIsV0FBVzs7b0JBQ1gsQ0FDSDtDQUNIO0dBaEd1QjdCLFlBQVk7QUFBWkEsS0FBQUEsWUFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NhdGVnb3J5UGFnZS5qcz9hYmE2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhdGVnb3J5UGFnZSh7IHF1ZXJ5IH0pIHtcbiAgY29uc3QgW2NhdGVnb3J5LCBzZXRDYXRlZ29yeV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiQ2F0ZWdvcnlQYWdlXCIsIHF1ZXJ5KTtcblxuICAgIC8vIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgYXdhaXQgZmV0Y2gocHJvY2Vzcy5lbnYuQVBJX0hPU1RfVVJMICsgXCJjYXRlZ29yaWVzXCIgKyBxdWVyeSlcbiAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICBzZXRDYXRlZ29yeShkYXRhKTtcbiAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5sb2coXCJFUlJPUlwiLCBlcnJvcikpO1xuICAgIH07XG4gICAgZmV0Y2hEYXRhKCk7XG4gIH0sIFtdKTtcbiAgaWYgKGlzTG9hZGluZykge1xuICAgIDxwPkxvYWRpbmcuLi4uLjwvcD47XG4gIH1cblxuICBjb25zdCBjb252ZXJ0ZWREYXRlID0gKGNyZWF0ZWRfYXQpID0+IHtcbiAgICBjb25zdCBkYXRlQW5kVGltZSA9IGNyZWF0ZWRfYXQ7XG5cbiAgICBjb25zdCBzcGxpdHRlZERhdGVBbmRUaW1lID0gZGF0ZUFuZFRpbWUuc3BsaXQoXCJcIik7XG5cbiAgICBjb25zdCBzbGljZWREYXRlID0gc3BsaXR0ZWREYXRlQW5kVGltZS5zbGljZSgwLCAxMCk7XG5cbiAgICBjb25zdCBqb2luZWREYXRlID0gc2xpY2VkRGF0ZS5qb2luKFwiXCIpO1xuXG4gICAgcmV0dXJuIGpvaW5lZERhdGU7XG4gIH07XG4gIGNvbnN0IGNoZWNrU3RhdHVzID0gIWNhdGVnb3J5LmFydGljbGVzID8gKFxuICAgIDxoMT5Mb2FkaW5nLi4uLi4uPC9oMT5cbiAgKSA6IChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJtdC01XCI+XG4gICAgICB7Y2F0ZWdvcnkuYXJ0aWNsZXMubWFwKFxuICAgICAgICAoeyBpZCwgc2x1ZywgbmFtZSwgYXV0aG9yLCBjcmVhdGVkX2F0LCB0aXRsZSwgY29udGVudCwgaW1hZ2UgfSkgPT4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHctMTAwIGNvbC0xMiBjb2wtbGctNCBjYXJkIG1iLTUgcC0yXCIga2V5PXtpZH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRQb3N0SW1hZ2UgY29sLTNcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicG9zaXRpb24tYWJzb2x1dGUgei0xXCI+XG4gICAgICAgICAgICAgICAgezxzcGFuIGNsYXNzTmFtZT1cIm1lLTEgY2F0ZWdvcnlcIj57Y2F0ZWdvcnkubmFtZX08L3NwYW4+fVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VDb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgIHNyYz17YGh0dHA6Ly9sb2NhbGhvc3Q6MTMzNyR7aW1hZ2UudXJsfWB9XG4gICAgICAgICAgICAgICAgICBsYXlvdXQ9XCJyZXNwb25zaXZlXCJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPXsxMH1cbiAgICAgICAgICAgICAgICAgIGhlaWdodD17N31cbiAgICAgICAgICAgICAgICAgIGFsdD1cInRlc3RcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJibG9ja3F1b3RlLWZvb3RlciBtdC0yXCI+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYS1zb2xpZCBmYS11c2VyIG1lLTFcIj48L2k+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtZS0yXCI+e2F1dGhvci5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhLXNvbGlkIGZhLWNhbGVuZGFyLWRheXMgbWUtMVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPntjb252ZXJ0ZWREYXRlKGNyZWF0ZWRfYXQpfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2g2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtOSBjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj57dGl0bGV9PC9oNT5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0IG5ldy1saW5lXCI+XG4gICAgICAgICAgICAgICAgey8qIHtzdWJDb250ZW50KGNvbnRlbnQpICsgXCIgLi4uLlwifSAqL31cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgIGhyZWY9e3tcbiAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBgLyR7Y2F0ZWdvcnkubmFtZS50b0xvd2VyQ2FzZSgpfS8ke3NsdWd9YCxcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50LFxuICAgICAgICAgICAgICAgICAgICBhdXRob3I6IGF1dGhvci5uYW1lLFxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeTogY2F0ZWdvcnkubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlZF9hdDogY29udmVydGVkRGF0ZShjcmVhdGVkX2F0KSxcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IGltYWdlLnVybCxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlJlYWQgTW9yZTwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICAgICl9XG4gICAgPC9zZWN0aW9uPlxuICApO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24tY29udGVudC1jZW50ZXIgbXQtNSBtYi01XCI+XG4gICAgICAgIHtjYXRlZ29yeS5uYW1lfVxuICAgICAgPC9oMT5cbiAgICAgIHtjaGVja1N0YXR1c31cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkxpbmsiLCJJbWFnZSIsInVzZVJvdXRlciIsIkNhdGVnb3J5UGFnZSIsInF1ZXJ5IiwiY2F0ZWdvcnkiLCJzZXRDYXRlZ29yeSIsImlzTG9hZGluZyIsInNldExvYWRpbmciLCJjb25zb2xlIiwibG9nIiwiZmV0Y2hEYXRhIiwiZmV0Y2giLCJwcm9jZXNzIiwiZW52IiwiQVBJX0hPU1RfVVJMIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwiY2F0Y2giLCJlcnJvciIsInAiLCJjb252ZXJ0ZWREYXRlIiwiY3JlYXRlZF9hdCIsImRhdGVBbmRUaW1lIiwic3BsaXR0ZWREYXRlQW5kVGltZSIsInNwbGl0Iiwic2xpY2VkRGF0ZSIsInNsaWNlIiwiam9pbmVkRGF0ZSIsImpvaW4iLCJjaGVja1N0YXR1cyIsImFydGljbGVzIiwiaDEiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwibWFwIiwiaWQiLCJzbHVnIiwibmFtZSIsImF1dGhvciIsInRpdGxlIiwiY29udGVudCIsImltYWdlIiwiZGl2Iiwic3BhbiIsInNyYyIsInVybCIsImxheW91dCIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0IiwiaDYiLCJpIiwiaDUiLCJocmVmIiwicGF0aG5hbWUiLCJ0b0xvd2VyQ2FzZSIsImEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/CategoryPage.js\n"));

/***/ })

});