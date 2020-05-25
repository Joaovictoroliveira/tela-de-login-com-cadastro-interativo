let btnSignIn = document.querySelector('#signin');
let btnSignUp = document.querySelector('#signup');
let body = document.querySelector('body');

btnSignIn.addEventListener("click", function() {
    body.className = "sign-in-js";
});

btnSignUp.addEventListener("click", function() {
    body.className = "sign-up-js";
});
