import './CSS/style.css';
import './CSS/popup.css';
import Comment from './JS/Comment.js';
import { displayComments } from './JS/display.js';

const comment = new Comment();
const submiComment = document.getElementById('submit');
const name = document.getElementById('name');
const commentDescription = document.getElementById('comment-description');
// this id is a mock-up for the clicked movie.
const id = '101test';

submiComment.addEventListener('click', (event) => {
  event.preventDefault();
  comment.add(id, name.value, commentDescription.value).then(() => {
    comment.getList(id).then((data) => {
      displayComments(data);
    });
  });
});