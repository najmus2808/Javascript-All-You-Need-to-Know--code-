// --- Without function ---

var inch = 134;
var feet = Math.round(inch / 12);
inch = inch % 12;
console.log(feet + " feet " + inch + " inch");

// --- With function ---

function inchTofeet(inch) {
  var feet = Math.round(inch / 12);
  inch = inch % 12;
  console.log(feet + " feet " + inch + " inch");
}

inchTofeet(144);
inchTofeet(177);
