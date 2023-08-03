function inchToFeet (inches){
const feet = inches / 12;
return feet;
}
const givenInches = 84;
const jimHeight = inchToFeet(givenInches);
console.log(jimHeight);

//2.
function feetToInches (feet){
    const inches = 5.4*12;
    return inches;
}
const givenFeet = feetToInches(5.4);
console.log(givenFeet.toFixed(3));

//3:
function celsTofern (cels){
    const fern = (12 * 9/5) + 32;
    return fern;
}
const givencels =  celsTofern(12);
console.log(givencels.toFixed(3));

//


