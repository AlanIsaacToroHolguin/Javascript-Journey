/* 
Exercise 16:

Write a program that shows the multiplication table 
of the number entered by the user.
*/

let number = parseInt(prompt("Enter a number to see its multiplication table:"), 1);

if (isNaN(number)) {
    alert("Please enter a valid number.");
} else {
    let table = `Multiplication table of ${number}:\n\n`;
    
    for (let i = 1; i <= 10; i++) {
        table += `${number} x ${i} = ${number * i}\n`;
    }

    alert(table);
}
