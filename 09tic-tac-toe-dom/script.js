"use strict";

document.addEventListener("DOMContentLoaded", event => {
  let player = "X";

  document.querySelectorAll("[data-cell]").forEach(cell => {
    cell.addEventListener("click", onClick);
  });

  function onClick(event) {
    if (!event.target.innerHTML) {
      event.target.innerHTML = player;
      if (checkForWin()) {
        document.querySelector(
          "#announce-winner"
        ).innerHTML = `Player ${player} Won`;
        document.querySelectorAll("[data-cell]").forEach(cell => {
          cell.removeEventListener("click", onClick, false);
        });
      } else if (checkForTie()) {
        console.log("Tie");
      } else {
        player = player === "X" ? "O" : "X";
      }
    }
  }

  function checkForWin() {
    const winScenario = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    var done = false;
    winScenario.forEach(function(single) {
      var firstCell = '[data-cell="' + single[0] + '"]';
      var secondCell = '[data-cell="' + single[1] + '"]';
      var thirdCell = '[data-cell="' + single[2] + '"]';

      if (
        document.querySelector(firstCell).innerHTML == player &&
        document.querySelector(secondCell).innerHTML == player &&
        document.querySelector(thirdCell).innerHTML == player
      ) {
        //console.log("Player "+ player + " wins.");
        done = true;
      }
    });
    return done;
  }

  function checkForTie() {
    var dataCellArray = Array.prototype.slice.call(
      document.querySelectorAll("[data-cell]")
    );
    return dataCellArray.every(single => single.innerHTML);
  }

  document.querySelector("#clear").addEventListener("click", function(event) {
    document.querySelector("#announce-winner").innerHTML = "";

    document.querySelectorAll("[data-cell]").forEach(cell => {
      cell.innerHTML = "";
      cell.addEventListener("click", onClick);
    });
  });
});
