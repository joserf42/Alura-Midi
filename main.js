// Función para reproducir sonido
const playSonido = (idElementoAudio) => {
    const audioElement = document.querySelector(idElementoAudio);
    if (audioElement) {
        audioElement.play();
    }
};

// Selección de teclas
const listaDeTeclas = document.querySelectorAll('.tecla');

// Función para manejar eventos de teclado
const manejarEventoTeclado = (evento, tecla, idAudio) => {
    if (evento.code === 'Space' || evento.code === 'Enter') {
        tecla.classList.toggle('activa', evento.type === 'keydown');
        if (evento.type === 'keydown') {
            playSonido(idAudio);
        }
    }
};

// Iteración sobre las teclas
listaDeTeclas.forEach(tecla => {
    const instrumento = tecla.classList[1];
    const idAudio = `#sonido_${instrumento}`;

    // Evento de clic
    tecla.onclick = () => playSonido(idAudio);

    // Eventos de teclado
    tecla.onkeydown = (evento) => manejarEventoTeclado(evento, tecla, idAudio);
    tecla.onkeyup = (evento) => manejarEventoTeclado(evento, tecla, idAudio);
});
