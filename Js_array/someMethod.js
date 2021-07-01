// some Method return a boolean result (using for odd number cheaking and for negative number)
var array = [2, 14, 15, 18, 3, 24, 5, -1];

var resultOnen = array.some(function (value) {
  return value % 2 === 1;
});

var resultTwo = array.some(function (value) {
  return value < 0;
});

console.log(resultOnen);
console.log(resultTwo);
