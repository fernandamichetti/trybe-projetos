/*Variaveis */
const clearBoard = document.getElementById('clear-board');
const pixelBoard = document.querySelector('#pixel-board');
const allPixels = document.querySelectorAll('.pixel');
const sectionbuttons = document.getElementById('extras');
const inputBoard = document.querySelector('#board-size');
const buttonValue = document.getElementById('generate-board');

/* Cores aleatórios */
function randomColors() {
  const randomColors = Math.floor(Math.random() * 255);
  return randomColors;
}

function colors() {
  const secondColor = document.getElementById('secondColor');
  const thirdColor = document.getElementById('thirdColor');
  const firstColor = document.getElementById('firstColor');
  firstColor.style.backgroundColor = `rgb(${randomColors()}, ${randomColors()}, ${randomColors()})`;
  secondColor.style.backgroundColor = `rgb(${randomColors()}, ${randomColors()}, ${randomColors()})`;
  thirdColor.style.backgroundColor = `rgb(${randomColors()}, ${randomColors()}, ${randomColors()})`;
}
colors();
const black = document.getElementById('blackColor');
black.style.backgroundColor = 'black';

/*Página sempre inicia com o preto selecionado*/
window.onload = function () {
  black.className = 'color' + ' selected';
};

/*Mudando a classe de cada cor */
firstColor.addEventListener('click', function () {
  firstColor.className = 'color' + ' selected';
  secondColor.className = 'color';
  thirdColor.className = 'color';
  black.className = 'color';
});

secondColor.addEventListener('click', function () {
  firstColor.className = 'color';
  secondColor.className = 'color' + ' selected';
  thirdColor.className = 'color';
  black.className = 'color';
});

thirdColor.addEventListener('click', function () {
  firstColor.className = 'color';
  thirdColor.className = 'color' + ' selected';
  secondColor.className = 'color';
  black.className = 'color';
});

black.addEventListener('click', function () {
  black.className = 'color' + ' selected';
  firstColor.className = 'color';
  secondColor.className = 'color';
  thirdColor.className = 'color';
});

/*Cor clicada é a cor do pixel*/
function changeColor(event) {
  const selected = document.querySelector('.selected');
  event.target.style.backgroundColor = selected.style.backgroundColor;
}

/*BOARD*/
for (let i = 0; i < 25; i += 1) {
  const pixel = document.createElement('div');
  pixel.className = 'pixel';
  pixel.addEventListener('click', changeColor);
  pixelBoard.appendChild(pixel);
}

buttonValue.addEventListener('click', function () {
  deleteBoard();
  const inputValue = document.getElementById('board-size').value;
  const valueToBoard = inputValue * inputValue;
  if (inputValue === '') {
    alert('Board inválido!');
  } else {
    for (let i = 0; i < valueToBoard; i += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixel.addEventListener('click', changeColor);
      pixelBoard.appendChild(pixel);
    }
  }
});

/*Botão para deixar o board branco*/
clearBoard.addEventListener('click', clearingBoard);
function clearingBoard() {
  for (pixel of allPixels) {
    pixel.style.backgroundColor = 'white';
  }
}
