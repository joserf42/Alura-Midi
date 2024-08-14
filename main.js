function playSonido (idElemtoAudio) {
    document.querySelector(idElemtoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');



let contador = 0

while (contador < 9 ) {
    // Agregando eventos de teclas
    const tecla = listaDeTeclas[contador];

    const instrumento = tecla.classList[1];
    
    const idAudio = `#sonido_${instrumento}`;
    console.log(idAudio)
    
    tecla.onclick = function () {
        playSonido(idAudio);
    };
    contador = contador + 1
   
}