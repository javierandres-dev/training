export default function hamburgerMenu(btnPanel, panel, menuLink) {
  const d = document;
  d.addEventListener("click", (e) => {
    if (e.target.matches(btnPanel) || e.target.matches(`${btnPanel} *`)) {
      d.querySelector(panel).classList.toggle("is-active");
      d.querySelector(btnPanel).classList.toggle("is-active");
    }
    if (e.target.matches(menuLink)) {
      d.querySelector(panel).classList.remove("is-active");
      d.querySelector(btnPanel).classList.remove("is-active");
    }
  });
}
