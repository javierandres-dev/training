const d = document,
  ls = localStorage;
export default function changeMode(btn, checkLS) {
  const $btnMode = d.querySelector(btn),
    $selectors = d.querySelectorAll("[data-theme]"),
    sun = "☀️",
    moon = "🌙",
    lightMode = () => {
      $selectors.forEach((selector) => selector.classList.remove("dark-mode"));
      $btnMode.textContent = moon;
      if (checkLS === true) ls.setItem("theme", "light");
    },
    darkMode = () => {
      $selectors.forEach((selector) => selector.classList.add("dark-mode"));
      $btnMode.textContent = sun;
      if (checkLS === true) ls.setItem("theme", "dark");
    };
  $btnMode.addEventListener("click", () => {
    if ($btnMode.textContent === moon) {
      darkMode();
    } else {
      lightMode();
    }
  });
  if (checkLS === true) {
    d.addEventListener("DOMContentLoaded", (e) => {
      if (ls.getItem("theme") === null) {
        ls.setItem("theme", "light");
      }
      if (ls.getItem("theme") === "light") {
        lightMode();
      }
      if (ls.getItem("theme") === "dark") {
        darkMode();
      }
    });
  }
}
