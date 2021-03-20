export default function keyboardEvents(keRectangle) {
  /**
   *  VARIABLES
   */
  const d = document;
  const $keRectangle = d.getElementById("keRectangle");
  const $keCircle = d.getElementById("keCircle");
  let x = 0;
  let y = 0;
  /**
   *  LISTENERS
   */
  d.addEventListener("click", (e) => {
    if (e.target.matches(keRectangle)) {
      d.addEventListener("keydown", (e) => {
        const keyName = e.key;
        if (e.altKey) {
          if (keyName === "a") {
            alert("You have launched an alert");
          }
          if (keyName === "c") {
            confirm("You have launched a confirm");
          }
          if (keyName === "p") {
            prompt("You have called a prompt");
          }
        } else {
          const limitsCircle = $keCircle.getBoundingClientRect();
          const limitsRectangle = $keRectangle.getBoundingClientRect();
          switch (keyName) {
            case "ArrowUp":
              if (limitsCircle.top > limitsRectangle.top) {
                e.preventDefault();
                y--;
              }
              break;
            case "ArrowRight":
              if (limitsCircle.right < limitsRectangle.right) {
                e.preventDefault();
                x++;
              }
              break;
            case "ArrowDown":
              if (limitsCircle.bottom < limitsRectangle.bottom) {
                e.preventDefault();
                y++;
              }
              break;
            case "ArrowLeft":
              if (limitsCircle.left > limitsRectangle.left) {
                e.preventDefault();
                x--;
              }
              break;
            default:
              break;
          }
          $keCircle.style.transform = `translate(${x * 8}px, ${y * 8}px)`;
        }
      });
    }
  });
}
