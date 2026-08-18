const menu = document.querySelector('#menu');
const close = document.querySelector('#close');
const backdrop = document.querySelector('.backdrop');
const aside = document.querySelector('aside');

menu.addEventListener('click', () => {
    aside.classList.add('open');
    backdrop.classList.add('open');
})

close.addEventListener('click', () => {
    aside.classList.remove('open');
    backdrop.classList.remove('open');
})