/*** Array.find()
The find() method returns the value of the first array element that passes a test function.

This example finds (returns the value of) the first element that is larger than 18:

**/

const numbers = [4, 9, 16, 25, 29];

let firstMatch = numbers.find((value, index, array) => value > 9);

console.log(`firstMatch => ${firstMatch}`);
