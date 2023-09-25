function getComputerChoice() {
    const computerChoices = ["rock", "paper", "scissors"];
    let randomComputerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    return randomComputerChoice;
}

let computerSelection = getComputerChoice;
console.log(computerSelection());
console.log(computerSelection());
console.log(computerSelection());
console.log(computerSelection());
console.log(computerSelection());

function getPlayerChoice() {
    let playerChoice = prompt("Rock, paper, or scissors?").toLowerCase();
    if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") {
        return playerChoice
    } else {
        alert("Invalid input, please try again!");
    }
}

let playerSelection = getPlayerChoice;

function playRound(playerSelection, computerSelection) {
    getPlayerChoice();
    getComputerChoice();
    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            console.log("Rock and rock. It's a tie!")
        } else if (computerSelection === "paper") {
            console.log("Paper beats rock! get rekt");
            ++roundLose;
        } else if (computerSelection === "scissors") {
            console.log("Rock beats scissors! One point for you.");
            ++roundWin;
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            console.log("Paper beats rock! Yey.");
            ++roundWin;
        } else if (computerSelection === "paper") {
            console.log("Paper and paper. It's a tie!")
        } else if (computerSelection === "scissors") {
            console.log("Scissors beats paper. Oof.");
            ++roundLose;
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            console.log("Rock beats scissors! What a tragedy.");
            ++roundLose;
        } else if (computerSelection === "paper") {
            console.log("Scissors beats paper! Good job.");
            ++roundWin;
        } else if (computerSelection === "scissors") {
            console.log("Scissors and scissors. It's a tie!")
        }
    }
}
 
/*function game() {
    roundWin = 0;
    roundLose = 0;
    playRound(playerSelection, computerSelection);
    playRound(playerSelection, computerSelection);
    playRound(playerSelection, computerSelection);
    playRound(playerSelection, computerSelection);
    playRound(playerSelection, computerSelection);
    if (roundWin > roundLose) {
        console.log("You won the best of 5! Woohoo!")
    } else if (roundWin < roundLose) {
        console.log("You lost the best of 5. Better luck next time!")
    } else if (roundWin == roundLose) {
        console.log("You got a tie in the best of 5! What are the odds?")
    }
}

game(); */