const cargarPosts = document.querySelector('#cargar').addEventListener('click', cargarAPI);
function cargarAPI(){
    const urlApi = 'https://jsonplaceholder.typicode.com/posts';
    const xhr = new XMLHttpRequest();
    xhr.open('GET', urlApi, true);
    xhr.onload = function(){
        if(this.status === 200){
            //console.log(this.responseText);
            //console.log(JSON.parse(this.responseText));
            const respuesta = JSON.parse(this.responseText);
            let contenido = '';
            respuesta.forEach(function(post){
                contenido += `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
                `;
            });
            document.getElementById('listado').innerHTML = contenido;
        }
    }
    xhr.send();
}