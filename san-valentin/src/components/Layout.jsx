import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import "./Layout.css"; // Tus estilos de Layout (puedes incluir aquí también Background.css o importarlo aparte)
// O si prefieres, importa Background.css directamente:
export default function Layout() {
  return (
    <div>
      {/* Fondo de la aplicación */}
      <div className="background-container">
        <div className="background-circle"></div>
      </div>

      {/* Navbar y contenido */}
      <Navbar />

      <main>
        <Outlet /> {/* Se renderiza la página activa */}
      </main>
    </div>
  );
}
