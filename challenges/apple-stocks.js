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

function highestProfit(apple_stock, output = 0) {
  if (!apple_stock) {
    return output;
  }

  // }
}

const stock = [0, 300, 200, 500, 600, 100, 399, 350, 500];
console.log(highestProfit(stock));

// iterate through the array
// if the next value in the array is greater than the current value
// add it onto the return value
// keep track of the lowest values and the highest values
//
// return 0 if input is invalid

module.exports = { highestProfit };
