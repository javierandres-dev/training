/**
 * VARIABLES
 */
const btnLess = document.getElementById('btnLess')
const btnMore = document.getElementById('btnMore')
const showAmount = document.getElementById('showAmount')
const showMessage = document.getElementById('showMessage')
let amount = 0;
/**
 * EVENT LISTENERS
 */
eventListeners()

function eventListeners() {
    btnLess.addEventListener('click', less)
    btnMore.addEventListener('click', more)
}
/**
 * FUNCTIONS
 */
function less() {
    setAmount(amount = amount - 1)
}

function more() {
    setAmount(amount = amount + 1)
}
const setAmount = (amount) => {
    showAmount.innerHTML = amount
    setMessage(amount)
}
setAmount(amount)

function setMessage(amount) {
    if (amount === 0) {
        showMessage.innerHTML = "You don't have any items in your shopping list"
    } else if (amount > 0) {
        if (amount === 1) {
            showMessage.innerHTML = "You have one item in your shopping list"
        } else {
            showMessage.innerHTML = "You have more than 1 item in your shopping list"
        }
    } else {
        showMessage.innerHTML = "Invalid number"
    }
}