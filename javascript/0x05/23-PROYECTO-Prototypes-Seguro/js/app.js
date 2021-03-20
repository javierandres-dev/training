/**
 * VARIABLES
 */
const d = document,
  $form = d.getElementById("cotizar-seguro"),
  $result = d.getElementById("resultado"),
  interface = new Interface();// create a new instance of the prototype
/**
 * LISTENERS
 */
// when the document already loaded
d.addEventListener("DOMContentLoaded", () => {
  interface.fillYears();
  $form.addEventListener("submit", validateFields);
});
/**
 * FUNCTIONS
 */
const validateFields = (e) => {
  e.preventDefault();
  const $brand = d.getElementById("marca").value,
  $year = d.getElementById("year").value,
  $type = d.querySelector("input[name='tipo']:checked").value;
  if ($brand === "" || $year === "" || $type === ""){
    interface.showMessage("Faltan datos, revisar el formulario y probar de nuevo", "error");
    return;
  }
  quoteInsurance($brand, $year, $type);
}
const quoteInsurance=(brand, year, type)=> {
  // create a new instance of the prototype
  const insurance = new Insurance(brand, year, type),
  price = insurance.quote();
  interface.showMessage("Cotizando...", "correcto");
  setTimeout(() => {
    interface.showResult(insurance, price);
  }, 3000);
}
/**
 * Objects prototype
 */
// for the quote
function Insurance(brand, year, type) {
  this.brand = brand;
  this.year = year;
  this.type = type;
}
// to show and inform the user
function Interface() {}
/**
 * Prototypes
 */
Interface.prototype.fillYears = function () {
  const current = new Date().getFullYear(),
    oldest = current - 20,
    $year = d.getElementById("year");
  for (let i = current; i > oldest; i--) {
    const option = d.createElement("option");
    option.value = i;
    option.innerHTML = i;
    $year.appendChild(option);
  }
};
Interface.prototype.showMessage = function (message, type) {
  type === "error" ? $result.classList.add("error") : $result.classList.add("correcto");
  $result.classList.add("mensaje", "mt-10");
  $result.textContent = `${message}`;
  if (type === "error") {
    setTimeout(() => {
      $result.className = "";
      $result.textContent = "";
    }, 4000);
  }
  if (message === "Cotizando...") {
    const $spinner = d.getElementById("cargando");
    $spinner.style.display = "block";
    setTimeout(() => {
      $spinner.style.display = "none"
    }, 3000);
  }
};
Interface.prototype.showResult = function (insurance, total) {
  let brand;
  switch (insurance.brand) {
    case "1":
      brand = "Americano";
      break;
    case "2":
      brand = "Asiatico";
      break;
    case "3":
      brand = "Europeo";
      break;
    default:
      break;
  }
  $result.classList.add("mt-10");
  $result.innerHTML = `
    <p><strong>Resumen</strong></p>
    <p>Marca: ${brand}</p>
    <p>Año: ${insurance.year}</p>
    <p>Tipo: ${insurance.type}</p>
    <p>Total: ${total}</p>
  `;
};
// return the price of the insurance quote according to selections
Insurance.prototype.quote = function () {
  const quoteBase = 2000,
  old = new Date().getFullYear() - this.year;
  let price;
  switch (this.brand) {
    case "1":
      price = quoteBase * 1.20;
      break;
    case "2":
      price = quoteBase * 1.05;
      break;
    case "3":
      price = quoteBase * 1.35;
      break;
    default:
      break;
  }
  price -= ((old * 3) * price) / 100;
  switch (this.type) {
    case "basico":
      price *= 1.30;
      break;
    case "completo":
      price *= 1.50;
      break;
    default:
      break;
  }
  return price;
};
