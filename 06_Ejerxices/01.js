/*
Exercise 1:

Calculate how many hours it would take for a spaceship to reach the Moon 
and store the result in a variable.

The distance from Earth to the Moon is 384,400 kilometers.

The speed of the spaceship is 1225 kilometers per hour.
*/

// Distance in kilometers
const moonDistance = 384400;

// Speed in km/h
const shipSpeed = 1225;

// Calculate time = distance / speed
const hours = moonDistance / shipSpeed;

// Show result
console.log("The spaceship would take " + hours + " hours to reach the Moon.");

