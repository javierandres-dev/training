/**
 * VARIABLES
 */
const listaUsuarios = [];
const usuario = {
    id: '',
    nombre: '',
    apellido: '',
};
const mostrar = document.getElementById('mostrar');
const formOpciones = document.getElementById('formOpciones');
const btnConfirmarSeleccion = document.getElementById('btnConfirmarSeleccion');
const mensajes = document.getElementById('mensajes');
/**
 * CLASES
 */
/**
 * EVENTOS
 */
eventListeners();

function eventListeners() {
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
function leerSeleccion(e) {
    e.preventDefault();
    const opcLeerListaUsuarios = document.getElementById('opcLeerListaUsuarios').checked;
    const opcCrearUsuario = document.getElementById('opcCrearUsuario').checked;
    const opcEditarUsuario = document.getElementById('opcEditarUsuario').checked;
    const opcEliminarUsuario = document.getElementById('opcEliminarUsuario').checked;
    let origen;
    if (opcLeerListaUsuarios === true) {
        origen = 'opcLeerListaUsuarios';
    } else if (opcCrearUsuario === true) {
        origen = 'opcCrearUsuario';
    } else if (opcEditarUsuario === true) {
        origen = 'opcEditarUsuario';
    } else if (opcEliminarUsuario === true) {
        origen = 'opcEliminarUsuario';
    } else {
        enviarMensaje('Primero debe seleccionar una opción, luego confirmar.');
        return 0;
    }
    llamarFuncion(origen);
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
function mostrarFormUsuario(quienLlama) {
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
    let origen;
    if (quienLlama === 'opcCrearUsuario') {
        button.setAttribute('id', 'btnCrearUsuario');
        origen = 'btnCrearUsuario'
        button.innerHTML = 'Crear usuario';
    }
    else if (quienLlama === 'opcEditarUsuario') {
        button.setAttribute('id', 'btnEditarUsuario');
        origen = 'btnEditarUsuario'
        button.innerHTML = 'Editar usuario';
    }
    else {
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
    console.log('crearUsuario')
}
function editarUsuario() {
    for (i in usuario) {}
    listaUsuarios.push(usuario);
    console.log('editarUsuario')
}
function eliminarUsuario() {
    console.log('eliminarUsuario');
}
function llamarFuncion(quienLlama) {
    if (quienLlama === undefined) {
        enviarMensaje('¿Quién llama?');
        return 0;
    } else {
        let origen = quienLlama;
        if (quienLlama === 'opcLeerListaUsuarios') {
            mostrarTablaUsuarios();
        }
        else if (quienLlama === 'opcCrearUsuario') {
            mostrarFormUsuario(origen);
        }
        else if (quienLlama === 'opcEditarUsuario') {
            mostrarFormUsuario(origen);
        }
        else if (quienLlama === 'opcEliminarUsuario') {
            eliminarUsuario();
        }
        else if (quienLlama === 'btnCrearUsuario') {
            crearUsuario();
        }
        else if (quienLlama === 'btnEditarUsuario') {
            editarUsuario();
        }
        else {
            enviarMensaje('¿Quién llama?');
            return 0;
        }
    }
}