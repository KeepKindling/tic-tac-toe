const x_Class = "x";
const circle_Class = "circle";
const cellElements = document.querySelectorAll('[data-cell]')
const board = document.getElementById('board')
let circleTurn

startGame()

function startGame() {
    circleTurn = false
    cellElements.forEach(cell => {
        cell.addEventListener('click', handleClick, { once: true})
    })
    setBoardHoverClass()
}

function handleClick(e) {
    //place Mark
    const cell = e.target
    const currentClass = circleTurn ? circle_Class : x_Class;
    placeMark(cell, currentClass)
    //Check for win
    //Check for draw
    //Switch turns
    switchTurns()
    setBoardHoverClass()
}

function placeMark(cell, currentClass) {
    cell.classList.add(currentClass)
}

function switchTurns() {
    circleTurn = !circleTurn
}

function setBoardHoverClass() {
    board.classList.remove(x_Class)
    board.classList.remove(circle_Class)
    if (circleTurn) {
    board.classList.add(circle_Class)
    } else {
        board.classList.add(x_Class)
    }
}