let roundsPlayed = 0;
let game = {
  player1: {
    totalScore: 0,
    dice: [1, 1],
  },
  player2: {
    totalScore: 0,
    dice: [1, 1],
  },
};

function rollDice() {
  let rollButton = document.getElementById("rollDice");

  // Add the animation class to the button
  rollButton.classList.add("animate");

  if (roundsPlayed < 3) {
    game.player1.dice = [
      Math.ceil(Math.random() * 6),
      Math.ceil(Math.random() * 6),
    ];
    game.player2.dice = [
      Math.ceil(Math.random() * 6),
      Math.ceil(Math.random() * 6),
    ];

    document.getElementById(
      "player1dice1"
    ).src = `/img/dice${game.player1.dice[0]}.png`;
    document.getElementById(
      "player1dice2"
    ).src = `/img/dice${game.player1.dice[1]}.png`;
    document.getElementById(
      "player2dice1"
    ).src = `/img/dice${game.player2.dice[0]}.png`;
    document.getElementById(
      "player2dice2"
    ).src = `/img/dice${game.player2.dice[1]}.png`;

    game.player1.totalScore += calculateScore(
      game.player1.dice[0],
      game.player1.dice[1]
    );
    game.player2.totalScore += calculateScore(
      game.player2.dice[0],
      game.player2.dice[1]
    );

    document.getElementById(
      "player1total"
    ).innerText = `Total score: ${game.player1.totalScore}`;
    document.getElementById(
      "player2total"
    ).innerText = `Total score: ${game.player2.totalScore}`;
    roundsPlayed++;

    if (roundsPlayed == 3) {
      if (game.player1.totalScore > game.player2.totalScore) {
        document.getElementById("result").innerText = "You Win!";
      } else if (game.player2.totalScore > game.player1.totalScore) {
        document.getElementById("result").innerText = "You Lose!";
      } else {
        document.getElementById("result").innerText = "It's a Draw!";
      }

      document.getElementById("playAgain").style.display = "block";
      document.getElementById("rollDice").style.display = "none";
    }
  }

  // After a short delay, remove the animation class
  setTimeout(function () {
    rollButton.classList.remove("animate");
  }, 200); // Same as animation duration
}

function calculateScore(die1, die2) {
  if (die1 == 1 || die2 == 1) {
    return 0;
  } else if (die1 == die2) {
    return (die1 + die2) * 2;
  } else {
    return die1 + die2;
  }
}

function resetGame() {
  game.player1.totalScore = 0;
  game.player2.totalScore = 0;
  game.player1.dice = [1, 1];
  game.player2.dice = [1, 1];
  roundsPlayed = 0;

  document.getElementById("player1dice1").src = "/img/dice1.png";
  document.getElementById("player1dice2").src = "/img/dice1.png";
  document.getElementById("player2dice1").src = "/img/dice1.png";
  document.getElementById("player2dice2").src = "/img/dice1.png";

  document.getElementById("player1total").innerText = "";
  document.getElementById("player2total").innerText = "";
  document.getElementById("result").innerText = "";

  document.getElementById("playAgain").style.display = "none";
  document.getElementById("rollDice").style.display = "block";
}
