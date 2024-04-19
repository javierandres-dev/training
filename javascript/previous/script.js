"use strict";
const $formDataForm2 = document.getElementById("formDataForm2");

$formDataForm2.addEventListener("submit", handleFormData2);

function handleFormData1() {
  const form = document.getElementById("formDataForm1");
  const formData = new FormData(form);
  console.log(formData);

  for (const pair of formData.entries()) {
    console.log(pair[0] + ": " + pair[1]);
  }
}

function handleFormData2(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  console.log(formData);
  formData.forEach((value, key) => {
    console.log(`${key}: ${value}`);
  });
  const text = formData.get("text");
  console.log(text);
  const data = Object.fromEntries(formData.entries());
  console.log(data);
}

function handleMailto() {
  const form = document.getElementById("mailtoForm");
  const formData = new FormData(form);
  console.log(formData);
  let bodyContent = null;

  for (const pair of formData.entries()) {
    console.log(pair[0] + ": " + pair[1]);
    bodyContent = pair[1];
  }
  window.open("mailto:account@domain.ext?subject=test&body=" + bodyContent);
}
