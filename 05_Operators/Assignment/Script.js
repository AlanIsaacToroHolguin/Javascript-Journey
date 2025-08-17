// === Assignment Operators in JavaScript ===

// Assignment operators are used to assign values to variables.
// Some also perform an operation before assigning the result.

// Examples:

let x = 10;        // Simple assignment (=)
x += 5;            // Addition assignment (x = x + 5)
x -= 3;            // Subtraction assignment (x = x - 3)
x *= 2;            // Multiplication assignment (x = x * 2)
x /= 4;            // Division assignment (x = x / 4)
x %= 3;            // Modulus assignment (x = x % 3)
x **= 2;           // Exponentiation assignment (x = x ** 2)

// Output results to console:
let y = 10;

console.log("Initial y: " + y);

y += 5;
console.log("y += 5  → " + y);

y -= 3;
console.log("y -= 3  → " + y);

y *= 2;
console.log("y *= 2  → " + y);

y /= 4;
console.log("y /= 4  → " + y);

y %= 3;
console.log("y %= 3  → " + y);

y **= 2;
console.log("y **= 2 → " + y);

// Summary:
// =   → Assigns value
// +=  → Adds and assigns
// -=  → Subtracts and assigns
// *=  → Multiplies and assigns
// /=  → Divides and assigns
// %=  → Modulus and assigns
// **= → Exponentiation and assigns
