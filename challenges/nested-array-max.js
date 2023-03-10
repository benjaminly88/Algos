/* 

Write a function to find the largest number in an arbitrarily nested array. 
The function should return the largest number contained anywhere in the array, 
regardless of how deeply nested it is.
Assume all elements in each array are numbers.

Ex:

const arrFlat = [1, 3, 10, 6];
nestedArrMax(arrFlat);
-> 10

const arrNested = [1, [3, [10], 6]];
nestedArrMax(arrNested);
-> 10

*/

const nestedArrMax = (arr) => {
  let biggestVal = -Infinity;

  const process = (arr) => {
    arr.forEach((el) => {
      if (Array.isArray(el)) {
        process(el);
      } else {
        if (biggestVal < el) biggestVal = el;
        return;
      }
    });
  };

  process(arr);
  if (biggestVal === -Infinity) {
    return undefined;
  }
  return biggestVal;
};

const arrNested = [1, [3, [10], 6]];
console.log(nestedArrMax(arrNested));

// declare a maximum number
// iterate through the array, if the element is an array, call the function once again
// if the element is a number, compare it to the stored biggest val
// return biggest val

/*

Extension:
Write a function to find the largest number in a nested array, up to and including a given level. 
Return the largest number without going deeper in the nested array than the specified level.
Assume all elements in each array are numbers.

The original array is considered to be at depth 1, any inner array is depth 2, etc.

Ex:

const arrNested = [1, [3, [10], 6]];
nestedArrMaxLevel(arrNested, 1);
-> 1

nestedArrMaxLevel(arrNested, 2);
-> 6

nestedArrMaxLevel(arrNested, 3);
-> 10

*/

const nestedArrMaxLevel = (arr, level) => {
  let biggestVal = -Infinity;

  const process = (arr, level) => {
    if (level === 0) return;
    arr.forEach((el) => {
      if (Array.isArray(el)) {
        process(el, level - 1);
      } else {
        if (el > biggestVal) biggestVal = el;
        return;
      }
    });
  };

  process(arr, level);
  if (biggestVal === -Infinity) {
    return undefined;
  }
  return biggestVal;
};

console.log(nestedArrMaxLevel(arrNested, 1));
console.log(nestedArrMaxLevel(arrNested, 2));
console.log(nestedArrMaxLevel(arrNested, 3));

module.exports = { nestedArrMax, nestedArrMaxLevel };
