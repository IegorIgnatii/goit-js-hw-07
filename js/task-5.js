const bodyElem = document.querySelector('body');
const spanElem = document.querySelector('.color');
const btnElem = document.querySelector('.change-color');

btnElem.addEventListener('click', NewColorBody);

function NewColorBody() {
  bodyElem.style.backgroundColor = getRandomHexColor();
  spanElem.textContent = getRandomHexColor();
}
