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