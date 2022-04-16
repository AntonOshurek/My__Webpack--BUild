/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./source/scripts/block-1.js":
/*!***********************************!*\
  !*** ./source/scripts/block-1.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bar": function() { return /* binding */ bar; },
/* harmony export */   "default": function() { return /* binding */ saydefault; },
/* harmony export */   "foo": function() { return /* binding */ foo; },
/* harmony export */   "rename": function() { return /* binding */ rename; },
/* harmony export */   "saysome": function() { return /* binding */ saysome; }
/* harmony export */ });
//old

/* function hello() {
    console.log('hello bro');
    let hello = 'hello bro';
    const par = document.querySelector('.webpack-title').innerHTML = hello;
}
module.exports = hello; */
//es 6 standart!
//for default export!!!
//export default function saysome()
function saysome() {
  let hello = 'hello bro iam es-6 :)';
  const par = document.querySelector('.webpack-title').innerHTML = hello;
}
;
function saydefault() {
  let hello = 'hello i am a default function bro :)';
  console.log(hello);
}
;
/*-------------------------------------*/

let foo = 'foo';
let bar = 'bar';

let rename = 'rename';

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!*********************************!*\
  !*** ./source/scripts/index.js ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _block_1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block-1 */ "./source/scripts/block-1.js");
//old
//const hello = require('./block-1');
//hello();
//es 6 standart!

console.log(`${_block_1__WEBPACK_IMPORTED_MODULE_0__.foo} ${_block_1__WEBPACK_IMPORTED_MODULE_0__.bar}`); //default


(0,_block_1__WEBPACK_IMPORTED_MODULE_0__["default"])(); //how renames inport variables or functions or some one)


console.log(_block_1__WEBPACK_IMPORTED_MODULE_0__.rename); //import all functions and variables of js file


console.log(`${_block_1__WEBPACK_IMPORTED_MODULE_0__.foo} or ${_block_1__WEBPACK_IMPORTED_MODULE_0__.bar}`); //we get an object and work with it as an object

_block_1__WEBPACK_IMPORTED_MODULE_0__.saysome();
window.addEventListener('DOMContentLoaded', () => {
  (0,_block_1__WEBPACK_IMPORTED_MODULE_0__["default"])();
});
}();
/******/ })()
;
//# sourceMappingURL=bundle.js.map