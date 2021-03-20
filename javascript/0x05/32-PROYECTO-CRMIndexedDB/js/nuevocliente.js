// IIFE
(function () {
  const w = window,
    d = document,
    $form = d.getElementById("formulario");
  let DB;
  d.addEventListener("DOMContentLoaded", () => {
    // call function
    connectDB();
    $form.addEventListener("submit", validateForm);
  });
  // connect with database
  function connectDB() {
    // open connection
    const openConn = w.indexedDB.open("crm", 1);
    // if there is error
    openConn.onerror = function () {
      console.error("Failed to connect to database.");
    };
    // if everything goes fine
    openConn.onsuccess = function () {
      DB = openConn.result;
    };
  }
  // validate all fields from the form
  function validateForm(e) {
    e.preventDefault();
    const $name = d.getElementById("nombre").value,
      $email = d.getElementById("email").value,
      $phone = d.getElementById("telefono").value,
      $company = d.getElementById("empresa").value;
    if (
      $name.length === 0 ||
      $email.length === 0 ||
      $phone.length === 0 ||
      $company.length === 0
    ) {
      showMessage("Todos los campos son requeridos.", "error");
      return;
    } else {
      createClient($name, $email, $phone, $company);
    }
  }
  // create a new client
  const createClient = (name, email, phone, company) => {
    // create a object with the information
    const client = {
      id: Date.now(),
      name,
      email,
      phone,
      company,
    };
    // add to database
    const transaction = DB.transaction(["crm"], "readwrite");
    const objStore = transaction.objectStore("crm");
    objStore.add(client);
    // if an error occurs
    transaction.onerror = () => {
      showMessage(
        "Error, no se agregó el cliente a la base de datos.",
        "error"
      );
    };
    // if everything goes fine
    transaction.oncomplete = () => {
      showMessage("Cliente agregado correctamente.");
      $form.reset();
      // redirect
      setTimeout(() => {
        w.location.href = "index.html";
      }, 3000);
    };
  };
  // inform to user
  const showMessage = (message, style) => {
    const flag = document.querySelector(".flag");
    if (!flag) {
      const $h2 = d.querySelector("h2"),
        p = d.createElement("p");
      p.classList.add(
        "flag",
        "px-4",
        "py-3",
        "rounded",
        "max-w-lg",
        "mx-auto",
        "mt-6",
        "text-center"
      );
      if (style === "error") {
        p.classList.add("bg-red-100", "border-red-400", "text-red-700");
      } else {
        p.classList.add("bg-green-100", "border-green-400", "text-green-700");
      }
      p.textContent = message;
      $h2.insertAdjacentElement("afterend", p);
      setTimeout(() => {
        p.remove();
      }, 4000);
    }
  };
})();
