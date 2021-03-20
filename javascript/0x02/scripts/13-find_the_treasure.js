// VARIABLES
const d = document,
  $place = d.getElementById("place"),
  $subtitle = d.getElementById("subtitle"),
  $message = d.getElementById("message"),
  width = 320,
  heigh = 160,
  chances = 16;
let clicks = 0;
// LISTENERS
// when loaded the document
d.addEventListener("DOMContentLoaded", (e) => {
  $place.addEventListener("click", playing);
  $subtitle.innerText = "Welcome";
  $message.innerText = "To start click on the image and follow the clues.";
});
// FUNCTIONS
const getRandomNumber = (n) => {
  return Math.floor(Math.random() * n);
};
// put the treasure in a random place
const treasure = {
  x: getRandomNumber(width),
  y: getRandomNumber(heigh),
};
// Start game when user click
const playing = (e) => {
  clicks++;
  const player = getPlayerCoordinates(e);
  const distance = getDistance(treasure, player);
  if (distance < 16) showMessage("¡Winner!");
  else if (distance < 24) showMessage("Boiling hot");
  else if (distance < 32) showMessage("Really hot");
  else if (distance < 64) showMessage("Hot");
  else if (distance < 80) showMessage("Warm");
  else if (distance < 96) showMessage("Cold");
  else if (distance < 128) showMessage("Really Cold");
  else showMessage("Freezing!");
};
// where user click
const getPlayerCoordinates = (e) => {
  return (player = {
    x: e.offsetX,
    y: e.offsetY,
  });
};
// calculate the difference between two points
const getDistance = (a, b) => {
  const diffX = a.x - b.x,
    diffY = a.y - b.y;
  return Math.sqrt(diffX * diffX + diffY * diffY);
};
// inform the user amount clicks and distance or result
const showMessage = (message) => {
  if (clicks === chances || message.includes("Winner")) {
    if (clicks === chances) {
      $subtitle.innerText = "Game Over";
      $message.innerText = "Sorry, the changes are over.";
    }
    if (message.includes("Winner")) {
      $subtitle.innerText = message;
      $message.innerText = `You are who found the treasure.  It only took ${clicks} clicks.`;
    }
    $place.removeEventListener("click", playing, false);
    const button = d.createElement("button");
    button.innerText = "NEW GAME";
    button.setAttribute("id", "btnNewGame");
    $message.insertAdjacentElement("afterend", button);
    const $btnNewGame = d.getElementById("btnNewGame");
    $btnNewGame.addEventListener("click", () => location.reload());
  } else {
    $subtitle.innerText = `Follow the clue: ${message}`;
    $message.innerText = `You have ${chances - clicks} chances.`;
  }
};
