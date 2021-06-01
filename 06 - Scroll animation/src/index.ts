export class ScrollAnimation {
    private readonly boxes: NodeListOf<HTMLDivElement>;

    constructor() {
        this.boxes = document.querySelectorAll('.box');
        this.init();
    }

    init(): void {
        this.checkBoxes();
        window.addEventListener('scroll', () => this.checkBoxes());
    }

    checkBoxes(): void {
        const triggerBottom = window.innerHeight * 0.8;

        this.boxes.forEach((box: HTMLDivElement) => {
            const boxTop = box.getBoundingClientRect().top;

            if (boxTop < triggerBottom) {
                box.classList.add('show');
            } else {
                box.classList.remove('show');
            }
        });
    }
}

new ScrollAnimation().init();
