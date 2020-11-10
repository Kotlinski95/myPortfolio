

function postToggle(postNumber) {
    var postButton = document.getElementById(`post-${postNumber}`);
    var post = document.getElementsByClassName("main-blog__post");
    var content = post[postNumber - 1].getElementsByClassName("read-more-target");
    var paragraph = post[postNumber - 1].getElementsByClassName("main-blog-p");

    const blog = {
        Properties: ["0px", "0", "0", "none", "none", "0px", "0"],
        setProperties() {
            content[0].style.maxHeight = this.Properties[0];
            content[0].style.opacity = this.Properties[1];
            content[0].style.fontSize = this.Properties[2];
            content[0].style.display = this.Properties[3];
            paragraph[0].style.display = this.Properties[4];
            paragraph[0].style.maxHeight = this.Properties[5];
            paragraph[0].style.opacity = this.Properties[6];
        }
    }

    var myBlog = Object.create(blog);

    if (postButton.checked) {
        myBlog.Properties = ["2000px", "1", "inherit", "initial", "flex", "100%", "1"];
        myBlog.setProperties();
    } else {
        myBlog.Properties = ["0px", "0", "0", "none", "none", "0px", "0"];
        myBlog.setProperties();
    }
}