const grid = document.querySelector(".grid")

for (let i = 0; i < 16; i++){
    const square = document.createElement("div");

    square.classList.add("square");
    square.style.backgroundColor = "orange";

    grid.append(square)
}