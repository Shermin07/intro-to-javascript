//const arr = [12, 13, 22, 23, 34, 45, 56, 67, 78, 89];

function sumOfNumbers(numbers){
       let sum = 0;
    for(let i = 0; i <  numbers.length; i++){
        const number = numbers[i];
        sum = sum + number;
    }
    return sum;
}
const givenArray =  [12, 13, 22, 23, 34, 45, 56, 67, 78, 89]
const array = sumOfNumbers(givenArray);
//console.log(array);


//
const arrayNumb =[5, 7, 8, 10, 45, 20, 15, 29];

function sumOfOddNumbers (arrNum){
      let oddNumbers = [];
    for(let i  = 0; i < arrNum.length; i++){
        const element = arrNum[i];
        if(element % 2 !== 0){
        oddNumbers.push(element);
         
        }
       
    }
    let sum = 0;
    for( let i = 0; i < oddNumbers.length; i++){
           sum = sum + oddNumbers[i];
    }

    return sum;

}
const myArrayNum =[5, 7, 8, 10, 45, 20, 15, 29];
const result = sumOfNumbers(myArrayNum);
console.log(result);