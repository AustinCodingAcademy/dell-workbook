'use strict';

document.addEventListener("DOMContentLoaded", () => {
  // Game Variables
  let id = 0;
  let dots = [];
  let dotValues = {
    0: 10,
    1: 20,
    2: 25,
    3: 40,
    4: 50,
    5: 100
  }
  let lives = 3;
  let totalPoints = 0;
  let level = 1;
  let pointsToNextLevel = 200;
  let animationDuration = 15;
  let maxInterval = 5000;

  // Start Game
  document.querySelector('.start-game').addEventListener('click', (event) => {
    (function addDot() {
      setTimeout(() => {
        dots[id] = new Dot(id, animationDuration, randColor());
        dropDot(dots[id]);
        selfDestructTimer(dots[id]);
        id++;
        addDot();
      }, randInterval());
    })();

    event.target.remove();    
  });
  
  // Return random interval
  function randInterval() {
    return Math.round(Math.random() * maxInterval);
  }

  // Return random dot size
  function randSize() {
    return Math.round(Math.random() * 4);
  }

  // Return random color
  function randColor() {
    let color = Math.round(Math.random() * 4);
    
    switch (color) {
    case 0:
      return `#2D3142`;
      break;

    case 1:
      return `#EF5B5B`;
      break;

    case 2:
      return `#20A39E`;
      break;

    case 3:
      return `#FFBA49`;
      break;

    case 4:
      return `#7A5980`;
      break;
    
    default:
      break;
    }
  }

  // Dot constructor
  function Dot(id, expiresIn, color) {
    this.id = id;
    this.size = randSize();
    this.expiresIn = expiresIn;
    this.color = color;
    this.clicked = false;
  }

  // Generate and drop dot
  function dropDot(dot) {
    // Add dot to DOM
    let dotHTML = `<span id="${dot.id}" class="dot size-${dot.size}">${dotValues[dot.size]}</span>`;
    document.querySelector('.drop-zone').insertAdjacentHTML('afterbegin', dotHTML);

    // Style and position  dot
    let dotElement = document.getElementById(`${dot.id}`);
    dotElement.style.backgroundColor = dot.color;
    dotElement.style.left = Math.round(Math.random() * 90) + '%';
    dotElement.style.animationDuration = animationDuration + 's';

    // Add click handler to dots
    dotElement.addEventListener('click', () => {
      dotElement.remove();
      dots[dot.id].clicked = true;
      totalPoints += dotValues[dot.size];
      document.querySelector('.total-points').innerHTML = totalPoints;

      if (totalPoints >= pointsToNextLevel) {
        level++;
        pointsToNextLevel += 200;
        document.querySelector('.level').innerHTML = level;
        awardPowerUp();

        if (animationDuration > 5) {
          animationDuration -= 1;
        }

        if (maxInterval > 2000) {
          maxInterval -= 750;          
        } 
      }
    })
  }

  // Award random power up
  function awardPowerUp() {
    let powerUps = document.querySelectorAll('.power-up');
    let randomPowerUp = powerUps[Math.round(Math.random() * 4)];

    randomPowerUp.style.opacity = '1';
    randomPowerUp.style.pointerEvents = 'all';
    
    randomPowerUp.addEventListener('click', () => {
      dots.forEach(dot => {
        if (dot.color === `#${randomPowerUp.dataset.color}` && !dot.clicked) {
          // Set dot to clicked and remove from DOM
          dot.clicked = true;
          let dotElement = document.getElementById(`${dot.id}`);
          dotElement.remove();

          // Add points to total
          totalPoints += dotValues[dot.size];
          document.querySelector('.total-points').innerHTML = totalPoints;
        }

        randomPowerUp.style.opacity = '0.3';
        randomPowerUp.style.pointerEvents = 'none';
      });
    })
  }

  // Remove dot from DOM and decrease lives 
  // if not clicked in time
  function selfDestructTimer(dot) {
    setTimeout(() => {
      if (!dots[dot.id].clicked) {
        dot.expiresIn--;

        if (dot.expiresIn > 0) {
          selfDestructTimer(dot);
        } else {
          let dotElement = document.getElementById(`${dot.id}`);
          dotElement.remove();
          lives--;
          if (lives !== 0 && lives > 0 ) {
            document.querySelector('.lives').innerHTML = lives;
          } else if (lives === 0) {
            endGame();
          }
        }
      }
    }, 1000);
  }

  // End game
  function endGame() {
    document.querySelector('.lives').innerHTML = lives;
    document.querySelector('.game-over').style.display = 'flex';
  }

});