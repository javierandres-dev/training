export const d = document,
  $form = d.getElementById("formulario-buscar"),
  $artist = d.getElementById("artista"),
  $song = d.getElementById("cancion"),
  $result = d.getElementById("resultado"),
  $messages = d.getElementById("mensajes");
let flag = 0;
// inform to user
export const showMessage = (message, style) => {
  if (flag === 0) {
    flag++;
    if (style === "error") {
      $result.previousElementSibling.textContent = "";
      $result.textContent = "";
    }
    const p = d.createElement("p");
    p.classList.add(style);
    p.textContent = message;
    $messages.appendChild(p);
    setTimeout(() => {
      p.remove();
      flag--;
    }, 3000);
  }
};
// show lyric
export const showLyric = (artist, song, lyric) => {
  $result.previousElementSibling.textContent = `${artist} - ${song}`;
  $result.textContent = lyric;
};
