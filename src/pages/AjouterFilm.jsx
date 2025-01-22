import { useState } from "react";

const AjouterFilm = () => {
  const [titre, setTitre] = useState("");
  const [description, setDescription] = useState("");
  const [dateSortie, setDateSortie] = useState("");
  const [message, setMessage] = useState("");

  const handleAjoutFilm = (e) => {
    e.preventDefault();

    if (!titre || !description) {
      setMessage("Veuillez remplir tous les champs obligatoires.");
      return;
    }

    const nouveauFilm = {
      id: Date.now(), // Génération d'un ID unique pour la liste locale
      title: titre,
      description,
      release_date: dateSortie || "Non spécifiée",
    };

    // Simule l'ajout à une base de données ou une liste locale
    console.log("Film ajouté :", nouveauFilm);
    setMessage("Le film a été ajouté avec succès !");
    setTitre("");
    setDescription("");
    setDateSortie("");
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Ajouter un Nouveau Film</h1>
      {message && <p className="alert alert-info">{message}</p>}
      <form onSubmit={handleAjoutFilm}>
        <div className="mb-3">
          <label className="form-label">Titre *</label>
          <input
            type="text"
            className="form-control"
            value={titre}
            onChange={(e) => setTitre(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description *</label>
          <textarea
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label">Date de Sortie (optionnelle)</label>
          <input
            type="date"
            className="form-control"
            value={dateSortie}
            onChange={(e) => setDateSortie(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-success">Ajouter</button>
      </form>
    </div>
  );
};

export default AjouterFilm;
