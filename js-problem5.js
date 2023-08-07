// problem1:

function isInteger(number){
    if(typeof number !== "number"){
        return "please provide a number"
    }
    else{
         if(number % 1 === 0){
           return true;
         }
         else{
            return false;
         }




    }

}
const result = isInteger(30);
console.log(result);

// priblem2:::

function isJavaScript(fileName){
    if( typeof fileName !=="string" ){
        return "please provide a string";
    }
    else{
        if(fileName.toLowerCase().endsWith(".js")=== true){
            return true;
        }
        else{
            return false;
        }
    }

}
const result1 = isJavaScript("problems.html");
console.log(result1);

// problem3:::

function mindGame(num){
if(typeof num !== "number" || num <=0 ){
    return "please provide a number"
}
else{
    const result4 = (((num*3)+10)/2)-5;
    return result4;
}

}

const result3 = mindGame(30);
console.log(result3);

// problem4:::

function isGiven(number){
    if(typeof number !== "number"){
        return "please return a number"
    }
    else{
        const differ = number-7;
        if(differ < 7){
            return differ;
            }
            else{
                return number*2;
            }
    }

}
const result4 = isGiven(6);
console.log(result4);
const result41 = isGiven(-15);
console.log(result41);
const result42 = isGiven(15);
console.log(result42);


// problem5:::::

const arr = [10, -11, 13, 14, 34, -23, -45, -55, 90, -100];

function findingBadData(x){
    if(!Array.isArray ){
        return "please provide me an array"
    }
    else{ 
        let badData = [];
        for(let i = 0; i< x.length; i++){
        if(typeof x[i] !== "number"){
            return "please provide a positive number"
        }
        else{
            if(x[i] < 0){
                badData.push(x[i]);
            }
           
        }
        }
        return badData;
    }
    
   

}

const result5 = findingBadData(arr);
console.log(result5);

// problem6:::::

function gemsToDiamond(num1, num2, num3){
    if( typeof num1 !== "number" || typeof num2 !== "number"|| typeof num3 !== "number"){
        return "please provide a number"
    }
    else{
        const firstGemsPower = 21;
        const secondGemsPower = 32;
        const thirdGemsPower = 43;

        const totalDiamonds = (firstGemsPower*num1) + (secondGemsPower*num2) + (thirdGemsPower*num3);

        if(totalDiamonds > 1000*2){
            return totalDiamonds-2000;
        }
        else{
            return totalDiamonds;
        }
    }

}
const result6 = gemsToDiamond(1, 1, 1);
console.log(result6);

// problem 7:::

const namesArr = ["shermin", "juma", "bulbuli", "dalia", "ranu", "sultana", "moonnikhatun"];

function bestFriend(x){
    if(!Array.isArray){
        return "please provide me a array"
    }
    else{
         let largest = x[0];
        for( let i = 0; i < x.length; i++){
            const name = x[i];
            if(name.length > largest.length){
                largest = name;

            }
        }
        return largest;
    }
    

}
const result7 = bestFriend(namesArr);
console.log(result7);


//problem8:::

function onlyPositive(numbers){
    if( !Array.isArray ){
        return "please provide a number"
    }
    else{
       
        let positiveNum = [];
        for(let i = 0; i<numbers.length; i++){
            const num = numbers[i];
            if(num < 0){
                break;
            }
            else{

                positiveNum.push(num);
            }
        }
        return positiveNum;
    }


}

const result8 = onlyPositive([10,40, 50, 100, 120, 290, -10, 20, -20, -23, -34, -56, -21, 22, 45, -76]);
console.log(result8);