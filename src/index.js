import './css/style.css';
import Movies from './js/Movies.js';
import {displayMovies} from './JS/display.js'

const upcoming = new Movies('upcoming');
const popular = new Movies('popular');
const top_rated = new Movies('top_rated');
upcoming.getData().then(() => {
    displayMovies(upcoming.data, 'upcoming');
});

popular.getData().then(() => {
    displayMovies(popular.data, 'popular');
});

top_rated.getData().then(() => {
    displayMovies(top_rated.data, 'top_rated');
});


// 

