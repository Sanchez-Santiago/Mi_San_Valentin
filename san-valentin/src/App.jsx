import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/Poemas";
import NotFound from "./pages/NotFound";
import JuegoFlor from "./pages/JuegoFlor";
import "./App.css";
import Poemas from "./pages/Poemas";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="Poemas" element={<Poemas />} />
        <Route path="me-quieres" element={<JuegoFlor />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
