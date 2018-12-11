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

function movePiece(startStack, endStack) {
  let block = stacks[startStack].pop(); //grab '1' from prop startStack, let block equal '1'
  stacks[endStack].push(block); //add '1' to prop endStack
}

function towersOfHanoi(startStack, endStack) {
  if (isLegal) {
    movePiece();
  } else {
    console.log('Choose another move');
  }
}

function isLegal(startStack, endStack) {
  let startLastIndex = stacks[startStack.length - 1];
  let startLastItem = stacks[startStack][startLastIndex];
  let endLastIndex = stacks[endStack.length - 1];
  let endLastItem = stacks[endStack][endLastIndex];

  if (startLastItem < endLastItem) return true;
  if (endStack.length - 1 === 0) return true;
}

//big thing on top of little = false, little thing on top of big thing = true,

function checkForWin() {
  if (endStack.length === 4) {
    return true;
  }
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
