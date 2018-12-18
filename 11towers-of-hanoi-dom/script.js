"use strict";

document.addEventListener("DOMContentLoaded", function(event) {
  // You code here
  // tried using as much of the towersofhanoinode code and then change to work for DOM...but ended up getting
  // stuck so I copied code to help in areas I was stuck...still ended up with a real mess
  let stacks = {
    "1": ["100", "75", "50", "25"],
    "2": [],
    "3": []
  };
  let startStack = "";
  let endStack = "";

  document.querySelectorAll("[data-stack]").forEach(stack =>
    stack.addEventListener("click", event => {
      // first time to use event.target.dataset.stack...was not familiar with this
      let stackClicked = event.target.dataset.stack;
      console.log(`select move ${stackClicked}`);
      if (startStack === "") {
        startStack = stackClicked;
        console.log(`move from ${stackClicked}`);
        return true;
      } else {
        endStack = stackClicked;
        console.log(`move to ${stackClicked}`);
        // towersOfHanoi(startStack, endStack); broke code when trying to move below code to its own function
        if (isLegal(startStack, endStack)) {
          movePiece(startStack, endStack);
          // tried several ways to not need to constently re-assign these to "" but kept breaking code
          startStack = "";
          endStack = "";
        }
        checkForWin();
      }
    })
  );

  // function towersOfHanoi(startStack, endStack) {
  //   // Your code here
  //   if (isLegal(startStack, endStack)) {
  //     movePiece(startStack, endStack);
  //     startStack = "";
  //     endStack = "";
  //   }
  //   checkForWin();
  // }

  function movePiece(startStack, endStack) {
    let item = stacks[startStack].pop();
    stacks[endStack].push(item);
    let movingItem = document.querySelector(`[data-block="${item}"]`);
    document.querySelector("#announce-game-won").innerHTML = "";
    // first time using removeChild and appendChild...
    document.querySelector(`[data-stack="${startStack}"]`).removeChild(document.querySelector(`[data-block="${item}"]`));
    document.querySelector(`[data-stack="${endStack}"]`).appendChild(movingItem);
  }

  function isLegal(startStack, endStack) {
    // Your code here
    var startIndex = stacks[startStack].length - 1;
    var endIndex = stacks[endStack].length - 1;

    if (stacks[startStack].length === 0) {
      console.log("startStack === 0");
      return false;
    }
    if (stacks[endStack].length === 0) {
      console.log("endStack === 0");
      return true;
    }
    if (
      Number(stacks[startStack][startIndex]) < Number(stacks[endStack][endIndex])) {
        console.log("Number area");
      return true;
    }else {
      console.log("Invalid Move!");
      document.querySelector("#announce-game-won").innerHTML = "INVALID MOVE!";
      startStack = "";
      endStack = "";
      return false;
    }
  }

  function checkForWin() {
    // Your code here
    if (stacks["2"].length === 4) {
      document.querySelector("#announce-game-won").innerHTML = "GAME OVER";
      return true;
    } else {
      return false;
    }
  }

});
