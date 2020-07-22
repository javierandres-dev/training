var map = L.map('mapid').setView([4.659047, -74.051250], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
}).addTo(map);
L.marker([4.654404, -74.055284]).addTo(map);
L.marker([4.651806, -74.056953]).addTo(map);
L.marker([4.652796, -74.054800]).addTo(map);