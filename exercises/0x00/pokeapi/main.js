"use strict";
const d = document,
  endpoint = "https://pokeapi.co/api/v2/pokemon/",
  $main = d.querySelector("main"),
  $aside = d.querySelector("aside"),
  $spinner = d.getElementById("spinner"),
  $modal = new bootstrap.Modal(document.getElementById("modal"));

d.addEventListener("DOMContentLoaded", () => {
  getPokemons(endpoint);
});

async function getPokemons(url) {
  try {
    toogleSpinner();
    let pokemons = await fetch(url);
    pokemons = await pokemons.json();
    showPokemons(pokemons.previous, pokemons.next, pokemons.results);
  } catch (error) {
    showModal("error");
  } finally {
    toogleSpinner();
  }
}

async function showPokemons(previous, next, results) {
  let html = '<div class="wrap-pokemons">';
  for (let i = 0; i < results.length; i++) {
    const pokemon = results[i];
    let detailPokemon = null;
    try {
      toogleSpinner();
      detailPokemon = await fetch(pokemon.url);
      detailPokemon = await detailPokemon.json();
    } catch (error) {
      showModal("error");
    } finally {
      toogleSpinner();
    }
    html += `<figure>
      <img src="${detailPokemon.sprites.front_default}" alt="Image ${pokemon.name}">
      <figcaption><button type="button" class="btn btn-link text-capitalize" id="${detailPokemon.id}">${pokemon.name}</button></figcaption>
    </figure>`;
  }
  html += `</div>
<div class="btn-group" role="group">
${
  previous
    ? `<button type="button" class="btn btn-primary" id="previous">Previous</button>`
    : ""
}
${
  next
    ? `<button type="button" class="btn btn-primary" id="next">Next</button>`
    : ""
}
</div>
`;
  $main.innerHTML = html;
  watchClicks(previous, next);
}

function watchClicks(urlPrevious, urlNext) {
  const $btnsLink = d.querySelectorAll(".btn-link");
  const $previous = d.getElementById("previous");
  const $next = d.getElementById("next");
  if ($previous)
    $previous.addEventListener("click", () => {
      getPokemons(urlPrevious);
    });
  if ($next)
    $next.addEventListener("click", () => {
      getPokemons(urlNext);
    });
  $btnsLink.forEach(($btn) => {
    $btn.addEventListener("click", () => {
      showPokemon($btn.id);
    });
  });
}

async function showPokemon(id) {
  try {
    toogleSpinner();
    let detailPokemon = await fetch(endpoint + id);
    detailPokemon = await detailPokemon.json();
    showModal("pokemon", detailPokemon);
  } catch (error) {
    showModal("error");
  } finally {
    toogleSpinner();
  }
}

function showModal(type, data = null) {
  const $title = d.querySelector(".modal-title");
  const $body = d.querySelector(".modal-body");
  if (type === "error") {
    $title.innerHTML = `<span class="text-warning"><i class="bi bi-exclamation-triangle"></i> An error occurred</span>`;
    $body.textContent = "Please try again";
  }
  if (type === "pokemon") {
    $title.innerHTML = `<span class="text-info"><i class="bi bi-info-circle-fill"></i> Details</span>`;
    $body.innerHTML = `<div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${data.sprites.front_default}" alt="Front image ${data.name}" class="img-fluid rounded-start">
      <img src="${data.sprites.back_default}" alt="Back image ${data.name}" class="img-fluid rounded-start">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title text-capitalize">${data.name}</h5>
        <ul>
          <li class="card-text">Weight: ${data.weigth}</li>
          <li class="card-text">Height: ${data.height}</li>
        </ul>
      </div>
    </div>
  </div>
</div>`;
  }
  $modal.toggle();
}

function toogleSpinner() {
  $spinner.classList.toggle("d-none");
}
