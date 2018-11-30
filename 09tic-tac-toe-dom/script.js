"use strict";

document.addEventListener("DOMContentLoaded", event => {
  let player = "X";
  document.querySelectorAll("[data-cell]").forEach(cell => {
    cell.addEventListener("click", event => {
      event.target.innerHTML = player;
      player = player === "X" ? "O" : "X";
    });
  });
  function checkForWinner() {
    // document.querySelector('[data-cell="5"]').innerHTML
    // 0,1,2 = winner
    // 3,4,5 = winner
    // 6,7,8 = winner
    // 0,3,6 = winner
    // 1,4,7 = winner
    // 2,5,8 = winner
    // 0,4,8 = winner
    // 6,4,2 = winner

    for (x = 0; x < 8; x++) {
      document.querySelector('[data-cell="$x"]').innerHTML;
    }
  }
});
