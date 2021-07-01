function test(a) {
  if (a % 3 == 0) {
    return console.log(`${a} is divisible by 3`);
  } else {
    return console.log(`${a} is not divisible by 3`);
  }
}
test(90);
test(70);
