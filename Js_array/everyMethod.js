// every Method return a boolean result (using for even number cheaking and for positive number)

var array = [2, 14, 15, 18, 3, 24, 5];

var resultOne = array.every(function (value) {
  return value % 2 === 1;
});

var resultTwo = array.every(function (value) {
  return value >= 0;
});

console.log(resultOne);
console.log(resultTwo);
