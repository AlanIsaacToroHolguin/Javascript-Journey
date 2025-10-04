/*
Exercise 12:

Create a program that asks for two numbers and tells us:

* Which one is greater
* Which one is smaller
* Or if they are equal

If the inputs are not valid numbers or are less than or equal to 0,
the program should ask again until valid numbers are entered.
*/

alert("For this activity, you must enter two numbers. Please enter just numbers and greater than 0");

let number1 = parseInt(prompt("Enter the first number:"));
let number2 = parseInt(prompt("Enter the second number:"));

// Validate numbers
if (isNaN(number1) || isNaN(number2) || number1 <= 0 || number2 <= 0) {
parseInt(prompt("Enter the first number:"));
parseInt(prompt("Enter the second number:"));
} else {
// Compare the numbers
if (number1 > number2) {
alert("The larger number is " + number1 + " and the smaller number is " + number2);
} else if (number1 < number2) {
alert("The larger number is " + number2 + " and the smaller number is " + number1);
} else {
alert("The numbers are equal.");
}
}
