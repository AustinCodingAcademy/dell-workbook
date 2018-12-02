"use strict";

document.addEventListener("DOMContentLoaded", event => {
  let player = "X";
  document.querySelectorAll("[data-cell]").forEach(cell => {
    cell.addEventListener("click", event => {
      event.target.innerHTML = player;
      checkForWinner();
      player = player === "X" ? "O" : "X";
    });
  });
  clear.addEventListener("click", event => {
    //for each cell clear the contents and set player back to X
    let player = "X"
    for (var x = 0; x <= 8; x++) {
      document.querySelector(`[data-cell="${x}"]`).innerHTML = " ";
    }
    
  })


  function checkForWinner() {
    // 0,1,2 = winner
    // 3,4,5 = winner
    // 6,7,8 = winner
    // 0,3,6 = winner
    // 1,4,7 = winner
    // 2,5,8 = winner
    // 0,4,8 = winner
    // 6,4,2 = winner
    if (
    ((document.querySelector('[data-cell="0"]').innerHTML === player) && (document.querySelector('[data-cell="1"]').innerHTML === player) && (document.querySelector('[data-cell="2"]').innerHTML === player)) ||
    ((document.querySelector('[data-cell="3"]').innerHTML === player) && (document.querySelector('[data-cell="4"]').innerHTML === player) && (document.querySelector('[data-cell="5"]').innerHTML === player)) ||
    ((document.querySelector('[data-cell="6"]').innerHTML === player) && (document.querySelector('[data-cell="7"]').innerHTML === player) && (document.querySelector('[data-cell="8"]').innerHTML === player)) ||
    ((document.querySelector('[data-cell="0"]').innerHTML === player) && (document.querySelector('[data-cell="3"]').innerHTML === player) && (document.querySelector('[data-cell="6"]').innerHTML === player)) ||
    ((document.querySelector('[data-cell="1"]').innerHTML === player) && (document.querySelector('[data-cell="4"]').innerHTML === player) && (document.querySelector('[data-cell="7"]').innerHTML === player)) ||
    ((document.querySelector('[data-cell="2"]').innerHTML === player) && (document.querySelector('[data-cell="5"]').innerHTML === player) && (document.querySelector('[data-cell="8"]').innerHTML === player)) ||
    ((document.querySelector('[data-cell="0"]').innerHTML === player) && (document.querySelector('[data-cell="4"]').innerHTML === player) && (document.querySelector('[data-cell="8"]').innerHTML === player)) ||
    ((document.querySelector('[data-cell="6"]').innerHTML === player) && (document.querySelector('[data-cell="4"]').innerHTML === player) && (document.querySelector('[data-cell="2"]').innerHTML === player)) 
      ) {
        console.log(`Player ${player} Wins!`);
        return true;
    }
    return false;
  }



});
