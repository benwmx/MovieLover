import './CSS/style.css';
import './CSS/popup.css';
import {
  displayMovies, displayMovieDetails, displayComments, addPopupToDom,
} from './JS/display.js';
import Movies from './JS/Movies.js';
import InvolvementAPI from './JS/involvementAPI.js';

const upcoming = new Movies('upcoming');
const popular = new Movies('popular');
const topRated = new Movies('top_rated');
const involvement = new InvolvementAPI();

document.addEventListener('DOMContentLoaded', () => {
  addPopupToDom();
  const submitComment = document.getElementById('submit');
  const name = document.getElementById('name');
  const commentDescription = document.getElementById('comment-description');
  const closeBtn = document.querySelector('.close-pop');
  const overlay = document.querySelector('.popOverlay');
  const popup = document.querySelector('.popContainer');
  upcoming.getData().then(() => {
    displayMovies(upcoming.data, 'upcoming');
    const movieContainer = document.getElementById('list-upcoming');
    movieContainer.addEventListener('click', (event) => {
      if (event.target.classList.contains('card-img-top')) {
        const id = event.target.id.replace('img', '');
        const movie = upcoming.movieInfo(id);
        displayMovieDetails(movie);
        involvement.getComments(id).then((comments) => {
          displayComments(comments);
        });
      }
      if (event.target.classList.contains('card-title')) {
        const id = event.target.id.replace('title', '');
        const movie = upcoming.movieInfo(id);
        displayMovieDetails(movie);
        involvement.getComments(id).then((comments) => {
          displayComments(comments);
        });
      }
      if (event.target.classList.contains('fa-comment-dots')) {
        const id = event.target.id.replace('comment', '');
        const movie = upcoming.movieInfo(id);
        displayMovieDetails(movie);
        involvement.getComments(id).then((comments) => {
          displayComments(comments);
        });
      }
    });
  });

  popular.getData().then(() => {
    displayMovies(popular.data, 'popular');
    const movieContainer = document.getElementById('list-popular');
    movieContainer.addEventListener('click', (event) => {
      if (event.target.classList.contains('card-img-top')) {
        const id = event.target.id.replace('img', '');
        const movie = popular.movieInfo(id);
        displayMovieDetails(movie);
        involvement.getComments(id).then((comments) => {
          displayComments(comments);
        });
      }
      if (event.target.classList.contains('card-title')) {
        const id = event.target.id.replace('title', '');
        const movie = popular.movieInfo(id);
        displayMovieDetails(movie);
        involvement.getComments(id).then((comments) => {
          displayComments(comments);
        });
      }
      if (event.target.classList.contains('fa-comment-dots')) {
        const id = event.target.id.replace('comment', '');
        const movie = popular.movieInfo(id);
        displayMovieDetails(movie);
        involvement.getComments(id).then((comments) => {
          displayComments(comments);
        });
      }
    });
  });

  topRated.getData().then(() => {
    displayMovies(topRated.data, 'top_rated');
    const movieContainer = document.getElementById('list-top_rated');
    movieContainer.addEventListener('click', (event) => {
      if (event.target.classList.contains('card-img-top')) {
        const id = event.target.id.replace('img', '');
        const movie = topRated.movieInfo(id);
        displayMovieDetails(movie);
        involvement.getComments(id).then((comments) => {
          displayComments(comments);
        });
      }
      if (event.target.classList.contains('card-title')) {
        const id = event.target.id.replace('title', '');
        const movie = topRated.movieInfo(id);
        displayMovieDetails(movie);
        involvement.getComments(id).then((comments) => {
          displayComments(comments);
        });
      }
      if (event.target.classList.contains('fa-comment-dots')) {
        const id = event.target.id.replace('comment', '');
        const movie = topRated.movieInfo(id);
        displayMovieDetails(movie);
        involvement.getComments(id).then((comments) => {
          displayComments(comments);
        });
      }
    });
  });

  submitComment.addEventListener('click', (event) => {
    event.preventDefault();
    involvement.addComment(commentId, name.value, commentDescription.value).then(() => {
      involvement.getComments(commentId).then((data) => {
        displayComments(data);
      });
    });
  });
  closeBtn.addEventListener('click', () => {
    popup.classList.add('d-none');
    overlay.classList.add('d-none');
  });

  overlay.addEventListener('click', () => {
    popup.classList.add('d-none');
    overlay.classList.add('d-none');
  });
});
