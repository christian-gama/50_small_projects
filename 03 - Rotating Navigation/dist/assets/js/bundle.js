/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.container = exports.close = exports.open = void 0;
exports.open = document.querySelector('#open');
exports.close = document.querySelector('#close');
exports.container = document.querySelector('.container');
exports.open.addEventListener('click', () => {
    exports.container.classList.add('show-nav');
});
exports.close.addEventListener('click', () => {
    exports.container.classList.remove('show-nav');
});


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"](0, __webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map