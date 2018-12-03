"use strict";

let player = "X";

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("clear").onclick = function(e) {
    document.querySelectorAll("[data-cell]").forEach(cell => {
      cell.innerHTML = "";
    });
  };

  document.querySelectorAll("[data-cell]").forEach(cell => {
    cell.addEventListener("click", event => {
      if (cell.innerHTML === "") {
        cell.innerHTML = player;
      } //only allows empty cell to be updated

      if (checkWin() === false) {
        if (player === "X") {
          player = "O";
        } else {
          player = "X";
        }
      } else {
        console.log("Congratulations Player " + player + "!! You won!!");
      }
    });
  });
});

function checkWin() {
  if (
    (document.querySelector('[data-cell="0"]').innerHTML != "" &&
      (document.querySelector('[data-cell="0"]').innerHTML ===
        document.querySelector('[data-cell="1"]').innerHTML &&
        document.querySelector('[data-cell="1"]').innerHTML ===
          document.querySelector('[data-cell="2"]').innerHTML)) ||
    (document.querySelector('[data-cell="3"]').innerHTML != "" &&
      (document.querySelector('[data-cell="3"]').innerHTML ===
        document.querySelector('[data-cell="4"]').innerHTML &&
        document.querySelector('[data-cell="4"]').innerHTML ===
          document.querySelector('[data-cell="5"]').innerHTML)) ||
    (document.querySelector('[data-cell="6"]').innerHTML != "" &&
      (document.querySelector('[data-cell="6"]').innerHTML ===
        document.querySelector('[data-cell="7"]').innerHTML &&
        document.querySelector('[data-cell="7"]').innerHTML ===
          document.querySelector('[data-cell="8"]').innerHTML)) ||
    (document.querySelector('[data-cell="0"]').innerHTML != "" &&
      (document.querySelector('[data-cell="0"]').innerHTML ===
        document.querySelector('[data-cell="3"]').innerHTML &&
        document.querySelector('[data-cell="3"]').innerHTML ===
          document.querySelector('[data-cell="6"]').innerHTML)) ||
    (document.querySelector('[data-cell="1"]').innerHTML != "" &&
      (document.querySelector('[data-cell="1"]').innerHTML ===
        document.querySelector('[data-cell="4"]').innerHTML &&
        document.querySelector('[data-cell="4"]').innerHTML ===
          document.querySelector('[data-cell="7"]').innerHTML)) ||
    (document.querySelector('[data-cell="2"]').innerHTML != "" &&
      (document.querySelector('[data-cell="2"]').innerHTML ===
        document.querySelector('[data-cell="5"]').innerHTML &&
        document.querySelector('[data-cell="5"]').innerHTML ===
          document.querySelector('[data-cell="8"]').innerHTML)) ||
    (document.querySelector('[data-cell="0"]').innerHTML != "" &&
      (document.querySelector('[data-cell="0"]').innerHTML ===
        document.querySelector('[data-cell="4"]').innerHTML &&
        document.querySelector('[data-cell="4"]').innerHTML ===
          document.querySelector('[data-cell="8"]').innerHTML)) ||
    (document.querySelector('[data-cell="2"]').innerHTML != "" &&
      (document.querySelector('[data-cell="2"]').innerHTML ===
        document.querySelector('[data-cell="4"]').innerHTML &&
        document.querySelector('[data-cell="4"]').innerHTML ===
          document.querySelector('[data-cell="6"]').innerHTML))
  ) {
    return true;
  } else {
    return false;
  }
}
