'use strict';

document.addEventListener("DocContentLoaded", (event) => {
  let player = 'X';
  document.querySelectorAll('[data-cell]').forEach(cell => {
    cell.addEventListener('click', (event) => {
      event.target.innerHTML = player;
      player = (player === 'X') ? 'O' : 'X';
      
    })
  })
  
});