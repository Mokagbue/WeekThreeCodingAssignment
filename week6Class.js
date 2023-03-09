class War {
  constructor(handOne, handTwo, playerOneScore, playerTwoScore) {
    this.playerOneScore = 0;
    this.playerTwoScore = 0;
    this.handOne = handOne;
    this.handTwo = handTwo;
  }

  rounds(handOne, handTwo) {
    this.handOne.forEach((card, index) => {
      const cardTwo = this.handTwo[index];
      //console.log("showing hands", card, cardTwo)

      if (card == cardTwo) {
        console.log("Tie, no points scored.");
      } else if (card === 1) {
        console.log(`Aces wins this round. Point to Player One.`);
        this.playerOneScore++;
      } else if (cardTwo === 1) {
        console.log(`Aces wins this round. Point to Player Two.`);
        this.playerTwoScore++;
      } else if (card > cardTwo && (card && cardTwo) != 0) {
        console.log(
          `Player One Played: ${card}. Player Two Played: ${cardTwo}. Player One Wins this round.`
        );
        this.playerOneScore++;
      } else if (cardTwo > card && (card && cardTwo) != 0) {
        console.log(
          `Player One Played: ${card}. Player Two Played: ${cardTwo}. Player Two Wins this round.`
        );
        this.playerTwoScore++;
      }
    });
  }

  totals() {
    console.log("Final Scores: ", this.playerOneScore, this.playerTwoScore);

    if (this.playerOneScore > this.playerTwoScore) {
      console.log("Player One has won the war... but at what cost.");
    } else if (this.playerOneScore < this.playerTwoScore) {
      console.log("Player Two has won the war... but at what cost.");
    } else {
      console.log("No one wins in war...");
    }
  }

  playGame() {
    let gameRun = this.rounds();
    let scores = this.totals();
    return (console.log("Game return"), gameRun, scores)
    
  }
}

let suit = Array.from(Array(13)).map((element, index) => index + 1);
let deck = suit.concat(suit, suit, suit);
console.log("Deck of cards: ", deck);

let shuffle = [...deck].sort(() => Math.random() - 0.5);
console.log("Shuffled deck... ", shuffle);

let handOne = shuffle.slice(0, 26);
let handTwo = shuffle.slice(26, 52);
console.log("Hand one: ", handOne);
console.log("Hand two: ", handTwo);

let game = new War(handOne, handTwo);

game.playGame();
