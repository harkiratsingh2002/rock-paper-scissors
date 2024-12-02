let humanScore = 0;
let computerSore = 0;

function getComputerChoice() {
  let computerChoice = "";
  randInt = Math.floor(Math.random() * 3);
  if (randInt == 0) {
    computerChoice = "rock";
  } else if (randInt == 1) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  console.log(computerChoice);
}

getComputerChoice();

function getHumanChoice() {
  let userChoice = prompt("Enter your choice (rock, paper or scissors): ");
  console.log(userChoice);
}

getHumanChoice();
