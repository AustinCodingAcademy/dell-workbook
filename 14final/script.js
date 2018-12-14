'use strict';

document.addEventListener('DOMContentLoaded', () => {

  let count = 0;
  let delta = 0;
  setInterval(() => {
    count += delta;
    document.querySelector(".counter").innerHTML = count;
  }, 10000);

  document.querySelector("#burger").addEventListener('click', () => {
    count += 1;
    document.querySelector(".counter").innerHTML = count;
  });

  document.querySelector('#fries').addEventListener('click', () => {
    if (count >= 10) {
    count -= 10;
    delta += 1;
    document.querySelector(".counter").innerHTML = count;
    }
  });

  document.querySelector('#drink').addEventListener('click', () => {
    if (count >= 50) {
      count -= 50;
      document.querySelector(".counter").innerHTML = count;
      delta += 2;
    }
  });

  document.querySelector('#milkshake').addEventListener('click', () => {
    if (count >= 250) {
      count -= 250;
      document.querySelector(".counter").innerHTML = count;
      delta += 3;
    }
  });

  document.querySelector('#ice cream').addEventListener('click', () => {
    if (count >= 1000) {
      count -= 1000;
      document.querySelector(".counter").innerHTML = count;
      delta += 5;
    }
  });

})
