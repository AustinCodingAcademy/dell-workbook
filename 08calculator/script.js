'use strict';

document.addEventListener("DOMContentLoaded", (event) => {
  document.querySelectorAll('.button').forEach((button) => {
    button.addEventListener('click', function(event) {
      let text = event.target.innerHTML;
      if (text === '=') {
        equals();
      } 
        else if (text === 'Delete') {
          deleteLast();}
        else if (text === '+/-') {
          negativeAction(); }
        else if (text === 'Clear') {
          clearResults();
        }
      else {
        addNumber(text);
      }
  })
  });
  function addNumber(num) {
    document.querySelector("#results").value += num;}
  function equals() {
    document.querySelector("#results").value = eval(document.querySelector("#results").value);
    }
  function clearResults() {
      document.querySelector("#results").value = "";
    }
  function negativeAction() {
      document.querySelector("#results").value *= -1;}
  function deleteLast() {
    let current = document.querySelector("#results").value;
    document.querySelector("#results").value = current.slice(0, -1);
    }
});