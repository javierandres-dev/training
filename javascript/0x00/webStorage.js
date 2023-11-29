"use strict";
const $form = document.getElementById("webStorageForm");
const $giBtn = document.getElementById("giBtn");
const $rBtn = document.getElementById("rBtn");
const $clearBtn = document.getElementById("clearBtn");

document.addEventListener("DOMContentLoaded", () => {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  if (user && user.id === "0xxx1") {
    const $p = document.getElementById("greet");
    $p.textContent = `Hello, ${user.name}`;
    const $private = document.getElementById("private");
    $private.classList.remove("d-none");
  }
});

$form.addEventListener("submit", (e) => {
  e.preventDefault();
  const obj = {
    id: "0xxx1",
    name: $form.name.value,
    email: $form.email.value,
  };
  console.log(obj);
  localStorage.setItem("user", JSON.stringify(obj));
});

$giBtn.addEventListener("click", () => {
  console.log(localStorage.getItem("user"));
});

$rBtn.addEventListener("click", () => {
  console.log(localStorage.removeItem("user"));
});

$clearBtn.addEventListener("click", () => {
  console.log(localStorage.clear());
});
