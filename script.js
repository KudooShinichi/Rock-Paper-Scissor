const button = document.querySelectorAll("button");

const resultEl = document.getElementById("result");

let playeScore = 0;
let computerScore = 0;

const UserScoreEl = document.getElementById("user-score");
const ComputerScoreEl = document.getElementById("computer-score");
button.forEach((button) => {
  button.addEventListener("click", () => {
    const result = playRound(button.id, computerMove());
    resultEl.textContent = result;
  });
});

function computerMove() {
  const choices = ["rock", "paper", "scissor"];
  const randomChoices = Math.floor(Math.random() * choices.length);
  return choices[randomChoices];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a Tie!\n You Both have " + playerSelection;
  } else if (
    (playerSelection === "rock " && computerSelection === " scissor") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissor" && computerSelection === "paper")
  ) {
    playeScore++;
    UserScoreEl.textContent = playeScore;
    return "You Win! \n" + playerSelection + " beats " + computerSelection;
  } else {
    computerScore++;
    ComputerScoreEl.textContent = computerScore;
    return "You Lose! \n" + computerSelection + " beats " + playerSelection;
  }
}
