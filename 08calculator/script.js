'use strict';

let operatorSign = ['+', '-', '*', '/']; 

function addNumber(num) {
  document.querySelector("#results").value += num;
}

function clearResults() {
  document.querySelector("#results").value = "";
}

function addition() {
  document.querySelector("#results").value += "+";
}

function subtraction() {
  // all this is doing is literally adding the minus sign in the input field. 
  // it's just aesthetics, not calculating anything yet.
  document.querySelector("#results").value += "-";
}

function multiplication() {
  document.querySelector("#results").value += "*";
}

function division () {
  document.querySelector("#results").value += "/";
}

function decimal() {
  document.querySelector("#results").value += ".";
}

function equals() {
  document.querySelector("#results").value = eval(document.querySelector("#results").value);
  // if ( it dont work) {
  //   call the switch sign function;
  // }
  // else {
  //   document.querySelector("#results").value = eval(document.querySelector("#results").value);
  // }
  // try {
  //   document.querySelector("#results").value = eval(document.querySelector("#results").value);
  // }
  // catch {

  //   if (lastChar.indexOf(operatorSign)) {

  //   }
  // }
}

function deleteLast() {
  let current = document.querySelector("#results").value;
  document.querySelector("#results").value = current.slice(0, -1);
}

function signFlip() {
  let current = document.querySelector("#results").value;
  let firstChar = current.charAt(0);
  let lastChar = current.charAt(-1);
  if (operatorSign.indexOf(firstChar) === 1) { // firstChar is a -, delete it, else add it 
    document.querySelector("#results").value = document.querySelector("#results").value.slice(1);
  } else if (operatorSign.indexOf(firstChar) === 0) {
    document.querySelector("#results").value = '-' + document.querySelector("#results").value.slice(1);
  } else {document.querySelector("#results").value = '-' + document.querySelector("#results").value;}
}

// function integer(numbr) {
//   return Math.round(numbr) === numbr;
// }

function switchSignButton() {
  let answero = document.querySelector("#results").value;

  if (Math.round(answero) === NaN) {
    document.querySelector("#results").value = '6' + document.querySelector("#results").value;
  }

  // if results.eval === 'number' --> flip sign

  // I don't think I need to introduce extra var
  // let answer = eval(document.querySelector("#results").value) 
  if (typeof eval(document.querySelector("#results").value) === 'number') {
    signFlip();
  }

  // if results.eval !=== 'number' --> ask yourself, why not and what can I do about it other than break.
  // if ['*','/'] in firstChar, then error out
  // if ['*','/'] in lastChar, do as you did above, flip sign 
  // (user is most likely in the middle of their operation and 
  // just remembered that they needed to flip the sign)
  




//switchSign function ending stache, don't comment out!!
}

// // there are 2 possibilities: 
// // 1) #results.eval === 'number', or..
// // 2) #results.eval !=== 'number'
// // if 1) then flip sign in beginning
// // if 2) then error out



// // create variable to check if there is a non integer in index[0]
// let current = document.querySelector("#results").value;
// let firstChar = current.charAt(0);
// let plusMinusSign = ['+', '-']; 
// let otherSign = ['/', '*'];
//   if (document.querySelector("#results").value <= 0 || document.querySelector("#results").value > 0) {
//     // does this work?:
//     document.querySelector("#results").value *= -1;
//     // this will work for sure:
//     // document.querySelector("#results").value = "-" + document.querySelector("#results").value
//   } else if (plusMinusSign.indexOf(firstChar) === 1) { //if firstChar is a minus sign, get rid of the sign
//     document.querySelector("#results").value = current.slice(1);
//   } else if (firstChar === 0) { //if firstChat is a plus sign, replace it with a minus sign
//     document.querySelector("#results").value = '-' + current.slice(1);
//       console.log('hey dude, you entered + first');
      
//     } else {}
//   } else if (otherSign.indexOf(firstChar) === 0) {
//     document.querySelector("#results").value = "U DUN GOOF'D";
//   }
