var headOne = document.querySelector("#one")
var headTwo = document.querySelector("#two")
var headThree = document.querySelector("#three")

// Hover
headOne.addEventListener('mouseover', function(){
    headOne.textContent = "HOVER ON";
    headOne.style.color = "orange";

})

headOne.addEventListener('mouseout', function(){
    headOne.textContent = "HOVER OFF"
    headOne.style.color = "black"
})

// Click
headTwo.addEventListener("click", function(){
    if (this.style.color == "") {
        this.textContent = "TOGGLE ON"
        this.style.color = "lightgreen"
    } else {
        this.textContent = "TOGGLE OFF"
        this.style.color = ""
    }
})

// Double-Click
headThree.addEventListener("dblclick", function(){
    if (this.style.color == "") {
        this.textContent = "DOUBLE CLICKED"
        this.style.color = "cornflowerblue"
    } else {
        this.textContent = "DOUBLE CLICK ME"
        this.style.color = ""
    }
})

