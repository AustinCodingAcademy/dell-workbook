"use strict";

document.addEventListener("DOMContentLoaded", function(event) {
  let player = "X";
  //var players=new Array(9);
  document.querySelectorAll("[data-cell]").forEach(cell => {
    cell.addEventListener("click", event => {
      player = player === "X" ? "O" : "X";
      event.target.innerHTML = player;
      checkforWin(player);
    });
  });

  document.querySelector("button").addEventListener("click", event => {
    document.querySelectorAll("[data-cell]").forEach(cell => {
      cell.innerHTML = "";
    });
  });
});

function checkforWin(player) {
  const winningCombos = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
  ];
  let didPlayerWin = false;
  winningCombos.forEach(combo => {
    didPlayerWin =
      didPlayerWin ||
      (document.querySelector(`[data-cell="${combo[0]}"]`).innerHTML ===
        player &&
        document.querySelector(`[data-cell="${combo[1]}"]`).innerHTML ===
          player &&
        document.querySelector(`[data-cell="${combo[2]}"]`).innerHTML ===
          player);
  });

  if (didPlayerWin) {
    document.querySelector(
      "#announce-winner"
    ).innerHTML = `Player '${player}' won`;
    return true;
  } else return false;
}
