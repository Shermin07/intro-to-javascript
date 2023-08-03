// practice 1:
function foo(){
    console.log("foo");

    function bar(){
        console.log("bar");

    }
    bar();
    
}
foo();

//  another:
function foo(){
    console.log("foo");
    bar()
}

function bar(){
    console.log("bar");
}
foo()


// problem:2

function make_avg(num1, num2, num3){
    var sum = num1 + num2 + num3;
    var avg = sum / 3;
    return avg;

}

var numbers = make_avg(12, 12, 12);
console.log(numbers);

//write a function make_avg() which will take an array of integer as a parameter and 
//the size of an array and return the avg of thoes values?

function make_avg(array){
    var sum = 0;
    for(var i = 0; i < array.length; i++){
        sum = sum + array[i];
 }

 return sum / array.length;

}
var my_Avg = make_avg([11, 12, 13, 14, 15]);
console.log(my_Avg);

// problem no: 3, has parameter, has return

function odd_even(number){
    if(number % 2 == 0){
        console.log("This value will be the even number")
    }
    else{
        console.log("This value will be the odd number")
    }
    return number
}
odd_even(92);

// has parameter , no return
function odd_even(number){
    if(number % 2 == 0){
        console.log("This value will be the even number")
    }
    else{
        console.log("This value will be the odd number")
    }
    
}
odd_even(92);


// problem no:5

var signal = "red";

switch (signal){
     case "red":
     console.log(" red signal: i will be in a danger");
     break;
     case "yellow":
     console.log(" yellow signal: i should stop");
     break;
     default:
     console.log(" green signal: i should cross the road");
        


}

