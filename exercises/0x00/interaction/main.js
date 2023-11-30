"use strict";
// Guess number
const guessNumber = () => {
  const randomNumber = Math.floor(Math.random() * 10 + 1);
  console.log(randomNumber);
  let userNumber = null;
  do {
    userNumber = prompt("Enter a number:");
    if (userNumber > randomNumber) {
      alert("+");
    } else if (userNumber < randomNumber) {
      alert("-");
    } else {
      alert("==");
    }
  } while (randomNumber != userNumber);
};

guessNumber();
