const gameOptions = ["Rock", "Paper", "Scissors"];

// call a randomizer to select one of the gameOptions
function getComputerChoice() {
  let computerChoice = gameOptions[Math.floor(Math.random() * gameOptions.length)];
  return computerChoice;
}

// prompt the user for a selection and verify the prompt. Return one of the gameOptions
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



const buttonContainer = document.querySelector('.button-container');
buttonContainer.addEventListener('click', playRound)

// Play one round of rock-paper-scissors. Return result of the round.
function playRound(e) {
  let computerChoice = getComputerChoice();
  if (e.target.textContent === computerChoice) {
    alert(`Both you and the computer played '${e.target.textContent}'. Round is a tie!`);
    return "Tie";
  } else if ((e.target.textContent === "Rock" && computerChoice === "Scissors") || (e.target.textContent === "Paper" && computerChoice === "Rock") || (e.target.textContent === "Scissors" && computerChoice === "Paper")) {
    alert(`You played '${e.target.textContent}' and the computer played '${computerChoice}'. You win this round!`);
    return "Player Win";
  } else {
    alert(`You played '${e.target.textContent}' and the computer played '${computerChoice}'. You lose this round...`);
    return "Computer Win";
  }
}

// use all pre-defined functions to play 5 rounds of rock-paper-scissors with a winner announcement
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

// call the game function
// game();
