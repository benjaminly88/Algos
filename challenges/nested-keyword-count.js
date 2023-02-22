/*

Given an arbitrarily nested array of strings, and a target keyword strong,
return the number of times a keyword appears in a nested array of arrays.

keywordCount(['bye', 'hi', ['cool', 'hi']], 'hi') -> 2 because 'hi' appears twice
keywordCount(['x', 'y', ['x', 'x'], 'a'], 'x') -> 3
keywordCount(['blah', 'key', ['inside', ['really inside']]], 'lol') -> 0

*/

const keywordCount = (array, keyword) => {
  let count = 0;

  function process(array, keyword) {
    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        process(array[i], keyword);
      } else {
        if (array[i] == keyword) {
          count++;
        }
      }
    }
  }

  process(array, keyword);
  return count;
};

console.log(keywordCount(['bye', 'hi', ['cool', 'hi']], 'hi'));
// console.log(keywordCount(['x', 'y', ['x', 'x'], 'a'], 'x'));
// console.log(
//   keywordCount(['blah', 'key', ['inside', ['really inside']]], 'lol')
// );

// if any element is equal to the keyword, add to the count
// if the element is an array, call teh function again on the element
// return count

/*

Extension:

Given a nested array of arrays, return an array of keywords that appear the most
often. Return multiple results within the array if there's a tie. Return the
multiple in lexiographical (alphabetic) order.

keywordMode([['cars', 'bat'], 'apple', 'bat', 'cars']) -> ['bat', 'cars']
keywordMode([['ace', 'cool'], ['hi'], 'cool']) -> ['cool']

*/

const keywordMode = (array) => {
  let legend = {};

  function process(array) {
    array.forEach((el) => {
      if (Array.isArray(el)) {
        process(el);
      } else {
        legend[el] ? legend[el]++ : (legend[el] = 1);
      }
    });
  }

  process(array);
  console.log(legend);
  const max = Math.max(...Object.values(legend));
  let res = [];
  for (key in legend) {
    value = legend[key];
    if (value == max) {
      res.push(key);
    }
  }
  return res.sort();
};

console.log(keywordMode([['cars', 'bat'], 'apple', 'bat', 'cars']));

module.exports = { keywordCount, keywordMode };
