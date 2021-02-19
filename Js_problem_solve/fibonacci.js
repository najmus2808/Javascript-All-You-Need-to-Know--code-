// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ........
// n = n-1 + n-2
// fibo[n] = fibo[n-1] + fibo[n-2]


function fibonacci(n){
    var fibo =[0, 1];
    for(var i = 2; i <= n; i++){
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}

var result = fibonacci(10);
console.log(result);