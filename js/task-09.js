function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');
const btnChangeColor = document.querySelector('.change-color');
const color = document.querySelector('.color');

btnChangeColor.addEventListener('click', changeColor);

function changeColor () { 
  let currentColor = getRandomHexColor();

  body.style.backgroundColor = currentColor;
  color.textContent = currentColor;
};