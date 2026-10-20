const container = document.querySelector(".container");
const body = document.querySelector("body");
const btn = document.createElement("button");
const maxNumberOfSquaresPerSide = 100;
let numberOfSquaresPerSide;

function randomNumberGenerator(){
    return Math.floor(Math.random() * 255)
}

function generateRGBValues(){
    let hexValues = [];
    for(let i = 0; i < 3; i++){
        hexValues.push(randomNumberGenerator());
    }
    return hexValues;
}

function generateGrid(numOfSquares){
    for(let col = 0; col < numOfSquares; col++){
        for(let row = 0; row < numOfSquares; row++){
            const div = document.createElement("div");
            div.classList.add("box");
            div.addEventListener('mouseenter', (e) => {
                let hexValues = generateRGBValues();
                div.style.backgroundColor = `rgb(${hexValues[0]},${hexValues[1]},${hexValues[2]})`;
            });

            div.addEventListener('mouseleave', (e) => {
                div.style.backgroundColor = "black";
            });
            container.appendChild(div)
        }
    }
}

btn.textContent = "Click to enter number of squares";
btn.setAttribute('style', 'margin: 20px; cursor: pointer; padding: 20px 10px; border-radius: 15px; background-color: black; color: white;');
body.prepend(btn);

btn.addEventListener("click", (e) => {
    numberOfSquaresPerSide = prompt("Enter number of squares per side: ");
    container.textContent = '';
    numberOfSquaresPerSide > maxNumberOfSquaresPerSide ? generateGrid(maxNumberOfSquaresPerSide) : generateGrid(numberOfSquaresPerSide);
});