const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    return computerChoice;
}

function getPlayerChoice() {
    const playerChoices = document.getElementsByName('choice');

    for (i = 0; i < playerChoices.length; i++) {
        if (playerChoices[i].checked) {
            const playerChoice = playerChoices[i].value;
            return playerChoice;
        }
    }
}

function playRound(computerChoice, playerChoice) {
    if (computerChoice === "Rock" && playerChoice === "Paper" || computerChoice === "Paper" && playerChoice === "Scissors" || computerChoice === "Scissors" && playerChoice === "Rock") {
        document.getElementById("result").innerText = "You win";
    } else if (computerChoice === "Rock" && playerChoice === "Scissors" || computerChoice === "Paper" && playerChoice === "Rock" || computerChoice === "Scissors" && playerChoice === "Paper") {
        document.getElementById("result").innerText = "Computer win";
    } else {
        document.getElementById("result").innerText = "Draw";
    }
}