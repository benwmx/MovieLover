import './css/style.css';
import Movies from './js/Movies.js';
import displayMovies from './JS/display.js';

const upcoming = new Movies('upcoming');
const popular = new Movies('popular');
const topRated = new Movies('top_rated');
upcoming.getData().then(() => {
  displayMovies(upcoming.data, 'upcoming');
});

popular.getData().then(() => {
  displayMovies(popular.data, 'popular');
});

topRated.getData().then(() => {
  displayMovies(topRated.data, 'top_rated');
});
