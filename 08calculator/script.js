"use strict";

document.addEventListener("DOMContentLoaded", function(event) {
  document.querySelectorAll('.buttom').forEach((button) => {
    button.addEventListener('click', (event) => {
      let text = event.target.innerHTML;
      if (text == '=') {
        equals();
      }
      else if (text == '+') {
        addition();
      }
      else if (text == '/') {
        division();
      }
      else if (text == '*') {
        multiplication();
      }
    
      else {
        addNumber(text);
      }
    })
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

function plusMinus() {
  document.querySelector("#results").value = eval(
    document.querySelector("#results").value * -1
  );
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
