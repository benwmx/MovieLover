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

export { displayComments, displayMovieDetails };
