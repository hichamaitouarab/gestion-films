import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailsFilm = () => {
  const { id } = useParams();
  const [film, setFilm] = useState(null);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=e9f7900fd54f30d7c72152ca2bab2c18`)
      .then((response) => response.json())
      .then((data) => setFilm(data));
  }, [id]);

  if (!film) return <p>Chargement...</p>;

  return (
    <div className="container">
      <h1>{film.title}</h1>
      <p>{film.overview}</p>
      <p>
        <strong>Date de sortie :</strong> {film.release_date}
      </p>
    </div>
  );
};

export default DetailsFilm;
