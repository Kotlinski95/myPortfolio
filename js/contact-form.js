var form = document.getElementById("contact-form");
var button = document.getElementById("form-submit");
var status = document.getElementById("form-status");
const inputName = form.querySelector("input[name=form-name]");
const inputEmail = form.querySelector("input[name=form-email]");
const formMessage = form.querySelector(".form-message");
const inputs = [inputName, inputEmail];

form.setAttribute("novalidate", true);

function removeFieldError(field) {
    const errorText = field.nextElementSibling;
    if (errorText !== null) {
        if (errorText.classList.contains("form-error-text")) {
            errorText.remove();
        }
    }
};

function createFieldError(field, text) {
    removeFieldError(field);
    const div = document.createElement("div");
    div.classList.add("form-error-text");
    div.innerText = text;
    if (field.nextElementSibling === null) {
        field.parentElement.appendChild(div);
    } else {
        if (!field.nextElementSibling.classList.contains("form-error-text")) {
            field.parentElement.insertBefore(div, field.nextElementSibling);
        }
    }
};

function toggleErrorField(field, show) {
    const errorText = field.nextElementSibling;
    if (errorText !== null) {
        if (errorText.classList.contains("form-error-text")) {
            errorText.style.display = show ? "block" : "none";
            errorText.setAttribute('aria-hidden', show);
        }
    }
};

function markFieldAsError(field, show) {
    if (show) {
        field.classList.add("field-error");
    } else {
        field.classList.remove("field-error");
        toggleErrorField(field, false);
    }
};

markFieldAsError(inputName, false);
markFieldAsError(inputEmail, false);

for (const el of inputs) {
    el.addEventListener("input", e => {
        markFieldAsError(e.target, (!e.target.checkValidity() && (e.target.value !== undefined)))
        if (e.data == null) {
            removeFieldError(e.target);
        }
    });
}

window.addEventListener("DOMContentLoaded", function () {

    // get the form elements defined in your form HTML above
    // Success and Error functions for after the form is submitted
    function success() {
        form.reset();
        button.style = "display: none ";
        var status = document.getElementById("form-status");
        status.innerHTML = "Thank you for your message! <br> I will send you answer as soon as possible";
        status.style.padding = '10px';
        status.style.borderRadius = '10px';
    }

    function error() {
        status.innerHTML = "Oops! There was a problem.";
    }

    // handle the form submission event
    form.addEventListener("submit", function (ev) {
            ev.preventDefault();
            let formHasErrors = false;
            for (const el of inputs) {
                removeFieldError(el);
                el.classList.remove("field-error");
                if (!el.checkValidity()) {
                    createFieldError(el, el.dataset.textError);
                    el.classList.add("field-error");
                    formHasErrors = true;
                }
            }
            if (!formHasErrors) {
                var data = new FormData(form);
                ajax(form.method, form.action, data, success, error);
            }
        }
    );
});

// helper function for sending an AJAX request
function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            success(xhr.response, xhr.responseType);
        } else {
            error(xhr.status, xhr.response, xhr.responseType);
        }
    };
    xhr.send(data);
}