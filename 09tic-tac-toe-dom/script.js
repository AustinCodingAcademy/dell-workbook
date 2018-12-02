"use strict";

console.log("Connected");

document.addEventListener("DOMContentLoaded", function(evt) {
  var player = "X";
  // ClearBoard button event handler
  document.querySelector("#clear").addEventListener("click", function(evt) {
    document.querySelector("#announce-winner").innerHTML = "";
    document.querySelectorAll("[data-cell]").forEach(function(el) {
      el.innerHTML = " ";
    });
  }), // end of Clear Board button event handler
    // player move on data-cell
    document.querySelectorAll("[data-cell]").forEach(function(cell) {
      cell.addEventListener("click", function(evt) {
        evt.target.innerHTML = player;
        checkForWinner();
        player = player === "X" ? "O" : "X";
      });
      //end of foreach loop for player move
    });

  function checkForWinner() {
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

    const didPlayerWin = winningCombos.some(function(combo) {
      return (
        document.querySelector(`[data-cell="${combo[0]}"]`).innerHTML ===
          player &&
        document.querySelector(`[data-cell="${combo[1]}"]`).innerHTML ===
          player &&
        document.querySelector(`[data-cell="${combo[2]}"]`).innerHTML === player
      );
    });

    if (didPlayerWin) {
      document.querySelector(
        "#announce-winner"
      ).innerHTML = `Congrats. Player ${player} wins`;
      return true;
    }
    return false;
  }
  // end of document event handler.
});
