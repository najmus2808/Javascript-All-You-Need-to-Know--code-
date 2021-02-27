function findMax(num1, num2, num3){
    if (num1 > num2 && num1 > num3){
       
        return num1;
    }
    else if(num2 > num1 && num2 > num3){
        return num2;
    }
    else{
        return num3;
    }
}

var result1 = findMax(5, 7, 9)
console.log("Maximaum number is: " + result1);
var result2 = findMax(12, 15, 11);
console.log("Maximaum number is: " + result2);
var result3 = findMax(18, 14, 5);
console.log("Maximaum number is: " + result3);