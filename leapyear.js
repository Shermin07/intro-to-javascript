function isLeapYear (year){
    
        if(year % 2 === 0 && year % 100 !== 0) {
            console.log("this is leap year")
        }
        else{
            console.log("this is not leap year")
        }
return year;
}

var givenYear = 2023;
var outputYear = isLeapYear(givenYear);
console.log(outputYear);


// leap year array:

function isLeapYears (years){
     const leapYears = [];
    for( i = 0; i < years.length; i++){
        const leapYear = years[i];
        
        if(leapYear % 4 === 0 ){
            console.log(leapYear)
            leapYears.push(leapYear);
        }
    }
    return leapYears;

}

const arrayYears = [2012, 2022, 2023, 2030, 2040, 2034, 2038];
const result = isLeapYears(arrayYears);
console.log(result);

// leap year range:

function leapYearRange (startYear, endYear){
   
     const leapYears = [];
    for( let year = startYear; year < endYear; year++   ){
           

        if( year % 4 === 0 && year % 100 !== 0){
       
            leapYears.push(year);
       }
       
   
    }
    return leapYears;
}

const years =leapYearRange(2020, 2030);
console.log(years);


