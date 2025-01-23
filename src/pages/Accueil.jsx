import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Accueil = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=e9f7900fd54f30d7c72152ca2bab2c18")
      .then((response) => response.json())
      .then((data) => setFilms(data.results));
  }, []);

  return (
    <div className="container">
      <h1 className="tite">Films Populaires</h1>
      <div className="row">
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
      </div>
    </div>
  );
};

export default Accueil;
