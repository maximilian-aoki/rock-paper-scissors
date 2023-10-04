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
    alert(`Both you and the computer played '${playerChoice}'. Round is a tie!`);
    return "Tie";
  } else if ((playerChoice === "Rock" && computerChoice === "Scissors") || (playerChoice === "Paper" && computerChoice === "Rock") || (playerChoice === "Scissors" && computerChoice === "Paper")) {
    alert(`You played '${playerChoice}' and the computer played '${computerChoice}'. You win this round!`);
    return "Player Win";
  } else {
    alert(`You played '${playerChoice}' and the computer played '${computerChoice}'. You lose this round...`);
    return "Computer Win";
  }
}

function game() {
  alert("Welcome to 'Rock, Paper, Scissors'! Gameplay will last 5 rounds.")

  let playerScore = 0;
  let computerScore = 0;

  for (let i = 1; i <= 5; i++) {
    alert(`Round ${i}       (Player: ${playerScore} || Computer: ${computerScore})`);

    let roundResult = playRound(getPlayerChoice(), getComputerChoice());
    if (roundResult === "Player Win") {
      playerScore += 1;
    } else if (roundResult === "Computer Win") {
      computerScore += 1;
    }
  }

  if (playerScore > computerScore) {
    alert(`Congratulations! You won ${playerScore} - ${computerScore}`);
  } else if (computerScore > playerScore) {
    alert(`Nice Try! You lost ${playerScore} - ${computerScore}`);
  } else {
    alert(`Wow! You tied ${playerScore} - ${computerScore}`)
  }

}

game();
