var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
    "u", "v", "w", "x", "y", "z"
];


var wins = 0;
var losses = 0;
var guessesLeft = 10;
var userValue = [];

function guess(existingChoices) {
    return existingChoices[Math.floor(Math.random() * existingChoices.length)];
}

function choice(userGuess) {
    userGuess = event.key;
    return userGuess;
}

document.onkeyup = function (event) {

    var userGuess = choice(userGuess);
    // var userGuess = event.key;
    var computerGuess = guess(computerChoices);

    userValue.push(userGuess);

    if (userGuess === computerGuess) {
        wins++;
        userValue = [];
        guessesLeft = 10;
    }

    else {
        guessesLeft--;
    }

    if (guessesLeft === 0) {
        losses++;
        guessesLeft = 10;
        userValue = [];
    }


    var gameResults =

        "<p> Guess what Letter I am thinking of? : </p>" +
        "<p> Wins : " + wins + "</p>" +
        "<p> Losses : " + losses + "</p>" +
        "<p> Guesses Left : " + guessesLeft + "</p>" +
        "<p> Your Guesses So Far : " + userValue + "</p>";


    document.getElementById("game").innerHTML = gameResults;


};
