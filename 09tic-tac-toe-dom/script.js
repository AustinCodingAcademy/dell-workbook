'use strict';

document.addEventListener("DOMContentLoaded", (event) => {
  let player = '😼';
  document.querySelectorAll('[data-cell]').forEach(cell => {
    cell.addEventListener('click', (event) => {
      if(!event.target.innerHTML){
        event.target.innerHTML = player;
        checkForWin();
        player = (player === '😼') ? '😐' : '😼';
      }
    })
  })

  function checkForWin() {
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [6, 4, 2]
    ];

    let didPlayerWin = false;
    winningCombos.forEach((combo) => {
      didPlayerWin = didPlayerWin || (document.querySelector(`[data-cell="${combo[0]}"]`).innerHTML === player && 
      document.querySelector(`[data-cell="${combo[1]}"]`).innerHTML && 
      document.querySelector(`[data-cell="${combo[2]}"]`).innerHTML
      );
    });

  //   const didPlayerWin = winningCombos.some((combo) => {
  //     return combo.every(cell => {
  //       document.querySelector(`[data-cell="${cell}"]`).innerHTML === player
  //     })
  //   });

    if (didPlayerWin) {
      alert(`Player ${player} Wins!`);
      return true;
    }
    return false;
  }

});