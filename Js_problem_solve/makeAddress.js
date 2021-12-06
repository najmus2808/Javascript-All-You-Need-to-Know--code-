const makeAddress = (addressArray) => {
  let result = "";
  for (let i = 0; i < addressArray.length; i++) {
    if (addressArray[i] !== "") {
      result = result + addressArray[i] + ", ";
    }
  }

  return result.slice(0, result.length - 2);
};

console.log(makeAddress(["Naogaon", "Rajshahi", "Dhaka", "Bangladesh"]));
console.log(makeAddress(["Naogaon", "", "Dhaka", "Bangladesh"]));
console.log(makeAddress(["", "Rajshahi", "", "Bangladesh"]));
console.log("Return Empty string", makeAddress(["", "", "", ""]));
