const addPopupToDom = () => {
  const popup = `<div class="popOverlay d-none"></div>
    <div class="popContainer d-none text-light">
        <i class="fas fa-times close-pop"></i>
        <div class='info'>
          <img id='poster' src="#" alt="poster">
          <div class="details">
            <h2 class="title"></h2>
            <p class="release_date">Release Date : <span id="date"></span> </p>
            <p class="vote_average">Voting Average : <span id="vote"></span></p>
            <div class="overview">
              <h4>Overview : </h4>
              <p id="overview-txt"></p>
            </div>
          </div>  
        </div>
        <div class="comments">
            <h2 class="comments-title title">Comments (<span id="comments-counter-popup"></span>)</h2>
            <div id='noCommentMessage'>
                    <p>No comments yet 😢 </p>
                    <p>Add you comment below ⤵️</p>
            </div>
            <ul class='comments-list'>
                
            </ul>
        </div>
        <input id='idHiddenInput' class='d-none'>
        <div class="add-comment">
            <h2 class="add-comment title">Add a Comment</h2>
            <form action="#">
                <label for="name">Name:</label>
                <input id="name" type="text" placeholder="Rachid Ahmad" required>
                <label for="comment-description">Comment:</label>
                <textarea name="comment" id="comment-description" cols="30" rows="6" placeholder="it is amazing !" required></textarea>
                <button id="submit" type="submit">Comment</button>
                <p id='submitError'  class='text-danger'>Values are Required</p>
            </form>
        </div>
    </div>`;
  document.body.innerHTML += popup;
};

const displayMovies = (data, sectionId) => {
  const section = document.getElementById(sectionId);
  const list = document.createElement('div');
  list.id = `list-${sectionId}`;
  list.classList.add('list');
  if (data !== []) {
    data.forEach((row) => {
      const { image, id, title } = row;
      const card = `<div id="${id}" class="card m-2 bg-dark text-light" style="width: 12rem;">
    <img id ="img${id}" src="${image}" class="card-img-top" alt="${title}">
    <div class="card-body d-flex flex-column align-items-start">
    <div>
    <div class=''>
    <i id ="likes${id}" class="far fa-heart text-danger my-2"></i> (<span class="likes">0</span>)
    <i id ="comment${id}" class="fas fa-comment-dots mx-2"></i>
    </div>
    </div>
      <h5 id ="title${id}" class="card-title">${title}</h5>
    </div>
    </div>`;
      list.insertAdjacentHTML('beforeend', card);
    });
  }
  section.innerHTML = '';
  section.appendChild(list);
};

const displayMovieDetails = (movie) => {
  const overlay = document.querySelector('.popOverlay');
  const popup = document.querySelector('.popContainer');
  overlay.classList.remove('d-none');
  popup.classList.remove('d-none');
  const title = document.querySelector('.title');
  const poster = document.querySelector('#poster');
  const releaseDate = document.querySelector('#date');
  const votingAverage = document.querySelector('#vote');
  const overview = document.querySelector('#overview-txt');
  title.innerText = movie.title;
  poster.src = movie.image;
  releaseDate.innerText = movie.release_date;
  votingAverage.innerText = movie.vote_average;
  overview.innerText = movie.overview;
};

const displayComments = (comments) => {
  const list = document.querySelector('.comments-list');
  const noCommentMessage = document.getElementById('noCommentMessage');
  if (comments.length === 0) {
    list.innerHTML = '';
    noCommentMessage.classList.remove('d-none');
  } else {
    noCommentMessage.classList.add('d-none');
    list.innerHTML = '';
    comments.forEach((comment) => {
      const container = `<li class='comment-container'>
      <p class='comment-time'>${comment.creation_date}</p>
      <p class='comment-name'>${comment.username}</p>
      <p class='comment-description'>${comment.comment}</p>
      </li>
      `;
      list.innerHTML += container;
    });
  }
};

const displayCommentsCounter = (counter, place) => {
  if (place === 'popup') document.querySelector('#comments-counter-popup').innerText = counter;
};

const clearCommentForm = () => {
  const submitError = document.getElementById('submitError');
  document.getElementById('name').value = '';
  document.getElementById('comment-description').value = '';
  submitError.classList.add('d-none');
};

export {
  addPopupToDom, displayMovies, displayMovieDetails
  , displayComments, clearCommentForm,
  displayCommentsCounter,
};