'use strict';

document.addEventListener("DOMContentLoaded", () => {

  document.querySelector('.start-game').addEventListener('click', (event) => {
    (function addDot() {
      setTimeout(() => {
        dots[id] = new Dot(id);
        dropDot(dots[id]);
        id++;
        addDot();
      }, randInterval());
    })();

    event.target.remove();    
  });

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
  
  function randInterval() {
    return Math.round(Math.random() * maxInterval);
  }

  function randSize() {
    return Math.round(Math.random() * 4);
  }

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
      return `#F86624`;
      break;
    
    default:
      break;
    }
  }

  function Dot(id) {
    this.id = id;
    this.size = randSize();
  }

  function dropDot(dot) {
    // Add dot to DOM
    let dotHTML = `<span id="${dot.id}" class="dot size-${dot.size}">${dotValues[dot.size]}</span>`;
    document.querySelector('.drop-zone').insertAdjacentHTML('afterbegin', dotHTML);

    // Style and position  dot
    let dotElement = document.getElementById(`${dot.id}`);
    dotElement.style.backgroundColor = randColor();
    dotElement.style.left = Math.round(Math.random() * 90) + '%';
    dotElement.style.animationDuration = animationDuration + 's';

    // Remove dot after animation duration
    setTimeout(() => {
      if (dots[dot.id]) {
        dotElement.remove();
        lives--;
        if (lives !== 0 && lives > 0 ) {
          document.querySelector('.lives').innerHTML = lives;
        } else if (lives === 0) {
          endGame();
        }
      }
    }, animationDuration * 1000);

    // Add click handler to dots
    dotElement.addEventListener('click', () => {
      dotElement.remove();
      dots = dots.filter(item => item.id === dot.id);
      totalPoints += dotValues[dot.size];
      document.querySelector('.total-points').innerHTML = totalPoints;

      if (totalPoints >= pointsToNextLevel) {
        level++;
        pointsToNextLevel += 200;
        document.querySelector('.level').innerHTML = level;
        animationDuration -= 1;
        maxInterval -= 500;
      }
    })
  }

  function endGame() {
    document.querySelector('.lives').innerHTML = lives;
    document.querySelector('.game-over').style.display = 'flex';
  }

});