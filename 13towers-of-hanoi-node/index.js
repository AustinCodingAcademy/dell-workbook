'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

let moves = 1;

// get names of objects in stacks array
const stackNames = Object.getOwnPropertyNames(stacks);
const numOfStacks = stacks[stackNames[0]].length;

function printStacks() {
  console.log("\n" + moves);
  console.log("-------------------");
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
  console.log("-------------------");
}

function isLegal(s, e) {

  if (typeof stacks[s] == 'undefined' || typeof stacks[e] == 'undefined') {
    console.log("## ERROR: need to use: " + stackNames + "\n")
    return false
  }

  let start = stacks[s].slice(-1)[0];
  let end = stacks[e].slice(-1)[0];

  return (end == null || start < end) ? true : false
}

function checkForWin() {

  for (let i = 1; i < stackNames.length; i++) {
    if (stacks[stackNames[i]].length === numOfStacks) {
      console.log("\n## END GAME ##");
      return true;
    }
  }
  return false
}

function towersOfHanoi(startStack, endStack) {
  if (isLegal(startStack, endStack)) {
    let movingBlock = stacks[startStack].pop();
    stacks[endStack].push(movingBlock);
    moves++;
    console.log("(" + movingBlock + ") moved from [" + startStack + "] to [" + endStack + "]");
  } else
    console.log("\n!!! MOVE NOT LEGAL**")
}

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);

      if (checkForWin() === false)
        getPrompt();

    });
  });

}


// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, {
        a: [4, 3, 2],
        b: [1],
        c: []
      });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = {
        a: [],
        b: [4, 3, 2, 1],
        c: []
      };
      assert.equal(checkForWin(), true);
      stacks = {
        a: [1],
        b: [4, 3, 2],
        c: []
      };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}