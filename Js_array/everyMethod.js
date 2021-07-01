// every Method return a boolean result

var array = [2, 14, 15, 18, 3, 24, 5];

var resultOne = array.every(function (value) {
  return value % 2 === 0;
});

var resultTwo = array.every(function (value) {
  return value >= 0;
});

console.log(resultOne);
console.log(resultTwo);
