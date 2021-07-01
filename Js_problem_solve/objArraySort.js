var personsInfo = [
  {
    name: "A",
    age: "20",
  },

  {
    name: "B",
    age: "25",
  },
  {
    name: "C",
    age: "15",
  },
  {
    name: "D",
    age: "30",
  },
];

personsInfo.sort(function (a, b) {
  if (a.age > b.age) {
    return 1;
  } else if (a.age < b.age) {
    return -1;
  } else {
    return 0;
  }
});

console.log(personsInfo);
