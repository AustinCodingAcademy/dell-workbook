"use strict";

document.addEventListener("DOMContentLoaded", function(event) {
  let player = "X";

  document.querySelectorAll("[data-cell]").forEach(cell => {
    cell.addEventListener("click", event => {
      if (player === "X" && event.target.innerHTML === "") {
        event.target.innerHTML = "X";
        player = "Y";
      } else if (player === "Y" && event.target.innerHTML === "") {
        event.target.innerHTML = "O";
        player = "X";
      }
    });
  });

  document.querySelector("#clear").addEventListener("click", function() {
    document.querySelectorAll("[data-cell]").forEach(cell => {
      cell.innerHTML = "";
    });
  });
});






// document.addEventListener("DOMContentLoaded", function (event) {
//   document.querySelectorAll('.button').forEach((button) => {
//     button.addEventListener('click', (event) => {
//       let text = event.target.innerHTML;
//       if (text === '=') {
//         equals();
//       } else if (text === '+/-') {
//         PlusMinus();
//       }

//       else if (text === 'Delete') {
//         deleteLast();
//       } else if (text === 'Clear') {
//         clearResults();
//       }

//       else {
//         addNumber(text);
//       }

//     })

//   })