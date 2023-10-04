const gameOptions = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  let computerChoice = gameOptions[Math.floor(Math.random() * gameOptions.length)];
  return computerChoice;
}

function getPlayerChoice() {
  let playerChoice = prompt("What would you like to play? ('rock', 'paper', 'scissors')").trim().toLowerCase();
  if (playerChoice === "rock") {
    return "Rock";
  } else if (playerChoice === "paper") {
    return "Paper";
  } else if (playerChoice === "scissors") {
    return "Scissors";
  } else {
    alert("That's not a valid input!");
    return getPlayerChoice();
  }
}

function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    alert(`Both you and the computer played '${playerChoice}'. Round is a tie!`)
  } else if ((playerChoice === "Rock" && computerChoice === "Scissors") || (playerChoice === "Paper" && computerChoice === "Rock") || (playerChoice === "Scissors" && computerChoice === "Paper")) {
    alert(`You played '${playerChoice}' and the computer played '${computerChoice}'. You win this round!`)
  } else {
    alert(`You played '${playerChoice}' and the computer played '${computerChoice}'. You lose this round...`)
  }
}

