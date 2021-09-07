/*** Array.map()
The map() method creates a new array by performing a function on each array element.

The map() method does not execute the function for array elements without values.

The map() method does not change the original array.
***/

const numbers = [45, 4, 9, 16, 25];

//Procedure 1
const result = numbers.map((element, index, array) => element * 2);

console.log("result =>", result);

//Procedure 2
const result2 = numbers.map(test);

function test(element, index, array) {
  return element * 4;
}

console.log("result2 =>", result2);
