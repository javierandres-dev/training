/**
 * VARIABLES, SELECTORS
 */
const d = document,
  $result = d.getElementById("resultado"),
  $form = d.getElementById("formulario"),
  $country = d.getElementById("pais"),
  $city = d.getElementById("ciudad");
let flag = 0;
/**
 * LISTENERS
 */
// whe the document already loaded
d.addEventListener("DOMContentLoaded", () => {
  // listen submit button
  $form.addEventListener("submit", getWeather);
});
/**
 * FUNCTIONS
 */
// if exist values into the fields, query API
const getWeather = (e) => {
  e.preventDefault();
  if (validateForm()) {
    queryApi($country.value, $city.value);
  }
};
// check that all fields content anything
const validateForm = () => {
  if ($country.value.length === 0 || $city.value.length === 0) {
    showError("Escribe una ciudad y selecciona un pais.");
    return false;
  } else {
    return true;
  }
};
// inform to user if any field is empty
const showError = (errorMessage) => {
  if (flag === 0) {
    flag++;
    const p = d.createElement("p");
    p.classList.add(
      "bg-red-100",
      "border-red-400",
      "text-red-700",
      "px-4",
      "py-3",
      "rounded",
      "relative",
      "max-w-md",
      "mx-auto",
      "mt-6",
      "text-center"
    );
    p.textContent = errorMessage;
    $result.appendChild(p);
    // remove message and reset interface and form
    setTimeout(() => {
      resetHTML();
      $form.reset();
      flag = 0;
    }, 3000);
  }
};
// make a query and handle the response
const queryApi = (country, city) => {
  spinner();
  const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=e34eeef7651a8e052c7d8092e67b6665`;
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      // if successfully, then show result to the user
      if (data.cod === 200) {
        showWeather(
          data.name,
          data.main.temp,
          data.main.temp_max,
          data.main.temp_min
        );
      } else if (data.cod === "404") {
        showError("Ciudad no encontrada.");
      } else {
        console.warn(data);
      }
    })
    .catch((error) => {
      console.error("Error: ", error);
    });
};
// show an animation
const spinner = () => {
  cleanHTML();
  const div = document.createElement("div");
  div.classList.add("sk-fading-circle");
  div.innerHTML = `
    <div class="sk-circle1 sk-circle"></div>
    <div class="sk-circle2 sk-circle"></div>
    <div class="sk-circle3 sk-circle"></div>
    <div class="sk-circle4 sk-circle"></div>
    <div class="sk-circle5 sk-circle"></div>
    <div class="sk-circle6 sk-circle"></div>
    <div class="sk-circle7 sk-circle"></div>
    <div class="sk-circle8 sk-circle"></div>
    <div class="sk-circle9 sk-circle"></div>
    <div class="sk-circle10 sk-circle"></div>
    <div class="sk-circle11 sk-circle"></div>
    <div class="sk-circle12 sk-circle"></div>
  `;
  $result.appendChild(div);
};
// format the data to inform to the user
const showWeather = (name, temp, temp_max, temp_min) => {
  const current = kelvinToCelsius(temp),
    max = kelvinToCelsius(temp_max),
    min = kelvinToCelsius(temp_min);
  resetHTML();
  $result.classList.add("text-center", "text-white");
  html = `
    <p class="font-bold text-2xl">Clima en: ${name}</p>
    <p class="font-bold text-4xl">${current} &#8451;</p>
    <p class="text-xl">Max: ${max} &#8451;</p>
    <p class="text-xl">Min: ${min} &#8451;</p>
  `;
  $result.innerHTML = html;
};
// convert Kelvin degree to Celsius degree
function kelvinToCelsius(kelvin) {
  return parseInt(kelvin - 273.15);
}
// initial interface
const resetHTML = () => {
  cleanHTML();
  $result.innerHTML = `
    <p class="text-center text-white mt-6">Agrega tu ciudad y país, el resultado se mostrará aquí</p>
  `;
};
// remove existing content
const cleanHTML = () => {
  while ($result.firstChild) {
    $result.removeChild($result.firstChild);
  }
};
