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



/*let offset = 0;
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
document.querySelector('.destinations_japan-active').addEventListener('click', function() {
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
})*/

/*const slider = document.querySelector('.destinations_images');
const pagination = document.querySelector('.destinations_pagination');

function setSlide(active) {
    const widthOneSlide = document.querySelector('figure').clientWidth;
    const gapWidth = getComputedStyle(document.querySelector('.destinations_images')).gap;
    const value = widthOneSlide + parseInt(gapWidth);

    document.querySelector('.dot-active').classList.remove('destinations_japan-active');
    document.querySelector('figure.destinations_japan-active').classList.remove('destinations_japan-active');

    document.querySelector(`.dot[data-slide = '${active}']`).classList.add('destinations_japan-active');
    document.querySelector(`figure[data-slide = '${active}']`).classList.add('destinations_japan-active');

    document.querySelector('.destinations_images').style.left = `${active * value}px`;
}

pagination.addEventListener('click', e => {
    if (e.target.dataset && e.target.dataset.slide) {
        const active = e.target.dataset.slide

        if (e.target.classList.contains('destinations_japan-active')) return false;
        setSlide(parseInt(active));
    }
})

slider.addEventListener('click', e => {
    if (e.target.closest('figure')) {
        const active = parseInt(e.target.closest('figure').dataset.slide)

        if (e.target.closest('figure').classList.contains('destinations_japan-active')) return false;
        setSlide(parseInt(active));
    }
})*/

const slider = document.querySelector('.destinations_images')
            const pagination = document.querySelector('.destinations_pagination')

            function setSlide (active) {
                const widthOneSlide = document.querySelector('.destinations_images > figure').clientWidth
                const gapWidth = getComputedStyle(document.querySelector('.destinations_images')).gap

                const value = widthOneSlide + parseInt(gapWidth)

                document.querySelector('.dot.active').classList.remove('active')
                document.querySelector('figure.active').classList.remove('active')

                document.querySelector(`.dot[data-slide="${active}"]`).classList.add('active')
                document.querySelector(`figure[data-slide="${active}"]`).classList.add('active')

                

                document.querySelector('.destinations_images').style.left = `${active * value}px`
            }

            pagination.addEventListener('click', e => {
                
                if (e.target.dataset && e.target.dataset.slide) {
                    const active = e.target.dataset.slide

                    
                    if (e.target.classList.contains('active')) return false

                    setSlide(parseInt(active))
                }
            })

            slider.addEventListener('click', e => {
                
                if (e.target.closest('figure')) {
                    const active = parseInt(e.target.closest('figure').dataset.slide)

                    
                    if (e.target.closest('figure').classList.contains('active')) return false

                    setSlide(parseInt(active))
                }
            })