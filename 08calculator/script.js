'use strict';

document.addEventListener("DOMContentLoaded", function(event) { 

document.addNumber = function(num) {
  document.querySelector("#results").value += num;
}

document.querySelector('[data-number]').addEventListener('click', function() {
  console.log(this.getAttribute('data-number'))
})

function clearResults() {
  document.querySelector("#results").value = "";
}

function addition() {
  document.querySelector("#results").value += "+";
}

function equals() {
  document.querySelector("#results").value = eval(document.querySelector("#results").value);
}

function deleteLast() {
  let current = document.querySelector("#results").value;
  document.querySelector("#results").value = current.slice(0, -1);
}

});