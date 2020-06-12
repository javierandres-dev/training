// Constructor para Seguro
class Seguro {
    constructor(marca, anio, tipo) {
        this.marca = marca;
        this.anio = anio;
        this.tipo = tipo;
    }
    cotizarSeguro() {
        /**
         * leer la marca
         * 1 = económico-Asiatico
         * 2 = medio-Americano
         * 3 = alto-Europeo
         */
        let cantidad;
        const base = 2000;
        switch (this.marca) {
            case '1':
                cantidad = base * 1.05;
                break;
            case '2':
                cantidad = base * 1.15;
                break;
            case '3':
                cantidad = base * 1.35;
                break;
            default:
                break;
        }
        // Leer el año
        const diferencia = new Date().getFullYear() - this.anio;
        // Cada año de diferencia hay que reducir 3% el valor del seguro
        cantidad -= ((diferencia * 3) * cantidad / 100);
        /**
         * Si el seguro es básico se múltiplica por 30% más
         * Si el seuro es completo 50% más.
         */
        if (this.tipo === 'basico') {
            cantidad *= 1.30;
        } else {
            cantidad *= 1.50;
        }
        return cantidad;
    }
}
// Todo lo que se muestra
class Interfaz {
    // Preparar mensajes
    mostrarMensaje(mensaje, tipo) {
        const div = document.createElement('div');
        if (tipo === 'error') {
            // En caso de errores
            div.classList.add('mensaje', 'error');
        } else {
            // En caso de enviar los datos necesarios
            div.classList.add('mensaje', 'correcto');
        }
        div.innerHTML = `${mensaje}`;
        formulario.insertBefore(div, document.querySelector('.form-group'));
        setTimeout(function () {
            document.querySelector('.mensaje').remove();
        }, 3000);
    }
    // Imprime el resultado de la cotización
    mostrarResultado(seguro, total) {
        const resultado = document.getElementById('resultado');
        let marca;
        switch (seguro.marca) {
            case '1':
                marca = 'Asiatico'
                break;
            case '2':
                marca = 'Americano'
                break;
            case '3':
                marca = 'Europeo'
                break;
            default:
                break;
        }
        const div = document.createElement('div');
        // Insertar la información
        div.innerHTML = `
        <p class='header'>Tu resumen:</p>
        <p>Marca: ${marca}</p>
        <p>Año: ${seguro.anio}</p>
        <p>Tipo: ${seguro.tipo}</p>
        <p>Total: ${total}</p>
    `;
        const spinner = document.querySelector('#cargando img');
        spinner.style.display = 'block';
        setTimeout(function () {
            spinner.style.display = 'none';
            resultado.appendChild(div);
        }, 3000);
    }
}
// EventListener
const formulario = document.getElementById('cotizar-seguro');

formulario.addEventListener('submit', function (e) {
    e.preventDefault();
    // Leer la marca seleccionada del select
    const marca = document.getElementById('marca');
    const marcaSeleccionada = marca.options[marca.selectedIndex].value;
    // Leer el año seleccionado del select
    const anio = document.getElementById('anio');
    const anioSeleccionado = anio.options[anio.selectedIndex].value;
    // Leer el tipo de seguro seleccionado
    const tipo = document.querySelector('input[name="tipo"]:checked').value;
    // Crear instancia de interfaz
    const interfaz = new Interfaz();
    // Comprobar si los campos están vacios
    if (marcaSeleccionada === '' || anioSeleccionado === '' || tipo === '') {
        // Si quedaron campos vacios, enviar error
        interfaz.mostrarMensaje('Faltan datos, revisar campos del formulario.', 'error');
    } else {
        // Limpiar resultados anteriores
        const resultados = document.querySelector('#resultado div');
        if (resultados != null) {
            resultados.remove();
        }
        // Instanciar seguro y mostrar interfaz
        const seguro = new Seguro(marcaSeleccionada, anioSeleccionado, tipo);
        // Cotizar seguro
        const cantidad = seguro.cotizarSeguro();
        // Mostrar el resultado
        interfaz.mostrarResultado(seguro, cantidad);
        interfaz.mostrarMensaje('Cotizando...', 'éxito');
    }
});

const max = new Date().getFullYear(),
    min = max - 20;

const selectAnios = document.getElementById('anio');
for (let i = max; i > min; i--) {
    let option = document.createElement('option');
    option.value = i;
    option.innerHTML = i;
    selectAnios.appendChild(option);
}