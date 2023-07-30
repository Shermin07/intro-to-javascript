// problem 1:

var fruits = ["Apple", "Banana", "Orange"];

// index number
  var indexNumber = fruits[2];
  console.log(indexNumber);

// banana position
var bananaIndex = fruits.indexOf("Banana");
console.log(bananaIndex);

// banana replace with mango
fruits[1] = "Mango";
console.log(fruits);

// remove
fruits.pop("Orange")
console.log(fruits);

// add 
fruits.push("Watermelon");
console.log(fruits);


// problem 2:

var myScores = 85;

if(myScores >= 80 ) {
    console.log("my grade will be: A");
}
else if(myScores >= 60 ) {
    console.log("my grade will be: B");
}
else if(myScores >= 50 ) {
    console.log("my grade will be: C");
}
else if(myScores >= 40 ) {
    console.log("my grade will be: D");
}
else  {
    console.log("my grade will be: F");
}


var tomScores = 66;

if(tomScores >= 80   ) {
    console.log("my grade will be: A");
}
else if(tomScores >= 60 ) {
    console.log("my grade will be: B");
}
else if(tomScores >= 50 ) {
    console.log("my grade will be: C");
}
else if(tomScores >= 40 ) {
    console.log("my grade will be: D");
}
else  {
    console.log("my grade will be: F");
}

var jeneScores = 95;

if(jeneScores >= 80   ) {
    console.log("my grade will be: A");
}
else if(jeneScores >= 60 ) {
    console.log("my grade will be: B");
}
else if(jeneScores >= 50 ) {
    console.log("my grade will be: C");
}
else if(jeneScores >= 40 ) {
    console.log("my grade will be: D");
}
else  {
    console.log("my grade will be: F");
}

var peterScores = 56;
if( peterScores >= 80   ) {
    console.log("my grade will be: A");
}
else if( peterScores >= 60 ) {
    console.log("my grade will be: B");
}
else if( peterScores >= 50 ) {
    console.log("my grade will be: C");
}
else if( peterScores>= 40 ) {
    console.log("my grade will be: D");
}
else  {
    console.log("my grade will be: F");
}

var johnScores = 40;
if( johnScores>= 80   ) {
    console.log("my grade will be: A");
}
else if( johnScores >= 60 ) {
    console.log("my grade will be: B");
}
else if( johnScores >= 50 ) {
    console.log("my grade will be: C");
}
else if( johnScores >= 40 ) {
    console.log("my grade will be: D");
}
else  {
    console.log("my grade will be: F");
}


// other way:




// problem 3:
// largest number

var number1 = 13;
var number2 = 79;
var number3 = 45;

if(number1 > number2 && number1 >number3){
    console.log("number1 will be the largest numbe")
}
else if(number2 > number1 && number2 >number3){
    console.log("number2 will be the largest numbe")
}
else{
   console.log("number3 wii be the largest number") 
}


// triangle isosceles
var side1 = 9;
var side2 = 8;
var side3 = 9;

if(side1 == side2 || side2 == side3 || side1 == side3  ){
    console.log("this triangle will be isosceles")

}
else{
    console.log("this is not isoscles")
}
