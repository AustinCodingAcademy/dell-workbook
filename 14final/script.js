"use strict";

let taxes = 0;
let ruled = 1;
let jewelsOwned = 1;
let warCost = 50 * ruled;
let jewelCost = 150;
let startGame = 0;

document.addEventListener("DOMContentLoaded", () => {
  if (!startGame) {
    initializeForm();
  }

  document.getElementById("coin").onclick = function(e) {
    taxes = taxes + (1 * ruled * jewelsOwned);
    console.log("taxes " + taxes);
    updateForm();
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

  document.getElementById("reset").onclick = function(e) {
    initializeForm();
  };
  
});

function updateJewels() {
  taxes = taxes - jewelCost;
  jewelCost = ruled * jewelsOwned * 150;
  jewelsOwned = jewelsOwned + 1;
  updateForm();
}

function updateWarCost() {
  ruled = ruled + 1;
  taxes = taxes - warCost;
  warCost = ruled * 50;
  updateForm();
}

function displayCrowns() {
  let i = 1;
  console.log("load crowns " + jewelsOwned);

  for (i = 1; i <= 30; i++) {
    if (i <= jewelsOwned) {
      document.querySelector("#crown" + i).style["display"] = "inline";
    } else {
      document.querySelector("#crown" + i).style["display"] = "none";
    }
  }
}

function initializeForm() {
  startGame = 1;
  taxes = 0;
  ruled = 1;
  jewelsOwned = 1;
  warCost = 50 
  jewelCost = 150;

  updateForm();
  
}

function updateForm() {
  document.getElementById("taxescollected").placeholder = "$ " + taxes + "K";
  document.getElementById("kingdomsruled").placeholder = ruled;
  document.getElementById("war-cost").placeholder = "$ " + warCost + "K";
  document.getElementById("jewel-cost").placeholder = "$ " + jewelCost + "K";
  displayCrowns();
}
