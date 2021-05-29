class ProgressStepComponent {
    private progressBar: HTMLDivElement | null;
    private circles: NodeListOf<HTMLDivElement>;
    private buttons: NodeListOf<HTMLButtonElement>;
    private currentStep;

    constructor() {
        this.progressBar = document.querySelector('.progress-step__bar');
        this.circles = document.querySelectorAll('.progress-step__circle');
        this.buttons = document.querySelectorAll('#progress-step__previous, #progress-step__next');
        this.currentStep = 1;
    }

    addEventToButtons(): void {
        if (this.buttons) {
            this.buttons.forEach((button) => {
                button.addEventListener('click', () => this.toggleButton(button));
            });
        }
    }

    toggleButton(button: HTMLButtonElement): void {
        button.id === 'progress-step__next' ? this.currentStep++ : this.currentStep--;

        if (this.currentStep > 1 && this.currentStep < this.circles.length) {
            this.buttons.forEach((button) => (button.disabled = false));
        }

        if (this.currentStep <= 1 && button.id === 'progress-step__previous') {
            button.disabled = true;
        }

        if (this.currentStep >= this.circles.length && button.id === 'progress-step__next') {
            button.disabled = true;
        }

        return this.updateStep();
    }

    updateStep(): void {
        this.circles.forEach((circle, index) => {
            if (this.currentStep > index) return circle.classList.add('progress-step__circle--active');
            circle.classList.remove('progress-step__circle--active');
        });

        return this.updateProgress();
    }

    updateProgress(): void {
        if (this.progressBar) {
            this.progressBar.style.width = `${((this.currentStep - 1) / (this.circles.length - 1)) * 100}%`;
        }
    }
}

const progressBar = new ProgressStepComponent();
progressBar.addEventToButtons();
