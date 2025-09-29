/*
In JavaScript, there are three main types of browser dialogs (pop-ups).
These are part of the window object and are very simple to use.
They temporarily stop code execution until the user interacts with them.
*/

// 1. ALERT → Displays a simple message with an OK button.
let message = "Hello world!";
alert(message); // Example: A popup will appear with the text "Hello world!".

// 2. CONFIRM → Asks the user to confirm an action (OK or Cancel).
// Returns true if the user clicks OK, false if Cancel.
let answer = confirm("Are you sure you want to continue?");

// Example: If the user presses OK → console logs true, otherwise false.
console.log("User response from confirm:", answer);

// 3. PROMPT → Asks the user to input text.
// Returns the text typed by the user, or null if Cancel is clicked.
let age = prompt("How old are you?");

// Example: User types "25" → console logs 25 as a number.
console.log("User age:", parseInt(age));
