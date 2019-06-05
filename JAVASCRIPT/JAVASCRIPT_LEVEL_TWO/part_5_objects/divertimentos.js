var carInfo = {
    make: "Toyota",
    year: "1990",
    model: "Camry",
    carAlert: function(){
        alert("We've got a car here!")
    }
};

// This example
var myObj = {
    prop: 37,
    reportProp: function(){
        return this.prop;
    }
};
console.log(myObj.reportProp()); // logs 37

// Another this example
var simple = {
	prop: "Hello",
	myMethod: function(){
		console.log("The myMethod was called")
	}
}

// Even another this example
var myObj = {
	name: "Jose",
	greet: function(){
        console.log("Hello" + this.name)
    }
}
