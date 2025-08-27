/*
Exercise 6:

In my video game store we have a special offer.  
If you buy a game for 50 euros or more, you get a 20% discount.  

If a customer buys Tekken 15 which costs 50 euros, how much does he pay?  
Store the result in a variable and display it in the console.
*/

// Data
const gamePrice = 50;
const discountRate = 0.20;

// Calculation
const discount = gamePrice * discountRate;
const finalPrice = gamePrice - discount;

// Output
console.log(`The final price of Tekken 15 after discount is ${finalPrice} euros.`);
