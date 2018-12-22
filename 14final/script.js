'use strict';



document.addEventListener("DOMContentLoaded", () =>  {

  //Setting variables to beginning values for the tire
  var data = {
    totalRevs:360, 
    totalCurrent:0, 
    totalRPS: 0
  };

  //Range at which the program will run
  setInterval (go,1000);

  //Function to move tire
  function go() {
    data.totalRevs += data.totalRPS;
    data.totalCurrent += data.totalRPS;
    document.querySelector('#wheel').style['transform'] = 'rotate(' + data.totalRevs + 'deg)';
    updateReport();
  };

  //Fill in the textbox to let user know the click value going up
  function updateReport() {
    document.querySelector('.TotalBox').innerHTML = Math.floor(data.totalCurrent);
  };

  document.querySelector('.square').addEventListener('click', function() {
    data.totalRevs ++;
    data.totalCurrent ++;
    updateReport();
  })


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

}); 