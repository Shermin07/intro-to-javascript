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

function findOddNumbers (array){
      var oddNumbers = []; 
    for( let i = 0; i < array.length; i++){
        const element = array[i];
        if(element % 2 !== 0){
          oddNumbers.push(element);
        }
    }
       var sum = 0;
    for( i = 0; i < oddNumbers.length; i++){
        sum = sum + oddNumbers[i];
    }
    return sum;
}

var givenArray = [10, 12, 11, 21, 23, 22, 24, 26, 29];
var oddNumbers = findOddNumbers(givenArray);
console.log(oddNumbers);




