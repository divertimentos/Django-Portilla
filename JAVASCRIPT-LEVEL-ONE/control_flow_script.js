var hot = false;
var temp = 10;

if (true) {
    console.log("I ran.")
}

if (temp > 80) {
    console.log("It's hot outside.")
} else {
    console.log("It's not very hot today.")
}

console.log(hot);

if (temp > 80) {
    console.log("Hot outside!");
} else if (temp <= 80 && temp >= 50) {
    console.log("Average temp outside.");
} else if (temp < 50 && temp >= 32) {
    console.log("It's pretty cold outside!");
} else {
    console.log("It's very cold outside!");
}


var ham = 0;
var cheese = 0;

var report = "blank";

if (ham >= 10 && cheese >= 10){
    report = "Strong sales of both ham and cheese!"
} else if (ham === 0 && cheese === 0) {
    report = "Nothing sold!"
} else {
    report = "We've had some sales of items!"
}

console.log(report);