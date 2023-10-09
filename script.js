const gameOptions = ["Rock", "Paper", "Scissors"];

let round = 1;
let playerScore = 0;
let computerScore = 0;

const playerScoreSpan = document.querySelector('.player-score');
const computerScoreSpan = document.querySelector('.computer-score');
const roundCounter = document.querySelector('.round-counter');
const statusUpdate = document.querySelector('.status-update');
const endResult = document.querySelector('.end-result');
const buttonContainer = document.querySelector('.button-container');

buttonContainer.addEventListener('click', playRound);

// Play one round of rock-paper-scissors. Return result of the round.
function playRound(e) {
  let computerChoice = getComputerChoice();

  if (e.target.textContent === computerChoice) {
    statusUpdate.textContent = `Both you and the computer played '${e.target.textContent}'. Round is a tie!`;
  } else if ((e.target.textContent === "Rock" && computerChoice === "Scissors") || (e.target.textContent === "Paper" && computerChoice === "Rock") || (e.target.textContent === "Scissors" && computerChoice === "Paper")) {
    statusUpdate.textContent = `You played '${e.target.textContent}' and the computer played '${computerChoice}'. You win this round!`;
    playerScore += 1;
    playerScoreSpan.textContent = playerScore;
  } else {
    statusUpdate.textContent = `You played '${e.target.textContent}' and the computer played '${computerChoice}'. You lose this round...`;
    computerScore += 1;
    computerScoreSpan.textContent = computerScore;
  }

  if (playerScore === 5) {
    buttonContainer.removeEventListener('click', playRound);
    endResult.textContent = "Wooo you WON!";
    return;
  } else if (computerScore === 5) {
    buttonContainer.removeEventListener('click', playRound);
    endResult.textContent = "Sorry, you LOST!";
    return;
  }

  round += 1;
  roundCounter.textContent = round;
}

// function to call a randomizer to select one of the gameOptions
function getComputerChoice() {
  let computerChoice = gameOptions[Math.floor(Math.random() * gameOptions.length)];
  return computerChoice;
}