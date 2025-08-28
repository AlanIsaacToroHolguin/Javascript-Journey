/*
Exercise 10:

The other day I went with my friends Juanma, Mateo, and Sebas to a burger restaurant.
Sebas and I ate 2 burgers each, Juanma ate 3, and Mateo, since he's a bodybuilder, ate 6.

How many burgers did we eat in total?
And is it true that I ate less than Mateo? Display the answers in the console.
*/

// Data
let meAndSebas = 2; // burgers each
let juanma = 3;
let mateo = 6;

// Calculation
let totalBurgers = (meAndSebas * 2) + juanma + mateo;
let ateLessThanMateo = meAndSebas < mateo;

// Output
console.log(`In total, we ate ${totalBurgers} burgers.`);
console.log(`Is it true that I ate less than Mateo? ${ateLessThanMateo}`);
