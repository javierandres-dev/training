/**
 * VARIABLES
 */
const btnCrearUsuario = document.getElementById('btnCrearUsuario');
/**
 * CLASES
 */
/**
 * EVENT LISTENERS
 */
eventListeners();
function eventListeners(){
    btnCrearUsuario.addEventListener('click', crearUsuario);
}
/**
 * FUNCIONES
 */
function crearUsuario(){
    console.log('Works!');
}