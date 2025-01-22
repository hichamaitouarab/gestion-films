import { Routes, Route } from 'react-router-dom';
import Accueil from './pages/Accueil';
import Recherche from './pages/Recherche';
import AjouterFilm from './pages/AjouterFilm';
import DetailsFilm from './pages/DetailsFilm';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Accueil />} />
      <Route path="/recherche" element={<Recherche />} />
      <Route path="/ajouter" element={<AjouterFilm />} />
      <Route path="/film/:id" element={<DetailsFilm />} />
    </Routes>
  );
};

export default App;
