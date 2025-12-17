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

    if (rgbMode){
         if (e.type === "mousedown" || mouseDown) {
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);

            this.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        }       
    } else if (opaqueMode){
        if (e.type === "mousedown" || mouseDown) {
            if (!this.style.backgroundColor) {
                this.style.backgroundColor = "black";
            }

            let currentOpacity = parseFloat(this.style.opacity) || 0.1;

            if (currentOpacity < 1) {
                this.style.opacity = currentOpacity + 0.1;
            }
    }
    } else {
        if (e.type === "mousedown" || mouseDown) {
            this.style.backgroundColor = "black";
        }
    }
}

const reset = document.querySelector(".reset")
reset.addEventListener("click", resetGrid)

function resetGrid(){
    const squares = document.querySelectorAll(".square")

    squares.forEach(square => {
        square.style.backgroundColor = "white"
        square.style.opacity = 1
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

let rgbMode = false

const rgbBtn = document.querySelector(".rgb")
rgbBtn.firstElementChild.style.backgroundColor = "red"

rgbBtn.addEventListener("click", function(){
    rgbMode = !rgbMode
    if (rgbMode){
        rgbBtn.firstElementChild.style.backgroundColor = "green"
    } else {
        rgbBtn.firstElementChild.style.backgroundColor = "red"
    }
})

let opaqueMode = false

const opaqueBtn = document.querySelector(".opacity")

opaqueBtn.addEventListener("click", function(){
    opaqueMode = !opaqueMode
})