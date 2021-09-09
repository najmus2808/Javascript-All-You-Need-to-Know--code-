/** The prototype is a global constructor available for all JavaScript objects.

prototype referes to the global Array() object.

The prototype constructor allows you to add new properties and methods to Arrays.

When constructing a new property, ALL arrays will get this property and its value.

When constructing a new method, ALL arrays will get this method. */

// Add a new method
Array.prototype.myUcase = function () {
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i].toUpperCase();
  }
};

// Use the method on any array
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.myUcase();

console.log(fruits);
