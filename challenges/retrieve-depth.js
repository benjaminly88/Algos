/*

Given an arbitrarily nested array of numbers and a positive integer "depth",
return a new array consisting of the numbers with depth less than or equal to
the provided depth, in order of appearance.

The original array is considered to be at depth 1, and inner arrays are at
greater depth.

For example:

retrieveDepth([2, [4, [7], 1], 5], 1) -> [2, 5] because only the 2 and 5 are at
"depth 1", and everything else is too deep. The 4 and 1 are at "depth 2", and
the 7 is at "depth 3".

retrieveDepth([2, [4, [7], 1], 5], 2) -> [2, 4, 1, 5] becuase the 2 and 5 are at
"depth 1", the 4 and 1 are at "depth 2", and the 7 is too deep because it's at
"depth 3".

retrieveDepth([2, [4, [7], 1], 5], 3) -> [2, 4, 7, 1, 5] because every number
is within "depth 3". No number is deeper.

*/

// const retrieveDepth = (arr, depth, returnArr = []) => {
//   depth--;
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       if (depth != 0) {
//         retrieveDepth(arr[i], depth, returnArr);
//       }
//     } else {
//       returnArr.push(arr[i]);
//     }
//   }
//   return returnArr;
// };

const retrieveDepth = (arr, depth) => {
  const results = [];

  const process = (arr, depth) => {
    if (depth === 0) return;

    arr.forEach(el => {
      if (Array.isArray(el)) {
        process(el, depth - 1);
      } else {
        results.push(el);
      }
    })
  }

  process(arr, depth)
  return results
}

// console.log(retrieveDepth([2, [4, [7], 1], 5], 1));
// console.log(retrieveDepth([2, [4, [7], 1], 5], 2));
// console.log(retrieveDepth([2, [4, [7], 1], 5], 3));

// iterate through the array
// at every iteration, if element is an array, call the function again deincrement the depth
// if depth is = 0 return the final array
// if the element is not an array return 0
// increment the function by one

/*

Extension:

Given an arbitrarily nested array of numbers and a nonnegative integer "depth",
return a new nested array that's flattened to a certain level of depth.

Flattening at "depth 0" just returns the same array.
Flattening at "depth 1" returns the array flattened at just one level.

For example:

flattenDepth([2, [4, [7], 1], 5], 0)
  -> [2, [4, [7], 1], 5] // the same array

flattenDepth([2, [4, [7], 1], 5], 1)
  -> [2, 4, [7], 1, 5] // flattened at one level

flattenDepth([2, [4, [7], 1], 5], 2)
  -> [2, 4, 7, 1, 5] // flattened at two levels

flattenDepth([2, [4, [7], 1], 5], 3)
  -> [2, 4, 7, 1, 5] // flattening at greater levels just produces a completely
flattened array

*/

const flattenDepth = (arr, depth, res = arr) => {
  return arr.flat(depth);
  // if (depth == 0) {
  //   return res;
  // }
  // res = arr.flat();
  // return flattenDepth(res, (depth -= 1), res);
};

console.log(flattenDepth([2, [4, [7], 1], 5], 0));
console.log(flattenDepth([2, [4, [7], 1], 5], 1));
console.log(flattenDepth([2, [4, [7], 1], 5], 2));
console.log(flattenDepth([2, [4, [7], 1], 5], 3));

// flatten and deincrement depth at every recurse
// if depth == 0, return the final array

module.exports = { retrieveDepth, flattenDepth };
