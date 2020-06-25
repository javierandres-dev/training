/**
 * VARIABLES
 */
const btnGetUsuarios = document.getElementById('btnGetUsuarios');
const mostrarRespuestas = document.getElementById('mostrarRespuestas');
const mostrarMensajes = document.getElementById('mostrarMensajes');
/**
 * EVENTOS
 */
function eventListeners(){
    btnGetUsuarios.addEventListener('click', getUsuarios);
}
eventListeners();
/**
 * FUNCIONES
 */
function enviarMensaje(mensaje, estilo){
    mostrarMensajes.innerHTML = mensaje;
    mostrarMensajes.classList = estilo;
    setTimeout(function(){
        mostrarMensajes.innerHTML = '';
    }, 4000);
}
function getUsuarios(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:4000/usuarios', true);
    xhr.onload = function(){
        if (this.status === 200){
            let respuesta = JSON.parse(this.responseText);
            let contenido = '';
            respuesta.forEach(function(usuario){
                contenido += `
                <p>ID: ${usuario.id}</p>
                <p>NOMBRE: ${usuario.nombre}</p>
                <p>CORREO ELECTRÓNICO: ${usuario.correo}</p>
                <p>TELÉFONO: ${usuario.telefono}</p>
                `;
            })
            mostrarRespuestas.innerHTML = contenido;
        }
        else{
            enviarMensaje('solicitud no procesada.', 'bg-danger text-white')
        }
    }
    xhr.send();
}