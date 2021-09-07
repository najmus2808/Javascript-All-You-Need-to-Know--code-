// The indexOf() method searches an array for an element value and returns its position that means index number
const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.indexOf("Apple") + 1;

console.log(`Position => ( index + 1) = ${position}`);

// Add start argument(2)

const fruitsName = ["Apple", "Orange", "Apple", "Mango"];
let fruitPosition = fruitsName.indexOf("Apple", 2) + 1;

console.log(`fruitPosition => ( index + 1) = ${fruitPosition}`);
