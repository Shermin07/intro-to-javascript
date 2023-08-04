function factorial(number){
    let result = 1;
    for ( let i = 1; i <= 7; i++){
        result = result * i;
    }
    return result;
}
const myNum = 7;
const result = factorial(myNum);
console.log(result);

// reverse 

function factorial(num){
    let result = 1
    for( let i = 8; i >=1 ; i--){
        result = result * i
    }
    return result;
}

const result1 = factorial(8);
console.log(result1);