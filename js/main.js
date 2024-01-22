'use strict'

//Открытие мобильного меню
const menuButton = document.querySelector('.menu');
const nav =  document.querySelector('.nav-list');
const body = document.body;

let toggleMenu = function() {
nav.classList.toggle('menu-open');
menuButton.classList.toggle('menu-close');
menuButton.classList.toggle('menu-burger');
if (window.matchMedia('(max-width: 1200px)')) {
body.classList.toggle('no-scroll');
}
};

menuButton.addEventListener("click", toggleMenu);


//  Переход по якорным ссылкам
const anchors = document.querySelectorAll(".scroll-to");
const menuItems = document.querySelectorAll(".header-wrapper .link-nav");

anchors.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = this.getAttribute("href").substring(1);
    const scrollTarget = document.getElementById(href);
    const topOffset = 100;
    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset;

    window.scrollBy({
      top: offsetPosition,
      behavior: "smooth",
    });
  });
});

// переход по якорным ссылкам из мобильного меню
menuItems.forEach((item) => {
  item.addEventListener("click", () => {
   toggleMenu();
   body.classList.remove('no-scroll');
  });
});


// удаление атрибута задержки анимации на размерах экрана меньше 680

window.addEventListener('resize', mobile)


const dataAttr = document.querySelectorAll('[data-wow-delay]');

function mobile(){
  if( window.innerWidth <= 680 ){
    dataAttr.forEach(function(element) {
      element.removeAttribute('data-wow-delay');
    });
 }
}
mobile();
//animate 
new WOW().init();