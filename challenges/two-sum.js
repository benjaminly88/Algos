/*
  Given an array of numbers and a target number,
  return true if two of the numbers in the array add up to the target.
  Otherwise, return false.

  You may assume that each input would have exactly one solution, and you may not use the same element twice.
  The straightforward way to solve this problem would take O(n²)time. Is it possible to do this in O(n) time? 

  Example:

  const nums = [1, 2, 3, 5, 11, 15]
  twoSum(num, 7) -> true
  Rational:  nums[0] + nums[1] = 2 + 5 = 7,

  twoSum(nums, 9) -> false
  Rational: No elements inside the array sum up to the target number
*/

// const twoSum = (arr, target) => {
//   const sortedArr = arr.sort((a, b) => {
//     return a - b;
//   });
//   for (let i = 0; i < arr.length; i++) {
//     let starterNum = arr[i];
//     if (arr.length == 1) {
//       return false;
//     }
//     if (starterNum + arr[arr.length - 1] > target) {
//       arr.pop();
//       i--;
//     } else if (starterNum + arr[arr.length - 1] < target) {
//       continue;
//     } else if (starterNum + arr[arr.length - 1] == target) {
//       return true;
//     }
//   }
//   return false;
// };

const twoSum2 = (arr, target) => {
  const cache = {};
  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];
    if (cache[complement]) return true;
    cache[arr[i]] = true;
  }
  return true;
};

const nums = [1, 4, 6, 12, 9];
console.log(twoSum(nums, 2));

// given a sorted array
// iterate through the array
// adding the first and last valuoes
// if the number is greater than the given numkber
// pop the last number
// if the number is less tahn the given number
// go to the next number

// store the first number in the array to be added to
// if any two numbers add up to the given number return true
// if any two numbers add up higher than the given number
// define the stored number to the second number in the array

/*
Extension:
Given an array of numbers and a target number, 
return true if three of the numbers in the array add up to the target.
Otherwise, return false.

The straightforward way to solve this problem would take O(n³) time. Is it possible to do this in O(n²) time?

*/

const threeSum = (arr, target) => {};

module.exports = { twoSum, threeSum };
