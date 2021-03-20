import * as UI from "./interfaz.js";
export class Api {
  constructor(artist, song) {
    this.artist = artist;
    this.song = song;
    this.queryApi();
  }
  async queryApi() {
    try {
      const resp = await fetch(
        `https://api.lyrics.ovh/v1/${this.artist}/${this.song}`
      );
      if (resp.ok) {
        const json = await resp.json();
        UI.showLyric(this.artist, this.song, json.lyrics);
      } else {
        Promise.reject(resp);
      }
    } catch (error) {
      console.error(error);
    } finally {
      UI.showMessage("Consulta realizada con éxito.", "info");
      UI.$form.reset();
    }
  }
}
