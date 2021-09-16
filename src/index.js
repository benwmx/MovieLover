import './CSS/style.css';
import './CSS/popup.css';
import { displayMovies, displayMovieDetails, displayComments, addPopupToDom } from './JS/display.js';
import Movies from './JS/Movies.js';
import InvolvementAPI from './JS/involvementAPI.js';

const upcoming = new Movies('upcoming');
const popular = new Movies('popular');
const topRated = new Movies('top_rated');
const involvement = new InvolvementAPI();

// this id is a mock-up for the clicked movie.
const id = '101test';

document.addEventListener('DOMContentLoaded', () => {
  addPopupToDom();
  upcoming.getData().then(() => {
    displayMovies(upcoming.data, 'upcoming');
    const movieContainer = document.getElementById('list-upcoming');
    movieContainer.addEventListener('click', (event) => {
      if (event.target.classList.contains('card-img-top')) {
        console.log(event.target.id);
        const id = event.target.id.replace('img','');
        console.log(id);
        const movie = upcoming.movieInfo(id);
        console.log(movie);
        displayMovieDetails(movie);
      }
      if (event.target.classList.contains('card-title')) {
        overlay.classList.remove('d-none');
        popup.classList.remove('d-none');
      }
    });
  });

  popular.getData().then(() => {
    displayMovies(popular.data, 'popular');
  });

  topRated.getData().then(() => {
    displayMovies(topRated.data, 'top_rated');
  });

  const submitComment = document.getElementById('submit');
  const name = document.getElementById('name');
  const commentDescription = document.getElementById('comment-description');
  const closeBtn = document.querySelector('.close-pop');

  submitComment.addEventListener('click', (event) => {
    event.preventDefault();
    involvementAPI.addComment(id, name.value, commentDescription.value).then(() => {
      involvementAPI.getComments(id).then((data) => {
        displayComments(data);
      });
    });
  });
  closeBtn.addEventListener('click', () => {
    popup.classList.add('d-none');
    overlay.classList.add('d-none');
  });
});
