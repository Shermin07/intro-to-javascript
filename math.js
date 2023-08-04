
// max-number:
function maxNumber (num1, num2, num3){
    if(num1> num2 && num1 > num3){
        console.log( "num1 will be the largest");
    }
    else if( num2> num1 && num2 > num2){
        console.log("num2 will be the largest");
    }
    else{
        console.log("num3 will be the largest");
    }
    return   num1, num2, num3;
}
const result = maxNumber(100, 200, 300);
console.log(result);

// max-num:

function findMaxNumber( first, second, third){
       const maxNum = Math.max(num);
       return maxNum;
}
const num = (10, 20, 30);
const output = findMaxNumber(num);
console.log(output);