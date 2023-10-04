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
