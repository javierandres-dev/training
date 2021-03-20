import { getClient, updateClient } from "./API.js";
import { showMessage, isValid } from "./funciones.js";
(function () {
  const d = document,
    idInput = d.getElementById("id"),
    nameInput = d.getElementById("nombre"),
    emailInput = d.getElementById("email"),
    phoneInput = d.getElementById("telefono"),
    companyInput = d.getElementById("empresa");
  d.addEventListener("DOMContentLoaded", async () => {
    const urlParamrs = new URLSearchParams(window.location.search);
    const clientId = parseInt(urlParamrs.get("id"));
    const client = await getClient(clientId);
    showClient(client);
    const $form = d.getElementById("formulario");
    $form.addEventListener("submit", validateClient);
  });
  // Show on user interface a specific client
  function showClient(client) {
    const { id, name, email, phone, company } = client;
    idInput.value = id;
    nameInput.value = name;
    emailInput.value = email;
    phoneInput.value = phone;
    companyInput.value = company;
  }
  // Validate all fields form before updating data
  function validateClient(e) {
    e.preventDefault();
    const objClient = {
      id: parseInt(idInput.value),
      name: nameInput.value,
      email: emailInput.value,
      phone: phoneInput.value,
      company: companyInput.value,
    };
    if (isValid(objClient)) {
      showMessage("Todos los campos son requeridos.");
      return;
    }
    updateClient(objClient);
  }
})();
