/*
 * Variables
 */
const listaTweets = document.getElementById('lista-tweets');
/*
 * Eventos
 */
eventListeners();
function eventListeners() {
    document.querySelector('#formulario').addEventListener('submit', agregarTweet);
    listaTweets.addEventListener('click', borrarTweet);
    document.addEventListener('DOMContentLoaded', localStorageListo);
}
/*
 * Funciones
 */
function agregarTweet(e) {
    e.preventDefault();
    const tweet = document.getElementById('tweet').value;
    const botonBorrar = document.createElement('a');
    botonBorrar.classList = 'borrar-tweet';
    botonBorrar.innerText = 'X';
    const li = document.createElement('li');
    li.innerText = tweet;
    li.appendChild(botonBorrar);
    listaTweets.appendChild(li);
    agregarTweetLocalStorage(tweet);
}
function borrarTweet(e) {
    e.preventDefault();
    if(e.target.className === 'borrar-tweet') {
        (e.target.parentElement.remove());
        borrarTweetLocalStorage(e.target.parentElement.innerText);
    }
}
function localStorageListo() {
    let tweets;
    tweets = obtenerTweetsLocalStorage();
    tweets.forEach(function(tweet) {
        const botonBorrar = document.createElement('a');
        botonBorrar.classList = 'borrar-tweet';
        botonBorrar.innerText = 'X';
        const li = document.createElement('li');
        li.innerText = tweet;
        li.appendChild(botonBorrar);
        listaTweets.appendChild(li);
    });
}
function agregarTweetLocalStorage(tweet) {
    let tweets;
    tweets = obtenerTweetsLocalStorage();
    tweets.push(tweet);
    localStorage.setItem('tweets', JSON.stringify(tweets));
}
function obtenerTweetsLocalStorage() {
    let tweets;
    if (localStorage.getItem('tweets') === null) {
        tweets = [];
    } else {
        tweets = JSON.parse(localStorage.getItem('tweets'));
    }
    return tweets;
}
function borrarTweetLocalStorage(tweet) {
    let tweets;
    let tweetBorrar;
    tweetBorrar = tweet.substring(0, tweet.length - 1);
    tweets = obtenerTweetsLocalStorage();
    tweets.forEach(function (tweet, index) {
        if (tweetBorrar === tweet) {
            tweets.splice(index, 1);
        }
    })
    localStorage.setItem('tweets', JSON.stringify(tweets));
}