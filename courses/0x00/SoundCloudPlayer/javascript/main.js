/**
 * 1.  Search
 */
// VARIABLES
const btnClearStorage = document.getElementById("btnClearStorage");
const btnSearch = document.getElementById("btnSearch");
// EVENTS
eventListeners();

function eventListeners() {
    btnClearStorage.addEventListener("click", clearStorage);
    btnSearch.addEventListener("click", searchTrack);
}
// FUNCTIONS
function clearStorage() {
    localStorage.clear();
    window.location.reload(true);
}

function searchTrack() {
    var toSearch = document.getElementById("toSearch").value;
    SoundCloudAPI.getTrack(toSearch);
}
/**
 * 2.  Query Soundcloud API
 */
// Wrap Our SoundCloud Code in an Object
var SoundCloudAPI = {};
SoundCloudAPI.init = function () {
    SC.initialize({
        client_id: 'cd9be64eeb32d1741c17cb39e41d254d'
    });
}
SoundCloudAPI.init();
SoundCloudAPI.getTrack = function (inputValue) {
    // find all sounds of buskers licensed under 'creative commons share alike'
    SC.get('/tracks', {
        q: inputValue
    }).then(function (tracks) {
        SoundCloudAPI.renderTracks(tracks);
    });
}
//SoundCloudAPI.getTrack("");
/**
 * 3.  Display the cards
 */
// Dynamically Generate Our HTML Cards with JavaScript
// titles
SoundCloudAPI.renderTracks = function (tracks) {
    tracks.forEach(function (track) {
        //card
        var card = document.createElement('div');
        card.classList.add('card');
        //image
        var imageDiv = document.createElement('div');
        imageDiv.classList.add('image');
        var image_img = document.createElement('img');
        image_img.classList.add('image_img');
        image_img.src = track.artwork_url || "http://lorempixel.com/100/100/abstract/";
        imageDiv.appendChild(image_img);
        //content 
        var content = document.createElement('div');
        content.classList.add('content');
        var header = document.createElement('div');
        header.classList.add('header');
        header.innerHTML = '<a href="' + track.permalink_url + '" target="_blank">' + track.title + '</a>';
        //button
        var button = document.createElement('div');
        button.classList.add('ui', 'bottom', 'attached', 'button', 'js-button');
        var icon = document.createElement('i');
        icon.classList.add('add', 'icon');
        var buttonText = document.createElement('span');
        buttonText.innerHTML = 'Add to playlist';
        //appendChild
        content.appendChild(header);
        button.appendChild(icon);
        button.appendChild(buttonText);
        button.addEventListener('click', function () {
            SoundCloudAPI.getEmbed(track.permalink_url);
        });
        card.appendChild(imageDiv);
        card.appendChild(content);
        card.appendChild(button);
        var searchResults = document.querySelector('.js-search-results');
        searchResults.appendChild(card);
        var card = document.createElement("div");
        card.classList.add("card");
        var searchResults = document.querySelector(".js-search-results");
        searchResults.appendChild(card);
    });
}
/**
 * 4.  Add to playlist and play
 */
// Embed the Audio Widget using the API
SoundCloudAPI.getEmbed = function (trackURL) {
    SC.oEmbed(trackURL, {
        auto_play: true
    }).then(function (embed) {
        var sideBar = document.querySelector('.js-playlist');
        var box = document.createElement('div');
        box.innerHTML = embed.html;
        sideBar.insertBefore(box, sideBar.firstChild);
        localStorage.setItem("key", sideBar.innerHTML);

    });
}
var sideBar = document.querySelector('.js-playlist');
sideBar.innerHTML = localStorage.getItem("key");