import './CSS/style.css';
import './CSS/popup.css';
import { displayMovies, displayComments } from './JS/display.js';
import Movies from './js/Movies.js';
import Comment from './JS/Comment.js';

const upcoming = new Movies('upcoming');
const popular = new Movies('popular');
const topRated = new Movies('top_rated');
const comment = new Comment();
const submiComment = document.getElementById('submit');
const name = document.getElementById('name');
const commentDescription = document.getElementById('comment-description');
const closeBtn = document.querySelector('.close-pop');
const overlay = document.querySelector('.popOverlay');
const popup = document.querySelector('.popContainer');
// this id is a mock-up for the clicked movie.
const id = '101test';

upcoming.getData().then(() => {
  displayMovies(upcoming.data, 'upcoming');
});

popular.getData().then(() => {
  displayMovies(popular.data, 'popular');
});

topRated.getData().then(() => {
  displayMovies(topRated.data, 'top_rated');
});

submiComment.addEventListener('click', (event) => {
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