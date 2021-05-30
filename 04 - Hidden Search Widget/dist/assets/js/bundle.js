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
exports.SearchBar = void 0;
class SearchBar {
    constructor() {
        this.searchContainer = document.querySelector('.search__container');
        this.searchInput = document.querySelector('.search__input');
        this.init();
    }
    static get instance() {
        if (SearchBar._instance === null) {
            SearchBar._instance = new SearchBar();
        }
        return SearchBar._instance;
    }
    init() {
        this.setEventToActive();
        this.setEventToHide();
        this.setSubmitOnEnter();
        this.setHideOnEscape();
    }
    setEventToActive() {
        this.searchContainer.addEventListener('click', (event) => {
            event.preventDefault();
            this.searchContainer.classList.add('search__container--active');
            this.searchInput.focus();
        });
    }
    setEventToHide() {
        document.addEventListener('click', (event) => {
            const element = event.target;
            if (element.nodeName !== 'INPUT' && element.nodeName !== 'BUTTON' && element.nodeName !== 'I') {
                this.searchContainer.classList.remove('search__container--active');
                this.searchInput.blur();
            }
        });
    }
    setSubmitOnEnter() {
        this.searchInput.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                this.searchContainer.submit();
            }
        });
    }
    setHideOnEscape() {
        this.searchInput.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                this.searchContainer.classList.remove('search__container--active');
                this.searchInput.value = '';
                this.searchInput.blur();
            }
        });
    }
}
exports.SearchBar = SearchBar;
SearchBar._instance = null;
SearchBar.instance;

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map