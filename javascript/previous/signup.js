"use strict";
/* IMPORTS */
/* VARIABLES */
const d = document;

const $signUp = d.getElementById("signUp");

const credentials = {
  name: null,
  nameValid: false,
  email: null,
  emailValid: false,
  password: null,
  passwordValid: false,
  passwordConfirm: null,
  passwordConfirmValid: false,
};

let enableSubmit = false;

/* EVENTS */
d.addEventListener("DOMContentLoaded", () => {
  eventListeners();
});

/* FUNCTIONS */
function eventListeners() {
  $signUp.name.addEventListener("input", () => {
    checkInput("name");
  });
  $signUp.name.addEventListener("blur", () => {
    checkInput("name");
  });

  $signUp.email.addEventListener("input", () => {
    checkInput("email");
  });
  $signUp.email.addEventListener("blur", () => {
    checkInput("email");
  });

  $signUp.password.addEventListener("input", () => {
    checkInput("password");
  });
  $signUp.password.addEventListener("blur", () => {
    checkInput("password");
  });

  $signUp.passwordConfirm.addEventListener("input", () => {
    checkInput("passwordConfirm");
  });
  $signUp.passwordConfirm.addEventListener("blur", () => {
    checkInput("passwordConfirm");
  });

  $signUp.addEventListener("submit", handleSubmit);
}

function checkInput(inputName) {
  if (inputName === "name") {
    const $nameWarning = d.getElementById("nameWarning");
    credentials.name = $signUp.name.value.trim();
    credentials.nameValid = false;
    if (credentials.name == "") {
      $nameWarning.textContent = "Please, enter your name";
    } else {
      $nameWarning.textContent = "";
      credentials.nameValid = true;
    }
  }
  if (inputName === "email") {
    const regExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const $emailWarning = d.getElementById("emailWarning");
    credentials.email = $signUp.email.value.trim();
    credentials.emailValid = false;
    if (credentials.email == "") {
      $emailWarning.textContent = "Please, enter your email address";
    } else if (!regExp.test(credentials.email)) {
      $emailWarning.textContent = "Please, enter a valid email address";
    } else {
      $emailWarning.textContent = "";
      credentials.emailValid = true;
    }
  }
  if (inputName === "password") {
    const $passwordWarning = d.getElementById("passwordWarning");
    credentials.password = $signUp.password.value.trim();
    credentials.passwordValid = false;
    if (credentials.password == "") {
      $passwordWarning.textContent = "Please, enter your password";
    } else {
      $passwordWarning.textContent = "";
      credentials.passwordValid = true;
    }
  }
  if (inputName === "passwordConfirm") {
    const $passwordConfirmWarning = d.getElementById("passwordConfirmWarning");
    credentials.passwordConfirm = $signUp.passwordConfirm.value.trim();
    credentials.passwordConfirmValid = false;
    if (credentials.passwordConfirm == "") {
      $passwordConfirmWarning.textContent = "Please, confirm your password";
    } else if (credentials.password != credentials.passwordConfirm) {
      $passwordConfirmWarning.textContent = "Your password doesn't match";
    } else {
      $passwordConfirmWarning.textContent = "";
      credentials.passwordConfirmValid = true;
    }
  }
  setEnableSubmit();
}

function setEnableSubmit() {
  enableSubmit =
    credentials.nameValid &&
    credentials.emailValid &&
    credentials.passwordValid &&
    credentials.passwordConfirmValid;
  console.log(enableSubmit);
  if (enableSubmit) {
    //$signUp.submitButton.disabled = false;
    $signUp.submitButton.removeAttribute("disabled");
  } else {
    //$signUp.submitButton.disabled = true;
    $signUp.submitButton.setAttribute("disabled", true);
  }
}

function handleSubmit(event) {
  event.preventDefault();
  console.log("enableSubmit: ", enableSubmit);
  /* if (enableSubmit) {
    console.log("enviar datos a un backend para su procesamiento...");
  } else {
    console.log("informar al usuario...");
  } */
  /* enableSubmit
    ? console.log("send data to backend for processing ")
    : console.log("notify the user and don't allow sending data"); */
  if (enableSubmit) {
    console.log("submit: ", credentials);
    console.log("send data to backend for processing");
    $signUp.reset();
    window.location.href =
      "http://127.0.0.1:5501/javascript/previous/private.html"; //click
    /* window.location.replace(
      "http://127.0.0.1:5501/javascript/previous/private.html"
    );// redirect */
  } else {
    const $formWarning = d.getElementById("formWarning");
    $formWarning.textContent =
      "Please check and fill all fields and try again.";
  }
}
/* CODE */
