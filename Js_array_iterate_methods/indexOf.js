/**The indexOf() method searches an array for an element value and returns its position that means index number
item	Required. The item to search for.
start	Optional. Where to start the search. Negative values will start at the given position counting from the end, and search to the end.
Array.indexOf() returns -1 if the item is not found.

If the item is present more than once, it returns the position of the first occurrence.
**/

const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.indexOf("Apple") + 1;

console.log(`Position => ( index + 1) = ${position}`);

// Add start argument(2)

const fruitsName = ["Apple", "Orange", "Apple", "Mango"];
let fruitPosition = fruitsName.indexOf("Apple", 2) + 1;

console.log(`fruitPosition => ( index + 1) = ${fruitPosition}`);
