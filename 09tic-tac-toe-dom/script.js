'use strict';

document.addEventListener("DOMContentLoaded", function (event) {
  var style = 'o';

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
      checkWinner;
      style = (style === 'o') ? 'x' : 'o';
    }
  }

  function checkWinner(){
    var cellContainsValue = document.querySelectorAll('[data-cell]').forEach(function(cell){
      if (cell.firstChild){
        console.log(cell.nodeValue);
        return cell.nodeValue;
      }
    })
    console.log('cellContainsValue = ' + cellContainsValue);
  }
});