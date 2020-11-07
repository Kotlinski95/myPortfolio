let isClicked = [];
let projectBusy;

function projectOpened(clicked) {
    for (let i in clicked) {
        if (clicked[i]) {
            return true;
        }
    }
    return false;
}

function portfolioShow(projectNumber) {
    isClicked[projectNumber] = isClicked[projectNumber] ? false : true;
    const project = document.getElementsByClassName('main-projects__item');
    const screen = project[projectNumber - 1].getElementsByClassName('main-projects__item-screen');
    const img = screen[0].querySelector('img');
    const bitbucket = document.getElementsByClassName('main-projects__item-bitbucket');
    let bitbucket_img = bitbucket[projectNumber - 1].querySelector('img');
    const demo = document.getElementsByClassName('main-projects__item-demo');
    let demo_img = demo[projectNumber - 1].querySelector('img');
    const description = project[projectNumber - 1].querySelector('.main-projects__item-description');

    if (isClicked[projectNumber]) {
        projectBusy = true;
        project[projectNumber - 1].style.backgroundColor = 'rgb(228, 207, 172)';
        img.style.opacity = '0.1';
        bitbucket_img.src = "./images/bit_bucket_icon_white.png";
        demo_img.src = "./images/external_link_icon_white.png";
        description.style.opacity = '1';
    } else {
        projectBusy = projectOpened(isClicked);
        project[projectNumber - 1].style.backgroundColor = 'initial';
        project[projectNumber - 1].style.opacity = 'initial';
        img.style.opacity = 'initial';
        bitbucket_img.src = "./images/bit_bucket_icon.png";
        demo_img.src = "./images/external_link_icon.png";
        description.style.opacity = '0';
    }

}

function portfolioIncrease(projectNumber) {
    const project = document.getElementsByClassName('main-projects__item');
    project[projectNumber - 1].style.transform = 'scale(1.3)';
    project[projectNumber - 1].style.zIndex = '2';
    if (!isClicked[projectNumber]) {
        project[projectNumber - 1].style.backgroundColor = 'rgb(255, 255, 255)';
    }

}

function portfolioDecrease(projectNumber) {
    const project = document.getElementsByClassName('main-projects__item');
    project[projectNumber - 1].style.transform = 'initial';
    project[projectNumber - 1].style.zIndex = 'initial';
    if (!isClicked[projectNumber]) {
        project[projectNumber - 1].style.backgroundColor = 'rgb(255, 255, 255)';
    }
}