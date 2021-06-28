function arraySum(array) {
    var sum = 0
    for (var i = 0; i < array.length; i++) {
        sum += array[i]
    }
    return sum
}

var array = [3, 6, 1, 6, 7, 9, 14]

var result = arraySum(array)

console.log(result)