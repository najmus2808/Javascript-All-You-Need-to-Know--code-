// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ........
// n = n-1 + n-2
// fibo[n] = fibo[n-1] + fibo[n-2]


function fibonacci(n){
    if(n == 0){
        return [0];
    }
    else if(n == 1){
        return [0, 1];
    }
    else{
        // calculate arry nth element
        var fibo = fibonacci(n - 1);
        var nextElement = fibo[n - 1] + fibo[n - 2];
        fibo.push(nextElement);
        return fibo;
    }
}

var result = fibonacci(10);
console.log(result);