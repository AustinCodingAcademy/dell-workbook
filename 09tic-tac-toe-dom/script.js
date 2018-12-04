'use strict';
//each time you play something, you need to check for a win. did you win? if not, change the player
//clear the board, gotta get everything off the board

document.addEventListener("DOMContentLoaded", function(event) { 
  let player ='X';

  document.querySelectorAll('[data-cell]').forEach(cell => {
    cell.addEventListener('click', (event) => {
      //checks if space is taken and prevents overwrite 
      if (event.target.innerHTML != "") return;
      
      //let's player pick spot and switches to next player
      if (player === 'X') {
        event.target.innerHTML = player;
        checkWin();
        player = 'O';
      } else {
        event.target.innerHTML = player;
        checkWin();
        player = 'X';
      }

      function checkWin() {
        const winningCombos = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [2, 5, 8],
          [1, 4, 7],
          [0, 4, 8],
          [6, 4, 2]
        ]
        const didPlayerWin = winningCombos.some((combo) => {
        return (
            document.querySelector(`[data-cell="${combo[0]}"]`).innerHTML === player && 
            document.querySelector(`[data-cell="${combo[1]}"]`).innerHTML === player && 
            document.querySelector(`[data-cell="${combo[2]}"]`).innerHTML === player
          );
      });
      if (didPlayerWin) {
        console.log(`Player ${player} Wins!`);
        return true;
        }
        return false; 
      }

      document.querySelector('#clear').addEventListener('click', (event) => {
      document.querySelectorAll('[data-cell]').forEach(cell => {
      cell.innerHTML = "";
     })
    
        
  })
  })
  })
});