let signupForm = document.getElementById("signupForm");
let loginForm = document.getElementById("loginForm");

let signupName = document.getElementById("signupName");
let signupPassword = document.getElementById("signupPassword");
let confirmPassword = document.getElementById("confirmPassword");
let loginPassword = document.getElementById("loginPassword");

let signupMessage = document.getElementById("signupMessage");
let loginMessage = document.getElementById("loginMessage");

let showLoginPassword = document.getElementById("showLoginPassword");
let showSignupPassword = document.getElementById("showSignupPassword");

function checkName() {
    if (signupName.value.trim() === "") {
        signupName.setCustomValidity("Please enter your name, not just spaces.");
    } else {
        signupName.setCustomValidity("");
    }
}

function checkPasswords() {
    if (signupPassword.value !== confirmPassword.value) {
        confirmPassword.setCustomValidity("Your passwords must match.");
    } else {
        confirmPassword.setCustomValidity("");
    }
}

signupName.addEventListener("input", checkName);
signupPassword.addEventListener("input", checkPasswords);
confirmPassword.addEventListener("input", checkPasswords);

signupForm.addEventListener("submit", function (event) {
    event.preventDefault();

    checkName();
    checkPasswords();

    if (signupForm.reportValidity()) {
        signupMessage.textContent = "Your details are valid! This is a demo, so no account was created.";

        signupForm.reset();
        signupPassword.type = "password";
        confirmPassword.type = "password";
    }
});

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (loginForm.reportValidity()) {
        loginMessage.textContent = "Your input format is valid! This is a demo, so no real login took place.";

        loginForm.reset();
        loginPassword.type = "password";
    }
});

signupForm.addEventListener("input", function () {
    signupMessage.textContent = "";
});

loginForm.addEventListener("input", function () {
    loginMessage.textContent = "";
});

showLoginPassword.addEventListener("change", function () {
    if (showLoginPassword.checked) {
        loginPassword.type = "text";
    } else {
        loginPassword.type = "password";
    }
});

showSignupPassword.addEventListener("change", function () {
    if (showSignupPassword.checked) {
        signupPassword.type = "text";
        confirmPassword.type = "text";
    } else {
        signupPassword.type = "password";
        confirmPassword.type = "password";
    }
});