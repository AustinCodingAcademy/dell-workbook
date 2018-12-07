'use strict';

const assert = require('assert');

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

let arr = [6,5,4,3,2,1];

for (let i = 0; i < 1000; i++) {
  arr.push(getRandomInt(0, 1000));
}

function swap(firstIdx, secondIdx, arr) {
  let temp = arr[firstIdx]
        arr[firstIdx] = arr[secondIdx];
        arr[secondIdx] = temp;
}
let counter = 0;
function bubbleSort(arr) {
  
  for (let j=0; j<arr.length -1; j++) {}
    let sorted = true;
    for (i=0; i< arr.length -1; i++){
      counter ++;
      if (arr[i] > arr[i + 1]) {
        sorted = false;
        swap(i, j +1, arr);
        }
      }
      if (sorted) {
        break;
      }
    }
    console.log(`I touched ${counter} things!`);
    return arr;


function mergeSort(arr) {
  // Your code here
}

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