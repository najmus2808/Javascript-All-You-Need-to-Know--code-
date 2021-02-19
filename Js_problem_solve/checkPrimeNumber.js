function checkPrime(n){
    for(i = 2; i < n; i++){
        if(n % i == 0){
            console.log("Not a prime number");
            break;
        }
        else{
            console.log("Prime Number");
            break;
        }
    }
}

 checkPrime(10);
 checkPrime(13);