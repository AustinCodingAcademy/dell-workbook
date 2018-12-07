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

// arr = [2, 3, 1, 4];
function swap(firstIdx, secondIdx, arr) {
  let temp = arr[firstIdx];
  arr[firstIdx] = arr[secondIdx];
  arr[secondIdx] = temp;
  [arr[secondIdx], arr[firstIdx]] = [...arr];
}

function bubbleSort(arr) {
  let counter = 0;
  let sorted;
  do {
    sorted = true;
    for (let j = 0; j < i; j++) {
      counter++;
      if (arr[j] > arr[j + 1]) {
        sorted = false;
        swap(j, j + 1, arr);
      }
    }
  } while (!sorted)
  console.log(`I touched ${counter} things!`);
  return arr;
}
// console.log(arr);

arr = [4, 5, 7, 8, 9, 0, 9, 1];
console.log(arr);
console.log(mergeSort(arr));
function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const midIdx = Math.floor(arr.length / 2); // 4
  const arr1 = mergeSort(arr.slice(0, midIdx));
  const arr2 = mergeSort(arr.slice(midIdx));

  const sortedArr = [];
  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      sortedArr.push(arr1.shift())
    } else {
      sortedArr.push(arr2.shift())
    }
    console.log(sortedArr)
  }
  if (arr1.length) {
    Array.push.apply(sortedArr, arr1)
  } else {
    Array.push.apply(sortedArr, arr2)
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