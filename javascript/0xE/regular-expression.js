"use strict";
const d = document;
// 1. Challenge: Forbidden Words Checker - Checks if a message contains forbidden words using regex.
const $input1 = d.getElementById("input1");
$input1.addEventListener("input", one);
function one() {
  const $result1 = d.getElementById("result1");
  const forbiddenWords = /bad|ugly|hate/; // Example forbidden words
  const message = $input1.value.trim();
  if (forbiddenWords.test(message)) {
    $result1.textContent = "Warning: Your message contains forbidden words!";
  } else {
    $result1.textContent = "Your message is clean.";
  }
}
