"use strict";
const d = document;
const $startModal = new bootstrap.Modal(d.getElementById("startModal"));
const $doNotAsk = d.getElementById("doNotAsk");
const $ask = d.getElementById("ask");
const $testForm = d.getElementById("testForm");

d.addEventListener("DOMContentLoaded", () => {
  $startModal.show();
});

$testForm.addEventListener("submit", (e) => handleSubmit(e));

function handleNo() {
  $doNotAsk.classList.toggle("d-none");
  $startModal.hide();
}

function handleYes() {
  $ask.classList.toggle("d-none");
  $startModal.hide();
}

function handleSubmit(e) {
  e.preventDefault();
  const obj = {};
  const formData = new FormData($testForm);
  for (const [key, value] of formData) {
    console.log("key:", key, " value:", value + "\n");
    obj[key] = value === "true" ? Boolean(value) : value;
  }
  console.log("obj:", obj);
  let result = `You are a ${obj.biologicalSex}`;
  console.log("result:", result);
}
