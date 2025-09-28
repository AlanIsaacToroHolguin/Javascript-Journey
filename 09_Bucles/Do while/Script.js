/*
A do...while loop is a control structure that executes a block of code 
at least once, and then keeps executing it as long as the given condition is true.

Key difference from while:
- while → checks the condition first, then executes.
- do...while → executes the block first, then checks the condition.

Syntax:
do {
   // Code to execute at least once
} while (condition);

Examples:
*/

// Example 1: Simple countdown
let number = 50;

do {
    console.log("The number is: " + number);
    number--;
} while (number > 45);

// Example 2: Will always execute at least once, even if condition is false
let count = 5;

do {
    console.log("This will run once, even if the condition is false");
    count++;
} while (count < 0);


/*for → when you know the number of iterations.

while → when you only know the condition.

do...while → when you want to guarantee at least one execution.

*/