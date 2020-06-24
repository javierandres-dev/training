/**
 * VARIABLES
 */
const btnPostsGET = document.getElementById('btnPostsGET');
const btnCommentsGET = document.getElementById('btnCommentsGET');
const btnAlbumsGET = document.getElementById('btnAlbumsGET');
const btnPhosotsGET = document.getElementById('btnPhotosGET');
const btnTodosGET = document.getElementById('btnTodosGET');
const bntUserGET = document.getElementById('btnUsersGET');
const mostrarMensajes = document.getElementById('mostrarMensajes');
const btnReload = document.getElementById('btnReload');
/**
 * EVENTOS
 */
eventListeners();

function eventListeners() {
    btnPostsGET.addEventListener('click', postsGET);
    btnCommentsGET.addEventListener('click', commentsGET);
    btnAlbumsGET.addEventListener('click', albumsGET);
    btnPhosotsGET.addEventListener('click', photosGET);
    btnTodosGET.addEventListener('click', todosGET);
    btnUsersGET.addEventListener('click', usersGET);
    btnReload.addEventListener('click', function () {
        location.reload();
    });
}
/**
 * FUNCIONES
 */
function mostrarMensaje(mensaje) {
    mostrarMensajes.innerHTML = mensaje;
}

function postsGET() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
    xhr.onload = function () {
        if (this.status === 200) {
            //console.log(this.responseText);
            //console.log(typeof(this.responseText));
            //console.log(typeof(JSON.parse(this.responseText)));
            let respuesta = JSON.parse(this.responseText);
            //console.log(respuesta);
            let contenido = '';
            respuesta.forEach(function (post) {
                contenido += `
                <p>ID DEL AUTOR: ${post.userId}</p>
                <p>ID DEL ARTÍCULO: ${post.id}</p>
                <p>TÍTULO: ${post.title}</p>
                <p>ARTÍCULO: ${post.body}</p>
                <hr>
                `;
            });
            document.getElementById('mostrarRespuestas').innerHTML = contenido;
        }
    }
    xhr.send();
}

function commentsGET() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/comments', true);
    xhr.onload = function () {
        if (this.status === 200) {
            let respuesta = JSON.parse(this.responseText);
            let contenido = '';
            respuesta.forEach(function (comment) {
                contenido += `
                <p>ID DEL ARTÍCULO: ${comment.postId}</p>
                <p>ID DEL COMENTARIO: ${comment.id}</p>
                <p>NOMBRE: ${comment.name}</p>
                <p>CORREO ELECTRÓNICO: ${comment.email}</p>
                <p>COMENTARIO: ${comment.body}</p>
                <hr>
                `;
            });
            document.getElementById('mostrarRespuestas').innerHTML = contenido;
        }
    }
    xhr.send();
}

function albumsGET() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/albums', true);
    xhr.onload = function () {
        if (this.status === 200) {
            let respuesta = JSON.parse(this.responseText);
            let contenido = '';
            respuesta.forEach(function (album) {
                contenido += `
                <p>ID DEL USUARIO: ${album.userId}</p>
                <p>ID DEL ALBUM: ${album.id}</p>
                <p>TÍTULO: ${album.title}</p>
                <hr>
                `;
            });
            document.getElementById('mostrarRespuestas').innerHTML = contenido;
        }
    }
    xhr.send();
}

function photosGET() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/photos', true);
    xhr.onload = function () {
        if (this.status === 200) {
            let respuesta = JSON.parse(this.responseText);
            let contenido = '';
            respuesta.forEach(function (photo) {
                contenido += `
                <p>ID DEL ALBUM: ${photo.albumId}</p>
                <p>ID DE LA FOTO: ${photo.id}</p>
                <p>URL MINIATURA: ${photo.thumbnailUrl}</p>
                <img src="${photo.thumbnailUrl}" />
                <p>TÍTULO: ${photo.title}</p>
                <p>URL: ${photo.url}</p>
                <img src="${photo.url}" />
                <hr>
                `;
            });
            document.getElementById('mostrarRespuestas').innerHTML = contenido;
        }
    };
    xhr.send();
}

function todosGET() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos', true);
    xhr.onload = function () {
        if (this.status === 200) {
            let respuesta = JSON.parse(this.responseText);
            let contenido = '';
            respuesta.forEach(function (tarea) {
                contenido += `
                <p>ID DEL USUARIO: ${tarea.userId}</p>
                <p>ID DE LA TAREA: ${tarea.id}</p>
                <p>TÍTULO: ${tarea.title}</p>
                <p>COMPLETADO: ${tarea.completed}</p>
                <hr>
                `;
            });
            document.getElementById('mostrarRespuestas').innerHTML = contenido;
        }
    }
    xhr.send();
}

function usersGET() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
    xhr.onload = function () {
        if (this.status === 200) {
            let respuesta = JSON.parse(this.responseText);
            console.log(respuesta);
            let contenido = '';
            respuesta.forEach(function (usuario) {
                contenido += `
                <p>ID: ${usuario.id}</p>
                <p>NOMBRE: ${usuario.name}</p>
                <p>NOMBRE DE USUARIO: ${usuario.username}</p>
                <p>TELÉFONO: ${usuario.phone}</p>
                <p>CORREO ELECTRÓNICO: ${usuario.email}</p>
                <p>DIRECCIÓN: ${usuario.address}</p>
                <p>CIUDAD: ${usuario.address.city}</p>
                <p>EMPRESA: ${usuario.company}</p>
                <p>NOMBRE DE LA EMPRESA: ${usuario.company.name}</p>
                <p>SITIO WEB: ${usuario.website}</p>
                <hr>
                `;
            });
            document.getElementById('mostrarRespuestas').innerHTML = contenido;
        }
    }
    xhr.send();
}
/**
 * AJAX
 * 1.  "new" Crear el objeto xmlhttprequest
 * 2.  "open" Abrir una conexión
 * 3.  "onload" Una vez que carga
 * 4.  "send" Enviar request
 */