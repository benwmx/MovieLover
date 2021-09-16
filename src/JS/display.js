const addPopupToDom = () => {
  const popup = `<div class="popOverlay d-none"></div>
    <div class="popContainer d-none">
        <i class="fas fa-times close-pop"></i>
        <img id='poster' src="#" alt="poster">
        <h2 class="title"></h2>
        <a href="#" class="btn btn-primary">Add to Watch list</a>
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
    <div class="card-body d-flex flex-column justify-content-between align-items-start">
      <h5 id ="title${id}" class="card-title">${title}</h5>
      <div>
      <div class='my-2'>
      <i id ="likes${id}" class="far fa-heart text-danger my-3"></i> <span class="likes"></span>
      <i id ="comment${id}" class="fas fa-comment-dots mx-2"></i> <span class="comments-counter"></span>
      </div>
      </div>
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
  title.value = movie.title;
  poster.src = movie.image;
  releaseDate.value = movie.release_date;
  votingAverage.value = movie.vote_average;
};

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

export {
  addPopupToDom, displayMovies, displayMovieDetails, displayComments,
};