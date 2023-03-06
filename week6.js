// Coding Steps:
// For the final unit project you will be creating an automated version of the classic card game WAR!
// There are many versions of the game WAR. In this version there are only 2 players.
// You do not need to do anything special when there is a tie in a round.
// Think about how you would build this project and write your plan down.
// Consider classes such as: Card, Deck, Player, as well as what properties and methods they may include.
// You do not need to accept any user input, when you run your code,
// the entire game should play out instantly without any user input inside of your browser’s console.
// The completed project should, when executed, do the following:
// Deal 26 Cards to each Player from a Deck of 52 cards.
// Iterate through the turns where each Player plays a Card.

// console.log(Array.from(Array(52)).map((element,index) => index +1))
// Array.from() we make an array of 52 elements, using map to increment
// this will be our deck of cards/inital array

// old deck, XD 
// let deck = Array.from(Array(52)).map((element,index) => index +1)
// console.log("Deck of cards: ", deck)

let suit = Array.from(Array(13)).map((element, index) => index + 1);
let deck = suit.concat(suit, suit, suit);
console.log("Deck of cards: ", deck);

let shuffle = [...deck].sort(() => Math.random() - 0.5);
console.log("Shuffled deck... ", shuffle);
// Math.random gives you a random number
// sort() changes the  o.g array.
// which is why I'm using the spread operator with deck ([...deck]) this allows sort to create
// a shallow copy of the o.g arry and doesn't mutate it.
// The .5 is necessary as it represents the arrays length. 1 = the whole range that we are sortinhg 
// so it won't randomoize, while lower numbers, such as .1 only sort a small amount of the numbers. 
// (there is also a positive and a negative aspect but that relates to if the sort is ascending or descending)
// Think of it as folding paper and the fold line is where the random sorting is.
// If it folds at .5 (halfway) the whole array is random sorted. If its only the corner, .1, 
// then only the corner gets random sorted. If its the whole paper, 1, then there is no fold and nothing
// gets random sorted, it just sorts the whole array in descending order.
// Laurence Svekis, https://www.youtube.com/watch?v=gi5E3xre7tw
// explains the -.5

// console.log(n.slice(2, 4));
// we'll use slice to make our hand arrays from the deck array,
// this doesn't change the deck array
let handOne = shuffle.slice(0, 26);
let handTwo = shuffle.slice(26, 52);
console.log("Hand one: ", handOne);
console.log("Hand two: ", handTwo);

// var n = [1, 2, 3, 5, 7, 8, 9, 11, 12, 13, 14, 16, 17, 18, 20, 21, 22];
// var m = [0, 1, 2, 3, 4, 5, 6, 7,  8,  9,  10, 11, 12, 13, 14, 15, 16];
// n.forEach((num1, index) => {
//   const num2 = m[index]; //in each iteration we access the index of arr m
//   console.log(num1, num2 );
// });    -Stackoverflow
let war = (handOne, handTwo) => {
  let playerOneScore = 0;
  let playerTwoScore = 0;

  console.log("War never changes...")

  handOne.forEach((card, index) => {
    const cardTwo = handTwo[index];

    if (card === cardTwo) {
      console.log("Tie, no points scored.");
    } else if (card === 1) {
      console.log(`Player One Played: ${card}. Player Two Played: ${cardTwo}. Aces wins this round. Point to Player One.`);
      playerOneScore++;
    } else if (cardTwo === 1) {
      console.log(`Player One Played: ${card}. Player Two Played: ${cardTwo}. Aces wins this round. Point to Player Two.`);
      playerTwoScore++;
    } else if (card > cardTwo && (card && cardTwo) != 1) {
      console.log(
        `Player One Played: ${card}. Player Two Played: ${cardTwo}. Player One Wins this round.`
      );
      playerOneScore++;
    } else if (cardTwo > card && (card && cardTwo) != 1) {
      console.log(
        `Player One Played: ${card}. Player Two Played: ${cardTwo}. Player Two Wins this round.`
      );
      playerTwoScore++;
    }
  });

  console.log("Final Scores: ", playerOneScore, playerTwoScore);

  if (playerOneScore > playerTwoScore) {
    console.log("Player One has won the war... but at what cost.");
  } else if (playerOneScore < playerTwoScore) {
    console.log("Player Two has won the war... but at what cost.");
  } else {
    console.log("No one wins in war...");
  }
};

war(handOne, handTwo);
