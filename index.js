// Import stylesheets
import './style.css';

// Write Javascript code!

var xo = document.querySelector('.xo');

createTable();

var xoItem = document.querySelectorAll('.xo__item');
var symbol = 'O';

for (var i = 0; i < xoItem.length; i++) {
  xoItem[i].addEventListener('click', insertSymbol);
}

function createTable() {
  var text = '';
  for (var i = 0; i < 9; i++) {
    text += '<div class="xo__item"></div>';
  }
  xo.innerHTML = text;
}

function insertSymbol() {
  // this.innerHTML = 'X';
  if (symbol == 'O') {
    symbol = 'X';
  } else {
    symbol = 'O';
  }
  this.innerHTML = symbol;
  checkLines();
}

function checkLines() {
  if (
    xoItem[0].innerHTML == xoItem[1].innerHTML &&
    xoItem[0].innerHTML == xoItem[2].innerHTML &&
    xoItem[0].innerHTML !== ''
  ) {
    // console.log('Pogodak!');
    xoItem[0].style.background = 'tomato';
    xoItem[1].style.background = 'tomato';
    xoItem[2].style.background = 'tomato';
  } else if (
    xoItem[3].innerHTML == xoItem[4].innerHTML &&
    xoItem[3].innerHTML == xoItem[5].innerHTML &&
    xoItem[3].innerHTML !== ''
  ) {
    // console.log('Pogodak!');
    xoItem[3].style.background = 'tomato';
    xoItem[4].style.background = 'tomato';
    xoItem[5].style.background = 'tomato';
  } else if (
    xoItem[6].innerHTML == xoItem[7].innerHTML &&
    xoItem[6].innerHTML == xoItem[8].innerHTML &&
    xoItem[6].innerHTML !== ''
  ) {
    // console.log('Pogodak!');
    xoItem[6].style.background = 'tomato';
    xoItem[7].style.background = 'tomato';
    xoItem[8].style.background = 'tomato';
  }
}
