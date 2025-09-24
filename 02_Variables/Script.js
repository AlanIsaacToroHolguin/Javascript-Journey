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



/*
 Difference between let and var

 In JavaScript, both `let` and `var` are used to declare variables,
 but they behave differently:

 1. Scope:
    - `var` has function scope (or global scope if declared outside a function).
    - `let` has block scope (only exists inside { } where it is defined).

 2. Hoisting:
    - `var` declarations are hoisted to the top of their scope and initialized with `undefined`.
    - `let` is hoisted too, but not initialized, so using it before declaration causes an error.

 3. Redeclaration:
    - `var` allows redeclaring the same variable in the same scope.
    - `let` does not allow redeclaration in the same scope (safer).

Best practice: Use `let` (or `const`) instead of `var`.
*/

// Example:
function testVarLet() {
    if (true) {
        var x = 10;   // function scoped
        let y = 20;   // block scoped
    }

    console.log(x); // ✅ Works: 10
    // console.log(y); // ❌ Error: y is not defined (because let is block scoped)
}

testVarLet();
