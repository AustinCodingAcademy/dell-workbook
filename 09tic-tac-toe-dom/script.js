'use strict';
document.addEventListener("DOMContentLoaded", (event) => {
  let Player = 'X';
  document.querySelectorAll('[data-cell]').forEach((cell) => {
    cell.addEventListener('click', (event) => 
    {
      if (!event.target.innerHTML) 
      {
        event.target.innerHTML = Player;
        if (WinCheck()) {
          document.getElementById("announce-winner").innerHTML = `Player ${Player} Won!`;
          clearBoard();
        }   
        Player = (Player === 'X') ? 'O' : 'X';

      };
    });
  });
  function WinCheck() {
    const WinningMoves = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    let didPlayerWin = false;
    WinningMoves.forEach((combo) => {
      didPlayerWin = (didPlayerWin || (
        document.querySelector(`[data-cell="${combo[0]}"]`).innerHTML === Player &&
                document.querySelector(`[data-cell="${combo[1]}"]`).innerHTML === Player &&
                document.querySelector(`[data-cell="${combo[2]}"]`).innerHTML === Player
      ));

    });
    if (didPlayerWin) {
      console.log(`Player ${Player} Won!`);
      return true;
    }
    return false;
  }

    function clearBoard() {
    document.querySelectorAll('[data-cell]').forEach((cell) => {
      cell.innerHTML = "";
    });
  }
});
