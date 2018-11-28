"use strict";

// functionality to add later:
// - figure out which cell was clicked on most recently to optimize win algo
// - if isClicked = true, mouse:hover shows disabled symbol
// - font-awesome icons for X/O
// - show draw when all squares fill up with no winner
// 

const initialClickCount = 2;
let clickCount = initialClickCount;
let symbol;
let currentCellSymbol;
document.querySelectorAll("[data-cell]").forEach(cell => {
  cell.addEventListener("click", function() {
    if (cell.innerHTML === "X" || cell.innerHTML === "O") {
      let currentCellSymbol = this.innerHTML;
      window.currentCellSymbol = currentCellSymbol;
      window.symbol = window.currentCellSymbol;
    }

    determineSymbol();
    symbol = window.symbol;
    this.innerHTML = symbol;
    clickCount++;
    determineWinner();
  });
});

function determineSymbol() {
  if (window.currentCellSymbol === "X" || window.currentCellSymbol === "O") {
    window.currentCellSymbol = null;
    clickCount--;
  } else if (clickCount % 2 === 0) {
    let symbol = "X";
    window.symbol = symbol;

    //this would be cool..
    //<i class="fas fa-times"></i>;
  } else if (clickCount % 2 === 1) {
    let symbol = "O";
    window.symbol = symbol;

    //this would be cool..
    //<i class="far fa-circle"></i>;
  }
}

// ------ THIS WORKS!!!!! ---------
function clearBoard() {
  document.querySelectorAll("[data-cell]").forEach(cell => {
    cell.innerHTML = "";
  });
  clickCount = initialClickCount;
  window.clickCount = clickCount;
  document.querySelector("#announce-winner").innerHTML = "";
}

function determineWinner() {

  // --------- Variables -------------
  let ax = document.querySelector(".a-x").innerHTML;
  let bx = document.querySelector(".b-x").innerHTML;
  let cx = document.querySelector(".c-x").innerHTML;
  let ay = document.querySelector(".a-y").innerHTML;
  let by = document.querySelector(".b-y").innerHTML;
  let cy = document.querySelector(".c-y").innerHTML;
  let az = document.querySelector(".a-z").innerHTML;
  let bz = document.querySelector(".b-z").innerHTML;
  let cz = document.querySelector(".c-z").innerHTML;

  if (
    // check if center cell has a value of 'X' or 'O' or not
    ((by === 'X') || (by === 'O')) && 
    // check if opposites from center equal one another:

    // "/"
    (((az === by) && (by === cx)) 
    ||
    // "\"
    ((ax === by) && (by === cz)) 
    ||
    // "---"
    ((bx === by) && (by === bz)) 
    ||
    // "|"
    ((ay === by) && (by === cy)))
  ) {
    let winningSymbol = by; //you can add a error checker here later
    document.querySelector("#announce-winner").innerHTML = "Player " + winningSymbol + " Wins!!";
    return;
  } else if (

    ((ax === 'X') || (ax === 'O')) && 
    (((az === ay) && (ay === ax)) || ((ax === bx) && (bx === cx)))
  ) {
    let winningSymbol = ax; //you can add an error checker here later
    document.querySelector("#announce-winner").innerHTML = "Player " + winningSymbol + " Wins!!";
    return;
  }
  else if (
    ((cz === 'X') || (cz === 'O')) && 
    (((cy === cz) && (cz === cx)) || ((az === bz) && (bz === cz)))
  ) {
    let winningSymbol = cz; //you can add an error checker here later
    document.querySelector("#announce-winner").innerHTML = "Player " + winningSymbol + " Wins!!";
    return;
  }
  
  // ----------------- IT'S A DRAW!!!! --------------------------
  draw();
}

function draw() {
  const initialDrawCount = 0;
  let drawCount = initialDrawCount;
  let rando;
  document.querySelectorAll("[data-cell]").forEach(draw => {
    let rando = draw.innerHTML;
    if (rando === "X" || rando === "O") {
      drawCount++;
      if (drawCount === 9) {
        document.querySelector("#announce-winner").innerHTML = "It's a DRAW!";
      }
    }
  });
  
}
