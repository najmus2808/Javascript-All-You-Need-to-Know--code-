var array = [34, 1, 2, 70, 3, 4, 5];

// var result = array.reduce(function (acc, current) {
//     return acc + current
// },100)

// console.log(result)

// === implementation of reduce method using callback ===

function reduce(arr, cb, acc) {
  for (var i = 0; i < arr.length; i++) {
    acc = cb(acc, arr[i]);
  }
  return acc;
}

var sum = reduce(
  array,
  function (acc, current) {
    return acc + current;
  },
  0
);

var max = reduce(
  array,
  function (acc, current) {
    return Math.max(acc, current);
  },
  0
);

var min = reduce(
  array,
  function (acc, current) {
    return Math.min(acc, current);
  },
  array[0]
);

console.log(sum, max, min);
