/**The slice() method returns selected elements in an array, as a new array.

slice() selects the elements starting at the given start argument, and ends at, but does not include, the given end argument.

slice() does not change the original array.

array.slice(start, end)

Parameter	Description

start	[ptional. An integer that specifies where to start the selection (The first element has an index of 0).         Use negative numbers to select from the end of an array. If omitted, it acts like "0"]



end	        [Optional. An integer that specifies where to end the selection. If omitted, all elements from the start position and to the end of the array will be selected. Use negative numbers to select from the end of an array]

*/

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);

console.log(citrus);
