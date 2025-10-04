/*
Exercise 11:

Our users have dogs, and they want to know their pets' age in dog years.
One human year is equal to 7 dog years.

Ask the user for their dog's age in human years, then display the equivalent age in dog years.
*/

// Ask the user for their dog's age
let dogAge = prompt("How old is your dog (in human years)?");

// Convert the input into a number and calculate dog years
let dogAgeInYears = parseInt(dogAge) * 7;

// Show the result in an alert
alert("Your dog's age is " + dogAgeInYears + " in dog years!");
