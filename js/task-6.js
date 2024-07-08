function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector('input');

const btnDestroyEl = document.querySelector('[data-destroy]');
const btnCreateEl = document.querySelector('[data-create]');

const divBoxEl = document.querySelector('#boxes');

const divNewEl = document.querySelector('div#boxes');

btnCreateEl.addEventListener('click', createBox);

btnDestroyEl.addEventListener('click', destroyBox);

// function createBox() {
//   return `<div class="box"></div>`;
// }

function createNextBox() {
  const condition = Number(inputEl.value);
  if (condition < 1 || condition >= 100) {
    return alert('error');
  } else {
    const divBoxEl = document.querySelector('#boxes');

    let p = 30;
    for (let i = 0; i < condition; i++) {
      nextDiv.style.height = `${p + 10 * i} px`;
      nextDiv.style.width = `${p + 10 * i} px`;
      divBoxEl.appendChild(nextDiv);
      nextDiv.style.backgroundColor = getRandomHexColor;
    }
  }
}

function destroyBox() {
  inputEl.innerHTML('');
  inputEl.value('');
}
