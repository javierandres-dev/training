document.getElementById('cargar').addEventListener('click', cargarDatos);
function cargarDatos(){
    // 1.  Crear el objeto xmlhttprequest
    const xhr = new XMLHttpRequest();
    // 2.  Abrir una conexión
    xhr.open('GET', 'datos.txt', true);
    // 3.  Una vez que carga
    xhr.onload = function(){
         // Recibe código 200, 300, 400, 500
         // Código 200 es que todo va bien
         if (this.status === 200){
             // Darle uso a la respuesta
             //console.log(this.responseText);
             document.getElementById('listado').innerHTML = `<h1>${this.responseText}</h1>`;
         }
    }
    // 4.  Enviar request
    xhr.send();
}