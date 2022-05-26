// get the elements by id's into constant variables
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const age = document.getElementById('age');
const phone = document.getElementById('phone');
const ID = document.getElementById('ID');

// add the eventListner for submitting the form and prevent it
form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    check();
})

// function to check the validation of required inputs
function check() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const ageValue = age.value.trim();
    const phoneValue = phone.value.trim();
    const IDValue = ID.value.trim();
    // user name checking code
    if (usernameValue == '') {
        error(username, 'name must be filled');
    } else {
        success(username);
    }
    // email checking code
    if (emailValue == '') {
        error(email, 'email must be written');
    } else {
        success(email);
    }
    // age checking code
    if (ageValue == '') {
        error(age, 'age must be choosen');
    } else if (ageValue < 18 || ageValue > 38) {
        error(age, 'your age is not allowd to apply')
    } else {
        success(age);
    }
    // phone checking code
    if (phoneValue == '') {
        error(phone, 'please enter phone number to connect with');
    } else if (phoneValue.length == 11 || phoneValue.length == 14) {
        success(phone);
    } else {
        error(phone, 'error in phone number please check again');
    }
    // ID checking code
    if (IDValue == '') {
        error(ID, 'you have to enter your national ID');
    } else if (IDValue.length == 16) {
        success(ID);
    } else {
        error(phone, 'error in natinal ID number please check again');
    }
}

function error(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
                
    small.innerText = message;
    formControl.className = 'control error';
}

function success(input) {
    const formControl = input.parentElement;
    formControl.className = 'control success';
}