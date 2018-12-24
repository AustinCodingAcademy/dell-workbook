"use strict";

// functionality to add later:
// - font-awesome icons for X/O
// document.querySelectorAll('[data-cell]').forEach(cell => {
//   cell.addEventListener('click', function() {
//     this.innerHTML = '<i class="far fa-circle"></i>';
//     });
//   });
// - show draw when all squares fill up with no winner

// -----------START TIC-TAC-TOE GAME ---------------------

// ---------- GLOBAL VARIABLES ------------------------
var Player;
var winningSymbol;

// first the page loads up the  HTML and CSS
document.addEventListener("DOMContentLoaded", event => {
  Player = "X";
  // then every cell gets a listener attached to it..
  document.querySelectorAll("[data-cell]").forEach(cell => {
    cell.addEventListener("click", event => {
      // if cell block is empty AND there is no winner, do the following:
      if (!event.target.innerHTML && !winningSymbol) {
        event.target.innerHTML = Player;
        determineWinner();
        //ternary: switch symbols back and forth for both players
        Player = Player === "X" ? "O" : "X";

        // TO DO: don't allow any more moves after you win..
        // if (determineWinner() === true) {
        //   startOver();
        // }
        // If you try to click after someone has already won:
      } else if (winningSymbol) {
        setTimeout(function() {
          if (
            confirm(
              "This game is over! Player '" +
                winningSymbol +
                "' has already won! Want to play again?"
            )
          ) {
            clearBoard();
          }
        }, 20); //pause for after winning for 20 milliseconds AKA .02 seconds to let rest of DOM loads first
      }

      // this is all that happens every time a cell is clicked..

      // first check whether or not a cell has already been clicked so that you can't overwrite existing data..

      //need to assign this variable somewhere, perhaps globally and then ternary

      // this function determines if either symbol wins or if there is a tie.
    });
  });

  // to do..
  // function checkCellContents() {
  //   // if the cell is NOT empty, we have a problem.. alert user.
  //   if (event.target.innerHTML) {
  //     prompt("Sorry, this square has already been selected.. Try again.");
  //     return;
  //   }
  // }

  // determine what symbol it is and switch it every valid time.
  /////////// dont need this in a function...
  // function switchSymbol() {
  //   // Teranary
  //   Player = (Player === 'X') ? 'O' : 'X';
  // }

  // ------ THIS WORKS!!!!! ---------

  function determineWinner() {
    // --------- Variables -------------
    let zero = document.querySelector('[data-cell="0"]').innerHTML;
    let one = document.querySelector('[data-cell="1"]').innerHTML;
    let two = document.querySelector('[data-cell="2"]').innerHTML;
    let three = document.querySelector('[data-cell="3"]').innerHTML;
    let four = document.querySelector('[data-cell="4"]').innerHTML;
    let five = document.querySelector('[data-cell="5"]').innerHTML;
    let six = document.querySelector('[data-cell="6"]').innerHTML;
    let seven = document.querySelector('[data-cell="7"]').innerHTML;
    let eight = document.querySelector('[data-cell="8"]').innerHTML;

    if (
      // check if center cell has a value of 'X' or 'O' or not

      // try: four !== NaN
      (four === "X" || four === "O") &&
      // check if opposites from center equal one another:

      // "/"
      ((six === four && four === two) ||
        // "\"
        (zero === four && four === eight) ||
        // "---"
        (one === four && four === seven) ||
        // "|"
        (three === four && four === five))
    ) {
      winningSymbol = four; //you can add a error checker here later
      document.querySelector("#announce-winner").innerHTML =
        "Player " + winningSymbol + " Wins!!";

      // this gave me an input field... try "confirm()"
      // prompt("Hi! You've won!!");
      return true;
    } else if (
      (zero === "X" || zero === "O") &&
      ((six === three && three === zero) || (zero === one && one === two))
    ) {
      winningSymbol = zero; //you can add an error checker here later
      document.querySelector("#announce-winner").innerHTML =
        "Player " + winningSymbol + " Wins!!";
      return true;
    } else if (
      (eight === "X" || eight === "O") &&
      ((five === eight && eight === two) || (six === seven && seven === eight))
    ) {
      winningSymbol = eight; //you can add an error checker here later
      document.querySelector("#announce-winner").innerHTML =
        "Player " + winningSymbol + " Wins!!";
      return true;
    }
    return false;
  }
});

function clearBoard() {
  document.querySelectorAll("[data-cell]").forEach(cell => {
    cell.innerHTML = "";
  });
  // clickCount = initialClickCount;
  // window.clickCount = clickCount;
  document.querySelector("#announce-winner").innerHTML = "";
  winningSymbol = null;
  Player = "X";
}

// function startOver() { //figure out how to change the dialogue box..

//   if (confirm("Sorry","Sorry, this game is already over! would you like to play again?")) {
//     clearBoard();
//   }
// }

// function draw() {
//   document.querySelectorAll("[data-cell]").forEach(cell => {
//     if (  ((cell.innerHTML === 'X') || (cell.innerHTML === 'O'))
//     )
//       // ----------------- IT'S A DRAW!!!! --------------------------
//     {document.querySelector("#announce-winner").innerHTML = "It's a DRAW!";}
//   });
// }
