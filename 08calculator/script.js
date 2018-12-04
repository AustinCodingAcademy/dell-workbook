"use strict";

document.addEventListener("DOMContentLoaded", (event) => {
  document.querySelectorAll('.button').forEach((button) => {
    button.addEventListener('click', (event) => {
      let text = event.target.innerHTML;
      if (text === '=') {
        equals();
      } else {
        addNumber(text);
      }
      } else {
      clearResults(" ");
      }
      } else {
    deleteLast(text);
      }
    });
  });

  function addNumber(number) {
    document.querySelector("#results").value += number;
  }

  function clearResults() {
    document.querySelector("#results").value = "";
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