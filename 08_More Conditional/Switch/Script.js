/*
The switch statement evaluates an expression and 
  executes different blocks of code based on the result.

- It’s useful when you have many conditions that depend 
  on the same value (instead of using multiple if/else if).

- Basic structure:
  switch(expression) {
    case value1:
      // Code if expression === value1
      break;
    case value2:
      // Code if expression === value2
      break;
    default:
      // Code if no case matches
  }

- break: prevents the execution from continuing 
  into the next case.
- default: runs if no case matches.
*/

let day = new Date().getDay(); 
// 0 = Sunday, 1 = Monday, 2 = Tuesday, etc.

switch (day) {
  case 0:
    console.log("Today is Sunday");
    break;
  case 1:
    console.log("Today is Monday");
    break;
  case 2:
    console.log("Today is Tuesday");
    break;
  case 3:
    console.log("Today is Wednesday");
    break;
  case 4:
    console.log("Today is Thursday");
    break;
  case 5:
    console.log("Today is Friday");
    break;
  case 6:
    console.log("Today is Saturday");
    break;
  default:
    console.log("Error: Unknown day");
}
