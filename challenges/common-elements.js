/*

Write a function called commonElements that takes in any number of arrays in the 
argument. The arrays may contain both numbers and strings. It should return a new array
with all the common elements (both numbers and/or strings) from the given input. 
If there are no common numbers/strings, return "Nothing in Common!"
Assume there are no duplicates within the array.


ex: 
arr1 = [2, 10,'cat', 3, 99, 2000, 'dog', 'lion'];
arr2 = [3, 7, 2, 2000, 1, 'dog', 'cat'];
arr3 = [2, 100, 2000, 'dog', 3, 'lion'];

commonElements(arr1, arr2, arr3) -> [2, 3, 2000, 'dog']
*/

// const commonElements = (...args) => {
//   let arrays = [...args];
//   //   console.log(arrays);
//   let output = arrays.reduce((acc, curr) => {
//     return acc.filter((el) => curr.includes(el));
//   });
//   //   console.log(output)
//   if (output.length == 0) {
//     return 'Nothing in Common!';
//   } else {
//     return output;
//   }
// };

const commonElements1 = (...args) => {
  const memory = {};
  for (let i = 0; i, i < args.length; i++) {
    const currentArray = args[i];
    for (let j = 0; j < currentArray.length; j++) {
      const currentArrayItem = currentArray[j];
      if (!memory[currentArrayItem]) memory[currentArrayItem] = 1;
      else memory[currentArrayItem]++;
    }
  }
  const common = Object.keys(memory)

    .filter((item) => memory[item] === args.length)

    .map((item) => (isNaN(Number(item)) ? item : Number(item)));

  if (!common.length) return 'Nothing in Common!';

  return common;
};

// iterate through the arrays
// compare the first array with the second array
// if any array includes any element from another array
// push that into a new array
arr1 = [2, 10, 'cat', 3, 99, 2000, 'dog', 'lion'];
arr2 = [3, 7, 2, 2000, 1, 'dog', 'cat'];
arr3 = [2, 100, 2000, 'dog', 3, 'lion'];

// console.log(commonElements(arr1, arr2, arr3)); // -> [2, 3, 2000, 'dog']

/*
** Extension **
Refactor your function to have O(n) time complexity.
*/

const commonElementsOptimized = (...args) => {
  let set = new Set(...args);
  let arrays = args[1];
  set.has(arrays);
  console.log(arrays);
  console.log(set);
};

console.log(commonElementsOptimized(arr1, arr2, arr3));

// recursiom
// iterate through the array
// if set as any elements in the next array, add that element into the set
// compare the last array with the set and if set.has returns true, push that itno a new array anre trun the new array.

module.exports = { commonElements, commonElementsOptimized };
