import { useState, useEffect } from "react";
import "./JuegoFlor.css";

export default function JuegoFlor() {
  // Estado para saber si el juego está activo o no
  const [juegoActivo, setJuegoActivo] = useState(false);
  // Lista de pétalos
  const [petalos, setPetalos] = useState(["p1", "p2", "p3", "p4", "p5", "p6"]);
  // Mensaje que se muestra al hacer clic en un pétalo
  const [mensaje, setMensaje] = useState("");
  // Valores aleatorios asignados a cada pétalo
  const [valores, setValores] = useState([]);

  // Se asignan los valores aleatorios al iniciar el juego
  const asignarValores = () => {
    const numeroAleatorio = Math.round(Math.random() * 10);
    let moneda = numeroAleatorio > 5;
    const nuevosValores = [];
    for (let i = 0; i < petalos.length; i++) {
      nuevosValores.push(moneda);
      moneda = !moneda;
    }
    setValores(nuevosValores);
  };

  // Maneja el inicio del juego: oculta la pantalla de inicio y asigna valores
  const handleJugar = () => {
    setJuegoActivo(true);
    asignarValores();
  };

  // Función para manejar el clic en un pétalo
  const handlePetaloClick = (id) => {
    // Se remueve el pétalo clicado
    setPetalos((prev) => prev.filter((p) => p !== id));
    const indice = parseInt(id.substr(1)) - 1;
    const resultado = valores[indice] ? "Me quiere" : "No me quiere";
    setMensaje(resultado);
    // Se muestra el mensaje por 1 segundo
    setTimeout(() => setMensaje(""), 1000);
  };

  return (
    <div>
      {!juegoActivo ? (
        // Pantalla de inicio
        <div id="intro">
          <button id="botonJugar" onClick={handleJugar}>
            Jugar
          </button>
        </div>
      ) : (
        // Pantalla del juego
        <div id="juego" className="animated fadeIn">
          <div id="postit">
            <h2>Tarea:</h2>
            <p>
              Actualizar, para quitar los pétalos y cambiarle el color
              aleatoriamente.
            </p>
          </div>
          <div id="figura">
            <div id="flor">
              {petalos.map((id) => (
                <div
                  key={id}
                  id={id}
                  className="petalo animated fadeIn"
                  onClick={() => handlePetaloClick(id)}
                ></div>
              ))}
              <div id="centro" className="animated pulse infinite"></div>
            </div>
            <div id="cesped">
              <div className="manga"></div>
              <div className="manga"></div>
              <div className="manga"></div>
              <div className="manga"></div>
              <div className="manga"></div>
              <div className="manga"></div>
              <div className="manga"></div>
              <div className="fondo_manga"></div>
            </div>
            <div id="tallo"></div>
            <div id="hoja"></div>
          </div>
          {mensaje && (
            <div id="mensaje" className="mostrar animated fadeIn">
              <span id="texto_mensaje">{mensaje}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
