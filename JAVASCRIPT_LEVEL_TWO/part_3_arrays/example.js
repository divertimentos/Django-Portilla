var country1 = "USA";
var country2 = "China";
var country3 = "Japan";

countries = ["USA",
    "China",
    "Japan"
]

countries[0];
countries[1];
countries[2];

countries[2] = "France";

// Immutability
country1[2] = "B" // Strings are immutable in this situation.

// Mutability
countries[2] = "Germany"

// 

var mixed = [true, "123", 312, "string"];

// Array methods

mixed.length

var myArr = ["One", "Two", "Three"]

var lastItem = myArr.pop()

var matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// Iteration

var arr = ["A", "B", "C"]

for (letter of arr) {
    console.log(letter);
}

for (jelly of arr) {
    console.log("hello");
}

// 

// for (letter of arr) {
//     alert(letter);
// }

// arr.forEach(alert);

//

function addAwesome(name) {
    return console.log(name+ " is awesome!")
}

var topics = ["Python", "Django", "Science"]

topics.forEach(addAwesome);