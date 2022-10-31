// Canvas Menu Drop-down
$(document).ready(function(){
    $('.canvasOpen').click(function(){
        $('.canvas-menu').toggleClass('hide');
        return false;
    });
    $('.canvas-close a').click(function(){
        $('.canvas-menu').addClass('hide');
        return false;
    });
})

// Changing Title and background image according to time
const title = document.getElementById('title');
const heroImg = document.getElementById('heroImg');
let time = new Date().getHours();
if (time >= 0 && time <= 11.59) {
    title.innerText = "GOOD MORNING";
    heroImg.style.backgroundImage = `url('../imgs/evening.png')`;
} else if (time >= 12 && time <= 17.59) {
    title.innerText = "GOOD AFTERNOON";
    heroImg.style.backgroundImage = `url('../imgs/evening.png')`;
} else {
    title.innerText = "GOOD EVENING";
    heroImg.style.backgroundImage = `url('../imgs/evening.png')`;
}

// Form Validation
const form = document.getElementById('form');
const name = document.getElementById('name');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const description = document.getElementById('description');

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();
});

function checkInputs() {
    // get values from the inputs
    const nameValue = name.value.trim();
    const phoneValue = phone.value.trim();
    const emailValue = email.value.trim();
    const descriptionValue = description.value.trim();

    // Name validation
    if (nameValue === '' || nameValue.length > 14) {
        // add error class
        setError(name, "Name can only be letters and cannot exceed 14 character");
    } else {
        setSuccessFor(name);
    }

    // email validation
    if (emailValue === '') {
        // add error class
        setError(email, "Email cannot be blank");
    } else if (!isEmail(emailValue)) {
        setError(email, "Email is not valid")
    } else {
        setSuccessFor(email);
    }

    // Phone validation
    if (phoneValue === '') {
        // add error class
        setError(phone, "Telephone  cannot be blank");
    } else if (!isPhone(phoneValue)) {
        setError(phone, "Telephone must follow this format (XXX) XXX-XXXX")
    } else {
        setSuccessFor(phone);
    }

    // textarea validation
    if (descriptionValue === '') {
        // add error class
        setError(description, "Description cannot be blank");
    } else {
        setSuccessFor(description);
    }
}

function setError(input, message) {
    const formVal = input.parentElement;
    const feedback = formVal.querySelector('.feedback');

    // add error message inside feedback div
    feedback.innerText = message;
    // add error class
    formVal.className = "form-val mb-3 error";
}

function setSuccessFor(input) {
    const formVal = input.parentElement;
    formVal.className = "form-val mb-3 success";
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
function isPhone(phone) {
    return /^\(([0-9]{3})\)\s([0-9]{3})[-]?([0-9]{4})$/.test(phone);
}