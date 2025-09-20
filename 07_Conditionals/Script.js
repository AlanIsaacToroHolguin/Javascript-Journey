
//IF STATEMENT IN JAVASCRIPT


/* The "if" statement allows us to execute code depending 
on whether a condition is true or false.

Syntax:
if (condition) {
    // code runs if condition is true
} else {
    // code runs if condition is false
}

We can also use:
- Comparison operators: ==, ===, !=, >, <, >=, <=
- Logical operators: && (and), || (or), ! (not)
*/


//EXAMPLES


// Example 1: Check if it is raining
let itsRaining = true;

if (itsRaining === true) {
    // condition is true → this code runs
    console.log("Take an umbrella");
} else {
    // condition is false → this code runs instead
    console.log("No need for an umbrella");
}

// Example 2: Check if the user wants onion
let wantsOnion = false;

if (!wantsOnion) {
    // !false = true → condition is true
    console.log("Your hamburger will have onion");
} else {
    // condition is false
    console.log("Your hamburger will not have onion");
}

// Example 3: Check if a person is old enough to buy alcohol in the US
let name = "Alan";
let age = 20;

if (age >= 21) {
    console.log(`${name} is ${age} years old, so they can buy alcohol in the United States.`);
} else {
    console.log(`${name} is ${age} years old and cannot buy alcohol in the United States yet.`);
}
