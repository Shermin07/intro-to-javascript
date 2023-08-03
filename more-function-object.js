// declare a function:

function myAge(age){
    console.log("my age:", age);
}
myAge(29);

// declare with return:
function myNumber(number){
    return number
}
var newNumber = myNumber(987654);
console.log(newNumber);

// sum function: avg function:

function add(num1, num2, num3){
    var sum = num1 + num2 + num3;
    console.log(sum);
     var avg = sum / 3;
    return avg;
}
var newAdd = add(11, 12, 13);
console.log(newAdd);

// 
 function buyMango(money){
       var mangoPrice = 20;
       var quantity = money / mangoPrice;

       return quantity;

}
   var mango =  buyMango(100);
   console.log(mango);

   //object: GET PROPERTY 

   var person = {
    name: "golam",
    age : 12,
    color : "black"

   }
   var newPerson = person.name;
   console.log(newPerson);
   // or
   var newAge = person["age"];
   console.log(newAge);


   // set propery value:
   person.age = 20;
   console.log(person);
   // or
   person["name"] = "moctader"
   console.log(person);

   // property and value eksathe pete hole:

   var propertyColor = "color";
   var propertyValue = person[propertyColor];
   console.log(propertyColor, propertyValue);

   // sob property eksathe pete chaile

   var keys = Object.keys(person);
   console.log(keys);

   var values = Object.values(person);
   console.log(values);

   // 

   for(var i = 0; i < keys.length; i++){
    console.log(keys[i]);
   }

   //
   for (var i = 0; i < keys.length; i++){
    var propertyName = keys[i];
    var propertyValue = person[propertyName];
    console.log(propertyName, propertyValue);
   }
   