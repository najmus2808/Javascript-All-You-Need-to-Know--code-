// Return a new array

var array = [3, 4, 7, 1, 9, 15, 12, 16, 23, 28];

// var result = array.filter(function (value, index, array) {
//     return value % 2 === 0
// })

// console.log(result)

// === Implementation of filter method using callback ===

function filter(array, cb) {
    var newArray = []
    for (var i = 0; i < array.length; i++) {
        if (cb(array[i])) {
            newArray.push(array[i])
        }
    }
    return newArray
}

console.log(filter(array, function (value) {
    return value % 2 === 0
}))

console.log(filter(array, function (value) {
    return value % 2 === 1
}))

console.log(filter(array, function (value) {
    return value > 5
}))

