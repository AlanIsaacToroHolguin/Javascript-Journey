// === Increment and Decrement Operators in JavaScript ===

// These operators are used to increase or decrease a numeric value by 1.

// Examples:

let a = 5;

// Post-increment (a++)
console.log("a++  → " + (a++)); // 5 (primero devuelve el valor, luego incrementa)
console.log("a    → " + a);     // 6

// Pre-increment (++a)
console.log("++a  → " + (++a)); // 7 (primero incrementa, luego devuelve el valor)

// Post-decrement (a--)
console.log("a--  → " + (a--)); // 7 (devuelve, luego resta)
console.log("a    → " + a);     // 6

// Pre-decrement (--a)
console.log("--a  → " + (--a)); // 5 (primero resta, luego devuelve el valor)

// Summary:
// a++ → Post-increment (usa el valor, luego suma 1)
// ++a → Pre-increment  (suma 1, luego usa el valor)
// a-- → Post-decrement (usa el valor, luego resta 1)
// --a → Pre-decrement  (resta 1, luego usa el valor)
