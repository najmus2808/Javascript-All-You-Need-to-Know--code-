/**
 The Array.keys() method returns an Array Iterator object with the keys of an array.

 */

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits.keys();
console.log("Keys =>", keys);

for (let x of keys) {
  console.log(x);
}
