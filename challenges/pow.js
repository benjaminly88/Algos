/** Write a function that calculates x^y, where x is given as the base and y is given as the power.
 *
 * Example:
 * pow(2,4) => 2^4 = 16
 * Rational: 2 * 2 * 2 * 2 = 16
 *
 * Extension: Use recursion
 */

function pow(base, power) {
  let output = 1 // declare output make it equal to 1 because 0 multiplied by anything is 0
  for (let i = 0; i < power; i++) { // using a for loop, multiply the base times the output by power amount of times.
    output *= base
  } 
  return output
}


// console.time()
// console.log(pow(2,4))
// console.timeEnd()
// console.time()
// console.log(pow(3,3))
// console.timeEnd()

/**
 * Extension: Use recursion to solve the problem in O(n) time complexity -> Linear time complexity
 */

function powRecurse(base, power) {
  // for a recursive approach remember to write your base case
  if (power == 0) { return 1 } 
  // write your recursive logic here
  return base * powRecurse(base,power -= 1) 
}

// once the power is equal to 0, return one
// multiply the base by the output of the pow function with base and pow-- as parameters
  // so the base will multiply 'power' amount of times
module.exports = { pow, powRecurse };
