"use strict";
const d = document;
const $startModal = new bootstrap.Modal(d.getElementById("startModal"));
const $doNotAsk = d.getElementById("doNotAsk");
const $ask = d.getElementById("ask");
const $testForm = d.getElementById("testForm");
const $select = d.getElementById("0");

d.addEventListener("DOMContentLoaded", () => {
  $startModal.show();
});

$select.addEventListener("change", enableRadios);
$testForm.addEventListener("submit", (e) => handleSubmit(e));

function handleNo() {
  $doNotAsk.classList.toggle("d-none");
  $startModal.hide();
}

function handleYes() {
  $ask.classList.toggle("d-none");
  $startModal.hide();
}

function enableRadios() {
  const $radios = d.querySelectorAll("input[type='radio']");
  $radios.forEach((radio) => {
    radio.removeAttribute("disabled");
    radio.addEventListener("change", () => {
      handleCheckboxes(radio.id);
    });
  });
}

function handleCheckboxes(id) {
  const $checkboxes = d.querySelectorAll("input[type='checkbox']");
  if (id === "1")
    for (const checkbox of $checkboxes) checkbox.removeAttribute("disabled");
  else
    for (const checkbox of $checkboxes) {
      checkbox.checked = false;
      checkbox.setAttribute("disabled", true);
    }
}

function handleSubmit(e) {
  e.preventDefault();
  const data = {};
  const formData = new FormData($testForm);
  for (const [key, value] of formData) {
    data[key] = value === "true" ? true : value === "false" ? false : value;
  }
  console.log("data:", data);
  let attraction = "";
  if (data.likeFemale) attraction += "female";
  if (data.likeMale) attraction += attraction ? " and male" : "male";
  let genderIdentity = "";
  let genderDetail = "";
  if (data.biologicalSex === "female") {
    if (data.likeFemale && data.likeMale) {
      genderIdentity = "bisexual";
      genderDetail = "person attracted to both sexes";
    } else if (data.likeFemale) {
      genderIdentity = "lesbian";
      genderDetail = "homosexual person, woman attracted to women";
    } else {
      genderIdentity = "heterosexual";
      genderDetail = "person attracted to opposite sex";
    }
  }
  if (data.biologicalSex === "male") {
    if (data.likeFemale && data.likeMale) {
      genderIdentity = "bisexual";
      genderDetail = "person attracted to both sexes";
    } else if (data.likeMale) {
      genderIdentity = "gay";
      genderDetail = "homosexual person, man attracted to men";
    } else {
      genderIdentity = "heterosexual";
      genderDetail = "person attracted to opposite sex";
    }
  }
  let result = `You are a ${data.biologicalSex}, and you feel romantically and physically attraction to ${attraction}, your gender identity is ${genderIdentity} (${genderDetail}).`;
  console.log("result:", result);
}
