'use strict';

document.addEventListener("DOMContentLoaded", function (event) {
  var style = 'o';
  var selectedOCells = [];
  var selectedXCells = [];
  var winnerPositions = [];
  winnerPositions = [
    { "pos1": "0", "pos2": "1", "pos3": "2" }
    , { "pos1": "3", "pos2": "4", "pos3": "5" }
    , { "pos1": "6", "pos2": "7", "pos3": "8" }
    , { "pos1": "0", "pos2": "3", "pos3": "6" }
    , { "pos1": "1", "pos2": "4", "pos3": "7" }
    , { "pos1": "2", "pos2": "5", "pos3": "8" }
    , { "pos1": "0", "pos2": "4", "pos3": "8" }
    , { "pos1": "2", "pos2": "4", "pos3": "6" }
  ];

  document.querySelectorAll('[data-cell]').forEach(function (cell) {
    cell.addEventListener('click', addObject);
  })

  document.querySelector('#clear').addEventListener("click", clear);

  function clear() {
    document.querySelectorAll('[data-cell]').forEach(function (cell) {
      cell.innerHTML = "";
    })
    style = 'o';
    document.querySelector('#announce-winner').innerHTML = "";
  }

  function addObject() {
    if (!this.firstChild) {
      this.insertAdjacentHTML('afterbegin', `<div class="disc ${style}">${style}</div>`);
      var checkedCells = 0;

      if (style === 'o') {
        selectedOCells.push(this.getAttribute("data-cell"));
        checkedCells = selectedOCells.length;
      } else if (style === 'x') {
        selectedXCells.push(this.getAttribute("data-cell"));
        checkedCells = selectedXCells.length;
      }

      if (checkedCells > 2)
        checkWinner(this);

      style = (style === 'o') ? 'x' : 'o';
    }
  }

  function checkWinner(clickedCell) {
    var clickedValue = clickedCell.getAttribute("data-cell");

    var filteredWinnerPos = winnerPositions.filter(function (winnerPos) {
      return clickedValue === winnerPos.pos1 || clickedValue === winnerPos.pos2 || clickedValue === winnerPos.pos3;
    });

    var foundWinner = false;
    var selectedValues = selectedOCells;
    if (style === 'x') {
      selectedValues = selectedXCells;
    }

    for (let i = 0; i < filteredWinnerPos.length; i++) {
      if (selectedValues.includes(filteredWinnerPos[i].pos1) & selectedValues.includes(filteredWinnerPos[i].pos2) & selectedValues.includes(filteredWinnerPos[i].pos3)) {
        foundWinner = true;
        break;
      }
    }
    
    if (foundWinner === true) {
      endGame();
    }
  }

  function endGame() {
    var announceWinner = document.querySelector("#announce-winner");
    var capStyle = style.toUpperCase();
    announceWinner.insertAdjacentHTML('afterbegin', `<div>Congrats ${capStyle} user</div>`);
  }
});