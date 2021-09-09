/**The splice() method adds and/or removes array elements.

splice() overwrites the original array.

array.splice(index, howmany, item1, ....., itemX)

index-->	Required. The position to add/remove items. Negative values a the position from the end of the array.
howmany-->	Optional. Number of items to be removed.
item1, ..., itemX-->	Optional. New elements(s) to be added
**/

const fruitsFirst = ["Banana", "Orange", "Apple", "Mango"];
fruitsFirst.splice(2, 1, "Lemon", "Kiwi");

console.log(fruitsFirst);

const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
fruits.splice(2, 2);

console.log(fruits);
