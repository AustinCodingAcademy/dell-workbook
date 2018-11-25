"use strict";

let operatorSign = ["+", "-", "*", "/"];

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
  // all this is doing is literally adding the minus sign in the input field.
  // it's just aesthetics, not calculating anything yet.
  document.querySelector("#results").value += "-";
}

function multiplication() {
  document.querySelector("#results").value += "*";
}

function division() {
  document.querySelector("#results").value += "/";
}

function decimal() {
  document.querySelector("#results").value += ".";
}

function equals() {
  document.querySelector("#results").value = eval(
    document.querySelector("#results").value
  );
  // if ( it dont work) {
  //   call the switch sign function;
  // }
  // else {
  //   document.querySelector("#results").value = eval(document.querySelector("#results").value);
  // }
  // try {
  //   document.querySelector("#results").value = eval(document.querySelector("#results").value);
  // }
  // catch {

  //   if (lastChar.indexOf(operatorSign)) {

  //   }
  // }
}

function deleteLast() {
  let current = document.querySelector("#results").value;
  document.querySelector("#results").value = current.slice(0, -1);
}

function signFlip() {
  let current = document.querySelector("#results").value;
  let firstChar = current.charAt(0);
  let lastChar = current.charAt(-1);
  if (operatorSign.indexOf(firstChar) === 1) {
    // firstChar is a -, delete it, else add it
    document.querySelector("#results").value = document
      .querySelector("#results")
      .value.slice(1);
  } else if (operatorSign.indexOf(firstChar) === 0) {
    document.querySelector("#results").value =
      "-" + document.querySelector("#results").value.slice(1);
  } else {
    document.querySelector("#results").value =
      "-" + document.querySelector("#results").value;
  }
}

function switchSignButton() {
  let answero = document.querySelector("#results").value;

  if (Math.round(answero) === NaN) {
    document.querySelector("#results").value =
      "6" + document.querySelector("#results").value;
  }

  if (typeof eval(document.querySelector("#results").value) === "number") {
    signFlip();
  }
}
