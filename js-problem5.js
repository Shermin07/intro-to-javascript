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