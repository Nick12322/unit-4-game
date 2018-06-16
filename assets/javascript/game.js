// create variables, storing points, points, point value for each gem, current points

// game logic, on click adds point to score

// reset game when won


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }

var gemValueOne = getRandomInt(1, 12);
var gemValueTwo = getRandomInt(1, 12);
var gemValueThree = getRandomInt(1, 12);
var gemValueFour = getRandomInt(1, 12);

console.log(gemValueOne);
console.log(gemValueTwo);

var scoreToGet = getRandomInt(19, 120);



console.log(scoreToGet);

var currentScore = 0;

var firstGem = {points: gemValueOne}
var secondGem = {points: gemValueTwo}
var thirdGem = {points: gemValueThree}
var fourthGem = {points: gemValueFour}



console.log(currentScore);




$("#firstGem").on("click", function(){
    alert("I was clicked");
    var result = currentScore + firstGem.points;
    currentScore = result;
    console.log(currentScore);

})

$("#secondGem").on("click", function() {
    alert("I was clicked");
    var result = currentScore + secondGem.points;
    currentScore = result;
    console.log(currentScore)
})

$("#thirdGem").on("click", function() {
    var result = currentScore + thirdGem.points;
    currentScore = result;
    console.log(currentScore);
})

$("#fourthGem").on("click", function() {
    var result = currentScore + fourthGem.points;
    currentScore = result;
    console.log(currentScore);
})



