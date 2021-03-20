/**
 *  VARIABLES
 */
const x = Math.floor(Math.random() * (101 - 1) + 1);
const theGame = document.getElementById("theGame");
const theForm = document.getElementById("theForm");
const aNumber = document.getElementById("aNumber");
const btnSubmit = document.getElementById("btnSubmit");
const showMessages = document.getElementById("showMessages");
const btnNewGame = document.getElementById("btnNewGame");
let numbers = [];
let number = undefined;
/**
 *  FUNCTIONS
 */
const turnBtn = () => {
  number = parseInt(aNumber.value);
  if (number > 0 && number < 101) {
    btnSubmit.disabled = false;
  } else {
    btnSubmit.disabled = true;
  }
};
const sendMessage = (message, className, clue = "") => {
  showMessages.innerHTML = `
  <p>Previous guesses: ${numbers}</p>
  <p class="alerts ${className}">${message}</p>
  <p>${clue}</p>
  `;
};
const check = (e) => {
  e.preventDefault();
  numbers.push(number);
  if (numbers.length === 10) {
    sendMessage("!!!GAME OVER¡¡¡", "danger", `The number was ${x}.`);
    numbers = [];
    theForm.classList.add("d-none");
    btnNewGame.classList.add("d-block");
  } else {
    if (number === x) {
      sendMessage(
        "Congratulations! You got it right!",
        "success",
        `The number was ${x}.`
      );
      numbers = [];
      theForm.classList.add("d-none");
      btnNewGame.classList.add("d-block");
    } else {
      number > x
        ? sendMessage("Wrong!", "warning", "Last guess was too high")
        : sendMessage("Wrong!", "warning", "Last guess was too low");
    }
  }
  theForm.reset();
  number = undefined;
  btnSubmit.disabled = true;
};
/**
 *  EXECUTABLES
 */
const eventListeners = () => {
  aNumber.addEventListener("input", turnBtn);
  btnSubmit.addEventListener("click", check);
  btnNewGame.addEventListener("click", () => location.reload());
};
eventListeners();
