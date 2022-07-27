let color = "black";

let changeSize = function (input) {
    if(input >= 2 && input <= 100){
        makeGrid(input);
    } else {
        alert("Value must be between 2 and 100")
    }
}


let squareColor = function () {
    if (color === 'random') {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;


    } else {
        this.style.backgroundColor = color;
    }
}

let makeGrid = function (size) {
    const mainBox = document.querySelector(".mainBox");
    const squares = mainBox.querySelectorAll("div");
    squares.forEach((div) => div.remove());
    mainBox.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    mainBox.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let amount = size * size;
    
    for (let i = 0; i < amount; i++) {
        const square = document.createElement("div");
        square.addEventListener('mouseover', squareColor);
        square.classList.add("drawBox");
        mainBox.appendChild(square)
    }
};

let changeColor = function (choice) {
    color = choice;
}

let resetGrid = function () {
    const mainBox = document.querySelector(".mainBox");
    const squares = mainBox.querySelectorAll("div");
    squares.forEach((div) => div.style.backgroundColor = "white");
}








makeGrid (16);




// const drawBoxes = document.querySelectorAll(".drawBox")
// drawBoxes.forEach(div=> div.addEventListener('click', draw));








// let draw = function (e) {
//     e.target.style.backgroundColor = '#fefefe'


// }