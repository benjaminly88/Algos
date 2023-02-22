/*

Consider an array called apple-stock as an argument. This array 
represents the variation of an Apple stock during a single day. 
The values in the array are in chronological order.

ex: [1000, 500, 1500, 2000, 0] --> The stock began at 1000 and closed at 0;

Write a function called highestProfit that calculates the highest profit 
you can make in the given day by buying and selling a single Apple stock. 
This is comprised of one buy and one sell. Keep your worst case 
time complexity in O(n^2).

Return 0 if no profit is possible OR if input is invalid.

** Extension **
Refactor your function to improve your time complexity to O(n).
Hint: Use pointers to keep track of the indices of max, min to 
calculate profit along the array.

*/

const { isFunctionTypeNode } = require('typescript');

function highestProfit(apple_stock) {
  let output = 0;
  if (!apple_stock) {
    return output;
  }
  let lowestVal = Infinity;
  for (let i = 0; i < apple_stock.length; i++) {
    if (apple_stock[i] < lowestVal) {
      lowestVal = apple_stock[i];
    } else if (apple_stock[i] - lowestVal > output) {
      output = apple_stock[i] - lowestVal;
    }
  }
  return output;
}

const stock = [0, 300, 200, 500, 600, 100, 399, 350, 500];
console.log(highestProfit(stock));

// create a lowest value = Infinite
// iterate through the array
// if the current element is less tahn the lowest value,
// reassign the lowest value to the element
// if the current element is greater than the lowest value
// check if the current element - lowest value is greater than the output
// if so reassign output
// return output

module.exports = { highestProfit };
