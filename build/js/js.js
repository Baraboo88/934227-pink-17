var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.page-header__toggle');
var pageHeader = document.querySelector('.page-header ');
var downloadBlock = document.querySelector('.download ');
var downloadWrapper = document.querySelector('.download__wrapper');
var pageMainWrapper = document.querySelector('.page-main__title-wrapper');


navToggle.classList.remove('page-header__toggle--nojs');


navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    navToggle.classList.add('page-header__toggle--open');
    navToggle.classList.remove('page-header__toggle--closed');
    pageHeader.classList.remove('page-header--transparent');
    if (pageMainWrapper!== null) {
      pageMainWrapper.classList.remove('page-main--transparent');
    }
    if (downloadBlock!== null) {
      downloadBlock.classList.remove('page-header--transparent');
      downloadBlock.classList.remove('download--transparent');
      downloadWrapper.classList.remove('download--transparent');
    }

  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    navToggle.classList.remove('page-header__toggle--open');
    navToggle.classList.add('page-header__toggle--closed');
    pageHeader.classList.add('page-header--transparent');
    if (pageMainWrapper!== null) {
      pageMainWrapper.classList.add('page-main--transparent');
    }
    if (downloadBlock!== null) {
      downloadBlock.classList.add('download--transparent');
      downloadWrapper.classList.add('download--transparent');
    }
  }
});
