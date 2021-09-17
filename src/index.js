import './CSS/style.css';
import './CSS/popup.css';
import {
  displayMovies, displayMovieDetails, displayComments,
  addPopupToDom, clearCommentForm, displayCommentsCounter, displayAllLikes, incrementLike
} from './JS/display.js';
import { commentsCounter } from './JS/counters.js';
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
  const submitError = document.getElementById('submitError');

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
      displayCommentsCounter(commentsCounter(involvement.popupComments), 'popup');
    });
    document.getElementById('idHiddenInput').value = id;
  };

  const addEventListenerToMovies = (elementId) => {
    const movieContainer = document.getElementById(`list-${elementId}`);
    movieContainer.addEventListener('click', (event) => {
      let id = null;
      let shouldOpenPopup = false;
      console.log(event.target);
      if (event.target.classList.contains('card-img-top')) {
        id = event.target.id.replace('img', '');
        shouldOpenPopup = true;
      }
      if (event.target.classList.contains('card-title')) {
        id = event.target.id.replace('title', '');
        shouldOpenPopup = true;
      }
      if (event.target.classList.contains('fa-comment-dots')) {
        id = event.target.id.replace('comment', '');
        shouldOpenPopup = true;
      }
      if(event.target.classList.contains('fa-heart')){
        id = event.target.id.replace('like', '');
        console.log(id);
        involvement.addLike(id).then(() => {
          incrementLike(id);
        });
        
      }
      if (shouldOpenPopup) {
        clearCommentForm();
        getAndDisplayMovieDetails(id, elementId);
      }
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
  involvement.addLike(1).then(() => {
    involvement.getLikes().then(() => {
      displayAllLikes(involvement.likes);
    });
  })
  

  submitComment.addEventListener('click', (event) => {
    event.preventDefault();
    const id = document.getElementById('idHiddenInput').value;
    if (name.value === '' || commentDescription.value === '') {
      submitError.classList.remove('d-none');
    } else {
      involvement.addComment(id, name.value, commentDescription.value).then(() => {
        involvement.getComments(id).then(() => {
          displayComments(involvement.popupComments);
          displayCommentsCounter(commentsCounter(involvement.popupComments), 'popup');
        });
      });
      clearCommentForm();
    }
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
