//  Feet to Mile conversion 

 function feetToMile(feet){
     if(feet < 0){
        return "Distance is never negative! Enter a positive value.";
     }

     var mile = feet / 5280;
     return mile;
    

 }
   

var result = feetToMile(25);
console.log(result);