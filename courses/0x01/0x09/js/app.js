const cotizador = new API('5a90c0287f03f4a108f7773c751bcf169d783d9c01714ba563f5e97c882d3de9');
const ui = new Interfaz();

// leer el formulario

const formulario = document.querySelector('#formulario');
// eventlistener
formulario.addEventListener('submit', (e) => {
     e.preventDefault();

     // leer la moneda seleccionada
     const monedaSelect = document.querySelector('#moneda');
     const monedaSeleccionada = monedaSelect.options[monedaSelect.selectedIndex].value;

     // leer la criptomoneda seleccionada
     const criptoMonedaSelect = document.querySelector('#criptomoneda');
     const criptoMonedaSeleccionada = criptoMonedaSelect.options[criptoMonedaSelect.selectedIndex].value;
     
     // comprobar que ambos campos tengan algo seleccionado
     if(monedaSeleccionada === '' || criptoMonedaSeleccionada === '') {
          // arrojar una alerta de error
          ui.mostrarMensaje('Ambos Campos son Obligatorios', 'alert bg-danger text-center');
     } else {
          // todo bien, consultar la api
          cotizador.obtenerValores(monedaSeleccionada, criptoMonedaSeleccionada) 
               .then(data => {
                    ui.mostrarResultado(data.resultado.RAW,monedaSeleccionada, criptoMonedaSeleccionada );
               })
     }


})