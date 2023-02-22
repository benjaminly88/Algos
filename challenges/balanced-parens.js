/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' const wow = { yo: thisIsAwesome() }'); // true
 * balancedParens(' const newton = () => { telescopes.areSicc(); '); // false
 *
 *
 */

function balancedParens(input) {
  const legend = {
    '{': '}',
    '[': ']',
    '(': ')',
  };
  let balance = [];
  for (let i = 0; i < input.length; i++) {
    // console.log(input[i]);
    for (let key in legend) {
      if (input[i] == key) {
        balance.push(key);
        // console.log(balance);
      } else if (input[i] == legend[key]) {
        let popped = balance.pop();
        if (legend[popped] !== input[i]) {
          return false;
        }
      }
    }
  }
  if (balance.length !== 0) {
    return false;
  }
  return true;
}

console.log(balancedParens('(')); // false
console.log(balancedParens('()')); // true
console.log(balancedParens(')(')); // false
console.log(balancedParens('(())')); // true
console.log(balancedParens(' const wow = { yo: thisIsAwesome() }'));
console.log(balancedParens(' const newton = () => { telescopes.areSicc(); '));

// iterate through the string, if any one character of the string equals a key of the legend,
// push that into an innerarray
// if any one character equals a value of the legend, pop a character out of the inner array and compare to its key
// return false if the value does not equal its key
// return true if all characters have been iterated through

module.exports = { balancedParens };
