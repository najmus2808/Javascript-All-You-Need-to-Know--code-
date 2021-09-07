/***The forEach() method calls a function (a callback function) once for each array element.
Note that the function takes 3 arguments:

The item value
The item index
The array itself
***/

const numbers = [45, 4, 9, 16, 25];

numbers.forEach((element, index, array) =>
  console.log(`element = ${element} | index = ${index} | array = ${array}`)
);
