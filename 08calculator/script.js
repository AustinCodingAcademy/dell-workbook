"use strict";

document.addEventListener("DOMContentLoaded", event => {
  document.querySelectorAll(".button").forEach(button => {
    button.addEventListener("click", event => {
      let text = event.target.innerHTML;
      // click on equal button
      if (text === "=") {
        equals();
        // click on add button
      } else if (text === "+") {
        addition();
        // click on substract button
      } else if (text === "-") {
        substract();
        // click on multiply button
      } else if (text === "*") {
        multiply();
        // click on divide button
      } else if (text === "/") {
        divide();
        // click on  +/- button
      } else if (text === "+/-") {
        PlusOrMinus();
      }
      // click on clear button
      else if (text === "Clear") {
        clear();
      }
      // click on Delete button
      else if (text === "Delete") {
        deleteLast();
      }
      // click on digits button - 1,2,3,4,5,6,7,8,9,0
      else {
        addNumber(text);
      }
    });
  });

  function addNumber(num) {
    document.querySelector("#results").value += num;
  }
  s;

  function clear() {
    document.querySelector("#results").value = "";
  }

  function addition() {
    document.querySelector("#results").value += "+";
  }

  function substract() {
    document.querySelector("#results").value += "-";
  }

  function multiply() {
    document.querySelector("#results").value += "*";
  }

  function divide() {
    document.querySelector("#results").value += "/";
  }

  function PlusOrMinus() {
    var num = document.querySelector("#results").value;
    if (num > 0) {
      document.querySelector("#results").value = "-" + num;
    } else if (num < 0) {
      var num = document.querySelector("#results").value.replace("-", "");
      document.querySelector("#results").value = num;
    } else if (num == 0) {
      $("#results");
    }
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
});
