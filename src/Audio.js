import React, { useEffect } from "react";

const BackgroundMusic = () => {
  useEffect(() => {
    const audio = new Audio("./Consentida.mp3"); // Ruta al archivo de audio
    audio.loop = true; // Para que la canción se reproduzca en bucle

    const playMusic = () => {
      audio.play();
    };

    // Reproducir la música cuando el componente se monte
    playMusic();

    // Limpiar el audio cuando el componente se desmonte
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  return null; // No renderiza ningún contenido en el DOM, solo controla la música de fondo
};

export default BackgroundMusic;
