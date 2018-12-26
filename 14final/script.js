/* USE CHROME FOR BEST RESULTS */
/* "Danny" a lazy cat decided to take a walk on a christmas night on city wall. 
For every 100 steps he took, he found a treat.
For every treat he ate decrements treats count by 1 and his stepcount increments by 1 .
For every 500 steps he took , he got a bonus treat . 
When he decides to take a bonus treat, bonus treat adds to treats and decrements bonus by 1.
Treat max Limit is 5. When reaches maxlimit treats reset to 0. 
*/
var data ={
  steps:0,
  treats:0,
  bonus:0
};

var isTreatTaken = false;
var stepcountTreatIncrement = 0;
var stepcountBonusIncrement = 0;
var incrementer = 1;

function updateReport(){
  document.querySelector('#stepsTotal').innerHTML = Math.floor(data.steps);
  document.querySelector('#Treats').innerHTML = Math.floor(data.treats);
  document.querySelector('#Bonus').innerHTML = Math.floor(data.bonus);
  document.querySelector('#cat').style['animation'] = 'sprite-animation 1.2s steps(16,end) infinite';
  document.querySelector('#city').style['animation'] = 'city-animation 120s linear infinite';
  isTreatTaken = false;    
}

// For every 100 steps treat count increments by 1.
function CheckTreat(){
  if(stepcountTreatIncrement>=100){
    data.treats++; 
    stepcountTreatIncrement = 0; 
  }   
}

// For every 100 steps, bonus count increments by 1
function CheckBonusTreat(){
  if(stepcountBonusIncrement>=500){
    data.bonus++; 
    stepcountBonusIncrement = 0;    
  }
}

// When treat count reaches to 5 , it will reset to 0. 
function CheckTreatMaxLimit(){
  if(data.treats >= 5)
    data.treats = 0;
}

// Click on "Danny" to take steps.
document.querySelector('#cat').addEventListener('click', function() {
  data.steps += incrementer;
  stepcountTreatIncrement +=incrementer; 
  stepcountBonusIncrement += incrementer;
  if(Math.floor(stepcountBonusIncrement/500)>0) {
    data.bonus++;
    stepcountBonusIncrement = 0;
  }       
  CheckTreat();
  CheckTreatMaxLimit();
  CheckBonusTreat();
  updateReport();
})

// TreatButtonClick :Take Treat if available. Every time when a treat is taken it increments steps by 1 and decrements treat count by 1.
document.querySelector('#TakeTreat').addEventListener('click', function() {
  if(data.treats>0){
    isTreatTaken = true;
    data.treats -= 1;
    stepcountTreatIncrement =0;
    incrementer++;  
    updateReport();     
  }
})

// BonusTreatClick : Every Time a bonus treat is taken, it will increment treat by 1 and decrement bonustreat by 1.
document.querySelector('#TakeBonusTreat').addEventListener('click', function() {
  if(data.bonus>0){
    data.treats += 1;
    data.bonus -= 1;
    updateReport();
  }
})

