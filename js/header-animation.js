var previousScrollTop;
var isScrolling;
var nav = document.getElementsByClassName('main-header__wrapper');
var scrollUp = document.getElementsByClassName('main-navigation__scroll-Up');

var body = document.body,
  html = document.documentElement;

var pageHeight = Math.max(body.scrollHeight, body.offsetHeight,
  html.clientHeight, html.scrollHeight, html.offsetHeight);

function hasScrolled(scrollTop) {
  var scrollTop = window.scrollY;
  if (scrollTop > previousScrollTop) {
    nav[0].classList.add('main-header__wrapperUp');
    if (scrollTop > 0.15 * pageHeight) {
      scrollUp[0].style.display = 'initial';
    }
  } else {
    nav[0].classList.remove('main-header__wrapperUp');
    scrollUp[0].style.display = 'none';
  }
  previousScrollTop = scrollTop;
}

window.addEventListener("click", function (event) {
  var userClickedWindow = !event.target.matches(".main-header__dropdown") &&
    !event.target.matches(".main-header__dropdown i") &&
    !event.target.matches(".main-header__navigation") &&
    !event.target.matches(".main-header__navigation-pages") &&
    !event.target.matches(".main-projects__item") &&
    !event.target.matches(".main-projects__item-screen") &&
    !event.target.matches(".main-projects__item-footer") &&
    !event.target.matches(".main-projects__item-screen img") &&
    !event.target.matches(".main-projects__item-description") &&
    !event.target.matches("img") &&
    !event.target.matches("h3") &&
    !event.target.matches("label") &&
    !event.target.matches(".main-projects__item-description img")&&
    !event.target.matches("input")&&
    !event.target.matches("textarea");
  if (
    userClickedWindow &&
    nav[0].classList.contains("main-header__wrapperUp")
  ) {
    hasScrolled();
  } else if (userClickedWindow &&
    !nav[0].classList.contains("main-header__wrapperUp")) {
    nav[0].classList.add('main-header__wrapperUp');
  }
});

document.addEventListener('scroll', function () {
  isScrolling = true;
}, false);

setInterval(function () {
  if (isScrolling) {
    hasScrolled();
    isScrolling = false;
  }
}, 100);