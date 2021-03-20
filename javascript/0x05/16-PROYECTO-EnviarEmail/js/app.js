/**
 * VARIABLES
 */
const d = document,
  $form = d.getElementById("enviar-mail"),
  $email = d.getElementById("email"),
  $subject = d.getElementById("asunto"),
  $message = d.getElementById("mensaje"),
  $send = d.getElementById("enviar"),
  $reset = d.getElementById("resetBtn"),
  $spinner = d.getElementById("spinner");
/**
 * LISTENERS
 */
// when loading the document
d.addEventListener("DOMContentLoaded", (e) => {
  $email.addEventListener("input", validateEmail);
  $subject.addEventListener("input", validateSubject);
  $message.addEventListener("input", validateMessage);
  $email.addEventListener("blur", validateForm);
  $subject.addEventListener("blur", validateForm);
  $message.addEventListener("blur", validateForm);
  $form.addEventListener("submit", sendEmail);
  $reset.addEventListener("click", (e) => {
    $form.reset();
    e.preventDefault();
  });
});
/**
 * FUNCTIONS
 */
// send messages to the user interface
const informTheUser = (message, type) => {
  const p = d.createElement("p");
  p.innerText = message;
  p.classList.add(type);
  $spinner.insertAdjacentElement("afterend", p);
  // remove message after three seconds
  setTimeout(() => {
    p.classList.remove(type);
    p.classList.add("d-none");
  }, 3000);
};
// validate an email address with a regular expression
const validateEmail = () => {
  const regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    address = $email.value.toLowerCase();
  if (regexp.test(address)) {
    $email.classList.remove("error");
    $email.classList.add("success");
  } else {
    $email.classList.remove("success");
    $email.classList.add("error");
    informTheUser("Por favor ingresa un correo electrónico válido.", "error");
  }
};
// validate subject field
const validateSubject = () => {
  if ($subject.value.length > 0 && $subject.value.length <= 40) {
    $subject.classList.remove("error");
    $subject.classList.add("success");
  } else {
    $subject.classList.remove("success");
    $subject.classList.add("error");
    informTheUser("Máximo de 40 caracteres.", "error");
  }
};
// validate message field
const validateMessage = () => {
  if ($message.value.length > 0 && $message.value.length <= 280) {
    $message.classList.remove("error");
    $message.classList.add("success");
  } else {
    $message.classList.remove("success");
    $message.classList.add("error");
    informTheUser("Máximo 280 caracteres.", "error");
  }
};
// validate all fields to enable send button
const validateForm = () => {
  if (
    $email.classList.contains("success") &&
    $subject.classList.contains("success") &&
    $message.classList.contains("success")
  ) {
    $send.classList.remove("cursor-not-allowed", "opacity-50");
  }
};
// simulate an send and inform to user
const sendEmail = (e) => {
  e.preventDefault();
  $spinner.style.display = "flex";
  setTimeout(() => {
    $spinner.style.display = "none";
  }, 3000);
  setTimeout(() => {
    informTheUser("Mensaje enviado correctamente.", "success");
  }, 3000);
  setTimeout(() => {
    $form.reset();
  }, 3000);
};
