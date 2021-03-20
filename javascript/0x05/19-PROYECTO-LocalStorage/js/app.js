// VARIABLES
const d = document,
  $form = d.getElementById("formulario"),
  $tweet = d.getElementById("tweet"),
  $tweetsList = d.getElementById("lista-tweets"),
  tweetObj = { id: "", tweet: "" };
let tweets = [],
  validate = false;
// LISTENERS
// when loaded the document
d.addEventListener("DOMContentLoaded", (e) => {
  printTweets();
  $tweet.setAttribute("maxlength", "280");
  eventListeners();
});
// when the event occurs
const eventListeners = () => {
  $tweet.addEventListener("input", () => {
    if ($tweet.value.length > 272)
      showMessage("Maximum 280 characters.", "warnin");
  });
  $tweet.addEventListener("blur", () => {
    $tweet.value.length === 0
      ? showMessage("Tweet is empty.", "error")
      : createTweet();
  });
  $form.addEventListener("submit", addTweet);
  $tweetsList.addEventListener("click", removeTweet);
};
// FUNCTIONS
// create a object tweet
const createTweet = () => {
  tweetObj.id = Date.now();
  tweetObj.tweet = $tweet.value;
  validate = true;
};
// add a tweet at tweets list
const addTweet = (e) => {
  e.preventDefault();
  if (validate) {
    tweets = [...tweets, tweetObj];
    syncStorage();
  } else {
    showMessage("Please check your tweet.", "warnin");
  }
  validate = false;
  $form.reset();
};
// inform to user
const showMessage = (message, type) => {
  const $contenido = d.getElementById("contenido"),
    p = d.createElement("p");
  p.classList.add(type);
  p.textContent = message;
  $contenido.appendChild(p);
  setTimeout(() => {
    $contenido.removeChild(p);
  }, 3000);
};
// update local storage
const syncStorage = () => {
  localStorage.setItem("tweets", JSON.stringify(tweets));
  printTweets();
};
// show to the user all current tweets from the local storage
const printTweets = () => {
  cleanHTML();
  tweets = JSON.parse(localStorage.getItem("tweets")) || tweets;
  if (tweets.length > 0) {
    const ul = d.createElement("ul");
    tweets.forEach((tweet) => {
      const li = d.createElement("li"),
        span = d.createElement("span");
      span.classList.add("borrar-tweet");
      span.innerText = "X";
      li.textContent = tweet.tweet;
      li.dataset.tweetId = tweet.id;
      li.appendChild(span);
      ul.appendChild(li);
    });
    $tweetsList.appendChild(ul);
  }
};
// remove all content from the interface
const cleanHTML = () => {
  while ($tweetsList.firstChild) {
    $tweetsList.removeChild($tweetsList.firstChild);
  }
};
// remove a tweet at tweets list
const removeTweet = (e) => {
  if (confirm("Really do you want delete this tweet?")) {
    const id = parseInt(e.target.dataset.tweetId);
    tweets = tweets.filter((tweet) => tweet.id != id);
    syncStorage();
  }
};
