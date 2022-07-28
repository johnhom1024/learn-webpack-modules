/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/bundle.js":
/*!***********************!*\
  !*** ./src/bundle.js ***!
  \***********************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var answer = 42;

var printAnswer = function printAnswer() {
  // 打印
  console.log("the answer is ".concat(answer));
};

var index = {
  printAnswer: printAnswer
};
exports["default"] = index;
exports.printAnswer = printAnswer;

/***/ }),

/***/ "./src/cjs.mod.js":
/*!************************!*\
  !*** ./src/cjs.mod.js ***!
  \************************/
/***/ ((module, exports) => {

// 这里使用cjs的规范
function bar(params) {
  return 1;
}

function foo(params) {
  return 2;
} // exports.foo = foo;


module.exports = foo;
exports.bar = bar;

/***/ }),

/***/ "./src/esm.mod.js":
/*!************************!*\
  !*** ./src/esm.mod.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bar1": () => (/* binding */ bar1),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// 这里使用esm的规范
function foo1(params) {
  return 2;
}

function bar1(params) {
  return 3;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (foo1);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _cjs_mod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cjs.mod */ "./src/cjs.mod.js");
/* harmony import */ var _cjs_mod__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_cjs_mod__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _esm_mod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./esm.mod */ "./src/esm.mod.js");
/* harmony import */ var _bundle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bundle */ "./src/bundle.js");



console.log((_cjs_mod__WEBPACK_IMPORTED_MODULE_0___default()));
console.log((_cjs_mod__WEBPACK_IMPORTED_MODULE_0___default().bar));
console.log(_esm_mod__WEBPACK_IMPORTED_MODULE_1__["default"]); // console.log(bar1);

console.log(_bundle__WEBPACK_IMPORTED_MODULE_2__["default"].printAnswer(111));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_esm_mod__WEBPACK_IMPORTED_MODULE_1__["default"]);
})();

/******/ })()
;