"use strict";

const assert = require("assert");

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

let arr = [];

for (let i = 0; i < 10; i++) {
  arr.push(getRandomInt(0, 10));
}

// arr = [2, 1, 3, 7, 8, 9];
function swap(firstIdx, secondIdx, arr) {
  let temp = arr[firstIdx];
  arr[firstIdx] = arr[secondIdx];
  arr[secondIdx] = temp;
}

// Bubble sort is not a good way to sort because it
// takes n2 number of times items need to be touched
function bubbleSort(arr) {
  let counter = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    let sorted = true;
    for (let j = 0; j < arr.length - 1; j++) {
      counter++;
      console.log(arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        sorted = false;
        swap(j, j + 1, arr);
      }
    }
    if (sorted) {
      break;
    }
  }
  console.log(`Took me ${counter} times!`);
  return arr;
}
// console.log(arr);
// console.log(bubbleSort(arr));

// arr = [4, 5, 7, 8, 9, 0, 9, 1];
// mergsort splits array in half, sorts, and merges back
function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  const midIndex = Math.floor(arr.length / 2); // 4
  const arr1 = mergeSort(arr.slice(0, midIndex));
  const arr2 = mergeSort(arr.slice(midIndex));
  let sortedArr = [];

  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      sortedArr.push(arr1.shift());
    } else {
      sortedArr.push(arr2.shift());
    }
  }
  if (arr1.length) {
    sortedArr = [...sortedArr, ...arr1];
  } else {
    sortedArr = [...sortedArr, ...arr2];
  }
  return sortedArr;

  // if (arr1.length) {
  //   Array.push.apply(sortedArr, arr1);
  // } else {
  //   Array.push.apply(sortedArr, arr2);
  // }
  // return sortedArr;
}
// console.log(arr);
// console.log(mergeSort(arr));

// .pop() ==> .shift()
// .push() ==> .unshift()

arr = [1, 2, 3, 4];
let item = 3;
// Binary search splits array in to and compares to target item
function binarySearch(arr, item) {
  // Your code here
  let minIndex = 0;
  let maxIndex = arr.length - 1;
  let middle = Math.floor((minIndex + maxIndex) / 2);

  while (arr[middle] !== item && minIndex <= maxIndex) {
    if (item < arr[middle]) {
      maxIndex = middle - 1;
    } else {
      minIndex = middle + 1;
    }
    middle = Math.floor((minIndex + maxIndex) / 2);
  }
  return arr[middle] !== item ? false : middle;
}
console.log(arr);
console.log(item);

// Tests

if (typeof describe === "function") {
  function comparator(a, b) {
    if (Number(a) < Number(b)) return -1;
    if (Number(a) > Number(b)) return 1;
    return 0;
  }

  describe("#bubbleSort()", () => {
    it("should sort array", () => {
      const sorted = bubbleSort(arr);
      assert.deepEqual(sorted, arr.sort(comparator));
    });
  });

  describe("#mergeSort()", () => {
    it("should sort array", () => {
      const sorted = mergeSort(arr);
      assert.deepEqual(sorted, arr.sort(comparator));
    });
  });

  describe("#binarySearch()", () => {
    it("should return the index of given item if sorted array contains it", () => {
      const idx = binarySearch([1, 2, 3, 4], 3);
      assert.equal(idx, 2);
    });
    it("should return false if item not in sorted array", () => {
      const idx = binarySearch([1, 2, 3, 4], 5);
      assert.equal(idx, false);
    });
  });
} else {
  console.log("Run the tests!");
}
