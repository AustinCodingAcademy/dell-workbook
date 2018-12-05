"use strict";

document.addEventListener("DOMContentLoaded", (event) => {
  // Your Code Here
  let player = "X";
  document.querySelectorAll("[data-cell]").forEach(cell => {
    cell.addEventListener("click", event => {
      if (!event.target.innerHTML) {
        event.target.innerHTML = player;
        checkForWin();
        player = player === "X" ? "O" : "X";
      }
    });
  });

  function checkForWin() {
    if (
      (document.querySelector('[data-cell="0"]').innerHTML === player &&
        document.querySelector('[data-cell="1"]').innerHTML &&
        document.querySelector('[data-cell="2"]').innerHTML) ||
      (document.querySelector('[data-cell="3"]').innerHTML === player &&
        document.querySelector('[data-cell="4"]').innerHTML &&
        document.querySelector('[data-cell="5"]').innerHTML) ||
      (document.querySelector('[data-cell="6"]').innerHTML === player &&
        document.querySelector('[data-cell="7"]').innerHTML &&
        document.querySelector('[data-cell="8"]').innerHTML) ||
      (document.querySelector('[data-cell="0"]').innerHTML === player &&
        document.querySelector('[data-cell="3"]').innerHTML &&
        document.querySelector('[data-cell="6"]').innerHTML) ||
      (document.querySelector('[data-cell="1"]').innerHTML === player &&
        document.querySelector('[data-cell="4"]').innerHTML &&
        document.querySelector('[data-cell="7"]').innerHTML) ||
      (document.querySelector('[data-cell="2"]').innerHTML === player &&
        document.querySelector('[data-cell="5"]').innerHTML &&
        document.querySelector('[data-cell="8"]').innerHTML) ||
      (document.querySelector('[data-cell="0"]').innerHTML === player &&
        document.querySelector('[data-cell="4"]').innerHTML &&
        document.querySelector('[data-cell="8"]').innerHTML) ||
      (document.querySelector('[data-cell="6"]').innerHTML === player &&
        document.querySelector('[data-cell="4"]').innerHTML &&
        document.querySelector('[data-cell="2"]').innerHTML)
    ) {
      console.log(`Player ${player} Wins!`);
      return true;
    }
    return false;
  }
});