"use strict";

let taxes = 0;
let ruled = 1;
let jewelsOwned = 1;
let warCost = 50 * ruled;
let jewelCost = 150;


document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("coin").onclick = function(e) {
    taxes = taxes + 1 * ruled;
    console.log("taxes " + taxes);
    document.getElementById("taxescollected").placeholder = "$ " + taxes;
  };

  document.getElementById("war").onclick = function(e) {
    console.log("taxes " + taxes);
    console.log("ruled " + ruled);
    if (taxes >= warCost) {
      updateWarCost();
    }
  };
  document.getElementById("buy-jewels").onclick = function(e) {
    if (taxes >= jewelCost) {
      console.log("taxes " + taxes);
      console.log("jewelCost " + ruled);
      updateJewels();
    }
  };
  displayCrowns();
});

function updateJewels() {
  taxes = taxes - jewelCost;
  jewelCost = ruled * jewelsOwned * 150;
  jewelsOwned = jewelsOwned + 1;

  displayCrowns ();
  document.getElementById("taxescollected").placeholder = "$ " + taxes;
  document.getElementById("kingdomsruled").placeholder = ruled;
  document.getElementById("jewel-cost").placeholder = "$ " + jewelCost;
}

function updateWarCost() {
  ruled = ruled + 1;
  taxes = taxes - warCost;
  warCost = ruled * 50;
  document.getElementById("taxescollected").placeholder = "$ " + taxes;
  document.getElementById("kingdomsruled").placeholder = ruled;
  document.getElementById("war-cost").placeholder = "$ " + warCost;
}


function displayCrowns() {
  let i = 1;
  console.log("load crowns "+ jewelsOwned);

  for (i = 1; i <= 30; i++) {
    if (i <= jewelsOwned) {
      document.querySelector("#crown" + i).style["display"] = "inline";
    } else {
      document.querySelector("#crown" + i).style["display"] = "none";
    }
  }
}
