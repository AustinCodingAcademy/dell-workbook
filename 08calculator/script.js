'use strict';
document.addEventListener("DOMContentLoaded", function (event) {
  var operator = "";
  document.querySelectorAll('.button').forEach((button) => {
    button.addEventListener('click', (event) => {
      let text = event.target.innerHTML;
      switch (text) {
        case '+':
          addition();
          break;
        case '-':
          Subtraction();
          break;
        case '*':
          Multiplication();
          break;
        case '/':
          Division();
          break;
        case '+/-':
          Negate();
          break;
        case '=':
          equals();
          break;
        case 'C':
          deleteLast();
          break;
        case 'CE':
          clearResults();
          break;
        default:
          addNumber(text);
      }
    });
  });
  function clearResults() {
    document.querySelector("#results").value = "";
    operator = "";
  }
  function addNumber(num) {
    document.querySelector("#results").value += num;
  }
  function addition() {
    document.querySelector("#results").value += "+";
    operator = "+";
  }
  function Subtraction() {
    document.querySelector("#results").value += "-";
    operator = "-";
  }
  function Multiplication() {
    document.querySelector("#results").value += "*";
    operator = "*";
  }
  function Division() {
    document.querySelector("#results").value += "/";
    operator = "/";
  }
  function Negate() {
    if (!operator || 0 === operator.length) {
      document.querySelector("#results").value = -1 * document.querySelector("#results").value;
    }
    else {
      let current = document.querySelector("#results").value;
      var number = current.substring(current.length, current.indexOf(operator) + 1).toString();
      var regex = new RegExp(number + '$', "gi")
      var replacer = -1 * number;
      document.querySelector("#results").value = current.replace(regex, replacer);
    }
  }
  function equals() {
    var string = document.querySelector("#results").value;
    if (string.includes("--"))
      string = string.replace(/--/, '+');
    document.querySelector("#results").value = eval(string);
    operator = "";
  }
  function deleteLast() {
    let current = document.querySelector("#results").value;
    document.querySelector("#results").value = current.slice(0, -1);
  }

});






