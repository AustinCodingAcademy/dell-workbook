"use strict";

document.addEventListener("DOMContentLoaded", event => {
  // Your Code Here
  let player = "X";

  document.querySelectorAll("[data-cell]").forEach(cell => {
    cell.addEventListener("click", function(event) {
      let content = event.target.innerHTML;
      if (!content && player === "X") {
        event.target.innerHTML = "X";
        if (checkForWin()) {
          document.querySelector(
            "#announce-winner"
          ).innerHTML = `Player ${player} Won`;
          cell.removeEventListener("click", event);
        }
        player = "O";
      } else if (!content && player === "O") {
        event.target.innerHTML = "O";
        if (checkForWin()) {
          document.querySelector(
            "#announce-winner"
          ).innerHTML = `Player ${player} Win`;
          cell.removeEventListener("click", arguments.callee, false);
          "click", event;
        }
        player = "X";
      }
    });
  });

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

      //console.log(document.querySelector(firstCell).innerHTML + " " + document.querySelector(secondCell).innerHTML + " " + document.querySelector(thirdCell).innerHTML);

      if (
        document.querySelector(firstCell).innerHTML == player &&
        document.querySelector(secondCell).innerHTML == player &&
        document.querySelector(thirdCell).innerHTML == player
      ) {
        //console.log("Player "+ player + " wins.");
        done = true;
        return done;
      }
    });
    return done;
  }

  document.querySelector("#clear").addEventListener("click", function(event) {
    document.querySelector("#announce-winner").innerHTML = "";

    document.querySelectorAll("[data-cell]").forEach(cell => {
      cell.innerHTML = "";
    });
  });
});
