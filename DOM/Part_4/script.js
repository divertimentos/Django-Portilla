// Restart Game Button
var restart = document.querySelector("#b")

//  Grabs all the squares
var squares = document.querySelectorAll("td")

// Clear all the squares
function clearBoard() {
    for (let i = 0; i < squares.length; i++) {
        squares[i].textContent = ""
    }
}

restart.addEventListener('click', clearBoard)

// Check the square marker
function changeMarker(){
    if(this.textContent === ""){
        this.textContent = "X"
    }else if(this.textContent === "X"){
        this.textContent = "O"
    }else {
        this.textContent = ""
    }
}

// For loop to add event listeners to all the squares
// for (let i = 0; i < squares.length; i++) {
//     squares[i].addEventListener("click", changeMarker)
// }

squares.forEach(function(elem){
    elem.addEventListener("click", changeMarker)
})
