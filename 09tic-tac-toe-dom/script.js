"use strict";

document.addEventListener("DOMContentLoaded", event => {
  let turn = "x";
  let xList = [];
  let oList = [];
  let gameDone = false;
  document.querySelector("#clear").addEventListener("click", event => {
    turn = "x";
    xList = [];
    oList = [];
    gameDone = false;
    document.querySelectorAll("[data-cell]").forEach(clearCell => {
      clearCell.innerHTML = "";
    });
    document.querySelector("#announce-winner").innerHTML = "";
  });
  document.querySelectorAll("[data-cell]").forEach(cell => {
    cell.addEventListener("click", event => {
      if (gameDone) return;
      if (event.target.innerHTML === "x" || event.target.innerHTML === "o")
        return;
      if (turn === "x") {
        event.target.innerHTML = "x";
        xList.push(event.target.dataset.cell);
        turn = "o";
      } else if (turn === "o") {
        event.target.innerHTML = "o";
        oList.push(event.target.dataset.cell);
        turn = "x";
      }
      let winner = checkForWin(xList, oList);
      if (winner) {
        gameDone=true;
        document
          .querySelector("#announce-winner")
          .insertAdjacentHTML("afterbegin", `The winner is ${winner}`);
      }
    });
  });
});

function checkForWin(xList, oList) {
  let winList = [
    ["0", "1", "2"],
    ["3", "4", "5"],
    ["6", "7", "8"],
    ["0", "3", "6"],
    ["1", "4", "7"],
    ["2", "5", "8"],
    ["0", "4", "8"],
    ["2", "4", "6"]
  ];
  if (
    winList.some(combination => combination.every(cell => xList.includes(cell)))
  ) {
    //xList contains every element of one of the sub-arrays in WinList
    return "x";
  }
  if (
    winList.some(combination => combination.every(cell => oList.includes(cell)))
  ) {
    //oList contains every element of one of the sub-arrays in WinList
    return "o";
  }
  return null;
}
