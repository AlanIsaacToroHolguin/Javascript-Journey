/*
A while loop is a control structure that repeatedly executes 
a block of code as long as a given condition is true.

It has two main parts:

1. Condition → evaluated before each iteration. 
   If true, the loop executes; if false, the loop stops.
2. Code block → the set of instructions that will run 
   repeatedly while the condition is true.

⚠️ Important: you must ensure that the condition will eventually 
become false, otherwise you’ll create an infinite loop.

Syntax:
while(condition){
   // Code to execute repeatedly
}

Examples:
*/

// Example 1: Counting from 0 to 9
let counter = 0;

while (counter < 10) {
    console.log("The counter is at: " + counter);
    counter++;
}

// Example 2: Simulating years and stopping at 2022
let year = 1950;
let liveUntil = 2050;
let stopAt = 2022;

while (year <= liveUntil) {
    console.log("We are now in the year: " + year);

    if (year === stopAt) {
        break; // Exit the loop when the year reaches 2022
    }
    year++;
}
