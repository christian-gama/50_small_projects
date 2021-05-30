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
exports.BlurryLoading = void 0;
class BlurryLoading {
    constructor() {
        this.background = document.querySelector('.loading__background');
        this.text = document.querySelector('.loading__text');
        this.load = 0;
        this.init();
    }
    static get instance() {
        if (BlurryLoading._instance === null) {
            BlurryLoading._instance = new BlurryLoading();
        }
        return BlurryLoading._instance;
    }
    init() {
        const timer = setInterval(() => {
            this.unBlurImage();
            this.hideText();
            this.updateText();
            this.load++;
            if (this.load === 100)
                clearInterval(timer);
        }, 50);
    }
    unBlurImage() {
        this.background.style.filter = `blur(${this.scale(this.load, 0, 100, 30, 0)}px)`;
    }
    hideText() {
        this.text.style.opacity = `${this.scale(this.load, 0, 100, 1, 0)}`;
    }
    updateText() {
        this.text.innerHTML = `${this.load}%`;
    }
    scale(number, inMin, inMax, outMin, outMax) {
        return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
    }
}
exports.BlurryLoading = BlurryLoading;
BlurryLoading._instance = null;
BlurryLoading.instance;

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map