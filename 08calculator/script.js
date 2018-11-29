'use strict';
document.addEventListener('DOMContentLoaded', event => {
  document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', event => {
      let text = event.target.innerHTML;
      if (text === 'Enter') {
        equals();
      } else if (text === '+/-') {
        plusneg();
      } else if (text === 'Clear') {
        clearResults();
      } else if (text === 'Delete') {
        deleteLast();
      } else {
        addNumber(text);
      }
    });
  });
  function equals() {
    document.querySelector('#results').value = eval(
      document.querySelector('#results').value
    );
  }
  function deleteLast() {
    let current = document.querySelector('#results').value;
    document.querySelector('#results').value = current.slice(0, -1);
  }
  function plusneg() {
    document.querySelector('#results').value *= -1;
  }
  function addNumber(num) {
    document.querySelector('#results').value += num;
  }

  function clearResults() {
    document.querySelector('#results').value = '';
  }
});
