function getComputerChoice() {
    const computerChoices = ["rock", "paper", "scissors"];
    let randomComputerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    alert(randomComputerChoice);
}

let computerSelection = getComputerChoice();