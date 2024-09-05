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

let humanScore = 0;
let cpuScore = 0;

const display = document.querySelector("#display");
let roundAnnouncement = document.createElement("p");
display.appendChild(roundAnnouncement);

let humanScoreUI = document.createElement("p");
let cpuScoreUI = document.createElement("p");
display.appendChild(humanScoreUI);
display.appendChild(cpuScoreUI);

humanScoreUI.textContent = `Your Score: ${humanScore}`;
cpuScoreUI.textContent = `CPU Score: ${cpuScore}`;

let finalWinner = document.createElement("p");
display.appendChild(finalWinner);

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    roundAnnouncement.textContent = "It's a tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    humanScoreUI.textContent = `Your Score: ${humanScore}`;
    roundAnnouncement.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
  } else {
    cpuScore++;
    cpuScoreUI.textContent = `CPU Score: ${cpuScore}`;
    roundAnnouncement.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
  }

  if (humanScore === 5 || cpuScore === 5) {
    if (humanScore > cpuScore) {
      finalWinner.textContent = `You won the game! Final score: ${humanScore} - ${cpuScore}`;
    } else {
      finalWinner.textContent = `You lost the game.. Final score: ${humanScore} - ${cpuScore}`;
    }

    humanScore = 0;
    cpuScore = 0;
    humanScoreUI.textContent = `Your Score: ${humanScore}`;
    cpuScoreUI.textContent = `CPU Score: ${cpuScore}`;
  }
}

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");

rock.addEventListener("click", () => {
  humanSelection = "rock";
  computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
});
paper.addEventListener("click", () => {
  humanSelection = "paper";
  computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
});
scissor.addEventListener("click", () => {
  humanSelection = "scissor";
  computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
});
