import * as UI from "./interfaz.js";
import { Api } from "./api.js";
// when the document already loaded
UI.d.addEventListener("DOMContentLoaded", (e) => {
  UI.$form.addEventListener("submit", search);
});
// first, validate fields of the form, then do a query to api
const search = (e) => {
  e.preventDefault();
  if (validateForm()) {
    new Api(UI.$artist.value, UI.$song.value);
  }
};
// validate all fields of the form
const validateForm = () => {
  if (UI.$artist.value.length === 0 || UI.$song.value.length === 0) {
    UI.showMessage("Todos los campos son obligatorios.", "error");
    return false;
  }
  return true;
};
