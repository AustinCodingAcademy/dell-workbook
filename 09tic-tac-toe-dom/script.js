"use strict";

document.addEventListener("DOMContentLoaded", function(event) {
  // Your Code Here
  let player = "❌";
  document.querySelectorAll("[data-cell]").forEach(cell => {
  cell.addEventListener("click", event => {
  event.target.innerHTMLinsertAdjacentHTML('afterbegin', `<div class="data-cell ${player}"></div>`);
  player = (player === '❌') ? '✔️' : '❌';
  });
})
});
