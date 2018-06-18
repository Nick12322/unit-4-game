// create variables, storing points, points, point value for each gem, current points

// game logic, on click adds point to score

// reset game when won


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  };

//initial value for gem points set
var gemValueOne = getRandomInt(1, 12);
var gemValueTwo = getRandomInt(1, 12);
var gemValueThree = getRandomInt(1, 12);
var gemValueFour = getRandomInt(1, 12);

console.log(gemValueOne);
console.log(gemValueTwo);


//initial value for score to match
var scoreToGet = getRandomInt(19, 120);

$("#scoreToGet").text(scoreToGet);

// variables showing what the gems you've clicked have added up to, what your wins are, what your losses are
var currentScore = 0;

var wins = 0;

var losses = 0;


//Gems set as objects
var firstGem = {points: gemValueOne};
var secondGem = {points: gemValueTwo};
var thirdGem = {points: gemValueThree};
var fourthGem = {points: gemValueFour};

//resets gem point value after win or loss
function resetGems() {
    firstGem.points = "";
    secondGem.points = "";
    thirdGem.points = "";
    fourthGem.points = "";
    firstGem.points = getRandomInt(1, 12);
    secondGem.points = getRandomInt(1, 12);
    thirdGem.points = getRandomInt(1, 12);
    fourthGem.points = getRandomInt(1, 12);
};


//function to be called if youLose
function youLoseOrWin() {
    if (currentScore > scoreToGet) {
        alert("You lose!");
        losses++;
        currentScore = 0;
        scoreToGet = 0;
        scoreToGet = getRandomInt(19, 120);
        resetGems();
        $("#scoreToGet").text(scoreToGet);
        $("#losses").text(losses);
    }
    else if (currentScore == scoreToGet) {
        alert("You win!");
        wins++;
        currentScore = 0;
        scoreToGet = 0;
        scoreToGet = getRandomInt(19, 120);
        resetGems()
        $("#scoreToGet").text(scoreToGet);
        $("#wins").text(wins);
    };    
};

//Each gems logic

$("#firstGem").on("click", function(){
    var result = currentScore + firstGem.points;
    currentScore = result;
    $("#currentScore").text(currentScore);
    youLoseOrWin();
});

$("#secondGem").on("click", function() {
    var result = currentScore + secondGem.points;
    currentScore = result;
    $("#currentScore").text(currentScore);
    youLoseOrWin();
});

$("#thirdGem").on("click", function() {
    var result = currentScore + thirdGem.points;
    currentScore = result;
    $("#currentScore").text(currentScore);
    youLoseOrWin();
});

$("#fourthGem").on("click", function() {
    var result = currentScore + fourthGem.points;
    currentScore = result;
    $("#currentScore").text(currentScore);
    youLoseOrWin();
});






