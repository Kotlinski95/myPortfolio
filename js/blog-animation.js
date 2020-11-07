

function postToggle(postNumber) {
    var postButton = document.getElementById(`post-${postNumber}`);
    var post = document.getElementsByClassName('main-blog__post');
    var content = post[postNumber - 1].getElementsByClassName('read-more-target');
    var paragraph = post[postNumber - 1].getElementsByClassName('main-blog-p');

    if (postButton.checked) {
        content[0].style.maxHeight = '2000px';
        content[0].style.opacity = '1';
        content[0].style.fontSize = 'inherit';
        content[0].style.display = 'initial';
        paragraph[0].style.display = 'flex';
        paragraph[0].style.maxHeight = '100%';
        paragraph[0].style.opacity = '1';
    }
    else {
        content[0].style.maxHeight = '0px';
        content[0].style.opacity = '0';
        content[0].style.fontSize = '0';
        content[0].style.display = 'none';
        paragraph[0].style.display = 'none';
        paragraph[0].style.maxHeight = '0px';
        paragraph[0].style.opacity = '0';
    }
}