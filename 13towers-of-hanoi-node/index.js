"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let fromStack = "";
let toStack = "";

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

let win = [4, 3, 2, 1];

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function movePiece() {
  // Your code here
  let block = 0;
  if (isLegal()) {
    block = stacks[fromStack].pop();
    console.log("number = " + block);
    stacks[toStack].push(block);
  }
}

function isLegal() {
  // Your code here
  let rc = false;
  if (
    stacks[toStack][stacks[toStack].length - 1] <
    stacks[fromStack][stacks[fromStack].length - 1]
  ) {
    console.log("islegal = false");
    rc = false;
  } else {
    if (stacks[fromStack].length >= 1) {
      console.log("islegal = true");
      rc = true;
    } else {
      rc = false;
    }
  }

  return rc;
}

function checkForWin() {
  // Your code here
  let match = false;



  stacks.b.forEach(function(bElement) {
    stacks.c.forEach(function(cElement) {
      win.forEach(function(winElement) {
        if (bElement === winElement || cElement === winElement) {
          match = true;
        } else {
          match = false;
        }
      });
    });
  });

  return match ;
}

function towersOfHanoi(startStack, endStack) {
  fromStack = startStack;
  toStack = endStack;

  // Your code here
  movePiece();
}

function getPrompt() {
  printStacks();
  console.log(checkForWin());
  if (!checkForWin()) {
    rl.question("start stack: ", startStack => {
      rl.question("end stack: ", endStack => {
        towersOfHanoi(startStack, endStack);
        getPrompt();
      });
    });
  } else {
    console.log("Congratulations - You've Won!!");
  }
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
