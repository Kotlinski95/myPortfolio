let project = document.getElementsByClassName('main-projects__item');
let portfolio = document.getElementsByClassName('main-projects__list');
let buttonsDiv = document.getElementsByClassName('main-projects__nav-item');
let buttonLeft = buttonsDiv[0].querySelector('i');
let buttonRight = buttonsDiv[1].querySelector('i');
let description = document.getElementsByClassName('main-projects__description-mobile');
let projectsAmount = project.length;
let actualProject = Math.floor(Math.random() * projectsAmount + 1);


var pageWidth = Math.max(body.scrollWidth, body.offsetWidth,
    html.clientWidth, html.scrollWidth, html.offsetWidth);

function resizePage() {
    var pageWidth = Math.max(body.scrollWidth, body.offsetWidth,
        html.clientWidth, html.scrollWidth, html.offsetWidth);
    if (pageWidth < 700) {
        for (let i = 0; i < project.length; i++) {
            project[i].style.display = "none";
        }
    } else {
        for (let i = 0; i < project.length; i++) {
            project[i].style.display = "block";
        }
    }
}

if (pageWidth <= 700) {
    var mobile = true;
    var timerChange = 0;
    var timerHide = 0;

    let lastX = null;
    let startX;
    let directionX; // 1 -> right, -1 -> left, 0 - no move
    let lastDirection;

    description[0].style.display = "block";

    function projectHide() {
        $(".main-projects__item").fadeOut(500);
        $(`.main-projects__description-mobile`).fadeOut(100);
    }

    function changeProjectManually(direction) {
        clearTimeout(timerChange);
        clearTimeout(timerHide);

        projectHide();
        setTimeout(`changeProject(${direction})`, 0)
    }

    function checkDirection() {

        portfolio[0].addEventListener('touchstart', function (event) {
            startX = event.targetTouches[0].pageX
        }, false);

        portfolio[0].addEventListener('touchmove', function (event) {
            lastX = event.targetTouches[0].pageX

        }, false);

        portfolio[0].addEventListener('touchend', function (event) {
            lastX = startX;
            return directionX = 0;
        }, false);

        if ((startX - lastX) > 30) {
            directionX = -1;
            if (lastDirection != directionX) {
                changeProjectManually(true)
            }
        } else if ((startX - lastX) < -30) {
            directionX = 1;
            if (lastDirection != directionX) {
                changeProjectManually(false)
            }
        } else {
            directionX = 0;
        }

        lastDirection = directionX;
        return directionX;
    }

    function changeProject(direction = true) {
        let previousProject = actualProject;
        if (!projectBusy) {
            if (direction) {
                actualProject++;
            } else {
                actualProject--;
            }
            if (actualProject > projectsAmount) {
                actualProject = 1;
            } else if (actualProject < 1) {
                actualProject = projectsAmount;
            }
            project[previousProject - 1].style.display = "none";

            let descriptionProject = project[actualProject - 1].getElementsByClassName('main-projects__item-description');
            let descriptionText1 = descriptionProject[0].querySelector('h3');
            let descriptionText2 = descriptionProject[0].getElementsByTagName('p');
            description[0].innerHTML = descriptionText1.textContent + "<br>" + descriptionText2[0].textContent + "<br>" + descriptionText2[1].textContent;
            description[0].style.fontSize = "20px";
            description[0].style.color = '#4e320b';
            description[0].style.textAlign = 'center';


            $(`.main-projects__description-mobile`).fadeIn(1000);
            $(`.main-projects__item:eq(${actualProject - 1})`).fadeIn(1000);
            clearTimeout(timerChange);
            clearTimeout(timerHide);
            timerHide = setTimeout('projectHide()', 7500);
            timerChange = setTimeout('changeProject(true)', 8000);
        }
    }
    setInterval(checkDirection, 400)
    window.addEventListener("load", changeProject);
} else {
    var mobile = false;
}
buttonLeft.addEventListener("click", function () {
    if (!projectBusy) {
        changeProjectManually(false);
    }
});
buttonRight.addEventListener("click", function () {
    if (!projectBusy) {
        changeProjectManually(true);
    }
});