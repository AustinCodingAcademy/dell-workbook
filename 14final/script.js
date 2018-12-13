'use strict';

document.addEventListener('DOMContentLoaded', () => {

  document.querySelector('#slow').addEventListener('click', () => {
    const currentSpeed = document.querySelector('.square').style.animationDuration;
    document.querySelector('.square').style.animationDuration = `${Number(currentSpeed.split('s')[0]) + 1}s`
  });

  document.querySelector('#slower').addEventListener('click', () => {
    const currentSpeed = document.querySelector('.square').style.animationDuration;
    document.querySelector('.square').style.animationDuration = `${Number(currentSpeed.split('s')[0]) + 10}s`
  });

});