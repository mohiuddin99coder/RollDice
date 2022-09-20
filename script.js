//Selecting Elements
const score1 = document.getElementById("score-0");
const score2 = document.getElementById("score-1");
const currentScore1 = document.getElementById("current-0");
const currentScore2 = document.getElementById("current-1");
const player1 = document.querySelector(".player-0");
const player2 = document.querySelector(".player-1");
const overlay = document.querySelector(".overlay");

const dice = document.querySelector(".dice");
const roll = document.querySelector(".btn-roll");
const hold = document.querySelector(".btn-hold");
const restart = document.querySelector(".btn-new");
const again = document.querySelector(".btn-again");
const winner = document.querySelector(".winner");
const btnClose = document.querySelector(".btn-close");

const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current-${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player1.classList.toggle("player-active");
  player2.classList.toggle("player-active");
};

const reset = function () {
  currentScore = 0;
  currentScore1.textContent = 0;
  currentScore2.textContent = 0;
  score1.textContent = 0;
  score2.textContent = 0;
  scores = [0, 0];
  activePlayer = 0;
  playing = true;
  player1.classList.add("player-active");
  player2.classList.remove("player-active");
  winner.classList.add("hidden");
  dice.classList.add("hidden");
  overlay.classList.add("hidden");
};

//Starting Conditions
let scores = [0, 0];
let player1Score = 0;
let player2Score = 0;
let currentScore = 0;
let activePlayer = 0;
let playing = true;
dice.classList.add("hidden");
winner.classList.add("hidden");
overlay.classList.add("hidden");

//Rolling of Dice
roll.addEventListener("click", function () {
  if (playing) {
    //Generating a random dice roll
    const diceRoll = Math.trunc(Math.random() * 6) + 1;
    dice.classList.remove("hidden");
    dice.src = `dice-${diceRoll}.jpg`;

    //Check for rolled-1
    if (diceRoll !== 1) {
      currentScore += diceRoll;
      document.getElementById(`current-${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});

hold.addEventListener("click", function () {
  if (playing) {
    //   if (activePlayer === 1) {
    //     player1Score += currentScore;
    //     score1.textContent = player1Score;
    //     player1.classList.toggle("player-active");
    //     player2.classList.toggle("player-active");
    //     document.getElementById(`current-0`).textContent = 0;
    //     currentScore = 0;
    //     activePlayer = 2;
    //   } else {
    //     player2Score += currentScore;
    //     score2.textContent = player2Score;
    //     player1.classList.toggle("player-active");
    //     player2.classList.toggle("player-active");
    //     document.getElementById(`current-1`).textContent = 0;
    //     currentScore = 0;
    //     activePlayer = 1;
    //   }
    scores[activePlayer] += currentScore;
    document.querySelector(`#score-${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      playing = false;
      winner.classList.remove("hidden");
      overlay.classList.remove("hidden");
      dice.classList.add("hidden");
      document.querySelector(".player-winner").textContent = `Player - ${
        activePlayer + 1
      } Win.`;
    } else {
      switchPlayer();
    }
  }
});

btnClose.addEventListener("click", function () {
  winner.classList.add("hidden");
  overlay.classList.add("hidden");
});

restart.addEventListener("click", reset);
again.addEventListener("click", reset);
