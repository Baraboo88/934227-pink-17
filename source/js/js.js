
var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.page-header__toggle');

navToggle.classList.remove('page-header__toggle--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    navToggle.classList.add('page-header__toggle--open');
    navToggle.classList.remove('page-header__toggle--closed');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    navToggle.classList.remove('page-header__toggle--open');
    navToggle.classList.add('page-header__toggle--closed');
  }
});

