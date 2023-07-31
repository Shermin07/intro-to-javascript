// while loop:

var line = 0;

while(line < 39){
    console.log("Ajke amar mon valo nei");
    line++;
}

// for loop:

for(var line2 = 0; line2 < 39; line2++){
    console.log("ajke amar mon valo nei")
}

// display numbers betwwen 58 to 98
// while
var number = 58;
while(number <= 98){
    console.log(number);
    number++;
}

//for
for(var number2 = 58; number2 <= 98; number2++){
    console.log(number2);

}

// display all the even number from 412 to 456
// while

var evenNum = 412;
while(evenNum <= 456){
    console.log(evenNum);
    evenNum += 2;
}

// for
for(var evenNum = 412; evenNum <= 456; evenNum++){
    console.log(evenNum);
    evenNum += 2;
}

//odd
var oddNum = 581;
while(oddNum <= 623){
    console.log(oddNum);
    oddNum += 2;
}

// for
for(var oddNum = 581; oddNum <= 623; oddNum++){
    console.log(oddNum);
    oddNum += 2;
}


// write an array what i earned today and previous day, and display all tje element using loop

var topics = ["html", "vanila css", "tailwind", "bootstrap", "daisyUI", "variable", "array", "while loop", "for loop"];

var topicsList = topics.length;
console.log(topicsList);

//while:
var i = 0;
while( i < topics.length){
   var topic = topics[i];
    console.log(topic)
    i++;
}

//for:

for(i = 0; i < topics.length; i++){
    var topic = topics[i];
    console.log(topic);
}

// break:

var num = 30;
while(num <= 86){
    console.log(num);
    num++;
    if(num > 44){
        break;
    }
}

// continue..... means skip

var bookPrices = [30, 40, 50, 60, 122, 133, 324, 243, 554, 22, 543, 324, 435];

var i = 0;
while(i < bookPrices.length){
    var price = bookPrices[i];
   

    if( price  > 200){
        continue;
    }
    
    i++;
    console.log(price);
    
}

// for:

for (var i = 0; i < bookPrices.length; i++){
    var price = bookPrices[i];
    
    if(price > 200)
    continue;
   console.log(price);
}