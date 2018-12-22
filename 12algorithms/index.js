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
  // Your code here
  const arry=arr;
  let sorted = false;
  while (!sorted){
    //console.log(arry);
    sorted= true;
    for (let i=0; i<(arry.length-1);i++){
      if (arry[i]>arry[i+1]){
        sorted = false;
        let temp=arry[i];
        arry[i]=arry[i+1];
        arry[i+1]=temp;
      }
    }
  }
  return arry;
  //console.log(arry);
}

function mergeSort(arr) {
  // Your code here
  if (arr.length <=1) return arr;
  let left=[];
  let right=[]
  for (let i=0; i<arr.length;i++){
    if (i<(arr.length/2))
      left.push(arr[i]);
    else right.push(arr[i]);
  }
  let sortedLeft=mergeSort(left);
  let sortedRight=mergeSort(right);
  let returnArray=[];
  let leftIndex=0;
  let rightIndex=0;
  while(leftIndex < sortedLeft.length || rightIndex < sortedRight.length){
    if (leftIndex === sortedLeft.length) {
      returnArray.push(sortedRight[rightIndex]);
      rightIndex++;
    }else if(rightIndex === sortedRight.length){
      returnArray.push(sortedLeft[leftIndex]);
      leftIndex++;
    }else if (sortedLeft[leftIndex]<=sortedRight[rightIndex]){
      returnArray.push(sortedLeft[leftIndex]);
      leftIndex++;
    }else{
      returnArray.push(sortedRight[rightIndex]);
      rightIndex++;
    }
  }
  return returnArray;
}

function binarySearch(arr, item) {
  // Your code here
  let leftIndex=0;
  let rightIndex=arr.length-1;
  //let midPoint= Math.floor((arr.length)/2)-1;
  while (true){
    let midPoint=Math.ceil((leftIndex+rightIndex)/2);
    if (arr[midPoint] ===item) return midPoint;
    if (leftIndex === rightIndex)return false;
    if (arr[midPoint] > item) {
      rightIndex=midPoint-1;
    }else leftIndex=midPoint+1;
  }
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

  console.log('Run the tests!');
  console.log(bubbleSort([1,3,4,7,8,6,5,2]));
  console.log(mergeSort([1,3,4,7,8,6,5,2]));
  console.log(binarySearch([1,2,3,4,5,6,19,1000,1021,2012], 3));
  console.log(binarySearch([1, 2, 3, 4], 3));
}