'use strict';

const assert = require('assert');

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

let arr = [50,2,324,123,3,64,93];

// for (let i = 0; i < 1000; i++) {
//   arr.push(getRandomInt(0, 1000));
// }
bubbleSort(arr);
mergeSort(arr);
function swap(firstIdx, secondIdx, arr) {
  let temp = arr[firstIdx];
  arr[firstIdx] = arr[secondIdx];
  arr[secondIdx] = temp;

}

function bubbleSort(arr) {
  let sorted = true;
  for (let j=0; j<arr.length; j++){
      for (let i=0; i< arr.length-1; i++){
          console.log(sorted)
          if (arr[i] > arr[i + 1]) {
              sorted = false;
              swap(i, i+1,arr)
              console.log(arr);
          } else {
              sorted = true;
          }
      }
  }
  console.log(arr);
  return(arr);
  // Your code here
}

function mergeSort(arr) {
  // Your code here

  for (let i =0; i<arr.length/2; i++){
    if (arr.length <2) {
      return arr;
    }
    const split = Math.floor(arr.length/2);
    const firstArray = arr.slice(0,split);
    const secondArray = arr.slice(split);
    console.log("firstArray: ", firstArray)
    console.log("secondtArray: ",secondArray);
    const arr1 = mergeSort(firstArray);
    const arr2 = mergeSort(secondArray);
    
    const sortedArray=[];
    while (arr1.length && arr2.length) {
      if (arr1[0] < arr2[0]) {
        sortedArray.push(arr1.shift())
      } else {
        sortedArray.push(arr2.shift())
      }
    }
    if (arr1.length) {
      sortedArray.push.apply(arr1);
    } else {
      sortedArray.push.apply(arr2)
    }

    //.pop ===> shift()
    //.push ===> unshift()
  }
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