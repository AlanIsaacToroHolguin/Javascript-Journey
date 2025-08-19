// === Logical Operators in JavaScript ===

// Logical operators are used to combine or invert boolean values.
// They always return a boolean value: true or false.

// Examples:

let x = true;
let y = false;

// AND (&&)
console.log("x && y   → " + (x && y));   // false

// OR (||)
console.log("x || y   → " + (x || y));   // true

// NOT (!)
console.log("!x       → " + (!x));       // false
console.log("!y       → " + (!y));       // true

// Double NOT (!!) → convierte a boolean explícitamente
console.log("!!x      → " + (!!x));      // true
console.log("!!0      → " + (!!0));      // false

// Short-circuit behavior:
// AND (&&) devuelve el primer valor falso o el último si todos son true
console.log("true && 'Hello' → " + (true && "Hello")); // "Hello"
console.log("false && 'Hi'   → " + (false && "Hi"));   // false

// OR (||) devuelve el primer valor verdadero o el último si todos son false
console.log("false || 'Hi'   → " + (false || "Hi"));   // "Hi"
console.log("0 || null || 42 → " + (0 || null || 42)); // 42

// Summary:
// &&   → AND (true si ambos son true)
//
