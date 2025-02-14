import { useState } from "react";
import Confetti from "react-confetti";
import "./Home.css";

export default function Home() {
  const [aceptado, setAceptado] = useState(false);
  const [noClicks, setNoClicks] = useState(0);

  const handleSiClickYes = () => {
    setAceptado(true);
  };

  const handleSiClickNo = () => {
    setNoClicks(noClicks + 1);
  };

  return (
    <div className="home-container">
      {aceptado && <Confetti />} {/* 🎉 Confeti cuando dice Sí */}
      <h1>💘 ¿Quieres ser mi San Valentín? 💖</h1>
      <div className="buttons">
        <button
          className="btn yes"
          onClick={handleSiClickYes}
          style={{
            fontSize: `${20 + noClicks * 5}px`,
            padding: `${10 + noClicks * 2}px`,
          }}
        >
          💌 ¡Sí! 💕
        </button>
        <button
          className="btn no"
          onClick={handleSiClickNo}
          style={{
            fontSize: `${20 - noClicks * 2}px`,
            padding: `${10 - noClicks}px`,
            position: noClicks > 0 ? "absolute" : "static",
            left: noClicks > 0 ? `${Math.random() * 80}%` : "auto",
            top: noClicks > 0 ? `${Math.random() * 80}%` : "auto",
          }}
        >
          💔 No 😢
        </button>
      </div>
      {aceptado && (
        <div className="video-container">
          <iframe
            className="video"
            src="https://www.youtube.com/embed/PQlG1gznMBE"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
          ></iframe>
        </div>
      )}
    </div>
  );
}
