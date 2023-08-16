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

/***/ "./components/Navbar.jsx":
/*!*******************************!*\
  !*** ./components/Navbar.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _public_kratos_geek_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/kratos_geek.png */ \"./public/kratos_geek.png\");\n\nvar _s = $RefreshSig$();\n\n\n\n // import state\n\n\nconst Navbar = ()=>{\n    _s();\n    const [isNavOpen, setIsNavOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); // initiate isNavOpen state with false\n    const handleNav = ()=>{\n        setIsNavOpen(!isNavOpen);\n        console.log(\"clicked\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        class: \"dark:bg-[#0c4a6e]\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            class: \"flex flex-wrap items-center justify-evenly justify-items-center mx-auto p-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: \"https://aiam2601.github.io/portfolio/\",\n                    className: \" flex items-center font-bold  dark:text-white text-gray-800\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            src: _public_kratos_geek_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                            class: \"rounded-full w-10 h-10 mr-2\",\n                            alt: \"kratos Logo\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\andya\\\\OneDrive\\\\Documentos\\\\Software\\\\portfolio\\\\components\\\\Navbar.jsx\",\n                            lineNumber: 21,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            class: \"self-center font-bold whitespace-nowrap dark:text-white sm:text-[28px] md:text-[32px] lg:text-[32px] min-[320px]:text-[28px] \",\n                            children: \"Andr\\xe9s Aguilar\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\andya\\\\OneDrive\\\\Documentos\\\\Software\\\\portfolio\\\\components\\\\Navbar.jsx\",\n                            lineNumber: 26,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\andya\\\\OneDrive\\\\Documentos\\\\Software\\\\portfolio\\\\components\\\\Navbar.jsx\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    class: \"hidden w-full md:block md:w-auto \",\n                    id: \"navbar-default\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        class: \"font-medium flex flex-col p-4 md:p-0 mt-4 border md:flex-row md:space-x-8 md:mt-0 md:border-0\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"#AboutMe\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"block text-2xl py-2 pl-3 pr-4 my-1 mt-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent hover:[color:#126ca1] dark:hover:[color:#062e47] md:p-0 dark:text-white\",\n                                    children: \"About\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\andya\\\\OneDrive\\\\Documentos\\\\Software\\\\portfolio\\\\components\\\\Navbar.jsx\",\n                                    lineNumber: 34,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\andya\\\\OneDrive\\\\Documentos\\\\Software\\\\portfolio\\\\components\\\\Navbar.jsx\",\n                                lineNumber: 33,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"#Skills\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"block text-2xl py-2 pl-3 pr-4 my-1 mt-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent hover:[color:#126ca1] dark:hover:[color:#062e47] md:p-0  dark:text-white\",\n                                    children: \"Skills\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\andya\\\\OneDrive\\\\Documentos\\\\Software\\\\portfolio\\\\components\\\\Navbar.jsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\andya\\\\OneDrive\\\\Documentos\\\\Software\\\\portfolio\\\\components\\\\Navbar.jsx\",\n                                lineNumber: 38,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"#projects\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"block text-2xl py-2 pl-3 pr-4 my-1 mt-2  text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent hover:[color:#126ca1] dark:hover:[color:#062e47] md:p-0 dark:text-white\",\n                                    children: \"Projects\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\andya\\\\OneDrive\\\\Documentos\\\\Software\\\\portfolio\\\\components\\\\Navbar.jsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\andya\\\\OneDrive\\\\Documentos\\\\Software\\\\portfolio\\\\components\\\\Navbar.jsx\",\n                                lineNumber: 43,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"#contact\",\n                                children: [\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"block text-2xl py-2 pl-3 pr-4 my-1 mt-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent hover:[color:#126ca1] dark:hover:[color:#062e47] md:p-0 dark:text-white\",\n                                        children: \"Contact\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\andya\\\\OneDrive\\\\Documentos\\\\Software\\\\portfolio\\\\components\\\\Navbar.jsx\",\n                                        lineNumber: 50,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\andya\\\\OneDrive\\\\Documentos\\\\Software\\\\portfolio\\\\components\\\\Navbar.jsx\",\n                                lineNumber: 48,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\andya\\\\OneDrive\\\\Documentos\\\\Software\\\\portfolio\\\\components\\\\Navbar.jsx\",\n                        lineNumber: 32,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\andya\\\\OneDrive\\\\Documentos\\\\Software\\\\portfolio\\\\components\\\\Navbar.jsx\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    onClick: handleNav,\n                    className: \"md:hidden cursor-pointer\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiOutlineMenu, {\n                        class: \"dark:[color:white]\",\n                        size: 26\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\andya\\\\OneDrive\\\\Documentos\\\\Software\\\\portfolio\\\\components\\\\Navbar.jsx\",\n                        lineNumber: 58,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\andya\\\\OneDrive\\\\Documentos\\\\Software\\\\portfolio\\\\components\\\\Navbar.jsx\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: isNavOpen ? \"fixed left-0 top-0 w-[65%] md:hidden h-screen bg-[#ecf0f3] dark:bg-[#0c4261] p-10 ease-in duration-500\" : \"fixed left-[-100%] top-0 p-10 ease-in duration-500\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex w-full items-center justify-end\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                onClick: handleNav,\n                                className: \"cursor-pointer\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiOutlineClose, {\n                                    class: \"dark:[color:white]\",\n                                    size: 26\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\andya\\\\OneDrive\\\\Documentos\\\\Software\\\\portfolio\\\\components\\\\Navbar.jsx\",\n                                    lineNumber: 69,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\andya\\\\OneDrive\\\\Documentos\\\\Software\\\\portfolio\\\\components\\\\Navbar.jsx\",\n                                lineNumber: 68,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\andya\\\\OneDrive\\\\Documentos\\\\Software\\\\portfolio\\\\components\\\\Navbar.jsx\",\n                            lineNumber: 67,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            class: \"flex-col py-4\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                class: \"font-medium flex flex-col p-4 md:p-0 mt-4 \",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"#AboutMe\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            onClick: ()=>setIsNavOpen(false),\n                                            className: \"block text-2xl py-2 pl-3 pr-4 my-1 mt-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent dark:text-white md:p-0  \",\n                                            children: \"About\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\andya\\\\OneDrive\\\\Documentos\\\\Software\\\\portfolio\\\\components\\\\Navbar.jsx\",\n                                            lineNumber: 75,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\andya\\\\OneDrive\\\\Documentos\\\\Software\\\\portfolio\\\\components\\\\Navbar.jsx\",\n                                        lineNumber: 74,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"#Skills\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            onClick: ()=>setIsNavOpen(false),\n                                            className: \"block text-2xl py-2 pl-3 pr-4 my-1 mt-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent dark:text-white md:p-0 \",\n                                            children: \"Skills\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\andya\\\\OneDrive\\\\Documentos\\\\Software\\\\portfolio\\\\components\\\\Navbar.jsx\",\n                                            lineNumber: 83,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\andya\\\\OneDrive\\\\Documentos\\\\Software\\\\portfolio\\\\components\\\\Navbar.jsx\",\n                                        lineNumber: 82,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"#projects\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            onClick: ()=>setIsNavOpen(false),\n                                            className: \"block text-2xl py-2 pl-3 pr-4 my-1 mt-2  text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent dark:text-white md:p-0 \",\n                                            children: \"Projects\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\andya\\\\OneDrive\\\\Documentos\\\\Software\\\\portfolio\\\\components\\\\Navbar.jsx\",\n                                            lineNumber: 91,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\andya\\\\OneDrive\\\\Documentos\\\\Software\\\\portfolio\\\\components\\\\Navbar.jsx\",\n                                        lineNumber: 90,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"#contact\",\n                                        children: [\n                                            \" \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                onClick: ()=>setIsNavOpen(false),\n                                                className: \"block text-2xl py-2 pl-3 pr-4 my-1 mt-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent dark:text-white md:p-0 \",\n                                                children: \"Contact\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\andya\\\\OneDrive\\\\Documentos\\\\Software\\\\portfolio\\\\components\\\\Navbar.jsx\",\n                                                lineNumber: 100,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\andya\\\\OneDrive\\\\Documentos\\\\Software\\\\portfolio\\\\components\\\\Navbar.jsx\",\n                                        lineNumber: 98,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\andya\\\\OneDrive\\\\Documentos\\\\Software\\\\portfolio\\\\components\\\\Navbar.jsx\",\n                                lineNumber: 73,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\andya\\\\OneDrive\\\\Documentos\\\\Software\\\\portfolio\\\\components\\\\Navbar.jsx\",\n                            lineNumber: 72,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\andya\\\\OneDrive\\\\Documentos\\\\Software\\\\portfolio\\\\components\\\\Navbar.jsx\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\andya\\\\OneDrive\\\\Documentos\\\\Software\\\\portfolio\\\\components\\\\Navbar.jsx\",\n            lineNumber: 16,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\andya\\\\OneDrive\\\\Documentos\\\\Software\\\\portfolio\\\\components\\\\Navbar.jsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Navbar, \"MNgkhjFJ3DQLGhlcYzaIsl5YrwQ=\");\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmJhci5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNHO0FBQ2tDO0FBQzlCLENBQUMsZUFBZTtBQUNsQjtBQUNnQjtBQUUvQyxNQUFNTyxTQUFTLElBQU07O0lBQ25CLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHTCwrQ0FBUUEsQ0FBQyxLQUFLLEdBQUcsc0NBQXNDO0lBQ3pGLE1BQU1NLFlBQVksSUFBTTtRQUN0QkQsYUFBYSxDQUFDRDtRQUNkRyxRQUFRQyxHQUFHLENBQUM7SUFDZDtJQUNBLHFCQUNFLDhEQUFDQztRQUFJQyxPQUFNO2tCQUNULDRFQUFDQztZQUFJRCxPQUFNOzs4QkFDVCw4REFBQ0U7b0JBQ0NDLE1BQUs7b0JBQ0xDLFdBQVU7O3NDQUVWLDhEQUFDYixtREFBS0E7NEJBQ0pjLEtBQUtiLCtEQUFNQTs0QkFDWFEsT0FBTTs0QkFDTk0sS0FBSTs7Ozs7O3NDQUVOLDhEQUFDQzs0QkFBS1AsT0FBTTtzQ0FBZ0k7Ozs7Ozs7Ozs7Ozs4QkFLOUksOERBQUNDO29CQUFJRCxPQUFNO29CQUFvQ1EsSUFBRzs4QkFDaEQsNEVBQUNDO3dCQUFHVCxPQUFNOzswQ0FDUiw4REFBQ2Isa0RBQUlBO2dDQUFDZ0IsTUFBSzswQ0FDVCw0RUFBQ087b0NBQUdOLFdBQVU7OENBQWtMOzs7Ozs7Ozs7OzswQ0FJbE0sOERBQUNqQixrREFBSUE7Z0NBQUNnQixNQUFLOzBDQUNULDRFQUFDTztvQ0FBR04sV0FBVTs4Q0FBbUw7Ozs7Ozs7Ozs7OzBDQUluTSw4REFBQ2pCLGtEQUFJQTtnQ0FBQ2dCLE1BQUs7MENBQ1QsNEVBQUNPO29DQUFHTixXQUFVOzhDQUFtTDs7Ozs7Ozs7Ozs7MENBSW5NLDhEQUFDakIsa0RBQUlBO2dDQUFDZ0IsTUFBSzs7b0NBQ1I7a0RBQ0QsOERBQUNPO3dDQUFHTixXQUFVO2tEQUFrTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBT3RNLDhEQUFDSDtvQkFBSVUsU0FBU2Y7b0JBQVdRLFdBQVU7OEJBQ2pDLDRFQUFDaEIseURBQWFBO3dCQUFDWSxPQUFNO3dCQUFxQlksTUFBTTs7Ozs7Ozs7Ozs7OEJBRWxELDhEQUFDWDtvQkFDQ0csV0FDRVYsWUFDSSwyR0FDQSxvREFBb0Q7O3NDQUcxRCw4REFBQ087NEJBQUlHLFdBQVU7c0NBQ2IsNEVBQUNIO2dDQUFJVSxTQUFTZjtnQ0FBV1EsV0FBVTswQ0FDakMsNEVBQUNmLDBEQUFjQTtvQ0FBQ1csT0FBTTtvQ0FBcUJZLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7c0NBR3JELDhEQUFDWDs0QkFBSUQsT0FBTTtzQ0FDVCw0RUFBQ1M7Z0NBQUdULE9BQU07O2tEQUNSLDhEQUFDYixrREFBSUE7d0NBQUNnQixNQUFLO2tEQUNULDRFQUFDTzs0Q0FDQ0MsU0FBUyxJQUFNaEIsYUFBYSxLQUFLOzRDQUNqQ1MsV0FBVTtzREFDWDs7Ozs7Ozs7Ozs7a0RBSUgsOERBQUNqQixrREFBSUE7d0NBQUNnQixNQUFLO2tEQUNULDRFQUFDTzs0Q0FDQ0MsU0FBUyxJQUFNaEIsYUFBYSxLQUFLOzRDQUNqQ1MsV0FBVTtzREFDWDs7Ozs7Ozs7Ozs7a0RBSUgsOERBQUNqQixrREFBSUE7d0NBQUNnQixNQUFLO2tEQUNULDRFQUFDTzs0Q0FDQ0MsU0FBUyxJQUFNaEIsYUFBYSxLQUFLOzRDQUNqQ1MsV0FBVTtzREFDWDs7Ozs7Ozs7Ozs7a0RBSUgsOERBQUNqQixrREFBSUE7d0NBQUNnQixNQUFLOzs0Q0FDUjswREFDRCw4REFBQ087Z0RBQ0NDLFNBQVMsSUFBTWhCLGFBQWEsS0FBSztnREFDakNTLFdBQVU7MERBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVakI7R0F6R01YO0tBQUFBO0FBMkdOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTmF2YmFyLmpzeD8zYWFjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBBaU91dGxpbmVNZW51LCBBaU91dGxpbmVDbG9zZSB9IGZyb20gXCJyZWFjdC1pY29ucy9haVwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiOyAvLyBpbXBvcnQgc3RhdGVcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBrcmF0b3MgZnJvbSBcIi4uL3B1YmxpYy9rcmF0b3NfZ2Vlay5wbmdcIjtcclxuXHJcbmNvbnN0IE5hdmJhciA9ICgpID0+IHtcclxuICBjb25zdCBbaXNOYXZPcGVuLCBzZXRJc05hdk9wZW5dID0gdXNlU3RhdGUoZmFsc2UpOyAvLyBpbml0aWF0ZSBpc05hdk9wZW4gc3RhdGUgd2l0aCBmYWxzZVxyXG4gIGNvbnN0IGhhbmRsZU5hdiA9ICgpID0+IHtcclxuICAgIHNldElzTmF2T3BlbighaXNOYXZPcGVuKTtcclxuICAgIGNvbnNvbGUubG9nKFwiY2xpY2tlZFwiKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8bmF2IGNsYXNzPVwiZGFyazpiZy1bIzBjNGE2ZV1cIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC13cmFwIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWV2ZW5seSBqdXN0aWZ5LWl0ZW1zLWNlbnRlciBteC1hdXRvIHAtNFwiPlxyXG4gICAgICAgIDxhXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9haWFtMjYwMS5naXRodWIuaW8vcG9ydGZvbGlvL1wiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCIgZmxleCBpdGVtcy1jZW50ZXIgZm9udC1ib2xkICBkYXJrOnRleHQtd2hpdGUgdGV4dC1ncmF5LTgwMFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgIHNyYz17a3JhdG9zfVxyXG4gICAgICAgICAgICBjbGFzcz1cInJvdW5kZWQtZnVsbCB3LTEwIGgtMTAgbXItMlwiXHJcbiAgICAgICAgICAgIGFsdD1cImtyYXRvcyBMb2dvXCJcclxuICAgICAgICAgID48L0ltYWdlPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJzZWxmLWNlbnRlciBmb250LWJvbGQgd2hpdGVzcGFjZS1ub3dyYXAgZGFyazp0ZXh0LXdoaXRlIHNtOnRleHQtWzI4cHhdIG1kOnRleHQtWzMycHhdIGxnOnRleHQtWzMycHhdIG1pbi1bMzIwcHhdOnRleHQtWzI4cHhdIFwiPlxyXG4gICAgICAgICAgICBBbmRyw6lzIEFndWlsYXJcclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJoaWRkZW4gdy1mdWxsIG1kOmJsb2NrIG1kOnctYXV0byBcIiBpZD1cIm5hdmJhci1kZWZhdWx0XCI+XHJcbiAgICAgICAgICA8dWwgY2xhc3M9XCJmb250LW1lZGl1bSBmbGV4IGZsZXgtY29sIHAtNCBtZDpwLTAgbXQtNCBib3JkZXIgbWQ6ZmxleC1yb3cgbWQ6c3BhY2UteC04IG1kOm10LTAgbWQ6Ym9yZGVyLTBcIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNBYm91dE1lXCI+XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtMnhsIHB5LTIgcGwtMyBwci00IG15LTEgbXQtMiB0ZXh0LWdyYXktOTAwIHJvdW5kZWQgaG92ZXI6YmctZ3JheS0xMDAgbWQ6aG92ZXI6YmctdHJhbnNwYXJlbnQgaG92ZXI6W2NvbG9yOiMxMjZjYTFdIGRhcms6aG92ZXI6W2NvbG9yOiMwNjJlNDddIG1kOnAtMCBkYXJrOnRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgIEFib3V0XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiI1NraWxsc1wiPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJibG9jayB0ZXh0LTJ4bCBweS0yIHBsLTMgcHItNCBteS0xIG10LTIgdGV4dC1ncmF5LTkwMCByb3VuZGVkIGhvdmVyOmJnLWdyYXktMTAwIG1kOmhvdmVyOmJnLXRyYW5zcGFyZW50IGhvdmVyOltjb2xvcjojMTI2Y2ExXSBkYXJrOmhvdmVyOltjb2xvcjojMDYyZTQ3XSBtZDpwLTAgIGRhcms6dGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgU2tpbGxzXHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiI3Byb2plY3RzXCI+XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtMnhsIHB5LTIgcGwtMyBwci00IG15LTEgbXQtMiAgdGV4dC1ncmF5LTkwMCByb3VuZGVkIGhvdmVyOmJnLWdyYXktMTAwIG1kOmhvdmVyOmJnLXRyYW5zcGFyZW50IGhvdmVyOltjb2xvcjojMTI2Y2ExXSBkYXJrOmhvdmVyOltjb2xvcjojMDYyZTQ3XSBtZDpwLTAgZGFyazp0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICBQcm9qZWN0c1xyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNjb250YWN0XCI+XHJcbiAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJibG9jayB0ZXh0LTJ4bCBweS0yIHBsLTMgcHItNCBteS0xIG10LTIgdGV4dC1ncmF5LTkwMCByb3VuZGVkIGhvdmVyOmJnLWdyYXktMTAwIG1kOmhvdmVyOmJnLXRyYW5zcGFyZW50IGhvdmVyOltjb2xvcjojMTI2Y2ExXSBkYXJrOmhvdmVyOltjb2xvcjojMDYyZTQ3XSBtZDpwLTAgZGFyazp0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICBDb250YWN0XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBvbkNsaWNrPXtoYW5kbGVOYXZ9IGNsYXNzTmFtZT1cIm1kOmhpZGRlbiBjdXJzb3ItcG9pbnRlclwiPlxyXG4gICAgICAgICAgPEFpT3V0bGluZU1lbnUgY2xhc3M9XCJkYXJrOltjb2xvcjp3aGl0ZV1cIiBzaXplPXsyNn0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICBpc05hdk9wZW5cclxuICAgICAgICAgICAgICA/IFwiZml4ZWQgbGVmdC0wIHRvcC0wIHctWzY1JV0gbWQ6aGlkZGVuIGgtc2NyZWVuIGJnLVsjZWNmMGYzXSBkYXJrOmJnLVsjMGM0MjYxXSBwLTEwIGVhc2UtaW4gZHVyYXRpb24tNTAwXCJcclxuICAgICAgICAgICAgICA6IFwiZml4ZWQgbGVmdC1bLTEwMCVdIHRvcC0wIHAtMTAgZWFzZS1pbiBkdXJhdGlvbi01MDBcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGwgaXRlbXMtY2VudGVyIGp1c3RpZnktZW5kXCI+XHJcbiAgICAgICAgICAgIDxkaXYgb25DbGljaz17aGFuZGxlTmF2fSBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxBaU91dGxpbmVDbG9zZSBjbGFzcz1cImRhcms6W2NvbG9yOndoaXRlXVwiIHNpemU9ezI2fSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgtY29sIHB5LTRcIj5cclxuICAgICAgICAgICAgPHVsIGNsYXNzPVwiZm9udC1tZWRpdW0gZmxleCBmbGV4LWNvbCBwLTQgbWQ6cC0wIG10LTQgXCI+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNBYm91dE1lXCI+XHJcbiAgICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNOYXZPcGVuKGZhbHNlKX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC0yeGwgcHktMiBwbC0zIHByLTQgbXktMSBtdC0yIHRleHQtZ3JheS05MDAgcm91bmRlZCBob3ZlcjpiZy1ncmF5LTEwMCBtZDpob3ZlcjpiZy10cmFuc3BhcmVudCBkYXJrOnRleHQtd2hpdGUgbWQ6cC0wICBcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBBYm91dFxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNTa2lsbHNcIj5cclxuICAgICAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc05hdk9wZW4oZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LTJ4bCBweS0yIHBsLTMgcHItNCBteS0xIG10LTIgdGV4dC1ncmF5LTkwMCByb3VuZGVkIGhvdmVyOmJnLWdyYXktMTAwIG1kOmhvdmVyOmJnLXRyYW5zcGFyZW50IGRhcms6dGV4dC13aGl0ZSBtZDpwLTAgXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgU2tpbGxzXHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiI3Byb2plY3RzXCI+XHJcbiAgICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNOYXZPcGVuKGZhbHNlKX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC0yeGwgcHktMiBwbC0zIHByLTQgbXktMSBtdC0yICB0ZXh0LWdyYXktOTAwIHJvdW5kZWQgaG92ZXI6YmctZ3JheS0xMDAgbWQ6aG92ZXI6YmctdHJhbnNwYXJlbnQgZGFyazp0ZXh0LXdoaXRlIG1kOnAtMCBcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBQcm9qZWN0c1xyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNjb250YWN0XCI+XHJcbiAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNOYXZPcGVuKGZhbHNlKX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC0yeGwgcHktMiBwbC0zIHByLTQgbXktMSBtdC0yIHRleHQtZ3JheS05MDAgcm91bmRlZCBob3ZlcjpiZy1ncmF5LTEwMCBtZDpob3ZlcjpiZy10cmFuc3BhcmVudCBkYXJrOnRleHQtd2hpdGUgbWQ6cC0wIFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIENvbnRhY3RcclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uYXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGluayIsIkFpT3V0bGluZU1lbnUiLCJBaU91dGxpbmVDbG9zZSIsInVzZVN0YXRlIiwiSW1hZ2UiLCJrcmF0b3MiLCJOYXZiYXIiLCJpc05hdk9wZW4iLCJzZXRJc05hdk9wZW4iLCJoYW5kbGVOYXYiLCJjb25zb2xlIiwibG9nIiwibmF2IiwiY2xhc3MiLCJkaXYiLCJhIiwiaHJlZiIsImNsYXNzTmFtZSIsInNyYyIsImFsdCIsInNwYW4iLCJpZCIsInVsIiwibGkiLCJvbkNsaWNrIiwic2l6ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Navbar.jsx\n"));

/***/ })

});