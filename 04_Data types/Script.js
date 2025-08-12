// === JavaScript Data Types Examples ===

// String - a sequence of characters (text)
let message = "Welcome to JavaScript!";

// Number - numeric values, including integers and decimals
let year = 2025;          // integer
let temperature = 36.5;   // floating-point number (decimal)

// Boolean - logical values: true or false
let isLoggedIn = true;
let hasPermission = false;

// Undefined - a variable declared but not assigned a value yet
let userScore; // undefined by default

// Null - explicitly represents "no value" or "empty"
let selectedProduct = null;

// Array - an ordered list of values (elements can be of any type)
let colors = ["red", "green", "blue", "yellow"];

// Object - a collection of key-value pairs (used to represent structured data)
let user = {
  name: "Emma",
  age: 28,
  isAdmin: false
};

// Output values to the console
console.log(message, temperature, isLoggedIn);

/*
  typeof: returns the data type of a variable as a string.
  Note: typeof null returns "object" (JavaScript quirk).

  Array.isArray: specifically checks if a variable is an array,
  because typeof returns "object" for arrays.
*/

// === typeof operator examples ===
console.log(typeof heroName);          // "string"
console.log(typeof powerLevel);        // "number"
console.log(typeof flyingSpeed);       // "number"
console.log(typeof hasCape);            // "boolean"
console.log(typeof secretWeapon);      // "undefined"
console.log(typeof sidekick);          // "object" (special case for null)
console.log(typeof favoriteSnacks);    // "object" (arrays are objects)
console.log(typeof villain);            // "object"

// === Array.isArray usage ===
console.log(Array.isArray(favoriteSnacks));  // true  - confirms it’s an array
console.log(Array.isArray(villain));          // false - villain is an object, not an array

