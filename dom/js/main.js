"use strict";
const d = document,
  $root = d.getElementById("root");

let count = 0;

d.addEventListener("DOMContentLoaded", () => {
  createContent();
});

function createContent() {
  const $h1 = d.createElement("h1"),
    $img = d.createElement("img"),
    $button = d.createElement("button");
  $h1.textContent = "Welcome!";
  $img.setAttribute("src", "./img/bulb-off.png");
  $button.textContent = "ON / OFF";
  $root.appendChild($h1);
  $root.appendChild($img);
  $root.appendChild($button);
  changeContent($h1, $img, $button);
}

function changeContent($h1, $img, $button) {
  $button.addEventListener("click", () => {
    count++;
    let img = $img.getAttribute("src");
    img =
      img === "./img/bulb-off.png"
        ? (img = "./img/bulb-on.png")
        : (img = "./img/bulb-off.png");
    $img.setAttribute("src", img);
    if (count === 1) $h1.textContent = "Works!";
    if (count === 5) {
      $h1.textContent = "Super!";
      $h1.style.fontSize = "48px";
      $h1.style.color = "white";
    }
    if (count > 5) {
      const html = `Clicks <strong>${count} x 2 = ${count * 2}</strong>`;
      if (count === 6) {
        const $p = d.createElement("p");
        $p.innerHTML = html;
        $root.appendChild($p);
      } else {
        const $p = d.querySelector("p");
        $p.innerHTML = html;
      }
    }
  });
}
