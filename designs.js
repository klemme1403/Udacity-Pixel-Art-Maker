function makeGrid(gridHeight, gridWidth) {
    // storing table canvas
    const canvas = document.getElementById("pixelCanvas");
    // set a cleared grid for start
    let grid = '';

    // loop to insert the rows in the grid
    for (let i = 0; i < gridHeight; i++) {
        grid += '<tr class="row-' + i + '">';
        // loop to insert the cells in the grid
        for (let j = 0; j < gridWidth; j++) {
            grid += '<td class="cell" id="row-' + i + '_cell-' + j + '"></td>';
        }
        grid += '</tr>';
    }
    // add grid into canvas element
    canvas.innerHTML = grid;

    // Add click event to grid cells when the canvas grid has been created
    addClickedEventToCells();
}

// Grid gets values for height and width from the form & uses them to call makeGrid()
function formSubmit() {
    // if the event does not get explicitly handled, its default action should not be taken as it normally would be
    event.preventDefault();
    // storing grid height value
    const gridHeight = document.getElementById('inputHeight').value;
    // storing grid width value
    const gridWidth = document.getElementById('inputWidth').value;
    // call the makeGrid() function
    makeGrid(gridHeight,gridWidth);
}

// add click events to the cells
function addClickedEventToCells() {
    // storing pickedColor
    const pickedColor = document.getElementById("colorPicker");
    // storing cell
    const cells = document.getElementsByClassName('cell');
    // looping over each cell
    for (let i = 0; i < cells.length; i++) {
        // add click event to the cells
        cells[i].addEventListener("click", function (event) {
            let clickedCell = event.target;
            // when the cell is clicked, the background color changes to the selected color
            clickedCell.style.backgroundColor = pickedColor.value;
        });
    }
}

// onsubmit of form sizePicker
document.getElementById('sizePicker').onsubmit = function () {
    formSubmit();
};
