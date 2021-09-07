/***Array.reduce()
The reduce() method runs a function on each array element to produce (reduce it to) a single value.

The reduce() method works from left-to-right in the array. See also reduceRight().

The reduce() method does not reduce the original array.

Note that the function takes 4 arguments:

The total (the initial value / previously returned value)
The item value
The item index
The array itself
***/

const numbers = [45, 4, 9, 16, 25];

const result = numbers.reduce((total, value, index, array) => total + value, 1);

console.log(result);
