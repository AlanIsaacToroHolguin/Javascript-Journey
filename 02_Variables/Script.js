//VARIABLES
//A variable is a container that stores a value or reference to be used and manipulated in the code.

// var → old, function/global scope, avoid using
var x = 10;

// let → modern, block scope, value can change
let y = 20;

// const → modern, block scope, value cannot change
const z = 30;


// define variables with let
let name = "Alan";
let age = 20;
let country = "Colombia";

console.log(name, age, country);

// concatenated variables
alert("Name: " + name + " | Age: " + age + " | Country: " + country);

let AboutAlan = "Hello this is " + name + " from JS, I am " + age + " years old and I live in " + country;

console.log(AboutAlan);
