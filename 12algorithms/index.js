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

function bubbleSort(arr) {
  let sort = true;

  while (sort) {
    sort = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        sort = true;
      }
    }
  }

  return arr;
}

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  const midIdx = Math.floor(arr.length / 2);
  const arr1 = mergeSort(arr.slice(0, midIdx));
  const arr2 = mergeSort(arr.slice(midIdx));

  const sortedArr = [];
  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      sortedArr.push(arr1.shift());
    } else {
      sortedArr.push(arr2.shift());
    }
  }

  if (arr1.length) {
    sortedArr.push.apply(sortedArr, arr1);
  } else {
    sortedArr.push.apply(sortedArr, arr2);
  }

  return sortedArr;
}

function binarySearch(arr, item) {
  let targetPos = Math.floor(arr.length / 2);
  let previousPos = arr.length;
  let sliceLength = targetPos;
  
  while (sliceLength > 0) {
    if (arr[targetPos] === item) {
      return targetPos;
    } else if (arr[targetPos] > item) {
      previousPos = targetPos;
      targetPos = Math.floor(targetPos / 2);
      sliceLength = Math.floor(sliceLength / 2);
    } else if (arr[targetPos] < item) {
      previousPos = previousPos > targetPos ? previousPos : targetPos;
      sliceLength = Math.floor(sliceLength / 2);
      targetPos = Math.floor((targetPos + previousPos) / 2);
    }
  }

  return false;
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
      const idx = binarySearch([0, 1, 2, 3, 4], 3);
      assert.equal(idx, 3);
    });
    it('should return false if item not in sorted array', () => {
      const idx = binarySearch([1, 2, 3, 4], 5);
      assert.equal(idx, false);
    });
  });

} else {

  console.log('Run the tests!')

}