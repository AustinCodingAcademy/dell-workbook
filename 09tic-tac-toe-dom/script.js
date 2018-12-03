"use strict";

document.addEventListener("DOMContentLoaded", () => {
  let player = "X";

  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  // Cell click handler
  let cells = document.querySelectorAll("[data-cell]");
  
  cells.forEach(cell =>  {
    cell.addEventListener("click", evt => {
      if (!evt.target.innerHTML) {
        evt.target.innerHTML = player;
        checkForWin()
      }
    })
  });

  function checkForWin() {
    const didPlayerWin = winningCombos.some(combo => {
      return combo.every(cell => {
        document.querySelector(`[data-cell="${cell}"]`).innerHTML === player
      })
    });
  
    if (didPlayerWin) {
      console.log(player);
    } else {
      player = player === "X" ? "O" : "X";
    }
  }

  // Clear button handler
  document.querySelector("#clear").addEventListener("click", () => {
    cells.forEach(cell => {
      cell.innerHTML = null;
      player = 1;
    })
  });
})