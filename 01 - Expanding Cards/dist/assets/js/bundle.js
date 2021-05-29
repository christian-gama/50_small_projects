/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

const panels = document.querySelectorAll('.panel');
if (panels) {
    panels.forEach((panel) => {
        panel.addEventListener('click', () => {
            removeActiveClasses();
            panel.classList.add('active');
        });
    });
}
function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active');
    });
}

/******/ })()
;
//# sourceMappingURL=bundle.js.map
