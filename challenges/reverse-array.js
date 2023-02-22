/*

Reverse and return an array in-place. Do not create a new array in memory.
Instead, modify the array as given. Do not use the array reverse method built in
to the array prototype while solving the problem.

*/

const reverseArray = (array) => {
  for (let i = 0; i < array.length / 2; i++) {
    array.splice(i, 0, array[array.length - i - 1]);
  }
  array.splice(array.length / 2);
  return array;
};

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(reverseArray(array));
console.log(array);

// iterate through the array
// replace each element with the corresponding last element

/*

Extension: (recommended to solve reverseArray first)

Given a string as a sentence "bob likes dogs alot" return the word reversal
"alot dogs likes bob". Do not use the array reverse method built in to the array
prototype.

The input string will always be a series of words separated by spaces between
them, with each word containing only lowercase letters and no punctuation. The
input string will always have at least one word

*/

const reverseSentence = (sentence) => {
  return reverseArray(sentence.split(' ')).join(' ');
};

let sentence = 'bobs likes dogs alot';
console.log(reverseSentence(sentence));

module.exports = { reverseArray, reverseSentence };
