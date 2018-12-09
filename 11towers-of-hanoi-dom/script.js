'use strict';

document.addEventListener("DOMContentLoaded", function(event) {
  // You code here
  let stacks = {
    "1": ["100","75","50","25"],
    "2": [],
    "3": []};
  let source="";
  let dest="";
  let gameOver=false;
  document.querySelectorAll("[data-stack]").forEach(tower=> tower.addEventListener("click",event=>{
    if (gameOver) return;
    let towerClicked=event.target.dataset.stack;
    // console.log(towerClicked);
    if (source===""){ //setting source
      source= towerClicked;
      console.log(`move from ${towerClicked}`);
      return;
    }
    else //setting destination
    {
      dest=towerClicked;
      console.log(`move to ${towerClicked}`);

      if(checkvalid(source,dest)){
        console.log(`valid move from ${source} to ${dest}.`);
        movePiece(source,dest);
        source="";
        dest="";
        if (stacks["3"].length===4||stacks["2"].length===4){
          gameOver=true;
          document.querySelector("#announce-game-won").innerHTML="GAME OVER";
        }
      }else{
        console.log(`invalid move from ${source} to ${dest}.`);
        source="";
        dest="";
        return;
      } 
    }
  }));


  function movePiece(startStack, endStack){
    let movingBlock= stacks[startStack].pop();
    stacks[endStack].push(movingBlock);
    let movingPiece=document.querySelector(`[data-block="${movingBlock}"]`);
    document.querySelector(`[data-stack="${startStack}"]`).removeChild(document.querySelector(`[data-block="${movingBlock}"]`));
    document.querySelector(`[data-stack="${endStack}"]`).appendChild(movingPiece);
  }

  function checkvalid(arraya,arrayb){
    if (stacks[arraya].length === 0) {
      // console.log("illegal, source is empty");
      return false;
    }
    if (stacks[arrayb].length === 0) {
      // console.log("legal, dest is empty");
      return true;
    }
    if (
      Number(stacks[arraya][stacks[arraya].length - 1]) <
      Number(stacks[arrayb][stacks[arrayb].length - 1])
    ) {
      // console.log("legal, source is smaller than dest");
      return true;
    }
    // console.log("illegal, dest is smaller than source");
    return false;
  }

})
