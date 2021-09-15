const displayMovies = (data, elementId) => {
  const section = document.getElementById(elementId);
  const list = document.createElement('div');
  list.id = 'list';
  list.classList.add('list');
  if (data !== []) {
    data.forEach((row) => {
      const { image, id, title } = row;
      const card = `<div id="${id}" class="card m-2 bg-dark text-light" style="width: 12rem;">
    <img src="${image}" class="card-img-top" alt="${title}">
    <div class="card-body d-flex flex-column justify-content-between align-items-start">
      <h5 class="card-title">${title}</h5>
      <div>
      <div class='my-2'>
      <i class="far fa-heart text-danger my-3"></i> 100
      <i class="fas fa-comment-dots mx-2"></i> 10
      </div>
      <a href="#" class="btn btn-primary">Add to Watch list</a>
      </div>
    </div>
    </div>`;
      list.insertAdjacentHTML('beforeend', card);
  });
    }
  section.innerHTML = '';
  section.appendChild(list);
};

export default displayMovies;