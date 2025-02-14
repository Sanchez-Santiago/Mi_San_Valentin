import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/Poemas">Para mi amor 💖</Link>
        </li>
        <li>
          <Link to="/me-quieres">Me quiere? 🌹</Link>
        </li>
      </ul>
    </nav>
  );
}
