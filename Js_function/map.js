var array = [2, 5, 4, 5, 7, 9]


//  var result = array.map(function(value){
//     return value * value;
// })

// console.log(result)

// === Implementation of map function using callback ===

function map(arr, cb) {
    var nerArray = []
    for (var i = 0; i < arr.length; i++) {
        var temp = cb(array[i])
        nerArray.push(temp)
    }
    return nerArray
}

var result = map(array, function (value) {
    return value * value
})

console.log("From first call ", result)

var result2 = map(array, function (value) {
    return value + 2
})

console.log("From second call ", result2)
