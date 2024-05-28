const choices = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

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

    return "";
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

    if (computerChoice === "Rock") {
        document.getElementById("computer-rock").style.opacity = 1;
        document.getElementById("computer-paper").style.opacity = 0.5;
        document.getElementById("computer-scissors").style.opacity = 0.5;
    } else if (computerChoice === "Paper") {
        document.getElementById("computer-rock").style.opacity = 0.5;
        document.getElementById("computer-paper").style.opacity = 1;
        document.getElementById("computer-scissors").style.opacity = 0.5;
    } else if (computerChoice === "Scissors") {
        document.getElementById("computer-rock").style.opacity = 0.5;
        document.getElementById("computer-paper").style.opacity = 0.5;
        document.getElementById("computer-scissors").style.opacity = 1;
    }

    document.getElementById("result").style.visibility = "visible";
    document.getElementById("player-choice").innerText = "You choose " + playerChoice;
    document.getElementById("player-choice").style.visibility = "visible";
    document.getElementById("computer-choice").innerText = "Computer choose " + computerChoice;
    document.getElementById("computer-choice").style.visibility = "visible";
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

function play() {
    const computerChoice = getComputerChoice();
    const playerChoice = getPlayerChoice();
    playRound(computerChoice, playerChoice);
}

rock.addEventListener("click", play)
paper.addEventListener("click", play)
scissors.addEventListener("click", play)