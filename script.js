const container = document.querySelector(".container");
const body = document.querySelector("body");
const btn = document.createElement("button");
const maxColumns = 16;
const maxRows = 16;

for(let col = 0; col < maxColumns; col++){
    for(let row = 0; row < maxRows; row++){
        const div = document.createElement("div");
        div.classList.add("box");
        container.appendChild(div)
    }
}

btn.textContent = "Click to enter number of squares";
btn.setAttribute('style', 'margin: 20px; cursor: pointer; padding: 20px 10px; border-radius: 15px; background-color: black; color: white;');
body.prepend(btn);