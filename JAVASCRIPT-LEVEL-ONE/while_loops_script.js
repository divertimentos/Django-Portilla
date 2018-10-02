var x = 0;

while (x < 5) {
    console.log("x is currently: " + x);

    if (x === 3) {
        console.log("Now x is equal to THREE")
        // break; 
    }

    console.log("x is still less than 5. Adding 1 to x.");

    x += 1;
}

if (x === 5) {
    console.log("Now x is equal to 5!")
}

// QUICK EXERCISE: Write a while loop that prints out only the even numbers from 1 to 10.

var number = 0;

while (number <= 10) {
    if (number % 2 === 0) {
        console.log(number);
    }
    number += 1;
}

console.log("Done!");