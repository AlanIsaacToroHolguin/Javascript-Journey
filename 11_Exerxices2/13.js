/*
Exercise 13:

I have a kangaroo that jumps 3 meters each time.

Create a program that tells me how many jumps the kangaroo has made
and the total distance covered after 17 jumps.
*/


let kangarooJump = 3; 
let jumps = 17; 

for (let i = 1; i <= jumps; i++) {
    let jumpWord = i === 1 ? "jump" : "jumps";
    console.log(`The kangaroo has made ${i} ${jumpWord} and has covered ${i * kangarooJump} meters.`);
}

