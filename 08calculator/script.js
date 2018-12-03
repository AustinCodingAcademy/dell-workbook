'use strict';

document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll('.button').forEach((button) => {
    button.addEventListener('click', (evt) => {
      let text = evt.target.innerHTML;
      
      switch (text) {
      case "=":
        equals();
        break;

      case "Clear":
        clearResults();
        break;

      case "Delete":
        deleteLast();
        break;

      case "+/-":
        negation();
        break;

      default:
        addNumber(text);
        break;
      }
    })
  })

  function equals() {
    if (document.querySelector("#results").value) {
      document.querySelector("#results").value = eval(
        document.querySelector("#results").value
      );
    }
  }

  function addNumber(num) {
    document.querySelector("#results").value += num;
  }

  function clearResults() {
    document.querySelector("#results").value = "";
  }

  function deleteLast() {
    let current = document.querySelector("#results").value;
    document.querySelector("#results").value = current.slice(0, -1);
  }

  function negation() {
    var current = document.querySelector("#results").value;
    if (eval(current) !== NaN) {
      equals();
      document.querySelector("#results").value = '-'.concat(document.querySelector("#results").value);
    }
  }
});