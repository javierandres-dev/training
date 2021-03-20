// IIFE
(function () {
  const w = window,
    d = document,
    $form = d.getElementById("formulario");
  let DB, clientId;
  d.addEventListener("DOMContentLoaded", () => {
    connectDB();
    // get id from url
    const parametersURL = new URLSearchParams(w.location.search);
    clientId = parametersURL.get("id");
    // call specific client
    if (clientId) {
      setTimeout(() => {
        getClient(clientId);
      }, 1000);
    }
    $form.addEventListener("submit", validateForm);
  });
  // connect with database
  const connectDB = () => {
    // open connection
    const openConn = w.indexedDB.open("crm", 1);
    // if there is error
    openConn.onerror = () => console.error("Failed to connect to database.");
    // if everything goes fine
    openConn.onsuccess = () => {
      DB = openConn.result;
    };
  };
  // get a specific client by id
  const getClient = (id) => {
    const transaction = DB.transaction(["crm"], "readwrite"),
      objStore = transaction.objectStore("crm"),
      client = objStore.openCursor();
    client.onsuccess = (e) => {
      const cursor = e.target.result;
      if (cursor) {
        if (cursor.value.id === Number(id)) {
          fillForm(cursor.value);
        }
        cursor.continue();
      }
    };
  };
  // show client to edit
  const fillForm = (client) => {
    const $name = d.getElementById("nombre"),
      $email = d.getElementById("email"),
      $phone = d.getElementById("telefono"),
      $company = d.getElementById("empresa");
    $name.value = client.name;
    $email.value = client.email;
    $phone.value = client.phone;
    $company.value = client.company;
  };
  // update client
  const updateClient = (name, email, phone, company) => {
    //console.log(name, email, phone, company);
    const clientUpdated = {
      id: Number(clientId),
      name,
      email,
      phone,
      company,
    };
    // update to database
    const transaction = DB.transaction(["crm"], "readwrite"),
      objStore = transaction.objectStore("crm");
    objStore.put(clientUpdated);
    // if an error occurs
    transaction.onerror = () => {
      showMessage(
        "Error, no se actualizó el cliente en la base de datos.",
        "error"
      );
    };
    // if everything goes fine
    transaction.oncomplete = () => {
      showMessage("Cliente actualizado correctamente.");
      $form.reset();
      // redirect
      setTimeout(() => {
        w.location.href = "index.html";
      }, 3000);
    };
  };
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
      updateClient($name, $email, $phone, $company);
    }
  }
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
