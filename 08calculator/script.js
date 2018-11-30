"use strict";

document.addEventListener("DOMContentLoaded", function(event) {
  document.querySelectorAll(".button").forEach(button => {
    button.addEventListener("click", function(event) {
      let number = event.target.innerHTML;

      if (number === "=") {
        equals();
      } else if (number === "Clear") {
        clearResults();
      } else if (number === "Delete") {
        deleteLast();
      } else if (number === "+/-") {
        changeSign();
      } else {
        addNumber(number);
      }
    });
  });
});

function addNumber(num) {
  document.querySelector("#result").value += num;
}

function equals() {
  let current = document.querySelector("#result").value;
  if (current != "") {
    document.querySelector("#result").value = eval(current);
  }
}

function clearResults() {
  document.querySelector("#result").value = "";
}

function deleteLast() {
  let current = document.querySelector("#result").value;
  document.querySelector("#result").value = current.slice(0, -1);
}

function changeSign() {
  let current = document.querySelector("#result").value;
  document.querySelector("#result").value = -1 * current;
}
