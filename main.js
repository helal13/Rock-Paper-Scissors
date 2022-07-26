// Variables
let userSelection;
let computerSelection;
let computerScore = 0;
let userScore = 0;
const choices = ["Rock", "Paper", "Scissors"];

// Game Logic
function playRound(computerSelection, userSelection) {
  userSelection = prompt("Write Rock, Paper, or Scissors");
  computerSelection = choices[Math.floor(Math.random() * choices.length)];
  computerSelection = computerSelection.toLowerCase();
  userSelection = userSelection.toLowerCase();
  if (computerSelection == userSelection) {
    computerScore = computerScore;
    userScore = userScore;
    console.log(`User score: ${userScore}    Machine score: ${computerScore}`);
    return "This is a Tie";
  } else if (
    (computerSelection == "rock" && userSelection == "scissors") ||
    (computerSelection == "paper" && userSelection == "rock") ||
    (computerSelection == "scissors" && userSelection == "paper")
  ) {
    computerScore++;
    console.log(`User score: ${userScore}    Machine score: ${computerScore}`);
    return `The machine chose ${computerSelection}, you lose!`;
  } else {
    userScore++;
    console.log(`User score: ${userScore}    Machine score: ${computerScore}`);
    return `You win, the machine chose ${computerSelection}`;
  }
}
for (let i = 0; i < 5; i++) {
  console.log(playRound(computerSelection, userSelection));
}
