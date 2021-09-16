/* eslint-disable no-unused-vars */
const displayComments = (comments) => {
  const list = document.querySelector('.comments-list');
  list.innerHTML = '';
  comments.forEach((comment) => {
    const container = document.createElement('li');
    container.className = 'comment-container';
    const time = document.createElement('p');
    time.className = 'comment-time';
    const name = document.createElement('p');
    name.className = 'comment-name';
    const description = document.createElement('p');
    description.className = 'comment-description';
    time.value = comment.creation_date;
    name.value = comment.username;
    description.value = comment.comment;
    list.appendChild(container);
  });
};

const displayMovieDetails = (movie) => {
  const title = document.querySelector('.title');
  const poster = document.querySelector('#poster');
  const releaseDate = document.querySelector('#date');
  const votingAverage = document.querySelector('#vote');
  title.value = movie.title;
  poster.src = movie.image;
  releaseDate.value = movie.release_date;
  votingAverage.value = movie.vote_average;
};

const addPopupToDom = () => {
  const popup = `<div class="popOverlay d-none"></div>
    <div class="popContainer d-none">
        <i class="fas fa-times close-pop"></i>
        <img id='poster' src="#" alt="poster">
        <h2 class="title">Title</h2>
        <div class="date-vote">
            <p class="release_date">Release Date : <span id="date"></span> </p>
            <p class="vote_average">Voting Average : <span id="vote"></span></p>
        </div>
        <div class="overview">
            <h4>Overview : </h4>
            <p id="overview-txt">
            </p>
        </div>
        <div class="comments">
            <h2 class="comments-title title">Comments (<span class="comments-counter"></span>)</h2>
            <ul class='comments-list'>
                <li>
                    <p>No comments yet 😢 </p>
                    <p>Add you comment below ⤵️</p>
                </li>
            </ul>
        </div>
        <div class="add-comment">
            <h2 class="add-comment title">Add a Comment</h2>
            <form action="#">
                <label for="name">Name:</label>
                <input id="name" type="text" placeholder="Your Name">
                <label for="comment-description">Comment:</label>
                <textarea name="comment" id="comment-description" cols="30" rows="6" placeholder="Comment">
                </textarea>
                <button id="submit" type="submit">Comment</button>
            </form>
        </div>
    </div>`;
};

export { displayComments, displayMovieDetails, addPopupToDom };
