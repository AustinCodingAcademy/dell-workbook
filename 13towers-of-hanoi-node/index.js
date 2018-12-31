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
  var item = stacks[startStack].pop();
  if (!isLegal(item, stacks[endStack])) {
    console.log("not legal, try again");
    stacks[startStack].push(item);
  } else {
    console.log("you did legal move");
    var count = stacks[endStack].push(item);
    checkForWin(count);
  }
}

function isLegal(item, arraytocheck) {
  if (arraytocheck.length > 0) {
    var lastitem = arraytocheck.pop();
    arraytocheck.push(lastitem);
    if (lastitem > item) {
      return true;
    } else {
      console.log("you have entered incorrect value reenter");
      return false;
    }
  }
  return true;
}

function checkForWin(count) {
  if (count == 4) {
    console.log("you won in " + rounds + " rounds");
    win = true;
  }
}

function towersOfHanoi(startStack, endStack) {
  // Your code here
  if (
    (startStack === "a" || startStack === "b" || startStack === "c") &&
    (endStack === "a" || endStack === "b" || endStack === "c") &&
    !(startStack === endStack)
  ) {
    movePiece(startStack, endStack);
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
