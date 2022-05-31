const mobileMenuBtn = document.querySelector('.mobile_menu_btn');
const mobileMenu = document.querySelector('.mobile_menu');

mobileMenuBtn.addEventListener('click', (evt) => {
    evt.stopPropagation();
    mobileMenu.classList.toggle('open');
})

mobileMenu.addEventListener('click', (evt) => {
    evt.stopPropagation();
})
document.body.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
})