import React, { useEffect, useState } from "react";
import "./heartLetter.css"
import consentida from "./Consentida.mp3";


const HeartLetter = () => {

    const [isOpen, setIsOpen] = useState(false);
    const audioRef = React.useRef(null); // Referencia al elemento de audio

    useEffect(() => {
        document.body.style.backgroundColor = '#f7d9da'; // Cambia el color de fondo al montar este componente
      }, []);


    const handleClick = (action) => {
        if (action === 'open') {
            if (!isOpen) {
                setIsOpen(true);
            }
        } else {
            if (isOpen) {
                setIsOpen(false);
            }
        }
    };

    const playAudio = () => {
        audioRef.current.play(); // Función para reproducir el audio
      };
    
      const pauseAudio = () => {
        audioRef.current.pause(); // Función para pausar el audio
      };
    

  return (
    <div >
      <div class="envlope-wrapper">
        <div id="envelope" className={isOpen ? 'open' : 'close'}>
          <div class="front flap"></div>
          <div class="front pocket"></div>
          <div class="letter">
            <div className="letter-text">Buenos Días Annie, esto es solo para recordarte que me encantas y te quiero vario vario, que tengas bonito día</div>
          </div>
          <div class="hearts">
            <div class="heart a1"></div>
            <div class="heart a2"></div>
            <div class="heart a3"></div>
          </div>
        </div>
      </div>
      <audio ref={audioRef} loop>
        <source src={consentida} type="audio/mp3" />
      </audio>
      <div class="reset">
        <button id="open" onClick={() => { handleClick('open'); playAudio(); }}>Abrir</button>
        <button id="reset" onClick={() => { handleClick('close'); pauseAudio(); }}>Cerrar</button>
      </div>
    </div>
  );
};

export default HeartLetter;
