/* comentarios en css */
/*
4 clases de hojas de estilo: Inline, Incrustadas, Vinculadas, Importadas.  Respetan la jerarquía
Inline
Incrustadas (en el head)
Vinculadas (en el head) opción más popular

PREFIJOS PARA CORREGIR PROBLEMAS DE COMPATIBILIDAD
-webkit-	Google Chrome, Safari, Android
-moz-		Mozilla Firefox
-o-			Opera
-ms-		Internet Explorer
-khtml-		Konqueror

COLISIÓN DE ESTILOS - JERARQUIA
1. CSS del Navegador
2. CSS del usuario
3. CSS en archivos enlazados en orden
4. Propiedades que se heredan
5. Propiedades propias del elemento
6. Clases asignadas, y en el mismo orden
7. Identificador
8. !important
*/

@import url();/* Importadas (en un archivo css) importar otras hojas de estilos */

/* SELECTOR \ ELEMENTO { PROPIEDAD \ ATRIBUTO : VALOR;} */
*/* elemento o selector universal */
html/* elemento padre que tiene 2 hijos directos HEAD y BODY */
html { font-size: 62.5%; /* 1rem = 10px => 1.6rem = 16px */}
body {}/* elemento o selector de etiqueta */
h1, h2, h3, h4, h5, h6 {}/* anidar elementos de etiqueta */
h2 {}/* puedo cambiar estilo de elementos anidados */
div > a {}/* apuntar a selector hijo inmediato, solo aplicar a selector descendente directo */
div p {}/* selector descendente, aplicar a elementos que esten dentro de otro */
div p a {}/* selector descendente, aplicar a elementos que esten dentro de otro */
h1 + h2 {}/* aplicar a selector indicado inmediatamente seguido del referenciado, deben ser del mismo nivel, hermanos */
p ~ p {}/* aplicar a selector hermanos menores	*/
input[type] {}/* aplicar a selector de atributo */
input[type='text'] {}/* aplicar a selector de atributo y valor */
h2[title~='text'] {}/* aplicar a selector de atributo y valor */
h2[title|='text'] {}/* aplicar a selector de atributo y valor */

/* SEUDOELEMENTOS "::" */
SELECTOR:SEUDOELEMENTO {}
SELECTOR:before{}/* seudoelemento */
SELECTOR:after{}/* seudoelemento */
div::before {}/* agregar un elemento despues de nuestra caja */
div::after {}/* agregar un elemento antes de nuestra caja */
p::first-letter {}/* dar estilo a la primera letra del parrafo */
p::first-line {}/* dar estilo a la primera línea del parrafo */
li:nth-of-type()/* hacer referencia a un elemento del tipo ...  */
elemento::selection {}/* dar estilo cuando lo seleccione */
#nombreIdentificador {}/* selector id, crear un id, no usar id para estilos, solo para javascript */
.nombreClase {}/* selector class, crear una clase */

/* SEUDOCLASES ":" */
ELEMENTO:SEUDOCLASE {}
p:first-line {}/* dar estilos a la primera línea del parrafo */
p:nth-child(número de la línea){}/* dar estilo a otras líneas del parrafo */
a:link {}/* apariencia de enlaces no visitados */
a:visited {}/* enlaces ya visitados */
a:hover {}/* cuando el puntero del mouse esté sobre */
a:active {}/* cuando se selecciona, un click */
a:focus {}/* otro estado, cuando esté seleccionado */

/* COMBINAR SEUDOELEMENTOS CON SEUDOCLASES */
SELECTOR:SEUDOCLASE:SEUDOELEMENTO {}
div:hover:before {}
div:hover:after {}

SELECTOR {
	/* VALORES */
ATRIBUTO: !important;/* imponer valor a la cascada */
ATRIBUTO: em;/* M-anchura unidad de medida em, relativa al tamaño de fuente que tenga su elemento padre o más cercano, dinamica */
ATRIBUTO: ex;/* X-altura unidad de medida em, relativa al tamaño de fuente que tenga su elemento padre o más cercano, dinamica */
ATRIBUTO: rem;/* unidad de medida rem, relativa al tamaño de fuente especificado en el body, heredada, dinamica */
ATRIBUTO: %;/* unidad de medida %, relativa en tanto por ciento respecto al padre, dinámica */
ATRIBUTO: px;/* unidad de medida pixel, absoluta, especifica */
ATRIBUTO: in;/* unidad de medida pulgadas, absoluta, no usar para dar estilos */
ATRIBUTO: cm;/* unidad de medida centimetros, absoluta, no usar para dar estilos */
ATRIBUTO: mm;/* unidad de medida milimetros, absoluta, no usar para dar estilos */
ATRIBUTO: pt;/* unidad de medida puntos, absoluta, no usar para dar estilos */
ATRIBUTO: pc;/* unidad de medida picas, absoluta, no usar para dar estilos */
ATRIBUTO: aqua, black, ...;/* palabras reservadas - unidad de color con palabra clave, hasta 17 */
ATRIBUTO: #a-f0-9......;/* unidad de color rgb en luz, hexadecimal */
ATRIBUTO: rgb(%,%,%);/* unidad de color rgb en luz, porcentual */
ATRIBUTO: rgb(0a255, 0a255, 0a255);/* unidad de color rgb en luz, decimal */
ATRIBUTO: rgba(0a255, 0a255, 0a255, 0 al 1);/* unidad de color rgb en luz, alfa, con transparencia */
ATRIBUTO: hsl(0a240,%,%);/* unidad de color en hsl - Hue Saturation Lightness - Tonalidad Saturación Luz */
ATRIBUTO: hsla(0a240,%,%, 0 al 1);/* unidad de color en hsl - Hue Saturation Lightness - Tonalidad Saturación Luz, con transparencia */
}

todos los contenedores/* elementos de tipo bloque, por defecto ocupan el 100% del ancho y no se ubican junto a otro */
los atributos, las imágenes/* elementos de tipo línea, por defecto ocupa el espacio que necesita y se ubica junto a otro */
display:;/* el atributo "display" permite controlar tipo bloque t tipo línea */

SELECTOR {
	/* ATRIBUTOS \ PROPIEDADES */
	width:;/* ancho */
	height:;/* alto */
	margin:;/* margen externo */
	padding:;/* margen interno */
	border:;/* borde */
	border-style:;/* estilo del borde */
	border-width:;/* ancho del borde */
	border-color:;/* color del borde */
	border-radius:;/* bordes redondeados, ovalos, circulos */
	border-collapse:;/* unificar bordes */
	border-spacing:;/* espaciado de los bordes */
	box-shadow:;/* dar sombra a las cajas */
	box-sizing:;/* incluir el padding a su tamaño, que el padding no sume a su tamaño -webkit- -moz- */
	cursor:;/* cambiar aspecto del cursor  */
	vertical-align:;/* alineción vertical, con el valor "top" quito espacios */
	display/* controlar la ubicación tipo bloque, tipo línea, flex */
	display: flex;/* con el valor "flex" habilitamos "flexbox", contenedor padre */
	opacity:;/* dar opacidad */
	color:;/* dar color */
	justify-content:;/*  */
	align:;/*  */
	align-items:;/*  */
	align-content:;/*  */
	order:;/*  */
	align-self:;/*  */
	visibility:;/* controlar la visivilidad, ocultar sin quitar */
	position:;/* controlar la posición, normal, relativo, absoluto, fijo, flotante */
	top:; right:; bottom:; left:;/* controlar la flotación, la ubicación de un elemento tipo bloque */
	float:;/* que el elemento flote a la derecha, izquierda,  */
	clear:;/* permite limpiar, resetear, corrige errores de float */
	content: "";/*  */
	overflow:;/* otra manera de corregir errores de float, más recomendada */
	overflow:;/* evitar que el contenido se desborde de su contenedor */
	overflow-x:;/* eliminar cualquier scroll horizontal */
	overflow-y:;/*  */
	overflow-wrap:;/*  */
	z-index/* establecer el nivel de capa, controlar sobreposición de cajas - SIEMPRE debe ir acompañado de "position"*/
	transform:;/* hacer transformaciones,  animaciones -webkit- -moz- */
	transform:translate();/* trasladar elemento */
	transform:scale();/* escalar elemento */
	transform:rotate();/* rotar elemento */
	transform:skew();/* sesgar elemento */
	transition:nombre del elemento valores ease linear;/* transiciones */
	transition-property:;/* especificar aplicación por ejemplo cuando tengo varias tranciciones */
	transition-delay:;/* un retarzo en la transición */
	transition-duration:;/* especificar tiempo en la transición */
	transition-timing-function:;/* especificar tiempo en la transición en sus diferentes estados */
	animation-name:;/* animaciones */
	background:;/* fondo */
	background: url();/* imagen de fondo */
	background-image:;/* imagen de fondo */
	background-repeat:;/* repetición de la imagen de fondo */
	background-size:;/* tamaño del fondo */
	background-size:cover;/* tamaño imagen del fondo al 100% */
	background-attachment:;/* fijar el fondo o dejarlo scroll */
	background-position:;/* posición de la imagen */
	background-color:;/* color de fondo */
	font-size:;/* tamaño de la fuente */
	text-decoration:;/* decoración del texto */
	font-family:;/* fuente familia */
	font-style:;/* estilo del texto */
	font-weight:;/* ancho del texto */
	font-variant:;/* modificar el aspecto de la fuente, ej que las primeras sean mayusculas */
	font:;/* shorthand o método abreviado */
	text-align:;/* alinear texto */
	text-transform:;/* transformar todo el texto a mayusculas, minuscula, capital */
	text-shadow:;/* poner sombra al texto */
	text-overflow:;/*  */
	text-indent:;/* identar */
	text-decoration:;/* decorar */
	letter-spacing:;/* ajustar espaciado entre letras */
	word-spacing:;/* ajustar espaciado entre palabras */
	line-height:;/* ajustar espaciado de altura de línea de texto */
	list-style:;/* dar estilo a las listas */
	list-style-type:;/* dar estilo a las listas */
	list-style-image:;/* para poner una imagen */
	list-style-position:;/* dar estilo a las listas */
	empty-cells:;/* dar estilo a las tablas a las celdas vacias */
	cursor:;/* cambiar el puntero */
	animation-name:;/* para trabajar con animación */
	animation-duration:;/* establecer duración de la animación */
	animation-iteration-count:;/* establecer cuanto tiempo durará la animación */
	animation-delay:;/*  */
	/* FLEXBOX PADRE */
	display: flex;/* Habilitar, activar FLEXBOX, flex o inline-flex */
    flex-direction: row;/* row, row-reverse, column, column-reverse */
	flex-wrap: nowrap;/* nowrap, wrap */
    justify-content: flex-start;/* flex-start, flex-end, center, space-between, space-around - alineación de ítems sobre eje principal */
	align-items: stretch;/* stretch, flex-start, flex-end, center - alineación de ítems sobre el eje cruzado*/
	flex-flow:;/* combina "flex-direction" con "flex-wrap" */
	/* FLEXBOX HIJO */
	flex-shrink:;/* controla como se contrae */
	flex-grow:;/* añade espacio sobre eje principal */
	flex-basis: auto;/* define el tamaño de un ítem en términos del espacio que deja como espacio disponible */
	align-self:;/*  */
	flex:;/* combina "flex-shrink" "flex-grow" "flex-basis" */
	flex: initial;/* el ítem se restablece con los valores iniciales de Flexbox */flex: 0 1 auto;
	flex: auto;/* los ítems pueden crecer y llenar el contendor así como encoger si se requiere */flex:1 1 auto;
	flex: none;/* se crearán ítems flex totalmente inflexibles */flex: 0 0 auto;
	flex:; /* <positive-number>*/flex: x x x;
	flex: 0 0 calc(33.3% - 1rem);/* Ej. aquí el rem es como un padding */
	top: 80vh;
}

@font-face {}/* agregar fuentes */
@keyframes{}/* crear animaciones */

/* MEDIAQUERIES */
/* MOBILE FIRST - consiste en codificar para dispositivos moviles y dar cambios a medida que crecen las pantallas */
@media screen and (min-width: 480px) {
	max-width: 420px;
}/* cambios a partir de este tamaño en adelante */
@media screen and (min-width: 768px) {
	max-width: 720px;
}/* cambios a partir de este tamaño en adelante */
@media screen and (min-width: 1024px) {
	max-width: 960;
}/* cambios a partir de este tamaño en adelante */
/* es clave trabajar con medidas porcentuales y no fijas */
@media screen {}
@media screen and (){}
@media screen and (max-width: 800px){}
/* xs Extra Small <768px, sm Small >=768px, md Medium >=992px, lg Large >=1200px */
@media screen and (max-width: 768px) {}/* Small <=768px */
@media screen and (min-width: 769px) and (max-width: 1199px) {}/* Average >768px, <1200px */
@media screen and (min-width: 1200px) {}/* Large >=1200px */
[atributo ~ ="valor"]/* ~ para apuntar a elementos que contengan una palabra especifica */
[atributo | ="valor"]/* | para apuntar a elementos que comiencen con una palabra especifica */
[atributo   ="valor"]/* signo paraguas para apuntar a elementos que comiencen con un valor especifico */
[atributo $ ="valor"]/* $ para apuntar a elementos que terminen con un valor especifico */
[atributo * ="valor"]/* * para apuntar a elementos que contengan un valor especifico */
selector + selector {}/* apuntar a elementos hermanos adyacentes */
selector ~ selector {}/* apuntar a elementos hermanos inmediatos (todos los hermanos) */

/*
CUSTOM PROPERTIES
*/
:root{}/* Almacenar las variables en el root */
/* Ejemplo */
:root {
	--fuentePrimaria: arial;/* Se inicia con dos guiones seguidos */
	--fuenteSecundaria: comic;
	--colorPrimario: white;
	--colorSecundario: black;
}
body {
	background-color: var(--colorPrimario);/* Así puego hacer uso */
	color: var(--colorSecundario);
}

	/*  */
	@-webkit-keyframes {
		from {}
		to {}
	}

/*
	KEYFRAME es un código aparte, una función que podemos invocar.
	KEYFRAMES en HTML/CSS
	Son animaciones que podemos aplicar al HTML, no se aplican de golpe, son progresivos.
	Se pueden aplicar directamente al elemento o a traves de seudoclases cono el hover.
*/
div:hover {
	animation: ;
	animation-name: ;
	animation-duration: ;
	animation-iteration-count: ;
	animation-delay: ;
}
@keyframes{}