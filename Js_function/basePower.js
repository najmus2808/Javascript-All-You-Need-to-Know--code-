function base(b) {
  return function power(n) {
    var result = 1;
    for (var i = 0; i < n; i++) {
      result *= b;
    }
    return result;
  };
  return power;
}

console.log(base(2)(5));
