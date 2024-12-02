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

// playRound(humanSelection, computerSelection);

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice == "rock" && computerChoice == "scissors") {
      console.log("You win! Rock beats scissors");
      return 1;
    } else if (humanChoice == "rock" && computerChoice == "paper") {
      console.log("You loose! Paper beats Rock");
      return -1;
    } else if (humanChoice == "paper" && computerChoice == "rock") {
      console.log("You win! Paper beats Rock");
      return 1;
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
      console.log("You loose! Scissors beats paper");
      return -1;
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
      console.log("You win! Scissors beats Rock");
      return 1;
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
      console.log("You loose! Rock beats Scissors");
      return -1;
    } else {
      console.log("Its a draw!");
      return 0;
    }
  }
  for (let i = 1; i <= 5; i++) {
    console.log(`Round ${i}:`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    const result = playRound(humanSelection, computerSelection);

    if (result == 1) {
      humanScore += 1; // Human wins
    } else if (result == -1) {
      computerScore += 1; // Computer wins
    }

    console.log(
      `Current Score -> Human: ${humanScore}, Computer: ${computerScore}`
    );
  }

  // Final result
  if (humanScore > computerScore) {
    console.log("Congratulations! You win the game!");
  } else if (humanScore < computerScore) {
    console.log("Sorry! You lost the game.");
  } else {
    console.log("The game is a tie!");
  }
}

playGame();
