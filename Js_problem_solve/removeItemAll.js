var array = [2, 14, 5, 15, 18, 3, 24, 5, -1, 5];

function removeItemAll(arr, value) {
  var i = 0;
  while (i < arr.length) {
    if (arr[i] === value) {
      arr.splice(i, 1);
    } else {
      ++i;
    }
  }
  return arr;
}

console.log(removeItemAll(array, 5));
