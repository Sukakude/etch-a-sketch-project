const container = document.querySelector(".container");
const body = document.querySelector("body");
const btn = document.createElement("button");
let numberOfSquaresPerSide;

function generateGrid(numOfSquares){
    for(let col = 0; col < numOfSquares; col++){
        for(let row = 0; row < numOfSquares; row++){
            const div = document.createElement("div");
            div.classList.add("box");
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
    generateGrid(numberOfSquaresPerSide);
});