'use strict';

document.addEventListener("DOMContentLoaded", function(event) {
  var xo = 'x';
  var winner = '';
  document.querySelectorAll('[data-cell]').forEach(function (dc){
    dc.addEventListener('click', function() {
      if (!this.classList.contains('marked')) {
        if (xo === 'x'){
          this.classList.add('marked', 'x');
        } else {
          this.classList.add('marked', 'o');
        }
        xo = (xo === 'x') ? 'o' : 'x';
        turnsRemaining--;
      }
    });
  });

  document.querySelector('#clear').addEventListener('click', function() {
    document.querySelectorAll('[data-cell]').forEach(function (dc){
      dc.classList.remove('marked', 'x', 'o')
    });
  });
});