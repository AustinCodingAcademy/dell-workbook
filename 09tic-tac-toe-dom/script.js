'use strict';

document.addEventListener("DOMContentLoaded", (event) => {
  // Your Code Here
  let player = 'X';
  document.querySelectorAll('[data-cell]').forEach(cell => {
    cell.addEventListener('click', (event) => {
      event.target.innerHTML = '🥦';
    })
  })
});