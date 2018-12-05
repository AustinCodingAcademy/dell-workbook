"use strict";

document.addEventListener("DOMContentLoaded", event => {
  // Your Code Here
  let player = "X";
  document.querySelectorAll("[data-cell]").forEach(cell => {
    
    cell.addEventListener("click", function(event) {
      if (document.querySelector(
            "#announce-winner"
          ).innerHTML === '')
      {
        addListener(event, cell);
      }
      else {
        alert("Game over! Please Clear Board to start again."};
      
    });
   
  });
  
function addListener(event, cell){
  let content = event.target.innerHTML;
      if (!content && player === "X") {
        event.target.innerHTML = "X";
        if (checkForWin()) {
          document.querySelector(
            "#announce-winner"
          ).innerHTML = `Player ${player} Won`;          
          cell.removeEventListener('click');
          console.log(document.querySelector('#announce-winner').innerHTML);
           
        }
        player = "O";
      } else if (!content && player === "O") {
        event.target.innerHTML = "O";
        if (checkForWin()) {
          document.querySelector(
            "#announce-winner"
          ).innerHTML = `Player ${player} Win`;
          cell.removeEventListener('click');
        }
        player = "X";
      }
}

  function checkForWin() {
    const winScenario = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    var done = false;
    winScenario.forEach(function(single) {
      var firstCell = '[data-cell="' + single[0] + '"]';
      var secondCell = '[data-cell="' + single[1] + '"]';
      var thirdCell = '[data-cell="' + single[2] + '"]';

      if (
        document.querySelector(firstCell).innerHTML == player &&
        document.querySelector(secondCell).innerHTML == player &&
        document.querySelector(thirdCell).innerHTML == player
      ) {
        //console.log("Player "+ player + " wins.");
        done = true;
        return done;
      }
    });
    return done;
  }

  document.querySelector("#clear").addEventListener("click", function(event) {
    document.querySelector("#announce-winner").innerHTML = "";

    document.querySelectorAll("[data-cell]").forEach(cell => {
      cell.innerHTML = "";
    });
  });
});
