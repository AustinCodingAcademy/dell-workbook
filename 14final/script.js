'use strict';

document.addEventListener('DOMContentLoaded', () => {
  var data = {
    regularSpeed: 1,
    speedUpRate: 10,
    speedUpperRate: 50,
    originalSpeed: 1000,
    currentTotal: 0,
    rate: 10
  };

  // automatically increase one shaking speed up every second 
  setInterval(goGo, 1000);

  // when user clicks dog picture, dog picture can start shaking
  document.querySelector('#dog').addEventListener('click', () => {
    speedUp(data.speedUpRate);
  });

  // increase shaking speed 5 clicks faster than normal 1 click on the dog picture by adding up 5 total speed
  document.querySelector('#shake').addEventListener('click', () => {
    speedUp(data.speedUpRate);
  });

  // increase shaking speed 25 clicks faster than normal 1 click on the dog picture by adding up 5 total speed
  document.querySelector('#shake-more').addEventListener('click', () => {
    speedUp(data.speedUpperRate);
  });

  // increase shaking speed 1 click up
  function goGo() {
    speedUp(data.regularSpeed);
  }

  // check shake speed to see if it's equal to 0s which means it hasn't started shaking so we need to set it to initial start value
  // check the current shake speed to see if it's smaller than 1s, the speed up function will decrease by 1/10 becasue shaking rate speed up when it's less than 1 sec
  function speedUp(speed) {
    const currentSpeed = getComputedStyle(document.querySelector('.square')).animationDuration;
    data.currentTotal = data.currentTotal + speed * data.rate / 10;

    if (currentSpeed === '0s') {
      document.querySelector('.square').style.animationDuration = `${data.originalSpeed}s`;
    } else if (Number(currentSpeed.split('s')[0]) - speed <= 0) {
      data.regularSpeed /= 10;
      data.speedUpRate /= 10;
      data.speedUpperRate /= 10;
      document.querySelector('.square').style.animationDuration = `${Number(currentSpeed.split('s')[0]) - speed / 10}s`;
      data.rate = data.rate * 10;
    } else {
      if (((currentSpeed.split('s')[0]) - speed) < 0.0001) {
        document.querySelector('.square').style.animationDuration = 0.0001;
      } else {
        document.querySelector('.square').style.animationDuration = `${Number(currentSpeed.split('s')[0]) - speed}s`;
      }
    }

    updateReport();
  }

  // update dry up speed and also current total speed to show on the screen for user to see
  function updateReport() {
    let currentSpeed = getComputedStyle(document.querySelector('.square')).animationDuration;
    document.querySelector('#current-total').innerText = data.currentTotal;
    if ((1 / Number(currentSpeed.split('s')[0])).toFixed(3) > 1000) {
      document.querySelector('#dus').innerText = 1000.000;
    } else {
      document.querySelector('#dus').innerText = (1 / Number(currentSpeed.split('s')[0])).toFixed(3);
    }
  }
});