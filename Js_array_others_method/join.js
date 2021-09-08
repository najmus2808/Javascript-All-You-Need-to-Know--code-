/**
 The join() method returns an array as a string.
 The elements will be separated by a specified separator. The default separator is comma (,).
join() does not change the original array.
 */

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const newFruits = fruits.join(); // Returns "Banana,Orange,Apple,Mango"

const friends = ["Sakib", "Rakib", "Fakhrul", "Fahim", "Arpan", "Jubair"];
const newFriends = friends.join(" and ");

const numbers = [1, 2, 3, 4, 5];
const newNumbers = numbers.join(" ");

console.log("New Fruits =>", newFruits);
console.log("New Friends =>", newFriends);
console.log("New Numbers =>", newNumbers);
