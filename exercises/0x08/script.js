/**
 * VARIABLES
 */
const btnPostsGET = document.getElementById('btnPostsGET');
const btnCommentsGET = document.getElementById('btnCommentsGET');
const mostrarMensajes = document.getElementById('mostrarMensajes');
const btnReload = document.getElementById('btnReload');
/**
 * EVENTOS
 */
eventListeners();
function eventListeners(){
    btnPostsGET.addEventListener('click', postsGET);
    btnCommentsGET.addEventListener('click', commentsGET);
    btnReload.addEventListener('click', function(){
        location.reload();
    });
}
/**
 * FUNCIONES
 */
function mostrarMensaje(mensaje){
    mostrarMensajes.innerHTML = mensaje;
}
function postsGET(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
    xhr.onload = function(){
        if(this.status === 200){
            //console.log(this.responseText);
            //console.log(typeof(this.responseText));
            //console.log(typeof(JSON.parse(this.responseText)));
            let respuesta = JSON.parse(this.responseText);
            //console.log(respuesta);
            let contenido = '';
            respuesta.forEach(function(post){
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
function commentsGET(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/comments', true);
    xhr.onload = function(){
        if(this.status === 200){
            let respuesta = JSON.parse(this.responseText);
            let contenido = '';
            respuesta.forEach(function(comment){
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
/**
 * AJAX
 * 1.  "new" Crear el objeto xmlhttprequest
 * 2.  "open" Abrir una conexión
 * 3.  "onload" Una vez que carga
 * 4.  "send" Enviar request
 */