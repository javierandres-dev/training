const d = document,
  $face = d.getElementById('face'),
  $message = d.getElementById('message');
let face = null,
  message = null,
  firstCard = getRandomCard(),
  secondCard = getRandomCard(),
  sumCards = firstCard + secondCard,
  hasBlackjack = false,
  isAlive = true;

function getRandomCard() {
  return Math.floor(Math.random() * (23 - 2) + 2);
}

if (sumCards === 21) {
  face = '🥳';
  message = "Wohoo! You've got Blackjack!";
  hasBlackjack = true;
} else if (sumCards < 21) {
  face = '🙂';
  message = 'Do you want to draw a new card?';
} else {
  face = '😭';
  message = "You're out of the game!";
  isAlive = false;
}

$face.textContent = face;
$message.textContent = message;
console.log(face, sumCards);
