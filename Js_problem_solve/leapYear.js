function checkLeapYear(year){

    if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
        console.log("This year is leap year......");
    }
    else{
        console.log("Not a leap year....");
    }

}

checkLeapYear(2016);
checkLeapYear(2017);
checkLeapYear(2018);
checkLeapYear(2019);
checkLeapYear(2020);