"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let win = false;
let rounds = 0;
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
  if (!isLegal(startStack, endStack)) {
    console.log("not legal, try again");
  } else {
    console.log("you did legal move");
    var item = stacks[startStack].pop();
    stacks[endStack].push(item);
  }
}

function isLegal(startStack, endStack) {
  if (stacks[endStack].length < 1) return true;
  if (
    endStack[stacks[endStack].length - 1] >
    startStack[stacks[startStack].length - 1]
  )
    return true;
  else return false;
}

function checkForWin() {
  let win = false;
  if (
    stacks.a.length === 0 &&
    (stacks.b.length === 0 || stacks.b.length === 4) &&
    (stacks.c.length === 0 || stacks.c.length === 4)
  ) {
    win = true;
  }
  return win;
}

function towersOfHanoi(startStack, endStack) {
  // Your code here
  if (
    (startStack === "a" || startStack === "b" || startStack === "c") &&
    (endStack === "a" || endStack === "b" || endStack === "c") &&
    !(startStack === endStack)
  ) {
    movePiece(startStack, endStack);
    checkForWin();
  } else {
    console.log("enter valid stacks");
  }
}

function getPrompt() {
  printStacks();
  if (!win) {
    rounds++;
    rl.question("start stack: ", startStack => {
      rl.question("end stack: ", endStack => {
        towersOfHanoi(startStack, endStack);
        getPrompt();
      });
    });
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
