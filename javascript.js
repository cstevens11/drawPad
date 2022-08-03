let color = "black";
let penStatus = false;
let colorMatchMode = false;

const sliderValue = document.querySelector(".sliderValue");



let changeSize = function (input) {
    if(input >= 2 && input <= 100){
        makeGrid(input);
    } else {
        alert("Value must be between 2 and 100")
    }
}


document.body.onmousedown = () => (penStatus = true)
document.body.onmouseup = () => (penStatus = false)



let makeGrid = function (size) {
    const mainBox = document.querySelector(".mainBox");
    const squares = mainBox.querySelectorAll("div");
    squares.forEach((div) => div.remove());
    mainBox.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    mainBox.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let amount = size * size;

   
    
    for (let i = 0; i < amount; i++) {
        const square = document.createElement("div");
        // square.addEventListener('mousedown', togglePenON);
        // square.addEventListener('mouseup', togglePenOFF);
        square.addEventListener('mouseover', squareColor);
        square.addEventListener('mousedown', squareColor);
        square.addEventListener('click', copyColor);

        square.classList.add("drawBox");
        mainBox.appendChild(square)
    }
};

let changeColor = function (choice) {
    color = choice;
    updateCurrentColor();
}

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

let resetGrid = function () {
    const mainBox = document.querySelector(".mainBox");
    const squares = mainBox.querySelectorAll("div");
    squares.forEach((div) => div.style.backgroundColor = "white");
}

let togglePenON = function (evt) {
    evt.preventDefault();
    penStatus = true;
    console.log (penStatus);
}

let togglePenOFF = function (evt) {
    evt.preventDefault();
    penStatus = false;
    console.log (penStatus);
}

let copyColorON = function () {
    colorMatchMode = true;
}

let copyColorOFF = function () {
    colorMatchMode = false;
}

// let cursorCheck = function () {
//     const cursorType = document.getElementsByTagName("body");
//     let currentCursor = cursorType.style.cursor;

//     console.log(currentCursor)

// }


let colorMatch = function () {
    // should change cursor to paint dropper and add event listener for the next click to take the 
    // background color of the event of click
    const cursor = document.querySelector(".cursor");
    cursor.style.cursor = "crosshair";
    copyColorON();

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


let squareColor = function (evt) {
    evt.preventDefault();
    if (colorMatchMode === true) return;
    if (evt.type === 'mouseover' && !penStatus) return;
    // if (penStatus === "on") {
    if (color === 'random') {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } 
        // else if (color === 'colorChoice') {
        //     color = document.getElementById('colorInputColor').value;
        //     this.style.backgroundColor = color;
        // }
    else {
        this.style.backgroundColor = color;
    }
    
}

let liveSliderValue = function (value) {
    sliderValue.textContent = `Grid Size: ${value} x ${value}`;
}






makeGrid (16);




// const drawBoxes = document.querySelectorAll(".drawBox")
// drawBoxes.forEach(div=> div.addEventListener('click', draw));








// let draw = function (e) {
//     e.target.style.backgroundColor = '#fefefe'


// }