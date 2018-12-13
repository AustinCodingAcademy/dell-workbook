"use strict";

document.addEventListener("DOMContentLoaded", (event) => {
  document.querySelectorAll('.button').forEach((button) => {
    button.addEventListener('click', (event) => {
      let text = event.target.innerHTML;
      if (text === '=') {
        equals();
      } 
      else if (text === '+') {
        addition();
      }
       else if (text === 'Clear') {
        clearResults ();
      }
        else if (text === '-') {
        subtraction ();
      }
        else if (text === '*') {
        multiplication ();
      }

        else if (text === '/') {
        division ();
      }

      else if (text === 'Delete') {
        deleteLast ();
      }
        else {
        addNumber(text);
      }
    });
  });

  function addNumber(number) {
    document.querySelector("#results").value += number;
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
    document.querySelector("#results").value = eval(
      document.querySelector("#results").value
    );
  }

  function deleteLast() {
    let current = document.querySelector("#results").value;
    document.querySelector("#results").value = current.slice(0, -1);
  }
})