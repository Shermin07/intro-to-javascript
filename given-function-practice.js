// feetToInch:

function feetToInch(feet){
    inches = feet * 12;
    return inches;

}
const feet = 12;
const result = feetToInch(feet);
console.log(result);

// centimeterToMeter:

function centimeterToMeter(centimeter){
          meter = centimeter / 100;
          return meter;
}
const centimeter = 200;
const output = centimeterToMeter(centimeter);
console.log(output);


// paperRequirements:
function paperRequirements(book1Quantity,book2Quantity,book3Quantity ){
const book1Page = 100;
const book2Page = 200;
const book3Page = 300;

const book1TotalPage = book1Page * book1Quantity;
const book2TotalPage = book2Page * book2Quantity;
const book3TotalPage = book3Page * book3Quantity;

const totalPage = book1TotalPage + book2TotalPage + book3TotalPage;
return totalPage;


}
const total = paperRequirements(5, 3, 10);
console.log(total);

// bestFriend......largest name ber korte hobe

const namesN = ["alia", "shumi", "rimu", "shermin", "dalia", "noorjaha"];

function bestFriend(names){

      let largest = names[0];
    for(let i = 0; i < names.length; i++){
        const name = names[i];
     if(name.length > largest.length){
        largest = name;
     }
    }
    return largest;
}
const largestName = bestFriend(namesN);
console.log(largestName);

// print only positive:
const array = [10, 20, 30, 40, 50, 60, -65, -34, -23, 44, -55, 20, -100];

function onlyPositive(arr){
  let  positiveNumbers = [];
    for(let i = 0; i < arr.length; i++){
        const newarr = arr[i];
        if(newarr  > 0){
            positiveNumbers.push(newarr);
           
        }
        else{
            break;
        }
    }
    return positiveNumbers ;

}
const positiveNumbers = onlyPositive(array);
console.log(positiveNumbers);