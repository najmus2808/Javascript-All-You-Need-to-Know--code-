/**
The copyWithin() method copies array elements to another position in an array, overwriting the existing values.
The copyWithin() does not add items to the array.
copyWithin() overwrites the original array not create a new array.

array.copyWithin(target, start, end)

Parameter	    Description
target	         Required. The index position to copy the elements to
start	         Optional. The index position to start copying elements from  (default is 0)
end	Optional.    The index position to stop copying elements from (default is array.length)
 */

const fruits = ["Banana", "Orange", "Apple", "Apricot", "Mango", "Dates"];

const newFruits = fruits.copyWithin(2, 0);

console.log(newFruits);

const friends = ["Sakib", "Rakib", "Fakhrul", "Fahim", "Arpan", "Jubair"];

const newFriends = friends.copyWithin(3, 1, 2);

console.log(newFriends);
