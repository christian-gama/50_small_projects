export class BlurryLoading {
    private static _instance: BlurryLoading | null = null;
    private background = document.querySelector('.loading__background') as HTMLDivElement;
    private text = document.querySelector('.loading__text') as HTMLDivElement;
    private load = 0;

    private constructor() {
        this.init();
    }

    public static get instance(): BlurryLoading {
        if (BlurryLoading._instance === null) {
            BlurryLoading._instance = new BlurryLoading();
        }
        return BlurryLoading._instance;
    }

    init(): void {
        const timer = setInterval(() => {
            this.unBlurImage();
            this.hideText();
            this.updateText();
            this.load++;

            if (this.load === 100) clearInterval(timer);
        }, 50);
    }

    unBlurImage(): void {
        this.background.style.filter = `blur(${this.scale(this.load, 0, 100, 30, 0)}px)`;
    }

    hideText(): void {
        this.text.style.opacity = `${this.scale(this.load, 0, 100, 1, 0)}`;
    }

    updateText(): void {
        this.text.innerHTML = `${this.load}%`;
    }

    scale(number: number, inMin: number, inMax: number, outMin: number, outMax: number): number {
        return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
    }
}

BlurryLoading.instance;
