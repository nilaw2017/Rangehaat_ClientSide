"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/politics/[storyID]";
exports.ids = ["pages/politics/[storyID]"];
exports.modules = {

/***/ "./components/Post.js":
/*!****************************!*\
  !*** ./components/Post.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Post)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ShareIt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShareIt */ \"./components/ShareIt.js\");\n/* harmony import */ var _SideBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SideBar */ \"./components/SideBar.js\");\n\n\n\nfunction Post({ query  }) {\n    const formattedContent = (params)=>{\n        if (params == undefined) {\n            return 0;\n        } else {\n            const someHTMLString = params;\n            // // console.log(\"PARAMS\", params);\n            // const myString = someHTMLString.replace(/<[^>]+>/g, \"\");\n            // const myString = someHTMLString.replace(/<iframe/g, \"${<iFrame\");\n            // return myString;\n            return someHTMLString;\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row mt-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-lg-8 col-12\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: query.title\n                            }, void 0, false, {\n                                fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/Post.js\",\n                                lineNumber: 21,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"d-flex mb-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"me-2\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                                className: \"fa-solid fa-user me-1\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/Post.js\",\n                                                lineNumber: 24,\n                                                columnNumber: 15\n                                            }, this),\n                                            query.author\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/Post.js\",\n                                        lineNumber: 23,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-secondary\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                                className: \"fa-solid fa-calendar-days me-1\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/Post.js\",\n                                                lineNumber: 28,\n                                                columnNumber: 15\n                                            }, this),\n                                            query.created_at\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/Post.js\",\n                                        lineNumber: 27,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/Post.js\",\n                                lineNumber: 22,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: `http://localhost:1337${query.image}`,\n                                className: \"border img-fluid mb-5\",\n                                alt: \"test\"\n                            }, void 0, false, {\n                                fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/Post.js\",\n                                lineNumber: 32,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"new-line\",\n                                children: formattedContent(query.content)\n                            }, void 0, false, {\n                                fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/Post.js\",\n                                lineNumber: 37,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/Post.js\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-lg-4 col-12 p-2 border\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SideBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                            fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/Post.js\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/Post.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/Post.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-5 mb-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        children: \"Share this article\"\n                    }, void 0, false, {\n                        fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/Post.js\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ShareIt__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                        fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/Post.js\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/Post.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/Post.js\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Bvc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUFnQztBQUNBO0FBRWpCLFNBQVNFLElBQUksQ0FBQyxFQUFFQyxLQUFLLEdBQUUsRUFBRTtJQUN0QyxNQUFNQyxnQkFBZ0IsR0FBRyxDQUFDQyxNQUFNLEdBQUs7UUFDbkMsSUFBSUEsTUFBTSxJQUFJQyxTQUFTLEVBQUU7WUFDdkIsT0FBTyxDQUFDLENBQUM7U0FDVixNQUFNO1lBQ0wsTUFBTUMsY0FBYyxHQUFHRixNQUFNO1lBQzdCLG9DQUFvQztZQUNwQywyREFBMkQ7WUFDM0Qsb0VBQW9FO1lBQ3BFLG1CQUFtQjtZQUNuQixPQUFPRSxjQUFjLENBQUM7U0FDdkI7S0FDRjtJQUNELHFCQUNFLDhEQUFDQyxTQUFPOzswQkFDTiw4REFBQ0MsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLFVBQVU7O2tDQUN2Qiw4REFBQ0QsS0FBRzt3QkFBQ0MsU0FBUyxFQUFDLGlCQUFpQjs7MENBQzlCLDhEQUFDQyxJQUFFOzBDQUFFUixLQUFLLENBQUNTLEtBQUs7Ozs7O29DQUFNOzBDQUN0Qiw4REFBQ0gsS0FBRztnQ0FBQ0MsU0FBUyxFQUFDLGFBQWE7O2tEQUMxQiw4REFBQ0csTUFBSTt3Q0FBQ0gsU0FBUyxFQUFDLE1BQU07OzBEQUNwQiw4REFBQ0ksR0FBQztnREFBQ0osU0FBUyxFQUFDLHVCQUF1Qjs7Ozs7b0RBQUs7NENBQ3hDUCxLQUFLLENBQUNZLE1BQU07Ozs7Ozs0Q0FDUjtrREFDUCw4REFBQ0YsTUFBSTt3Q0FBQ0gsU0FBUyxFQUFDLGdCQUFnQjs7MERBQzlCLDhEQUFDSSxHQUFDO2dEQUFDSixTQUFTLEVBQUMsZ0NBQWdDOzs7OztvREFBSzs0Q0FDakRQLEtBQUssQ0FBQ2EsVUFBVTs7Ozs7OzRDQUNaOzs7Ozs7b0NBQ0g7MENBQ04sOERBQUNDLEtBQUc7Z0NBQ0ZDLEdBQUcsRUFBRSxDQUFDLHFCQUFxQixFQUFFZixLQUFLLENBQUNnQixLQUFLLENBQUMsQ0FBQztnQ0FDMUNULFNBQVMsRUFBQyx1QkFBdUI7Z0NBQ2pDVSxHQUFHLEVBQUMsTUFBTTs7Ozs7b0NBQ1Y7MENBQ0YsOERBQUNDLEdBQUM7Z0NBQUNYLFNBQVMsRUFBQyxVQUFVOzBDQUFFTixnQkFBZ0IsQ0FBQ0QsS0FBSyxDQUFDbUIsT0FBTyxDQUFDOzs7OztvQ0FBSzs7Ozs7OzRCQUN6RDtrQ0FDTiw4REFBQ2IsS0FBRzt3QkFBQ0MsU0FBUyxFQUFDLDRCQUE0QjtrQ0FDekMsNEVBQUNULGdEQUFPOzs7O2dDQUFHOzs7Ozs0QkFDUDs7Ozs7O29CQUNGOzBCQUVOLDhEQUFDUSxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsV0FBVzs7a0NBQ3hCLDhEQUFDYSxJQUFFO2tDQUFDLG9CQUFrQjs7Ozs7NEJBQUs7a0NBQzNCLDhEQUFDdkIsZ0RBQU87Ozs7NEJBQUc7Ozs7OztvQkFDUDs7Ozs7O1lBQ0UsQ0FDVjtDQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dF9jbGllbnQvLi9jb21wb25lbnRzL1Bvc3QuanM/MzQ1NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2hhcmVJdCBmcm9tIFwiLi9TaGFyZUl0XCI7XG5pbXBvcnQgU2lkZUJhciBmcm9tIFwiLi9TaWRlQmFyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3QoeyBxdWVyeSB9KSB7XG4gIGNvbnN0IGZvcm1hdHRlZENvbnRlbnQgPSAocGFyYW1zKSA9PiB7XG4gICAgaWYgKHBhcmFtcyA9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzb21lSFRNTFN0cmluZyA9IHBhcmFtcztcbiAgICAgIC8vIC8vIGNvbnNvbGUubG9nKFwiUEFSQU1TXCIsIHBhcmFtcyk7XG4gICAgICAvLyBjb25zdCBteVN0cmluZyA9IHNvbWVIVE1MU3RyaW5nLnJlcGxhY2UoLzxbXj5dKz4vZywgXCJcIik7XG4gICAgICAvLyBjb25zdCBteVN0cmluZyA9IHNvbWVIVE1MU3RyaW5nLnJlcGxhY2UoLzxpZnJhbWUvZywgXCIkezxpRnJhbWVcIik7XG4gICAgICAvLyByZXR1cm4gbXlTdHJpbmc7XG4gICAgICByZXR1cm4gc29tZUhUTUxTdHJpbmc7XG4gICAgfVxuICB9O1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbXQtNVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy04IGNvbC0xMlwiPlxuICAgICAgICAgIDxoMT57cXVlcnkudGl0bGV9PC9oMT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBtYi0yXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtZS0yXCI+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhLXNvbGlkIGZhLXVzZXIgbWUtMVwiPjwvaT5cbiAgICAgICAgICAgICAge3F1ZXJ5LmF1dGhvcn1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhLXNvbGlkIGZhLWNhbGVuZGFyLWRheXMgbWUtMVwiPjwvaT5cbiAgICAgICAgICAgICAge3F1ZXJ5LmNyZWF0ZWRfYXR9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjPXtgaHR0cDovL2xvY2FsaG9zdDoxMzM3JHtxdWVyeS5pbWFnZX1gfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIGltZy1mbHVpZCBtYi01XCJcbiAgICAgICAgICAgIGFsdD1cInRlc3RcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwibmV3LWxpbmVcIj57Zm9ybWF0dGVkQ29udGVudChxdWVyeS5jb250ZW50KX08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00IGNvbC0xMiBwLTIgYm9yZGVyXCI+XG4gICAgICAgICAgPFNpZGVCYXIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIHsvKiBTb2NpYWwgTWVkaWEgU2hhcmUgTGluayAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNSBtYi01XCI+XG4gICAgICAgIDxoND5TaGFyZSB0aGlzIGFydGljbGU8L2g0PlxuICAgICAgICA8U2hhcmVJdCAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlNoYXJlSXQiLCJTaWRlQmFyIiwiUG9zdCIsInF1ZXJ5IiwiZm9ybWF0dGVkQ29udGVudCIsInBhcmFtcyIsInVuZGVmaW5lZCIsInNvbWVIVE1MU3RyaW5nIiwic2VjdGlvbiIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwidGl0bGUiLCJzcGFuIiwiaSIsImF1dGhvciIsImNyZWF0ZWRfYXQiLCJpbWciLCJzcmMiLCJpbWFnZSIsImFsdCIsInAiLCJjb250ZW50IiwiaDQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Post.js\n");

/***/ }),

/***/ "./components/ShareIt.js":
/*!*******************************!*\
  !*** ./components/ShareIt.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ShareIt)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction ShareIt() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                className: \"fa-brands fa-square-facebook fa-2xl p-2\"\n            }, void 0, false, {\n                fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/ShareIt.js\",\n                lineNumber: 5,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/ShareIt.js\",\n            lineNumber: 4,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NoYXJlSXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBZSxTQUFTQSxPQUFPLEdBQUc7SUFDaEMscUJBQ0U7a0JBQ0UsNEVBQUNDLEtBQUc7c0JBQ0YsNEVBQUNDLEdBQUM7Z0JBQUNDLFNBQVMsRUFBQyx5Q0FBeUM7Ozs7O29CQUFLOzs7OztnQkFDdkQ7cUJBQ0wsQ0FDSDtDQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dF9jbGllbnQvLi9jb21wb25lbnRzL1NoYXJlSXQuanM/ODk4NyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaGFyZUl0KCkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aSBjbGFzc05hbWU9XCJmYS1icmFuZHMgZmEtc3F1YXJlLWZhY2Vib29rIGZhLTJ4bCBwLTJcIj48L2k+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJTaGFyZUl0IiwiZGl2IiwiaSIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ShareIt.js\n");

/***/ }),

/***/ "./components/SideBar.js":
/*!*******************************!*\
  !*** ./components/SideBar.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SideBar)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction SideBar() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \"SideBar\"\n        }, void 0, false, {\n            fileName: \"/home/nilaw/Desktop/newRangehaat/client/components/SideBar.js\",\n            lineNumber: 4,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NpZGVCYXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBZSxTQUFTQSxPQUFPLEdBQUc7SUFDaEMscUJBQ0U7a0JBQ0UsNEVBQUNDLElBQUU7c0JBQUMsU0FBTzs7Ozs7Z0JBQUs7cUJBQ2YsQ0FDSDtDQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dF9jbGllbnQvLi9jb21wb25lbnRzL1NpZGVCYXIuanM/YjgyZiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWRlQmFyKCkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aDE+U2lkZUJhcjwvaDE+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiU2lkZUJhciIsImgxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/SideBar.js\n");

/***/ }),

/***/ "./pages/politics/[storyID].js":
/*!*************************************!*\
  !*** ./pages/politics/[storyID].js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Post */ \"./components/Post.js\");\n\n\n\nconst storyID = ()=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const query = router.query;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Post__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        query: query\n    }, void 0, false, {\n        fileName: \"/home/nilaw/Desktop/newRangehaat/client/pages/politics/[storyID].js\",\n        lineNumber: 7,\n        columnNumber: 10\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (storyID);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb2xpdGljcy9bc3RvcnlJRF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFBd0M7QUFDQztBQUV6QyxNQUFNRSxPQUFPLEdBQUcsSUFBTTtJQUNwQixNQUFNQyxNQUFNLEdBQUdILHNEQUFTLEVBQUU7SUFDMUIsTUFBTUksS0FBSyxHQUFHRCxNQUFNLENBQUNDLEtBQUs7SUFDMUIscUJBQU8sOERBQUNILHdEQUFJO1FBQUNHLEtBQUssRUFBRUEsS0FBSzs7Ozs7aUJBQUksQ0FBQztDQUMvQjtBQUVELGlFQUFlRixPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0X2NsaWVudC8uL3BhZ2VzL3BvbGl0aWNzL1tzdG9yeUlEXS5qcz9lMmIyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IFBvc3QgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUG9zdFwiO1xuXG5jb25zdCBzdG9yeUlEID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgcXVlcnkgPSByb3V0ZXIucXVlcnk7XG4gIHJldHVybiA8UG9zdCBxdWVyeT17cXVlcnl9IC8+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc3RvcnlJRDtcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJQb3N0Iiwic3RvcnlJRCIsInJvdXRlciIsInF1ZXJ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/politics/[storyID].js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/politics/[storyID].js"));
module.exports = __webpack_exports__;

})();