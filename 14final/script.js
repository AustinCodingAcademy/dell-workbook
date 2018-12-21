"use strict";
// initializing my vairables
let taxes = 0;              //holds taxes collected
let ruled = 1;              //holds kingdoms rules
let jewelsOwned = 1;        //holds number of jewels owned
let warCost = 50;           //holds cost to wage war to win another kingdom
let jewelCost = 150;        //holds cost to buy next crowns.  
let startGame = 0;          //used to initialize game when form first opens
let maxJewels = 30;         //max number of jewels that can be purchased 


//listener to form events
document.addEventListener("DOMContentLoaded", () => {
  if (!startGame) {
    //games hasn't started so calls routine to initialize form
    initializeForm();  
  }

  document.getElementById("coin").onclick = function(e) {
    //updates taxes collected for each click
    taxes = taxes + (1 * ruled * jewelsOwned);
    console.log("taxes " + taxes);
    updateForm();
  };

  document.getElementById("war").onclick = function(e) {
    //checks first to see if enough funds to wage war 
    //then updates kingdoms rules

    console.log("taxes " + taxes);
    console.log("ruled " + ruled);
    if (taxes >= warCost) {
      updateWarCost();
    }
  };

  document.getElementById("buy-jewels").onclick = function(e) {
    //checks first to see if enought funds to buy jewels
    //then updates price for next jewels and shows purchase
    if (taxes >= jewelCost) {
      console.log("taxes " + taxes);
      console.log("jewelCost " + ruled);
      updateJewels();
    }
  };

  document.getElementById("reset").onclick = function(e) {
    //re-initializes form if user wants to start over
    initializeForm();
  };
  
});

function updateJewels() {
  //reduces taxes collected by jewel cost
  //updates cost for next jewel purchase
  //updates the form to reflect changes to jewels and taxes.

  taxes = taxes - jewelCost;
  jewelCost = 1 //ruled * jewelsOwned * 150;
  jewelsOwned = jewelsOwned + 1;
  updateForm();
}

function updateWarCost() {
  //reduces taxes collected by war cost
  //updates number of kingdoms rules
  //updates the form to reflect changes to kingdoms and taxes.

  ruled = ruled + 1;
  taxes = taxes - warCost;
  warCost = ruled * 50;
  updateForm();
}

function displayCrowns() {
// hides or shows jewels based on purchases
// declares win
  let i = 1;
  
  console.log("load crowns " + jewelsOwned);

  for (i = 1; i <= maxJewels; i++) {
    //used to enable/disable crown images based on 
    //number of jewels owned
    if (i <= jewelsOwned) {
      document.querySelector("#crown" + i).style["display"] = "inline";
    } else {
      document.querySelector("#crown" + i).style["display"] = "none";
    }
  }
  if (jewelsOwned >= maxJewels){
    //checks to see of all the jewels purchased
    //declares win if they are
    //disables the button onthe form
      document.getElementById("maxjewel").innerHTML =
    "Congratulations!! You Win!! You own all the crowns!!";
    document.getElementById("buy-jewels").disabled = true;
    document.getElementById("button").style.backgroundColor="#948caa";
  }
}

function initializeForm() {
  //initials the form on form load and 
  //when user clicks tart over button 
  startGame = 1;
  taxes = 0;
  ruled = 1;
  jewelsOwned = 1;
  warCost = 50 
  jewelCost = 1; //150;

  //re-enables buy jewels button if user already won and clears win msg
  document.getElementById("buy-jewels").disabled = false;
  document.getElementById("maxjewel").innerHTML =   "";

  updateForm();  //writes to the form
  
}

function updateForm() {
  //handles writing to the form when taxes are collected
  //wars are waged
  //crowns purchased
  
  document.getElementById("taxescollected").placeholder = "$ " + taxes + "K";
  document.getElementById("kingdomsruled").placeholder = ruled;
  document.getElementById("war-cost").placeholder = "$ " + warCost + "K";
  document.getElementById("jewel-cost").placeholder = "$ " + jewelCost + "K";
  displayCrowns();
}
