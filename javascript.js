function getComputerChoice() {
    const computerChoices = ["rock", "paper", "scissors"];
    let randomComputerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    return randomComputerChoice;
}

function getPlayerChoice() {
    let playerChoice = prompt("Rock, paper, or scissors?");
    if (typeof playerChoice === "string") {
        let lowerPlayerChoice = playerChoice.toLowerCase();
        if (lowerPlayerChoice === "rock" || lowerPlayerChoice === "paper" || lowerPlayerChoice === "scissors") {
        return lowerPlayerChoice;
        } else {
            alert("Invalid input, please try again!");
        }
    } else {
        playerChoice = ""
        alert("Invalid input, please try again!");
    }
}


let roundWin = 0;
let roundLose = 0;
let roundTie = 0;


function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            console.log("Rock and rock. It's a tie!");
            return roundTie += 1;
        } else if (computerSelection === "paper") {
            console.log("Paper beats rock! get rekt");
            return roundLose += 1;
        } else if (computerSelection === "scissors") {
            console.log("Rock beats scissors! One point for you.");
            return roundWin += 1;
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            console.log("Paper beats rock! Yey.");
            return roundWin += 1;
        } else if (computerSelection === "paper") {
            console.log("Paper and paper. It's a tie!");
            return roundTie += 1;
        } else if (computerSelection === "scissors") {
            console.log("Scissors beats paper. Oof.");
            return roundLose += 1;
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            console.log("Rock beats scissors! What a tragedy.");
            return roundLose += 1;
        } else if (computerSelection === "paper") {
            console.log("Scissors beats paper! Good job.");
            return roundWin += 1;
        } else if (computerSelection === "scissors") {
            console.log("Scissors and scissors. It's a tie!");
            return roundTie += 1;
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

game();

let playerSelection = getPlayerChoice;
let computerSelection = getComputerChoice();