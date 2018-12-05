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


      // if (document.querySelector('[data-cell="0"]') === document.querySelector('[data-cell="1"]')) {
      //   console.log('Win');
      // }


      checkwin()
      //check if won
      //if won show message
      //if didn't win change player to next one 

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

    //   if (document.querySelector('[data-cell="0"]').innerHTML === player && document.querySelector('[data-cell="1"]').innerHTML === player) {
    //     console.log(`Player ${player} Wins!`);
    //     return true;
    //   }
    //   return false;
    }


  })


});  
