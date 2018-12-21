//'use strict';
// var gameActive = false,
//     gameDuration = 25,
//     gameSpeed = 1000,   
//     speedIncrement = 14,    
//     highScore = 0,
//     currentScoreElement = document.getElementById("current-score"),
//     highScoreElement = document.getElementById("high-score"),
//     cells = document.getElementsByClassName("grid-cell"),
//     activeCell,  
//     currentGameSpeed,
//     currentGameDuration,
//     currentGameScore;


//     document.getElementById("start-game").addEventListener("click", function() {
//       if (!gameActive) {
//          startGame();
//       }
//    });
   
//   //  for (var i = 0; i < cells.length; i++) {
//   //     (function(i) {      
//   //      cells[i].addEventListener('click', function() {
//   //         if (gameActive) {
//   //            whack(i);
//   //         }
//   //      });
//   //     }(i));
//    //}
   
//    function startGame() {
//       document.getElementById("start-game").disabled = true;
//       gameActive = true;
//       currentGameSpeed = gameSpeed;
//       currentGameDuration = gameDuration;
//       currentGameScore = 0;   
//       //activeCell = null;
      
//       //for (var i = 0; i < cells.length; i++) {
//       //cells[i].classList.remove('active','whacked');
//    }

// document.addEventListener('DOMContentLoaded', () => {
//   document.getElementById('speed').addEventListener('click', () => {
//     const currentSpeed = getComputedStyle(document.querySelector('.square')).animationDuration;
//     document.querySelector('.square').style.animationDuration = `${Number(currentSpeed.split('s')[0]) + 10}s`    
//   })
// });

var gameActive = false,
    gameDuration = 25,
    gameSpeed = 1000,   
    speedIncrement = 14,    
    highScore = 0,
    currentScoreElement = document.getElementById("current-score"),
    cells = document.getElementsByClassName("grid-cell"),
    activeCell,  
    currentGameSpeed,
    currentGameDuration,
    currentGameScore;

document.getElementById("start-game").addEventListener("click", function() {
   if (!gameActive) {
      startGame();
   }
});

for (var i = 0; i < cells.length; i++) {
   (function(i) {      
    cells[i].addEventListener('click', function() {
       if (gameActive) {
          whack(i);
       }
    });
   }(i));
}

function startGame() {
   document.getElementById("start-game").disabled = true;
   gameActive = true;
   currentGameSpeed = gameSpeed;
   currentGameDuration = gameDuration;
   currentGameScore = 0;   
   activeCell = null;
   
   for (var i = 0; i < cells.length; i++) {
   cells[i].classList.remove('active','whacked');
   }

   tick();
}

function endGame() {
   gameActive = false;
   if (cells && activeCell) {  //currently ended on an active Cell
      cells[activeCell].classList.remove('active');
      activeCell = null;
   }
   document.getElementById("start-game").disabled = false;
}

function tick() {
   if (currentGameDuration <= 0) {
      return endGame();
   }
   
   currentGameDuration -= 1;
   
   var activeCells = document.getElementsByClassName('active');
   for (cell of activeCells) {
      cell.classList.remove('active');      
      cell.classList.remove('whacked');
   }
   
   var newActiveCell;   
   do {
       newActiveCell = Math.floor(Math.random() * cells.length);
   }
   while (newActiveCell == activeCell); //this is needed to not show the same cell twice randomly
   
   cells[newActiveCell].classList.add('active');
   activeCell = newActiveCell;
   
   console.log(currentGameSpeed);
   currentGameSpeed -= speedIncrement;
   setTimeout(tick, currentGameSpeed);
}

function whack(index) {
   if (index == activeCell && !cells[index].classList.contains('whacked')) {      
      cells[index].classList.add('whacked');
      currentGameScore += 1;
      currentScoreElement.textContent = currentGameScore;
   }
}