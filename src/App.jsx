import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Accueil from "./pages/Accueil";
import Recherche from "./pages/Recherche";
import AjouterFilm from "./pages/AjouterFilm";
import DetailsFilm from "./pages/DetailsFilm";
import "./App.css";

const App = () => {
  const [menuVisible, setMenuVisible] = useState(true);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className="app-container">
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>

      {/* Menu latéral */}
      {menuVisible && (
        <nav className="sidebar">
          <h2></h2>
          <ul>
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/recherche">Recherche</Link>
            </li>
            <li>
              <Link to="/ajouter">Ajouter un Film</Link>
            </li>
          </ul>
        </nav>
      )}

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/recherche" element={<Recherche />} />
          <Route path="/ajouter" element={<AjouterFilm />} />
          <Route path="/film/:id" element={<DetailsFilm />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
