document
    .querySelector("#generar-nombre")
    .addEventListener("submit", cargarNombres);
//Llamado a Ajax e imprimir resultados
function cargarNombres(e) {
    e.preventDefault();
    //Leer las variables
    const origen = document.getElementById("origen");
    const origenSeleccionado = origen.options[origen.selectedIndex].value;
    const genero = document.getElementById("genero");
    const generoSeleccionado = genero.options[genero.selectedIndex].value;
    const cantidad = document.getElementById("numero").value;
    let url = "";
    url += "https://randomuser.me/api/?";
    //si hay origen agregar a la url
    if (origenSeleccionado !== "") {
        url += `nat=${origenSeleccionado}&`;
    }
    //si hay genero agregarlo a la URL
    if (generoSeleccionado !== "") {
        url += `gender=${generoSeleccionado}&`;
    }
    //si hay una cantidad agregarlo a la url
    if (cantidad !== "") {
        url += `results=${cantidad}&`;
    }
    //Conectar con Ajax
    const xhr = new XMLHttpRequest();
    //Abrimos la conexion
    xhr.open("GET", url, true);
    //Datos e impresion del template
    xhr.onload = function () {
        if (this.status === 200) {
            const nombres = JSON.parse(this.responseText);
            //   Generar el HTML
            const info = nombres.results;
            let htmlNombres = "<h2>Nombres generados</h2>";
            htmlNombres += '<ul class="lista">';
            //Imprimir cada nombre
            info.forEach(function (nombre) {
                htmlNombres += `
                  <li>${nombre.name.first}</li>
              `;
            });
            htmlNombres += "</ul>";
            document.getElementById("resultado").innerHTML = htmlNombres;
        }
    };
    //Enviar el request
    xhr.send();
}