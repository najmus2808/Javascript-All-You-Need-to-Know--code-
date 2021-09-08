/**
The copyWithin() method copies array elements to another position in an array, overwriting the existing values.

The copyWithin() does not add items to the array.

copyWithin() overwrites the original array not create a new array.

Change all arguments and see what happening
 */

const fruits = ["Banana", "Orange", "Apple", "Apricot", "Mango", "Dates"];

const newFruits = fruits.copyWithin(2, 0);

console.log(newFruits);
