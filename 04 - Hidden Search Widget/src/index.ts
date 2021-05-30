export class SearchBar {
    private static _instance: SearchBar | null = null;
    private searchContainer = document.querySelector('.search__container') as HTMLFormElement;
    private searchInput = document.querySelector('.search__input') as HTMLInputElement;

    private constructor() {
        this.init();
    }

    public static get instance(): SearchBar {
        if (SearchBar._instance === null) {
            SearchBar._instance = new SearchBar();
        }

        return SearchBar._instance;
    }

    init(): void {
        this.setEventToActive();
        this.setEventToHide();
        this.setSubmitOnEnter();
        this.setHideOnEscape();
    }

    setEventToActive(): void {
        this.searchContainer.addEventListener('click', (event) => {
            event.preventDefault();

            this.searchContainer.classList.add('search__container--active');
            this.searchInput.focus();
        });
    }

    setEventToHide(): void {
        document.addEventListener('click', (event) => {
            const element = event.target as HTMLElement;

            if (element.nodeName !== 'INPUT' && element.nodeName !== 'BUTTON' && element.nodeName !== 'I') {
                this.searchContainer.classList.remove('search__container--active');
                this.searchInput.blur();
            }
        });
    }

    setSubmitOnEnter(): void {
        this.searchInput.addEventListener('keydown', (event: KeyboardEvent) => {
            if (event.key === 'Enter') {
                this.searchContainer.submit();
            }
        });
    }

    setHideOnEscape(): void {
        this.searchInput.addEventListener('keydown', (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                this.searchContainer.classList.remove('search__container--active');
                this.searchInput.value = '';
                this.searchInput.blur();
            }
        });
    }
}

SearchBar.instance;
