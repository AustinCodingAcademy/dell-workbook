"use strict";

document.addEventListener("DOMContentLoaded", function(event) {
  var player = "X";
  document.querySelectorAll("[data-cell]").forEach(function(box) {
    box.addEventListener("click", function() {
      // document.getElementsByClassName("box").innerHTML="<img src='x.png' />";
      // this.insertAdjacentHTML("afterbegin", `<div class="${state}"></div>`);
      if (!this.innerHTML) {
        this.innerHTML = player;
        if (checkForWin() == true) {
          console.log("Player " + player + " Wins!");
        }
        if (checkForFull() == true) {
          console.log("It's a draw!");
        }
        player = player === "X" ? "O" : "X";
      }
    });
  });

  function checkForWin() {
    if (
      document.querySelector('[data-cell="0"]').innerHTML === player &&
      document.querySelector('[data-cell="1"]').innerHTML === player &&
      document.querySelector('[data-cell="2"]').innerHTML === player
    ) {
      return true;
    } else if (
      document.querySelector('[data-cell="3"]').innerHTML === player &&
      document.querySelector('[data-cell="4"]').innerHTML === player &&
      document.querySelector('[data-cell="5"]').innerHTML === player
    ) {
      return true;
    } else if (
      document.querySelector('[data-cell="6"]').innerHTML === player &&
      document.querySelector('[data-cell="7"]').innerHTML === player &&
      document.querySelector('[data-cell="8"]').innerHTML === player
    ) {
      return true;
    } else if (
      document.querySelector('[data-cell="0"]').innerHTML === player &&
      document.querySelector('[data-cell="3"]').innerHTML === player &&
      document.querySelector('[data-cell="6"]').innerHTML === player
    ) {
      return true;
    } else if (
      document.querySelector('[data-cell="1"]').innerHTML === player &&
      document.querySelector('[data-cell="4"]').innerHTML === player &&
      document.querySelector('[data-cell="7"]').innerHTML === player
    ) {
      return true;
    } else if (
      document.querySelector('[data-cell="2"]').innerHTML === player &&
      document.querySelector('[data-cell="5"]').innerHTML === player &&
      document.querySelector('[data-cell="8"]').innerHTML === player
    ) {
      return true;
    } else if (
      document.querySelector('[data-cell="0"]').innerHTML === player &&
      document.querySelector('[data-cell="4"]').innerHTML === player &&
      document.querySelector('[data-cell="8"]').innerHTML === player
    ) {
      return true;
    } else if (
      document.querySelector('[data-cell="2"]').innerHTML === player &&
      document.querySelector('[data-cell="4"]').innerHTML === player &&
      document.querySelector('[data-cell="6"]').innerHTML === player
    ) {
      return true;
    } else return false;
  }

  function checkForFull() {
    if (
      document.querySelector('[data-cell="0"]').innerHTML &&
      document.querySelector('[data-cell="1"]').innerHTML &&
      document.querySelector('[data-cell="2"]').innerHTML &&
      document.querySelector('[data-cell="3"]').innerHTML &&
      document.querySelector('[data-cell="4"]').innerHTML &&
      document.querySelector('[data-cell="5"]').innerHTML &&
      document.querySelector('[data-cell="6"]').innerHTML &&
      document.querySelector('[data-cell="7"]').innerHTML &&
      document.querySelector('[data-cell="8"]').innerHTML
    ) {
      return true;
    } else return false;
  }
});

function clearBoard() {
  document.querySelectorAll("[data-cell]").forEach(cell => {
    cell.innerHTML = "";
  });
  document.querySelector("#announce-winner").innerHTML = "";
}
