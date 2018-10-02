// Questions
var firstName = prompt("What's your first name? ")
var lastName = prompt("What's your last name? ")
var age = prompt("How old are you? ")
var weight = prompt("How tall are you? (in centimeters)")
var petName = prompt("What's your pet's name?")

// Main boolean test:
spy = false;

// name and lastName:
if (firstName[0] == lastName[0]) { // Se a primeira letra de nome e sobrenome forem iguais
    spy = true;
} else {
    spy = false;
}

// age:
if (age > 20 && age < 30) { // se a idade estiver entre 21 e 29
    spy = true;
} else {
    spy = false;
}

// weight:
if (weight >= 170) { // se a altura for maior que 169 centímetros
    spy = true;
} else {
    spy = false;
}

// petName:
if (petName.charAt(petName.length - 1) === "y") { // se a última letra do petName for igual a "y"
    spy = true;
} else {
    spy = false;
}

// Final secret prompt:
if (spy == false) {
    console.log("There's nothing here. Come back later.")
} else {
    console.log("Welcome aboard, fellow spy. Please take a seat.")
}