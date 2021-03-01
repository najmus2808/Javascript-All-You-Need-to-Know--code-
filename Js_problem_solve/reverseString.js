// Reverse a string 
// PH v:15-9 
function reverseString(str){
    var reverse = "";
    for(var i = 0; i < str.length; i++){
        var char = str[i];
        reverse = char + reverse;
    }
    return reverse;
}

var statement = "Hey, I am Sakib";
var result = reverseString(statement);
console.log(result);