// All Possible Choices for Computer
let computerPossibleGuesses = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
// Selects a Random Letter
let computerGuess =
  computerPossibleGuesses[
    Math.floor(Math.random() * computerPossibleGuesses.length)
  ];

// Sets Games Starting Values
let userRemainingGuesses = 9;
let userWrongGuess = [];
let wins = 0;
let losses = 0;

// Grabs the elements where information will be displayed
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var guessesLeftText = document.getElementById("guesses");
var userGuessesText = document.getElementById("myguesses");

// Game starts when user presses a key
window.onkeyup = function (e) {
  // grabs the key that the users presses and stores it in a variable
  let userGuess = e.key;

  // checks to see if the user guessed correctly
  if (userGuess == computerGuess) {
    // if user selected correct they are alerted and told what letter they selected (just in case they forgot)
    // add 1 to wins total
    alert("You're Correct!", `Your Guess was ${userGuess}`);
    wins++;

    // resets game to start a new round
    userRemainingGuesses = 9;
    userWrongGuess = [];
    computerGuess =
      computerPossibleGuesses[
        Math.floor(Math.random() * computerPossibleGuesses.length)
      ];
  } else {
    // if user selected incorrect they are alerted and told what letter they selected (just to be reminded of their failure), the letter guessed by the user is displayed in the Your Guesses So Far Line on the page
    alert(
      `Incorrect, your guess was ${userGuess}. Please Select Another Letter`
    );
    userWrongGuess.push(userGuess);
    userRemainingGuesses--;

    if (userRemainingGuesses == 0) {
      // If the user runs out of guesses, they get 1 added to the lose total and the game is reset
      alert("You lost!");
      losses++;
      userRemainingGuesses = 9;
      userWrongGuess = [];
      computerGuess =
        computerPossibleGuesses[
          Math.floor(Math.random() * computerPossibleGuesses.length)
        ];
    }
  }
  // dynamically updates values on the page
  winsText.textContent = "Wins: " + wins;
  lossesText.textContent = "Losses: " + losses;
  guessesLeftText.textContent = "Remaining Guesses: " + userRemainingGuesses;
  userGuessesText.textContent = "Your Guesses So Far: " + userWrongGuess;
};
