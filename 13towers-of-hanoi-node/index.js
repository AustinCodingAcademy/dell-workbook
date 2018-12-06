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
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function movePiece(startStack, endStack) {
  let popped = stacks[startStack].pop();
  console.log(stacks[endStack].push(popped));
  // Your code here
}

function isLegal(startStack, endStack) {
  // Your code here
  if (stacks[endStack].length===0){
    console.log("This stack is empty");
    return true;
  } else {
    console.log(stacks[endStack]);
    console.log("This stack has something in it");
  }
  let startIndex = startStack.length -1;
  let endIndex = endStack.length - 1;
  if (stacks[startStack][startIndex] < stacks[endStack][endIndex]) {
    console.log("Legal move!")
    return true;
  } else {
    console.log("not legal move")
    console.log(stacks[startStack][startIndex]);
    console.log(stacks[endStack][endIndex]);
    return false;
  }

}

function checkForWin() {
  // Your code here
  if (stacks.b.length === 4) {
    return true;
  } else if (stacks.c.length === 4) {
    return true;
  }
  return false;
}

function towersOfHanoi(startStack, endStack) {
  if (isLegal(startStack, endStack)) {
    movePiece(startStack, endStack);
  }
  // Your code here

}

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
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