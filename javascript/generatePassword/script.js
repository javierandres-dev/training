"use strict";
let charactersAllowed = "";
// Add uppercase letters
for (let i = 65; i <= 90; i++) {
  charactersAllowed += String.fromCharCode(i);
}
// Add lowercase letters
for (let i = 97; i <= 122; i++) {
  charactersAllowed += String.fromCharCode(i);
}
// Add digits
for (let i = 48; i <= 57; i++) {
  charactersAllowed += String.fromCharCode(i);
}
// Add common special characters
/* const specialChars = ` !"#$%&'()*+,-./:;<=>?@[\\]^_\`{|}~`; */
// Add special characters
const specialChars = `!"#$%&'()*+,-./:;<=>?@[\\]^_\`{|}~`;
charactersAllowed += specialChars;
//console.log("Characters allowed: ", charactersAllowed);

function generatePassword(length = 10) {
  let password = "";
  const arr = charactersAllowed.split("");
  const len = arr.length;
  for (let i = 0; i < length; i++) {
    const idx = Math.floor(Math.random() * (len - 0) + 0);
    password += arr[idx];
  }
  return password;
}

console.log(generatePassword());
console.log(generatePassword(5));
