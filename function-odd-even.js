function evenNumber(number){
       if(number % 2 === 0){
        return true;
       }
       else{
        return false;
       }
}
const givenNumber = evenNumber(98);
const givenNumber2 = evenNumber(117);

console.log(givenNumber);
console.log(givenNumber2);

// get sum of oddnumbers:

function findOddSum(array){
    var oddNumbers = []; 
    for(let i = 0; i < array.length; i++){
        const element = array[i];
        if (element % 2 !== 0){
            
            oddNumbers.push(element)
        };
    }
    var sum = 0;
for(let i = 0; i < oddNumbers.lengh; i++){
    sum = sum + oddNumbers[i];
}
return sum;
}
const givenArray = [5, 7, 8, 10, 45, 20, 15, 29];
const OddNumbers = findOddSum(givenArray);
console.log(OddNumbers);




