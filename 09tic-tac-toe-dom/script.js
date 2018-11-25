'use strict';

document.addEventListener("DOMContentLoaded", function (event) {
  // To-Do: How do I get rid of the following public variables? 
  var style = 'o';
  var selectedOCells = [];
  var selectedXCells = [];

  document.querySelectorAll('[data-cell]').forEach(function (cell) {
    cell.addEventListener('click', addObject);
  })

  document.querySelector('#clear').addEventListener("click", clear);

  function clear() {
    style = 'o';
    selectedOCells = [];
    selectedXCells = [];
    document.querySelectorAll('[data-cell]').forEach(function (cell) {
      cell.innerHTML = "";
    })
    document.querySelector('#announce-winner').innerHTML = "";
  }

  function getWinnerPositions() {
    return [
      { "pos1": "0", "pos2": "1", "pos3": "2" }
      , { "pos1": "3", "pos2": "4", "pos3": "5" }
      , { "pos1": "6", "pos2": "7", "pos3": "8" }
      , { "pos1": "0", "pos2": "3", "pos3": "6" }
      , { "pos1": "1", "pos2": "4", "pos3": "7" }
      , { "pos1": "2", "pos2": "5", "pos3": "8" }
      , { "pos1": "0", "pos2": "4", "pos3": "8" }
      , { "pos1": "2", "pos2": "4", "pos3": "6" }
    ];
  }

  function addObject() {
    if (!this.firstChild) {
      this.insertAdjacentHTML('afterbegin', `<div class="disc ${style}">${style}</div>`);
      var checkedCells = addSelectedCellToArray(this).length;
      if (checkedCells > 2) {
        checkWinner(this);
      }
      style = (style === 'o') ? 'x' : 'o';
    }
  }

  function addSelectedCellToArray(clickedCell) {
    if (clickedCell.querySelector("div").innerHTML === 'o') {
      selectedOCells.push(clickedCell.getAttribute("data-cell"));
      return selectedOCells;
    } else if (clickedCell.querySelector("div").innerHTML === 'x') {
      selectedXCells.push(clickedCell.getAttribute("data-cell"));
      return selectedXCells;
    }
    return [];
  }

  function checkWinner(clickedCell) {
    var filteredWinnerPos = getAllWinnerPos(clickedCell);

    var selectedValues = selectedOCells;
    if (clickedCell.querySelector("div").innerHTML === 'x') {
      selectedValues = selectedXCells;
    }

    for (let i = 0; i < filteredWinnerPos.length; i++) {
      if (selectedValues.includes(filteredWinnerPos[i].pos1) & selectedValues.includes(filteredWinnerPos[i].pos2) & selectedValues.includes(filteredWinnerPos[i].pos3)) {
        endGame(clickedCell);
        break;
      }
    }
  }

  function getAllWinnerPos(clickedCell) {
    var clickedValue = clickedCell.getAttribute("data-cell");
    var filteredWinnerPos = getWinnerPositions().filter(function (winnerPos) {
      return clickedValue === winnerPos.pos1 || clickedValue === winnerPos.pos2 || clickedValue === winnerPos.pos3;
    });
    return filteredWinnerPos;
  }

  function endGame(clickedCell) {
    var announceWinner = document.querySelector("#announce-winner");
    
    if(announceWinner.innerHTML === "")
    {
      var capStyle = clickedCell.querySelector("div").innerHTML.toUpperCase();
      announceWinner.insertAdjacentHTML('afterbegin', `<div>Congrats ${capStyle} user</div>`);  
    }
  }
});