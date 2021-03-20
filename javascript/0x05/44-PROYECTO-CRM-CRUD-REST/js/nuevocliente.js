import { showMessage, isValid } from "./funciones.js";
import { newClient } from "./API.js";
(function () {
  const d = document,
    $form = d.getElementById("formulario");
  $form.addEventListener("submit", validateClient);
  // Check if all fields contain data, then, create a new client
  function validateClient(e) {
    e.preventDefault();
    const name = d.getElementById("nombre").value,
      email = d.getElementById("email").value,
      phone = d.getElementById("telefono").value,
      company = d.getElementById("empresa").value,
      objClient = {
        name,
        email,
        phone,
        company,
      };
    if (isValid(objClient)) {
      showMessage("Todos los campos son requeridos.");
      return;
    }
    newClient(objClient);
  }
})();
