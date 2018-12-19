'use strict';

document.addEventListener('DOMContentLoaded', () => {
  //allows all of the html to load before starting the js

  document.querySelector('#reset').addEventListener('click', () => {
    //tells the game to listen and do the following when the reset button is clicked
    const currentSpeed = document.querySelector('#square').style
      .animationDuration; //sets the variable to the speed of the spinning
    document.querySelector('#square').style.animationDuration = '1s'; //sets the spinning speed back to 1s to complete a full rotation
  });

  document.querySelector('#slow').addEventListener('click', () => {
    //tells the game to listen and do the following when the slow button is clicked
    const currentSpeed = document.querySelector('#square').style
      .animationDuration; //sets the variable to the speed of the spinning
    document.querySelector('#square').style.animationDuration = `${Number(
      currentSpeed.split('s')[0]
    ) + 5}s`; //increases the speed if the spinning by 5s with each click
  });

  document.querySelector('#slower').addEventListener('click', () => {
    //tells the game to listen and do the following when the slow button is clicked
    const currentSpeed = document.querySelector('#square').style
      .animationDuration; //sets the variable to the speed of the spinning
    document.querySelector('#square').style.animationDuration = `${Number(
      currentSpeed.split('s')[0]
    ) + 15}s`; //increases the speed if the spinning by 15s with each click
  });
});
