'use strict'; //Modo estricto

let menuBtn =  document.getElementById('menuBtn');
let navbar = document.getElementById('navbar');

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

addStyles(menuBtn, navbar, 'visible');