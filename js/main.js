'use strict'; //Modo estricto

let menuBtn =  document.getElementById('menuBtn');
let navbar = document.getElementById('navbar');

const audios = {
  musicBtn : {
    mp3 : new Audio('./assets/audio/mp3/NeonBtn.mp3'),
    ogg : new Audio('./assets/audio/ogg/NeonBtn.ogg')
  },
  brokenNeon :{
    mp3 : new Audio('./assets/audio/ogg/luzRota.mp3'),
    ogg :new Audio('./assets/audio/ogg/luzRota.ogg')
  }
}


//función para empezar o detener el audio
function letsMusic(disparador,container,subContainer, formato) {
  //variable que indicará el estado  actual de la música 
  let on = false;
  
  //Comprobar si el formato de audio es compatible
  disparador.addEventListener("click", ()=>{
    //Pregunta si es compatible con mpeg o mp3
    if (container[subContainer][formato].canPlayType('audio/mpeg')) {
      //Agrega un loop al audio 
      container[subContainer][formato].loop = true;
      
      //Verifica si el audio esta sonando
      if (on) {
        container[subContainer][formato].pause();
        on = false;
      }else{
        container[subContainer][formato].play();
        on = true;
      }

      //Si no es compatible con la primera opción pregunta si es compatible con el formato ogg
    }else if (container[subContainer][formato].canPlayType('audio/ogg')){
      //Agrega un loop al audio
      container[subContainer][formato].loop = true;
      
      //Verifica si es audio esta sonando
      if (on) {
        container[subContainer][formato].pause();
        on = false;
      }else{
        container[subContainer][formato].play();
        on = true;
      }

      //Si no es compatible con ninguna de las anteriores condiciones imprime en consola el siguiente mensaje
    }else{
      console.log("Your browser does not support the audio element.");
    }

  });
}

letsMusic(menuBtn, audios, 'musicBtn', 'mp3');


//función para agregar estilos agregar mediante un botón
function addStyles(disparador, objetivo , clase) {

  //función que agrega o remueve una clase
  function toggleClass() {
    objetivo.classList.toggle(clase); 
  }

  //llamado a la función anterior mediante un evento de escucha
  disparador.addEventListener('click', toggleClass);

  //Al final retorna una función que retirará la función de escucha anterior
  return function () {
    disparador.removeEventListener('click', toggleClass);
  }
}

//Desplegar menu mobile al hacer click en el btn
addStyles(menuBtn, navbar, 'visible');
