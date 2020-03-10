const baseURL = "https://api.themoviedb.org/3/";
const apiKey = "api_key=844acd5d93f95171cb079356b4956807";

const fetchMovieDetails = movieId => {
  return fetch(`${baseURL}movie/${movieId}?${apiKey}`).then(res => res.json());
};

const fetchMoviesWithQuery = searchQuery => {
  return fetch(
    `${baseURL}search/movie?${apiKey}&query=${searchQuery}
    `
  )
    .then(res => res.json())
    .then(data => data.results);
};
const fetchTrendingMovie = () => {
  return fetch(`${baseURL}trending/movie/week?${apiKey}`)
    .then(res => res.json())
    .then(movie => movie.results);
};

const fetchMoviesActors = movieId => {
  return fetch(`${baseURL}movie/${movieId}/credits?${apiKey}`)
    .then(res => res.json())
    .then(movie => movie.cast);
};
const fetchMoviesReviews = movieId => {
  return fetch(`${baseURL}movie/${movieId}/reviews?${apiKey}`)
    .then(res => res.json())
    .then(movie => movie.results);
};
export default {
  fetchMovieDetails,
  fetchMoviesWithQuery,
  fetchTrendingMovie,
  fetchMoviesActors,
  fetchMoviesReviews
};
