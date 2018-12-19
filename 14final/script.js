'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // let spinSpeed = document.querySelector('#square').style.animationDuration;
  // let spinFast = `${Number(spinSpeed.split('s')[0]) - 10}`;

  // document.querySelector('.button').addEventListener('click', () => {
  //   const currentSpeed = document.querySelector('#square').style
  //     .animationDuration;
  //   document.querySelector('#spinSpeed').innerText = animationDuration;

  // function spinnerGame () {
  //   var spin = '100s';
  //   var spinFast =
  // }
  document.querySelector('#reset').addEventListener('click', () => {
    const currentSpeed = document.querySelector('#square').style
      .animationDuration;
    document.querySelector('#square').style.animationDuration = '1s';
  });

  // function slowHalf() {
  //   document.querySelector('#square').style.animationDuration *= .5;

  // }
  document.querySelector('#slow').addEventListener('click', () => {
    const currentSpeed = document.querySelector('#square').style
      .animationDuration;
    document.querySelector('#square').style.animationDuration = `${Number(
      currentSpeed.split('s')[0]
    ) + 5}s`;
  });

  document.querySelector('#slower').addEventListener('click', () => {
    const currentSpeed = document.querySelector('#square').style
      .animationDuration;
    document.querySelector('#square').style.animationDuration = `${Number(
      currentSpeed.split('s')[0]
    ) + 15}s`;
  });
});

// });
