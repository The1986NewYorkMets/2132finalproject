let player1TotalScore = 0;
let player2TotalScore = 0;
let roundsPlayed = 0;

function rollDice() {
  if (roundsPlayed < 3) {
    let player1Dice1 = Math.ceil(Math.random() * 6);
    let player1Dice2 = Math.ceil(Math.random() * 6);
    let player2Dice1 = Math.ceil(Math.random() * 6);
    let player2Dice2 = Math.ceil(Math.random() * 6);

    document.getElementById(
      "player1dice1"
    ).src = `/img/dice${player1Dice1}.png`;
    document.getElementById(
      "player1dice2"
    ).src = `/img/dice${player1Dice2}.png`;
    document.getElementById(
      "player2dice1"
    ).src = `/img/dice${player2Dice1}.png`;
    document.getElementById(
      "player2dice2"
    ).src = `/img/dice${player2Dice2}.png`;

    player1TotalScore += calculateScore(player1Dice1, player1Dice2);
    player2TotalScore += calculateScore(player2Dice1, player2Dice2);

    document.getElementById(
      "player1total"
    ).innerText = `Total score: ${player1TotalScore}`;
    document.getElementById(
      "player2total"
    ).innerText = `Total score: ${player2TotalScore}`;
    roundsPlayed++;

    if (roundsPlayed == 3) {
      if (player1TotalScore > player2TotalScore) {
        document.getElementById("result").innerText = "You Win!";
      } else if (player2TotalScore > player1TotalScore) {
        document.getElementById("result").innerText = "CPU Wins!";
      } else {
        document.getElementById("result").innerText = "It's a Draw!";
      }

      //after winner is declared, prints a "play again?" button
      document.getElementById("playAgain").style.display = "block";
    }
  }
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
  player1TotalScore = 0;
  player2TotalScore = 0;
  roundsPlayed = 0;

  document.getElementById("player1dice1").src = "/img/dice1.png";
  document.getElementById("player1dice2").src = "/img/dice1.png";
  document.getElementById("player2dice1").src = "/img/dice1.png";
  document.getElementById("player2dice2").src = "/img/dice1.png";

  document.getElementById("player1total").innerText = "";
  document.getElementById("player2total").innerText = "";
  document.getElementById("result").innerText = "";

  // hide "play again?" button
  document.getElementById("playAgain").style.display = "none";
}
