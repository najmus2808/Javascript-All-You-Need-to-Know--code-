/**
 The constructor property returns the function that created the Array prototype.

For JavaScript arrays the constructor property returns:
function Array() { [native code] }

For JavaScript objects the constructor property returns:
function Object() { [native code] }
 */

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const result = fruits.constructor;
console.log(result);
