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

function printBoard() {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}

function horizontalWin() {
  const horizonmoves = [
    [[0,0],[0,1],[0,2]],
    [[1,0],[1,1],[1,2]],
    [[2,0],[2,1],[2,2]]
  ]

  let horizontalWin = false;
  horizonmoves.forEach(combo => {
    horizontalWin = horizontalWin || (
      board[combo[0][0]][board[combo[0][1]]] === playerTurn &&
      board[combo[1][0]][board[combo[1][1]]] === playerTurn &&
      board[combo[2][0]][board[combo[2][1]]] === playerTurn 
      )
  })
  
  // //Other way to check 
  // return horizonmoves.some(combo => {
  //   return (
    // board[combo[0][0]][board[combo[0][1]]] === playerTurn &&
    // board[combo[1][0]][board[combo[1][1]]] === playerTurn &&
    // board[combo[2][0]][board[combo[2][1]]] === playerTurn 
    // )
  // }) 
}

function verticalWin() {
  const verticalmoves = [
    [[0,0],[1,0],[2,0]],
    [[0,1],[1,1],[2,1]],
    [[0,2],[1,2],[2,2]]
  ]

  let verticalWin = false;
  verticalmoves.forEach(combo => {
    verticalWin = verticalWin || (
      board[combo[0][0]][board[combo[0][1]]] === playerTurn &&
      board[combo[1][0]][board[combo[1][1]]] === playerTurn &&
      board[combo[2][0]][board[combo[2][1]]] === playerTurn 
      )
  })
  // Your code here
}

function diagonalWin() {
  const diagonallmoves = [
    [[0,0],[1,1],[2,2]],
    [[2,0],[1,1],[0,2]]
  ]

  let diagonalWin = false;
  diagonallmoves.forEach(combo => {
    diagonalWin = diagonalWin || (
      board[combo[0][0]][board[combo[0][1]]] === playerTurn &&
      board[combo[1][0]][board[combo[1][1]]] === playerTurn &&
      board[combo[2][0]][board[combo[2][1]]] === playerTurn 
      )
  })
  // Your code here
}

function checkForWin() {
  return horizontalWin() || verticalWin() || diagonalWin();
  // Your code here
}

function ticTacToe(row, column) {
  console.log('**********Row: ' , row, 'column:', column, '**********')
  board[row][column] = playerTurn;
  if (playerTurn === 'X') {
    playerTurn = 'O';
  } else {
    playerTurn = 'X'
  }
}

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
      assert.deepEqual(board, [ [' ', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should alternate between players', () => {
      ticTacToe(0, 0);
      assert.deepEqual(board, [ ['O', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should check for vertical wins', () => {
      board = [ [' ', 'X', ' '], [' ', 'X', ' '], [' ', 'X', ' '] ];
      assert.equal(verticalWin(), true);
    });
    it('should check for horizontal wins', () => {
      board = [ ['X', 'X', 'X'], [' ', ' ', ' '], [' ', ' ', ' '] ];
      assert.equal(horizontalWin(), true);
    });
    it('should check for diagonal wins', () => {
      board = [ ['X', ' ', ' '], [' ', 'X', ' '], [' ', ' ', 'X'] ];
      assert.equal(diagonalWin(), true);
    });
    it('should detect a win', () => {
      assert.equal(checkForWin(), true);
    });
  });
} else {

  getPrompt();

}