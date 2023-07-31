// while loop:

var number = 0;
while(number <= 15){
    console.log(number);
    number++;
}
// even number:
var num = 0;
while(num < 15){
    console.log(num);

    num+=2;
}

// odd number:
var num = 1;
while(num < 15){
    console.log(num);

    num+=2;
}

// for loop:

for(var num = 0; num <= 20; num++){
     console.log(num);
}

//even:

for(num = 0; num <= 25; num+=2){
    console.log(num);
}

// even:
for(num = 1; num <= 20; num+=2){
    console.log(num);


}

// loop of an array:

var numbers = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

var i = 0;
while(i <= numbers.length){
    var number = numbers[i];
    console.log(number);
    i++;
}

for (var i = 0; i <= numbers.length; i++){
   var number = numbers[i];
    console.log(number)
        
}


// break, continue:

for ( var i = 0; i <= 10; i++){
    if(i >5){
        break;
    }
    console.log(i)
}

var num = [10, 12, 11, 14, 15, 21, 22, 32, 23, 34, 343, 44];
for(i = 0; i <= num.length; i++){
    var num2 = num[i];
    
    if (num2 > 23){
        continue;
         }
         console.log(num2);
   
}

// reverse for loop, while loop:

for( i = 10; i >= 0; i--){
console.log(i);
}

var num = 15;
while(num > 0){
    console.log(num);
    num--;
}