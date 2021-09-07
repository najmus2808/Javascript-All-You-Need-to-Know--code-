/***
Array.findIndex()
The findIndex() method returns the index of the first array element that passes a test function.

This example finds the index of the first element that is larger than 18:
 */

const numbers = [4, 9, 16, 25, 29];

let result = numbers.findIndex((value, index, array) => value > 18);

console.log(result);
