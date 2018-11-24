'use strict';

document.addEventListener("DOMContentLoaded", function (event) {
  var style = 'o';
  var selectedOCells = [];
  var selectedXCells = [];
  var winnerDict = new Object();
  winnerDict = {
    "0, 1, 2": "winner"
    , "3, 4, 5": "winner"
    , "6, 7, 8": "winner"
    , "0, 3 ,6": "winner"
    , "1, 4, 7": "winner"
    , "2, 5, 8": "winner"
    , "0, 4, 8": "winner"
    , "2, 4, 6": "winner"
  };

  document.querySelectorAll('[data-cell]').forEach(function (cell) {
    cell.addEventListener('click', addObject);
  })

  document.querySelector('#clear').addEventListener("click", clear);

  function clear() {
    document.querySelectorAll('[data-cell]').forEach(function (cell) {
      cell.innerHTML = "";
    })

    style = 'o';
  }

  function addObject() {
    if (!this.firstChild) {
      this.insertAdjacentHTML('afterbegin', `<div class="disc ${style}">${style}</div>`);

      if (style === 'o') {
        selectedOCells.push(this.getAttribute("data-cell"));
      } else if (style === 'x') {
        selectedXCells.push(this.getAttribute("data-cell"));
      }

      checkWinner(this);

      style = (style === 'o') ? 'x' : 'o';
    }
  }

  function checkWinner(clickedCell) {
    console.log('checkWinner = ' + clickedCell);
    var clickedValue = clickedCell.getAttribute("data-cell");
    var keys = Object.keys(winnerDict);
    console.log('keys = ' + keys);

    var matchingWinnerKeys = keys.filter(function (key) { return key.indexOf(clickedValue) > -1 });
    console.log('matchingWinnerKeys = ' + matchingWinnerKeys);

    var foundWinner = false;
    var selectedValues = selectedOCells;
    if (style === 'x') {
      selectedValues = selectedXCells;
    }

    console.log('selectedValues = ' + selectedValues);

    if (selectedValues.length > 2) {
      for (let i = 0; i < matchingWinnerKeys.length; i++) {
        if (selectedValues.includes(matchingWinnerKeys[i][0]) & selectedValues.includes(matchingWinnerKeys[i][1]) & selectedValues.includes(matchingWinnerKeys[i][2])) {
          foundWinner = true;
        }
      }
    }
    if (foundWinner === true){
      endGame;
    }
  }

  function endGame(){
    var announceWinner = document.querySelector("#announce-winner");
    announceWinner.insertAdjacentHTML('afterbegin', `<div>Congrats ${style} user</div>`);    
  }
});