const choices = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;

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
        playerScore += 1;
    } else if (computerChoice === "Rock" && playerChoice === "Scissors" || computerChoice === "Paper" && playerChoice === "Rock" || computerChoice === "Scissors" && playerChoice === "Paper") {
        document.getElementById("result").innerText = "Computer win";
        computerScore += 1;
    } else {
        document.getElementById("result").innerText = "Draw";
    }

    document.getElementById("player-score").innerText = "Player Score: " + playerScore;
    document.getElementById("computer-score").innerText = "Computer Score: " + computerScore;
    
    if (playerScore >= 5 || computerScore >= 5) {
        document.getElementById("result").innerText += ". Game over. Game resetting..."
        gameReset();
    }
}

function gameReset() {
    playerScore = 0;
    computerScore = 0;
}