const d = document,
  w = window;
export default function responsiveTester(id) {
  const $form = d.getElementById(id);
  let toTest;
  d.addEventListener("submit", (e) => {
    if (e.target === $form) {
      e.preventDefault();
      const url = $form.url.value,
        width = $form.width.value,
        height = $form.height.value;
      toTest = w.open(
        url,
        "test",
        `innerWidth = ${width}, innerHeight = ${height}`
      );
    }
  });
  d.addEventListener("click", (e) => {
    if (e.target === $form.close) toTest.close();
  });
}
