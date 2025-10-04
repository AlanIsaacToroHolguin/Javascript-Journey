/*
Exercise 14:

A DJ doesn’t know what music genre to play at the party...

Ask the user which genre they want (pop, rock, or rap)

Depending on their choice, return a different message.
*/

let genre = prompt("Which music genre do you want? (pop, rock, or rap)");

if (genre) {
    genre = genre.trim().toLowerCase();

    switch (genre) {
        case "pop":
            alert("You chose pop! Get ready to dance to some catchy tunes!");
            break;  
        case "rock":
            alert("You chose rock! Time to rock out with some electrifying beats!");
            break;
        case "rap":
            alert("You chose rap! Let's vibe to some rhythmic rhymes!");
            break;      
        default:
            alert("Sorry, we don't have that genre. Please choose pop, rock, or rap.");
            break;
    }
} else {
    alert("You didn’t enter any genre.");
}

