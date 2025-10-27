/*
Exercise 18:

We have a collection of numbers from 1 to 17.
The user has to guess which one is the chosen number.

Create a program that lets the user guess the number.
*/

const numberToGuess = 7; // The chosen number
let attempt; // Variable to store the user's attempt

// Repeat until the user guesses the correct number
while (attempt !== numberToGuess) {

  // Ask the user to enter a number between 1 and 17
  attempt = parseInt(prompt("Guess the number from 1 to 17:"));

  // Check if the user's guess is correct
  if (numberToGuess === attempt) {
    alert(`Congratulations! You guessed it — the number was ${numberToGuess}`);
  } else {
    alert("Keep trying!!!");
  }
}
