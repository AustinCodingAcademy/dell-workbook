"use strict";

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".button").forEach(button =>
    button.addEventListener("click", event => {
      let text = event.target.innerHTML;
      switch (text) {
      case "=":
        equals();
        break;
      case "Delete":
        deleteLast();
        break;
      case "Clear":
        clearResults();
        break;
      case "+/-":
        changeSign();
        break;
      default:
        addNumber(text);
        break;
      }
    })
  );

  function addNumber(num) {
    document.querySelector("#results").value += num;
  }

  function clearResults() {
    document.querySelector("#results").value = "";
  }

  function equals() {
    if (document.querySelector("#results").value !== "") {
      document.querySelector("#results").value = eval(
        document.querySelector("#results").value
      );
    }
  }

  function deleteLast() {
    let current = document.querySelector("#results").value;
    document.querySelector("#results").value = current.slice(0, -1);
  }

  function changeSign() {
    if (!isNaN(Number(document.querySelector("#results").value))) {
      document.querySelector("#results").value =
        eval(document.querySelector("#results").value) * -1;
    }
  }
});
