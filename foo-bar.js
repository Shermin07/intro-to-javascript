// foo,bar,foobar::::
const arr = [3, 4, 5, 6, 8, 9, 10, 12, 15, 14, 45, 25, 18, 20, 33, 49, 42, 35, 55, 75, 85, 22, 78, 95, 98, 93, 99, 105, 115]; 

function numbers(newArr){

    for(let i = 0; i < newArr.length; i++){
        const number = newArr[i];
        if(number % 3 == 0 && number % 5 == 0){
            console.log("foobar");
        }
        else if(number % 3 == 0){
            console.log("foo");
        }
        else if (number % 5 == 0){
            console.log("bar");
        }
        else {
            console.log(i);
        }

    }
  
}
const result = numbers(arr);
console.log(result);