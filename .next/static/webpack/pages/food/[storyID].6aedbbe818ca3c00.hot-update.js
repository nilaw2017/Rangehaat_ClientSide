"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/food/[storyID]",{

/***/ "./components/Post.js":
/*!****************************!*\
  !*** ./components/Post.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Post; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ShareIt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShareIt */ \"./components/ShareIt.js\");\n/* harmony import */ var _SideBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SideBar */ \"./components/SideBar.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction Post(param) {\n    var query = param.query;\n    var formattedContent = function(params) {\n        if (params == undefined) {\n            return 0;\n        } else {\n            var someHTMLString = params;\n            // // console.log(\"PARAMS\", params);\n            // const myString = someHTMLString.replace(/<[^>]+>/g, \"\");\n            // const myString = someHTMLString.replace(/<iframe/g, \"${<iFrame\");\n            // return myString;\n            return someHTMLString;\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row mt-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-lg-8 col-12\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: query.title\n                            }, void 0, false, {\n                                fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/Post.js\",\n                                lineNumber: 22,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"d-flex mb-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"me-2\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                                className: \"fa-solid fa-user me-1\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/Post.js\",\n                                                lineNumber: 25,\n                                                columnNumber: 15\n                                            }, this),\n                                            query.author\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/Post.js\",\n                                        lineNumber: 24,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-secondary\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                                className: \"fa-solid fa-calendar-days me-1\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/Post.js\",\n                                                lineNumber: 29,\n                                                columnNumber: 15\n                                            }, this),\n                                            query.created_at\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/Post.js\",\n                                        lineNumber: 28,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/Post.js\",\n                                lineNumber: 23,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                src: \"http://localhost:1337/\".concat(query.image),\n                                layout: \"responsive\",\n                                width: 10,\n                                height: 7,\n                                alt: \"test\"\n                            }, void 0, false, {\n                                fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/Post.js\",\n                                lineNumber: 38,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"new-line\",\n                                children: formattedContent(query.content)\n                            }, void 0, false, {\n                                fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/Post.js\",\n                                lineNumber: 45,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/Post.js\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-lg-4 col-12 p-2 border\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SideBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                            fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/Post.js\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/Post.js\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/Post.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-5 mb-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        children: \"Share this article\"\n                    }, void 0, false, {\n                        fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/Post.js\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ShareIt__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                        fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/Post.js\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/Post.js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/Post.js\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n};\n_c = Post;\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Bvc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQWdDO0FBQ0E7QUFDRDtBQUVoQixTQUFTRyxJQUFJLENBQUMsS0FBUyxFQUFFO1FBQVgsS0FBTyxHQUFQLEtBQVMsQ0FBUEMsS0FBSztJQUNsQyxJQUFNQyxnQkFBZ0IsR0FBRyxTQUFDQyxNQUFNLEVBQUs7UUFDbkMsSUFBSUEsTUFBTSxJQUFJQyxTQUFTLEVBQUU7WUFDdkIsT0FBTyxDQUFDLENBQUM7U0FDVixNQUFNO1lBQ0wsSUFBTUMsY0FBYyxHQUFHRixNQUFNO1lBQzdCLG9DQUFvQztZQUNwQywyREFBMkQ7WUFDM0Qsb0VBQW9FO1lBQ3BFLG1CQUFtQjtZQUNuQixPQUFPRSxjQUFjLENBQUM7U0FDdkI7S0FDRjtJQUNELHFCQUNFLDhEQUFDQyxTQUFPOzswQkFDTiw4REFBQ0MsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLFVBQVU7O2tDQUN2Qiw4REFBQ0QsS0FBRzt3QkFBQ0MsU0FBUyxFQUFDLGlCQUFpQjs7MENBQzlCLDhEQUFDQyxJQUFFOzBDQUFFUixLQUFLLENBQUNTLEtBQUs7Ozs7O29DQUFNOzBDQUN0Qiw4REFBQ0gsS0FBRztnQ0FBQ0MsU0FBUyxFQUFDLGFBQWE7O2tEQUMxQiw4REFBQ0csTUFBSTt3Q0FBQ0gsU0FBUyxFQUFDLE1BQU07OzBEQUNwQiw4REFBQ0ksR0FBQztnREFBQ0osU0FBUyxFQUFDLHVCQUF1Qjs7Ozs7b0RBQUs7NENBQ3hDUCxLQUFLLENBQUNZLE1BQU07Ozs7Ozs0Q0FDUjtrREFDUCw4REFBQ0YsTUFBSTt3Q0FBQ0gsU0FBUyxFQUFDLGdCQUFnQjs7MERBQzlCLDhEQUFDSSxHQUFDO2dEQUFDSixTQUFTLEVBQUMsZ0NBQWdDOzs7OztvREFBSzs0Q0FDakRQLEtBQUssQ0FBQ2EsVUFBVTs7Ozs7OzRDQUNaOzs7Ozs7b0NBQ0g7MENBTU4sOERBQUNmLG1EQUFLO2dDQUNKZ0IsR0FBRyxFQUFFLHdCQUF1QixDQUFjLE9BQVpkLEtBQUssQ0FBQ2UsS0FBSyxDQUFFO2dDQUMzQ0MsTUFBTSxFQUFDLFlBQVk7Z0NBQ25CQyxLQUFLLEVBQUUsRUFBRTtnQ0FDVEMsTUFBTSxFQUFFLENBQUM7Z0NBQ1RDLEdBQUcsRUFBQyxNQUFNOzs7OztvQ0FDVjswQ0FDRiw4REFBQ0MsR0FBQztnQ0FBQ2IsU0FBUyxFQUFDLFVBQVU7MENBQUVOLGdCQUFnQixDQUFDRCxLQUFLLENBQUNxQixPQUFPLENBQUM7Ozs7O29DQUFLOzs7Ozs7NEJBQ3pEO2tDQUNOLDhEQUFDZixLQUFHO3dCQUFDQyxTQUFTLEVBQUMsNEJBQTRCO2tDQUN6Qyw0RUFBQ1YsZ0RBQU87Ozs7Z0NBQUc7Ozs7OzRCQUNQOzs7Ozs7b0JBQ0Y7MEJBRU4sOERBQUNTLEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxXQUFXOztrQ0FDeEIsOERBQUNlLElBQUU7a0NBQUMsb0JBQWtCOzs7Ozs0QkFBSztrQ0FDM0IsOERBQUMxQixnREFBTzs7Ozs0QkFBRzs7Ozs7O29CQUNQOzs7Ozs7WUFDRSxDQUNWO0NBQ0g7QUFyRHVCRyxLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUG9zdC5qcz8zNDU1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTaGFyZUl0IGZyb20gXCIuL1NoYXJlSXRcIjtcbmltcG9ydCBTaWRlQmFyIGZyb20gXCIuL1NpZGVCYXJcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0KHsgcXVlcnkgfSkge1xuICBjb25zdCBmb3JtYXR0ZWRDb250ZW50ID0gKHBhcmFtcykgPT4ge1xuICAgIGlmIChwYXJhbXMgPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc29tZUhUTUxTdHJpbmcgPSBwYXJhbXM7XG4gICAgICAvLyAvLyBjb25zb2xlLmxvZyhcIlBBUkFNU1wiLCBwYXJhbXMpO1xuICAgICAgLy8gY29uc3QgbXlTdHJpbmcgPSBzb21lSFRNTFN0cmluZy5yZXBsYWNlKC88W14+XSs+L2csIFwiXCIpO1xuICAgICAgLy8gY29uc3QgbXlTdHJpbmcgPSBzb21lSFRNTFN0cmluZy5yZXBsYWNlKC88aWZyYW1lL2csIFwiJHs8aUZyYW1lXCIpO1xuICAgICAgLy8gcmV0dXJuIG15U3RyaW5nO1xuICAgICAgcmV0dXJuIHNvbWVIVE1MU3RyaW5nO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG10LTVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctOCBjb2wtMTJcIj5cbiAgICAgICAgICA8aDE+e3F1ZXJ5LnRpdGxlfTwvaDE+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggbWItMlwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWUtMlwiPlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYS1zb2xpZCBmYS11c2VyIG1lLTFcIj48L2k+XG4gICAgICAgICAgICAgIHtxdWVyeS5hdXRob3J9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYS1zb2xpZCBmYS1jYWxlbmRhci1kYXlzIG1lLTFcIj48L2k+XG4gICAgICAgICAgICAgIHtxdWVyeS5jcmVhdGVkX2F0fVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHsvKiA8aW1nXG4gICAgICAgICAgICBzcmM9e2BodHRwOi8vbG9jYWxob3N0OjEzMzcke3F1ZXJ5LmltYWdlfWB9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgaW1nLWZsdWlkIG1iLTVcIlxuICAgICAgICAgICAgYWx0PVwidGVzdFwiXG4gICAgICAgICAgLz4gKi99XG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBzcmM9e2BodHRwOi8vbG9jYWxob3N0OjEzMzcvJHtxdWVyeS5pbWFnZX1gfVxuICAgICAgICAgICAgbGF5b3V0PVwicmVzcG9uc2l2ZVwiXG4gICAgICAgICAgICB3aWR0aD17MTB9XG4gICAgICAgICAgICBoZWlnaHQ9ezd9XG4gICAgICAgICAgICBhbHQ9XCJ0ZXN0XCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm5ldy1saW5lXCI+e2Zvcm1hdHRlZENvbnRlbnQocXVlcnkuY29udGVudCl9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNCBjb2wtMTIgcC0yIGJvcmRlclwiPlxuICAgICAgICAgIDxTaWRlQmFyIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICB7LyogU29jaWFsIE1lZGlhIFNoYXJlIExpbmsgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTUgbWItNVwiPlxuICAgICAgICA8aDQ+U2hhcmUgdGhpcyBhcnRpY2xlPC9oND5cbiAgICAgICAgPFNoYXJlSXQgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJTaGFyZUl0IiwiU2lkZUJhciIsIkltYWdlIiwiUG9zdCIsInF1ZXJ5IiwiZm9ybWF0dGVkQ29udGVudCIsInBhcmFtcyIsInVuZGVmaW5lZCIsInNvbWVIVE1MU3RyaW5nIiwic2VjdGlvbiIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwidGl0bGUiLCJzcGFuIiwiaSIsImF1dGhvciIsImNyZWF0ZWRfYXQiLCJzcmMiLCJpbWFnZSIsImxheW91dCIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0IiwicCIsImNvbnRlbnQiLCJoNCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Post.js\n"));

/***/ }),

/***/ "./components/ShareIt.js":
/*!*******************************!*\
  !*** ./components/ShareIt.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ShareIt; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction ShareIt() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                className: \"fa-brands fa-square-facebook fa-2xl p-2\"\n            }, void 0, false, {\n                fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/ShareIt.js\",\n                lineNumber: 5,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/ShareIt.js\",\n            lineNumber: 4,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n};\n_c = ShareIt;\nvar _c;\n$RefreshReg$(_c, \"ShareIt\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NoYXJlSXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBZSxTQUFTQSxPQUFPLEdBQUc7SUFDaEMscUJBQ0U7a0JBQ0UsNEVBQUNDLEtBQUc7c0JBQ0YsNEVBQUNDLEdBQUM7Z0JBQUNDLFNBQVMsRUFBQyx5Q0FBeUM7Ozs7O29CQUFLOzs7OztnQkFDdkQ7cUJBQ0wsQ0FDSDtDQUNIO0FBUnVCSCxLQUFBQSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2hhcmVJdC5qcz84OTg3Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNoYXJlSXQoKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxpIGNsYXNzTmFtZT1cImZhLWJyYW5kcyBmYS1zcXVhcmUtZmFjZWJvb2sgZmEtMnhsIHAtMlwiPjwvaT5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlNoYXJlSXQiLCJkaXYiLCJpIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ShareIt.js\n"));

/***/ }),

/***/ "./components/SideBar.js":
/*!*******************************!*\
  !*** ./components/SideBar.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SideBar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction SideBar() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \"SideBar\"\n        }, void 0, false, {\n            fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/SideBar.js\",\n            lineNumber: 4,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n};\n_c = SideBar;\nvar _c;\n$RefreshReg$(_c, \"SideBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NpZGVCYXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBZSxTQUFTQSxPQUFPLEdBQUc7SUFDaEMscUJBQ0U7a0JBQ0UsNEVBQUNDLElBQUU7c0JBQUMsU0FBTzs7Ozs7Z0JBQUs7cUJBQ2YsQ0FDSDtDQUNIO0FBTnVCRCxLQUFBQSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2lkZUJhci5qcz9iODJmIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZGVCYXIoKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxoMT5TaWRlQmFyPC9oMT5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJTaWRlQmFyIiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/SideBar.js\n"));

/***/ }),

/***/ "./pages/food/[storyID].js":
/*!*********************************!*\
  !*** ./pages/food/[storyID].js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Post */ \"./components/Post.js\");\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar storyID = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var query = router.query;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Post__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        query: query\n    }, void 0, false, {\n        fileName: \"/home/nilaw/Desktop/newRangehaat/client/pages/food/[storyID].js\",\n        lineNumber: 7,\n        columnNumber: 10\n    }, _this);\n};\n_s(storyID, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (storyID);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9mb29kL1tzdG9yeUlEXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFBd0M7QUFDQzs7QUFFekMsSUFBTUUsT0FBTyxHQUFHLFdBQU07O0lBQ3BCLElBQU1DLE1BQU0sR0FBR0gsc0RBQVMsRUFBRTtJQUMxQixJQUFNSSxLQUFLLEdBQUdELE1BQU0sQ0FBQ0MsS0FBSztJQUMxQixxQkFBTyw4REFBQ0gsd0RBQUk7UUFBQ0csS0FBSyxFQUFFQSxLQUFLOzs7OzthQUFJLENBQUM7Q0FDL0I7R0FKS0YsT0FBTzs7UUFDSUYsa0RBQVM7OztBQUsxQiwrREFBZUUsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2Zvb2QvW3N0b3J5SURdLmpzPzQ2MGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgUG9zdCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Qb3N0XCI7XG5cbmNvbnN0IHN0b3J5SUQgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBxdWVyeSA9IHJvdXRlci5xdWVyeTtcbiAgcmV0dXJuIDxQb3N0IHF1ZXJ5PXtxdWVyeX0gLz47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzdG9yeUlEO1xuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIlBvc3QiLCJzdG9yeUlEIiwicm91dGVyIiwicXVlcnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/food/[storyID].js\n"));

/***/ })

});