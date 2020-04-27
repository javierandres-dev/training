/*
 * Variables
 */
const btnPower = document.getElementById("btnPower");
const show = document.getElementById("show");
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
function candidates(apiResponse) {
    let imageUrls = apiResponse.data;
    let participants = imageUrls.length;
    let selection = [];
    for (i = 0; i < 5; i++) {
        let participant = Math.floor(Math.random() * participants);
        selection.push(imageUrls[participant]);
    }
    let cast = [];
    for (i = 0; i < 5; i++) {
        cast.push(selection[i].images.fixed_height.url);
    }
    toShow(cast);
}

function toShow(cast) {
    let i = 0;
    setInterval(function () {
        if (i === cast.length) {
            i = 0;
        }
        myImg.src = cast[i];
        i++;
    }, 3000);
}

function power() {
    //content.style.display = "block";
    show.style.display = "block";
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
    // JSON -> Deserialize
    let apiResponse = JSON.parse(apiData);
    candidates(apiResponse);
});