/*
 * Variables
 */
const btnPower = document.getElementById("btnPower");
const content = document.getElementById("content");
const myImg = document.getElementById("myImg");
const led = document.getElementById("led");
/*
 * Events
 */
eventListeners();

function eventListeners() {
    btnPower.addEventListener("click", power);
}
/*
 * Functions
 */
function power() {
    //content.style.display = "block";
    content.classList.toggle("show");
    led.style.backgroundColor = "limegreen";
}
/*
 * API
 */
let apiUrl = "http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC";
// AJAX Request
let GiphyAJAXCall = new XMLHttpRequest();
GiphyAJAXCall.open('GET', apiUrl);
GiphyAJAXCall.send();
GiphyAJAXCall.addEventListener('load', function (e) {
    let apiData = e.target.response;
    candidates(apiData);
});

function candidates(apiData) {
    // JSON -> Deserialize
    let response = JSON.parse(apiData);
    let imageUrls = response.data;
    let participants = imageUrls.length;
    let selection = [];
    for (i = 0; i < 5; i++) {
        let participant = Math.floor(Math.random() * participants);
        selection.push(imageUrls[participant]);
    }
    cast(selection);
}

function cast(selection) {
    for (i = 0; i < 5; i++) {
        let my_src = selection[i].images.fixed_height.url
        myImg.src = my_src;
    }
}