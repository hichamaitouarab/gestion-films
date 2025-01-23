import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Accueil = () => {
  const [films, setFilms] = useState([]); // Films de l'API
  const [filmsAjoutes, setFilmsAjoutes] = useState([]); // Films ajoutés manuellement

  // Récupérer les films populaires depuis l'API
  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=e9f7900fd54f30d7c72152ca2bab2c18")
      .then((response) => response.json())
      .then((data) => setFilms(data.results));
  }, []);

  // Récupérer les films ajoutés manuellement depuis localStorage
  useEffect(() => {
    const filmsStockes = JSON.parse(localStorage.getItem("filmsAjoutes")) || [];
    setFilmsAjoutes(filmsStockes);
  }, []);

  return (
    <div className="container">
      <h1>Films Populaires</h1>
      <div className="row">
        {/* Affichage des films populaires de l'API */}
        {films.map((film) => (
          <div className="col-md-4" key={film.id}>
            <div className="card mb-4">
              <img
                src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
                className="card-img-top"
                alt={film.title}
              />
              <div className="card-body">
                <h5 className="card-title">{film.title}</h5>
                <Link to={`/film/${film.id}`} className="btn btn-primary">
                  Détails
                </Link>
              </div>
            </div>
          </div>
        ))}

        {/* Affichage des films ajoutés localement */}
        <h2 className="mt-4">Films Ajoutés</h2>
        {filmsAjoutes.map((film) => (
          <div className="col-md-4" key={film.id}>
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">{film.title}</h5>
                <p className="card-text">{film.description}</p>
                <p className="card-text">
                  <strong>Date de sortie :</strong> {film.release_date}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accueil;
