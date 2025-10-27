/* 
Exercise 17:

Show all the odd numbers between two numbers entered by the user.
*/

// Ask the user for two numbers
let num1 = parseInt(prompt("Enter the first number:"));
let num2 = parseInt(prompt("Enter the second number:"));

// Check if both inputs are valid numbers
if (isNaN(num1) || isNaN(num2)) {
    alert("Please enter valid numbers!");
} else {
    // Make sure num1 is smaller than num2 for the loop to work properly
    if (num1 > num2) {
        let temp = num1;
        num1 = num2;
        num2 = temp;
    }

    // Loop through all numbers between num1 and num2
    while (num1 < num2 - 1) {
        num1++;

        // Check if the number is odd
        if (num1 % 2 !== 0) {
            console.log(`The number ${num1} is odd`);
        }
    }
}
