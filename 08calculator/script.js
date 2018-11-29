'use strict';

document.addEventListener("DOMContentLoaded", (event) => {
// You code here
  document.querySelectorAll('.button').forEach((button) => {
    button.addEventListener('click', function(event) {
      let text = event.target.innerHTML;
      if (text === '=') {
        equals();
      } else if (text === "Clear") {
        clearResults();
      } else if (text === "Delete") {
        deleteLast();
      } else if (text === "+/-") {
        posNeg();
      } else {
        addNumber(text)
      }
    })
  })
  function addNumber(num) {
    document.querySelector("#results").value += num;
  }

  function clearResults() {
    document.querySelector("#results").value = "";
  }

  function addition() {
    document.querySelector("#results").value += "+";
  }

  function subtraction() {
    document.querySelector("#results").value += "-";
  }

  function multiplication() {
    document.querySelector("#results").value += "*";
  }

  function division() {
    document.querySelector("#results").value += "/";
  }

  function equals() {
    document.querySelector("#results").value = eval(document.querySelector("#results").value);
  }

  function posNeg() {
    let changeValue = document.querySelector("#results").value;
    document.querySelector("#results").value = changeValue * -1;
  }

  function deleteLast() {
    let current = document.querySelector("#results").value;
    document.querySelector("#results").value = current.slice(0, -1);
  }
});
