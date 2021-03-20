// IIFE
(function () {
  const w = window,
    d = document,
    $form = d.getElementById("formulario"),
    $clientsList = d.getElementById("listado-clientes");
  let DB;
  // when the document already loaded
  d.addEventListener("DOMContentLoaded", () => {
    // call function
    createDB();
    // if exist a database
    if (w.indexedDB.open("crm", 1)) {
      readClients();
    }
    $clientsList.addEventListener("click", deleteClient);
  });
  // remove client of the database
  const deleteClient = (e) => {
    if (e.target.classList.contains("flag")) {
      const deleteId = Number(e.target.dataset.cliente),
        check = confirm(
          "Esta acción requiere confirmación.\nEliminar cliente."
        );
      if (check) {
        //console.log(deleteId);
        // delete to database
        const transaction = DB.transaction(["crm"], "readwrite"),
          objStore = transaction.objectStore("crm");
        objStore.delete(deleteId);
        // if an error occurs
        transaction.onerror = () => {
          showMessage(
            "Error, no se eliminó el cliente de la base de datos.",
            "error"
          );
        };
        // if everything goes fine
        transaction.oncomplete = () => {
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
          p.classList.add("bg-green-100", "border-green-400", "text-green-700");
          p.textContent = "Eliminado correctamente de la base de datos.";
          $h2.insertAdjacentElement("afterend", p);
          setTimeout(() => {
            p.remove();
          }, 3000);
          e.target.parentElement.parentElement.remove();
        };
      }
    }
  };
  // create an indexedDB database
  function createDB() {
    // open a conection
    const aDB = w.indexedDB.open("crm", 1);
    // if error
    aDB.onerror = function () {
      console.error("Error creating database.");
    };
    // if success
    aDB.onsuccess = function () {
      DB = aDB.result;
      //console.log("DB = ", DB);
      console.log("Database ceated successfully.");
    };
    // define schema, it only runs one time
    aDB.onupgradeneeded = function (e) {
      const db = e.target.result;
      //console.log("db = ", db);
      const objStore = db.createObjectStore("crm", {
        keyPath: "id",
        autoIncrement: true,
      });
      // define columns
      objStore.createIndex("id", "id", { unique: true });
      objStore.createIndex("name", "name", { unique: false });
      objStore.createIndex("email", "email", { unique: true });
      objStore.createIndex("phone", "phone", { unique: false });
      objStore.createIndex("company", "company", { unique: false });
      console.log("db is ready");
    };
  }
  // read current clients that exist into a database
  const readClients = () => {
    // open connection
    const openConn = w.indexedDB.open("crm", 1);
    // if there is error
    openConn.onerror = () => {
      console.error("Failed to connect to database.");
    };
    // if everything goes fine
    openConn.onsuccess = () => {
      DB = openConn.result;
      const objStore = DB.transaction("crm").objectStore("crm");
      // use iterator "cursor"
      objStore.openCursor().onsuccess = function (e) {
        const cursor = e.target.result;
        if (cursor) {
          // show results
          const { id, name, email, phone, company } = cursor.value;
          $clientsList.innerHTML += `
          <tr>
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold"> ${name} </p>
                <p class="text-sm leading-10 text-gray-700"> ${email} </p>
            </td>
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                <p class="text-gray-700">${phone}</p>
            </td>
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">
                <p class="text-gray-600">${company}</p>
            </td>
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
                <a href="editar-cliente.html?id=${id}" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a>
                <a href="#" data-cliente="${id}" class="text-red-600 hover:text-red-900 flag">Eliminar</a>
            </td>
          </tr>
  `;
          cursor.continue();
        }
      };
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
      }, 3000);
    }
  };
})();
