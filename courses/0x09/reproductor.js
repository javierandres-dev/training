var maximo,medio,reproducir,barra,progreso,silenciar,volumen,bucle;
function iniciar(){
	maximo = 400 
	medio = document.getElementById("medio");
	reproducir = document.getElementById("reproducir");
	barra = document.getElementById("barra");
	progreso = document.getElementById("progreso");
	silenciar = document.getElementById("silenciar");
	volumen = document.getElementById("volumen");

	reproducir.addEventListener("click",presionar);
	silenciar.addEventListener("click",sonido);
	barra.addEventListener("click",mover);
	volumen.addEventListener("change",nivel);
}
function presionar(){
	if(!medio.paused && !medio.ended){
		medio.pause();
		reproducir.value = ">";
		clearInterval(bucle);
	}else{
		medio.play();
		reproducir.value = "||"
		bucle = setInterval(estado,1000);
	}
}
function estado(){
	if(!medio.ended){
     let largo = parseInt(medio.currentTime * maximo/medio.duration)
     progreso.style.width = largo +'px';
	}else{
     progreso.style.width = '0px';
     reproducir.value = ">";
     clearInterval(bucle);
	}
}

function mover(evento){
	if(!medio.paused && !medio.ended){
     let ratonX = evento.offsetX - 2; 
     if(ratonX < 0){
      ratonX = 0;
     }else if(ratonX > maximo){
      ratonX = maximo;
     }
     let tiempo = ratonX * medio.duration / maximo; 
     medio.currentTime = tiempo;
     progreso.style.width = ratonX+'px';
	}
}
function sonido(){
	if(silenciar.value == 'Silencio'){
     medio.muted = true; 
     volumen.value = 0
     silenciar.value = "Sonido";
	}else{
     medio.muted = false;
     volumen.value = 0.6
     silenciar.value = "Silencio";
	}
}
function nivel(){
	medio.volume = volumen.value
}

window.addEventListener("load",iniciar)