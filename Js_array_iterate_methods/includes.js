/**
 Array.includes() to arrays. This allows us to check if an element is present in an array (including NaN, unlike indexOf).
 */

const fruits = ["Banana", "Orange", "Apple", "Mango"];

let result = fruits.includes("Apple");

if (result) {
  console.log("Exit");
} else {
  console.log("Not Exit");
}
