// Remove deuplicates items from an array

var numbers = [2, 4, 3, 5, 14, 3, 54, 2, 23, 5];
var uniqueNumber = [];
for (var i = 0; i < numbers.length; i++) {
  var element = numbers[i];
  var index = uniqueNumber.indexOf(element);
  if (index == -1) {
    uniqueNumber.push(element);
  }
}

console.log(uniqueNumber);
