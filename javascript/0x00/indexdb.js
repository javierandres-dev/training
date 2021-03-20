let DB;
document.addEventListener("DOMContentLoaded", () => {
  // inicializar
  crmDB();
  // crear un nuevo registro
  setTimeout(() => {
    crearCliente();
  }, 5000);
});
// base de datos: indexedDB
function crmDB() {
  // crear base de datos v.1.0
  let crmDB = window.indexedDB.open("crm", 1);
  // si ahy un error
  crmDB.onerror = function () {
    console.log("Hubo un error a la hora de crear DB");
  };
  // si se creó bien
  crmDB.onsuccess = function () {
    DB = crmDB.result;
    //console.log(DB);
    console.log("Base de datos creada!.");
  };
  // configuración de la base de datos, definir el schema
  crmDB.onupgradeneeded = function (e) {
    //console.log("Este método solo se ejecuta una vez...");
    //console.log(e.target.result);
    const db = e.target.result;
    const objStore = db.createObjectStore("crm", {
      // el índice
      keyPath: "crm",
      autoIncrement: true,
    });
    // definir las columnas
    objStore.createIndex("nombre", "nombre", { unique: false });
    objStore.createIndex("email", "email", { unique: true });
    objStore.createIndex("telefono", "telefono", { unique: false });
    console.log("Columnas creadas");
  };
}
// para realizar las diferentes operaciones (CRUD) se utilizan las transacciones
function crearCliente() {
  // habilitar las transacciones
  let transaction = DB.transaction(["crm"], "readwrite");
  transaction.oncomplete = function () {
    console.log("Transacción completada");
  };
  transaction.onerror = function () {
    console.log("Hubo un error en la transacción");
  };
  const objStore = transaction.objectStore("crm");
  const nuevoCliente = {
    telefono: 555,
    nombre: "Javi",
    email: "correo@correo.com",
  };
  const peticion = objStore.add(nuevoCliente); // put, delete
  console.log(peticion);
}
