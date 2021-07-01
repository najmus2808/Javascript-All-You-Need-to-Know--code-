var array = [2, 14, 15, 18, 3, 24, 5, -1];

function removeItemOnce(arr, value) {
  var index = arr.indexOf(value);

  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}

console.log(removeItemOnce(array, 18));
