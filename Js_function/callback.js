function test(a, b, cb) {
    var c = a + b
    var d = a - b
    return cb(c, d)
}

function sum(a, b) {
    return a + b
}

var result = test(10, 5, sum)
console.log(result)

function sub(a, b) {
    return a - b
}

var resultOne = test(12, 5, sub);
console.log(resultOne)