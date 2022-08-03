let color = "black";
let penStatus = "off";

const sliderValue = document.querySelector(".sliderValue");



let changeSize = function (input) {
    if(input >= 2 && input <= 100){
        makeGrid(input);
    } else {
        alert("Value must be between 2 and 100")
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
        square.addEventListener('mousedown', togglePenON);
        square.addEventListener('mouseup', togglePenOFF);
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

let togglePenON = function () {
    penStatus = "on"
    console.log (penStatus)
}

let togglePenOFF = function () {
    penStatus = "off"
    console.log (penStatus)
}



let squareColor = function () {
    if (penStatus === "on") {
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
    }  else {
        return;
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