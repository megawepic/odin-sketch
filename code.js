const grid = document.querySelector(".grid")

let mouseDown = false;
let size = 16
createGrid(size)

function createGrid(size){
    for (let i = 0; i < size*size; i++){
        const square = document.createElement("div");

        square.addEventListener("mousedown", paintSquare);
        square.addEventListener("mouseenter", paintSquare);
        square.style.flex = `0 0 ${100 / size}%`;
        square.classList.add("square");

        grid.append(square)
    }
}

document.body.addEventListener("mousedown", () => mouseDown = true);
document.body.addEventListener("mouseup", () => mouseDown = false);

function paintSquare(e) {
    if (e.type === "mousedown" || mouseDown) {
        this.style.backgroundColor = "black";
    }
}

const reset = document.querySelector(".reset")
reset.addEventListener("click", resetGrid)

function resetGrid(){
    const squares = document.querySelectorAll(".square")

    squares.forEach(square => {
        square.style.backgroundColor = "white";
    });
}

const change = document.querySelector(".change-grid")
change.addEventListener("click", changeGrid)

const input = document.querySelector("#userInput")
input.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        changeGrid();
    }
})

function changeGrid() {
    const userInput = document.getElementById("userInput")
    
    const size = parseInt(userInput.value)

    if (isNaN(size) || size < 1 || size > 100) {
        alert("Please enter a valid number between 1 and 100");
        return;
    }
    
    grid.innerHTML = "";
    userInput.value = ""

    createGrid(size)
}