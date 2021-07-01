// 0! = 1
// 1! = 1
// 2! = 1 * 2
// 3! = 1 * 2 * 3
// 4! = 1 * 2 * 3 * 4
// 5! = 1 * 2 * 3 * 4 * 5
// 6! = 5! * 6
// 6! = (6-1)! * 6
// n! = (n-1)! * n
// n! = n * (n-1)

function factorialRecursive(n) {
  if (n == 0) {
    return 1;
  } else {
    return n * factorialRecursive(n - 1);
  }
}

var result = factorialRecursive(10);
console.log(result);
