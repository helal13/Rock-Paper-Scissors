// -- Variables

const buttons = Array.from(document.querySelectorAll("button"));
const choices = ["rock", "paper", "scissors"];
const container = document.querySelector("#container");
let computerSelection;
let computerScore = 0;
let userScore = 0;

// -- Helper Functions

function getUserSelection(e) {
  userSelection = e.target.value;
}
for (const button of buttons) {
  button.addEventListener("click", getUserSelection);
  button.addEventListener("click", playRound);
}

// -- Game Logic

function playRound(computerSelection, getUserSelection) {
  computerSelection = choices[Math.floor(Math.random() * choices.length)];
  if (userScore === 5 || computerScore === 5) return;
  if (computerSelection == userSelection) {
    computerScore = computerScore;
    userScore = userScore;
    const resultDiv = document.createElement("div");
    const score = document.createElement("h2");
    const message = document.createElement("h3");
    score.textContent = `User score: ${userScore}    Machine score: ${computerScore}`;
    message.textContent = "This is a Tie";
    resultDiv.appendChild(score);
    resultDiv.appendChild(message);
    container.appendChild(resultDiv);
  } else if (
    (computerSelection == "rock" && userSelection == "scissors") ||
    (computerSelection == "paper" && userSelection == "rock") ||
    (computerSelection == "scissors" && userSelection == "paper")
  ) {
    computerScore++;
    const resultDiv = document.createElement("div");
    const score = document.createElement("h2");
    const message = document.createElement("h3");
    score.textContent = `User score: ${userScore}    Machine score: ${computerScore}`;
    message.textContent = `The machine chose ${computerSelection}, you lose!`;
    resultDiv.appendChild(score);
    resultDiv.appendChild(message);
    container.appendChild(resultDiv);
  } else {
    userScore++;
    const resultDiv = document.createElement("div");
    const score = document.createElement("h2");
    const message = document.createElement("h3");
    score.textContent = `User score: ${userScore}    Machine score: ${computerScore}`;
    message.textContent = `You win, the machine chose ${computerSelection}`;
    resultDiv.appendChild(score);
    resultDiv.appendChild(message);
    container.appendChild(resultDiv);
  }
}
