"use strict";

document.addEventListener("DOMContentLoaded", event => {
  button.addEventListener("click", function() {
    console.log(`clear ${player} board!`);
    document.querySelectorAll("[data-cell]").forEach(cell => {
      cell.innerHTML = "";
    });
  });

  let player = "🤶";
  document.querySelectorAll("[data-cell]").forEach(cell => {
    cell.addEventListener("click", event => {
      if (!event.target.innerHTML) {
        event.target.innerHTML = player;
        checkForWin();
        player = player === "🤶" ? "🎅" : "🤶";
      }
    });
  });

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

    const didPlayerWin = winningCombos.some(combo => {
      return (
        document.querySelector(`[data-cell="${combo[0]}"]`).innerHTML ===
          player &&
        document.querySelector(`[data-cell="${combo[1]}"]`).innerHTML ===
          player &&
        document.querySelector(`[data-cell="${combo[2]}"]`).innerHTML === player
      );
    });

    if (didPlayerWin) {
      console.log(`Player ${player} Wins!`);
      return true;
    }
    return false;
  }
});
