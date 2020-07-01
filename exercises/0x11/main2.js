const readKms =  document.getElementById('readKms')
const showMiles = document.getElementById('showMiles')
readKms.addEventListener('click', toMiles)
function toMiles(){
    let miles = readKms.value * 0.62137
    showMiles.innerHTML = miles
}