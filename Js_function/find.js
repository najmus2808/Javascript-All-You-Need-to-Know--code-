var array = [3, 5, 1, 7, 14, 15, 12, 16, 23, 9, 13, 2];

var result = array.find(function(value) {
    return value === 9
})

console.log(result)

var result2 = array.findIndex(function(value) {
    return value === 14
})

console.log(result2)

// === Implementation of those above method using callback ===

function myFind(arr, cb) {
    for (var i = 0; i < arr.length; i++){
        if(cb(arr[i])){
            return arr[i]
            // return i  (for findIndex)
        }
    }
}

console.log(myFind(array, function (value){
    return value === 16
}))