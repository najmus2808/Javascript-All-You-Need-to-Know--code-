/*
1. Global scope variable access from anywhere.
2. In functional scope variable (parent scope) access from parent scope and child scope.
3. In functional scope variable (child scope) access from only child scope.
 */


var a = 'Sakib' // global scope

function parent() {
    var a = 20 // functional scope(parent)
    function child() {
        var a = 10  //functional scope(child)
        console.log("From child scope", a)
    }
    console.log("From parent scope", a)
    child()
}

parent()