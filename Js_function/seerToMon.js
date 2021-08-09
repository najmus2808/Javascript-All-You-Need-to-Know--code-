// Seer to Moon : Problem Solve-1
function seerToMon(seer) {
    if(typeof seer !="number" && seer<0){
        return false;
    
    let mon = seer/40 ;
    return mon;
}
monConvert = seerToMon(120);


if(monConvert){
    console.log("monConvert")
}else{
    console.log("Please enter a number which must be a positive number");
}