/*  Use of arguments keyword. In this function I didn't provide any parameter but still work this function using arguments keyword. arguments is not like an array and object but it looks like both.*/
function test() {
    var sum = 0
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    return sum
}

var result = test(5, 7, 10)
var resultTwo = test(9, 1, 34)
console.log(result)
console.log(resultTwo)