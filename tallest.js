function findTallest(heights){
    let largeNumber = [];
    for(let i = 0; i < heights.length; i++ ){
       const height = heights[i];
       if(height > largeNumber){
         largeNumber = height;
       }
       
    }
return largeNumber;
}
const heights = [100, 120, 130, 340, 200, 210, 300, 230];
const result = findTallest(heights);
console.log(result);


/// 

function largestNumber(numbers){
     let largeNumber = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        const number = numbers[i];
        if(number> largeNumber){
              largeNumber = number;
        }
    }
  return largeNumber;
}
const result1 = largestNumber([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]);
console.log(result1);
