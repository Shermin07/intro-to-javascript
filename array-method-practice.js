var arr = [12, 11, 13, 14, 15, 16, 17, 18, 19, 20];

// display length of an array:
var newArr = arr.length;
console.log(newArr);

// 4 no index a kon element ache seta jante:
var newArr = arr[4];
console.log(newArr);

// set or replace an element:
arr[3] = 24;
console.log(arr);

// element kon position a ache seta jante:
var newArr = arr.indexOf(19);
console.log(newArr);

// add/ remove:

var arr = [12, 11, 13, 14, 15, 16, 17, 18, 19, 20];

// push: last position a add korbe
 arr.push(33);
console.log(arr);

// first position a add korbe:
arr.unshift(101);
console.log(arr);

// pop: last position theke remove korbe:
arr.pop();
console.log(arr);
arr.pop();
console.log(arr);

// first position theke remove korbe:
arr.shift()
console.log(arr);


// reverse elements:
arr.reverse();
console.log(arr);

// splice: majkhane add korte:

var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

num.splice(3, 0, 11, 12, 13);
console.log(num);

// majkhan theke remove korte:

num.splice(3, 6);
console.log(num);

// slice:
var number = [ 11, 12, 21, 22, 31, 32, 41, 42, 51, 52];
number.slice(5,8);
console.log(number);


