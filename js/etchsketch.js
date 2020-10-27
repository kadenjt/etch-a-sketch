const grid = document.getElementById("grid");
const root = document.documentElement;
let content = [];

createBoxes(10);

function emptyGrid() {
    grid.innerHTML = '';
    content = [];
}

function createBoxes(rows) {
    rows = Math.floor(rows);
    if (0 >= rows) rows = 1;
    if (50 <= rows) rows = 50;
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
        grid.appendChild(content[i]);
    }
}

function changeColor (e) {
    let background = e.target.style;
    background.opacity = background.opacity-0.2;
}