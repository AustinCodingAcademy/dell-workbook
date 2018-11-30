'use strict';

document.addEventListener("DOMContentLoaded", function(event) {
  document.querySelectorAll('.button').forEach((button)=> {
    button.addEventListener('click', function(event) {
      let text = event.target.innerHTML;
      if (text === '='){
        equals();
      } else if (text === '+'){
        addition();
      } else if (text === '-') {
        subtraction();
      } else if (text === '*') {
        multiply();
      } else if (text === '/') {
        divide();
      } else if (text === '+/-') {
        plusminus()
      } else if (text === 'Delete') {
        deleteLast();
      } else if (text === 'Clear') {
        clearResults();
      } else {
        addNumber(text);
      }
    })
  })
});

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
function multiply() {
  document.querySelector("#results").value += "*";
}
function divide() {
  document.querySelector("#results").value += "/";
}
function plusminus() {
  var mynum = document.querySelector("#results").value 
  var newnum = mynum*(-1); 
  console.log(newnum)
  document.querySelector("#results").value = newnum;
}
function equals() {
  document.querySelector("#results").value = eval(document.querySelector("#results").value);
}

function deleteLast() {
  let current = document.querySelector("#results").value;
  document.querySelector("#results").value = current.slice(0, -1);
}