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