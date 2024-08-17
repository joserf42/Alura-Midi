function playSonido (idElemtoAudio) {
    document.querySelector(idElemtoAudio).play();
}
// llama a la constante listaDeTeclas
const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    // Creando constantes para los eventos de teclas
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#sonido_${instrumento}`;
    console.log(idAudio)
    
    // Creando evento de click para cada tecla
    tecla.onclick = function () {
        playSonido(idAudio);
    };
    tecla.onkeydown = function (evento){
        if (evento.code === 'Space'){
            tecla.classList.add('activa');
            
        }
        if (evento.code === 'Enter'){
            tecla.classList.add('activa');
                
        }
        
    }
    tecla.onkeyup = function (){
        if (evento.code === 'Enter') {
            tecla.classList.remove('activa');
        }
        

    }
}