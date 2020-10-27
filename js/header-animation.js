var previousScrollTop;
var isScrolling;
var nav = document.getElementsByClassName('main-header__wrapper');
var scrollUp = document.getElementsByClassName('main-navigation__scroll-Up');
function hasScrolled() {
    var scrollTop = window.scrollY;
    if (scrollTop > previousScrollTop) {
        nav[0].classList.add('main-header__wrapperUp');
        scrollUp[0].style.display = 'initial';
    } else {
        nav[0].classList.remove('main-header__wrapperUp');
        scrollUp[0].style.display = 'none';
    }
    previousScrollTop = scrollTop;
}

document.addEventListener('scroll', function() {
    isScrolling = true;
}, false);

  setInterval(function() {
    if (isScrolling) {
      hasScrolled();
      isScrolling = false;
    }
  }, 100);