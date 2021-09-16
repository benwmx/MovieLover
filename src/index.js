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
  const getAndDisplayMovieDetails = (id, elementId) => {
    let movie = null;
    switch (elementId) {
      case 'upcoming': movie = upcoming.movieInfo(id);
        break;
      case 'popular': movie = popular.movieInfo(id);
        break;
      case 'top_rated': movie = topRated.movieInfo(id);
        break;
      default: movie = null;
    }
    displayMovieDetails(movie);
    involvement.getComments(id).then(() => {
      displayComments(involvement.popupComments);
    });
    document.getElementById('idHiddenInput').value = id;
  };

  const addEventListenerToMovies = (elementId) => {
    const movieContainer = document.getElementById(`list-${elementId}`);
    movieContainer.addEventListener('click', (event) => {
      let id = null;
      if (event.target.classList.contains('card-img-top')) {
        id = event.target.id.replace('img', '');
      }
      if (event.target.classList.contains('card-title')) {
        id = event.target.id.replace('title', '');
      }
      if (event.target.classList.contains('fa-comment-dots')) {
        id = event.target.id.replace('comment', '');
      }
      getAndDisplayMovieDetails(id, elementId);
    });
  };

  upcoming.getData().then(() => {
    displayMovies(upcoming.data, 'upcoming');
    addEventListenerToMovies('upcoming');
  });

  popular.getData().then(() => {
    displayMovies(popular.data, 'popular');
    addEventListenerToMovies('popular');
  });

  topRated.getData().then(() => {
    displayMovies(topRated.data, 'top_rated');
    addEventListenerToMovies('top_rated');
  });

  submitComment.addEventListener('click', (event) => {
    event.preventDefault();
    const id = document.getElementById('idHiddenInput').value;
    involvement.addComment(id, name.value, commentDescription.value).then(() => {
      involvement.getComments(id).then(() => {
        displayComments(involvement.popupComments);
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
