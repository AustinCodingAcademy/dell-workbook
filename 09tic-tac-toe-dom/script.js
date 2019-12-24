"use strict";

document.addEventListener("DOMContentLoaded", function (event) {
  var el = function (element) {
    if (element.charAt(0) === "#") {
      // if passed an ID (hashtag) return single element
      return document.querySelector(element);
    }
    // otherwise, returns a nodelist
    return document.querySelectorAll(element);
  };

  /* variables
/*================================================= */
  var winner = el("#announce-winner"),
    clear = el("#clear"),
    square = el("[data-cell]");

  /* add player moves
/*================================================= */

  var player = "O";

  var addPlayerMoves = function () {
    var cellNum = this.getAttribute("data-cell");
    let detectWinner = winner.innerText.length;

    if (square[cellNum].innerText === "" && detectWinner === 0) {
      player = player === "O" ? "X" : "O";
      square[cellNum].innerText = player;
      square[cellNum].style.background = "transparent";
    }

    gameStatus();
    winner.innerText = gameStatus();
  };

  /* look for winner
/*================================================= */

  var gameStatus = function () {
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

    let didPlayerWin = false;

    winningCombos.forEach(combo => {
      didPlayerWin =
        didPlayerWin ||
        (document.querySelector(`[data-cell="${combo[0]}"]`).innerText === player &&
          document.querySelector(`[data-cell="${combo[1]}"]`).innerText === player &&
          document.querySelector(`[data-cell="${combo[2]}"]`).innerText == player);
    });

    if (didPlayerWin === true) {
      clear.style.boxShadow = "inset 0 -8px 0 0 var(--main), inset 0 -11px 0 0 var(--red)";
      let txt = player + " is the winner!";
      return txt;
    } else return "";
    // return didPlayerWin === true ? player + " is the winner!" : "";
  };

  /* clear board
/*================================================= */
  var clearBoard = function () {
    square.forEach(function (cell) {
      cell.innerText = "";
      winner.innerText = "";
      player = "O";
      clear.style.boxShadow = "inset 0 -8px 0 0 var(--main), inset 0 -11px 0 0 white";
    });
  };

  /* event loaders
/*================================================= */

  square.forEach(cell => cell.addEventListener("click", addPlayerMoves));
  clear.addEventListener("click", clearBoard);
});