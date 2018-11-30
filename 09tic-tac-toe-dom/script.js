"use strict";

document.addEventListener("DOMContentLoaded", event => {
  var turn = "x";
  document.querySelectorAll("[data-cell]").forEach(cell => {
    cell.addEventListener("click", event => {
      event.target.innerHTML = turn;
      turn = turn === "x" ? "o" : "x";
    });
  });
});
