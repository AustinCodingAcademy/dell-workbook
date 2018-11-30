"use strict";

document.addEventListener("DOMContentLoaded", (event) => {
  var color = 'one';
  document.querySelectorAll('[data-cell]').forEach((cell) => {
    cell.addEventListener('click', (event) => {
      event.target.insertAdjacentHTML('afterbegin', `<div class="disc ${color}"></div>`);
      checkForWin();
      color = (color === 'one') ? 'two' : 'one';

    })
  })
});

function checkForWin() {

  const winningMoves = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
  ]

let didPlayerWin = false;
winningMoves.forEach((combo) => {
  didPlayerWin = didPlayerWin || (
    document.querySelector('[data-cell="${combo[0]}"]').innerHTML === color &&
    document.querySelector('[data-cell="${combo[1]}"]').innerHTML === color &&
    document.querySelector('[data-cell="${combo[2]}"]').innerHTML === color &&
    );
});


if (didPlayerWin) {
  console.log('Player ${color} wins!');
  return true;
}
return false;
}



//   if (
//     (document.querySelector('[data-cell="0"]').innerHTML === color && document.querySelector('[data-cell="1"]').innerHTML && document.querySelector('[data-cell="3"]').innerHTML) ||
//     (document.querySelector('[data-cell="3"]').innerHTML === color && document.querySelector('[data-cell="4"]').innerHTML && document.querySelector('[data-cell="5"]').innerHTML) ||
//     (document.querySelector('[data-cell="6"]').innerHTML === color && document.querySelector('[data-cell="7"]').innerHTML && document.querySelector('[data-cell="8"]').innerHTML) ||
//     (document.querySelector('[data-cell="0"]').innerHTML === color && document.querySelector('[data-cell="3"]').innerHTML && document.querySelector('[data-cell="6"]').innerHTML) ||
//     (document.querySelector('[data-cell="1"]').innerHTML === color && document.querySelector('[data-cell="4"]').innerHTML && document.querySelector('[data-cell="7"]').innerHTML) ||
//     (document.querySelector('[data-cell="2"]').innerHTML === color && document.querySelector('[data-cell="5"]').innerHTML && document.querySelector('[data-cell="8"]').innerHTML) ||
//     (document.querySelector('[data-cell="0"]').innerHTML === color && document.querySelector('[data-cell="4"]').innerHTML && document.querySelector('[data-cell="8"]').innerHTML) ||
//     (document.querySelector('[data-cell="2"]').innerHTML === color && document.querySelector('[data-cell="4"]').innerHTML && document.querySelector('[data-cell="6"]').innerHTML) ||
//   )
// }

function clear() {
  // insert clear here
}