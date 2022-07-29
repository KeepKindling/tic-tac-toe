const x_Class = "x";
const circle_Class = "circle";
const cellElements = document.querySelectorAll('[data-cell]')
let circleTurn
cellElements.forEach(cell => {
    cell.addEventListener('click', handleClick, { once: true})
})

function handleClick(e) {
    //place Mark
    const cell = e.target
    const currentClass = circleTurn ? circle_Class : x_Class;
    placeMark(cell, currentClass)
    //Check for win
    //Check for draw
    //Switch turns
}

function placeMark(cell, currentClass) {
    cell.classList.add(currentClass)
}