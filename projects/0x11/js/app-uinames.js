/**
 * VARIABLES
 */
const generarNombre = document.getElementById('generar-nombre');
/**
 * EVENTOS
 */
function eventListeners(){
    generarNombre.addEventListener('submit', cargarNombres);
}
eventListeners();
/**
 * FUNCIONES
 */
function cargarNombres(evt){
    evt.preventDefault();
    const origen = document.getElementById('origen');
    const origenSeleccionado = origen.options[origen.selectedIndex].value;
    const genero = document.getElementById('genero');
    const generoSeleccionado = genero.options[genero.selectedIndex].value;
    const cantidad = document.getElementById('numero').value;
    let url = '';
    url = 'http://uinames.com/api/?';
    // Agregar origen
    if (origenSeleccionado !== ''){
        url += `region=${origenSeleccionado}&`;
    }
    // Agregar genero
    if (generoSeleccionado !== ''){
        url += `gender=${generoSeleccionado}&`;
    }
    // Agregar cantidad
    if (cantidad !== ''){
        url += `amount=${cantidad}&`;
    }
    console.log(url);
    /**
     * AJAX
     */
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onload = function(){
        if(this.status === 200){
            console.log(JSON.parse(this.responseText));
        }
    }
    xhr.send();
}