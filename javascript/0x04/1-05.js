const d = document,
  w = window;
export default function scrollTopButton(btn) {
  const $btnScroll = d.querySelector(btn);
  w.addEventListener("scroll", (e) => {
    const scrollTop = w.pageYOffset || d.documentElement.scrollTop;
    if (scrollTop > 300) {
      $btnScroll.classList.remove("v-hidden");
    } else {
      $btnScroll.classList.add("v-hidden");
    }
  });
  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      w.scrollTo({ behavior: "smooth", top: 0 });
    }
  });
}
