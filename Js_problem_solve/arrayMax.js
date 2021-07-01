// Find the largest element of an array

var marks = [15, 34, 54, 5, 3, 87, 1];
var max = marks[0];
for (var i = 1; i < marks.length; i++) {
  if (max < marks[i]) {
    max = marks[i];
  }
}
console.log("Largest element is: " + max);
