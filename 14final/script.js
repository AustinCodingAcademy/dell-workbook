'use strict';

document.addEventListener('DOMContentLoaded', () => {
  let speedUpRate = 1;
  let speedUpperRate = 25;

  document.querySelector('#fast').addEventListener('click', () => {
    speedUp(speedUpRate);
  });

  document.querySelector('#faster').addEventListener('click', () => {
    speedUp(speedUpperRate);
  });

  function speedUp(speed)
  {
    const currentSpeed = getComputedStyle(document.querySelector('.square')).animationDuration;
    if (currentSpeed === '0s') {
      document.querySelector('.square').style.animationDuration = "100000s";
    } else if (Number(currentSpeed.split('s')[0]) - speed <= 0) {
      speedUpRate /= 10;
      speedUpperRate /= 10;
      document.querySelector('.square').style.animationDuration = `${Number(currentSpeed.split('s')[0]) - speed/10}s`;
    } else{
      document.querySelector('.square').style.animationDuration = `${Number(currentSpeed.split('s')[0]) - speed}s`;
    }
  }
});