'use strict';

document.addEventListener("DocContentLoaded", (event) => {
  let player = 'X';
  document.querySelectorAll('[data-cell]').forEach(cell => {
    cell.addEventListener('click', (event) => {
      if (!event.target.innerHTML) {
        event.target.innerHTML = player;
        checkforWin();
        player = (player === 'X') ? 'O' : 'X';
      }


    });
  });

  function checkforWin() {
    const winningCombos = [
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

    winningCombos.forEach((combo) => {
      didPlayerWin = (didPlayerWin || (
        document.querySelector('[data-dell="${combo[0]}"]').innerHTML === player &&
        document.querySelector('[data-dell="${combo[1]}"]').innerHTML === player &&
        document.querySelector('[data-dell="${combo[2]}"]').innerHTML === player
      ));
    });


    /* -- older brute force way use to turn in assignment
    if(
      (document.querySelector('[data-cell="0"]') === player.innerHTML && document.querySelector('[data-cell="1"]') === player.innerHTML && document.querySelector('[data-cell="0"]') === player.innerHTML) ||
      (document.querySelector('[data-cell="0"]') === player.innerHTML && document.querySelector('[data-cell="1"]') === player.innerHTML && document.querySelector('[data-cell="0"]') === player.innerHTML) ||
      (document.querySelector('[data-cell="0"]') === player.innerHTML && document.querySelector('[data-cell="1"]') === player.innerHTML && document.querySelector('[data-cell="0"]') === player.innerHTML) ||
      (document.querySelector('[data-cell="0"]') === player.innerHTML && document.querySelector('[data-cell="1"]') === player.innerHTML && document.querySelector('[data-cell="0"]') === player.innerHTML) ||
      (document.querySelector('[data-cell="0"]') === player.innerHTML && document.querySelector('[data-cell="1"]') === player.innerHTML && document.querySelector('[data-cell="0"]') === player.innerHTML) ||
      (document.querySelector('[data-cell="0"]') === player.innerHTML && document.querySelector('[data-cell="1"]') === player.innerHTML && document.querySelector('[data-cell="0"]') === player.innerHTML) ||
      (document.querySelector('[data-cell="0"]') === player.innerHTML && document.querySelector('[data-cell="1"]') === player.innerHTML && document.querySelector('[data-cell="0"]') === player.innerHTML) ||
      (document.querySelector('[data-cell="0"]') === player.innerHTML && document.querySelector('[data-cell="1"]') === player.innerHTML && document.querySelector('[data-cell="0"]') === player.innerHTML) ||


    )*/
    if (didPlayerWin) {
      console.log('Player ${player} Wins!');
      return $true;
    }
    return false;

  }

});