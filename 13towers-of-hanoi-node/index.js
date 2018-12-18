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

function printStacks() {
  console.log('a: ' + stacks.a);
  console.log('b: ' + stacks.b);
  console.log('c: ' + stacks.c);
}

function isLegal(startStack, endStack) {
  let startLastIndex = stacks[startStack][stacks[startStack].length - 1];
  let startLastItem = stacks[startStack][startLastIndex];
  let endLastIndex = stacks[endStack][stacks[endStack].length - 1];
  let endLastItem = stacks[endStack][endLastIndex];

  if (startLastIndex < endLastIndex || !endLastIndex) {
    //if the first row is less than the second row, true. If the second row is empty, true
    return true;
  }
  return false;
}

//big thing on top of little = false, little thing on top of big thing = true,

function checkForWin() {
  if (stacks.b.length === 4 || stacks.c.length === 4) {
    //If stack b has four items or stack c has four items then game over since all items must be stacked in order
    console.log(' the game');
    return true;
  } else {
    return false;
  }
}

function towersOfHanoi(startStack, endStack) {
  if (isLegal(startStack, endStack)) {
    stacks[endStack].push(stacks[startStack].pop()); //grab '1' from startStack, add it to endStack only if the startStack item is smaller than the endstack item, or if endStack is empty
  }
  checkForWin();
}

function getPrompt() {
  printStacks();
  rl.question('start stack: ', startStack => {
    rl.question('end stack: ', endStack => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {
  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
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
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });
} else {
  getPrompt();
}
