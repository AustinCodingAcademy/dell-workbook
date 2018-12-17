"use strict";
let matrix = [["", "", ""], ["", "", ""], ["", "", ""]];
document.addEventListener("DOMContentLoaded", event => {
  // Your Code Here
  let player = "❌";
  document.querySelectorAll("[data-cell]").forEach(cell => {
    cell.addEventListener("click", event => {
      if (!event.target.innerHTML) {
        event.target.innerHTML = player;
        let pos = cell.attributes["data-cell"].value;
        matrix[Math.floor(pos / 3)][pos % 3] = player;
        console.log(matrix);
        checkForWin();
        player = player === "❌" ? "✔️" : "❌";
        //checkForWin();
      }
    });
  });
  function checkForWin() {
    console.log(matrix[0][0]);

    let paths = [];
    for (let i = 0; i < matrix.length; i++) {
      let row = [];
      let column = [];
      for (let j = 0; j < matrix.length; j++) {
        row.push(matrix[i][j]);
        column.push(matrix[j][i]);
      }
      paths.push(row.join(""));
      paths.push(column.join(""));
    }

    paths.push(matrix[0][0] + matrix[1][1] + matrix[2][2]);
    paths.push(matrix[2][0] + matrix[1][1] + matrix[0][2]);

    if (paths.includes("❌❌❌")) {
      setTimeout(function() {
        alert("*********❌ WINS*********");
        reload();
      }, 100);
    } else if (paths.includes("✔️✔️✔️")) {
      setTimeout(function() {
        alert("*********✔️ WINS*********");
        reload();
      }, 100);
    } else if (!matrix.flat().includes("")) {
      setTimeout(function() {
        alert("********Its a Tie!*********");
        reload();
      }, 100);
    }
  }

  function reload() {
    matrix = [["", "", ""], ["", "", ""], ["", "", ""]];
    document.querySelectorAll("[data-cell]").forEach(cell => {
      cell.innerHTML = "";
    });
  }
});
