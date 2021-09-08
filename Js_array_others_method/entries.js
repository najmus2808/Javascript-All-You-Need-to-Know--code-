/**
    The entries() method returns an Array Iterator object with key/value pairs.

For each item in the original array, the new iteration object will contain an array with the index as the key, and the item value as the value:

[0, "Banana"]
[1, "Orange"]
[2, "Apple"]
[3, "Mango"]

entries() does not change the original array.
 */

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const f = fruits.entries();

for (let x of f) {
  console.log("X =>", x);
}
