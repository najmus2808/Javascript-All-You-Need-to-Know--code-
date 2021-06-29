//  Higher order Function
//  we can pass function as an arguments 
//  we can return functions from another function 


function add(num1, num2) {
    return num1 + num2
}

function manipulate(a, b, func) {
    var c = a + b
    var d = a - b

    function multiply() {
        var m = func(a, b)
        return c * d * m
    }

    return multiply
}

var multiply = manipulate(10, 5, add)
console.log(multiply)
console.log(multiply())