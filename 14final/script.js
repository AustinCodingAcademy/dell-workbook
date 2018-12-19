'use strict';

document.addEventListener("DOMContentLoaded", () =>  {

  // function go(speed) {
  //   document.querySelector(speed).addEventListener('click'), (e) => {
  //     const value = Number(e.target.getAttribute('data-val'));
  //     const currentSpeed = getComputedStyle(document.querySelector('.square')).animationDuration;
  //     document.querySelector('.square').style.animationDuration = `${Number(currentSpeed.split('s')[0]) + (value)}s`
  //   }
  // }
  
  // document.querySelectorAll('button').forEach(button => {
  //   button.addEventListener('click', (e) => {
  //     const val = e.target.getAttribute('data-val');
  //     console.log(val);
  //     const currentSpeed = getComputedStyle(document.querySelector('.square')).animationDuration;
  //     document.querySelector('.square').style.animationDuration = `${Number(currentSpeed.split('s')[0]) + (-.1)}s`
  //   })
  // })


    document.querySelector('#Fast').addEventListener('click', () => {
    const currentSpeed = getComputedStyle(document.querySelector('.square')).animationDuration;
    document.querySelector('.square').style.animationDuration = `${Number(currentSpeed.split('s')[0]) + (-.25)}s`
  })


  document.querySelector('#Faster').addEventListener('click', () => {
    const currentSpeed = getComputedStyle(document.querySelector('.square')).animationDuration;
    document.querySelector('.square').style.animationDuration = `${Number(currentSpeed.split('s')[0]) + (-.50)}s`
  })


  document.querySelector('#Fastest').addEventListener('click', () => {
    const currentSpeed = getComputedStyle(document.querySelector('.square')).animationDuration;
    document.querySelector('.square').style.animationDuration = `${Number(currentSpeed.split('s')[0]) + (-1)}s`
  })

});