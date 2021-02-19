// 0! = 1
// 1! = 1
// 2! = 1 * 2
// 3! = 1 * 2 * 3
// 4! = 1 * 2 * 3 * 4
// 5! = 1 * 2 * 3 * 4 * 5

function factorial(n) {
    if (n == 0) {
        return 1;
    }
    else {
        var factorial = 1;
        for (var i = 1; i <= n; i++) {
            factorial = factorial * i;
        }

        console.log(factorial);
    }
}

var result = factorial(0);

console.log("0! = " + " " + result);
factorial(1);
factorial(2);
factorial(3);
factorial(4);
factorial(5);