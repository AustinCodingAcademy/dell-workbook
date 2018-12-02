'use strict';
console.log('hello')
document.addEventListener("DOMContentLoaded", (event) => {
  document.querySelectorAll('.button').forEach((button) => {
    button.addEventListener('click', (event) => {
      let text = event.target.innerHTML;
      if (text === '=') {
        equals();
      } else {
        addNumber(text)
      }
    })
  })

  function addNumber(num) {
    document.querySelector("#results").value += num;
  }

  function clearResults() {
    document.querySelector("#results").value = "";
  }

  function equals() {
    document.querySelector("#results").value = eval(document.querySelector("#results").value);
  }

  function deleteLast() {
    let current = document.querySelector("#results").value;
    document.querySelector("#results").value = current.slice(0, -1);
  }
});