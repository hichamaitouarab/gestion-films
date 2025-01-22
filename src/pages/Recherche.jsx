import { useState } from "react";

const Recherche = () => {
  const [query, setQuery] = useState("");
  const [films, setFilms] = useState([]);

  const rechercherFilms = (e) => {
    e.preventDefault();
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=e9f7900fd54f30d7c72152ca2bab2c18&query=${query}`
    )
      .then((response) => response.json())
      .then((data) => setFilms(data.results));
  };

  return (
    <div className="container">
      <h1>Recherche de Films</h1>
      <form onSubmit={rechercherFilms}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Rechercher un film..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Rechercher
        </button>
      </form>

      <div className="row mt-4">
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
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recherche;
