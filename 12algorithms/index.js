'use strict';

const assert = require('assert');

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

let arr = [];

for (let i = 0; i < 10; i++) {
  arr.push(getRandomInt(0, 10));
}

function bubbleSort(arr) {
  for(let outer=1;outer<arr.length;outer++ )
  {
    for(let inner=0;inner<arr.length;inner++)
    {
      if(arr[inner] > arr[inner+1])
      {
        let temp = arr[inner]
        arr[inner] = arr[inner+1];
        arr[inner+1] = temp;
      }      
    }
  }
  return arr;
}

function mergeSort(arr) {
  if(arr.length <2)
    return arr;  
  const middle = Math.floor(arr.length/2)
  const left = arr.slice(0,middle)
  const right = arr.slice(middle)

  return merge(mergeSort(left),mergeSort(right))  
}

function merge(left,right)
{
  let result = []
  let indexLeft = 0;
  let indexRight = 0;

  while(indexLeft < left.length && indexRight < right.length){
    if(left[indexLeft]< right[indexRight]){
      result.push(left[indexLeft])
      indexLeft++
    }     
    else{
      result.push(right[indexRight])
      indexRight++
    }
    return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
  }

}

function binarySearch(arr, item) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start+end)/2);

  while(item !== arr[middle] && start < end)
  {
    if(item<arr[middle])
     end = middle-1
    else
     start = middle+1
     middle = Math.floor((start+end)/2)
  }
  return (arr[middle] !== item) ? -1 : middle
  

}

console.log("BUBBLESORT")
console.log(arr);
console.log("sortedarray:")
console.log(bubbleSort(arr));
console.log("MERGESORT");
console.log(mergeSort(arr));
console.log("BINARY SEARCH");
let item = 1;
let result =binarySearch(arr,item) 
if(result === -1)
  console.log(`Item ${item} Not found`)
else
  console.log(`Item ${item} Found at index ${result}`)
  

// Tests

if (typeof describe === 'function') {

  function comparator(a, b) {
    if (Number(a) < Number(b)) return -1;
    if (Number(a) > Number(b)) return 1;
    return 0;
  }

  describe('#bubbleSort()', () => {
    it('should sort array', () => {
      const sorted = bubbleSort(arr);
      assert.deepEqual(sorted, arr.sort(comparator));
    });
  });

  describe('#mergeSort()', () => {
    it('should sort array', () => {
      const sorted = mergeSort(arr);
      assert.deepEqual(sorted, arr.sort(comparator));
    });
  });

  describe('#binarySearch()', () => {
    it('should return the index of given item if sorted array contains it', () => {
      const idx = binarySearch([1, 2, 3, 4], 3);
      assert.equal(idx, 2);
    });
    it('should return false if item not in sorted array', () => {
      const idx = binarySearch([1, 2, 3, 4], 5);
      assert.equal(idx, false);
    });
  });

} else {

  console.log('Run the tests!')

}