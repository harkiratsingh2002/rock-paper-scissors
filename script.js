let humanScore = 0;
let computerSore = 0;

function getComputerChoice() {
  let computerChoice = "";
  randInt = Math.floor(Math.random() * 3);
  if (randInt == 0) {
    return "rock";
  } else if (randInt == 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

// getComputerChoice();

function getHumanChoice() {
  return prompt("Enter your choice (rock, paper or scissors): ");
}

// getHumanChoice();

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  if ((humanChoice == "rock") & (computerChoice == "scissors")) {
    console.log("You win! Rock beats scissors");
    humanScore += 1;
  } else if ((humanChoice == "rock") & (computerChoice == "paper")) {
    console.log("You loose! Paper beats Rock");
    computerSore += 1;
  } else if ((humanChoice == "paper") & (computerChoice == "rock")) {
    console.log("You win! Paper beats Rock");
    humanScore += 1;
  } else if ((humanChoice == "paper") & (computerChoice == "scissors")) {
    console.log("You loose! Scissors beats paper");
    computerSore += 1;
  } else if ((humanChoice == "scissors") & (computerChoice == "paper")) {
    console.log("You win! Scissors beats Rock");
    humanScore += 1;
  } else if ((humanChoice == "scissors") & (computerChoice == "rock")) {
    console.log("You loose! Rock beats Scissors");
    computerSore += 1;
  } else {
    console.log("Its a draw!");
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
