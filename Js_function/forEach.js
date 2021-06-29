var array = [4, 6, 1, 5, 14, 9]

// var sum = 0
// array.forEach(function(value, index, array) {
//       console.log(value, index,array)
//       sum += value
// })

// console.log(sum)

//=======forEach implementation with callback function=======

function forEach(arr, cb) {
    for (var i = 0; i < array.length; i++) {
        cb(array[i], i, array)
    }
}

forEach(array, function (value, index, array) {
    console.log("in cb", value, index, array)
})

var sum = 0
forEach(array, function (value, index, array) {
    sum += value
})

console.log("Sum: ", sum)