'use strict';

document.addEventListener("DOMContentLoaded", function (event) {

  let player = 'X';

  document.querySelectorAll('[data-cell]').forEach(cell => {
    cell.addEventListener('click', (event) => {
      
      if (!event.target.innerHTML){
        event.target.innerHTML = player;
      }
      

      if (winCheck()) {
        document.querySelector("#announce-winner").innerHTML = `Player ${player} Wins!`;
      }
      else {
        player = (player === 'X') ? 'O' : 'X';
      }
    })
  })

  document.querySelector('#clear').addEventListener('click', (event) => {
    document.querySelectorAll('[data-cell]').forEach(cell => {
      cell.innerHTML = "";
    })
  })

  function winCheck() {

    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]

    const didPlayerWin = winningCombos.some((combo) => {
       return (
         document.querySelector(`[data-cell="${combo[0]}"]`).innerHTML === player &&
         document.querySelector(`[data-cell="${combo[1]}"]`).innerHTML === player &&
         document.querySelector(`[data-cell="${combo[2]}"]`).innerHTML === player
       );
    });

    
  }

});
