/*
Exercise 8:

I have an ice cream shop and each scoop costs 1.8 euros.
How much do cones with 1, 2, or 3 scoops cost?
Keep in mind that the cone itself costs 0.5 euros.
*/

// Data
let scoopPrice = 1.8;
let conePrice = 0.5;

// Calculation
let cone1 = scoopPrice + conePrice;
let cone2 = (scoopPrice * 2) + conePrice;
let cone3 = (scoopPrice * 3) + conePrice;

// Output
console.log(`The price of a cone with 1 scoop is ${cone1} euros, 
    with 2 scoops is ${cone2} euros, 
    and with 3 scoops is ${cone3} euros.`);
