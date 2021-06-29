// First Class Function

function add(a, b) {
    return a + b
}

// 1. A Function can be Stored in a variable

var sum = add
console.log(sum(12, 6))
console.log(typeof sum)

// 2. A Function can be Stored in an array

var array = []
array.push(add)
console.log(array)
console.log(array[0](5,4))
// 3. A Function can be Stored in an object

var object ={
    sum: add
}

console.log(object.sum(3,2))

// 4. we can create Function as we need

setTimeout(function() {
    console.log('I have created a new function')
},2000)

// 5. we can pass function as an arguments (next example)

// 6. we can return functions from another function (next example)
