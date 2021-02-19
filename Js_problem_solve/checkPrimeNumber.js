function checkPrime(n){
    for(i = 2; i < n; i++){
        if(n % i == 0){
           return "Not a prime number";
        }
    }

    return "Your number is a Prime number";
}
    

 var result = checkPrime(10);
 console.log(result);
 var result2 = checkPrime(13);
 console.log(result2);