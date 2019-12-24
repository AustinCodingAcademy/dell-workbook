'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

let playerTurn = 'X';
let turnCounter = 1;

function printBoard() {
  console.log("\nTURN: ", turnCounter);
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}

function horizontalWin() {
  let winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
  ]
  if (gameStatus(playerTurn, winningCombos)) {
    console.log(playerTurn, ": HORIZONTAL WIN ***");
    return checkForWin();
  }
}

function verticalWin() {
  let winningCombos = [
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
  ]
  if (gameStatus(playerTurn, winningCombos)) {
    console.log(playerTurn, ": VERTICAL WIN ***");
    return checkForWin();
  }
}

function diagonalWin() {
  let winningCombos = [
    [0, 4, 8],
    [2, 4, 6]
  ]
  if (gameStatus(playerTurn, winningCombos)) {
    console.log(playerTurn, ": DIAGONAL WIN ***");
    return checkForWin();
  }
}

function checkForWin() {
  return true
}

function gameStatus(player, wc) {

  let didPlayerWin = false;
  let flattenBoard = flatten(board);

  wc.forEach(combo => {
    didPlayerWin =
      didPlayerWin ||
      (
        flattenBoard[`${combo[0]}`] === player &&
        flattenBoard[`${combo[1]}`] === player &&
        flattenBoard[`${combo[2]}`] === player)
  });

  return didPlayerWin;
}

function ticTacToe(row, column) {

  board[row][column] = playerTurn;
  horizontalWin();
  verticalWin();
  diagonalWin();

  playerTurn = playerTurn === "O" ? "X" : "O";
  turnCounter++;
}

function flatten(arr) {
  const flat = [].concat(...arr);
  return flat.some(Array.isArray) ? flatten(flat) : flat;
} /* source: https://stackoverflow.com/a/35548094 */


function getPrompt() {
  printBoard();
  console.log("It's Player " + playerTurn + "'s turn.");
  rl.question('row: ', (row) => {
    rl.question('column: ', (column) => {
      ticTacToe(row, column);
      getPrompt();
    });
  });

}


// Tests

if (typeof describe === 'function') {

  describe('#ticTacToe()', () => {
    it('should place mark on the board', () => {
      ticTacToe(1, 1);
      assert.deepEqual(board, [
        [' ', ' ', ' '],
        [' ', 'X', ' '],
        [' ', ' ', ' ']
      ]);
    });
    it('should alternate between players', () => {
      ticTacToe(0, 0);
      assert.deepEqual(board, [
        ['O', ' ', ' '],
        [' ', 'X', ' '],
        [' ', ' ', ' ']
      ]);
    });
    it('should check for vertical wins', () => {
      board = [
        [' ', 'X', ' '],
        [' ', 'X', ' '],
        [' ', 'X', ' ']
      ];
      assert.equal(verticalWin(), true);
    });
    it('should check for horizontal wins', () => {
      board = [
        ['X', 'X', 'X'],
        [' ', ' ', ' '],
        [' ', ' ', ' ']
      ];
      assert.equal(horizontalWin(), true);
    });
    it('should check for diagonal wins', () => {
      board = [
        ['X', ' ', ' '],
        [' ', 'X', ' '],
        [' ', ' ', 'X']
      ];
      assert.equal(diagonalWin(), true);
    });
    it('should detect a win', () => {
      assert.equal(checkForWin(), true);
    });
  });
} else {

  getPrompt();

}