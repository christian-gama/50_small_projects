const panels = document.querySelectorAll('.panel') as NodeListOf<HTMLDivElement>;

if (panels) {
    panels.forEach((panel: HTMLDivElement) => {
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
