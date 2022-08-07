let color = "black";

let penStatus = false;
document.body.onmousedown = () => (penStatus = true)
document.body.onmouseup = () => (penStatus = false)

let colorMatchMode = false;
let copyColorON = function () {
    colorMatchMode = true;
}
let copyColorOFF = function () {
    colorMatchMode = false;
}

// SETTINGS COLLUMN FUNCTIONS
// COLORTRACKER FUNCTIONS
let updateCurrentColor = function () {
    const currentColor = document.querySelector(".currentPenColor");
    if (color === "random") {
        currentColor.textContent = "Random"
        currentColor.style.background = "linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red)";
    } else {
        currentColor.textContent = "";
        currentColor.style.background = color;

    }

}

// SLIDECONTAINER FUNCTIONS
let changeSize = function (input) {
    if(input >= 2 && input <= 100){
        makeGrid(input);
    } else {
        alert("Value must be between 2 and 100")
    }
}

let liveSliderValue = function (value) {
    const sliderValue = document.querySelector(".sliderValue");
    sliderValue.textContent = `Grid Size: ${value} x ${value}`;
}

// CUSTOMCOLOR and CONTENTBUTTONS FUNCTIONS
let changeColor = function (choice) {
    color = choice;
    updateCurrentColor(choice);
}

let colorMatch = function () {
    const cursor = document.querySelector(".cursor");
    cursor.style.cursor = "crosshair";
    copyColorON();
}

let resetGrid = function () {
    const drawPad = document.querySelector(".drawPad");
    const squares = drawPad.querySelectorAll("div");
    squares.forEach((div) => div.style.backgroundColor = "whitesmoke");
}

// DRAWPAD FUNCTIONS
let makeGrid = function (size) {
    let amount = size * size;
    const drawPad = document.querySelector(".drawPad");
    const squares = drawPad.querySelectorAll("div");
    squares.forEach((div) => div.remove());
    drawPad.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    drawPad.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < amount; i++) {
        const square = document.createElement("div");
        square.addEventListener('mouseover', squareColor);
        square.addEventListener('mousedown', squareColor);
        square.addEventListener('click', copyColor);
        square.classList.add("drawBox");
        square.style.backgroundColor = "whitesmoke";
        drawPad.appendChild(square);
    }
};

let squareColor = function (evt) {
    evt.preventDefault();
    if (colorMatchMode === true) return;
    if (evt.type === 'mouseover' && !penStatus) return;
    if (color === 'random') {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
        this.style.backgroundColor = color;
    }
}

let copyColor = function (evt) {
    evt.preventDefault();
    if (colorMatchMode === true) {
        changeColor(this.style.backgroundColor);
        copyColorOFF();
        const cursor = document.querySelector(".cursor");
        cursor.style.cursor = "default";
    }
}

makeGrid (16);