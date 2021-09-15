const displayComments = (comments) => {
  comments.forEach((comment) => {
    const list = document.querySelector('#comments');
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