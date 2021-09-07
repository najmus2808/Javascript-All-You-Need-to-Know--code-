/***Array.some()
The some() method check if some array values pass a test.

This example check if some array values are larger than 18:
Return boolean (true or false)
At least one value is greater than 18 -> true 
All values are less than 18-> false 
***/

const numbers = [45, 4, 9, 16, 25];

let result = numbers.some((value, index, array) => value > 18);

if (result) {
  console.log("Yes, Here exit atlest one value is greater than 18");
} else {
  console.log("No value is greater than 18");
}
