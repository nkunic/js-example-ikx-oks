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
    symbol = 'O'
  }
  this.innerHTML = symbol;
}
