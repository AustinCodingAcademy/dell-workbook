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
  let counter = 0;
  for (let i = 0; i < arr.length; i++){
    let sorted = true;
    for(let j = 0; j < arr.length; j++){
      counter++;
      if (arr[j] > arr[j + 1]) {
        sorted = false;
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
    if(sorted){
      break;
    }
  }
  console.log(counter)
  return arr;
}

arr = [4,5,7,8,9,0,9,1];
function mergeSort(arr) {
  if (arr.length < 2) return arr;

  const midIdx = Math.floor(arr.length / 2); //4
  const arr1 = mergeSort(arr.slice(0, midIdx));
  const arr2 = mergeSort(arr.slice(midIdx));

  const sortedArr = [];
  while (arr1.length && arr2.length){
    if (arr1[0] < arr2[0]) {
      sortedArr.push(arr1.shift());
    } else {
      sortedArr.push(arr2.shift());
    }
  }
  // console.log(arr1);
  // console.log(arr2);
  if (arr1.length) {
    sortedArr.push.apply(arr1);
  } else {
    sortedArr.push.apply(arr2);
  }
  return sortedArr;
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
  console.log(mergeSort(arr));
}