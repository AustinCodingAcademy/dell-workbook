"use strict";

document.addEventListener("DOMContentLoaded", function(event) {
  document.querySelector(".ball").style.transform = `rotate(0deg)`;
  let transitionTime=10;
  let distance = 0;
  let reserve=0;
  document.querySelector(".ball").style.transition = `all ${transitionTime}s ease-in 0s`;
  document.querySelector(".ball").addEventListener("click", event => {
    if (transitionTime <=0) return;
    // let rotation = document.querySelector(".ball").getAttribute("transform");
    distance= distance+10;
    reserve = 10;
    transitionTime = 10;
    let swinger=setInterval( swing(100*distance), 500);
    

    function swing(arc){
      if (reserve <= 0)clearInterval(swinger);
      document.querySelector(".ball").style.transition = `all ${transitionTime}s ease-in 0s`;
      document.querySelector(".ball").style.transform = `rotate(${arc}deg)`;
      reserve --; transitionTime++;
    }
  
    
  });
});
