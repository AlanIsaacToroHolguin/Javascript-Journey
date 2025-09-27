/*
A for loop is a control structure that allows you to repeat a block of code
a specific number of times. It has three main parts:

1. Initialization → executed once at the beginning (e.g., let i = 0).
2. Condition → checked before each iteration; the loop runs while it is true.
3. Increment/Decrement → executed after each iteration (e.g., i++).

Syntax:
for(initialization; condition; increment/decrement){
// Code to execute repeatedly
}

Example:
Print numbers from 0 to 200.
*/

let limit = 200;

for(let counter = 0; counter <= limit; counter++){
// Block of code that will be executed
console.log("We are at number: " + counter);
}
