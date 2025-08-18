// === Comparison Operators in JavaScript ===

// Comparison operators are used to compare two values.
// They always return a boolean value: true or false.

// Examples:

let a = 10;
let b = 20;

// Equal (==)
console.log("a == b   → " + (a == b));   // false

// Strict equal (===)
console.log("a === 10 → " + (a === 10)); // true

// Not equal (!=)
console.log("a != b   → " + (a != b));   // true

// Strict not equal (!==)
console.log('a !== "10" → ' + (a !== "10")); // true

// Greater than (>)
console.log("b > a    → " + (b > a));    // true

// Less than (<)
console.log("a < b    → " + (a < b));    // true

// Greater than or equal (>=)
console.log("a >= 10  → " + (a >= 10));  // true

// Less than or equal (<=)
console.log("b <= 15  → " + (b <= 15));  // false

// Summary:
// ==   → Equal to (compares value)
// ===  → Strict equal to (compares value and type)
// !=   → Not equal (compares value)
// !==  → Strict not equal (compares value and type)
// >    → Greater than
// <    → Less than
// >=   → Greater than or equal to
// <=   → Less than or equal to
