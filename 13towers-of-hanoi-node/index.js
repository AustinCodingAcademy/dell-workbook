'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

var originalStackInfo = {};

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function movePiece(startStack, endStack) {
  stacks[endStack].push(stacks[startStack].pop());
}

function isLegal(startStack, endStack) {
  var startStackLength = stacks[startStack].length;
  var endStackLength = stacks[endStack].length;
  if (stacks[startStack][startStackLength - 1] > stacks[endStack][endStackLength - 1]) {
    return false;
  }

  return true;
}

function checkForWin() {
  if ((stacks.a.length === originalStackInfo["startStackNumber"]
    || stacks.b.length === originalStackInfo["startStackNumber"]
    || stacks.c.length === originalStackInfo["startStackNumber"])
    && stacks[originalStackInfo["startStackLine"]].length === 0) {
    return true;
  }
  return false;
}

function towersOfHanoi(startStack, endStack) {
  if (stacks[startStack] === undefined || stacks[endStack] === undefined) {
    console.log("***Please select stacks from 'a', 'b', or 'c'***");
    return;
  }

  if(startStack === endStack)
    return;

  if (isLegal(startStack, endStack)) {
    if (Object.keys(originalStackInfo).length === 0) {
      originalStackInfo["startStackLine"] = startStack;
      originalStackInfo["startStackNumber"] = stacks[startStack].length;
    }
    movePiece(startStack, endStack);
    if (checkForWin()) {
      console.log("Congrats, you won the game");
      originalStackInfo = {};
    }
  } else {
    console.log("***This is an illegal move***");
  }
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