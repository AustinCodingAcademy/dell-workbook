'use strict';

// document.addEventListener("DOMContentLoaded", function(event) {

// });


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
  // let before = eval(document.querySelector("#results").value);
  // let after = before*(-1);
  // document.querySelector("#results").value += after;
  //document.querySelector("#results").value = eval(document.querySelector("#results").value);
}
function equals() {
  document.querySelector("#results").value = eval(document.querySelector("#results").value);
}

function deleteLast() {
  let current = document.querySelector("#results").value;
  document.querySelector("#results").value = current.slice(0, -1);
}