"use strict";
function handleSubmit(event) {
  event.preventDefault();
  //alert("Submitted! event:", event);
  //console.log("event:", event);
  //console.log("event:", event.target);
  //console.log("event:", event.target.elements);
  //console.log("event:", event.target.elements.name);
  /* console.log("event:", event.target.elements.name.value);
  console.log("event:", event.target.elements.email.value);
  console.log("event:", event.target.elements.message.value); */
  const notify = `Name: ${event.target.elements.name.value}\nEmail: ${event.target.elements.email.value}\nMessage: ${event.target.elements.message.value}`;
  alert("Submitted!\n\n" + notify + "\n\nWorks!");
  const $form = document.querySelector("form");
  $form.reset();
}
