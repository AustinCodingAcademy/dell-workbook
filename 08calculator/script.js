"use strict";
function addNumber(num) {
  document.querySelector("#results").value += num;
}

function clearResults() {
  document.querySelector("#results").value = "";
}

function addition() {
  document.querySelector("#results").value += "+";
}

function subtract() {
  document.querySelector("#results").value += "-";
}

function multiply() {
  document.querySelector("#results").value += "*";
}

function divided() {
  document.querySelector("#results").value += "/";
}

function magic() {
  var neg 
  var str = document.querySelector("#results").value;

  if(isNaN(document.querySelector("#results").value)){
    var pos = str.match(/\d+$/)[0];
    neg = pos * -1;
    str = str.replace(pos, neg)
    document.querySelector("#results").value = str;
    
  } else {
    neg = document.querySelector("#results").value * -1;
    document.querySelector("#results").value = neg;
  }

  
}

function equals() {
  document.querySelector("#results").value = eval(document.querySelector("#results").value);
}

function deleteLast() {
  let current = document.querySelector("#results").value;
  document.querySelector("#results").value = current.slice(0, -1);
}