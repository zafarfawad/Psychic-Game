var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
    "u", "v", "w", "x", "y", "z"
];

// var userGuess = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
// "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 10;

document.onkeyup = function (event) {

    var userGuess = event.key;

    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];



    if (userGuess === computerGuess) {
        wins++;
    } else {
        losses++;
        guessesLeft--;
    }



    var userValue = [];

    userValue.push(userGuess);
    console.log(userValue);

    if (guessesLeft === 0) {
        guessesLeft = 10;
        userValue = "";
    }

    var gameResults =

        "<p> Guess what Letter I am thinking of? : </p>" +
        "<p> Wins : " + wins + "</p>" +
        "<p> Losses : " + losses + "</p>" +
        "<p> Guesses Left : " + guessesLeft + "</p>" +
        "<p> Your Guesses So Far : " + userValue + "</p>";


    document.getElementById("game").innerHTML = gameResults;

    // losses.innerHTML  = losses;
    //  document.getElementById("wins").innerHML = losses;

    //  document.getElementById("your-guesses-so-far").innerHTML = losses;


};