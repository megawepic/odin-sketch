const grid = document.querySelector(".grid")

let mouseDown = false;

document.body.addEventListener("mousedown", () => mouseDown = true);
document.body.addEventListener("mouseup", () => mouseDown = false);4

for (let i = 0; i < 30*30; i++){
    const square = document.createElement("div");



    square.addEventListener("mousedown", paintSquare);
    square.addEventListener("mouseenter", paintSquare);
    square.style.flex = `0 0 ${100 / 30}%`;
    square.classList.add("square");

    grid.append(square)
}

function paintSquare(e) {
    if (e.type === "mousedown" || mouseDown) {
        this.style.backgroundColor = "black";
    }
}