import './CSS/style.css';
import './CSS/popup.css';
import { displayMovies, displayComments, addPopupToDom } from './JS/display.js';
import Movies from './JS/Movies.js';
import Comment from './JS/Comment.js';

const upcoming = new Movies('upcoming');
const popular = new Movies('popular');
const topRated = new Movies('top_rated');
const comment = new Comment();

// this id is a mock-up for the clicked movie.
const id = '101test';

document.addEventListener('DOMContentLoaded', () => {
  addPopupToDom();
  const overlay = document.querySelector('.popOverlay');
  const popup = document.querySelector('.popContainer');
  upcoming.getData().then(() => {
    displayMovies(upcoming.data, 'upcoming');
    const list = document.getElementById('list-upcoming');
    list.addEventListener('click', (event) => {
      if (event.target.classList.contain('card-img-top')) {
        overlay.classList.remove('d-none');
        popup.classList.remove('d-none');
        upcoming.movieInfo();
      }
      if (event.target.classList.contain('card-title')) {
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
    comment.add(id, name.value, commentDescription.value).then(() => {
      comment.getList(id).then((data) => {
        displayComments(data);
      });
    });
  });
  closeBtn.addEventListener('click', () => {
    popup.classList.add('d-none');
    overlay.classList.add('d-none');
  });
});
