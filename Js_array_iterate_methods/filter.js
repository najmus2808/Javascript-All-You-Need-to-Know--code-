/*** Array.filter()
The filter() method creates a new array with array elements that passes a test.

This example creates a new array from elements with a value larger than 18:
***/
const numbers = [45, 4, 9, 16, 25];

const result = numbers.filter((value, index, array) => value > 18);
console.log(result);
