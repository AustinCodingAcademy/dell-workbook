'use strict';

//  import { compileFunction } from "vm";

document.addEventListener('DOMContentLoaded', () => {
  var data = {
    speedUpRate: 1,
    speedUpperRate: 25,
    originalSpeed: 1000
  };

  setInterval(goGo, 1000);

  document.querySelector('#dog').addEventListener('click', () => {
    speedUp(data.speedUpRate);
    // console.log(getComputedStyle(document.querySelector('.square')).animationDuration);
  });

  document.querySelector('#shake').addEventListener('click', () => {
    speedUp(data.speedUpRate);
  });

  document.querySelector('#shake-more').addEventListener('click', () => {
    speedUp(data.speedUpperRate);
  });

  function goGo() {
    speedUp(1);
  }

  function speedUp(speed) {
    const currentSpeed = getComputedStyle(document.querySelector('.square')).animationDuration;
    if (currentSpeed === '0s') {
      document.querySelector('.square').style.animationDuration = `${data.originalSpeed}s`;
    } else if (Number(currentSpeed.split('s')[0]) - speed <= 0) {
      data.speedUpRate /= 10;
      data.speedUpperRate /= 10;
      document.querySelector('.square').style.animationDuration = `${Number(currentSpeed.split('s')[0]) - speed / 10}s`;
    } else {
      document.querySelector('.square').style.animationDuration = `${Number(currentSpeed.split('s')[0]) - speed}s`;
    }
    updateReport();
  }

  function updateReport() {
    let currentSpeed = getComputedStyle(document.querySelector('.square')).animationDuration;
    // console.log(1/getComputedStyle(document.querySelector('.square')).animationDuration);
    document.querySelector('#current-total').innerText = Math.floor(data.originalSpeed - currentSpeed.split('s')[0]);
    document.querySelector('#dus').innerText = (1 / Number(currentSpeed.split('s')[0])).toFixed(3);
  }
});