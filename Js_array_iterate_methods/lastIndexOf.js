/**Array.lastIndexOf() is the same as Array.indexOf(), but returns the position of the last occurrence of the specified element.
array.lastIndexOf(item, start)
item	Required. The item to search for
start	Optional. Where to start the search. Negative values will start at the given position counting from the end, and search to the beginning
**/

// position = index + 1

const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.lastIndexOf("Apple") + 1;

console.log(`Position => ${position}`);
