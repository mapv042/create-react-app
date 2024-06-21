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
            
            if (isOpen) {
                setIsOpen(false);
                pauseAudio();
            } else{
              setIsOpen(true)
              playAudio()
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
        <div id="envelope" className={isOpen ? 'open' : 'close'} onClick={handleClick}>
          <div class="front flap"></div>
          <div class="front pocket"></div>
          <div class="letter">
            <div className="letter-text">Buenos días Annie, esto es solo para recordarte que me encantas y que te quiero vario vario, que tengas bonito día</div>
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
        
      </div>
    </div>
  );
};

export default HeartLetter;
