//১. একটা কোড লিখো। যেটা দিয়ে কোন একটা array এর মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিতে পারবে। 



//২. একটা কোড লিখো যেটা দিয়ে তিনটা সংখ্যার মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিবে।  



//৩. একটা ফাংশন লিখো। সেই ফাংশনের মধ্যে ইনপুট হিসেবে একটা array নিবে। সেই array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হবে ইনপুট নেয়া array এর মধ্যে যতগুলা সংখ্যা আছে। সেই সংখ্যা গুলার গড় বের করবে। তারপর সেই গড় ফাংশনের রিটার্ন হিসেবে দিয়ে দিবে। একটু চিন্তা করো। বুঝার চেষ্টা করো। ট্রাই করো। দেখো পারো কিনা। 



//৪. একটা ফাংশন লিখো। যেটা ইনপুট প্যারামিটার হিসেবে একটা আয়তক্ষেত্রের দৈর্ঘ্য আর উচ্চতাকে নিবে। তারপর সেই আয়তক্ষেত্র এর area (আয়তন) কে রেজাল্ট হিসেবে রিটার্ন করবে। 



//৫. (ট্রিকি) কোন একটা array এর মধ্যে অনেকগুলা সংখ্যা আছে। সেই সংখ্যাগুলো থেকে second largest সংখ্যা বের করার একটা প্রোগ্রাম লিখো। দরকার হলে গুগলে সার্চ দাও। তারপর সার্চ রেজাল্ট দেখে বুঝে বুঝে করার চেষ্টা করো। 



// problem 1:

const numbers = [10, 20, 30, 40, 50, 60];
const result = Math.min(...numbers );
console.log(result);

// 2:

const num1 = 112;
const num2 = 122;
const num3 = 133;

if(num1 < num2 && num1 < num3){
    console.log(num1);
  
}
else if (num2 < num1 && num2 < num3){
    console.log(num2);
}

else{
    console.log(num3);
}


// 3:

function arr(numbers){
      let sum = 0;
    for(let i = 0; i < numbers.length; i++){
     sum = sum + numbers[i];
     avg = sum / numbers[i];
     
    }
   
    
   
    return avg;
}
const myArray = [10, 10, 10, 10, 10];
const result1 = arr(myArray);
console.log(result1);

// 4:

function findArea(length, height){
  const rectangleArea = length * height;
  
  return rectangleArea;

}
const area = findArea(12,20);
console.log(area);

//5:

