var numbers = [1,2,3,4,5,6,7,8,9,10];

//-----------this is the way the tutorial does it:-------------
//  var filtered = numbers.filter(function evenNumbers (number) {
//    return number % 2 === 0;
//  });

//-----------Kevin's way (much cleaner!!)-------------
var filtered = numbers.filter(num => num % 2 === 0);

console.log(filtered);