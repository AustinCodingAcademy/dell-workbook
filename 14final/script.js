'use strict';
var num = 0;

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("counter").innerHTML = "c o o k i e   c o u n t e r : " + (num);
    document.querySelector('#speedup').addEventListener('click', () => {

        const currentSpeed = document.querySelector('.cookie').style.animationDuration;
        console.log(currentSpeed);
        document.querySelector('.cookie').style.animationDuration = `${Number(currentSpeed.split('s')[0]) - 5}s`
        document.getElementById("counter").innerHTML = "c o o k i e   c o u n t e r : " + (num);
        num++;
  });

});
