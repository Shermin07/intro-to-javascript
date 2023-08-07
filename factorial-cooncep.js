function factorial (number){
   if(number === 0 || number === 1){
    return 1;
   }

     let result = 1;
    for(let i = 1; i <= number; i++){
        result = result * i;


    }
return result;
}
const output = factorial(5);
console.log(output);


// factorial-reverse:

function factorialReverse(num){
    if(num === 0 || num === 1){
        return 1;
    }
    else{ result1 = 1;
        for(let i = num; i>=1; i++){
            result1 = result1 * i;
        }
    }
  return result1;
}
const output2 = factorialReverse(5);
console.log(output);