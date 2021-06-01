/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it uses a non-standard name for the exports (exports).
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ScrollAnimation = void 0;
class ScrollAnimation {
    constructor() {
        this.boxes = document.querySelectorAll('.box');
        this.init();
    }
    init() {
        this.checkBoxes();
        window.addEventListener('scroll', () => this.checkBoxes());
    }
    checkBoxes() {
        const triggerBottom = window.innerHeight * 0.8;
        this.boxes.forEach((box) => {
            const boxTop = box.getBoundingClientRect().top;
            if (boxTop < triggerBottom) {
                box.classList.add('show');
            }
            else {
                box.classList.remove('show');
            }
        });
    }
}
exports.ScrollAnimation = ScrollAnimation;
new ScrollAnimation().init();

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map