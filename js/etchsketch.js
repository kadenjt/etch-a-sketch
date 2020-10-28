const grid = document.getElementById("grid");
const root = document.documentElement;
let content = [];
let color = "black";

createBoxes(10);

function emptyGrid() {
    grid.innerHTML = '';
    content = [];
}

function createBoxes(rows) {
    rows = Math.floor(rows);
    if (0 >= rows) rows = 1;
    if (75 <= rows) rows = 75;
    if (isNaN(rows)) rows = 10;
    document.getElementById("gridSize").value = rows;
    emptyGrid();
    root.style.setProperty('--size', rows);
    for(let i = 0; i< rows*rows; i++) {
        content[i] = document.createElement('div');
        content[i].classList.add('cell');
        content[i].id = i;
        content[i].onmouseover = changeColor;
        content[i].style.opacity=1;
        content[i].style.backgroundColor="white";
        grid.appendChild(content[i]);
    }
}

function changeColor (e) {
    let background = e.target.style;
    if (color == 'rainbow') {
        background.backgroundColor = "#"+((1<<24)*Math.random()|0).toString(16);
        return
    }
    if (color == 'shade') {
        background.opacity = background.opacity-0.2;
        return;
    }
    if (color == "white") {
        background.backgroundColor = "white";
        background.opacity = 1;
    }
    background.backgroundColor = color;
}

function setColor (colorPick) {
    color = colorPick;
    console.log(color)
}