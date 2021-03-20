/**
 * VARIABLES, SELECTORS
 */
const d = document,
  $form = d.getElementById("nueva-cita"),
  $pet = d.getElementById("mascota"),
  $owner = d.getElementById("propietario"),
  $phone = d.getElementById("telefono"),
  $date = d.getElementById("fecha"),
  $time = d.getElementById("hora"),
  $symptom = d.getElementById("sintomas"),
  $appts = d.getElementById("citas");
let editing = false;
/**
 * LISTENERS
 */
// when the document already loaded
d.addEventListener("DOMContentLoaded", (e) => {
  eventListeners();
});
const eventListeners = () => {
  $form.addEventListener("submit", createAppt);
  d.addEventListener("click", (e) => {
    if (e.target.id === "btnDel") {
      // on click over delete button
      delAppt(e);
    }
  });
};
/**
 * OBJECTS
 */
// object global, it be available for any use, it is the appoinment structure
const apptObj = {
  id: "",
  pet: "",
  owner: "",
  phone: "",
  date: "",
  time: "",
  symptom: "",
};
/**
 * CLASSES
 */
// to handle the appointments
class Appointments {
  constructor() {
    this.appointments = [];
  }
  editAppt(editedAppt) {
    console.log(editedAppt.id);
    this.appointments = this.appointments.map((appt) =>
      appt.id === editedAppt.id ? editedAppt : appt
    );
  }
  delAppt(id) {
    this.appointments = this.appointments.filter(
      (appointment) => appointment.id != id
    );
  }
  addAppt(appointment) {
    this.appointments = [...this.appointments, appointment];
  }
}
// an instance of the class
const appt = new Appointments();
// to inform to the user
class Interface {
  showMessage(message, style) {
    const $content = d.getElementById("contenido"),
      h3 = d.createElement("h3");
    h3.classList.add("m-auto", "alert", style);
    h3.textContent = message;
    $content.insertAdjacentElement("afterbegin", h3);
    setTimeout(() => {
      h3.remove();
    }, 4000);
  }
  showAppts(appts) {
    this.cleanAppts();
    appts.forEach((appt) => {
      const { id, pet, owner, phone, date, time, symptom } = appt,
        br = d.createElement("br"),
        btnDel = d.createElement("button"),
        btnEdit = d.createElement("button"),
        ul = d.createElement("ul");
      ul.dataset.id = id;
      ul.classList.add("list-group");
      let li = d.createElement("li");
      li.classList.add("list-group-item", "list-group-item-success");
      li.textContent = `Mascota:\t${pet}`;
      ul.appendChild(li);
      li = d.createElement("li");
      li.classList.add("list-group-item", "list-group-item-success");
      li.textContent = `Propietario:\t${owner}`;
      ul.appendChild(li);
      li = d.createElement("li");
      li.classList.add("list-group-item", "list-group-item-success");
      li.textContent = `Teléfono:\t${phone}`;
      ul.appendChild(li);
      li = d.createElement("li");
      li.classList.add("list-group-item", "list-group-item-success");
      li.textContent = `Fecha:\t${date}`;
      ul.appendChild(li);
      li = d.createElement("li");
      li.classList.add("list-group-item", "list-group-item-success");
      li.textContent = `Hora:\t${time}`;
      ul.appendChild(li);
      li = d.createElement("li");
      li.classList.add("list-group-item", "list-group-item-success");
      li.textContent = `Sintomas:\t${symptom}`;
      ul.appendChild(li);
      li = d.createElement("li");
      li.classList.add("list-group-item", "btn-group");
      btnEdit.setAttribute("id", "btnEdit");
      btnEdit.classList.add("btn", "btn-warning", "mx-1");
      btnEdit.textContent = "Editar";
      btnEdit.onclick = () => uploadEditAppt(appt);
      btnEdit.innerHTML;
      li.appendChild(btnEdit);
      btnDel.setAttribute("id", "btnDel");
      btnDel.classList.add("btn", "btn-danger", "mx-1");
      btnDel.textContent = "Eliminar";
      li.appendChild(btnDel);
      ul.appendChild(li);
      $appts.appendChild(ul);
      $appts.appendChild(br);
    });
  }
  cleanAppts() {
    while ($appts.firstChild) {
      $appts.removeChild($appts.firstChild);
    }
  }
}
// an instance of the class
const ui = new Interface();
/**
 * FUNCTIONS
 */
// to reset the object global
const resetApptObj = () => {
  apptObj.id = "";
  apptObj.pet = "";
  apptObj.owner = "";
  apptObj.phone = "";
  apptObj.date = "";
  apptObj.time = "";
  apptObj.symptom = "";
};
// to delete an appointment
const delAppt = (e) => {
  if (confirm("Esta operación requiere confirmación\nEliminar cita")) {
    const id = e.target.parentElement.parentElement.dataset.id;
    appt.delAppt(id);
    ui.showMessage("Cita eliminada satisfactoriamente.", "alert-success");
  }
  ui.showAppts(appt.appointments);
};
// to update an appointment
const uploadEditAppt = (appt) => {
  // destructuring to get and set values, in the object and in the interface
  const { id, pet, owner, phone, date, time, symptom } = appt;
  // set object
  apptObj.id = id;
  apptObj.pet = pet;
  apptObj.owner = owner;
  apptObj.phone = phone;
  apptObj.date = date;
  apptObj.time = time;
  apptObj.symptom = symptom;
  // set user interface
  $pet.value = pet;
  $owner.value = owner;
  $phone.value = phone;
  $date.value = date;
  $time.value = time;
  $symptom.value = symptom;
  // change content of the submit button
  $form.querySelector("button[type='submit']").textContent = "Guardar cambios";
  // set flag to function create appointment
  editing = true;
};
// to check all form fields
const validateForm = () => {
  if (
    $pet.value.length === 0 ||
    $owner.value.length === 0 ||
    $phone.value.length === 0 ||
    $date.value.length === 0 ||
    $time.value.length === 0 ||
    $symptom.value.length === 0
  ) {
    ui.showMessage("Todos los campos son requeridos.", "alert-danger");
    return false;
  }
  return true;
};
// to create a new or update an old appointment
const createAppt = (e) => {
  e.preventDefault();
  if (validateForm()) {
    apptObj.pet = $pet.value;
    apptObj.owner = $owner.value;
    apptObj.phone = $phone.value;
    apptObj.date = $date.value;
    apptObj.time = $time.value;
    apptObj.symptom = $symptom.value;
    if (editing) {
      appt.editAppt({ ...apptObj });
      ui.showMessage(
        "Cambios realizados, guardado satisfactoriamente.",
        "alert-success"
      );
      editing = false;
      $form.querySelector("button[type='submit']").textContent = "Crear cita";
    } else {
      apptObj.id = Date.now();
      appt.addAppt({ ...apptObj });
      ui.showMessage("Cita creada satisfactoriamente.", "alert-success");
    }
    ui.showAppts(appt.appointments);
    resetApptObj();
    $form.reset();
  }
};
