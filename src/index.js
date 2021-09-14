import './css/style.css';
import Movies from './js/Movies.js';
const displayList = (data, elementId) => {
    const section = document.getElementById(elementId);
    const list = document.createElement('div');
    list.id = 'list';
    list.classList.add('d-flex');
    list.classList.add('justify-content-center');
    if (data !== []) {
        data.forEach((row) => {
            const { id, image, title } = row;
            const card = `<div id="${id}" class="card" style="width: 18rem;">
        <img src="${image}" class="card-img-top" alt="${title}">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <a href="#" class="btn btn-primary">Add to Watch list</a>
        </div>
      </div>`;
            list.insertAdjacentHTML('beforeend', card);
        });
    }
    section.innerHTML = '';
    section.appendChild(list);
};
const comingSoon = new Movies('ComingSoon');
comingSoon.getData().then(() => {
    displayList(comingSoon.data, 'comingSoon');
});