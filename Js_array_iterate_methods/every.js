/***The every() method check if all array values pass a test.

This example check if all array values are larger than 18:

Return boolean (true or false)
***/

const numbers = [45, 4, 9, 16, 25];

let result = numbers.every((value, index, arry) => value > 18);

if (result) {
  console.log("Yes, all array values are greater than 18");
} else {
  console.log("Some values are less than 18");
}
