const x_Class = "x";
const circle_Class = "circle";
const winning_Combinations = [
    //horizontal combinations

    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    //vertical combinations

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    //diagonal combinations

    [0, 4, 8],
    [2, 4, 6]
]
const cellElements = document.querySelectorAll('[data-cell]')
const board = document.getElementById('board')
const winningMessageElement = document.getElementById('winningMessage')
const winningMessageTextElement = document.querySelector('[data-winning-message-text')
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
    if(checkWin(currentClass)) {
        endGame(false)
    }
    //Check for win
    //Check for draw
    //Switch turns
    switchTurns()
    setBoardHoverClass()
}

function endGame(draw) {
    if(draw) {

    } else {
        winningMessageTextElement.innerText = `${circleTurn ? "O's" : "X's"} Wins!`
    }
    winningMessageTextElement.classList.add("show")
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

function checkWin(currentClass) {
    return winning_Combinations.some(combinations => {
        return combinations.every(index => {
            return cellElements[index].classList.contains(currentClass)
        })
    })
}