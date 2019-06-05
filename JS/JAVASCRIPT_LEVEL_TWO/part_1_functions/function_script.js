// Function no parameter:

function hello() {
    console.log("Hello, world!");
}

// Function 1 parameter:
function helloYou(name) {
    return console.log("Olá, " +name);
}

// Function 2 parameters:
function addNum(num1, num2) {
    return console.log(num1 + num2);
}

// 

function helloSomeone(name="Kendrick") {
    console.log("Hello " +name);
}

// 

function formal(name="Kendrick", title = "Sir") {
    return title+ " " +name
}

// Local scope

function timesFive(numInput) {
    var result = numInput * 5
    return result
}

// Global scope

var v = " Global V"
var stuff = "Global stuff"

function fun(stuff) {
    console.log(v);
    stuff = "Reassign stuff inside func"
    console.log(stuff);
}

fun();
console.log(stuff);