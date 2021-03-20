const d = document,
  n = navigator;
export default function getGeolocation(id) {
  const $id = d.getElementById(id),
    options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    },
    success = (position) => {
      const coordinates = position.coords;
      $id.innerHTML = `
      <p>Your current position is:</p>
      <ul>
        <li>Latitude: <b>${coordinates.latitude}</b></li>
        <li>Longitude: <b>${coordinates.longitude}</b></li>
        <li>Accuracy: <b>${coordinates.accuracy}</b>meters</li>
      </ul>
      <p><a href="https://www.google.com/maps/@${coordinates.latitude},${coordinates.longitude},1z" target="_blank" rel="noopener noreferrer">View in Google Maps</a></p>
      `;
    },
    error = (err) => {
      //console.log(err);
      $id.innerHTML = `<p><mark>Error: ${err.code} - ${err.message}</mark></p>`;
    };
  n.geolocation.getCurrentPosition(success, error, options);
}
