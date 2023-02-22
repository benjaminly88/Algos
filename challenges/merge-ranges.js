/*
Write a function mergeRanges that takes an array of meeting time ranges and
returns an array of condensed ranges, merging the overlapping intervals.

Example:

intervals = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
mergeRanges(intervals); -> [[0, 1], [3, 8], [9, 12]]

intervals = [[8, 10], [15, 18], [1, 3], [2, 6]]
mergeRanges(intervals); -> [[1, 6], [8, 10], [15, 18]]

Do not assume the ranges are in order. The intervals array will have at least
one range in it.

Hint:
Sort the intervals by their start value beforehand! This makes the problem
actually tractable. To do this, use a custom callback for the .sort() method,
described here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
(especially the part about compare numbers instead of strings)

After sorting, think about how to merge the intervals together.

*/

function mergeRanges(intervals, output = []) {
  const sorted = intervals.sort((a, b) => {
    if (a[0] > b[0]) return 1;
    if (a[0] < b[0] && a[1] < b[1]) return -1;
    return 0;
  });
  let comparison = output.slice();
  //   console.log(sorted);
  //   console.log(comparison);
  output = [];
  for (let i = 0; i < sorted.length; i++) {
    let dummy = [];
    if (sorted[i + 1] !== undefined && sorted[i][1] >= sorted[i + 1][0]) {
      dummy.push(sorted[i][0]);
      dummy.push(sorted[++i][1]);
      output.push(dummy);
    } else {
      output.push(sorted[i]);
    }
  }
  //   console.log(comparison);
  //   console.log(output);
  if (comparison.length !== 0 && comparison.length == output.length) {
    return output;
  }
  return mergeRanges(output, output);
}
intervals = [
  [0, 4],
  [1, 3],
  [2, 4],
  [0, 5],
];
console.log(mergeRanges(intervals));

// function takes an array of arrays
// each element is an array which defines a meeting range
// function will take any overlapping meeting ranges and return an array of arrays
// this array of arrays will be the condensed version of the passed in array
// after sorting, iterate through the array of arrays
// if the current array at index 1 is greater than the next array at index 0,
// push current array at index 0 and next array at index 1 into a dummy array
// push this final array into the return array

module.exports = { mergeRanges };
