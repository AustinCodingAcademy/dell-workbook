"use strict";

document.addEventListener("DOMContentLoaded", event => {
  button.addEventListener("click", function() {
    document.querySelectorAll("[data-cell]").forEach(cell => {
      cell.innerHTML = "";
      document.querySelector("#announce-winner").innerHTML = "";
      cell.addEventListener("click", clickEvent);
    });
  });

  let player = "🤶";
  document.querySelectorAll("[data-cell]").forEach(cell => {
    cell.addEventListener("click", clickEvent);
  });

  function clickEvent(event) {
    if (!event.target.innerHTML) {
      event.target.innerHTML = player;
      if (checkForWin()) {
        document.querySelector(
          "#announce-winner"
        ).innerHTML = `Player ${player} Wins!`;
        document.querySelectorAll("[data-cell]").forEach(cell => {
          cell.removeEventListener("click", clickEvent, false);
        });
      } else {
        player = player === "🤶" ? "🎅" : "🤶";
      }
    }
  }

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
