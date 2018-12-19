"use strict";

let taxes = 0;
let ruled = 1;
let warCost = 50 * ruled;
let jewelCost = 15;
let jewelsOwned = 1;

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("coin").onclick = function(e) {
    taxes = taxes + 1 * ruled;
    console.log("taxes " + taxes);
    document.getElementById("taxescollected").placeholder = "$ " + taxes;
  };
  document.querySelector("#crown2").style["display"] = "none";
});
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("war").onclick = function(e) {
    console.log("taxes " + taxes);
    console.log("ruled " + ruled);
    if (taxes >= warCost) {
      updateWarCost();
    }
  };
});

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("buy-jewels").onclick = function(e) {
    if (taxes >= jewelCost) {
      console.log("taxes " + taxes);
      console.log("jewelCost " + ruled);
      updateJewels();
    }
  };
});

function updateJewels() {
  taxes = taxes - jewelCost;
  jewelCost = ruled * jewelsOwned * 150;
  jewelsOwned = jewelsOwned + 1;

  document.querySelector("#crown2").style["display"] = "inline";
  document.getElementById("taxescollected").placeholder = "$ " + taxes;
  document.getElementById("kingdomsruled").placeholder = ruled;
  document.getElementById("jewel-cost").placeholder = "$ " + jewelCost;
}

function updateWarCost() {
  ruled = ruled + 1;
  taxes = taxes - warCost;
  warCost = ruled * 50;
  console.log("taxes " + taxes);
  console.log("ruled " + ruled);
  document.getElementById("taxescollected").placeholder = "$ " + taxes;
  document.getElementById("kingdomsruled").placeholder = ruled;
  document.getElementById("war-cost").placeholder = "$ " + warCost;
}
