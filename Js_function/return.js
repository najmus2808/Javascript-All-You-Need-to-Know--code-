function greeting(greet) {
  return function person(name) {
    return `${greet}, ${name}`;
  };
  return person;
}

var result = greeting("Hello")
console.log(result("Sakib"))