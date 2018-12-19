'use strict';

document.addEventListener("DOMContentLoaded", (event) => {

  let player = 'X';



  document.querySelectorAll('[data-cell]').forEach(cell =>  {

    cell.addEventListener('click',(event) =>  {
      if (player === 'X') {
        event.target.innerHTML = 'X';
      } else {
        event.target.innerHTML = 'O';
      }
      checkwin();

      
      if (player === 'X') {
        player = 'O';
      } else {
        player = 'X';
      }
    })


    function checkwin (){
      const winningMoves = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [6,4,2]
      ]

      // let didPlayerWin = false;
      const didPlayerWin = winningMoves.some((combo) => {
        return (
          document.querySelector(`[data-cell="${combo[0]}"]`).innerHTML === player &&
        document.querySelector(`[data-cell="${combo[1]}"]`).innerHTML === player &&
        document.querySelector(`[data-cell="${combo[2]}"]`).innerHTML === player
        );

      });

      if (didPlayerWin) {
        // document.querySelector("announce-winner").innerHTML = ('Player Wins');
        console.log(`Player ${player} Wins!`);
        return true;
      }
      return false;

    }


  })


});  
