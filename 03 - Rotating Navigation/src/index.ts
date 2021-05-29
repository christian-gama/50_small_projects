export const open = document.querySelector('#open') as HTMLElement;
export const close = document.querySelector('#close') as HTMLElement;
export const container = document.querySelector('.container') as HTMLDivElement;

open.addEventListener('click', () => {
    container.classList.add('show-nav');
});

close.addEventListener('click', () => {
    container.classList.remove('show-nav');
});
