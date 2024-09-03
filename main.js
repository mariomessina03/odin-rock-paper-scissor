function getComputerChoice() {
  const randomValue = Math.random();
  let cpuchoice;

  if (randomValue <= 0.33) {
    cpuchoice = "rock";
  } else if (randomValue <= 0.67) {
    cpuchoice = "paper";
  } else {
    cpuchoice = "scissors";
  }

  return cpuchoice;
}

function getHumanChoice() {
  let humanChoice;
  const validChoices = ["rock", "paper", "scissor"];

  do {
    humanChoice = prompt(
      "You must choose: rock, paper, scissor?"
    ).toLowerCase();
  } while (!validChoices.includes(humanChoice));

  return humanChoice;
}

let humanScore = 0;
let cpuScore = 0;

function playGame() {
  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log("It's a tie!");
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      console.log("You win! " + humanChoice + " beats " + computerChoice + ".");
    } else {
      cpuScore++;
      console.log(
        "You lose! " + computerChoice + " beats " + humanChoice + "."
      );
    }
  }

  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    if (i === 4) {
      if (humanScore > cpuScore) {
        console.log("YOU WON!" + " " + humanScore + "-" + cpuScore);
      } else if (humanScore < cpuScore) {
        console.log("YOU LOST..." + " " + humanScore + "-" + cpuScore);
      } else {
        console.log("YOU TIED." + " " + humanScore + "-" + cpuScore);
      }
    }
  }
}

playGame();
