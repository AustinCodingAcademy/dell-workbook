"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function movePiece(startStack, endStack) {
  stacks[endStack].push(stacks[startStack].pop());
}

function isLegal(startStack, endStack) {
  let sendingStackValue = stacks[startStack][stacks[startStack].length - 1];
  let recievingStackHigestValue = 0;
  if (stacks[endStack].length === 0) {
    recievingStackHigestValue = 0;
  } else {
    recievingStackHigestValue = stacks[endStack][stacks[endStack].length - 1];
  }
  if (recievingStackHigestValue === 0) {
    return true;
  }
  if (sendingStackValue >= recievingStackHigestValue) {
    return false;
  }
  return true;
}

function checkForWin() {
  if (stacks.b.length === 4 || stacks.c.length === 4) {
    return true;
  }
  return false;
}

function towersOfHanoi(startStack, endStack) {
  // Pull the value of the first choice (sending stack)
  let sendingStackValue = stacks[startStack][stacks[startStack].length - 1];
  let recievingStackHigestValue = 0;

  // Assign the reciving stack value to recieving stack
  // if (stacks[endStack].length === 0) {
  //   recievingStackHigestValue = 0;
  // } else {
  //   recievingStackHigestValue = stacks[endStack][stacks[endStack].length - 1];
  // }

  //check for legal move and if it is valid move the piece as indicated.
  //if it is not legal move report an error.
  //if (isLegal(sendingStackValue, recievingStackHigestValue)) {
  if (isLegal(startStack, endStack)) {
    // move piece
    movePiece(startStack, endStack);

    checkForWin();
    //else
    //report error, reset the move and ask for new input
  } else {
    console.log("Bad Move cannot move " + startStack + " to " + endStack);
    return false;
  }
}

function getPrompt() {
  printStacks();
  rl.question("start stack: ", startStack => {
    rl.question("end stack: ", endStack => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === "function") {
  describe("#towersOfHanoi()", () => {
    it("should be able to move a block", () => {
      towersOfHanoi("a", "b");
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe("#isLegal()", () => {
    it("should not allow an illegal move", () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal("a", "b"), false);
    });
    it("should allow a legal move", () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal("a", "c"), true);
    });
  });
  describe("#checkForWin()", () => {
    it("should detect a win", () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });
} else {
  getPrompt();
}
