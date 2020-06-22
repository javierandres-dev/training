/**
 * VARIABLES
 */
const listaUsuarios = [];
const formOpciones = document.getElementById('formOpciones');
const btnConfirmarSeleccion = document.getElementById('btnConfirmarSeleccion');
const mensajes = document.getElementById('mostrarMensajes');
const mostrar = document.getElementById('mostrarSeleccion');
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

function leerSeleccion(evt) {
    evt.preventDefault();
    let opcion;
    const opciones = document.querySelectorAll('input[name="opcion"]');
    for (let i = 0; i < opciones.length; i++) {
        if (opciones[i].checked === true) {
            opcion = opciones[i].id;
        }
    }
    if (opcion === undefined) {
        enviarMensaje('Primero debe seleccionar una opción, luego confirmar.');
    } else {
        switch (opcion) {
            case 'verUsuarios':
                verUsuarios(opcion);
                break;
            case 'crearUsuario':
                mostrarFormUsuario(opcion);
                break;
            case 'editarUsuario':
                mostrarFormUsuario(opcion);
                break;
            case 'eliminarUsuario':
                console.log('eliminarUsuario');
                break;
            default:
                break;
        }
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

function mostrarFormUsuario(argv) {
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
    if (argv === 'crearUsuario') {
        button.setAttribute('id', 'btnCrearUsuario');
        button.addEventListener('click', crearUsuario);
        button.innerHTML = 'Crear usuario';
    } else if (argv === 'editarUsuario') {
        button.setAttribute('id', 'btnEditarUsuario');
        button.addEventListener('click', editarUsuario);
        button.innerHTML = 'Editar usuario';
    } else {
        enviarMensaje('¿Quién llama?');
        return 0;
    }
    fieldset.appendChild(button);
    mostrar.appendChild(form);
}

function verUsuarios(argv) {
    console.log('verUsuarios')
}

function crearUsuario(evt) {
    evt.preventDefault();
    const usuario = {};
    usuario['id'] = document.getElementById('id').value;
    usuario['nombre'] = document.getElementById('nombre').value;
    usuario['apellido'] = document.getElementById('apellido').value;
    listaUsuarios.push(usuario);
}

function editarUsuario() {}

function eliminarUsuario() {}