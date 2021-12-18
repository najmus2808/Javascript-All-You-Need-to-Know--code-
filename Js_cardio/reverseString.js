// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

// *** Solve 1 ***
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("hello"));

// *** Solve 2 ***
// function reverseString(str) {
//   let revString = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     revString = revString + str[i];
//   }
//   return revString;
// }

// console.log(reverseString("hello"));

// *** Solve 3 ***
// function reverseString(str) {
//   let revString = "";
//   for (let i = 0; i <= str.length - 1; i++) {
//     revString = revString + str[str.length - (i + 1)];
//   }
//   return revString;
// }

// console.log(reverseString("hello"));

// *** Solve 4 ***
// function reverseString(str) {
//   let revString = "";
//   for (let i = 0; i <= str.length - 1; i++) {
//     revString = str[i] + revString;
//   }
//   return revString;
// }

// console.log(reverseString("hello"));

// *** Solve 5 ***
// function reverseString(str) {
//   let revString = "";
//   for (let char of str) {
//     revString = char + revString;
//   }
//   return revString;
// }

// console.log(reverseString("hello"));

// *** Solve 6***
// let str = "hello";
// let revString = "";
// str.split("").forEach((char) => (revString = char + revString));
// console.log(revString);

// *** Solve 7 ***
// let str = "hello";
// let result = str.split("").reduce((revString, char) => char + revString, "");
// console.log(result);
