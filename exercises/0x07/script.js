/**
 * VARIABLES
 */
const usuarios = [];
const formOpciones = document.getElementById('formOpciones');
const btnConfirmarSeleccion = document.getElementById('btnConfirmarSeleccion');
const mostrarMensajes = document.getElementById('mostrarMensajes');
const mostrarSeleccion = document.getElementById('mostrarSeleccion');
const mostrarAuxiliar = document.getElementById('mostrarAuxiliar');
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
    mostrarMensajes.innerHTML = mensaje;
    setTimeout(function () {
        mostrarMensajes.innerHTML = '';
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
            case 'opcVerUsuarios':
                mostrarUsuarios();
                break;
            case 'opcCrearUsuario':
                leerDatosUsuario();
                break;
            case 'opcEditarUsuario':
                leerIdUsuario(opcion);
                break;
            case 'opcEliminarUsuario':
                leerIdUsuario(opcion);
                break;
            default:
                break;
        }
    }
}

function leerDatosUsuario() {
    const form = document.createElement('form');
    const fieldset = document.createElement('fieldset');
    form.appendChild(fieldset);
    const legend = document.createElement('legend');
    const textoLegend = document.createTextNode('Datos del usuario');
    legend.appendChild(textoLegend);
    fieldset.appendChild(legend);
    const inputDocumento = document.createElement('input');
    inputDocumento.setAttribute('id', 'documento');
    inputDocumento.setAttribute('placeholder', 'documento');
    fieldset.appendChild(inputDocumento);
    const inputNombre = document.createElement('input');
    inputNombre.setAttribute('id', 'nombre');
    inputNombre.setAttribute('placeholder', 'nombre');
    fieldset.appendChild(inputNombre);
    const inputApellido = document.createElement('input');
    inputApellido.setAttribute('id', 'apellido');
    inputApellido.setAttribute('placeholder', 'apellido');
    fieldset.appendChild(inputApellido);
    const button = document.createElement('button');
    button.setAttribute('type', 'submit');
    button.setAttribute('id', 'btnCrearUsuario');
    button.addEventListener('click', crearUsuario);
    button.innerHTML = 'Crear usuario';
    fieldset.appendChild(button);
    mostrarSeleccion.appendChild(form);
}

function existenUsuarios() {
    const sizeUsuarios = usuarios.length;
    if (sizeUsuarios === 0) {
        enviarMensaje('No se han creado usuarios.')
        return false;
    } else {
        return true;
    }
}

function mostrarUsuarios() {
    const comprobar = existenUsuarios();
    if (comprobar === true) {
        let usuario;
        const table = document.createElement('table');
        const thead = document.createElement('thead');
        const caption = document.createElement('caption');
        const textoCaption = document.createTextNode('Lista de usuarios');
        caption.appendChild(textoCaption);
        thead.appendChild(caption);
        for (let i = 0; i < 1; i++) {
            const trTh = document.createElement('tr');
            usuario = usuarios[i];
            for (let key in usuario) {
                const th = document.createElement('th');
                const textoTh = document.createTextNode(key.toUpperCase());
                th.appendChild(textoTh);
                trTh.appendChild(th);
            }
            thead.appendChild(trTh);
        }
        table.appendChild(thead);
        const tbody = document.createElement('tbody');
        for (let i = 0; i < usuarios.length; i++) {
            const tr = document.createElement('tr');
            usuario = usuarios[i];
            for (let key in usuario) {
                const td = document.createElement('td');
                const textoTd = document.createTextNode(usuario[key]);
                td.appendChild(textoTd);
                tr.appendChild(td);
            }
            tbody.appendChild(tr);
        }
        table.appendChild(tbody);
        mostrarSeleccion.appendChild(table);
    }
}

function crearUsuario(evt) {
    evt.preventDefault();
    const usuario = {};
    usuario['id'] = usuarios.length + 1;
    usuario['documento'] = document.getElementById('documento').value;
    usuario['nombre'] = document.getElementById('nombre').value;
    usuario['apellido'] = document.getElementById('apellido').value;
    usuarios.push(usuario);
}

function editarUsuario() {
    const idUsuario = document.getElementById('idUsuario').value;
    console.log(idUsuario);
    console.log('editar usuario');
}

function eliminarUsuario() {
    const idUsuario = document.getElementById('idUsuario').value;
    const sizeUsuarios = usuarios.length;
    for (let i = 0; i < sizeUsuarios; i++) {
        let usuario = usuarios[i];
        if (idUsuario == usuario.id) {
            usuarios.splice(i, 1);
            enviarMensaje('El usuario con ID: ' + idUsuario + ' ha sido eliminado.');
        } else {
            enviarMensaje('Verifique el dato ingresado.');
        }
    }
}

function leerIdUsuario(argv) {
    const comprobar = existenUsuarios();
    if (comprobar === true) {
        const input = document.createElement('input');
        input.setAttribute('id', 'idUsuario');
        input.setAttribute('placeholder', 'ID del usuario');
        mostrarSeleccion.appendChild(input);
        const button = document.createElement('button');
        button.setAttribute('type', 'submit');
        if (argv === 'opcEditarUsuario') {
            button.setAttribute('id', 'btnEditarUsuario');
            button.addEventListener('click', editarUsuario);
            button.innerHTML = 'Editar usuario';
        }
        if (argv === 'opcEliminarUsuario') {
            button.setAttribute('id', 'btnEliminarUsuario');
            button.addEventListener('click', eliminarUsuario);
            button.innerHTML = 'Eliminar usuario';
        }
        mostrarAuxiliar.appendChild(button);
    }
}