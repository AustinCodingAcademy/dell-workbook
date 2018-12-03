'use strict';

document.addEventListener("DOMContentLoaded", (event) => {  //Ensures HTML runs completely prior to any JS
  let player = 'X';
  document.querySelectorAll('[data-cell]').forEach(cell => {  //for each section of the board, perform the below steps after the clicks
    cell.addEventListener('click', (event) => {
      if (!event.target.innerHTML) {
          event.target.innerHTML = player; //   on this click, add whatever the result of variable player
          winnerCheck();
          player = (player === 'X') ? 'O' : 'X'; //code used to toggle the players
        } 
      })
    })
    
  document.querySelectorAll('#clear').forEach(button => {
    button.addEventListener('click', (event) => {
      clear();
        
    })
  })
      
      function winnerCheck() {
        if (
          (document.querySelector('[data-cell="0"]').innerHTML === player) && (document.querySelector('[data-cell="1"]').innerHTML === player) && (document.querySelector('[data-cell="2"]').innerHTML === player) ||
          (document.querySelector('[data-cell="3"]').innerHTML === player) && (document.querySelector('[data-cell="4"]').innerHTML === player) && (document.querySelector('[data-cell="5"]').innerHTML === player) ||
          (document.querySelector('[data-cell="6"]').innerHTML === player) && (document.querySelector('[data-cell="7"]').innerHTML === player) && (document.querySelector('[data-cell="8"]').innerHTML === player) ||
          (document.querySelector('[data-cell="0"]').innerHTML === player) && (document.querySelector('[data-cell="4"]').innerHTML === player) && (document.querySelector('[data-cell="8"]').innerHTML === player) ||
          (document.querySelector('[data-cell="2"]').innerHTML === player) && (document.querySelector('[data-cell="4"]').innerHTML === player) && (document.querySelector('[data-cell="6"]').innerHTML === player) ||
          (document.querySelector('[data-cell="0"]').innerHTML === player) && (document.querySelector('[data-cell="3"]').innerHTML === player) && (document.querySelector('[data-cell="6"]').innerHTML === player) ||
          (document.querySelector('[data-cell="1"]').innerHTML === player) && (document.querySelector('[data-cell="4"]').innerHTML === player) && (document.querySelector('[data-cell="7"]').innerHTML === player) ||
          (document.querySelector('[data-cell="2"]').innerHTML === player) && (document.querySelector('[data-cell="5"]').innerHTML === player) && (document.querySelector('[data-cell="8"]').innerHTML === player)
        ) {
          console.log(`Player ${player} Wins!`);
          return true;
        }
        return false;
      }
      

      function clear() {
        if (
        (document.querySelector('[data-cell="0"]').innerHTML !== "")  ||
        (document.querySelector('[data-cell="1"]').innerHTML !== "") ||
        (document.querySelector('[data-cell="2"]').innerHTML !== "") ||
        (document.querySelector('[data-cell="3"]').innerHTML !== "") ||
        (document.querySelector('[data-cell="4"]').innerHTML !== "") ||
        (document.querySelector('[data-cell="5"]').innerHTML !== "") ||
        (document.querySelector('[data-cell="6"]').innerHTML !== "") ||
        (document.querySelector('[data-cell="7"]').innerHTML !== "") ||
        (document.querySelector('[data-cell="8"]').innerHTML !== "") 
        ) {
          document.querySelectorAll('data-cell').innerHTML = "" ;
        }
      }
});




