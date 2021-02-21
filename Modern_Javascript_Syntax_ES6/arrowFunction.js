// Syntax of Normal function
function number1(){
    return 10;
}
let result = number1();
console.log(result);


// Syntax of Fat Arrow / Arrow Function
// Don't use {} and "return" keword when return a single statement or console.log
// If you work with a single parameter you can ignore " () " 
let number2 = () => 15;
console.log(number2()); 


// ***************single statement************************
let number3 = () => console.log(20);
number3();



// ***************Using single parameter and return a single statement don't use "return" keyword and you can ignore " () " ************************
let number4 = n => n;
console.log(number4(25));



// ******************Using multiple parameter*********************
let add = (a, b) => a + b;
let result2 = add(13, 10);
console.log(result2);


// ***************************************
let sub= (a, b) => {
    return a - b;
}
let result3 = sub(13, 10);
console.log(result3);


// **************Using multiple statement*************************
let mul = (a, b) => {
    console.log(a);
    return a * b;
}
console.log(mul(8, 6));