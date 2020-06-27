document.getElementById('txtBtn').addEventListener('click', cargarTXT);
document.getElementById('jsonBtn').addEventListener('click', cargarJSON);
document.getElementById('apiBTN').addEventListener('click', cargarREST);

function cargarTXT() {
    // url o fuente de los datos
    fetch('datos.txt')
        // conectarse y recibir respuesta
        .then(function (respuesta) {
            //console.log(response);
            //console.log(response.text());
            // especificar método para recibir los datos - ver proto
            return respuesta.text();
        })
        // acceder a los datos
        .then(function (los_datos) {
            //console.log(los_datos);
            // Usar los datos recibidos en la respuesta
            document.getElementById('resultado').innerHTML = los_datos;
        })
        // catch es como el else
        .catch(function (error) {
            console.log(error);
        })
}

function cargarJSON() {
    // url o fuente de los datos
    fetch('empleados.json')
        // conectarse y recibir respuesta
        .then(function (response) {
            // seleccionar método para recibir la respuesta
            return response.json();
        })
        // acceder a los datos recibidos
        .then(function (data) {
            //console.log(data);
            // Darle uso a los datos
            let html = '';
            data.forEach(function (empleado) {
                html += `
            <li>${empleado.nombre} ${empleado.puesto}</li>
            `;
            })
            document.getElementById('resultado').innerHTML = html;
        })
        // catch es como el else
        .catch(function (error) {
            console.log(error);
        })
}

function cargarREST() {
    fetch('https://picsum.photos/list')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            //console.log(data);
            let html = '';
            data.forEach(function (imagen) {
                html += `
                <li>
                <a href="${imagen.post_url}" target="_blank">Ver imagen</a>
                ${imagen.autor}
                </li>
                `;
            })
            document.getElementById('resultado').innerHTML = html;
        })
        // catch es como el else
        .catch(function (error) {
            console.log(error);
        })
}