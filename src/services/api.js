const API_KEY = 'e9f7900fd54f30d7c72152ca2bab2c18';
const BASE_URL = 'https://api.themoviedb.org/3';

const endpoints = {
  popularMovies: `${BASE_URL}/movie/popular?api_key=${API_KEY}`,
  searchMovies: (query) => `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`,
  movieDetails: (id) => `${BASE_URL}/movie/${id}?api_key=${API_KEY}`,
};

export default endpoints;
