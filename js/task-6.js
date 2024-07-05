const divBoxEl = document.querySelector('#boxes');
const inputEl = document.querySelector('input');
const btnDestroyEl = document.querySelector('[data-destroy]');
const buttCreateEl = document.querySelector('[data-create]');

buttDestroyEl.addEventListener('click', destroyBoxes);
