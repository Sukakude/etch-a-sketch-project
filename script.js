const container = document.querySelector(".container");
const maxColumns = 16;
const maxRows = 16;

for(let col = 0; col < maxColumns; col++){
    for(let row = 0; row < maxRows; row++){
        const div = document.createElement("div");
        div.classList.add('box');
        container.appendChild(div)
    }
}