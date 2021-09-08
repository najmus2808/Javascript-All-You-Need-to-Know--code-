/**
  The fill() method fills specified elements in an array with a static value.

You can specify the position of where to start and end the filling. If not specified, all elements will be filled.

fill() overwrites the original array.

array.fill(value, start, end)

Parameter	    Description
value	         Required. The value to fill the array with
start	         Optional. The index to start filling the array (default is 0)
end	Optional.    The index to stop filling the array (default is array.length)

Return Value:	An Array, the changed array
 */

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const newFruits = fruits.fill("Kiwi");

const myFruits = ["Banana", "Orange", "Apple", "Mango"];
const myNewFruits = myFruits.fill("Kiwi", 2, 4);

console.log("newFruits =>", newFruits);
console.log("myNewFruits =>", myNewFruits);
