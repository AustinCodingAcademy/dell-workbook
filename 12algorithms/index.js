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

function bubbleSort(arr) {
  let counter = 0;
  for (var i = 1; i < arr.length; i++) {
    for (var j = 0; j < i; j++) {
      counter++;
      if (arr[j] > arr[i]) {
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr;
  console.log("bubble sort iterations in total to sort : " + counter);
}

function mergeSort(arr) {
  if (arr.length < 2) return arr;
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  let indexLeft = 0;
  let indexRight = 0;

  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      result.push(left[indexLeft]);
      indexLeft++;
    } else {
      result.push(right[indexRight]);
      indexRight++;
    }
    return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
  }
}

function binarySearch(arr, item) {
  console.log(arr);
  console.log(item);
  var max = arr.length;
  var min = 0;
  while (min < max) {
    var mid = Math.floor((min + max) / 2);
    if (item == arr[mid]) {
      console.log(arr[mid] + "   " + mid);
      return mid;
      break;
    }
    if (item > arr[mid]) {
      min = mid + 1;
    } else {
      max = mid - 1;
    }
  }
  return false;
}

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
  // console.log(arr);
  // console.log("mergesort results are");
  // console.log(mergeSort(arr));
  // console.log("bubble sort results are");
  // bubbleSort(arr);
  // console.log(arr);
}
