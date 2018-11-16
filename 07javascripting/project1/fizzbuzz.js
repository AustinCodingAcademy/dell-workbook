'use strict';

let a=[];
for (let i=1;i<=100;i++){
  a[i-1]= i;
  if ((i%3===0) || (i%5===0)){
    a[i-1]='';
    if (i%3===0){a[i-1]+='fizz'}
    if (i%5===0){a[i-1]+='buzz'}
  }
}
console.log(a);