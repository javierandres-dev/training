/**
 * VARIABLES
 */
const listaUsuarios = [];
const usuario = {
    id: '',
    nombre: '',
    apellido: '',
};
const formOpciones = document.getElementById('formOpciones');
const opcLeerListaUsuarios = document.getElementById('opcLeerListaUsuarios').checked;
const opcCrearUsuario = document.getElementById('opcCrearUsuario').checked;
const opcEditarUsuario = document.getElementById('opcEditarUsuario').checked;
const opcEliminarUsuario = document.getElementById('opcEliminarUsuario').checked;
const btnConfirmarSeleccion = document.getElementById('btnConfirmarSeleccion');
const mensajes = document.getElementById('mensajes');
const mostrar = document.getElementById('mostrar');
/**
 * CLASES
 */
/**
 * EVENTOS
 */
eventListeners();

function eventListeners() {
    opcLeerListaUsuarios.addEventListener('che')
    btnConfirmarSeleccion.addEventListener('click', leerSeleccion);
}
/**
 * FUNCIONES
 */
function enviarMensaje(mensaje) {
    mensajes.innerHTML = mensaje;
    setTimeout(function () {
        mensajes.innerHTML = '';
    }, 3000);
}

function leerSeleccion(evt) {
    evt.preventDefault();
    if (opcLeerListaUsuarios === true) {
        mostrarTablaUsuarios();
    } else if (opcCrearUsuario === true) {
        crearUsuario();
    } else if (opcEditarUsuario === true) {
        editarUsuario();
    } else if (opcEliminarUsuario === true) {
        eliminarUsuario();
    } else {
        enviarMensaje('Primero debe seleccionar una opción, luego confirmar.');
        return 0;
    }
}

function mostrarTablaUsuarios() {
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    table.appendChild(thead);
    const caption = document.createElement('caption');
    const textoCaption = document.createTextNode('Lista de usuarios');
    caption.appendChild(textoCaption);
    thead.appendChild(caption);
    const tr = document.createElement('tr');
    thead.appendChild(tr);
    for (i in usuario) {
        const th = document.createElement('th');
        const textoTh = document.createTextNode(`${i}`);
        th.appendChild(textoTh);
        tr.appendChild(th);
    }
    const tbody = document.createElement('tbody');
    table.appendChild(tbody);
    mostrar.appendChild(table);
}

function mostrarFormUsuario() {
    const form = document.createElement('form');
    const fieldset = document.createElement('fieldset');
    form.appendChild(fieldset);
    const legend = document.createElement('legend');
    const textoLegend = document.createTextNode('Datos del usuario');
    legend.appendChild(textoLegend);
    fieldset.appendChild(legend);
    const inputId = document.createElement('input');
    inputId.setAttribute('id', 'id');
    fieldset.appendChild(inputId);
    const inputNombre = document.createElement('input');
    inputNombre.setAttribute('id', 'nombre');
    fieldset.appendChild(inputNombre);
    const inputApellido = document.createElement('input');
    inputApellido.setAttribute('id', 'apellido');
    fieldset.appendChild(inputApellido);
    const button = document.createElement('button');
    button.setAttribute('type', 'submit');
    let origen = quienLlama;
    if (origen === 'opcCrearUsuario') {
        button.setAttribute('id', 'btnCrearUsuario');
        button.innerHTML = 'Crear usuario';
    } else if (origen === 'opcEditarUsuario') {
        button.setAttribute('id', 'btnEditarUsuario');
        button.innerHTML = 'Editar usuario';
    } else {
        enviarMensaje('¿Quién llama?');
        return 0;
    }
    fieldset.appendChild(button);
    mostrar.appendChild(form);
    button.addEventListener('click', llamarFuncion(origen));
}

function crearUsuario() {
    usuario['id'] = document.getElementById('id').value;
    usuario['nombre'] = document.getElementById('nombre').value;
    usuario['apellido'] = document.getElementById('apellido').value;
    console.log(usuario);
    listaUsuarios.push(usuario);
}

function editarUsuario() {
    for (i in usuario) {}
    listaUsuarios.push(usuario);
    console.log('editarUsuario')
}

function eliminarUsuario() {
    console.log('eliminarUsuario');
}