
'use strict';
document.addEventListener("DOMContentLoaded", function (event) {
  document.querySelectorAll('.button').forEach((button) => {
    button.addEventListener('click', (event) => {
      let text = event.target.innerHTML;
      if (text === '=') {
        equals();
      } else if (text === '+/-') {
        PlusMinus();
      }

      else if (text === 'Delete') {
        deleteLast();
      } else if (text === 'Clear') {
        clearResults();
      }

      else {
        addNumber(text);
      }

    })

  })



  function addNumber(num) {
    document.querySelector("#results").value += num;
  }

  function clearResults() {
    document.querySelector("#results").value = "";
  }

  // function addition() {
  //   document.querySelector("#results").value += "+";
  // }

  function equals() {
    document.querySelector("#results").value = eval(document.querySelector("#results").value);
  }

  function deleteLast() {
    let current = document.querySelector("#results").value;
    document.querySelector("#results").value = current.slice(0, -1);
  }

  // function substraction() {
  //   document.querySelector("#results").value += "-";
  // }

  // function Multiplication() {
  //   document.querySelector("#results").value += "*";
  // }

  // function division() {
  //   document.querySelector("#results").value += "/";
  // }
  function PlusMinus() {
    document.querySelector("#results").value = -document.querySelector("#results").value;
  }
});
