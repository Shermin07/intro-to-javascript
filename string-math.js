// Math.abs: ....negative value er jamela arate use kora hoy

const age1 = 29;
const age2 = 39;

const gap = age1 - age2;
console.log(gap);

const gap2 = Math.abs(age1 - age2);
console.log(gap2);
if(age1 > age2){
    console.log("they can be friend")
}
else{
    console.log("they can not be friends")
}

// math.pow
const x = 4;
const y = 4;
console.log(Math.pow(x,y));

// Math.round:

const number = 3.44444449;
console.log(Math.round(number));

const number2 = 3.564444449;
console.log(Math.round(number2));

//Math.ceil
const number3 = 5.399990;
console.log(Math.ceil(number3));

//Math.floor
const number4 = 5.399990;
console.log(Math.floor(number4));

//Math.random.....0-1 er moddhe randomly decimal num dibe
console.log(Math.random());

console.log(Math.random()*50);

console.log(Math.round(Math.random()*50));




