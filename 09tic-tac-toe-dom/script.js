"use strict";

// functionality to add later:
// 1) if isClicked = true, mouse:hover shows disabled symbol
// 2) font-awesome icons for X/O
// 3) show draw when all squares fill up with no winner

//variable changes(d):
// const Counter =is=now= const initialClickCount
// symbolCounter =is=now= clickCount
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
    // symbol = window.symbol;
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
  let winningSymbol;
  // 1) if class A, B, or C all have the same innerHTML
  // 2) if class 1, 2, or 3 all have the same inner HTML
  // 3) if both class 1, 2, 3 & A, B, C in order or reverse order, but must be order!

  // ------------------- diagnol victory -----------------------------

  // X wins diagnolly: '/'
  if (
    document.querySelector(".A-Z").innerHTML === "X" &&
    document.querySelector(".B-Y").innerHTML === "X" &&
    document.querySelector(".C-X").innerHTML === "X"
  ) {
    let winningSymbol = document.querySelector(".B.Y").innerHTML; //you can add a error checker here later
    document.querySelector("#announce-winner").innerHTML =
      "Player " + winningSymbol + " Wins";
    return;
  }
  // O wins diagnolly: '/'
  if (
    document.querySelector(".A-Z").innerHTML === "O" &&
    document.querySelector(".B-Y").innerHTML === "O" &&
    document.querySelector(".C-X").innerHTML === "O"
  ) {
    let winningSymbol = document.querySelector(".B-Y").innerHTML; //you can add a error checker here later
    document.querySelector("#announce-winner").innerHTML =
      "Player " + winningSymbol + " Wins";
    return;
  }

  // X wins diagnolly: '\'
  if (
    document.querySelector(".A-X").innerHTML === "X" &&
    document.querySelector(".B-Y").innerHTML === "X" &&
    document.querySelector(".C-Z").innerHTML === "X"
  ) {
    let winningSymbol = document.querySelector(".B-Y").innerHTML; //you can add a error checker here later
    document.querySelector("#announce-winner").innerHTML =
      "Player " + winningSymbol + " Wins";
    return;
  }
  // O wins diagnolly: '\'
  if (
    document.querySelector(".A-X").innerHTML === "O" &&
    document.querySelector(".B-Y").innerHTML === "O" &&
    document.querySelector(".C-Z").innerHTML === "O"
  ) {
    let winningSymbol = document.querySelector(".B-Y").innerHTML; //you can add a error checker here later
    document.querySelector("#announce-winner").innerHTML =
      "Player " + winningSymbol + " Wins";
    return;
  }

  // ------------------- vertical victory -----------------------------

  // X wins vertically on first column: '1st | X'
  if (
    document.querySelector(".A-X").innerHTML === "X" &&
    document.querySelector(".A-Y").innerHTML === "X" &&
    document.querySelector(".A-Z").innerHTML === "X"
  ) {
    let winningSymbol = document.querySelector(".A-Y").innerHTML; //you can add a error checker here later
    document.querySelector("#announce-winner").innerHTML =
      "Player " + winningSymbol + " Wins";
    return;
  }
  // O wins vertically on first column: '1st | O'
  if (
    document.querySelector(".A-X").innerHTML === "O" &&
    document.querySelector(".A-Y").innerHTML === "O" &&
    document.querySelector(".A-Z").innerHTML === "O"
  ) {
    let winningSymbol = document.querySelector(".A-Y").innerHTML; //you can add a error checker here later
    document.querySelector("#announce-winner").innerHTML =
      "Player " + winningSymbol + " Wins";
    return;
  }
  // X wins vertically on second column: '2nd | X'
  if (
    document.querySelector(".B-X").innerHTML === "X" &&
    document.querySelector(".B-Y").innerHTML === "X" &&
    document.querySelector(".B-Z").innerHTML === "X"
  ) {
    let winningSymbol = document.querySelector(".B-Y").innerHTML; //you can add a error checker here later
    document.querySelector("#announce-winner").innerHTML =
      "Player " + winningSymbol + " Wins";
    return;
  }
  // O wins vertically on second column: '2nd | O'
  if (
    document.querySelector(".B-X").innerHTML === "O" &&
    document.querySelector(".B-Y").innerHTML === "O" &&
    document.querySelector(".B-Z").innerHTML === "O"
  ) {
    let winningSymbol = document.querySelector(".B.Y").innerHTML; //you can add a error checker here later
    document.querySelector("#announce-winner").innerHTML =
      "Player " + winningSymbol + " Wins";
    return;
  }
  // X wins vertically on third column: '3rd | X'
  if (
    document.querySelector(".C-X").innerHTML === "X" &&
    document.querySelector(".C-Y").innerHTML === "X" &&
    document.querySelector(".C-Z").innerHTML === "X"
  ) {
    let winningSymbol = document.querySelector(".C-Y").innerHTML; //you can add a error checker here later
    document.querySelector("#announce-winner").innerHTML =
      "Player " + winningSymbol + " Wins";
    return;
  }
  // O wins vertically on third column: '3rd | O'
  if (
    document.querySelector(".C-X").innerHTML === "O" &&
    document.querySelector(".C-Y").innerHTML === "O" &&
    document.querySelector(".C-Z").innerHTML === "O"
  ) {
    let winningSymbol = document.querySelector(".C-Y").innerHTML; //you can add a error checker here later
    document.querySelector("#announce-winner").innerHTML =
      "Player " + winningSymbol + " Wins";
    return;
  }

  // ------------------- horizontal victory -----------------------------

  // X wins horizontally on first row: '1st --- X'
  if (
    document.querySelector(".A-X").innerHTML === "X" &&
    document.querySelector(".B-X").innerHTML === "X" &&
    document.querySelector(".C-X").innerHTML === "X"
  ) {
    let winningSymbol = document.querySelector(".B-X").innerHTML; //you can add a error checker here later
    document.querySelector("#announce-winner").innerHTML =
      "Player " + winningSymbol + " Wins";
    return;
  }
  // O wins horizontally on first row: '1st --- O'
  if (
    document.querySelector(".A-X").innerHTML === "O" &&
    document.querySelector(".B-X").innerHTML === "O" &&
    document.querySelector(".C-X").innerHTML === "O"
  ) {
    let winningSymbol = document.querySelector(".B-X").innerHTML; //you can add a error checker here later
    document.querySelector("#announce-winner").innerHTML =
      "Player " + winningSymbol + " Wins";
    return;
  }
  // X wins horizontally on second row: '2nd --- X'
  if (
    document.querySelector(".A-Y").innerHTML === "X" &&
    document.querySelector(".B-Y").innerHTML === "X" &&
    document.querySelector(".C-Y").innerHTML === "X"
  ) {
    let winningSymbol = document.querySelector(".B-Y").innerHTML; //you can add a error checker here later
    document.querySelector("#announce-winner").innerHTML =
      "Player " + winningSymbol + " Wins";
    return;
  }
  // O wins horizontally on second row: '2nd --- O'
  if (
    document.querySelector(".A-Y").innerHTML === "O" &&
    document.querySelector(".B-Y").innerHTML === "O" &&
    document.querySelector(".C-Y").innerHTML === "O"
  ) {
    let winningSymbol = document.querySelector(".B-Y").innerHTML; //you can add a error checker here later
    document.querySelector("#announce-winner").innerHTML =
      "Player " + winningSymbol + " Wins";
    return;
  }
  // X wins horizontally on third row: '3rd --- X'
  if (
    document.querySelector(".A-Z").innerHTML === "X" &&
    document.querySelector(".B-Z").innerHTML === "X" &&
    document.querySelector(".C-Z").innerHTML === "X"
  ) {
    let winningSymbol = document.querySelector(".B-Z").innerHTML; //you can add a error checker here later
    document.querySelector("#announce-winner").innerHTML =
      "Player " + winningSymbol + " Wins";
    return;
  }
  // O wins horizontally on third row: '3rd --- O'
  if (
    document.querySelector(".A-Z").innerHTML === "O" &&
    document.querySelector(".B-Z").innerHTML === "O" &&
    document.querySelector(".C-Z").innerHTML === "O"
  ) {
    let winningSymbol = document.querySelector(".B-Z").innerHTML; //you can add a error checker here later
    document.querySelector("#announce-winner").innerHTML =
      "Player " + winningSymbol + " Wins";
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
