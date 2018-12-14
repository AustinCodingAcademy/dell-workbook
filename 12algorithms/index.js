'use strict';

const assert = require('assert');

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

let arr = [];

for (let i = 0; i < 1000; i++) {
  arr.push(getRandomInt(0, 1000));
}

let counter = 0;
function bubbleSort(arr) {
  // Your code here
  for (j = 0; j < arr.length; j++) {
    let sorted = true;
    for (i = 0; i < arr.length; i++) {
      counter++;
    }
    if(arr[i] > arr[i+1]){
      sorted = false;
      swap (i,j+1, arr);
    }
  }
  if (sorted){
    return;
  }
}
console.log(`I touched ${counter} things!`);


// const arr = [4, 5, 7, 8, 9, 0, 9, 1]
function mergeSort(arr) {
  // Your code here
  if (arr.length < 2){
    return arr;
  }
  const midIdx = Math.florr(arr.length / 2); //4
  const arr1 = mergeSort(arr.slice(0, midIdx));
  const arr2 = mergeSort(arr.slice(midIdx));

  const sortedArr = [];

  while(arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]){
      sortedArr.push(arr1.shift());
    }
    else {
      sortedArr.push(arr2.shift());
    }
    console.log(sortedArr);
  }

  if (arr1.length) {
    sortedArr.push.apply(sortedArr, arr1);
  }
  else {
    sortedArr.push.apply(sortedArr, arr2);
  }

  return sortedArr;
}

// .pop() ==> .shift()
// .push() ==> .unshift()

function binarySearch(arr, item) {
  // Your code here
}

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