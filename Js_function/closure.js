// if any scope useing another scope variable without any parameter this called closure.

var b = 10

function a() {
    console.log(b)
    var x = 5
    return function () {
        console.log(x)  // here x is closure
    }
}

var result = a()
result()