// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ........
// n = n-1 + n-2
// fibo[n] = fibo[n-1] + fibo[n-2]

function fibonacci(n) {
  if (n == 0) {
    return 0;
  }
  if (n == 1) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

var result = fibonacci(10);
console.log(result);
