import { useState } from "react";
import "./Poemas.css";
import poemasData from "./poemas.json"; // Importa el JSON directamente

export default function Poemas() {
  const [poemaIndex, setPoemaIndex] = useState(0);
  const poemas = poemasData.poemas_amor; // Accede a los poemas

  const handleSiguientePoema = () => {
    setPoemaIndex((prevIndex) => (prevIndex + 1) % poemas.length);
  };

  const handlePoemaAnterior = () => {
    setPoemaIndex((prevIndex) =>
      prevIndex === 0 ? poemas.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="poemas-container">
      <h1>Poemas de Amor 💘</h1>
      {poemas.length > 0 ? (
        <>
          <div className="poema">
            <h2>{poemas[poemaIndex].titulo}</h2>
            <p>
              <strong>Autor:</strong> {poemas[poemaIndex].autor}
            </p>
            <p>
              <strong>Origen:</strong> {poemas[poemaIndex].origen}
            </p>
            <p style={{ whiteSpace: "pre-line" }}>
              {poemas[poemaIndex].contenido}
            </p>
          </div>
          <div className="controles-navegacion">
            <button className="btn-anterior" onClick={handlePoemaAnterior}>
              ⬅️ Poema Anterior
            </button>
            <button className="btn-siguiente" onClick={handleSiguientePoema}>
              Siguiente Poema ➡️
            </button>
          </div>
        </>
      ) : (
        <p>No hay poemas disponibles</p>
      )}
    </div>
  );
}
