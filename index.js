// Create one function with zero parameter having a console statement;
function ans() {
  console.log("Hello Dinesh");
}
ans();
// Create one function which takes two values as a parameter and
//  print the sum of them as "Sum of 3, 4 is 7"

function sum(a, b) {
  console.log(`Sum of ${a} ans ${b} is ${a + b}`);
}
sum(3, 4);

// Create one arrow function
let squre = (x) => {
  console.log(`squre of ${x} is ${x * x}`);
};
squre(8);

// "Print output:
// var x = 21;
// var girl = function () {
//     console.log(x);
//     var x = 20;
// };
// girl ();"

var x = 21;
var girl = function () {
  console.log(x);
  var x = 20;
};
girl();

// because here var x=21 is global variable and var x=20 is block label variable but
// we want to access x value before initialization ans var have hoisting so output is undefined

// "Print output:
// var x = 21;
// girl ();
// console.log(x)
// function girl() {
//     console.log(x);
//     var x = 20;
// };
// "

var x = 21;
girl();
console.log(x);
function girl() {
  console.log(x);
  var x = 20;
}

// function log is print first undefined because he want access value before initilation and second log is
// print 20 bacause in funtion x value is 20 assigned

// "Print output

// var x = 21;
// a();
// b();

//   function a() {

//    x = 20;
//   console.log(x);
// };
//  function b() {

//     x = 40;
//    console.log(x);
// };"

var x = 21;
a();
b();

function a() {
  x = 20;
  console.log(x);
}
function b() {
  x = 40;
  console.log(x);
}
// here function log is 20 ans function b log is 40 because both case have valur is upadated

// Write a function that accepts parameter n and returns factorial of n

function factorial(n) {
  if (n < 0) {
    console.log("Error! Factorial for negative number does not exist.");
  } else if (n === 0) {
    console.log(`The factorial of ${n} is 1.`);
  } else {
    let fact = 1;
    for (i = 1; i <= n; i++) {
      fact *= i;
    }
    return `The factorial of ${n} is ${fact}.`;
  }
}
let ans1 = factorial(5);
console.log(ans1);

// "Guess the Output

// function FindSum(a, b){
//     return a + b;
// }

// function DisplayData(data, batch){
//     console.log(`i am from ${data} and My batch is EA${batch}`)
// }

// DisplayData(""PrepBytes"", FindSum(10, 9));"

function FindSum(a, b) {
  return a + b;
}

function DisplayData(data, batch) {
  console.log(`i am from ${data} and My batch is EA${batch}`);
}

DisplayData("PrepBytes", FindSum(10, 13));

//  because DisplayData called first but it have two parameter first string and second is FindSum function
//  findSum sum return value is 23 this value assign to batch variable so output is
// i am from PrepBytes and My batch is EA23

// "Guess the output

// Abc();
// const Abc = function(){
//     let value = 20;
//     console.log(value);
// }"

// Abc();
// const Abc = function () {
//   let value = 20;
//   console.log(value);
// };
//  it give ReferenceError: Cannot access 'Abc' before initialization
//  because we wants to access a function  before initialization

// "Guess the output

// var a = 10;
// (function (){
//     console.log(a);
//     var a = 20;
// })();"

var a = 10;
(function () {
  console.log(a);
  var a = 20;
})();
// here output is undefined because we want to access a variable before initialization

// "Guess the Output
// const greet =  function(name){
//     return function(m){

//         console.log(`Hi!! ${name}, ${m}`);
//     }
// }

// const greet_message = greet('EA19');
// greet_message(""Welcome To PrepBytes"")"

const greet = function (name) {
  return function (m) {
    console.log(`Hi!! ${name}, ${m}`);
  };
};

const greet_message = greet("EA23");
greet_message("Welcome To PrepBytes");
