/*
 * API
 */
/**
 * OEM
SC.initialize({
    client_id: 'cd9be64eeb32d1741c17cb39e41d254d'
});
// find all sounds of buskers licensed under 'creative commons share alike'
SC.get('/tracks', {
    q: 'buskers',
    license: 'cc-by-sa'
}).then(function (tracks) {
    console.log(tracks);
});
*/
/**
 * Wrap Our SoundCloud Code in an Object
 */
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
        console.log(tracks);
    });
}
SoundCloudAPI.getTrack("Rilo Kiley");
/**
 * Dynamically Generate Our HTML Cards with JavaScript
 */
SoundCloudAPI.renderTracks = function () {
    var card = document.createElement("div");
    card.classList.add("card");
    var searchResults = document.querySelector(".js-search-results");
    searchResults.appendChild(card);
}
SoundCloudAPI.renderTracks();