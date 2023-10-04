const ComputerChoosed = document.getElementById('computer-choosed')
const YouChoosed = document.getElementById('you-choosed')
const ResultDisplay = document.getElementById('result')
const PossibleResult = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

PossibleResult.forEach(possibleResult => possibleResult.addEventListener('click', (e) => { 
    userChoice = e.target.id 
    YouChoosed.innerHTML = userChoice
    generateComputerChoosed()
    getResult()
}))

function generateComputerChoosed () {
    const randomNumber = Math.floor(Math.random() * 3) + 1

    if (randomNumber === 1) {
        computerChoice = 'Scissors'
    }

    if (randomNumber === 2) {
        computerChoice = 'Rock'
    }

    if (randomNumber === 3) {
        computerChoice = 'Paper'
    }
    ComputerChoosed.innerHTML = computerChoice
}

function getResult() {
    
    if (computerChoice === userChoice) {
        result = 'Draw'
    }
    if (computerChoice === 'Rock' && userChoice === "Paper") {
        result = 'Yahoo! You Won!'
    }
    if (computerChoice === 'Paper' && userChoice === "Scissors") {
        result = 'Yahoo! You Won!'
    }
    if (computerChoice === 'Scissors' && userChoice === "Paper") {
        result = 'You Lost! Try Again!'
    }
    if (computerChoice === 'Rock' && userChoice === "Scissors") {
        result = 'You Lost! Try Again!'
    }
    if (computerChoice === 'Paper' && userChoice === "Rock") {
        result = 'You Lost! Try Again!'
    }
    if (computerChoice === 'Scissors' && userChoice === "Rock") {
        result = 'Yahoo! You Won!'
    }
    ResultDisplay.innerHTML = result
}