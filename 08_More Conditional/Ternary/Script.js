/*
 Ternary Operator (Conditional)
The ternary operator is a shorthand way of writing an if/else statement.
 Syntax:
   condition ? expressionIfTrue : expressionIfFalse;

 It evaluates the condition. If true, it returns the first expression.
 If false, it returns the second expression.

 This makes the code shorter and often cleaner than writing a full if/else.
*/
// Example 1
let isRaining = true;
let message = isRaining ? "Take an umbrella" : "No need for an umbrella";
console.log(message);

// Example 
let age = 20;
let canDrink = age >= 21 ? "You can buy alcohol in the US" : "You cannot buy alcohol in the US yet";
console.log(canDrink);

// Example 3
let number = 7;
let type = number % 2 === 0 ? "Even number" : "Odd number";
console.log(type);
