/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
var isShowed = false;

function myFunction() {
    document
        .getElementsByClassName("main-header__navigation-pages")[0]
        .classList.toggle("show");
    if (isShowed) {
        isShowed = false;
    } else {
        isShowed = true;
    }
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (
        !event.target.matches(".main-header__dropdown") &&
        !event.target.matches(".main-header__dropdown i") &&
        !event.target.matches(".main-header__navigation") &&
        !event.target.matches(".main-header__navigation-pages")
    ) {
        var dropdowns = document.getElementsByClassName(
            "main-header__navigation-pages"
        );
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains("show")) {
                openDropdown.classList.remove("show");
            }
        }
    }
};

window.onscroll = function (event) {
    var dropdowns = document.getElementsByClassName(
        "main-header__navigation-pages"
    );
    var i;
    for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
            openDropdown.classList.remove("show");
        }
    }
};