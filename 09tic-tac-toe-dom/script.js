'use strict';

document.addEventListener("DOMContentLoaded", function (event) {
  var color = 'black';

  document.querySelectorAll('[data-cell]').forEach(function (cell) {
    cell.addEventListener('click', addObject);
  })

  document.querySelector('#clear').addEventListener("click", clear);

  function clear() {
    document.querySelectorAll('[data-cell]').forEach(function (cell) {
      cell.innerHTML = "";
    })
  }

  function addObject() {
    if (!this.firstChild) {
      this.insertAdjacentHTML('afterbegin', `<div class="disc ${color}"></div>`);
      color = (color === 'black') ? 'red' : 'black';
    }
  }

  
});