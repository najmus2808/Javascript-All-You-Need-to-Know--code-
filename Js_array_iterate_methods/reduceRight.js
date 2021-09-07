/*** Array.reduceRight()
The reduceRight() method runs a function on each array element to produce (reduce it to) a single value.

The reduceRight() works from right-to-left in the array. See also reduce().

The reduceRight() method does not reduce the original array.

Note that the function takes 4 arguments:

The total (the initial value / previously returned value)
The item value
The item index
The array itself
***/

const numbers = [45, 4, 9, 16, 25];

const result = numbers.reduceRight(
  (total, value, index, array) => total + value,
  6
);

console.log(result);
