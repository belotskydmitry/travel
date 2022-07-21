'use strict'
console.log('Вёрстка валидная +10\nВёрстка семантическая +20\nВёрстка соответствует макету +48\nТребования к css + 12\nИнтерактивность, реализуемая через css +20');
console.log('Вёрстка соответствует макету. Ширина экрана 390px +48\nНи на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15\nНа ширине экрана 390рх и меньше реализовано адаптивное меню +22');

let headerBurger = document.querySelector('.header_burger');
let headerBurgerMenu = document.querySelector('.header_burger-menu');
let headerCloseMenu = document.querySelector('.header_close-menu');
let headerLinkHow = document.querySelector('.header_link-how');
let headerLinkPlan = document.querySelector('.header_link-plan');
let headerLinkDestinations = document.querySelector('.header_link-destinations');
let headerLinkStories = document.querySelector('.header_link-stories');
let headerLinkAccount = document.querySelector('.header_link-account');
let headerLinkSocial = document.querySelector('.header_link-social');

headerBurger.addEventListener('click', function() {
    headerBurgerMenu.classList.toggle('active');
})
headerCloseMenu.addEventListener('click', function() {
    headerBurgerMenu.classList.toggle('active');
})
headerLinkHow.addEventListener('click', function() {
    headerBurgerMenu.classList.toggle('active');
})
headerLinkPlan.addEventListener('click', function() {
    headerBurgerMenu.classList.toggle('active');
})
headerLinkDestinations.addEventListener('click', function() {
    headerBurgerMenu.classList.toggle('active');
})
headerLinkStories.addEventListener('click', function() {
    headerBurgerMenu.classList.toggle('active');
})
headerLinkAccount.addEventListener('click', function() {
    headerBurgerMenu.classList.toggle('active');
})
headerLinkSocial.addEventListener('click', function() {
    headerBurgerMenu.classList.toggle('active');
})



let offset = 0;
const destinationsImages = document.querySelector('.destinations_images');

document.querySelector('.destinations_dot-1').addEventListener('click', function() {
    offset += 850;
    if (offset > 850) {
        offset = 0;
    }
    destinationsImages.style.left = offset + 'px';
})

document.querySelector('.destinations_dot-2').addEventListener('click', function() {
    offset += 850;
    if (offset > 850) {
        offset = 0;
    }
    destinationsImages.style.left = offset + 'px';
})
document.querySelector('.destinations_dot-3').addEventListener('click', function() {
    offset -= 850;
    if (offset < 0) {
        offset = -850;
    }
    destinationsImages.style.left = offset + 'px';
})
document.querySelector('.destinations_spain').addEventListener('click', function() {
    offset += 850;
    if (offset > 850) {
        offset = 0;
    }
    destinationsImages.style.left = offset + 'px';
})
document.querySelector('.destinations_japan').addEventListener('click', function() {
    offset += 850;
    if (offset > 850) {
        offset = 0;
    }
    destinationsImages.style.left = offset + 'px';
})
document.querySelector('.destinations_usa').addEventListener('click', function() {
    offset -= 850;
    if (offset < 0) {
        offset = -850;
    }
    destinationsImages.style.left = offset + 'px';
})