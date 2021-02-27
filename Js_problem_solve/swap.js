//Swap with temporary variable
var a = 5;
var b = 7;
console.log("Before swap: a = " + a + " and b = " +b);
var temp = a;
a = b;
b = temp;
console.log("After swap: a = " + a + " and b = " +b);


// Swap without temporary variable
var p = 10;
var q = 4;
console.log("Before swap: p = " + p + " and q = " +q);
p = p + q;
q = p - q;
p = p - q;
console.log("After swap: p = " + p + " and q = " +q);