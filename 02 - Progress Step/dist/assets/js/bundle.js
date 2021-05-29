/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

class ProgressStepComponent {
    constructor() {
        this.progressBar = document.querySelector('.progress-step__bar');
        this.circles = document.querySelectorAll('.progress-step__circle');
        this.buttons = document.querySelectorAll('#progress-step__previous, #progress-step__next');
        this.currentStep = 1;
    }
    addEventToButtons() {
        if (this.buttons) {
            this.buttons.forEach((button) => {
                button.addEventListener('click', () => this.toggleButton(button));
            });
        }
    }
    toggleButton(button) {
        button.id === 'progress-step__next' ? this.currentStep++ : this.currentStep--;
        if (this.currentStep > 1 && this.currentStep < this.circles.length) {
            this.buttons[0].disabled = false;
            this.buttons[1].disabled = false;
        }
        if (this.currentStep <= 1) {
            this.buttons[0].disabled = true;
        }
        if (this.currentStep >= this.circles.length) {
            this.buttons[1].disabled = true;
        }
        return this.updateStep();
    }
    updateStep() {
        this.circles.forEach((circle, index) => {
            if (this.currentStep > index)
                return circle.classList.add('progress-step__circle--active');
            circle.classList.remove('progress-step__circle--active');
        });
        return this.updateProgress();
    }
    updateProgress() {
        if (this.progressBar) {
            this.progressBar.style.width = `${((this.currentStep - 1) / (this.circles.length - 1)) * 100}%`;
        }
    }
}
const progressBar = new ProgressStepComponent();
progressBar.addEventToButtons();

/******/ })()
;
//# sourceMappingURL=bundle.js.map