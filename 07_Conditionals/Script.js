
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

// Example 3: 
let name = "Alan";
let age = 70;

if (age >= 18) {
    // Person is an adult (18 or older)
    console.log(`${name} is ${age} years old and is an adult.`);

    if (age <= 20) {
        console.log(`${name} is ${age} years old and is a teenager.`);
    } else if (age >= 70) {
        console.log(`${name} is ${age} years old and is elderly.`);
    } else {
        console.log(`${name} is ${age} years old and is an adult.`);
    }

} else {
    // Person is a minor (under 18)
    console.log(`${name} is ${age} years old and is a minor.`);
}

// Example 4
let goodWeather = false;

if (goodWeather) {
    console.log("Let's go to the beach");
} else {
    console.log("We stay at home");
}

// Example 5
let year = 2037;

if (year >= 2000 && year <= 2030) {
    console.log("We are in the current era");
} else if (year > 2030) {
    console.log("We are in the postmodern era");
} else {
    console.log("We are in the past era");
}

// Example 6
if (year === 2007 || year === 2017 || year === 2027 || year === 2037) {
    console.log("The year ends with 7");
} else {
    console.log("The year does not end with 7");
}
