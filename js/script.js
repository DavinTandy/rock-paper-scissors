const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    return computerChoice;
}
