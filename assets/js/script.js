const body = document.querySelector('body');
const h1 = document.querySelector('h1');
const header = document.querySelector('header');
const nav = document.querySelector('nav');
const burger = document.querySelector('.burger');
const appWrapper = document.querySelector('.app-wrapper');
const footer = document.querySelector('footer');
const year = document.querySelector('span.year');
const hostname = document.querySelector('span.hostname');
const footerBottom = document.querySelector('.footer-bottom');
const mobileMenu = document.querySelector('.mobile-menu');
const burgerIcon = document.querySelector('.burger i');
console.log(h1);

const headerObserver = new IntersectionObserver((obj) => {
  if (!obj[0].isIntersecting) {
    h1.classList.add('shrink');
    nav.querySelector('.wrapper').classList.add('lg:h-[80px]');
    nav.classList.add('opaque');
  } else {
    h1.classList.remove('shrink');
    nav.querySelector('.wrapper').classList.remove('lg:h-[80px]');
    nav.classList.remove('opaque');
  }
}, { threshold: 0.5 });

const footerObserver = new IntersectionObserver((obj) => {
  if (!obj[0].isIntersecting) {
    nav.classList.remove('lg:-translate-y-72');
    footerBottom.classList.add('translate-y-[200px]');
  } else {
    nav.classList.add('lg:-translate-y-72');
    footerBottom.classList.remove('translate-y-[200px]');
  }
}, { threshold: 0.9 });

headerObserver.observe(header);
footerObserver.observe(footer);
year.textContent = new Date().getFullYear();
hostname.textContent = window.location.hostname;

const toggleMenu = () => {
  body.classList.toggle('overflow-hidden');
  appWrapper.classList.toggle('menu-open');
  mobileMenu.classList.toggle('menu-open');
  footerBottom.classList.toggle('translate-y-[200px]');
  burgerIcon.classList.toggle('fa-xmark');
}