let score1 = 0;
let score2 = 0;
let player1Turn = true;

const player1Dice = document.getElementById("player1Dice");
const player2Dice = document.getElementById("player2Dice");
const player1Scoreboard = document.getElementById("player1Scoreboard");
const player2Scoreboard = document.getElementById("player2Scoreboard");
const message = document.getElementById("message");
const rollBtn = document.getElementById("rollBtn");
const resetBtn = document.getElementById("resetBtn");

function showDisplayButton() {
  rollBtn.style.display = "none";
  resetBtn.style.display = "block";
}

function resetGame() {
  score1 = 0;
  score2 = 0;
  player1Turn = true;
  message.textContent = "Player 1 Turn";
  player1Scoreboard.textContent = 0;
  player2Scoreboard.textContent = 0;
  player1Dice.textContent = "-";
  player2Dice.textContent = "-";
  resetBtn.style.display = "none";
  rollBtn.style.display = "block";
  player2Dice.classList.remove("active");
  player1Dice.classList.add("active");
}

rollBtn.addEventListener("click", function () {
  const randomNumber = Math.floor(Math.random() * 6);

  if (player1Turn) {
    player1Dice.textContent = randomNumber;
    player1Dice.classList.remove("active");
    player2Dice.classList.add("active");
    message.textContent = "Player 2 Turn";
    score1 += randomNumber;
    player1Scoreboard.textContent = score1;
  } else {
    player2Dice.textContent = randomNumber;
    player2Dice.classList.remove("active");
    player1Dice.classList.add("active");
    message.textContent = "Player 1 Turn";
    score2 += randomNumber;
    player2Scoreboard.textContent = score2;
  }

  if (score1 >= 20) {
    message.textContent = "Player 1 has won! 🥳";
    showDisplayButton();
  } else if (score2 >= 20) {
    message.textContent = "Player 2 has won! 🥳";
    showDisplayButton();
  }
  player1Turn = !player1Turn;
});

resetBtn.addEventListener("click", function () {
  resetGame();
});
