// Questions
var firstName = prompt("What's your first name? ")
var lastName = prompt("What's your last name? ")
var age = prompt("How old are you? ")
var height = prompt("How tall are you? (in centimeters)")
var petName = prompt("What's your pet's name?")

// Main boolean test:
nameSpy = null;
ageSpy = null;
heightSpy = null;
petNameSpy = null;

// name and lastName:
if (firstName[0] === lastName[0]) { // Se a primeira letra de nome e sobrenome forem iguais
    nameSpy = true;
} else {
    nameSpy = false;
}

// age:
if (age > 20 && age < 30) { // se a idade estiver entre 21 e 29
    ageSpy = true;
} else {
    ageSpy = false;
}

// height:
if (height >= 170) { // se a altura for maior que 169 centímetros
    heightSpy = true;
} else {
    heightSpy = false;
}

// petName:
if (petName.charAt(petName.length - 1) === "y") { // se a última letra do petName for igual a "y"
    petNameSpy = true;
} else {
    petNameSpy = false;
}

// Secret prompt:
if (nameSpy && ageSpy && heightSpy && petNameSpy) {
    console.log("Welcome aboard, fellow friend. Please take a seat.")
} else {
    console.log("There's nothing here. Come back later.")
}