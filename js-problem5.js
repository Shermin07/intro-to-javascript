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