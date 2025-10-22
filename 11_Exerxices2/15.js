/* 
Exercise 15:

Show the sum and the average of the numbers entered 
until a negative number is introduced, then display the result.
*/

let sum = 0;
let number = 0;
let count = 0;

do {
    number = parseInt(prompt("Enter numbers until you type a negative one:"), 10);

    if (isNaN(number)) {
        alert("Please enter a valid number.");
        continue;
    }

    if (number >= 0) {
        sum += number;
        count++;
    }

} while (number >= 0);

if (count > 0) {
    let average = sum / count;
    alert(`The sum of the numbers is ${sum} and the average is ${average.toFixed(2)}.`);
} else {
    alert("No positive numbers were entered.");
}
