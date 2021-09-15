import './css/style.css';
import Movies from './js/Movies.js';
const displayList = (data, elementId) => {
    const section = document.getElementById(elementId);
    const list = document.createElement('div');
    list.id = 'list';
    list.classList.add('list');
    if (data !== []) {
        data.forEach((row) => {
            const { id, image, title } = row;
            const card = `<div id="${id}" class="card m-2 bg-dark text-light" style="width: 12rem;">
        <img src="${image}" class="card-img-top" alt="${title}">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <div class="">
          <i class="far fa-heart text-danger my-3"></i> 100
          <i class="fas fa-comment-dots mx-2"></i> 10
          </div>
          <a href="#" class="btn btn-primary">Add to Watch list</a>
        </div>
      </div>`;
            list.insertAdjacentHTML('beforeend', card);
        });
    }
    section.innerHTML = '';
    section.appendChild(list);
};
// const comingSoon = new Movies('ComingSoon');
// comingSoon.getData().then(() => {
//     console.log('recived');
//     displayList(comingSoon.data, 'comingSoon');
// });
const tempData = [{id:'abc', image:'https://i.pinimg.com/originals/bc/d5/c9/bcd5c9519581acc60bd60a429ab0c88f.jpg', title:'Test Movie'},
{id:'abc', image:'https://i.pinimg.com/originals/bc/d5/c9/bcd5c9519581acc60bd60a429ab0c88f.jpg', title:'Test Movie'},
{id:'abc', image:'https://i.pinimg.com/originals/bc/d5/c9/bcd5c9519581acc60bd60a429ab0c88f.jpg', title:'Test Movie'},
{id:'abc', image:'https://i.pinimg.com/originals/bc/d5/c9/bcd5c9519581acc60bd60a429ab0c88f.jpg', title:'Test Movie'},
{id:'abc', image:'https://i.pinimg.com/originals/bc/d5/c9/bcd5c9519581acc60bd60a429ab0c88f.jpg', title:'Test Movie'},
{id:'abc', image:'https://i.pinimg.com/originals/bc/d5/c9/bcd5c9519581acc60bd60a429ab0c88f.jpg', title:'Test Movie'},
{id:'abc', image:'https://i.pinimg.com/originals/bc/d5/c9/bcd5c9519581acc60bd60a429ab0c88f.jpg', title:'Test Movie'},
{id:'abc', image:'https://i.pinimg.com/originals/bc/d5/c9/bcd5c9519581acc60bd60a429ab0c88f.jpg', title:'Test Movie'},
{id:'abc', image:'https://i.pinimg.com/originals/bc/d5/c9/bcd5c9519581acc60bd60a429ab0c88f.jpg', title:'Test Movie'},
{id:'abc', image:'https://i.pinimg.com/originals/bc/d5/c9/bcd5c9519581acc60bd60a429ab0c88f.jpg', title:'Test Movie'},
{id:'abc', image:'https://i.pinimg.com/originals/bc/d5/c9/bcd5c9519581acc60bd60a429ab0c88f.jpg', title:'Test Movie'},
{id:'abc', image:'https://i.pinimg.com/originals/bc/d5/c9/bcd5c9519581acc60bd60a429ab0c88f.jpg', title:'Test Movie'},
];
displayList(tempData, 'comingSoon');