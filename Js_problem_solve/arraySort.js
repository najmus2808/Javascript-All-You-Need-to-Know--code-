var array = [3, 4, 5, 6, -2, -6, 9, 21, 34, 1, 23];

// Assending sort
array.sort(function (a, b) {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
});

console.log(array);

// Desending sort
array.sort(function (a, b) {
  if (a > b) {
    return -1;
  } else if (a < b) {
    return 1;
  } else {
    return 0;
  }
});

console.log(array);
