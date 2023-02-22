/*

Given an array of numbers (integers), return the mode, that is, the number that
appears most often. If there are multiple modes, use the max of the modes.

Assume that at least one number is present in the array.

e.g.
mode([3, 2, 4, 3]) -> 3
mode([7, 5, 8, 8, 2, 5]) -> 8

*/

function mode(array) {
  let legend = {};
  for (let i = 0; i < array.length; i++) {
    legend[array[i]] ? legend[array[i]]++ : (legend[array[i]] = 1);
  }
  console.log(legend);
  return Object.keys(legend).reduce((acc, curr) => {
    if (legend[curr] >= legend[acc]) {
      console.log(curr);
      console.log(acc);
      if (curr > acc) {
        acc = curr;
      }
      console.log(acc);
    }
    return acc;
  });
}

console.log(mode([12, 5, 32, 4]));
// console.log(mode([7, 5, 8, 8, 2, 5]))
// for some reason the checking of highest mode is not working. I am so close though

// for loop
// iterate through the array
// check if key of that element exists
// make a key if not, increment if there is
// find the highest value for hte highest key and return that

/*

Extension:

Given an arbitrarily nested array of numbers (integers), return the mode, that
is, the number that appears most often. If there are multiple modes, use the max
of the modes.

Assume that at least one number is present in the nested array structure,
although some of the nested arrays may be empty.

e.g.
mode([[3], [2, [4]], 3]) -> 3
mode([7, [[5, [8], 8], 2, 5]]) -> 8
mode([4, []]) -> 4 

*/

function modeNested(array, legend = {}) {
  for (let i = 0; i < array.length; i++) {
    // 0
    if (!Array.isArray(array[i])) {
      // checks if array[0] is an array
      legend[array[i]] ? legend[array[i]]++ : (legend[array[i]] = 1); // if it isnt an array make that number a key value in the legend
    } else {
      modeNested(array[i], legend); // if array[0] is an array, call the function again
    }
  }
  return Object.keys(legend).reduce((acc, curr) => {
    // makes the highest mode be returned
    if (legend[curr] >= legend[acc]) {
      if (acc < curr) {
        acc = curr;
      }
    }
    return acc;
  });
}

console.log(modeNested([[3], [2, [4]], 3]));
console.log(modeNested([7, [[5, [8], 8], 2, 5]]));
console.log(modeNested([4, []]));

// recursion
// still need a legend
// in order to recurse down through all nested arrays
// if the current element is not an array, make that element a key value in the legend
// if it is an array
// call teh function once more with array[i] and legend as its parameters

module.exports = { mode, modeNested };
