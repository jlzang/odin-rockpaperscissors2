let result = document.querySelector("#result");
result.textContent = "Good luck!";

let computerScore = 0;
let playerScore = 0;

let score = document.querySelector("#score");
score.textContent = "Computer: 0 points | Player: 0 points";

const btns = document.querySelector("#btns");
btns.addEventListener('click', (event) => {
    let playerSelection = event.target.value;
    let computerSelection = getComputerChoice();
    let roundResult = playRound(playerSelection, computerSelection);
    result.textContent = roundResult;
    if (roundResult === `The computer chose ${computerSelection}. ${capitalize(playerSelection)} beats ${computerSelection}. You win!`) {
        playerScore++;
    } else if (roundResult === `The computer chose ${computerSelection}. ${capitalize(computerSelection)} beats ${playerSelection}. You lose!`) {
        computerScore++;
    };
    score.textContent = `Computer: ${computerScore} points | Player: ${playerScore} points`;
});

function updateScore() {

}

function getComputerChoice() {
    const computerChoices = ["rock", "paper", "scissors"];
    let randomComputerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    return randomComputerChoice;
};

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

function playRound(playerSelection, computerSelection) {
    let tie = `The computer also chose ${computerSelection}. It's a tie!`;
    let win = `The computer chose ${computerSelection}. ${capitalize(playerSelection)} beats ${computerSelection}. You win!`;
    let lose = `The computer chose ${computerSelection}. ${capitalize(computerSelection)} beats ${playerSelection}. You lose!`;
    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            return tie;
        } else if (computerSelection === "paper") {
            return lose;
        } else if (computerSelection === "scissors") {
            return win;
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return win;
        } else if (computerSelection === "paper") {
            return tie;
        } else if (computerSelection === "scissors") {
            return lose;
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            return lose;
        } else if (computerSelection === "paper") {
            return win;
        } else if (computerSelection === "scissors") {
            return tie;
        }
    }
}



function game() {
    console.log(playRound(getPlayerChoice(), getComputerChoice()));
    console.log(playRound(getPlayerChoice(), getComputerChoice()));
    console.log(playRound(getPlayerChoice(), getComputerChoice()));
    console.log(playRound(getPlayerChoice(), getComputerChoice()));
    console.log(playRound(getPlayerChoice(), getComputerChoice()));
    if (roundWin > roundLose) {
        console.log("You won the best of 5! Woohoo!")
    } else if (roundWin < roundLose) {
        console.log("You lost the best of 5. Better luck next time!")
    } else if (roundWin == roundLose) {
        console.log("You got a tie in the best of 5! What are the odds?")
    }
}

/* Things to add in future:
Looping game() that continues until roundWin + roundLose + roundTie = 5
Disallow undefined as a valid answer. Currently undefined round still counts towards total 5 rounds*/