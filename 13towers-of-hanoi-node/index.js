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
  // Your code here
  if (!isLegal(startStack, endStack)) return false;
  stacks[endStack].push(stacks[startStack].pop());
}

function isLegal(arraya, arrayb) {
  // Your code here
  if (stacks[arraya].length === 0) {
    // console.log("illegal, source is empty");
    return false;
  }
  if (stacks[arrayb].length === 0) {
    // console.log("legal, dest is empty");
    return true;
  }
  if (
    stacks[arraya][stacks[arraya].length - 1] <
    stacks[arrayb][stacks[arrayb].length - 1]
  ) {
    // console.log("legal, source is smaller than dest");
    return true;
  }
  // console.log("illegal, dest is smaller than source");
  return false;
}

function checkForWin() {
  // Your code here
  return stacks.b.length === 4 || stacks.c.length === 4;
}

function towersOfHanoi(startStack, endStack) {
  // Your code here
  if (!isLegal(startStack, endStack)) return false;
  stacks[endStack].push(stacks[startStack].pop());
  if (checkForWin()) console.log("game over");
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
