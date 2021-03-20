/* VARIABLES, SELECTORS */
const d = document,
  $form = d.getElementById("agregar-gasto"),
  $expensesList = d.getElementById("gastos"),
  $ul = d.querySelector("ul"),
  $budget = d.getElementById("total"),
  $remaining = d.getElementById("restante");
let budget;
/* EVENT LISTENERS */
// whe the document already lodaded
d.addEventListener("DOMContentLoaded", (e) => {
  getBudget();
  $form.addEventListener("submit", addExpense);
  $ul.addEventListener("click", remExpense);
});
/* FUNCTIONS */
// get initial butget from the user
const getBudget = () => {
    const getBudget = prompt("¿Cuál es tu presupuesto?");
  if (
    getBudget === "" ||
    getBudget === null ||
    isNaN(getBudget) ||
    getBudget <= 0
  ) {
    window.location.reload();
  }
  // create an instance of the class with the user budget
  budget = new Budget(getBudget);
  // show to user initial budget
  interface.insertBudget(budget);
};
// add an expense
const addExpense = () => {
  if (validateFields()) {
    const $expense = d.getElementById("gasto").value,
      $number = Number(d.getElementById("cantidad").value),
      expense = { id: Date.now(), name: $expense, number: $number };
    budget.newExpense(expense);
    budget.balance();
    const {expenses} = budget;
    interface.addInBalance(expenses);
    const {remaining} = budget;
    interface.updateRemaining(remaining);
    $form.reset();
  }
};
// check content of the fileds
const validateFields = () => {
  const $expense = d.getElementById("gasto").value,
    $number = d.getElementById("cantidad").value;
  if ($expense.length === 0 || $number.length === 0) {
    showMessage(
      "Los campos 'Gasto' y 'Cantidad' son obligatorios.",
      "alert-danger"
    );
    return false;
  }
  const regexp = /[a-z ñ]/gi;
  if (!regexp.test($expense)) {
    showMessage(
      "Por favor dale un nombre al gasto'(en palabra(s))'.",
      "alert-warning"
    );
    return false;
  }
  if (isNaN(Number($number))) {
    showMessage(
      "Por favor escribe la cantidad '(en número(s)).'",
      "alert-warning"
    );
    return false;
  }
  return true;
};
// inform to user
const showMessage = (message, type) => {
  const p = d.createElement("p");
  p.classList.add("alert", type);
  p.textContent = message;
  $form.insertAdjacentElement("beforebegin", p);
  setTimeout(() => {
    p.remove();
  }, 4000);
};
// remove an expense
const remExpense = (e)=> {
  if(e.target.classList.contains("borrar-gasto")){
    const {id} = e.target.parentElement.dataset;
    budget.delExpense(id);
    const {remaining} = budget;
    interface.updateRemaining(remaining);
    e.target.parentElement.remove();
  }
}
/* CLASSES */
// to handle budget
class Budget {
  constructor(budget) {
    this.budget = Number(budget);
    this.remaining = Number(budget);
    this.expenses = [];
  }
  // add an expense
  newExpense(expense) {
    this.expenses = [...this.expenses, expense];
    this.balance();
  }
  // update remainder
  balance(){
    const spend = this.expenses.reduce((total, expense) => total + expense.number, 0);
    this.remaining = this.budget - spend;
  }
  // delete an expense
  delExpense(id){
    this.expenses = this.expenses.filter(expense => expense.id.toString() !== id);
    this.balance();
  }
}
// to handle user interface
class Interface {
  // clean HTML view
  cleanBalance() {
    while ($ul.firstChild) {
      $ul.removeChild($ul.firstChild);
    }
  }
  // show initial budget
  insertBudget(budget) {
    $budget.textContent = budget.budget;
    $remaining.textContent = budget.remaining;
  }
  // show expenses
  addInBalance(expenses){
    this.cleanBalance();
    expenses.forEach(expense => {
      const {id, name, number} = expense,
      li = d.createElement("li"),
      btnDel = d.createElement('button');
      li.dataset.id = id;
      li.className = 'list-group-item d-flex justify-content-between align-items-center';
      li.innerHTML = `
      ${name}
      <span class="badge badge-primary badge-pill">${number}</span>
      `;
      btnDel.classList.add('btn', 'btn-danger', 'borrar-gasto');
      btnDel.textContent = 'Borrar';
      li.appendChild(btnDel);
      $ul.appendChild(li);
    });
  }
  // show current remaining
  updateRemaining(remaining){
    if(remaining <= 0){
      showMessage("El presupuesto se ha terminado.", "alert-danger");
      $form.querySelector('button[type="submit"]').disabled = true;
    }
    else {
      $form.querySelector('button[type="submit"]').disabled = false;
    }
    if((budget.budget / 4) > remaining){
      $remaining.parentElement.parentElement.classList.remove("alert-success", "alert-warning");
      $remaining.parentElement.parentElement.classList.add("alert-danger");
    }
    else if((budget.budget / 2) > remaining){
      $remaining.parentElement.parentElement.classList.remove("alert-success");
      $remaining.parentElement.parentElement.classList.add("alert-warning");
    } else {
      $remaining.parentElement.parentElement.classList.remove("alert-danger", "alert-warning");
      $remaining.parentElement.parentElement.classList.add("alert-success");
    }
    $remaining.textContent = remaining;
  }
}
// create an instance of the class to inform at the user
const interface = new Interface();
