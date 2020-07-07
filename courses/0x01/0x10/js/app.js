// instanciar ambas clases
const eventbrite = new EventBrite();
const ui  = new Interfaz();

// Listener al buscador

document.getElementById('buscarBtn').addEventListener('click', (e) => {
     e.preventDefault();

     // Leer el texto del input buscar
     const textoBuscador = document.getElementById('evento').value;

     // leer el select
     const categorias = document.getElementById('listado-categorias');
     const categoriaSeleccionada = categorias.options[categorias.selectedIndex].value;

     // Revisar que haya algo escrito en el buscador
     if(textoBuscador !== '') {
          // cuando si hay una busqueda
          eventbrite.obtenerEventos(textoBuscador, categoriaSeleccionada)
               .then(eventos => {
                    if(eventos.eventos.events.length > 0 ){
                         // Si hay eventos, mostrar el resultado
                         ui.limpiarResultados();
                         ui.mostrarEventos(eventos.eventos);
                    } else {
                         // No hay eventos enviar una alerta
                         ui.mostrarMensaje('No hay resultados', 'alert alert-danger mt-4');
                    }
               })
     } else {
          // Mostrar mensaje para que imprima algo
          ui.mostrarMensaje('Escribe algo en el buscador', 'alert alert-danger mt-4');
     }
})